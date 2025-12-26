import type { Metadata } from "next";
import "./globals.css";
import GrainOverlay from "@/components/GrainOverlay";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "ポートフォリオ | インフラエンジニアが作る高速Web構築",
  description: "現役インフラエンジニアによるNext.jsを用いた高速開発。安定性と速度を両立したWebサイト・システムをご提案します。",
  // Open Graph (SNSシェア時の見栄え) を設定するとさらに良いです
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      {/* antialiased: フォントを滑らかにするクラス */}
      <body className="antialiased">
        {/* 背景のザラザラ演出 */}
        <GrainOverlay />

        {/* 滑らかなスクロール演出 */}
        <SmoothScroll />

        {/* CustomCursor は削除しました */}

        {/* ページの中身 */}
        {children}
      </body>
    </html>
  );
}