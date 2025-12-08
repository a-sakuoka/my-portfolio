'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  // メニューが開いているときはスクロールを無効化
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { label: 'Home', id: 'hero', href: '/', isLink: true },
    { label: 'About', id: 'about', href: '/#about' },
    { label: 'Works', id: 'works', href: '/#works' },
    { label: 'Contact', id: 'contact', href: '/contact', isLink: true },
  ];

  const handleMenuClick = (item: { id: string; href: string; isLink?: boolean }) => {
    onClose();
    if (item.isLink) return;

    setTimeout(() => {
      const element = document.getElementById(item.id);
      if (element) {
        const lenisInstance = (window as any).lenis;
        if (lenisInstance) {
          lenisInstance.scrollTo(element, {
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        } else {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (item.href.startsWith('/#')) {
        window.location.href = item.href;
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#f4f4f4] z-[9998]"
            onClick={onClose}
          />

          {/* Menu Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center px-8 md:px-16 lg:px-24"
          >
            {/* Close Button - Top Right */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 md:top-16 md:right-16 text-[#1a1a1a] text-lg md:text-xl font-light hover:opacity-60 transition-opacity"
            >
              Close
            </button>

            {/* Menu Items */}
            <nav className="flex flex-col items-center gap-4 md:gap-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {item.isLink ? (
                    <Link
                      href={item.href}
                      onClick={() => onClose()}
                      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#1a1a1a] hover:opacity-60 transition-opacity"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleMenuClick(item)}
                      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#1a1a1a] hover:opacity-60 transition-opacity"
                    >
                      {item.label}
                    </button>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
