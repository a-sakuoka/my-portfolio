'use client';

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products, Product, ProductCategory } from '@/data/products';

type FilterCategory = 'All' | 'SaaS' | 'Tool' | 'Others';

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/products/${product.id}`}>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <motion.div
          className="relative overflow-hidden mb-4 rounded-lg"
          style={{ aspectRatio: '16/9', backgroundColor: '#f0f0f0' }}
          animate={{
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          <motion.div
            className="w-full h-full"
            animate={{
              filter: isHovered ? 'brightness(1.05)' : 'brightness(1)',
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="space-y-3">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-medium text-[#1a1a1a] group-hover:text-[#1a1a1a]/80 transition-colors">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Problem Solved */}
          <div className="text-xs md:text-sm text-gray-500 mt-2">
            <span className="font-semibold text-gray-700 block mb-1">💡 解決した課題</span>
            {product.problemSolved}
          </div>

          {/* Badges and Price */}
          <div className="flex items-center justify-between gap-3">
            {/* Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 text-xs font-medium text-[#1a1a1a]/70 bg-[#1a1a1a]/5 rounded-full">
                {product.category}
              </span>
              <span className="px-2.5 py-1 text-xs font-medium text-[#1a1a1a]/70 bg-[#1a1a1a]/5 rounded-full">
                {product.type === 'Subscription' ? 'サブスク' : '買い切り'}
              </span>
            </div>

            {/* Price */}
            <span className="text-lg md:text-xl font-semibold text-[#1a1a1a] whitespace-nowrap">
              {product.price}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Market() {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('All');

  const filterOptions: FilterCategory[] = ['All', 'SaaS', 'Tool', 'Others'];

  const filteredProducts = useMemo(() => {
    if (selectedFilter === 'All') {
      return products;
    }
    if (selectedFilter === 'Others') {
      return products.filter(
        (product) => product.category !== 'SaaS' && product.category !== 'Tool'
      );
    }
    return products.filter((product) => product.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <section id="works" className="min-h-screen py-32 md:py-48 lg:py-64 px-8 md:px-16 lg:px-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* Left Column - Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <p className="text-sm md:text-base text-[#1a1a1a]/60 uppercase tracking-wider mb-8 md:mb-0">
              02 / MARKET
            </p>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-9"
          >
            {/* Filter Tabs */}
            <LayoutGroup>
              <div className="flex items-center gap-2 mb-8 md:mb-12 flex-wrap">
                {filterOptions.map((filter) => (
                  <motion.button
                    key={filter}
                    layout
                    onClick={() => setSelectedFilter(filter)}
                    className={`relative px-4 py-2 text-sm md:text-base font-medium transition-colors ${selectedFilter === filter
                        ? 'text-[#1a1a1a]'
                        : 'text-[#1a1a1a]/50 hover:text-[#1a1a1a]/70'
                      }`}
                  >
                    {filter}
                    {selectedFilter === filter && (
                      <motion.div
                        layoutId="activeFilter"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a1a1a]"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </LayoutGroup>

            {/* Products Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

