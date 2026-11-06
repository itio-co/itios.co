import { ArrowLeft, ArrowUpRight, ChevronRight, ExternalLink } from 'lucide-react';
import { portfolioSource, productPath, productsBySlug } from '../data/productCatalog';
import ProductConcept from './ProductConcept';

const focus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400';

export default function ProductPage({ product }) {
  const parent = productsBySlug[product.parent];
  return (
    <>
      <a href="#product-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:bg-gray-900 focus:p-4">Skip to content</a>
      <header className="border-b border-white/10 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between gap-6">
          <a href="/" aria-label="ITIO home" className={`text-2xl font-bold tracking-tight text-white ${focus}`}>ITIӦ<span className="text-blue-400">.</span></a>
          <a href="/#product-families" className={`inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white ${focus}`}><ArrowLeft aria-hidden="true" size={16} /> All products</a>
        </div>
      </header>
      <main id="product-content">
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950/50 border-b border-white/10">
          <div aria-hidden="true" className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="relative max-w-6xl mx-auto px-6 pt-8 pb-14 md:pb-20">
            <nav aria-label="Breadcrumb" className="mb-12">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-3 text-sm text-gray-400">
                <li><a href="/#product-families" className={`hover:text-white ${focus}`}>Products</a></li>
                {parent && <li className="flex items-center gap-2"><ChevronRight aria-hidden="true" size={14} /><a href={productPath(parent.slug)} className={`hover:text-white ${focus}`}>{parent.name}</a></li>}
                <li className="flex items-center gap-2 text-gray-200" aria-current="page"><ChevronRight aria-hidden="true" size={14} />{product.name}</li>
              </ol>
            </nav>
            <div className="grid lg:grid-cols-[1.05fr_1fr] items-center gap-10 lg:gap-12">
              <div className="max-w-3xl min-w-0">
                <p className="text-xs tracking-widest uppercase font-semibold text-blue-300 mb-4">{product.kind}</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5">{product.name}</h1>
                <p className="text-xl sm:text-2xl text-blue-200 mb-5">{product.semanticName}</p>
                <p className="max-w-2xl text-lg text-gray-300 leading-relaxed">{product.description || product.overview.split('. ')[0] + '.'}</p>
              </div>
              <ProductConcept product={product} />
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            <div className="lg:col-span-2 space-y-12">
              <section aria-labelledby="overview-title">
                <h2 id="overview-title" className="text-2xl font-semibold text-white mb-5">What is {product.name}?</h2>
                <p className="text-gray-300 leading-8">{product.overview}</p>
              </section>
              <section aria-labelledby="responsibilities-title">
                <h2 id="responsibilities-title" className="text-2xl font-semibold text-white mb-5">What it is designed to do</h2>
                <ul className="space-y-4">
                  {product.responsibilities.map((item, index) => <li key={item} className="flex gap-4 text-gray-300 leading-relaxed"><span aria-hidden="true" className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-blue-400/20 text-xs text-blue-300">{String(index + 1).padStart(2, '0')}</span><span>{item}</span></li>)}
                </ul>
              </section>
              {product.example && <section className="border-l-2 border-blue-400 pl-6" aria-labelledby="example-title">
                <p className="text-xs uppercase tracking-widest font-semibold text-blue-300 mb-2">Illustrative use case</p>
                <h2 id="example-title" className="text-xl font-semibold text-white mb-3">How it could fit into your work</h2>
                <p className="text-gray-300 leading-7">{product.example}</p>
                <p className="text-xs text-gray-400 mt-4">An example of the intended role, not a claim of a released workflow.</p>
              </section>}
            </div>
            <aside className="space-y-5">
              <section className="rounded-2xl border border-amber-300/20 bg-amber-300/5 p-6" aria-labelledby="status-title">
                <p className="text-xs uppercase font-semibold tracking-widest text-amber-200 mb-3">{product.statusLabel || 'Product direction'}</p>
                <h2 id="status-title" className="text-lg font-semibold text-white mb-3">Current scope & status</h2>
                <p className="text-sm text-gray-300 leading-7">{product.status}</p>
              </section>
              <section className="rounded-2xl border border-white/10 p-6">
                <h2 className="text-lg font-semibold text-white mb-3">Explore the design</h2>
                <p className="text-sm text-gray-400 leading-6 mb-5">The portfolio records naming and boundaries. Product repositories remain the source for engineering and release status.</p>
                <a href={product.source || portfolioSource} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white ${focus}`}>Read the documentation <ExternalLink size={15} aria-hidden="true" /></a>
                {product.references && <ul className="mt-4 space-y-4">{product.references.map((reference) => <li key={reference.url}><a href={reference.url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-start gap-2 text-sm leading-6 text-blue-300 hover:text-white ${focus}`}>{reference.label}<ExternalLink size={15} aria-hidden="true" className="shrink-0 mt-1" /></a></li>)}</ul>}
                {product.url && <a href={product.url} target="_blank" rel="noopener noreferrer" className={`mt-4 flex items-center gap-2 text-sm text-blue-300 hover:text-white ${focus}`}>Visit {product.name} <ExternalLink size={15} aria-hidden="true" /></a>}
              </section>
            </aside>
          </div>

          {product.items && <section className="mt-16 pt-12 border-t border-white/10" aria-labelledby="inside-title">
            <h2 id="inside-title" className="text-2xl font-semibold text-white mb-3">{product.itemsTitle || `Inside ${product.name}`}</h2>
            <p className="text-gray-400 mb-7">{product.itemsDescription || 'Explore the products, experiences and responsibilities in this part of the ecosystem.'}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.items.map((item) => item.slug
                ? <a key={item.name} href={productPath(item.slug)} className={`group rounded-xl border border-gray-700/60 bg-gray-800/30 p-6 hover:border-blue-400/50 hover:bg-gray-800/60 transition-colors ${focus}`}><h3 className="flex items-center justify-between gap-3 font-semibold text-white mb-2">{item.name}<ArrowUpRight aria-hidden="true" size={18} className="text-blue-300 shrink-0" /></h3><p className="text-sm text-blue-300 mb-3">{item.semanticName || item.purpose}</p><p className="text-sm leading-6 text-gray-400">{item.description}</p></a>
                : <div key={item.name} className="rounded-xl border border-gray-700/60 bg-gray-800/30 p-6"><h3 className="font-semibold text-white mb-2">{item.name}</h3>{item.kind && <p className="text-xs uppercase tracking-widest text-blue-300 mb-3">{item.kind}</p>}<p className="text-sm leading-6 text-gray-400">{item.description}</p></div>)}
            </div>
          </section>}

          <section className="mt-16 pt-12 border-t border-white/10" aria-labelledby="related-title">
            <h2 id="related-title" className="text-2xl font-semibold text-white mb-6">How it connects</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {product.related.map((slug) => productsBySlug[slug]).map((item) => <a key={item.slug} href={productPath(item.slug)} className={`flex items-center justify-between gap-4 border border-gray-700/60 rounded-xl px-5 py-4 hover:border-blue-400/50 transition-colors ${focus}`}><span><span className="block font-semibold text-gray-200">{item.name}</span><span className="block mt-1 text-sm text-gray-400">{item.semanticName}</span></span><ArrowUpRight aria-hidden="true" className="shrink-0 text-blue-300" size={19} /></a>)}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
