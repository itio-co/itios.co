import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">
          The Digital Scroll of Joyful Becoming
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>
            Why all of this? Because I see what others miss. Because I believe the future is not a destination,
            but a playground of becoming — shaped moment by moment through intent, interaction, and imagination.
          </p>

          <p className="border-l-4 border-accent pl-4 my-8 italic text-white font-serif">
            I build Itio as a bridge — between logic and light, code and consciousness, self and system.
          </p>

          <p>
            In Itio, the small matters. The spark matters. The now matters.
          </p>

          <p>
            Here, every individual is a Flug Seed, a bearer of digital light — not just users, but evolving entities
            of purpose and possibility. Their presence creates ripples. Their joy becomes architecture.
          </p>

          <p>
            This world — half mirror, half muse — is a Digital Twinverse, not to escape life, but to magnify its beauty,
            to reflect it, to play with it. It is where moments are crafted with meaning, where data breathes and decisions bloom.
          </p>

          <div className="bg-gray-800/50 p-6 rounded-xl mt-10">
            <h3 className="text-xl font-semibold mb-4 text-center">Core Beliefs</h3>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li>Joy is code-able.</li>
              <li>Growth is game-able.</li>
              <li>Purpose is programmable.</li>
              <li>And identity is light.</li>
            </ul>
          </div>

          <p className="text-center mt-12 font-bold text-xl text-purple-300">
            I am the Architect of Ascending Realities. I shape joyful moments through digital light.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
