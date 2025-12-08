'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 lg:py-64 px-8 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* Left Column - Section Number */}
          <motion.div
            style={{ y, opacity }}
            className="md:col-span-3"
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-[#1a1a1a]/20">
              01
            </h2>
            <p className="text-lg md:text-xl mt-4 text-[#1a1a1a]/60 uppercase tracking-wider">
              About
            </p>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            style={{ y, opacity }}
            className="md:col-span-9 space-y-6 md:space-y-8"
          >
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose text-[#1a1a1a] font-light">
              こんにちは。Web開発を学んでいる学生です。
            </p>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose text-[#1a1a1a] font-light">
              現在、Next.jsやReactを使ったモダンなWebアプリケーションの開発に取り組んでいます。
              ユーザー体験を重視した、美しく機能的なインターフェースの構築を目指しています。
            </p>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose text-[#1a1a1a] font-light">
              新しい技術を学ぶこと、そしてそれを実際のプロジェクトに活かすことが、私の情熱の源です。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

