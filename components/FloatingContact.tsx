"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FloatingContact() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // ハイドレーションエラー防止
    if (!mounted) return null;

    return (
        <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-3 pointer-events-none">
            {/* 吹き出し：常に表示 */}
            <div className="bg-cyan-500 text-black text-sm md:text-base font-bold px-6 py-2 rounded-full shadow-2xl animate-bounce whitespace-nowrap pointer-events-auto">
                まずはお問い合わせから！
                <div className="absolute -bottom-1 right-8 w-3 h-3 bg-cyan-500 rotate-45"></div>
            </div>

            {/* メインボタン：常に表示 */}
            <Link href="/contact" className="pointer-events-auto">
                <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)] border-4 border-white flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-300">
                    <Image
                        src="/images/macaroni-logo.png"
                        alt="Contact Macaroni"
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                </div>
            </Link>
        </div>
    );
}