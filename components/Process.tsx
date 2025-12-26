"use client";
import { motion } from "framer-motion";

const steps = [
    { num: "01", title: "ヒアリング", desc: "目的・ターゲット・機能要件を明確化します。", color: "border-cyan-400" },
    { num: "02", title: "設計・デザイン", desc: "ワイヤーフレーム作成とUIデザインを行います。", color: "border-emerald-400" },
    { num: "03", title: "開発実装", desc: "Next.js等を用いたモダン環境で高速開発。", color: "border-blue-400" },
    { num: "04", title: "テスト・確認", desc: "動作検証とブラッシュアップを入念に実施。", color: "border-indigo-400" },
    { num: "05", title: "公開・運用", desc: "デプロイからその後の保守までサポート。", color: "border-orange-400" },
];

export default function Process() {
    return (
        <section id="process" className="py-24 bg-[#f4f4f4] text-[#1a1a1a]">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="mb-16">
                    <span className="block text-sm font-bold text-gray-400 tracking-widest mb-4">03 / PROCESS</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Workflow</h2>
                </div>

                {/* 横スクロール対応のコンテナ */}
                <div className="overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                    <div className="flex gap-6 min-w-max md:min-w-0">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`w-[260px] md:w-[220px] h-[280px] p-6 bg-white rounded-xl shadow-sm border-t-4 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 ${step.color}`}
                            >
                                <div>
                                    <div className="text-4xl font-black text-gray-100 mb-4">{step.num}</div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}