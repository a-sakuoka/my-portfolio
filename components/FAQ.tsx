"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // アイコン用

const faqs = [
    {
        question: "サーバーやドメインの契約がよくわかりません。",
        answer: "ご安心ください。面倒なサーバー選定やドメイン取得の代行、あるいはAWS/Vercel等のモダンな環境構築まで、インフラエンジニアの視点で最適な構成を提案・サポートいたします。"
    },
    {
        question: "デザインは決まっていませんが、依頼できますか？",
        answer: "はい、可能です。ヒアリングを通じてワイヤーフレーム（構成案）を作成し、デザインから実装まで一貫して対応します。テンプレートを活用したコストパフォーマンス重視の制作も承ります。"
    },
    {
        question: "制作後の修正や運用は依頼できますか？",
        answer: "もちろんです。スポットでの修正依頼はもちろん、月額の保守サポートプランもご用意しています。リリース後の機能追加やセキュリティアップデートもお任せください。"
    },
    {
        question: "遠方ですが依頼できますか？",
        answer: "はい、完全リモートで全国対応可能です。ZoomやSlack、Discordなどを用いて、対面と変わらないスムーズなコミュニケーションを心がけています。"
    },
    {
        question: "モニター条件の「実績公開」とは具体的に何ですか？",
        answer: "弊社のポートフォリオサイトへの掲載許可と、納品後の簡単なアンケート（感想）へのご回答をお願いしております。"
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-white text-[#1a1a1a]">
            {/* 
        【修正ポイント】
        外枠を他のセクションと同じ max-w-6xl に設定しました。
        これにより「04 / FAQ」や「Q&A」の開始位置（左端）が、上のセクションとピッタリ揃います。
      */}
            <div className="max-w-6xl mx-auto px-4 md:px-8">

                <div className="mb-16">
                    <span className="block text-sm font-bold text-gray-400 tracking-widest mb-4">04 / FAQ</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Q&A</h2>
                </div>

                {/* 
          リスト部分は横に長すぎると読みづらいため、ここだけ max-w-4xl で幅を制限しています。
          左寄せのまま幅を制限しているため、視線移動もスムーズです。
        */}
                <div className="max-w-4xl space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full py-6 flex items-center justify-between text-left group"
                            >
                                <span className={`text-lg md:text-xl font-medium transition-colors ${openIndex === index ? "text-cyan-600" : "text-gray-800 group-hover:text-gray-600"}`}>
                                    {faq.question}
                                </span>
                                <span className="ml-4 text-gray-400">
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-8 text-gray-500 leading-relaxed pl-2">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}