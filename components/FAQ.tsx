'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqList = [
    {
        question: 'サーバーやドメインの契約がよくわかりません。',
        answer: 'ご安心ください。保守プランにご加入の場合、面倒な契約手続きや設定はすべて代行可能です。',
    },
    {
        question: 'デザインは決まっていませんが、依頼できますか？',
        answer: 'はい、可能です。参考サイトなどをお見せしながら、お客様の好みに合わせたデザインを提案させていただきます。',
    },
    {
        question: '完成後の修正や更新はお願いできますか？',
        answer: 'もちろんです。月額保守プランにご加入いただければ、LINEやメールでご連絡いただくだけで原則当日中に対応いたします。',
    },
    {
        question: '遠方ですが依頼できますか？',
        answer: 'はい、全国対応可能です。オンラインミーティングでスムーズに進行できます。',
    },
    {
        question: '支払い方法は？',
        answer: '銀行振込に対応しています。原則として、着手金と納品時の分割払いをお願いしております。',
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 md:py-32 bg-white px-8 md:px-16 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <p className="text-sm md:text-base text-[#1a1a1a]/60 uppercase tracking-wider mb-4">
                        04 / FAQ
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
                        Q&A
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqList.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            className="border-b border-[#1a1a1a]/10 pb-4"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
                            >
                                <span className="text-lg md:text-xl font-medium text-[#1a1a1a] group-hover:opacity-70 transition-opacity">
                                    {item.question}
                                </span>
                                <span className="ml-4 text-2xl font-light text-[#1a1a1a]">
                                    {activeIndex === index ? '−' : '＋'}
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pt-2 pb-6 text-gray-600 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
