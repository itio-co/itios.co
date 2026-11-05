import { motion } from 'framer-motion';
import { ExternalLink, Rocket, Code, BookOpen } from 'lucide-react';
import { kidoFamilies, itioNu } from '../data/productFamilies';

const initiatives = [
  { name: 'Yai', description: 'Language and semantic modeling for expressing meaning and reasoning about models.', icon: Code },
  { name: 'Omega', description: 'The Logical Realm’s abstraction and execution foundations, with Omega Machine, Omega OS and Omega Factory retaining their own identities.', icon: Code },
  { name: 'DevSpace', description: 'Collaboration and development through the Goal-Gap-Gamify approach.', icon: Code },
  { name: '28 Kampus', description: 'Lifelong learning through storytelling, play and personal growth.', icon: BookOpen },
];

const Projects = () => (
  <section id="product-families" aria-labelledby="product-families-title" className="py-20 bg-gray-900 scroll-mt-8">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3">The Itio ecosystem</p>
        <h2 id="product-families-title" className="text-4xl font-bold mb-6 text-white">Product families</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          From business applications and creative workspaces to the foundations of knowledge and intelligence.
          Six Kido families connect with Itio Nu, our ecosystem-wide knowledge and intelligence pillar.
        </p>
        <p className="mt-6 p-4 rounded-xl border border-gray-700 bg-gray-800/50 text-sm leading-relaxed text-gray-400">
          <strong className="text-gray-200">Evolving product direction.</strong> This map describes our vision and
          product responsibilities. Capabilities are at different stages of design and development;
          inclusion here is not a release or availability announcement.
        </p>
      </div>

      <h3 className="text-2xl font-bold mb-6 text-white">Kido families</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kidoFamilies.map((family, index) => (
          <motion.article
            key={family.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 3) * 0.05 }}
            className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center gap-4 mb-4">
              <span aria-hidden="true" className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center text-3xl text-blue-400">{family.letter}</span>
              <div>
                <h4 className="text-xl font-bold text-white">Kido {family.name}</h4>
                <p className="text-sm text-blue-300">{family.purpose}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-300 mb-5">{family.description}</p>
            <dl className="space-y-3 text-sm leading-relaxed">
              {family.capabilities.map((capability) => (
                <div key={capability.name}>
                  <dt className="font-semibold text-gray-200">{capability.name}</dt>
                  <dd className="text-gray-400">{capability.description}</dd>
                </div>
              ))}
            </dl>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-xl border border-gray-700 bg-gray-800/30">
        <h3 className="text-lg font-semibold text-white mb-2">Discover. Create. Use. Evolve.</h3>
        <p className="text-sm leading-relaxed text-gray-300">
          Mu’s <strong className="text-white">Weave → Loom → Fabric</strong> journey connects discovery,
          application creation and everyday use. Sew provides domain services and subgraphs;
          Stitch connects them through GraphQL federation. Teams can revisit discovery and design as their applications evolve.
        </p>
      </div>

      <article className="mt-12 p-6 md:p-8 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-gray-800/50">
        <div className="flex items-start gap-4 mb-6">
          <span aria-hidden="true" className="flex-shrink-0 w-14 h-14 rounded-xl bg-purple-950/50 flex items-center justify-center text-4xl text-purple-300">{itioNu.letter}</span>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-purple-300 mb-1">Across Itio</p>
            <h3 className="text-2xl font-bold text-white">{itioNu.name}: {itioNu.purpose}</h3>
            <p className="text-gray-300 mt-3 leading-relaxed">{itioNu.description}</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {itioNu.products.map((product) => (
            <div key={product.name} className="p-5 rounded-xl bg-gray-900/60 border border-gray-700/50">
              <h4 className="font-bold text-lg text-white">{product.name}</h4>
              <p className="text-sm text-purple-300 mt-1 mb-3">{product.purpose}</p>
              <p className="text-sm leading-relaxed text-gray-400">{product.description}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-6 leading-relaxed">
          Nu serves the wider Itio portfolio. Its shared-service boundaries and integration contracts
          remain design work, with implementation status tracked by each product.
        </p>
      </article>

      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="https://github.com/itio-co/itios.co/tree/main/docs/portfolio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">
          Read the portfolio <ExternalLink aria-hidden="true" className="w-4 h-4" />
        </a>
        <span aria-hidden="true" className="hidden sm:block text-gray-600">·</span>
        <a href="https://itio.space/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">
          <Rocket aria-hidden="true" className="w-4 h-4" /> Explore ITIO Space <ExternalLink aria-hidden="true" className="w-4 h-4" />
        </a>
      </div>

      <div className="mt-16 pt-12 border-t border-gray-800">
        <h3 className="text-2xl font-bold mb-3 text-center text-white">The wider Itio portfolio</h3>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
          Yai and Omega keep their own identities and engineering direction. Alongside DevSpace and 28 Kampus,
          they extend the Itio vision beyond the Kido families.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {initiatives.map(({ name, description, icon: Icon }) => (
            <div key={name} className="flex items-start gap-4 p-6 rounded-xl bg-gray-800/30 border border-gray-700/50">
              <Icon aria-hidden="true" className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{name}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
