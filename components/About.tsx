"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#f4f4f4] text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="block text-sm font-bold text-gray-400 tracking-widest mb-12"
        >
          05 / ABOUT
        </motion.span>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* 左側：画像エリア */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-5/12 aspect-square relative bg-white rounded-2xl overflow-hidden shadow-xl flex items-center justify-center p-8 border border-gray-100"
          >
            {/* ※public/images/profile.jpg など任意の画像を配置してください */}
            {/* 画像がない場合は一旦グレーの背景のみ表示されます */}
            <Image
              src="/images/macaroni-logo.png"
              alt="Macaroni Mouse"
              fill
              className="object-contain p-8"
              unoptimized
            />
          </motion.div>

          {/* 右側：テキストエリア */}
          <div className="w-full md:w-7/12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold leading-tight mb-8"
            >
              Designing Speed,<br />
              Building Trust.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-gray-600 leading-relaxed font-medium"
            >
              <p>
                私は17年にわたるインフラエンジニアとしてのキャリアで培った
                「堅牢なシステム設計」を土台に、アイデアを最速でプロダクト（形）にするフルスタックエンジニアです。
              </p>
              <p>
                大規模システムの安定稼働を支えてきた経験と、<br />
                <strong className="text-black bg-yellow-100 px-1">「速さ」と「品質」を両立した開発</strong>を提供します。
              </p>
              <p>
                Webサービス、LP、業務システムからネイティブアプリまで。
                単にコードを書くだけでなく、あなたのビジネスの成長速度を加速させるパートナーとして、
                設計から実装、リリース後の改善まで一貫してサポートします。
              </p>
              {/* マカロニさんのストーリーを追記 */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">About My Icon</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  私は「マカロニマウス（オブトアレチネズミ）」愛好家です！
                  <br />
                  私のハンドルネームの由来はそこから取っています(笑)
                  <br />
                  マカロニマウスは栄養をその尻尾に蓄え、過酷な環境を生き抜く動物です。
                  <br />
                  私もまた、日々の技術研鑽を「蓄積」し、お客様のビジネスがいざという時に最大限のパフォーマンスを発揮できるよう支える。そんなエンジニアでありたいという想いを込めています。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}