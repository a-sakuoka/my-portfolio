// 商品カテゴリーの型定義
export type ProductCategory = 'SaaS' | 'Tool' | 'Mobile App' | 'Template' | 'Service';

// 販売形態の型定義
export type ProductType = 'Subscription' | 'One-time Purchase';

// 商品データの型定義
export interface Product {
  id: string;
  title: string;
  category: ProductCategory;
  type: ProductType;
  price: string;
  description: string;
  imageUrl: string;
  checkoutUrl: string;
  features?: string[]; // 機能リスト（オプショナル）
  techStack?: string[]; // 技術スタック（オプショナル）
  catchphrase?: string; // キャッチコピー（オプショナル）
  problemSolved: string; // 解決した課題
}

// 商品データ
export const products: Product[] = [
  {
    id: 'service-a',
    title: 'TaskFlow Pro',
    category: 'SaaS',
    type: 'Subscription',
    price: '¥980/mo',
    description: 'チーム向けのタスク管理ツール。直感的なUIで、プロジェクトを効率的に進められます。',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    checkoutUrl: '#',
    problemSolved: '以前はタスクの抜け漏れや進捗確認の手間が発生していたが、タスクの一元管理により進捗が可視化され、チームの生産性が20%向上しました。',
  },
  {
    id: 'service-b',
    title: 'CodeSnap Studio',
    category: 'Tool',
    type: 'One-time Purchase',
    price: '¥3,000',
    description: '美しいコードスニペット画像を生成するデザインツール。開発者ブログやドキュメントに最適です。',
    imageUrl: 'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?auto=format&fit=crop&w=800&q=80',
    checkoutUrl: '#',
    problemSolved: '以前はブログ用のコード画像作成に手間取っていたが、これを使うことで美しい画像を数秒で生成でき、記事作成の効率が大幅にアップしました。',
  },
  {
    id: 'service-c',
    title: 'Portfolio Builder',
    category: 'Template',
    type: 'One-time Purchase',
    price: '¥5,000',
    description: 'Next.jsとTailwind CSSで構築された、モダンなポートフォリオサイトのテンプレート。',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    checkoutUrl: '#',
    problemSolved: '以前はゼロからサイトを作るのに数週間かかっていたが、テンプレート利用により最短1日でプロフェッショナルなポートフォリオを公開できました。',
  },
  {
    id: 'service-d',
    title: 'FitTracker Mobile',
    category: 'Mobile App',
    type: 'Subscription',
    price: '¥480/mo',
    description: '健康管理をサポートするモバイルアプリ。運動記録と食事管理を一元化できます。',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    checkoutUrl: '#',
    problemSolved: '以前は記録が続かず挫折していたが、スマホで簡単に記録できることで継続率が向上し、目標体重を達成できました。',
  },
  {
    id: 'sales-pin',
    title: 'Sales Pin',
    category: 'SaaS',
    type: 'Subscription',
    price: 'Free Beta',
    catchphrase: 'Maximize Field Sales Efficiency with Maps.',
    description: '地図を中心にした新しい顧客管理・日報ツール。現場の営業活動をスマホ1つで完結させ、チーム全体でリアルタイムに情報を共有できます。PC・スマホ完全対応。帰社してからの面倒な日報作成をゼロに。',
    imageUrl: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80',
    checkoutUrl: 'https://sales-pin-web.vercel.app/login',
    features: [
      '地図ベースの顧客管理',
      'リアルタイム日報作成',
      'チーム全体での情報共有',
      'PC・スマホ完全対応',
      '訪問記録の自動記録',
      '顧客情報の一元管理',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Vercel',
      'Supabase',
      'Google Maps API',
    ],
    problemSolved: '以前は帰社後の日報作成で残業が発生していたが、スマホからの報告により直帰が可能になり、移動時間の有効活用が進みました。',
  },
];

// IDで商品を取得するヘルパー関数
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

// カテゴリーで商品をフィルタリングするヘルパー関数
export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.category === category);
}

// 販売形態で商品をフィルタリングするヘルパー関数
export function getProductsByType(type: ProductType): Product[] {
  return products.filter((product) => product.type === type);
}

