import { motion } from 'framer-motion';

const Culture = () => {
  const cultureItems = [
    { text: "GoT (Game of Everything) - Do you GoT it?", emoji: "🎮" },
    { text: "Collaboration", emoji: "🤝" },
    { text: "Link Reference", emoji: "🔗" },
    { text: "Rapid & Efficient", emoji: "⚡" },
    { text: "V Power", emoji: "🔋" },
    { text: "Psudo Language", emoji: "🗣️" },
    { text: "Time Currency", emoji: "⏳" }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-accent">Culture</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cultureItems.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(55, 65, 81, 1)" }}
              className="bg-gray-700/50 p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-lg border border-gray-600/50 cursor-default"
            >
              <span className="text-4xl mb-4">{item.emoji}</span>
              <span className="text-gray-200 font-medium text-sm">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Culture;
