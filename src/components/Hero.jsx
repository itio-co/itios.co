import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-b from-primary via-secondary to-primary text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          ITIӦ
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide">
          Little people can make a big difference
        </p>

        <div className="space-y-4 text-gray-400 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="italic"
          >
            "The small have strength." — He kaha ō te iti.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-8 border-t border-gray-700 pt-8">
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
              <span className="block font-bold text-accent mb-1">Meaning</span>
              In The Interest Of
            </div>
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
              <span className="block font-bold text-accent mb-1">Māori</span>
              iwi iti
            </div>
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
              <span className="block font-bold text-accent mb-1">French</span>
              Minuscules personnes
            </div>
          </div>
        </div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default Hero;
