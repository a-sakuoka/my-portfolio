import { Product } from "@/types";

export const products: Product[] = [
  // ... 他のプロダクトがあればそのまま ...

  {
    id: "sales-pin",
    name: "Sales Pin",
    // キャッチコピー：概要を短く魅力的に
    tagline: "フィールドセールスの活動を「地図」で可視化。\n訪問状況や顧客情報をリアルタイムに共有するSaaS。",
    category: "SaaS / App",
    // サムネイルは地図画面（一番機能がわかるため）
    thumbnail: "/images/sales-pin/02_map.png",
    // スライド用画像（4枚）
    images: [
      "/images/sales-pin/02_map.png",    // 1. 地図（メイン）
      "/images/sales-pin/03_detail.png", // 2. 顧客詳細
      "/images/sales-pin/04_list.png",   // 3. 履歴一覧
      "/images/sales-pin/01_login.png",  // 4. ログイン
    ],
    price: "Ask", // デモ公開中なので
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
    // デモURL
    url: "https://sales-pin-web.vercel.app/login",
  },

  // ... Sales Pinのデータの後にカンマ(,)を打ってから追加 ...

  {
    id: "mymix",
    name: "MYMIX",
    // キャッチコピー
    tagline: "在庫状況から「最高の一台」をAIが調合。\nシーシャ店舗のためのフレーバー提案・在庫管理システム。",
    category: "Web App / Tool",
    // サムネイル
    thumbnail: "/images/mymix/01_top.png",
    // スライド用画像
    images: [
      "/images/mymix/01_top.png",    // 1. トップ (ユーザー画面)
      "/images/mymix/02_result.png", // 2. 提案結果 (ユーザー画面)
      "/images/mymix/03_stock.png",  // 3. 在庫管理 (管理画面)
      "/images/mymix/04_regist.png", // 4. 商品登録 (管理画面)
    ],
    price: "Ask for Price", // 店舗向けSaaSのため要問い合わせ等の表記
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
    // ※技術スタックは仮定です。実際のものに合わせて修正してください
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    // URL
    url: "https://shisha-mix.latent-ops.xyz/",
  },

  // ... MYMIXのデータの後にカンマ(,)を打ってから追加 ...

  {
    id: "shisha-manager",
    name: "Shisha Manager",
    // キャッチコピー
    tagline: "炭交換のタイミングを完全可視化。\n機会損失を防ぐ、シーシャ店特化型オペレーション管理SaaS。",
    category: "SaaS / Tool",
    // サムネイル（ダッシュボード画面が機能性を一番表しているため採用）
    thumbnail: "/images/shisha-manager/02_dashboard.png",
    // スライド用画像
    images: [
      "/images/shisha-manager/01_top.png",       // 1. トップ画面
      "/images/shisha-manager/02_dashboard.png", // 2. スタッフダッシュボード
      "/images/shisha-manager/03_settings.png",  // 3. 詳細設定
      "/images/shisha-manager/04_qr.png",        // 4. QRコード発行
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
    // 技術スタック（これまでの傾向から推測しています。必要に応じて変更してください）
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    // URL
    url: "https://shisha-charcoal-change.latent-ops.xyz",
  },
  // ... 他のダミーデータ（TaskFlow Proなど）は残しておいてOK ...
];