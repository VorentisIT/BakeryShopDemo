import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import CakeBuilder from './CakeBuilder';
import { playSound } from '../utils/sound';

export default function CustomCakeModal({ isOpen, onClose, onAddToCart }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        playSound('click');
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2 }}
          className="bg-[#FFF8EE] rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-[#E9D8C5] relative overflow-hidden my-auto"
        >
          {/* High-contrast Sticky Modal Top Bar */}
          <div className="flex items-center justify-between bg-white px-5 sm:px-8 py-3.5 sm:py-4 border-b border-[#E9D8C5] shadow-xs shrink-0 z-30">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5A2E1F] animate-pulse" />
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2B1A14]">Custom Cake Studio</h3>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] uppercase font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#F4E5D2] text-[#5A2E1F]">
                <Sparkles className="w-3 h-3 text-[#C9823A]" />
                Bespoke Atelier
              </span>
            </div>

            <button
              onClick={() => {
                playSound('click');
                onClose();
              }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#5A2E1F] text-[#FFF8EE] hover:bg-[#3E1F16] hover:text-white flex items-center justify-center shadow-md transition-all cursor-pointer active:scale-90 shrink-0"
              title="Close Custom Cake Studio (Esc)"
              aria-label="Close"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Scrollable Cake Configurator Body */}
          <div className="overflow-y-auto p-4 sm:p-8 flex-1 bg-[#FFF8EE]">
            <CakeBuilder
              onAddToCart={(customCake) => {
                onAddToCart(customCake);
                onClose();
              }}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
