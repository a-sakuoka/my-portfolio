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
    
  },
  {
    id: "animal-cafe-guide",
    name: "Fairy Room",
    // キャッチコピー：ハイライトと紹介文を組み合わせて魅力的に
    tagline: "ガチャ要素のある「デジタルおやつ機能」でWeb訪問者の来店動機を創出！\n推しの動物が見つかる！インバウンド対応＆クーポン抽選機能付きのデジタル店舗ガイド。",
    category: "Web App / O2O Tool",
    // サムネイル（一番雰囲気が伝わる画像）
    thumbnail: "/images/fairy-room/01_list.png",
    // スライド用画像（用意した枚数に合わせて追加してください）
    images: [
      "/images/fairy-room/01_list.png",
      "/images/fairy-room/02_interact.png",
    ],
    price: "Ask",
    target: "アニマルカフェへの来店検討者、訪日外国人観光客（インバウンド）、店舗のリピーター（推し活層）",
    features: [
      "4ヶ国語（日・英・中・韓）切り替えに対応した詳細な動物プロフィール表示",
      "連打演出によるゲーミフィケーションを取り入れた「デジタルおやつ抽選（ガチャ）」",
      "スタッフが画面操作でクーポンを使用済みにできる実用的な管理機能",
      "MicroCMSによるリアルタイムなコンテンツ管理と多言語入稿",
      "インストール不要でQRコードから即座にアクセス可能なWeb App構成",
    ],
    problemsSolved: [
      "言語の壁：スタッフが対応しきれない外国人客へ正確な注意事項を伝達可能に",
      "来店動機の創出：Webサイトを見ているだけの層に対し、クーポンをフックに来店を誘導",
      "リピート率向上：「毎日引けるガチャ」で顧客との接点を維持し、再訪を促す",
    ],
    techStack: ["Next.js 15 (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion", "MicroCMS", "Cloudflare Pages"],
    // デモURL
    url: "https://fairy-room.latent-ops.xyz/",
  },
  {
    id: "bar-inventory-manager",
    name: "Bar Inventory Manager",
    // キャッチコピー：AIの強みと業務効率化を強調
    tagline: "AIが「利益の出る」メニューを考案！在庫管理から原価計算までを完全DX化。\n現場の在庫状況と原価率を考慮し、AIが最適なメニュー構成を提案する店舗支援ツール。",
    category: "SaaS / Tool",
    // サムネイル（ダッシュボード画面）
    thumbnail: "/images/bar-inventory/01_dashboard.png",
    // スライド用画像（4枚構成）
    images: [
      "/images/bar-inventory/01_dashboard.png", // メインダッシュボード
      "/images/bar-inventory/02_ai-planner.png", // AI提案画面
      "/images/bar-inventory/03_recipes.png",    // レシピブック
      "/images/bar-inventory/04_events.png",     // イベント管理
    ],
    price: "Ask",
    target: "個人経営のバー、カフェ、レストランオーナー、在庫・原価管理を改善したい店舗様",
    features: [
      "OpenAIを活用し、在庫・客層・原価率から最適なメニューを考案する「AIメニュープランナー」",
      "スマホで完結するリアルタイム在庫カウントと、発注点割れ商品の自動通知機能",
      "Google Apps Script (GAS) 連携により、既存の仕入れ表から原価データを自動同期",
      "AI提案メニューや店舗独自レシピをスタッフ間で共有・蓄積するデジタルレシピブック",
      "Edge Runtime (Cloudflare Pages) を活用した、店舗内でもストレスのない高速な動作",
    ],
    problemsSolved: [
      "「実は利益が出ていない」というドンブリ勘定を解消し、正確な利益率を確保",
      "勘と経験に頼っていたメニュー考案時間を大幅短縮し、食品ロスも削減",
      "アナログな在庫管理による数え間違いや発注漏れをゼロにし、機会損失を防止",
    ],
    techStack: ["Next.js", "TypeScript", "Firebase", "OpenAI API", "Google Apps Script", "Cloudflare Pages"],
    // デモURL
    url: "https://bar-inventory-dc.latent-ops.xyz/",
  },
];
/**
 * IDからプロダクトを取得するヘルパー関数
 */
export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};