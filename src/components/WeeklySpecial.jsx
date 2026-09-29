import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, ShoppingBag, Sparkles, ChevronRight } from 'lucide-react';
import { playSound } from '../utils/sound';

import TransparentImg from './TransparentImg';

export default function WeeklySpecial({ onOrderNow = () => {} }) {
  const [activeTab, setActiveTab] = useState('masterpiece');

  // Interactive Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const specialItems = {
    masterpiece: {
      id: 'special-masterpiece',
      title: "Grand Dark Chocolate Royale",
      subtitle: "3-tier handcrafted Valrhona 70% dark chocolate mousse cake with roasted California walnut crunch and gold leaf.",
      price: 1899,
      originalPrice: 2499,
      rating: 4.98,
      tag: "Chef's Masterpiece",
      badge: "Limited Edition",
      image: "/images/cake_3.png"
    },
    croissants: {
      id: 'special-croissants',
      title: "French Butter Croissant Box",
      subtitle: "Box of 6 artisanal 27-micro-layer croissants baked fresh every morning with 84% Normandy AOP butter.",
      price: 649,
      originalPrice: 799,
      rating: 4.95,
      tag: "Fresh Morning Batch",
      badge: "Chef Choice",
      image: "/images/croissant_holes.jpg"
    },
    macarons: {
      id: 'special-macarons',
      title: "Parisian Macaron Collection",
      subtitle: "Assortment of 12 delicate pastel macarons: Pistachio, Raspberry, Tahitian Vanilla, and Salted Caramel.",
      price: 899,
      originalPrice: 1199,
      rating: 5.0,
      tag: "Artisan Box",
      badge: "Best Value",
      image: "/images/cake_holes.jpg"
    }
  };

  const currentItem = specialItems[activeTab];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 relative z-20">
      
      {/* Container Box */}
      <div className="rounded-3xl bg-[#FFF8EE] p-6 sm:p-10 border border-[#E9D8C5] shadow-sm relative overflow-hidden">
        
        {/* Soft Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9823A]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Header Controls: Tab Selection */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 border-b border-[#E9D8C5]">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E9D8C5] flex items-center justify-center text-[#5A2E1F] shadow-sm">
              <Sparkles className="w-5 h-5 text-[#C9823A]" />
            </div>
            <div>
              <span className="text-[10px] font-semibold text-[#C9823A] uppercase tracking-[0.25em] block">
                SPECIAL SELECTION
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#2B1A14]">
                Artisanal <span className="italic text-[#C9823A]">Featured Specials</span>
              </h3>
            </div>
          </div>

          {/* Interactive Feature Tabs */}
          <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-full border border-[#E9D8C5] shadow-sm overflow-x-auto max-w-full">
            {[
              { key: 'masterpiece', label: 'Dark Chocolate Cake' },
              { key: 'croissants', label: 'Normandy Croissants' },
              { key: 'macarons', label: 'Parisian Macarons' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => { playSound('click'); setActiveTab(tab.key); }}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-[#5A2E1F] text-[#FFF8EE] shadow-sm'
                    : 'text-[#78665C] hover:text-[#2B1A14]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* Feature Display Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8"
        >
          
          {/* Left Image Showcase */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-sm aspect-square bg-white rounded-2xl p-6 border border-[#E9D8C5] shadow-sm flex items-center justify-center">
              
              {/* Highlight Halo */}
              <div className="absolute inset-0 bg-[#C9823A]/10 rounded-2xl blur-lg pointer-events-none" />

              <TransparentImg
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:scale-105"
              />

              {/* Micro Badge */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#5A2E1F] text-[#FFF8EE] text-[9px] font-semibold uppercase tracking-widest shadow-md">
                {currentItem.badge}
              </div>
            </div>
          </div>

          {/* Right Detailed Copy & Timer CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-[#C9823A] animate-pulse" />
                <span className="text-[10px] font-semibold text-[#C9823A] uppercase tracking-[0.25em]">
                  {currentItem.tag}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#2B1A14] mt-2 leading-tight">
                {currentItem.title}
              </h2>

              <p className="text-sm text-[#78665C] font-light mt-3 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {currentItem.subtitle}
              </p>
            </div>

            {/* Price & Rating Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-bold text-[#2B1A14]">₹{currentItem.price}</span>
                <span className="text-sm text-[#78665C] line-through font-serif">₹{currentItem.originalPrice}</span>
              </div>

              <div className="h-4 w-px bg-[#E9D8C5]" />

              <div className="flex items-center gap-1.5 text-xs text-[#2B1A14] font-semibold">
                <Star className="w-4 h-4 fill-[#C9823A] text-[#C9823A]" />
                <span>{currentItem.rating} Michelin Rating</span>
              </div>
            </div>

            {/* Countdown & Action Row */}
            <div className="pt-4 border-t border-[#E9D8C5] flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Countdown Timer */}
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-[#E9D8C5] shadow-xs">
                <Clock className="w-4 h-4 text-[#C9823A]" />
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#78665C]">Offer Ends In:</span>
                <span className="font-mono text-xs font-bold text-[#2B1A14]">
                  {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>

              {/* Order CTA Button */}
              <button
                onClick={() => { playSound('cart'); onOrderNow(currentItem); }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#5A2E1F] text-[#FFF8EE] font-semibold text-xs uppercase tracking-widest hover:bg-[#3E1F16] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Claim Special Offer</span>
              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
