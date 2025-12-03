'use client';

import { useState } from 'react';
import MenuOverlay from '@/components/MenuOverlay';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 px-8 md:px-16 lg:px-24 py-6 md:py-8">
        <div className="flex justify-between items-center">
          {/* Logo - Left */}
          <div className={isMenuOpen ? 'text-[#1a1a1a]' : 'text-white mix-blend-difference'}>
            <h1 className="text-xl md:text-2xl font-medium tracking-tight">
              Your Name
            </h1>
          </div>

          {/* Menu Button - Right */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={isMenuOpen ? 'text-[#1a1a1a]' : 'text-white mix-blend-difference text-base md:text-lg font-light tracking-wide hover:opacity-80 transition-opacity'}
          >
            Menu
          </button>
        </div>
      </header>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

