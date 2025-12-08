'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Minimal architecture background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start md:items-center lg:items-start"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4 md:mb-6 text-white">
            Jun
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light"
          >
            Full-Stack Product Engineer
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

