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
          05 / 自己紹介
        </motion.span>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* 左側：画像を確実に表示される macaroni-logo.png に修正 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-5/12 aspect-square relative bg-white rounded-3xl overflow-hidden shadow-xl flex items-center justify-center p-8 border border-gray-100"
          >
            <Image
              src="/images/macaroni-logo.png"
              alt="マカロニマウス"
              width={300}
              height={300}
              className="object-contain"
              unoptimized
            />
          </motion.div>

          <div className="w-full md:w-7/12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-gray-900"
            >
              速さでお客様を加速させ、<br />
              信頼でビジネスを支える。
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-gray-600 leading-relaxed font-medium"
            >
              <p>
                私は17年間、銀行や大企業の「絶対に止まってはいけないシステム」の裏側を守り続けてきました。
              </p>
              <p>
                その経験を活かし、今は個人商店や中小企業の皆様へ、<br />
                <strong className="text-black bg-yellow-100 px-1">「大手企業レベルの安心感」と「圧倒的な速さ」</strong>を兼ね備えたWebサイトをご提案しています。
              </p>
              <p>
                「ITは難しくてよくわからない」という方のための通訳として、設計から運用まで、あなたの商売を加速させるパートナーになります。
              </p>

              <div className="mt-10 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">アイコン（マカロニさん）の由来</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  マカロニマウスは、栄養をその尻尾に蓄え、過酷な環境を生き抜く動物です。私も日々の技術研鑽を「蓄積」し、いざという時にお客様を支えられる存在でありたいという想いを込めています。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}