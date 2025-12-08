import type { Metadata } from "next";
import "./globals.css";
// GrainOverlayやSmoothScrollなどのimportは残す

// const inter = ... ← こういう定義があったら削除！

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
      {/* classNameから ${inter.variable} などを消して、シンプルにする */}
      <body className="antialiased">
        {/* GrainOverlayなどはここにあればそのまま残す */}
        {children}
      </body>
    </html>
  );
}