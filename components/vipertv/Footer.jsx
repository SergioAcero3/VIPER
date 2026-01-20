import React from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from './config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Links */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <span className="text-xl font-black">
              <span className="text-white">VIPER</span>
              <span className="text-red-600"> TV</span>
            </span>
            
            <div className="flex items-center gap-6 text-sm">
              <button onClick={() => scrollTo('planes')} className="text-gray-400 hover:text-white transition-colors">
                Planes
              </button>
              <button onClick={() => scrollTo('pagos')} className="text-gray-400 hover:text-white transition-colors">
                Pagos
              </button>
              <a 
                href={getWhatsAppLink("Hola, tengo una consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-red-500 hover:text-red-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm text-gray-400 hover:text-white"
          >
            <ArrowUp className="w-4 h-4" />
            Volver arriba
          </button>
        </div>

        {/* Copyright & Legal */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} VIPER TV — Soporte por WhatsApp
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Marca y diseño demostrativos. Contenido sujeto a disponibilidad.
          </p>
        </div>
      </div>
    </footer>
  );
}
