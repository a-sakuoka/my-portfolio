import type { Metadata } from "next";
import "./globals.css";
import GrainOverlay from "@/components/GrainOverlay";
import SmoothScroll from "@/components/SmoothScroll";

// 1. SEO・OGP設定（ドメインを本番環境に合わせて修正）
export const metadata: Metadata = {
  metadataBase: new URL('https://latent-ops.xyz'),
  title: {
    default: "MACARONI | インフラのプロが作る、売上を伸ばす高速Web制作",
    template: "%s | MACARONI"
  },
  description: "17年のインフラ経験を持つプロが、絶対に壊れない安心感と圧倒的な表示スピードを両立。お客様のビジネスを最新のIT技術で強力にサポートします。",

  // 【重要】Cloudflareエラー対策：静的なファイルを指定
  icons: {
    icon: '/favicon.png', // public/favicon.png を参照
  },

  openGraph: {
    title: "MACARONI | インフラのプロが作る、売上を伸ばす高速Web制作",
    description: "現役インフラエンジニアによる高品質なWeb制作ソリューション。",
    url: 'https://latent-ops.xyz',
    siteName: 'MACARONI Portfolio',
    images: [
      {
        url: '/images/macaroni-logo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MACARONI | インフラのプロが作る、売上を伸ばす高速Web制作",
    description: "現役インフラエンジニアによる高品質なWeb制作ソリューション。",
    images: ['/images/macaroni-logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 2. 検索エンジン用構造化データ (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "MACARONI",
    "image": "https://latent-ops.xyz/images/macaroni-logo.png",
    "description": "インフラ構築とWebアプリ開発のプロフェッショナルサービス",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "JP"
    }
  };

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <GrainOverlay />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}