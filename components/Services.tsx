"use client";
import { motion } from "framer-motion";

// 1. データの型を定義して、optional（あってもなくても良い）項目を指定します
interface Plan {
  type: string;
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  highlight?: boolean;     // ? をつけることでエラーを回避
  mostPopular?: boolean;   // ? をつけることでエラーを回避
}

const plans: Plan[] = [
  {
    type: "まずはお店を知ってもらいたい方へ",
    name: "紹介用1ページ制作",
    price: "¥80,000~",
    period: "納期目安: 2週間~",
    desc: "名刺代わりの1ページ。スマホで見やすく、地図や連絡先を正しく伝えます。",
    features: ["スマホ対応", "お問い合わせフォーム", "SNS（インスタ等）連携", "アクセス分析設定"]
  },
  {
    type: "自分でどんどん情報を発信したい方へ",
    name: "更新機能付きサイト",
    price: "¥250,000~",
    period: "納期目安: 1ヶ月~",
    desc: "ブログやお知らせを自分で更新できるサイト。集客の柱を作りたい方に最適です。",
    features: ["自分で更新できる機能", "検索で見つかりやすくする対策", "自分専用のドメイン設定", "1ヶ月間の操作サポート"],
    highlight: true,
    mostPopular: true
  },
  {
    type: "業務を自動化してラクをしたい方へ",
    name: "オーダーメイドシステム",
    price: "¥600,000~",
    period: "納期目安: 1ヶ月~",
    desc: "予約管理や在庫管理など、今の「面倒な作業」を自動化する仕組みを作ります。",
    features: ["お困りごとの聞き取り", "独自の予約・管理機能", "パスワード付き管理画面", "LINEなど他アプリとの連動"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* ヘッダー */}
        <div className="mb-16">
          <span className="block text-sm font-bold text-gray-400 tracking-widest mb-4">02 / 制作料金</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">料金プラン</h2>
        </div>

        {/* プランカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl border flex flex-col h-full relative ${plan.highlight
                ? "bg-white border-cyan-400 shadow-lg"
                : "bg-white border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                }`}
            >
              {/* MOST POPULAR バッジ */}
              {plan.mostPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-[10px] font-bold px-4 py-1 rounded-full tracking-widest z-10">
                  MOST POPULAR
                </div>
              )}

              <div className="text-xs font-bold text-cyan-600 mb-2">{plan.type}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{plan.name}</h3>

              <div className="mb-4">
                {/* モニター価格用コメントアウト */}
                {/* <div className="text-xs text-gray-400 line-through mb-1">通常 {plan.price}</div> */}

                <div className="flex items-center gap-3">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                    {plan.price}
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-6 font-medium">{plan.period}</p>

              <p className="text-gray-600 text-sm leading-relaxed mb-8 border-b border-gray-100 pb-6 min-h-[4rem]">
                {plan.desc}
              </p>

              <ul className="space-y-4 mt-auto">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 mt-1.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 月額保守サポート */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-[#1a1a1a] text-white rounded-2xl p-8 md:px-10 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              月額保守サポート (Monthly Support)
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              サーバー管理、セキュリティ監視、LINEでの更新依頼対応
            </p>
          </div>
          <div className="text-2xl md:text-3xl font-bold whitespace-nowrap text-right">
            ¥5,000 ~ ¥10,000
          </div>
        </motion.div>

      </div>
    </section>
  );
}