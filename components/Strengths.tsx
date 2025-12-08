'use client';

import { motion } from 'framer-motion';

export default function Strengths() {
    const strengths = [
        {
            title: '圧倒的な開発スピード (Speed)',
            description: '最新の開発技術採用。一般的な制作会社の約1/3の納期で、ビジネスの立ち上げを加速させます。',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
            ),
        },
        {
            title: 'インフラのプロによる安全性 (Security)',
            description: '代表は現役のインフラエンジニア。「作って終わり」ではなく、セキュリティや負荷対策など、見えない部分の品質を保証します。',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            ),
        },
        {
            title: '「丸投げ」できる運用サポート (Support)',
            description: '面倒な管理画面操作は不要。LINE一本で更新依頼が可能です。ドメイン・サーバー管理も全てお任せいただけます。',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
            ),
        },
    ];

    return (
        <section className="py-20 md:py-32 bg-white px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
                        Why Choose Me?
                    </h2>
                    <p className="text-[#1a1a1a]/60">選ばれる3つの理由</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {strengths.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-6"
                        >
                            <div className="w-16 h-16 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">
                                <span className="text-[#1a1a1a]/60 text-sm block mb-1">0{index + 1}.</span>
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
