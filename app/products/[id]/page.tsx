'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById } from '@/data/products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export const runtime = "edge";

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const router = useRouter();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f4f4]">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">商品が見つかりません</h1>
          <Link href="/" className="text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">
            ホームに戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-[#f4f4f4] min-h-screen text-[#1a1a1a]">
      <Header />

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onClick={() => router.back()}
        className="fixed top-24 left-8 md:left-16 z-40 text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors text-sm md:text-base mix-blend-difference"
      >
        ← Back
      </motion.button>

      {/* Hero Section */}
      <section className="min-h-[60vh] md:min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-cyan-500/80 backdrop-blur-sm rounded-full text-white">
                {product.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 font-medium mb-4 md:mb-6 max-w-2xl whitespace-pre-wrap">
              {product.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">主な機能</h2>
                <ul className="space-y-4 mb-12">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <span className="mr-3 text-cyan-500">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold mb-6">解決できる悩み</h2>
                <ul className="space-y-4 mb-12">
                  {product.problemsSolved.map((prob, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <span className="mr-3 text-amber-500">✓</span>
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold mb-6">技術スタック</h2>
                <div className="flex flex-wrap gap-2 mb-12">
                  {product.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm font-medium text-[#1a1a1a] bg-white border border-[#1a1a1a]/10 rounded-lg shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white border border-[#1a1a1a]/10 rounded-2xl p-6 md:p-8 shadow-sm">
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">価格</p>
                      <p className="text-3xl font-bold text-[#1a1a1a]">{product.price}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">ターゲット</p>
                      <p className="text-[#1a1a1a]">{product.target}</p>
                    </div>

                    {product.url && (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 bg-cyan-600 text-white font-bold rounded-xl hover:bg-cyan-500 transition-colors text-center shadow-lg shadow-cyan-600/20"
                      >
                        デモサイトを見る
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}