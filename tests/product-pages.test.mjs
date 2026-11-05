import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { productPages, productsBySlug, productPath, pageForPath } from '../src/data/productCatalog.js';

test('every named product and family has complete, unique explanatory content', () => {
  assert.equal(productPages.length, 34);
  assert.equal(new Set(productPages.map((product) => product.slug)).size, productPages.length);
  for (const product of productPages) {
    for (const field of ['name', 'slug', 'semanticName', 'kind', 'overview', 'status']) assert.ok(product[field], `${product.slug}: missing ${field}`);
    assert.equal(product.responsibilities.length, 3, product.slug);
    assert.ok(product.overview.length > 120, product.slug);
    assert.ok(product.status.length > 100, product.slug);
    assert.ok(product.related.length >= 2, product.slug);
    for (const related of product.related) assert.ok(productsBySlug[related], `${product.slug}: missing related ${related}`);
    if (product.parent) assert.ok(productsBySlug[product.parent]);
    for (const item of product.items || []) if (item.slug) assert.ok(productsBySlug[item.slug]);
    assert.equal(pageForPath(productPath(product.slug)), product);
    assert.equal(pageForPath(productPath(product.slug).slice(0, -1)), product);
  }
  assert.equal(pageForPath('/products/unknown/'), undefined);
  assert.equal(pageForPath('/other/kido-orbit/'), undefined);
});

test('production has static pages, unique metadata, content and no broken product links', async () => {
  const titles = new Set();
  for (const product of productPages) {
    const html = await readFile(`dist${productPath(product.slug)}index.html`, 'utf8');
    const title = html.match(/<title>(.*?)<\/title>/)[1];
    assert.ok(!titles.has(title), `Duplicate title: ${title}`);
    titles.add(title);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, product.slug);
    assert.ok(html.includes('Current scope &amp; status'), product.slug);
    assert.ok(html.includes(`rel="canonical" href="https://itios.co${productPath(product.slug)}"`), product.slug);
    assert.ok(html.includes('name="description"'), product.slug);
    assert.ok(!html.includes('undefined'), product.slug);
    for (const [, href] of html.matchAll(/href="(\/products\/[^"#]+)"/g)) assert.ok(pageForPath(href), `${product.slug}: broken ${href}`);
  }
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  for (const product of productPages) assert.ok(sitemap.includes(`https://itios.co${productPath(product.slug)}`));
  assert.ok((await readFile('dist/404.html', 'utf8')).includes('Page not found'));
  assert.ok((await readFile('dist/robots.txt', 'utf8')).includes('https://itios.co/sitemap.xml'));
  assert.equal((await readFile('dist/CNAME', 'utf8')).trim(), 'itios.co');
});

test('portfolio boundaries remain explicit', () => {
  assert.equal(productsBySlug['itio-nu'].kind, 'Itio-wide pillar');
  for (const slug of ['kido-orbit', 'kido-gnosis', 'kido-grove', 'kido-nous']) {
    assert.ok(productsBySlug[slug].name.startsWith('Kido '));
    assert.equal(productsBySlug[slug].parent, 'itio-nu');
  }
  assert.equal(productsBySlug['kido-os'].parent, 'kido-kappa');
  assert.equal(productsBySlug['omega-os'].parent, 'omega');
  assert.ok(!productsBySlug['community'] && !productsBySlug['enterprise']);
  assert.match(productsBySlug['kido-orbit'].overview, /category theory/i);
});
