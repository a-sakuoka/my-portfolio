'use client';
import { motion } from 'framer-motion';

export default function Strengths() {
    const strengths = [
        {
            title: '「待ち時間」をゼロに。',
            description: '読み込みが遅いサイトはお客さまを逃します。最新技術で、一瞬で表示されるストレスのないサイトを作り、成約率を最大化します。',
            icon: '⚡',
        },
        {
            title: '「24時間、止まらない」安心感。',
            description: '17年間、銀行のような重要システムを守ってきた経験を活かします。ウイルス対策や故障への強さは、他には真似できないプロの品質です。',
            icon: '🛡️',
        },
        {
            title: '丸投げOK。LINEで簡単相談。',
            description: '難しい専門用語は使いません。「ここを変えてほしい」という要望もLINE一本で完結。パソコンが苦手な方でも安心して運用をお任せいただけます。',
            icon: '💬',
        },
    ];

    return (
        <section id="about" className="py-24 bg-white px-8">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">なぜ、私が必要とされるのか？</h2>
                <p className="text-gray-500 mb-16">技術の凄さではなく、あなたの「困った」を解決することにこだわります。</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {strengths.map((item, index) => (
                        <div key={item.title} className="flex flex-col items-center">
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}