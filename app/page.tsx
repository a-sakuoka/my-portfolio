'use client';

import Header from '@/components/Header';
// import Hero from '@/components/Hero'; // 旧Heroは使用しないためコメントアウト
import ThreeBackground from '@/components/ThreeBackground'; // 作成した3D背景をインポート
import Strengths from '@/components/Strengths';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import Market from '@/components/Market';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion'; // アニメーション用にFramer Motionを使用（任意）

export default function Home() {
  return (
    <main className="relative">
      {/* ヘッダーはそのまま表示 */}
      <Header />

      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden select-none">

        {/* 背景: z-0 になったのでここに配置 */}
        <ThreeBackground />

        {/* グラデーション: 文字が見やすいように */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#f4f4f4] pointer-events-none z-10" />

        {/* コンテンツ: z-20 に上げて確実にクリック可能にする */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">

          {/* キャッチコピー上部のアクセント */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-cyan-400 font-bold tracking-[0.2em] mb-6 text-sm md:text-base"
          >
            INFRASTRUCTURE & DEVELOPMENT
          </motion.p>

          {/* メインタイトル */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight drop-shadow-lg"
          >
            インフラのプロが作る、<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              止まらない・速い
            </span>
            <br />
            柔軟なWeb構築
          </motion.h1>

          {/* サブテキスト */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md"
          >
            現役インフラエンジニアによる『高速開発』×『安定運用』。<br />
            モダンな技術選定で、あなたのビジネスの立ち上げを加速させます。
          </motion.p>

          {/* アクションボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
            >
              お問い合わせ
            </a>
            <a
              href="#market"
              className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-medium rounded-full transition-all backdrop-blur-sm"
            >
              プロダクトを見る
            </a>
          </motion.div>
        </div>

        {/* スクロールダウンのヒント */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce z-20"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
        </motion.div>
      </section>
      {/* --- Hero End --- */}

      {/* 以降のセクションは白背景（デフォルト）で続く */}
      <Strengths />
      <About />
      <Services />
      <Process />
      <FAQ />
      <Market />
      <Footer />
    </main>
  );
}