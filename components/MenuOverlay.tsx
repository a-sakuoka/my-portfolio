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
    { label: 'Home', href: '/' },
    { label: '01 / MARKET', href: '/#market' },
    { label: '02 / SERVICES', href: '/#services' },
    { label: '03 / PROCESS', href: '/#process' },
    { label: '04 / FAQ', href: '/#faq' },
    { label: '05 / ABOUT', href: '/#about' },
    { label: 'Contact', href: '/contact' },
  ];

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
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] hover:opacity-60 transition-opacity"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
