'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Strengths from '@/components/Strengths';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import Market from '@/components/Market';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Strengths />
      <About />
      <Services />
      <Process />
      <FAQ />
      <Market />
      <Footer />
    </main>
  );
}

