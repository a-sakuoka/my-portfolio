'use client';

import { useState } from 'react';
import MenuOverlay from '@/components/MenuOverlay';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 px-8 md:px-16 lg:px-24 py-6 md:py-8 pointer-events-none">
        <div className="flex justify-between items-center pointer-events-auto">
          {/* Logo - Left */}
          <div className="text-white mix-blend-difference">
            <h1 className="text-xl md:text-2xl font-medium tracking-tight">
              Your Name
            </h1>
          </div>

          {/* Menu Button - Right */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white mix-blend-difference text-base md:text-lg font-light tracking-wide hover:opacity-80 transition-opacity"
          >
            Menu
          </button>
        </div>
      </header>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

