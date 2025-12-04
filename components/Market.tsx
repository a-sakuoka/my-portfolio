"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function Market() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = filter === "All"
    ? products
    : products.filter((p) => p.category === filter);

  return (
    <section id="works" className="py-24 md:py-32 bg-[#f4f4f4] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20">
          <div>
            <span className="text-xs font-mono text-gray-500 mb-4 block tracking-widest">
              02 / MARKET & WORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
              Selected Products
            </h2>
          </div>

          {/* フィルタリングボタン */}
          <div className="flex gap-4 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm px-4 py-2 rounded-full transition-all whitespace-nowrap ${filter === cat
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="group"
                >
                  <Link href={`/products/${product.id}`} className="block">
                    {/* 画像エリア：ここを厳格に固定 */}
                    <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-gray-200 shadow-sm mb-4">
                      <Image
                        src={product.imageUrl}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* 右上のバッジ */}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium rounded-full shadow-sm">
                        {product.type === 'Subscription' ? 'サブスク' : '買い切り'}
                      </div>
                    </div>

                    {/* テキスト情報 */}
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1 group-hover:text-gray-600 transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>
                      <span className="text-sm font-medium text-[#1a1a1a]">
                        {product.price}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}