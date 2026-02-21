import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-950 border-t border-gray-800 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4 text-white">ITIӦ</h2>
        <p className="text-gray-400 mb-8">Little people can make a big difference</p>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/itio-co/itios.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>

        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} ITIO. All rights reserved.
        </p>
        <p className="text-xs text-gray-700 mt-2">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
