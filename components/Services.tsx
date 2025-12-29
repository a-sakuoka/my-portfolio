"use client";
import { motion } from "framer-motion";

const plans = [
  {
    type: "LP制作",
    name: "Light Plan",
    price: "¥80,000~",
    monitorPrice: "¥49,800~",
    target: "まずは名刺代わりのHPが欲しい方へ",
    period: "納期目安: 2週間~",
    desc: "広告用、宣伝、名刺代わり。スマホ対応の1枚ページを作成します。",
    features: ["レスポンシブ対応", "お問い合わせフォーム", "SNS連携", "Google Analytics設定"]
  },
  {
    type: "HP制作",
    name: "Standard Plan",
    price: "¥250,000~",
    monitorPrice: "¥148,000~",
    target: "信頼感を高め、更新も自社でしたい方へ",
    period: "納期目安: 1ヶ月~",
    desc: "店舗HP・コーポレートサイト。ブログ機能付きで資産になるサイトを作ります。",
    features: ["CMS導入 (記事更新機能)", "SEO内部対策", "独自ドメイン設定", "1ヶ月間の修正サポート"],
    highlight: true
  },
  {
    type: "システム開発",
    name: "Business Plan",
    price: "¥600,000~",
    monitorPrice: "¥398,000~",
    target: "業務システムやWebサービスを作りたい方へ",
    desc: "予約システム、マッチングサイト、SaaS開発など、複雑な要件を実現します。",
    features: ["要件定義・DB設計", "ユーザー認証機能", "管理画面構築", "外部API連携"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* ヘッダー */}
        <div className="mb-16">
          <span className="block text-sm font-bold text-gray-400 tracking-widest mb-4">02 / SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Pricing Plans</h2>
        </div>

        {/* 3つのプランカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-2xl border flex flex-col h-full relative ${plan.highlight
                ? "bg-gray-50 border-cyan-500 shadow-xl scale-105 z-10"
                : "bg-white border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}
              <div className="text-xs font-bold text-cyan-600 mb-2">{plan.type}</div>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-xs text-gray-400 mb-4 font-bold">{plan.target}</p>

              <div className="mb-4">
                <span className="text-sm text-gray-400 line-through mr-2">通常 {plan.price}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-red-500">{plan.monitorPrice}</span>
                  {plan.monitorPrice !== "応相談" && <span className="text-xs text-red-500 font-bold bg-red-100 px-1 rounded">モニター価格</span>}
                </div>
                <p className="text-[10px] text-gray-400 mt-1">※実績公開・アンケート協力必須</p>
                {plan.name === "Business Plan" && <p className="text-[10px] text-gray-400">※開発内容により変動します</p>}
              </div>

              <p className="text-sm text-gray-500 mb-6">{plan.period}</p>

              <p className="text-gray-700 font-medium mb-8 border-b border-gray-100 pb-4 min-h-[3rem]">
                {plan.desc}
              </p>

              <ul className="space-y-3 mt-auto">
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

        {/* 月額保守サポートの帯 */}
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