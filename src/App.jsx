import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Culture from './components/Culture';
import Strategies from './components/Strategies';
import Inspirations from './components/Inspirations';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';
import ProductLandscape from './components/ProductLandscape';
import { pageForPath } from './data/productCatalog';

function App({ path = window.location.pathname }) {
  if (path === '/landscape/' || path === '/landscape') return <><ProductLandscape /><Footer /></>;
  const product = pageForPath(path);
  const isHome = path === '/';
  if (!isHome) return (
    <div className="min-h-screen bg-primary text-gray-100">
      {product ? <ProductPage product={product} /> : <main className="max-w-3xl mx-auto px-6 py-24"><p className="text-blue-300 mb-4">404</p><h1 className="text-4xl font-bold mb-6">Page not found</h1><p className="text-gray-300 mb-8">This product page does not exist. Explore the current product map to find what you need.</p><a href="/#product-families" className="text-blue-300 underline underline-offset-4">Back to all products</a></main>}
      <Footer />
    </div>
  );
  return (
    <div className="min-h-screen bg-primary text-gray-100 overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Philosophy />
      <Culture />
      <Strategies />
      <Inspirations />
      <Footer />
    </div>
  )
}

export default App
