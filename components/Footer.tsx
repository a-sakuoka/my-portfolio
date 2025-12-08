'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#1a1a1a] text-white py-20 md:py-32 lg:py-40 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/contact"
              className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 md:mb-8 hover:opacity-80 transition-opacity"
            >
              Contact
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl lg:text-2xl text-white/70 font-light"
          >
            Let's create something together.
          </motion.p>
        </div>

        {/* Sub Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 pt-8 border-t border-white/10"
        >
          {/* Copyright */}
          <p className="text-sm md:text-base text-white/50">
            © {currentYear} Jun
          </p>

          {/* Social Links */}
          <div className="flex gap-6 md:gap-8">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-white/70 hover:text-white transition-colors"
            >
              X
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-white/70 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-white/70 hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
