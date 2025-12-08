import type { Metadata } from "next";
import "./globals.css";
import GrainOverlay from "@/components/GrainOverlay";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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