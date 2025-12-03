'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface HeroSectionProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function HeroSection({ isMenuOpen, setIsMenuOpen }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24">
      {/* Logo - Top Left */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8 md:left-16 lg:left-24 z-20"
      >
        <h1 className="text-2xl md:text-3xl font-medium tracking-tight">Portfolio</h1>
      </motion.div>

      {/* Hamburger Menu - Top Right */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="absolute top-8 right-8 md:right-16 lg:right-24 z-20 flex flex-col gap-1.5 p-2"
        aria-label="Menu"
      >
        <span className={`w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </motion.button>

      {/* Main Content - Center/Left Bottom */}
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start md:items-center lg:items-start"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4 md:mb-6">
            Your Name
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl lg:text-3xl text-[#1a1a1a]/70 font-light"
          >
            Aspiring Web Developer
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

