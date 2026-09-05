import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/menuData';
import { playSound } from '../utils/sound';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    playSound('click');
    setCurrentIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    playSound('click');
    setCurrentIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E6DFD5]">
      
      {/* Title */}
      <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C59B27] block">
          REVIEWS
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1612]">
          Loved by <span className="italic text-[#C59B27]">Critics & Connoisseurs</span>
        </h2>
      </div>

      {/* Large Editorial Card */}
      <div className="max-w-4xl mx-auto bg-[#FAF8F5] p-8 sm:p-14 rounded-3xl border border-[#E6DFD5] shadow-sm relative">
        <Quote className="w-16 h-16 text-[#C59B27]/10 absolute top-6 left-6 pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center space-y-6 relative z-10"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 text-[#C59B27]">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C59B27]" />
              ))}
            </div>

            {/* Quote */}
            <p className="font-serif text-lg sm:text-2xl text-[#1A1612] italic font-normal leading-relaxed max-w-2xl">
              "{current.comment}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#E6DFD5]">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-12 h-12 rounded-full object-cover border border-[#E6DFD5]"
              />
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-serif text-[#1A1612] font-semibold text-base">{current.name}</h4>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#556B2F]" title="Verified Patron" />
                </div>
                <p className="text-xs text-[#6B5744]">{current.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Controls */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E6DFD5]">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white text-[#1A1612] border border-[#E6DFD5] hover:border-[#1A1612] transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { playSound('click'); setCurrentIndex(idx); }}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#C59B27]' : 'w-2 bg-[#E6DFD5]'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white text-[#1A1612] border border-[#E6DFD5] hover:border-[#1A1612] transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </section>
  );
}
