'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import MenuOverlay from '@/components/MenuOverlay';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTopPage = pathname === '/';
  const textColorClass = (isTopPage && !isScrolled) ? 'text-white' : 'text-[#1a1a1a]';

  return (
    <>
      <header className="fixed top-0 w-full z-50 px-6 md:px-16 lg:px-24 py-4 md:py-6 pointer-events-none">
        <div className="flex justify-between items-center pointer-events-auto bg-white/10 backdrop-blur-md md:bg-transparent p-2 md:p-0 rounded-full">
          {/* ロゴ：MACARONIロゴを維持 */}
          <Link href="/" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a1a1a] flex items-center justify-center rounded-lg">
              <span className="text-white font-mono font-bold text-lg md:text-xl tracking-tighter">{'>_'}</span>
            </div>
            <span className={`font-bold tracking-wider text-sm md:text-base ${textColorClass}`}>
              MACARONI
            </span>
          </Link>

          {/* 右側：ナビゲーション（デスクトップでは常時表示） */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { name: '制作実績', href: '/#market' },
              { name: '料金プラン', href: '/#services' },
              { name: '制作の流れ', href: '/#process' },
              { name: 'よくある質問', href: '/#faq' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${textColorClass} text-sm font-medium hover:opacity-60 transition-opacity`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-cyan-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-600/20"
            >
              無料相談・見積もり
            </Link>
          </nav>

          {/* モバイル用メニューボタン（lg以下で表示） */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden ${textColorClass} transition-colors duration-300 text-base font-bold px-2`}
          >
            メニュー
          </button>
        </div>
      </header>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}