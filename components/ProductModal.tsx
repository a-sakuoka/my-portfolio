"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
// ChevronRight を追加済み
import { X, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/types";

interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            setCurrentImageIndex(0);
        }
    }, [isOpen, product]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const nextImage = () => {
        if (!product) return;
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = () => {
        if (!product) return;
        setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    return (
        <AnimatePresence>
            {isOpen && product && (
                <>
                    {/* 背景オーバーレイ */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    >
                        {/* モーダル本体 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden bg-[#0B1120] text-white rounded-2xl shadow-2xl border border-white/10 flex flex-col md:flex-row"
                        >
                            {/* 閉じるボタン */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-white/20 rounded-full transition-colors backdrop-blur-md"
                            >
                                <X size={24} />
                            </button>

                            {/* 左側：テキスト情報エリア */}
                            <div className="w-full md:w-5/12 p-8 md:p-10 flex flex-col gap-6 overflow-y-auto max-h-[50vh] md:max-h-full custom-scrollbar">
                                <div>
                                    <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-cyan-400 border border-cyan-400/30 rounded-full mb-4">
                                        {product.category}
                                    </span>
                                    <h2 className="text-3xl font-bold mb-2 leading-tight">
                                        {product.name}
                                    </h2>
                                    <div className="w-20 h-1 bg-cyan-500 mb-6"></div>

                                    <div className="pl-4 border-l-4 border-amber-400 bg-white/5 p-4 rounded-r-lg mb-6">
                                        <p className="text-base md:text-lg font-medium leading-relaxed text-gray-100 whitespace-pre-wrap">
                                            {product.tagline}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">主な機能</h3>
                                    <ul className="space-y-2">
                                        {product.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                                <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-cyan-400" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-amber-400 font-bold mb-3 flex items-center gap-2">解決できる悩み</h3>
                                    <ul className="space-y-2">
                                        {product.problemsSolved.map((prob, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                                <CheckCircle size={16} className="text-amber-400 mt-0.5 shrink-0" />
                                                {prob}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/10">
                                    <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 text-sm">
                                        <p className="text-blue-200 mb-1">
                                            <span className="font-bold text-blue-400">価格:</span> {product.price}
                                        </p>
                                        <p className="text-blue-200">
                                            <span className="font-bold text-blue-400">ターゲット:</span> {product.target}
                                        </p>
                                    </div>

                                    {/* 技術スタック */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {product.techStack.map((tech) => (
                                            <span key={tech} className="px-3 py-1 text-xs bg-white/10 rounded-md text-gray-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* ▼▼ URLがある場合のみ表示するボタン ▼▼ */}
                                    {product.url && (
                                        <div className="mt-8">
                                            <a
                                                href={product.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-colors w-full md:w-auto shadow-lg hover:shadow-cyan-500/20"
                                            >
                                                デモサイトを見る
                                                <ChevronRight size={18} />
                                            </a>
                                        </div>
                                    )}
                                    {/* ▲▲ ここまで ▲▲ */}
                                </div>
                            </div>

                            {/* 右側：画像スライダーエリア */}
                            <div className="w-full md:w-7/12 bg-gray-900 relative min-h-[300px] md:h-auto flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 pointer-events-none" />

                                <div className="relative w-full h-full flex items-center justify-center p-8">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentImageIndex}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="relative w-full h-full flex items-center justify-center"
                                        >
                                            <Image
                                                src={product.images[currentImageIndex]}
                                                alt={`${product.name} Image ${currentImageIndex + 1}`}
                                                width={800}
                                                height={600}
                                                className="object-contain w-full h-full max-h-[600px] rounded-lg shadow-2xl border border-white/10"
                                                unoptimized
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {product.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-cyan-500 hover:text-black text-white rounded-full backdrop-blur-sm transition-all z-10"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-cyan-500 hover:text-black text-white rounded-full backdrop-blur-sm transition-all z-10"
                                        >
                                            <ChevronRight size={24} />
                                        </button>

                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                            {product.images.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setCurrentImageIndex(idx)}
                                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex
                                                            ? "bg-cyan-400 w-6"
                                                            : "bg-white/30 hover:bg-white/60"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}