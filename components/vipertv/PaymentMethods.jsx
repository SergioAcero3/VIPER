import React from 'react';
import { DollarSign, Building2, Globe, MessageCircle, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from './config';
import { motion } from 'framer-motion';

export default function PaymentMethods() {
  const methods = [
    {
      icon: DollarSign,
      region: "USA",
      method: "Zelle Instantáneo",
      color: "from-blue-500 to-indigo-500",
      message: "Hola, quiero pagar. Estoy en USA (Zelle)."
    },
    {
      icon: Building2,
      region: "MÉXICO",
      method: "Transferencia o Depósito (SPEI)",
      color: "from-emerald-500 to-green-500",
      message: "Hola, quiero pagar. Estoy en México (SPEI)."
    },
    {
      icon: Globe,
      region: "INTERNACIONAL",
      method: "PayPal y Criptomonedas",
      color: "from-purple-500 to-pink-500",
      message: "Hola, quiero pagar. Estoy en otro país (PayPal/Crypto)."
    }
  ];

  return (
    <section id="pagos" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Métodos de Pago
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Elige el método más conveniente para tu región
          </p>
        </motion.div>

        {/* Payment Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 text-center">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>

                {/* Region */}
                <p className="text-sm font-semibold text-red-400 mb-2">{method.region}</p>
                
                {/* Method */}
                <h3 className="text-xl font-bold text-white mb-6">{method.method}</h3>

                {/* CTA */}
                <a 
                  href={getWhatsAppLink(method.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white rounded-full">
                    Quiero pagar
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-red-500" />
            <span>Confirmación rápida por WhatsApp</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span>Soporte durante el pago</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
