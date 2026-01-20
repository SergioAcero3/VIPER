import React from 'react';
import { Play, MessageCircle, Tv, Smartphone, Zap, Headphones } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from './config';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToPlanes = () => {
    document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' });
  };

  const trustBadges = [
    { icon: Headphones, text: "Soporte WhatsApp" },
    { icon: Tv, text: "Calidad 4K/UHD" },
    { icon: Smartphone, text: "Multi-dispositivo" },
    { icon: Zap, text: "Activación rápida" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1920&q=80" 
          alt="Entertainment"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
      </div>
      
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%\" height=\"100%\" filter=\"url(%23noise)\"/%3E%3C/svg%3E")' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="text-white">TODO EL ENTRETENIMIENTO</span>
            <br />
            <span className="text-red-600">
              EN UN SOLO LUGAR
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Disfruta de la mejor televisión premium desde la comodidad de tu hogar. 
            <span className="text-white font-medium"> Estabilidad garantizada en 4K.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              onClick={scrollToPlanes}
              size="lg"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl shadow-red-500/25 hover:shadow-red-500/40 transition-all hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2 fill-current" />
              COMENZAR AHORA
            </Button>
            
            <a 
              href={getWhatsAppLink("Hola, quiero solicitar el demo gratis de 3 horas.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg"
                variant="outline"
                className="w-full border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                DEMO 3 HORAS GRATIS
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <badge.icon className="w-4 h-4 text-red-500" />
                <span className="text-sm text-gray-300">{badge.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Social Proof */}
          <p className="mt-8 text-sm text-gray-500">
            Únete a <span className="text-red-500 font-semibold">miles de clientes</span> satisfechos
          </p>
        </motion.div>
      </div>
    </section>
  );
}
