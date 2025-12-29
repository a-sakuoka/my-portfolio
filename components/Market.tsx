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
  const [activeTab, setActiveTab] = useState("All");

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const tabs = ["All", "SaaS", "Tool", "Template", "Mobile App", "Others"];

  const filteredProducts = activeTab === "All"
    ? products
    : products.filter(p => p.category.includes(activeTab));

  return (
    <section id="market" className="py-24 bg-[#f4f4f4] text-[#1a1a1a] font-sans">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* ヘッダーエリア */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="block text-sm font-bold text-gray-400 tracking-widest mb-4">
              01 / MARKET
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Works
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6 border-b border-gray-300 pb-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative text-sm font-medium transition-colors pb-2 -mb-1.5 ${activeTab === tab ? "text-cyan-600" : "text-gray-500 hover:text-gray-800"
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-cyan-600"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 商品グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            // 画像がない場合のフォールバック（プレースホルダー画像）
            // Next.jsのImageコンポーネントはsrcが空だとエラーになるためここでチェック
            const imageSrc = product.thumbnail ? product.thumbnail : "https://placehold.co/600x400/e2e8f0/1e293b?text=No+Image";

            return (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={product.id}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-cyan-100"
                onClick={() => openModal(product)}
              >
                {/* サムネイル */}
                <div className="aspect-video relative overflow-hidden bg-gray-200">
                  <Image
                    src={imageSrc}
                    alt={product.name || "Product Image"} // altも空だとエラーになるため対策
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized // 外部URL(placehold.co)を使う場合やCloudflare用
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* カード内容 */}
                <div className="p-6">
                  {/* Impact Tag (New) */}
                  {product.impact && (
                    <div className="mb-4">
                      <span className="inline-block bg-gradient-to-r from-yellow-400/20 to-orange-500/20 text-orange-600 text-xs font-bold px-2 py-1 rounded border border-orange-200">
                        {product.impact}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-2 py-1 rounded">
                      {product.category.split('/')[0].trim()}
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {product.price.split(' ')[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
}