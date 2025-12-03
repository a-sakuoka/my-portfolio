'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Lenis for smooth scrolling with "sticky" feel
    const lenis = new Lenis({
      duration: 1.2,
      // より滑らかで粘り気のあるイージング関数（lerp: 0.1に近い効果）
      easing: (t) => {
        // より滑らかなイージングで「ヌルッとした」感覚を実現
        return 1 - Math.pow(1 - t, 3);
      },
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      // スクロール感度を少し下げて、より繊細な操作感に
      wheelMultiplier: 0.8,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Lenisインスタンスをグローバルに保存（MenuOverlayで使用）
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, [pathname]);

  return null;
}

