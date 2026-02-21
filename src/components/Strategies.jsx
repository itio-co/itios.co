import { motion } from 'framer-motion';

const Strategies = () => {
  const strategies = [
    { title: "Game-Based Learning", link: "https://en.wikipedia.org/wiki/Educational_game" },
    { title: "Gamification", link: "https://en.wikipedia.org/wiki/Gamification" },
    { title: "CeDeFi", link: "https://www.bitdegree.org/crypto/learn/crypto-terms/what-is-cedefi" },
    { title: "Multiverse", link: "https://phemex.com/blogs/metaverse-vs-multiverse-vs-omniverse" },
    { title: "Maker, Developer and Creator Monetization", link: "https://en.wikipedia.org/wiki/Monetization" },
    { title: "Web 3.0 (Semantic Web)", link: "https://en.wikipedia.org/wiki/Semantic_Web" },
    { title: "Web3 (Decentralize Web)", link: "https://en.wikipedia.org/wiki/Decentralized_web" },
    { title: "XaaS (Anything as a Service)", link: "https://www.techtarget.com/searchcloudcomputing/definition/XaaS-anything-as-a-service" },
    { title: "XR & MMORPG", link: "https://en.wikipedia.org/wiki/Extended_reality" },
    { title: "DAOs", link: "https://ethereum.org/en/dao/" },
    { title: "The Architect in The Matrix", link: "https://matrix.fandom.com/wiki/The_Architect" },
    { title: "The Building Blocks game", link: "https://www.oxfordlearnersdictionaries.com/definition/english/building-block?q=building+blocks" },
    { title: "World replica (aka. Simulation)", link: "https://en.wikipedia.org/wiki/Simulation" }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-accent">Implement Strategic</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {strategies.map((strategy, index) => (
            <motion.a
              key={strategy.title}
              href={strategy.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: "#646cff", color: "#ffffff" }}
              className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700 hover:border-accent transition-all duration-300 shadow-sm"
            >
              {strategy.title}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategies;
