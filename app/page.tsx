'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Market from '@/components/Market';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Market />
      <Footer />
    </main>
  );
}

