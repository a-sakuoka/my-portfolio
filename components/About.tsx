'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <section className="min-h-screen py-32 md:py-48 lg:py-64 px-8 md:px-16 lg:px-24 flex items-center">
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
              Designing Speed, Building Trust.
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed md:leading-loose">
                私は17年にわたるインフラエンジニアとしてのキャリアで培った
                <br className="hidden md:block" />
                <span className="font-semibold text-[#1a1a1a]">「堅牢なシステム設計」</span>を土台に、
                <br className="hidden md:block" />
                アイデアを最速でプロダクト（形）にするフルスタックエンジニアです。
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed md:leading-loose">
                大規模システムの安定稼働を支えてきた経験と、
                <br className="hidden md:block" />
                モダンな開発技術を組み合わせることで、
                <br className="hidden md:block" />
                <span className="font-semibold text-[#1a1a1a]">「速さ」と「品質」を両立した開発</span>を提供します。
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed md:leading-loose">
                Webサービス、LP、業務システムからネイティブアプリまで。
                <br className="hidden md:block" />
                単にコードを書くだけでなく、あなたのビジネスの成長速度を加速させるパートナーとして、
                <br className="hidden md:block" />
                設計から実装、リリース後の改善まで一貫してサポートします。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

