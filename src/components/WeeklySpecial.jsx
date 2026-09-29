import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, ArrowRight, Star, ShoppingBag } from 'lucide-react';
import { playSound } from '../utils/sound';
import TransparentImg from './TransparentImg';

export default function WeeklySpecial({ onOrderNow }) {
  const [activeTab, setActiveTab] = useState('masterpiece');
  const [timeLeft, setTimeLeft] = useState({ hours: 8, minutes: 42, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 8, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const specials = {
    masterpiece: {
      id: 'grand-cru-masterpiece',
      tag: "CHEF'S SIGNATURE MASTERPIECE",
      title: "Grand Cru 70% Valrhona Dark Chocolate Cake",
      subtitle: "Four sculpted gourmet cavities filled with organic cherries, Bronte pistachios, California almonds, and golden walnuts.",
      price: 1800,
      originalPrice: 2200,
      rating: 5.0,
      image: '/images/cake_holes.jpg',
      badge: 'Limited 10 Daily Batches',
      prep: '24-Hour Cold Fermentation & Glaze'
    },
    croissants: {
      id: 'croissant-normandy-special',
      tag: "MORNING OVEN FRESH BATCH",
      title: "Normandy AOP Butter Croissants Box (6 Pcs)",
      subtitle: "27 crispy micro-layers of 84% butterfat AOP Normandy butter with light honeycomb interior.",
      price: 780,
      originalPrice: 950,
      rating: 4.98,
      image: '/images/hero.jpg',
      badge: 'Fresh From Oven 5:00 AM',
      prep: '48-Hour Cold Laminated Dough'
    },
    macarons: {
      id: 'macaron-gala-special',
      tag: "PARISIAN GALA SELECTION",
      title: "Pastel Macaron Gift Box (12 Pcs)",
      subtitle: "Assorted French almond macaron shells with Tahitian Vanilla, Lavender Honey, and Salted Caramel.",
      price: 850,
      originalPrice: 1050,
      rating: 4.95,
      image: '/images/macarons.jpg',
      badge: 'Luxury Gift Box Included',
      prep: 'Hand-Piped Daily in Paris'
    }
  };

  const currentItem = specials[activeTab];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 relative z-20">
      
      {/* Container Box */}
      <div className="rounded-3xl bg-[#FAF8F5] p-6 sm:p-10 border border-[#E6DFD5] shadow-sm relative overflow-hidden">
        
        {/* Soft Gold Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6A84F]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Header Controls: Tab Selection */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 border-b border-[#E6DFD5]">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E6DFD5] flex items-center justify-center text-[#C59B27] shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-semibold text-[#C59B27] uppercase tracking-[0.25em] block">
                SPECIAL SELECTION
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1A1612]">
                Artisanal <span className="italic text-[#C59B27]">Featured Specials</span>
              </h3>
            </div>
          </div>

          {/* Interactive Feature Tabs */}
          <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-full border border-[#E6DFD5] shadow-sm overflow-x-auto max-w-full">
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
                    ? 'bg-[#181310] text-[#D6A84F] shadow-sm'
                    : 'text-[#6B5744] hover:text-[#1A1612]'
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
            <div className="relative w-full max-w-sm aspect-square bg-white rounded-2xl p-6 border border-[#E6DFD5] shadow-sm flex items-center justify-center">
              
              {/* Gold Highlight Halo */}
              <div className="absolute inset-0 bg-[#D6A84F]/10 rounded-2xl blur-lg pointer-events-none" />

              <TransparentImg
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:scale-105"
              />

              {/* Micro Badge */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#181310] text-[#D6A84F] text-[9px] font-semibold uppercase tracking-widest shadow-md">
                {currentItem.badge}
              </div>
            </div>
          </div>

          {/* Right Detailed Copy & Timer CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-pulse" />
                <span className="text-[10px] font-semibold text-[#C59B27] uppercase tracking-[0.25em]">
                  {currentItem.tag}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#1A1612] mt-2 leading-tight">
                {currentItem.title}
              </h2>

              <p className="text-sm text-[#6B5744] font-light mt-3 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {currentItem.subtitle}
              </p>
            </div>

            {/* Price & Rating Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-bold text-[#1A1612]">₹{currentItem.price}</span>
                <span className="text-sm text-[#6B5744] line-through font-serif">₹{currentItem.originalPrice}</span>
              </div>

              <div className="h-4 w-px bg-[#E6DFD5]" />

              <div className="flex items-center gap-1.5 text-xs text-[#1A1612] font-semibold">
                <Star className="w-4 h-4 fill-[#C59B27] text-[#C59B27]" />
                <span>{currentItem.rating} Michelin Rating</span>
              </div>
            </div>

            {/* Countdown & Action Row */}
            <div className="pt-4 border-t border-[#E6DFD5] flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Countdown Timer */}
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-[#E6DFD5] shadow-xs">
                <Clock className="w-4 h-4 text-[#C59B27]" />
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#6B5744]">Offer Ends In:</span>
                <span className="font-mono text-xs font-bold text-[#1A1612]">
                  {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>

              {/* Order CTA Button */}
              <button
                onClick={() => { playSound('cart'); onOrderNow(currentItem); }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#5A2E1F] text-[#FFF8EE] font-semibold text-xs uppercase tracking-widest hover:bg-[#3E1F16] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
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
