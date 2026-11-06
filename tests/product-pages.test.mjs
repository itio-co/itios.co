import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { productPages, productsBySlug, productPath, pageForPath } from '../src/data/productCatalog.js';
import { kidoCodeFoundations, kidoFamilies } from '../src/data/productFamilies.js';
import { productConcepts } from '../src/data/productConcepts.js';

test('every named product and family has complete, unique explanatory content', () => {
  assert.equal(productPages.length, 36);
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

test('Omicron explanations preserve the Kido engineering mode contracts', () => {
  const chat = productsBySlug['kido-chat'];
  const code = productsBySlug['kido-code'];
  const bot = productsBySlug['kido-bot'];
  assert.match(chat.overview, /tool-free/);
  assert.match(chat.status, /no tools/);
  assert.match(chat.overview, /Profile/);
  assert.match(code.overview, /everything-as-code/);
  assert.match(code.overview, /Brain, branch and worktree/);
  assert.match(code.overview, /not the name of the client/);
  assert.match(bot.overview, /enrolled Profile.*trigger.*target Room/);
  assert.match(bot.overview, /not a Workflow/);
  assert.match(bot.overview, /speaks first.*NPC/);
  assert.match(bot.status, /managed, prompted Room turns.*later enrolled Kido Bot/);
  assert.match(bot.status, /never merges without instruction/);
  assert.match(productsBySlug['kido-cowork'].status, /connector tools → docs/);
  assert.match(productsBySlug['kido-design'].status, /cowork \+ design tools/);
  assert.match(productsBySlug['kido-cli'].overview, /terminal and on the web/);
  assert.match(productsBySlug['kido-omicron'].overview, /not separate engines/);
  for (const product of [chat, code, bot]) {
    assert.equal(product.source, 'https://github.com/itio-co/kido/blob/main/docs/design/CONTEXT.md');
    assert.ok(product.references.length >= 1);
  }
});

test('Brain and Skill are shared Code foundations, not additional workspace modes', () => {
  const slugs = ['kido-brain', 'kido-skill'];
  assert.deepEqual(kidoCodeFoundations.map((item) => item.slug), slugs);
  assert.equal(productsBySlug['kido-code'].items, kidoCodeFoundations);
  const modes = kidoFamilies.find((family) => family.slug === 'kido-omicron').capabilities.map((mode) => mode.slug);
  for (const slug of slugs) {
    assert.equal(productsBySlug[slug].parent, 'kido-code');
    assert.ok(!modes.includes(slug));
    assert.ok(productsBySlug[slug].source.startsWith('https://github.com/itio-co/kido/'));
    assert.ok(productsBySlug[slug].related.includes('kido-code'));
  }
  assert.match(productsBySlug['kido-brain'].overview, /versioned Markdown folder/);
  assert.match(productsBySlug['kido-brain'].status, /not an entire Knowledge Graph/);
  assert.match(productsBySlug['kido-skill'].overview, /supporting skills.*skill bundle/);
  assert.match(productsBySlug['kido-skill'].status, /skill supplies procedure.*Kido OS runs declared Workflows/);
});

test('every page has distinct, accessible, self-contained concept line art', async () => {
  assert.deepEqual(Object.keys(productConcepts).sort(), productPages.map((product) => product.slug).sort());
  const drawings = new Set();
  const titles = new Set();
  for (const product of productPages) {
    const concept = productConcepts[product.slug];
    assert.equal(concept.labels.length, 3, product.slug);
    assert.ok(concept.description.length > 90, product.slug);
    assert.ok(!titles.has(concept.title), `Duplicate concept title: ${product.slug}`);
    titles.add(concept.title);
    const html = await readFile(`dist${productPath(product.slug)}index.html`, 'utf8');
    assert.equal((html.match(/data-concept="/g) || []).length, 1, product.slug);
    assert.ok(html.includes(`data-concept="${product.slug}"`));
    const svg = html.match(/<svg viewBox="0 0 600 360".*?<\/svg>/s)?.[0];
    assert.ok(svg, `Missing SVG: ${product.slug}`);
    assert.ok(svg.includes('role="img"'));
    const id = `concept-${product.slug}`;
    assert.ok(svg.includes(`aria-labelledby="${id}-title ${id}-description"`));
    assert.ok(svg.replace(/<!--.*?-->/g, '').includes(`<title id="${id}-title">${product.name}:`));
    assert.ok(svg.includes(`<desc id="${id}-description">`));
    assert.ok(svg.includes('not a released architecture or deployment diagram'));
    assert.ok(!/<image\b|https?:|NaN|undefined/.test(svg), product.slug);
    // Compare geometry, not the unique IDs, labels or descriptions.
    const geometry = [...svg.matchAll(/<(?:path|rect|circle)\b[^>]*>/g)].map((match) => match[0].replace(/concept-[a-z-]+/g, 'concept')).join('');
    assert.ok(!drawings.has(geometry), `Duplicate drawing: ${product.slug}`);
    drawings.add(geometry);
    assert.ok(html.includes('Conceptual illustration. See current scope &amp; status below.'));
  }
});

test('concept art preserves important product boundaries', () => {
  assert.match(productConcepts['kido-chat'].description, /tool connections are deliberately absent/);
  assert.match(productConcepts['kido-brain'].description, /one unit of work, not an entire knowledge graph/);
  assert.match(productConcepts['kido-skill'].description, /not an execution engine/);
  assert.match(productConcepts['kido-bot'].description, /No autonomous schedule/);
  assert.match(productConcepts['kido-code'].description, /human approval, not an automatic merge/);
  assert.match(productConcepts['kido-omicron'].description, /not five independent execution engines/);
  assert.match(productConcepts['itio-nu'].description, /Itio-wide/);
  assert.match(productConcepts.omega.description, /without implying a runtime stack/);
});

test('landscape covers the exact catalog without inventing products or families', async () => {
  const { landscapeSlugs, landscapeGroups, landscapeRelationships } = await import('../src/data/productLandscape.js');
  assert.deepEqual([...landscapeSlugs].sort(), productPages.map((product) => product.slug).sort());
  assert.equal(new Set(landscapeSlugs).size, productPages.length);
  assert.equal(landscapeGroups.filter((group) => group.slug.startsWith('kido-')).length, 6);
  const omicron = landscapeGroups.find((group) => group.slug === 'kido-omicron');
  assert.deepEqual(omicron.foundations, ['kido-brain', 'kido-skill']);
  assert.ok(!omicron.children.includes('kido-brain'));
  for (const relationship of landscapeRelationships) {
    assert.ok(relationship.source.startsWith('https://github.com/itio-co/'));
    for (const slug of relationship.slugs) assert.ok(productsBySlug[slug]);
    assert.ok(['Product direction', 'Documented contract', 'Documented boundary'].includes(relationship.type));
  }
});

test('landscape search matches names and semantic roles and preserves family context', async () => {
  const { landscapeGroups, matchesLandscapeProduct, visibleLandscapeGroup } = await import('../src/data/productLandscape.js');
  assert.ok(matchesLandscapeProduct('kido-gnosis', '  KNOWLEDGE  '));
  assert.ok(matchesLandscapeProduct('kido-loom', 'domain studio'));
  assert.ok(matchesLandscapeProduct('kido-brain', 'brain'));
  assert.ok(!matchesLandscapeProduct('kido-chat', 'graph federation'));
  assert.ok(visibleLandscapeGroup(landscapeGroups.find((group) => group.slug === 'kido-omicron'), 'brain'));
  assert.ok(!landscapeGroups.some((group) => visibleLandscapeGroup(group, 'no-product-with-this-name')));
  for (const product of productPages) assert.ok(matchesLandscapeProduct(product.slug, ''));
});

test('landscape is a complete static direct-load page with metadata and all product links', async () => {
  const html = await readFile('dist/landscape/index.html', 'utf8');
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.ok(html.includes('Product Landscape | The Itio Ecosystem | ITIO'));
  assert.ok(html.includes('rel="canonical" href="https://itios.co/landscape/"'));
  assert.ok(html.includes('name="description"'));
  assert.ok(html.includes('aria-label="Map sections"'));
  assert.ok(html.includes('Find a product or role'));
  assert.ok(html.includes('not a seventh Kido family'));
  assert.ok(html.includes('not an integration promise'));
  assert.ok(html.includes('Chat has no tools'));
  assert.ok(html.includes('not a fixed runtime pipeline'));
  assert.ok(html.includes('nothing open depends on Enterprise'));
  assert.ok(!/undefined|NaN/.test(html));
  const slugs = [...html.matchAll(/data-landscape-product="([^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(slugs.sort(), productPages.map((product) => product.slug).sort());
  for (const [, href] of html.matchAll(/href="(\/products\/[^"#]+)"/g)) assert.ok(pageForPath(href), `Broken landscape link: ${href}`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, 'Duplicate DOM ID');
  for (const [, href] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(href), `Missing anchor: ${href}`);
  assert.ok((await readFile('dist/sitemap.xml', 'utf8')).includes('https://itios.co/landscape/'));
  for (const product of productPages) assert.ok((await readFile(`dist${productPath(product.slug)}index.html`, 'utf8')).includes('href="/landscape/"'));
});
