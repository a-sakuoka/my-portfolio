'use client';

import { motion } from 'framer-motion';

export default function Services() {
    const plans = [
        {
            name: 'Light Plan',
            category: 'LP制作',
            price: '¥50,000~',
            period: '3日~',
            description: '広告用・簡易紹介',
        },
        {
            name: 'Standard Plan',
            category: 'HP制作',
            price: '¥150,000~',
            period: '1週間~',
            description: '店舗HP・コーポレート・更新代行付き',
        },
        {
            name: 'Business Plan',
            category: 'システム開発',
            price: '¥300,000~',
            period: '2週間~',
            description: '予約・マッチング・業務効率化・MVP開発',
        },
    ];

    return (
        <section id="services" className="py-20 md:py-32 bg-white px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <p className="text-sm md:text-base text-[#1a1a1a]/60 uppercase tracking-wider mb-4">
                        02 / Services
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
                        Pricing Plans
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="border border-[#1a1a1a]/10 p-8 rounded-xl hover:shadow-lg transition-shadow bg-[#f9f9f9]"
                        >
                            <div className="text-sm text-[#1a1a1a]/60 mb-2">{plan.category}</div>
                            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                            <div className="text-3xl font-bold mb-2">{plan.price}</div>
                            <div className="text-sm font-medium mb-4">納期目安: {plan.period}</div>
                            <p className="text-gray-600">{plan.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Monthly Support */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="border border-[#1a1a1a] bg-[#1a1a1a] text-white p-8 rounded-xl"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2">月額保守サポート (Monthly Support)</h3>
                            <p className="text-white/80">サーバー管理、セキュリティ監視、LINEでの更新依頼対応</p>
                        </div>
                        <div className="text-2xl md:text-3xl font-bold">
                            ¥5,000 ~ ¥10,000
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
