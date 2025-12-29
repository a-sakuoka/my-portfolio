import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "sales-pin",
    name: "Sales Pin",
    tagline: "フィールドセールスの活動を「地図」で可視化。\n訪問状況や顧客情報をリアルタイムに共有するSaaS。",
    category: "SaaS / App",
    thumbnail: "/images/sales-pin/02_map.png",
    images: [
      "/images/sales-pin/02_map.png",
      "/images/sales-pin/03_detail.png",
      "/images/sales-pin/04_list.png",
      "/images/sales-pin/01_login.png",
    ],
    price: "Ask",
    target: "企業向け (外回り営業チーム)",
    features: [
      "地図ベースの顧客管理 & ステータス色分け",
      "チーム内でのリアルタイム訪問状況共有",
      "活動量や対応件数を可視化するダッシュボード",
      "現場から即時入力・閲覧可能なモバイル対応",
    ],
    problemsSolved: [
      "訪問バッティングや引き継ぎ漏れの防止",
      "ブラックボックス化しがちな営業活動の可視化",
      "日報作成・管理コストの削減",
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "Google Maps API"],
    url: "https://sales-pin-web.vercel.app/login",
    impact: "営業活動の可視化で、チームの成約率が向上！"
  },
  {
    id: "mymix",
    name: "MYMIX",
    tagline: "在庫状況から「最高の一台」をAIが調合。\nシーシャ店舗のためのフレーバー提案・在庫管理システム。",
    category: "Web App / Tool",
    thumbnail: "/images/mymix/01_top.png",
    images: [
      "/images/mymix/01_top.png",
      "/images/mymix/02_result.png",
      "/images/mymix/03_stock.png",
      "/images/mymix/04_regist.png",
    ],
    price: "Ask for Price",
    target: "シーシャ店舗オーナー、スタッフ",
    features: [
      "店舗在庫とリアルタイム連動し、欠品を除外したメニュー提案",
      "「甘め・スパイシー」等の好みからAIが最適配合を算出",
      "スタッフの熟練度に依存しない、均質な接客品質の提供",
      "PC・スマホ対応のレスポンシブデザイン",
    ],
    problemsSolved: [
      "オーダー後の「品切れです」という顧客体験の悪化を防ぐ",
      "新人スタッフでもベテラン並みのミックス提案が可能に",
      "フレーバーの在庫管理コストの削減",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    url: "https://shisha-mix.latent-ops.xyz/",
    impact: "AI提案により、新人スタッフでも熟練の接客を実現。"
  },
  {
    id: "shisha-manager",
    name: "Shisha Manager",
    tagline: "炭交換のタイミングを完全可視化。\n機会損失を防ぐ、シーシャ店特化型オペレーション管理SaaS。",
    category: "SaaS / Tool",
    thumbnail: "/images/shisha-manager/02_dashboard.png",
    images: [
      "/images/shisha-manager/01_top.png",
      "/images/shisha-manager/02_dashboard.png",
      "/images/shisha-manager/03_settings.png",
      "/images/shisha-manager/04_qr.png",
    ],
    price: "Ask for Price",
    target: "シーシャ店舗オーナー、スタッフ",
    features: [
      "各テーブルの炭交換経過時間と回数を一覧で可視化",
      "QRオーダー連携により、顧客のスマホから交換依頼が可能",
      "経過時間に応じたアラート機能（黄色・赤色点滅）",
      "店舗ごとのテーブル設定・QRコード自動発行機能",
    ],
    problemsSolved: [
      "炭交換の遅れによる「味の劣化」や顧客満足度低下の防止",
      "スタッフの巡回コスト削減とオペレーション漏れ回避",
      "ピークタイムでも均質なサービス品質を維持",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    url: "https://shisha-charcoal-change.latent-ops.xyz",
    impact: "交換タイミングを完全管理し、機会損失をゼロに。"
  }
];
/**
 * IDからプロダクトを取得するヘルパー関数
 */
export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};