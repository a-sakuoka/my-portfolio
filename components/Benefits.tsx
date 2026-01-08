"use client";
import { motion } from "framer-motion";

export default function Benefits() {
    const benefits = [
        {
            title: "月額保守サポート 半年間無料",
            description: "サーバー管理・セキュリティ監視など（通常¥5,000/月〜）を0円で提供。ランニングコストを抑えてスタートできます。",
            note: "Standard Plan以上",
            color: "from-cyan-400 to-blue-500"
        },
        {
            title: "初期設定の丸投げ代行",
            description: "Googleマップ、Analytics、Search Console等の面倒な設定を全て代行。納品後すぐにビジネスに活用可能です。",
            note: "全プラン対象",
            color: "from-purple-400 to-pink-500"
        },
        {
            title: "運用レクチャー",
            description: "納品後、Zoom等で管理画面の操作方法を丁寧にレクチャーします。ITに詳しくない方でも安心して運用できます。",
            note: "希望者全員",
            color: "from-yellow-400 to-orange-500"
        }
    ];

    return (
        <section className="py-24 bg-[#1a1a1a] text-white relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mb-6">
                        <span className="block px-4 py-1 rounded-full bg-black text-white text-sm font-bold tracking-wider">
                            先着3名様限定
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        今だけの<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">3大特典</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        ご提供に加え、ビジネスの成功を後押しする特別な特典をご用意しました。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative group h-full"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`}></div>
                            <div className="relative bg-[#222] border border-white/10 rounded-2xl p-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-black font-bold text-xl mb-6 shadow-lg`}>
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm mb-6 flex-grow">
                                    {item.description}
                                </p>
                                <div className="text-xs text-gray-500 border-t border-gray-700 pt-4 mt-auto">
                                    対象: {item.note}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
