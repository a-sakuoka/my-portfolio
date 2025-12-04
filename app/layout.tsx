import type { Metadata } from "next";
import "./globals.css"; // ★★★ これが消えているのが原因です！ ★★★
import GrainOverlay from "@/components/GrainOverlay";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor"; // これもあれば戻しておきます

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
      <body className="antialiased bg-[#f4f4f4] text-[#1a1a1a]">
        {/* 背景のノイズ効果 */}
        <GrainOverlay />
        {/* スムーススクロール */}
        <SmoothScroll />
        {/* カスタムカーソル（PCのみ） */}
        <div className="hidden lg:block">
          <CustomCursor />
        </div>

        {/* ページの中身 */}
        {children}
      </body>
    </html>
  );
}