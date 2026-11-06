import { build } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { productPages, productPath } from '../src/data/productCatalog.js';
import { landscapePath } from '../src/data/productLandscape.js';

const temporaryDirectory = resolve('.prerender');
const origin = 'https://itios.co';
const escape = (value) => value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));

try {
  await build({
    configFile: false,
    plugins: [react()],
    build: { ssr: 'src/entry-server.jsx', outDir: temporaryDirectory, emptyOutDir: true },
  });
  const { renderPage } = await import(pathToFileURL(resolve(temporaryDirectory, 'entry-server.js')).href);
  const template = await readFile('dist/index.html', 'utf8');
  const pages = [
    ...productPages.map((product) => ({ path: productPath(product.slug), title: `${product.name} | ${product.semanticName} | ITIO`, description: product.description || product.overview.split('. ')[0] + '.' })),
    { path: landscapePath, title: 'Product Landscape | The Itio Ecosystem | ITIO', description: 'Explore every Itio product, family and foundation in one visual landscape, with documented relationships, product roles and links to current scope and status.' },
  ];
  for (const { path, title, description } of pages) {
    const html = template
      .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
      .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escape(description)}" />`)
      .replace('</head>', `  <link rel="canonical" href="${origin}${path}" />\n    <meta property="og:title" content="${escape(title)}" />\n    <meta property="og:description" content="${escape(description)}" />\n    <meta property="og:url" content="${origin}${path}" />\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${renderPage(path)}</div>`);
    await mkdir(`dist${path}`, { recursive: true });
    await writeFile(`dist${path}index.html`, html);
  }
  await writeFile('dist/404.html', template.replace(/<title>.*?<\/title>/, '<title>Page not found | ITIO</title>').replace('</head>', '<meta name="robots" content="noindex" /></head>').replace('<div id="root"></div>', `<div id="root">${renderPage('/404')}</div>`));
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${['/', ...pages.map((page) => page.path)].map((path) => `  <url><loc>${origin}${path}</loc></url>`).join('\n')}\n</urlset>\n`);
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
  console.log(`Prerendered ${productPages.length} product pages and the product landscape with direct-load support, metadata and sitemap.`);
} finally {
  await rm(temporaryDirectory, { recursive: true, force: true });
}
