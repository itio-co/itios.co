import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Introduction */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-accent">What is ITIO?</h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Derived from <span className="text-white font-bold">"iwi iti"</span>, Māori for "small tribe."</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Emphasizes <span className="text-white font-bold">"He kaha ō te iti"</span> – The small have strength.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Motto: <span className="text-white italic">"Little people can make a big difference."</span></span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-accent">Core Concepts</h3>
            <div className="space-y-6">
              <div className="bg-gray-800/60 p-5 rounded-lg border border-gray-700">
                <h4 className="font-bold text-lg mb-2 text-white">The Itionian Way</h4>
                <p className="text-gray-300 text-sm">Combining ethics, technology, and unity. Leveraging simplicity, collaboration, and individual contributions.</p>
              </div>
              <div className="bg-gray-800/60 p-5 rounded-lg border border-gray-700">
                <h4 className="font-bold text-lg mb-2 text-white">Sci-Fi and Math-Fi Elements</h4>
                <p className="text-gray-300 text-sm">Integration of Mixed Reality (MR) and gamification. Emphasis on futuristic, data-driven, analytical approaches. Merging physical and digital realities.</p>
              </div>
            </div>
          </div>

          {/* Philosophy & Core Values */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-accent">Philosophy & Core Values</h2>
            <div className="grid gap-4">
              {[
                { title: "Balance", desc: "Striving for harmony in life and work." },
                { title: "Presence", desc: "Living fully in the present moment." },
                { title: "Kindness", desc: "Acting compassionately toward others." },
                { title: "Learning", desc: "Continuous personal and collective growth." },
                { title: "Gratitude", desc: "Valuing and appreciating everyday experiences." },
              ].map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-800 p-4 rounded-lg flex items-center hover:bg-gray-700 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent mr-4 flex-shrink-0">
                    {/* Placeholder icon based on first letter */}
                    <span className="font-bold text-xl">{value.title[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{value.title}</h4>
                    <p className="text-gray-400 text-sm">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-accent">Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Mixed Reality Technology', 'Gamification Systems', 'Knowledge Platforms', 'Creative Frameworks'].map((tool) => (
                  <div key={tool} className="text-center p-3 bg-gray-900 rounded border border-gray-800 text-sm font-medium">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
