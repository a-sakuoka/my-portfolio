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
};

export default nextConfig;