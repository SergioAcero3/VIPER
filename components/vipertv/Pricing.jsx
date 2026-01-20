import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { CONFIG, formatPrice, getWhatsAppLink } from './config';
import { motion } from 'framer-motion';

export default function Pricing({ currency }) {
  return (
    <section id="planes" className="py-20 md:py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Elige tu plan ideal
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Todos los planes incluyen acceso completo a +5,000 canales y soporte 24/7
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONFIG.plans.map((plan, index) => {
            const message = `Hola, quiero adquirir el plan de ${plan.duration} en ${currency}. ¿Cómo pago?`;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group ${plan.popular ? 'lg:-mt-4' : ''}`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold z-10 ${
                    plan.popular 
                      ? 'bg-red-600 text-white' 
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    <div className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className={`h-full rounded-2xl p-6 transition-all duration-500 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-red-500/20 to-red-500/10 border-2 border-red-500/50 shadow-2xl shadow-red-500/10' 
                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                } backdrop-blur-sm`}>
                  
                  {/* Duration */}
                  <h3 className="text-lg font-bold text-white mb-1">{plan.duration}</h3>
                  
                  {/* Price */}
                  <div className="mb-1">
                    <span className="text-4xl md:text-5xl font-black text-red-600">
                      {formatPrice(plan.priceUSD, currency).split(' ')[0]}
                    </span>
                    <span className="text-sm text-gray-400 ml-2">
                      {currency}
                    </span>
                  </div>
                  
                  {/* Subtitle */}
                  <p className="text-sm text-red-400 mb-6">{plan.subtitle}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a 
                    href={getWhatsAppLink(message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className={`w-full font-bold rounded-full py-6 transition-all ${
                      plan.popular
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/25 hover:shadow-red-500/40'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                    }`}>
                      ADQUIRIR
                    </Button>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
