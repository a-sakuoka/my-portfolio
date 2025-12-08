'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
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

  // 色の決定ロジック
  // トップページ (/) かつ スクロール前: 白文字
  // それ以外 (トップページでスクロール後、または別ページ): 黒文字
  const isTopPage = pathname === '/';
  const textColorClass = (isTopPage && !isScrolled) ? 'text-white' : 'text-[#1a1a1a]';

  return (
    <>
      <header className="fixed top-0 w-full z-50 px-8 md:px-16 lg:px-24 py-6 md:py-8 pointer-events-none">
        <div className="flex justify-between items-center pointer-events-auto">
          {/* Logo - Left */}
          <div className={`${textColorClass} transition-colors duration-300`}>
            <h1 className="text-xl md:text-2xl font-medium tracking-tight">
              Your Name
            </h1>
          </div>

          {/* Menu Button - Right */}
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

