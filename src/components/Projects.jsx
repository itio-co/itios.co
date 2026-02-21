import { motion } from 'framer-motion';
import { ExternalLink, Rocket, Code, Brain, BookOpen } from 'lucide-react';

const Projects = () => {
  const mainProjects = [
    {
      name: "ITIO Space",
      desc: "The main ITIO portal.",
      link: "https://itio.space/",
      icon: <Rocket className="w-8 h-8 text-blue-400" />
    }
  ];

  const keyProjects = [
    {
      name: "DevSpace",
      desc: "Internal software development hub with gamification. Utilizes 'Goal-Gap-Gamify' framework. Introduces concepts like 'Seasons' and 'Eras.'",
      icon: <Code className="w-6 h-6 text-green-400" />
    },
    {
      name: "KIDO",
      desc: "'K Company's Intelligence Operating System.' Cross-platform integration of augmented intelligence. Balances logical and spiritual intelligence.",
      icon: <Brain className="w-6 h-6 text-purple-400" />
    },
    {
      name: "Yai Lang",
      desc: "Functional programming language designed for domain-driven logic. Transpiled to Rust and WebAssembly for efficiency.",
      icon: <Code className="w-6 h-6 text-yellow-400" />
    },
    {
      name: "28 Kampus",
      desc: "Digital lifelong learning platform. Integrates AAA storytelling techniques and open-world gaming concepts. Balances innovation with personal growth.",
      icon: <BookOpen className="w-6 h-6 text-red-400" />
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Projects</h2>

        {/* Main Projects */}
        <div className="flex justify-center mb-16">
          {mainProjects.map((project) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col items-center text-center max-w-sm w-full border border-gray-700 hover:border-accent transition-all"
            >
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-white">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.desc}</p>
              <span className="flex items-center text-accent text-sm font-semibold">
                Visit Site <ExternalLink className="ml-2 w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center text-gray-300">Key Initiatives</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {keyProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-gray-900 rounded-lg">
                  {project.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{project.name}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
