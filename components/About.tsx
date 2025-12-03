'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <section id="about" className="min-h-screen py-32 md:py-48 lg:py-64 px-8 md:px-16 lg:px-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <p className="text-sm md:text-base text-[#1a1a1a]/60 uppercase tracking-wider">
            01 / ABOUT
          </p>
        </motion.div>

        {/* Image and Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <motion.div
                animate={{
                  filter: isImageHovered ? 'grayscale(0%)' : 'grayscale(100%)',
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full h-full"
              >
                <Image
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                  alt="Minimal ocean and sky"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 35vw"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-[#1a1a1a]">
              Designing, Building, and Selling — in the AI Era.
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed md:leading-loose">
                私は<span className="font-semibold text-[#1a1a1a]">17年のインフラエンジニア経験</span>を土台に、
                <br className="hidden md:block" />
                AIコーディングを活用して <span className="font-semibold text-[#1a1a1a]">"アイデアを最速でプロダクトにする"</span> 個人開発者です。
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed md:leading-loose">
                Webサービス、ホームページ（LP含む）、業務アプリケーション、
                <br className="hidden md:block" />
                場合によってはネイティブアプリまで、
                <br className="hidden md:block" />
                プロダクトの要件に応じて最適な言語・技術スタックをAIと共に選定し、実装します。
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed md:leading-loose">
                使用ツールは主に <span className="font-semibold text-[#1a1a1a]">Cursor</span>。
                <br className="hidden md:block" />
                コードを書くスピードだけでなく、改善・検証・高速なリリースサイクルを重視しています。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

