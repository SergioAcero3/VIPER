import React, { useState } from 'react';
import { Trophy, Film, Smartphone, ArrowRight } from 'lucide-react';
import { CONFIG } from './config';
import FeatureModal from './FeatureModal';
import { motion } from 'framer-motion';

export default function Features() {
  const [activeModal, setActiveModal] = useState(null);

  const features = [
    {
      id: 'sports',
      icon: Trophy,
      title: "Deportes en Vivo",
      description: "Vive la emoción de la Champions, NFL, NBA y mucho más en máxima definición.",
      cta: "VER LIGAS DISPONIBLES",
      image: "https://images.unsplash.com/photo-1461896836934-ece2bd6fe6c0?w=600&q=80"
    },
    {
      id: 'movies',
      icon: Film,
      title: "Cine y Series",
      description: "Los últimos estrenos de la cartelera y las mejores series originales de todas las plataformas.",
      cta: "VER CATÁLOGO",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80"
    },
    {
      id: 'devices',
      icon: Smartphone,
      title: "Multi-dispositivo",
      description: "Compatible con Fire Stick, Smart TV, Android, iPhone y más. Sin instalaciones complejas.",
      cta: "DISPOSITIVOS",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Todo lo que necesitas
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Contenido premium ilimitado para toda la familia
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveModal(feature.id)}
              className="group cursor-pointer"
            >
              <div className="relative h-full rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 overflow-hidden backdrop-blur-sm hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10">
                    <feature.icon className="w-6 h-6 text-red-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-red-500 text-sm font-semibold group-hover:text-red-400 transition-colors">
                    {feature.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sports Modal */}
      <FeatureModal 
        isOpen={activeModal === 'sports'} 
        onClose={() => setActiveModal(null)}
        title="Deportes en Vivo"
        category="Deportes"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {CONFIG.sports.map((sport, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-red-500/50 transition-all">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={sport.image} 
                  alt={sport.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1461896836934-ece2bd6fe6c0?w=400&q=80'; }}
                />
              </div>
              <div className="p-3">
                <p className="text-white font-medium text-sm">{sport.name}</p>
                <p className="text-gray-500 text-xs">{sport.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </FeatureModal>

      {/* Movies Modal */}
      <FeatureModal 
        isOpen={activeModal === 'movies'} 
        onClose={() => setActiveModal(null)}
        title="Cine y Series"
        category="Cine y Series"
      >
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">🎬 Películas del Momento</h3>
            <div className="grid grid-cols-2 gap-4">
              {CONFIG.movies.map((movie, index) => (
                <div key={index} className="group flex gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all">
                  <div className="w-20 h-28 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={movie.image} 
                      alt={movie.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80'; }}
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{movie.name}</p>
                    <p className="text-gray-500 text-xs mt-1">{movie.genre}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">📺 Series del Momento</h3>
            <div className="grid grid-cols-2 gap-4">
              {CONFIG.series.map((serie, index) => (
                <div key={index} className="group flex gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all">
                  <div className="w-20 h-28 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={serie.image} 
                      alt={serie.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&q=80'; }}
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{serie.name}</p>
                    <p className="text-gray-500 text-xs mt-1">{serie.genre}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FeatureModal>

      {/* Devices Modal */}
      <FeatureModal 
        isOpen={activeModal === 'devices'} 
        onClose={() => setActiveModal(null)}
        title="Multi-dispositivo"
        category="Multi-dispositivo"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            {CONFIG.devices.map((device, index) => (
              <div key={index} className="group text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all">
                <div className="w-full aspect-square rounded-lg overflow-hidden mb-3">
                  <img 
                    src={device.image} 
                    alt={device.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&q=80'; }}
                  />
                </div>
                <p className="text-white text-sm font-medium">{device.name}</p>
              </div>
            ))}
          </div>
          
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
            <p className="text-red-400 text-sm font-medium flex items-center gap-2">
              <span className="text-lg">✅</span>
              Total compatibilidad: Funciona en todos los dispositivos modernos sin instalaciones complejas.
            </p>
          </div>
        </div>
      </FeatureModal>
    </section>
  );
}
