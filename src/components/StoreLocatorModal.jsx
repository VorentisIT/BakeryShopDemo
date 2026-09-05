import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';
import { playSound } from '../utils/sound';

export default function StoreLocatorModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const stores = [
    {
      city: 'Paris Flagship Patisserie',
      address: '14 Rue Royale, 75008 Paris, France',
      hours: 'Mon-Sun: 06:00 AM - 08:00 PM',
      phone: '+33 1 42 68 55 00',
      status: 'Open Now • Warm Oven Deck Active'
    },
    {
      city: 'New York Artisan House',
      address: '420 West Broadway, Soho, NY 10012',
      hours: 'Mon-Sun: 06:30 AM - 07:30 PM',
      phone: '+1 (212) 555-0199',
      status: 'Open Now • Fresh Batch Ready'
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#121110]/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl z-10 bg-[#1C1A18]"
        >
          <button
            onClick={() => { playSound('click'); onClose(); }}
            className="absolute top-4 right-4 p-2 rounded-full text-amber-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center max-w-md mx-auto mb-6">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              Flagship Locations
            </span>
            <h2 className="font-serif text-2xl font-bold text-white mt-1">
              Visit L'Étoile Patisserie
            </h2>
          </div>

          <div className="space-y-4">
            {stores.map((store, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                      {store.status}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-white text-base">
                    {store.city}
                  </h3>
                  <p className="text-xs text-amber-100/70 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{store.address}</span>
                  </p>
                  <p className="text-xs text-amber-100/60 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{store.hours}</span>
                  </p>
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(store.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold flex items-center gap-1.5 hover:bg-amber-500/30 shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
