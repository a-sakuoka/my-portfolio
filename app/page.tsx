'use client';

import Header from '@/components/Header';
import ThreeBackground from '@/components/ThreeBackground';
import Strengths from '@/components/Strengths';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import Market from '@/components/Market';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative">
      <Header />

      {/* --- 冒頭エリア --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden select-none">
        <ThreeBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#f4f4f4] pointer-events-none z-10" />

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-cyan-400 font-bold tracking-[0.2em] mb-6 text-sm md:text-base uppercase"
          >
            ウェブサイト・システム制作
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight drop-shadow-lg"
          >
            「止まらない・使いやすい」<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              売上を伸ばす
            </span>
            サイトを作ります
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-100 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md"
          >
            17年間、大規模システムを守り続けてきたプロが、<br className="hidden md:block" />
            「絶対に壊れない安心感」と「圧倒的な表示スピード」を両立。<br className="hidden md:block" />
            お客様のビジネスを、最新のIT技術で強力にサポートします。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/contact"
              className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-xl text-lg w-full sm:w-auto text-center"
            >
              まずは無料で相談する
            </Link>
            <a
              href="#market"
              className="px-10 py-4 border border-white/40 hover:bg-white/10 text-white font-bold rounded-full transition-all backdrop-blur-sm text-lg w-full sm:w-auto text-center"
            >
              制作実績を見る
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce z-20 text-xs tracking-widest">
          SCROLL
        </div>
      </section>

      <Strengths />
      <Market />
      <Services />
      <Process />
      <FAQ />
      <About />
      <Footer />
    </main>
  );
}