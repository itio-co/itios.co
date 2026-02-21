import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Culture from './components/Culture';
import Strategies from './components/Strategies';
import Inspirations from './components/Inspirations';
import Footer from './components/Footer';

function App() {
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
