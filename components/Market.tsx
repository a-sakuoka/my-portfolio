"use client";
import { useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import ProductModal from "@/components/ProductModal";
import { Product } from "@/types";
import { motion } from "framer-motion";

export default function Market() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("すべて");

  const tabs = ["すべて", "Webシステム", "ツール", "ホームページ", "スマホアプリ"];

  // カテゴリ変換マップ
  const categoryMap: { [key: string]: string } = {
    "すべて": "All",
    "Webシステム": "SaaS",
    "ツール": "Tool",
    "ホームページ": "Web App",
    "スマホアプリ": "Mobile App"
  };

  const filteredProducts = activeTab === "すべて"
    ? products
    : products.filter(p => p.category.includes(categoryMap[activeTab]) || p.category.includes(activeTab));

  return (
    <section id="market" className="py-24 bg-white text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-8">
          <div>
            <span className="block text-sm font-bold text-gray-400 tracking-widest mb-4">
              01 / 制作実績
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              制作実績
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative text-sm font-bold transition-colors pb-2 ${activeTab === tab ? "text-cyan-600" : "text-gray-400 hover:text-gray-800"
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="underline" className="absolute left-0 right-0 bottom-0 h-0.5 bg-cyan-600" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              onClick={() => { setSelectedProduct(product); setIsModalOpen(true); }}
            >
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                <Image src={product.thumbnail} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-cyan-600 bg-cyan-50 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{product.tagline}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  );
}