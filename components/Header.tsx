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
      <header className="fixed top-0 w-full z-50 px-8 md:px-16 lg:px-24 py-6 md:py-8 pointer-events-none">
        <div className="flex justify-between items-center pointer-events-auto">
          {/* 元の '>_' ロゴに戻します */}
          <Link href="/" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a1a1a] flex items-center justify-center">
              <span className="text-white font-mono font-bold text-lg md:text-xl tracking-tighter">{'>_'}</span>
            </div>
            {/* ロゴの横に名前を添える（スクロール時は黒、トップ時は白になるようtextColorClassを適用） */}
            <span className={`font-bold tracking-wider text-sm md:text-base ${textColorClass}`}>
              MACARONI
            </span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${textColorClass} transition-colors duration-300 text-base md:text-lg font-light tracking-wide hover:opacity-80`}
          >
            Menu
          </button>
        </div>
      </header>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}