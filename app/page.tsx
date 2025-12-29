'use client';

import Header from '@/components/Header';
import ThreeBackground from '@/components/ThreeBackground';
import Strengths from '@/components/Strengths';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import Market from '@/components/Market';
import Introduction from '@/components/Introduction';
import Benefits from '@/components/Benefits';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative">
      <Header />

      {/* --- PV / Hero Section --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden select-none">

        <ThreeBackground />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#1a1a1a] pointer-events-none z-10" />

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-center gap-3 mb-8"
          >
            <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm md:text-base font-bold tracking-wider shadow-lg animate-pulse w-fit">
              先着10社限定 モニター募集中
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-cyan-400 font-bold tracking-[0.2em] mb-6 text-sm md:text-base uppercase"
          >
            INFRASTRUCTURE & DEVELOPMENT
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight drop-shadow-2xl"
          >
            表示速度の遅さは、<br className="md:hidden" />
            <span className="text-red-400 inline-block border-b-4 border-red-500/50 px-2 lg:px-4">機会損失</span>
            です。<br />
            インフラのプロが<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              『売上に繋がる』
            </span>
            <br />
            高速Webサイトを構築します
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-200 text-base md:text-xl mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md"
          >
            アクセス集中でも止まらない堅牢な設計。<br className="hidden md:block" />
            あなたのビジネスの立ち上げを加速させます。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <a
              href="#contact"
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.5)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                無料相談・お見積もり
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
            </a>
            <a
              href="#market"
              className="px-10 py-5 border border-white/30 hover:bg-white/10 text-white font-medium rounded-full transition-all backdrop-blur-sm"
            >
              実績・プロダクトを見る
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce z-20"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
        </motion.div>
      </section>

      {/* --- LP Flow Sections --- */}

      {/* 1. Empathy (Problems) */}
      <Introduction />

      {/* 2. Solution (Why Me) */}
      <Strengths />

      {/* 3. Proof (Portfolio) */}
      <Market />

      {/* 4. Offer (Pricing) */}
      <Services />

      {/* 5. Benefits (Special Offers) */}
      <Benefits />

      {/* 6. Trust/Detail (Process & FAQ) */}
      <div className="bg-white">
        <Process />
        <FAQ />
      </div>

      {/* 7. Authority/Trust (About) */}
      <About />

      {/* 8. Conversion (Contact) */}
      <Footer />

    </main>
  );
}