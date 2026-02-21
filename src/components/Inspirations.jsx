import { motion } from 'framer-motion';

const Inspirations = () => {
  const inspirations = [
    { title: "ห้องหนังเพื่อการเรียนรู้ major Care", link: "https://www.facebook.com/watch/?v=2361985874086699" },
    { title: "Inside Out", link: "https://disney.fandom.com/wiki/Inside_Out" },
    { title: "Arrietty", link: "https://www.netflix.com/title/70216227" },
    { title: "Hello World", link: "https://www.netflix.com/title/81295070" },
    { title: "Locker C-18", link: "https://meninblack.fandom.com/wiki/Locker_C-18" },
    { title: "Inception", link: "https://en.wikipedia.org/wiki/Inception" },
    { title: "Tinkerbell", link: "https://disney.fandom.com/wiki/Tinker_Bell" },
    { title: "Ready Player One", link: "https://g.co/kgs/JQh6kc" },
    { title: "In Time", link: "https://en.wikipedia.org/wiki/In_Time" },
    { title: "Unimatrix Zero", link: "https://en.wikipedia.org/wiki/Unimatrix_Zero" },
    { title: "How little people can make a big difference - TEDx", link: "https://www.youtube.com/watch?v=V7Z-Hq-xvxM" },
    { title: "Gaming can make a better world - Jane McGonigal", link: "https://www.youtube.com/watch?v=dE1DuBesGYM" },
    { title: "Start with why - Simon Sinek", link: "https://www.youtube.com/watch?v=u4ZoJKF_VuA" },
    { title: "Downsizing", link: "https://en.wikipedia.org/wiki/Downsizing_(film)" },
    { title: "Her", link: "https://www.netflix.com/title/70278933" },
    { title: "The Thirteenth Floor", link: "https://www.imdb.com/title/tt0139809/" },
  ];

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-accent">Inspirations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inspirations.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 5, color: "#646cff" }}
              className="flex items-center p-4 rounded-lg bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-accent mr-3 group-hover:scale-150 transition-transform"></span>
              <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium truncate">
                {item.title}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inspirations;
