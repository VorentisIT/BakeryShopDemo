import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import hdChefCraft from '../assets/hd_chef_craft.jpg';
import heroVideo from '../assets/heroframes/herovideo.mp4';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#181310] text-[#FAF8F5] rounded-3xl max-w-3xl w-full p-6 shadow-2xl border border-[#42372E] relative overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-[#5A2E1F] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Video Container */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black mb-4 flex items-center justify-center">
            <video
              src={heroVideo}
              poster={hdChefCraft}
              autoPlay
              controls
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#FAF8F5]">
              "Crafting Perfection: The French Pâtisserie Way"
            </h3>
            <p className="text-xs text-[#C7B7A6] font-light leading-relaxed">
              Step inside the Délice atelier at dawn as our master chefs whip organic Normandy butter, fold 70% dark Valrhona cocoa ganache, and pipe delicate rosettes onto bespoke celebration cakes.
            </p>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
