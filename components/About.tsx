"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#f4f4f4] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* 画像エリア：高さを明示的に指定 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              alt="About Image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* テキストエリア */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs font-mono text-gray-500 mb-6 block tracking-widest">
              01 / ABOUT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-[#1a1a1a]">
              Designing, Building, and Selling — in the AI Era.
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed font-light">
              <p>
                私は<span className="font-medium text-[#1a1a1a]">17年のインフラエンジニア経験</span>を土台に、
                AIコーディングを活用して “アイデアを最速でプロダクトにする” 個人開発者です。
              </p>
              <p>
                Webサービス、ホームページ（LP含む）、業務アプリケーション、
                場合によってはネイティブアプリまで、
                プロダクトの要件に応じて最適な言語・技術スタックをAIと共に選定し、実装します。
              </p>
              <p>
                使用ツールは主に <span className="font-medium text-[#1a1a1a]">Cursor</span>。
                コードを書くスピードだけでなく、改善・検証・高速なリリースサイクルを重視しています。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}