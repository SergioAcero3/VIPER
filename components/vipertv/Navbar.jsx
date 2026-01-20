import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from './config';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ currency, setCurrency }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl md:text-3xl font-black tracking-tight">
              <span className="text-white">VIPER</span>
              <span className="text-red-600"> TV</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('planes')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Planes
            </button>
            <button onClick={() => scrollTo('pagos')} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Pagos
            </button>
            
            {/* Currency Toggle */}
            <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  currency === 'USD' 
                    ? 'bg-red-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                USD
              </button>
              <button
                onClick={() => setCurrency('MXN')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  currency === 'MXN' 
                    ? 'bg-red-600 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                MXN
              </button>
            </div>

            <a 
              href={getWhatsAppLink("Hola, quiero solicitar el demo gratis de 3 horas.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 rounded-full shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all">
                <MessageCircle className="w-4 h-4 mr-2" />
                DEMO GRATIS
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center bg-white/5 rounded-full p-0.5 border border-white/10">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2 py-0.5 rounded-full text-xs font-semibold transition-all ${
                  currency === 'USD' ? 'bg-red-600 text-white' : 'text-gray-400'
                }`}
              >
                USD
              </button>
              <button
                onClick={() => setCurrency('MXN')}
                className={`px-2 py-0.5 rounded-full text-xs font-semibold transition-all ${
                  currency === 'MXN' ? 'bg-red-600 text-white' : 'text-gray-400'
                }`}
              >
                MXN
              </button>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollTo('planes')} className="block w-full text-left text-gray-300 hover:text-white py-2">
                Planes
              </button>
              <button onClick={() => scrollTo('pagos')} className="block w-full text-left text-gray-300 hover:text-white py-2">
                Pagos
              </button>
              <a 
                href={getWhatsAppLink("Hola, quiero solicitar el demo gratis de 3 horas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold rounded-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  DEMO GRATIS
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
