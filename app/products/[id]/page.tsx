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

// ↓↓↓ この1行がCloudflare Pagesでの動作に必須です ↓↓↓
export const runtime = "edge";

export default function ProductPage({ params }: ProductPageProps) {
  // Next.js 15以降の非同期paramsの取得方法
  const { id } = use(params);
  const router = useRouter();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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
    <div className="relative">
      <Header />
      
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        onClick={() => router.back()}
        className="fixed top-24 left-8 md:left-16 z-40 text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors text-sm md:text-base mix-blend-difference text-white"
      >
        ← Back
      </motion.button>

      {/* Hero Section */}
      <section className="min-h-[60vh] md:min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full">
                {product.category}
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full">
                {product.type === 'Subscription' ? 'サブスク' : '買い切り'}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-4 md:mb-6">
              {product.title}
            </h1>
            {product.catchphrase && (
              <p className="text-xl md:text-2xl lg:text-3xl text-white/95 font-light mb-4 md:mb-6 max-w-2xl">
                {product.catchphrase}
              </p>
            )}
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light max-w-2xl">
              {product.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            {/* Content Area */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg max-w-none"
              >
                <h2 className="text-2xl md:text-3xl font-light mb-6 text-[#1a1a1a]">
                  商品について
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    {product.title}は、モダンなテクノロジーと洗練されたデザインを組み合わせた、高品質なソリューションです。
                  </p>
                  <p>
                    使いやすさと機能性を両立し、日々の業務や生活をより効率的に、そして楽しくすることを目指しています。
                  </p>
                  <p>
                    詳細な機能や使い方については、購入後に提供されるドキュメントをご確認ください。
                  </p>
                </div>

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <>
                    <h2 className="text-2xl md:text-3xl font-light mb-6 mt-12 text-[#1a1a1a]">
                      主な機能
                    </h2>
                    <ul className="space-y-3 text-gray-600 mb-12">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-3 text-[#1a1a1a]">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Tech Stack */}
                {product.techStack && product.techStack.length > 0 && (
                  <>
                    <h2 className="text-2xl md:text-3xl font-light mb-6 text-[#1a1a1a]">
                      技術スタック
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-12">
                      {product.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 text-sm font-medium text-[#1a1a1a] bg-[#1a1a1a]/5 rounded-full border border-[#1a1a1a]/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {/* Fallback Features (if no features provided) */}
                {(!product.features || product.features.length === 0) && (
                  <>
                    <h2 className="text-2xl md:text-3xl font-light mb-6 mt-12 text-[#1a1a1a]">
                      主な特徴
                    </h2>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>直感的で使いやすいインターフェース</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>高速で安定したパフォーマンス</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>定期的なアップデートとサポート</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3">•</span>
                        <span>充実したドキュメントとチュートリアル</span>
                      </li>
                    </ul>
                  </>
                )}
              </motion.div>
            </div>

            {/* Purchase Area - Sticky */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:sticky lg:top-24"
              >
                <div className="bg-white border border-[#1a1a1a]/10 rounded-lg p-6 md:p-8 shadow-sm">
                  <div className="space-y-6">
                    {/* Price */}
                    <div>
                      <p className="text-sm text-gray-600 mb-2">価格</p>
                      <p className="text-3xl md:text-4xl font-semibold text-[#1a1a1a]">
                        {product.price}
                      </p>
                    </div>

                    {/* Purchase Button */}
                    <button
                      onClick={() => {
                        if (product.checkoutUrl && product.checkoutUrl !== '#') {
                          window.open(product.checkoutUrl, '_blank');
                        }
                      }}
                      className="w-full py-4 px-6 bg-[#1a1a1a] text-white font-medium rounded-lg hover:bg-[#1a1a1a]/90 transition-colors text-center"
                    >
                      {product.price === 'Free Beta' 
                        ? 'Try Free Beta' 
                        : product.type === 'Subscription' 
                        ? 'Subscribe' 
                        : 'Purchase'}
                    </button>

                    {/* Additional Info */}
                    <div className="pt-4 border-t border-[#1a1a1a]/10 space-y-3 text-sm text-gray-600">
                      <p>• 即座に利用開始可能</p>
                      <p>• 30日間の返金保証</p>
                      <p>• サポート付き</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}