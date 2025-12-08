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
        <div className="absolute inset-0 bg-black/60 z-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start md:items-center lg:items-start"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 text-white leading-tight">
            インフラのプロが作る、
            <br className="md:hidden" />
            止まらない・速い・柔軟なWeb構築
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 font-light"
          >
            現役インフラエンジニアによる『高速開発』×『安定運用』
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

