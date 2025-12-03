import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Cloudflareの無料プランで必須の設定
    unoptimized: true,
  },
  // ↓以前のエラーの原因だった eslint 設定を削除しました
};

export default nextConfig;