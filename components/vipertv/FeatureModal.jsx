import React from 'react';
import { X, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from './config';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeatureModal({ isOpen, onClose, title, children, category }) {
  if (!isOpen) return null;

  const message = `Hola, quiero más información sobre ${category}.`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-white/10 shadow-2xl"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-xl border-b border-white/10">
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(85vh-140px)] p-6">
            {children}
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 px-6 py-4 bg-black/80 backdrop-blur-xl border-t border-white/10">
            <a 
              href={getWhatsAppLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold rounded-full py-6">
                <MessageCircle className="w-5 h-5 mr-2" />
                Hablar por WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
