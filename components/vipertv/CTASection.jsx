import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from './config';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1920&q=80" 
          alt="Ready to start"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
      </div>
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            ¿LISTO PARA COMENZAR?
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Únete a <span className="text-red-500 font-semibold">miles de clientes satisfechos</span>. 
            Prueba el demo gratis y convéncete.
          </p>

          <a 
            href={getWhatsAppLink("Hola, quiero solicitar el demo gratis de 3 horas.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-7 text-lg rounded-full shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              SOLICITAR DEMO 3 HORAS
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
