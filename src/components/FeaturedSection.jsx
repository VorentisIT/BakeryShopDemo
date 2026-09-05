import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { playSound } from '../utils/sound';

import exactFeaturedCake from '../assets/hd_featured_cake.jpg';
import heroDeliceCake from '../assets/hero_delice_cake.jpg';
import hdCustomCake from '../assets/hd_custom_cake.jpg';
import hdSigPistachio from '../assets/hd_sig_pistachio.jpg';
import hdSigBlackforest from '../assets/hd_sig_blackforest.jpg';

export default function FeaturedSection({ onAddToCart, onViewDetails }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const featuredCakes = [
    {
      id: 'grand-choco-noir-walnut',
      name: "Grand Choco Noir Walnut Cake",
      category: 'cakes',
      price: 899,
      rating: 4.9,
      reviewsCount: 1200,
      image: exactFeaturedCake,
      description: "Rich dark chocolate layered with roasted walnuts, a balance of intense and irresistible."
    },
    {
      id: 'belgian-truffle-celebration',
      name: "Belgian Truffle Layer Cake",
      category: 'cakes',
      price: 949,
      rating: 5.0,
      reviewsCount: 980,
      image: heroDeliceCake,
      description: "27 crispy micro-layers of French butter laminated with 70% dark Valrhona cocoa ganache."
    },
    {
      id: 'vanilla-berry-gold',
      name: "Vanilla Berry Gold Celebration",
      category: 'cakes',
      price: 1199,
      rating: 4.9,
      reviewsCount: 840,
      image: hdCustomCake,
      description: "Multi-tier bespoke cake adorned with organic wild berries and edible 24K gold leaf drips."
    },
    {
      id: 'sicilian-pistachio-dream',
      name: "Sicilian Pistachio Dream Cake",
      category: 'cakes',
      price: 849,
      rating: 4.8,
      reviewsCount: 620,
      image: hdSigPistachio,
      description: "Slow-roasted Sicilian emerald pistachios folded into silky mascarpone mousse and sponge."
    },
    {
      id: 'classic-black-forest',
      name: "Classic Black Forest Cake",
      category: 'cakes',
      price: 799,
      rating: 4.8,
      reviewsCount: 910,
      image: hdSigBlackforest,
      description: "Layers of chocolate sponge, tart Morello cherries, and rich dark chocolate curls."
    }
  ];

  const featuredItem = featuredCakes[currentIdx];

  const handleNext = () => {
    playSound('click');
    setCurrentIdx(prev => (prev + 1) % featuredCakes.length);
  };

  const handlePrev = () => {
    playSound('click');
    setCurrentIdx(prev => (prev - 1 + featuredCakes.length) % featuredCakes.length);
  };

  return (
    <section className="py-12 sm:py-16 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left: Info Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          
          <motion.div
            key={`info-${featuredItem.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C59B27] block">
                OUR SIGNATURE
              </span>
              <span className="text-[10px] font-mono text-[#6B5744] bg-[#EFE9E1] px-2 py-0.5 rounded-full">
                0{currentIdx + 1} / 0{featuredCakes.length}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1612] mt-1 leading-tight">
              {featuredItem.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5744] font-light mt-3 leading-relaxed max-w-md mx-auto lg:mx-0">
              {featuredItem.description}
            </p>
          </motion.div>

          {/* Price & Rating */}
          <motion.div 
            key={`price-${featuredItem.id}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <span className="font-serif text-3xl font-bold text-[#1A1612]">₹ {featuredItem.price}</span>
            <div className="h-4 w-px bg-[#E6DFD5]" />
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1A1612]">
              <Star className="w-4 h-4 fill-[#C59B27] text-[#C59B27]" />
              <span>{featuredItem.rating} <span className="text-[#6B5744] font-normal">({featuredItem.reviewsCount} reviews)</span></span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={() => { playSound('cart'); onAddToCart(featuredItem); }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#181310] text-[#FAF8F5] font-medium text-xs uppercase tracking-widest hover:bg-[#C59B27] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group active:scale-95"
            >
              <span>Add to Cart</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => { playSound('click'); if (onViewDetails) onViewDetails(featuredItem); }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-[#1A1612] border border-[#E6DFD5] font-medium text-xs uppercase tracking-widest hover:border-[#1A1612] transition-all cursor-pointer shadow-xs active:scale-95"
            >
              View Details
            </button>
          </div>

        </div>

        {/* Right: Master Photographic Cake on Ceramic Plate (7 cols) */}
        <div className="lg:col-span-7 relative flex items-center justify-center">
          <div className="relative w-full max-w-xl aspect-[16/10] overflow-hidden rounded-3xl shadow-xl border border-[#E6DFD5] bg-[#F2ECE4]">
            
            <AnimatePresence mode="wait">
              <motion.img
                key={featuredItem.id}
                src={featuredItem.image}
                alt={featuredItem.name}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(3px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-4 flex items-center gap-1.5 z-20 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
              {featuredCakes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { playSound('click'); setCurrentIdx(idx); }}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    currentIdx === idx ? 'w-5 bg-[#C59B27]' : 'w-1.5 bg-white/60 hover:bg-white'
                  }`}
                  title={`Cake ${idx + 1}`}
                />
              ))}
            </div>

            {/* Interactive Slider arrows */}
            <div className="absolute bottom-3 right-4 flex items-center gap-2 z-20">
              <button
                onClick={handlePrev}
                aria-label="Previous Cake"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-[#181310] hover:text-[#D6A84F] hover:border-[#181310] text-[#1A1612] flex items-center justify-center shadow-md cursor-pointer border border-[#E6DFD5] transition-all active:scale-95 group"
                title="Previous Cake"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Cake"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-[#181310] hover:text-[#D6A84F] hover:border-[#181310] text-[#1A1612] flex items-center justify-center shadow-md cursor-pointer border border-[#E6DFD5] transition-all active:scale-95 group"
                title="Next Cake"
              >
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
