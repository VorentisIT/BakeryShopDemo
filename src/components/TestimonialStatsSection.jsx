import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { playSound } from '../utils/sound';
import aditiAvatar from '../assets/aditi_avatar.png';

export default function TestimonialStatsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const testimonials = [
    {
      quote: "“Absolutely the best cakes I've ever had! The taste, freshness and presentation were just perfect.”",
      name: "Aditi Sharma",
      role: "Verified Customer",
      avatar: aditiAvatar,
      rating: 5
    },
    {
      quote: "“The Grand Choco Noir Walnut Cake made our anniversary celebration unforgettable. Exquisite flavor!”",
      name: "Jean-Luc Vaneau",
      role: "Michelin Food Critic",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      quote: "“From the Normandy butter croissants to the delicate macarons, every creation is pure artisan perfection.”",
      name: "Sophia Martinez",
      role: "Verified Customer",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
      rating: 5
    }
  ];

  const t = testimonials[currentIdx];

  const nextT = () => {
    playSound('click');
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevT = () => {
    playSound('click');
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    /* Simple, clean, straight rectangle box section without any wave cuts */
    <section className="relative z-20 w-full bg-[#1A1412] text-[#FAF8F5] py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* 
            LEFT COLUMN (7 cols):
            1. "Loved by Thousands" title (centered)
            2. Quote text (centered)
            3. Bottom row: [ < Arrow ] ----- [ Avatar + Name + Stars ] ----- [ > Arrow ]
          */}
          <div className="lg:col-span-7 flex flex-col items-center text-center space-y-4 sm:space-y-5">
            
            {/* Heading */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#E8D8C4] tracking-wide">
              Loved by Thousands
            </h2>

            {/* Quote Area */}
            <div className="min-h-[52px] sm:min-h-[60px] flex items-center justify-center max-w-xl px-2 sm:px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIdx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="font-serif text-xs sm:text-sm lg:text-[15px] font-light text-[#E8DFD5] italic leading-relaxed">
                    {t.quote}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows + Customer Profile Row matching exact reference */}
            <div className="w-full max-w-md flex items-center justify-between pt-1">
              
              {/* Left Arrow Button */}
              <button
                onClick={prevT}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#8C7355]/80 hover:border-[#D4AF37] text-[#D4AF37] hover:bg-[#8C7355]/20 flex items-center justify-center transition-all cursor-pointer group shadow-sm shrink-0"
                title="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Customer Avatar, Name, Role & 5 Stars */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-[#D4AF37]/50 shadow-sm"
                />
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-medium text-xs sm:text-[13px] text-[#FAF5EE]">
                      {t.name}
                    </span>
                    <span className="text-[10px] text-[#A89887] font-sans">
                      {t.role}
                    </span>
                  </div>
                  {/* 5 Gold Stars */}
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#E5A93C] text-[#E5A93C]" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={nextT}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#8C7355]/80 hover:border-[#D4AF37] text-[#D4AF37] hover:bg-[#8C7355]/20 flex items-center justify-center transition-all cursor-pointer group shadow-sm shrink-0"
                title="Next testimonial"
              >
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

            </div>

          </div>

          {/* 
            RIGHT COLUMN (5 cols):
            3 Statistics columns separated by thin vertical borders matching reference
          */}
          <div className="lg:col-span-5 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8 grid grid-cols-3 gap-3 sm:gap-4 text-center">
            
            {/* Stat 1: 10K+ */}
            <div className="space-y-1 py-1">
              <div className="font-serif text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#D4AF37] tracking-tight">
                10K+
              </div>
              <div className="text-[9px] sm:text-[10px] text-[#B3A293] font-medium tracking-normal">
                Happy Customers
              </div>
            </div>

            {/* Stat 2: 4.8 ★ with border-l */}
            <div className="space-y-1 py-1 border-l border-white/10">
              <div className="font-serif text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#D4AF37] tracking-tight flex items-center justify-center gap-1">
                <span>4.8</span>
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#D4AF37] text-[#D4AF37]" />
              </div>
              <div className="text-[9px] sm:text-[10px] text-[#B3A293] font-medium tracking-normal">
                Average Rating
              </div>
            </div>

            {/* Stat 3: 95% with border-l */}
            <div className="space-y-1 py-1 border-l border-white/10">
              <div className="font-serif text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#D4AF37] tracking-tight">
                95%
              </div>
              <div className="text-[9px] sm:text-[10px] text-[#B3A293] font-medium tracking-normal">
                Would Order Again
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
