import type { Metadata } from "next";
import "./globals.css";
import GrainOverlay from "@/components/GrainOverlay";
import SmoothScroll from "@/components/SmoothScroll";

// 1. SEO・OGP設定
export const metadata: Metadata = {
  metadataBase: new URL('https://your-portfolio.pages.dev'), // デプロイ後のURLが決まったら書き換えてください
  title: {
    default: "MACARONI MOUSE | インフラのプロが作る、止まらない・速いWeb構築",
    template: "%s | MACARONI MOUSE"
  },
  description: "17年のインフラ経験を持つフルスタックエンジニアによるWeb制作。Next.js × Edge Runtimeによる爆速なサイト構築と、SaaS開発の実績をご提案します。",
  openGraph: {
    title: "MACARONI MOUSE | インフラのプロが作る、止まらない・速いWeb構築",
    description: "現役インフラエンジニアによる高品質なWeb制作ソリューション。",
    url: 'https://your-portfolio.pages.dev',
    siteName: 'MACARONI MOUSE Portfolio',
    images: [
      {
        url: '/images/macaroni-logo.png', // OGP画像（ロゴなど）
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MACARONI MOUSE | インフラのプロが作る、止まらない・速いWeb構築",
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
    "name": "MACARONI MOUSE",
    "image": "https://your-portfolio.pages.dev/images/macaroni-logo.png",
    "description": "インフラ構築とWebアプリ開発のプロフェッショナルサービス",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "JP"
    }
  };

  return (
    <html lang="ja">
      <head>
        {/* JSON-LDの挿入 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* 3. bodyタグは必須です */}
      <body className="antialiased">
        {/* 背景のザラザラ演出 */}
        <GrainOverlay />

        {/* 滑らかなスクロール演出 */}
        <SmoothScroll />

        {/* ページの中身 */}
        {children}
      </body>
    </html>
  );
}