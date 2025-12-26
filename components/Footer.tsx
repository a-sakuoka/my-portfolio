"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">

        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Contact
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl">
          Web制作、システム開発のご相談やお見積もりなど、<br className="hidden md:block" />
          お気軽にお問い合わせください。
        </p>

        <a
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-transform hover:scale-105 mb-20"
        >
          お問い合わせはこちら
        </a>

        {/* マカロニさんの演出部分：サイズを大幅アップ */}
        <div className="flex justify-center mb-16">
          <div className="relative group cursor-help">

            {/* メッセージ：サイズを text-sm (14px) ~ text-base (16px) にアップ */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-sm md:text-base px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 whitespace-nowrap font-bold shadow-[0_10px_25px_rgba(34,211,238,0.4)] z-20">
              マカロニさんもお待ちしてます！
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-500 rotate-45"></div>
            </div>

            {/* 丸枠：w-16 (64px) から w-32 (128px) 規模へ拡大 */}
            <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full p-4 shadow-2xl border-4 border-white/10 group-hover:border-cyan-500 transition-all duration-500 overflow-hidden flex items-center justify-center relative">
              <Image
                src="/images/macaroni-logo.png"
                alt="Macaroni Mouse"
                width={120} // 画像自体の解像度も高めに指定
                height={120}
                className="object-contain transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* 背後で少し光らせる演出（より存在感を出すため） */}
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
          </div>
        </div>

        {/* フッター下部エリア */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs md:text-sm text-gray-500">
          <div className="flex flex-col md:items-start items-center gap-2">
            <p>&copy; {new Date().getFullYear()} MACARONI MOUSE / Portfolio.</p>
            <p className="text-[10px] opacity-50 uppercase tracking-widest text-center md:text-left">
              Built with Next.js & Edge Runtime
            </p>
          </div>

          <div className="flex gap-8">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Twitter (X)</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="https://qiita.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Qiita</a>
          </div>
        </div>

      </div>

      {/* 背景の装飾的な要素（オプション） */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] -z-0"></div>
    </footer>
  );
}