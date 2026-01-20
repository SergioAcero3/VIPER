import React, { useState } from 'react';
import Navbar from '@/components/vipertv/Navbar';
import Hero from '@/components/vipertv/Hero';
import Features from '@/components/vipertv/Features';
import Pricing from '@/components/vipertv/Pricing';
import PaymentMethods from '@/components/vipertv/PaymentMethods';
import FAQ from '@/components/vipertv/FAQ';
import CTASection from '@/components/vipertv/CTASection';
import Footer from '@/components/vipertv/Footer';

export default function Home() {
  const [currency, setCurrency] = useState('USD');

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Global styles */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0f;
        }
        ::-webkit-scrollbar-thumb {
          background: #dc2626;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #b91c1c;
        }

        /* Selection */
        ::selection {
          background: rgba(220, 38, 38, 0.3);
          color: white;
        }
      `}</style>

      <Navbar currency={currency} setCurrency={setCurrency} />
      
      <main>
        <Hero />
        <Features />
        <Pricing currency={currency} />
        <PaymentMethods />
        <CTASection />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
}
