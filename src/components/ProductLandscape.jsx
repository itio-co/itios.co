import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Search, X, Network, ExternalLink } from 'lucide-react';
import { productsBySlug, productPages, productPath } from '../data/productCatalog';
import { landscapeGroups, landscapeRelationships, matchesLandscapeProduct, visibleLandscapeGroup } from '../data/productLandscape';
import './ProductLandscape.css';

function ProductNode({ slug, compact = false }) {
  const product = productsBySlug[slug];
  return <a className={`landscape-node${compact ? ' landscape-node-compact' : ''}`} href={productPath(slug)} data-landscape-product={slug}>
    <span className="landscape-node-title">{product.name}<ArrowUpRight size={14} aria-hidden="true" /></span>
    <span className="landscape-node-role">{product.semanticName}</span>
    {product.statusLabel && <span className="landscape-node-status">{product.statusLabel}</span>}
  </a>;
}

function ProductGroup({ group, query = '' }) {
  const product = productsBySlug[group.slug];
  if (!visibleLandscapeGroup(group, query)) return null;
  const showAll = matchesLandscapeProduct(group.slug, query);
  const visible = (slug) => showAll || matchesLandscapeProduct(slug, query);
  const children = group.children.filter(visible);
  const foundations = (group.foundations || []).filter(visible);
  return <article className={`landscape-group landscape-tone-${group.tone}`} id={`map-${group.slug}`}>
    <div className="landscape-group-heading">
      <span className="landscape-letter" aria-hidden="true">{product.letter || (group.slug === 'omega' ? 'Ω' : '↗')}</span>
      <div><p className="landscape-kicker">{product.kind}</p><h3><a href={productPath(product.slug)} data-landscape-product={product.slug}>{product.name}<ArrowUpRight size={16} aria-hidden="true" /></a></h3></div>
    </div>
    <p className="landscape-purpose">{product.semanticName}</p>
    {children.length > 0 && <div className="landscape-nodes">{children.map((slug) => <ProductNode key={slug} slug={slug} />)}</div>}
    {showAll && group.capabilities?.length > 0 && <div className="landscape-capabilities">{group.capabilities.map((item) => <p key={item.name}><strong>{item.name}</strong><span>{item.kind ? `${item.kind} · ` : ''}{item.description}</span></p>)}</div>}
    {foundations.length > 0 && <div className="landscape-foundations"><p className="landscape-kicker">Supporting Kido Code</p><p className="landscape-foundation-caption">Workflow foundations, not extra modes.</p>{foundations.map((slug) => <ProductNode key={slug} slug={slug} compact />)}</div>}
    {group.slug === 'kido-omicron' && <p className="landscape-group-note">Shared presets, not separate engines. Chat has no tools.</p>}
    {group.slug === 'itio-nu' && <p className="landscape-group-note">An Itio-wide pillar, not a seventh Kido family. Shared-service boundaries and integrations remain design work.</p>}
    {group.slug === 'kido-kappa' && <p className="landscape-group-note">CLI spans families. Kido OS is distinct from Omega OS.</p>}
  </article>;
}

export default function ProductLandscape() {
  const [query, setQuery] = useState('');
  const kidoGroups = landscapeGroups.filter((group) => group.slug.startsWith('kido-'));
  const nu = landscapeGroups.find((group) => group.slug === 'itio-nu');
  const wider = landscapeGroups.filter((group) => !group.slug.startsWith('kido-') && group.slug !== 'itio-nu');
  const matchingCount = productPages.filter((product) => matchesLandscapeProduct(product.slug, query)).length;
  const showKido = matchesLandscapeProduct('kido', query);
  const familyQuery = showKido ? '' : query;
  const hasKido = showKido || kidoGroups.some((group) => visibleLandscapeGroup(group, query));
  const hasWider = wider.some((group) => visibleLandscapeGroup(group, query)) || matchesLandscapeProduct('itio-space', query);
  return <div className="product-landscape">
    <a className="landscape-skip" href="#landscape-content">Skip to product landscape</a>
    <header className="landscape-header"><div className="landscape-wrap landscape-header-inner">
      <a href="/" className="landscape-brand" aria-label="ITIO home">ITIӦ<span>.</span></a>
      <nav aria-label="Landscape navigation"><a href="/#product-families"><ArrowLeft size={15} aria-hidden="true" />Product overview</a><a href="#relationships">How they connect<Network size={16} aria-hidden="true" /></a></nav>
    </div></header>
    <main id="landscape-content" className="landscape-wrap">
      <section className="landscape-intro" aria-labelledby="landscape-title">
        <div><p className="landscape-eyebrow">ITIO / Product atlas</p><h1 id="landscape-title">One ecosystem.<br /><span>Every product.</span></h1>
          <p className="landscape-intro-copy">The complete product landscape, from the tools people use to the foundations behind them. Choose any name to explore its role.</p></div>
        <div className="landscape-key"><p className="landscape-kicker">How to read the map</p><p>Boundaries show <strong>product groupings</strong>, not a deployment stack.</p><p><span className="landscape-key-line" />Product direction and intended roles</p><p><span className="landscape-key-dot" />Documented mode or workflow contract</p><p className="landscape-key-disclaimer">Neither means released or universally available. Each product page records its scope and status.</p></div>
      </section>
      <div className="landscape-toolbar">
        <nav aria-label="Map sections"><a href="#kido-landscape" onClick={() => setQuery('')}>Kido <span>6 families</span></a><a href="#nu-landscape" onClick={() => setQuery('')}>Itio Nu <span>Across Itio</span></a><a href="#wider-landscape" onClick={() => setQuery('')}>Wider portfolio</a></nav>
        <div className="landscape-search"><Search size={17} aria-hidden="true" /><label className="sr-only" htmlFor="landscape-search">Find a product or role</label><input id="landscape-search" type="search" placeholder="Find a product or role…" value={query} onChange={(event) => setQuery(event.target.value)} />{query && <button type="button" onClick={() => setQuery('')} aria-label="Clear product search"><X size={16} aria-hidden="true" /></button>}</div>
      </div>
      <p className="landscape-count" role="status" aria-live="polite">{query.trim() ? `${matchingCount} matching ${matchingCount === 1 ? 'entry' : 'entries'} · Groups are kept for context` : `All ${productPages.length} product, family and foundation pages · One connected portfolio`}</p>
      {matchingCount === 0 && <div className="landscape-empty"><h2>No matching products</h2><p>Try a name like “Gnosis” or a role like “knowledge”.</p><button type="button" onClick={() => setQuery('')}>Show the full landscape</button></div>}
      <div className="landscape-main-map">
        {hasKido && <section className="landscape-kido" id="kido-landscape" aria-labelledby="kido-landscape-title">
          <div className="landscape-section-heading"><div><p className="landscape-kicker">Augmented-intelligence product ecosystem</p><h2 id="kido-landscape-title"><a href={productPath('kido')} data-landscape-product="kido">Kido<ArrowUpRight size={20} aria-hidden="true" /></a></h2></div><span className="landscape-section-meta">Six complementary families</span></div>
          <div className={`landscape-family-grid${query.trim() ? ' is-filtered' : ''}`}>{kidoGroups.map((group) => <ProductGroup key={group.slug} group={group} query={familyQuery} />)}</div>
        </section>}
        {visibleLandscapeGroup(nu, query) && <section className="landscape-nu" id="nu-landscape" aria-label="Itio-wide knowledge and intelligence"><p className="landscape-side-label">Across the Itio ecosystem</p><ProductGroup group={nu} query={query} /></section>}
      </div>
      {hasWider && <section className="landscape-wider" id="wider-landscape" aria-labelledby="wider-landscape-title">
        <div className="landscape-section-heading"><div><p className="landscape-kicker">Independent identities, a shared vision</p><h2 id="wider-landscape-title">The wider Itio portfolio</h2></div><p className="landscape-section-meta">Not an underlying Kido runtime stack</p></div>
        <div className="landscape-wider-grid">{wider.map((group) => <ProductGroup key={group.slug} group={group} query={query} />)}</div>
        {matchesLandscapeProduct('itio-space', query) && <div className="landscape-portal"><span className="landscape-portal-label">The front door</span><ProductNode slug="itio-space" compact /><p>A portal into the ecosystem, not a product family or execution layer.</p></div>}
      </section>}
      <section className="landscape-relationships" id="relationships" aria-labelledby="relationships-title">
        <div className="landscape-section-heading"><div><p className="landscape-eyebrow">Follow the connections</p><h2 id="relationships-title">How the pieces fit</h2></div><p className="landscape-section-meta">Documented relationships, with their boundaries.</p></div>
        <div className="landscape-relationship-grid">{landscapeRelationships.map((relationship) => <article key={relationship.id} className="landscape-relationship" id={relationship.id}>
          <div className="landscape-relationship-label"><span>{relationship.label}</span><span className={relationship.type === 'Product direction' ? '' : 'is-documented'}>{relationship.type}</span></div>
          <div className="landscape-chain" aria-label="Related products">{relationship.slugs.map((slug, index) => <span key={slug}>{index > 0 && <span className="landscape-connector" aria-hidden="true">{relationship.connector}</span>}<a href={productPath(slug)}>{productsBySlug[slug].name.replace(/^Kido /, '')}</a></span>)}</div>
          <h3>{relationship.title}</h3><p>{relationship.description}</p><a className="landscape-source" href={relationship.source} target="_blank" rel="noopener noreferrer">Read the source<ExternalLink size={13} aria-hidden="true" /></a>
        </article>)}</div>
      </section>
      <aside className="landscape-boundaries" aria-labelledby="landscape-boundaries-title"><div><p className="landscape-kicker">Still to be designed</p><h2 id="landscape-boundaries-title">A product map, not an integration promise.</h2></div><p>Design’s connection to Weave and Loom, Fabric’s relationship with Omicron, Nu’s shared-service contracts, and integrations between Yai, Omega and Kido remain open. Brain is a working record, not Gnosis or an entire knowledge graph.</p><a href="https://github.com/itio-co/itios.co/blob/main/docs/portfolio/kido.md#boundaries-to-resolve" target="_blank" rel="noopener noreferrer">Read the portfolio boundaries<ArrowUpRight size={16} aria-hidden="true" /></a></aside>
    </main>
  </div>;
}
