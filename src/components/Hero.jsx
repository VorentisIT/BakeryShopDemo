import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronLeft, ChevronRight, ShieldCheck, Heart, Truck } from 'lucide-react';
import { playSound } from '../utils/sound';
import heroDeliceCake from '../assets/hero_delice_cake.jpg';
import hdFeaturedCake from '../assets/hd_featured_cake.jpg';
import hdCustomCake from '../assets/hd_custom_cake.jpg';
import hdSigPistachio from '../assets/hd_sig_pistachio.jpg';

export default function Hero({ onExploreClick, onCustomCakeClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      eyebrow: "SWEET MOMENTS, BETTER LIVES",
      titlePrefix: "Crafted with",
      titleAccent: "Real Ingredients",
      desc: "Artisanal cakes and desserts, made with love, for life's most beautiful moments.",
      cakeImage: heroDeliceCake,
      cakeTitle: "Grand Cru Valrhona Chocolate Cake",
      scriptMain: "Happiness",
      scriptAccent: "Tastes Better",
      scriptEnd: "Here ♡"
    },
    {
      eyebrow: "PARISIAN PATISSERIE",
      titlePrefix: "Pure Luxury in",
      titleAccent: "Every Layer",
      desc: "Rich dark chocolate layered with roasted walnuts, a balance of intense cocoa and irresistible crunch.",
      cakeImage: hdFeaturedCake,
      cakeTitle: "Grand Choco Noir Walnut Cake",
      scriptMain: "Baked",
      scriptAccent: "Fresh Daily",
      scriptEnd: "With Love ♡"
    },
    {
      eyebrow: "BESPOKE CELEBRATION",
      titlePrefix: "Designed for Your",
      titleAccent: "Special Moments",
      desc: "Multi-tier bespoke cakes adorned with organic wild berries and edible 24K gold leaf drips.",
      cakeImage: hdCustomCake,
      cakeTitle: "Vanilla Berry Gold Celebration",
      scriptMain: "Bespoke",
      scriptAccent: "Made For You",
      scriptEnd: "Forever ♡"
    },
    {
      eyebrow: "CHEF'S SIGNATURE",
      titlePrefix: "Velvety Smooth",
      titleAccent: "Pistachio Dream",
      desc: "Slow-roasted Sicilian pistachios folded into silky mascarpone mousse and sponge layers.",
      cakeImage: hdSigPistachio,
      cakeTitle: "Sicilian Pistachio Dream Cake",
      scriptMain: "Delicate",
      scriptAccent: "Pure Indulgence",
      scriptEnd: "In Every Bite ♡"
    }
  ];

  const slide = slides[currentSlide];

  const nextSlide = () => {
    playSound('click');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    playSound('click');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-[#FAF8F5]">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D6A84F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Small Eyebrow */}
            <motion.div 
              key={`eyebrow-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase font-semibold tracking-[0.25em] text-[#C59B27]"
            >
              <span>{slide.eyebrow}</span>
            </motion.div>

            {/* Large Heading with Gold Script/Italic */}
            <motion.h1 
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-[#1A1612]"
            >
              {slide.titlePrefix} <br />
              <span className="italic text-[#C59B27] font-serif block mt-1 font-normal">
                {slide.titleAccent}
              </span>
            </motion.h1>

            {/* Short Description */}
            <motion.p 
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm lg:text-base text-[#6B5744] font-light leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              {slide.desc}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2"
            >
              <button
                onClick={() => { playSound('click'); onExploreClick(); }}
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#181310] text-[#FAF8F5] font-medium text-xs uppercase tracking-widest hover:bg-[#C59B27] hover:text-white transition-all shadow-md flex items-center justify-center gap-3 cursor-pointer group active:scale-95"
              >
                <span>Explore Our Cakes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => { playSound('click'); onCustomCakeClick(); }}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white text-[#1A1612] border border-[#E6DFD5] font-medium text-xs uppercase tracking-widest hover:border-[#1A1612] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-95"
              >
                <div className="w-5 h-5 rounded-full bg-[#181310] text-white flex items-center justify-center text-[10px]">
                  <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                </div>
                <span>Watch Our Story</span>
              </button>
            </motion.div>

            {/* Three Value/Trust Points */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-6 border-t border-[#E6DFD5] grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left"
            >
              <div className="flex flex-col items-center lg:items-start gap-1">
                <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
                <span className="text-[11px] text-[#1A1612] font-medium leading-snug">100% Fresh Ingredients</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1">
                <Heart className="w-4 h-4 text-[#C59B27]" />
                <span className="text-[11px] text-[#1A1612] font-medium leading-snug">Handcrafted with Love</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1">
                <Truck className="w-4 h-4 text-[#C59B27]" />
                <span className="text-[11px] text-[#1A1612] font-medium leading-snug">Same Day Delivery</span>
              </div>
            </motion.div>

            {/* Pagination Controls at Bottom Left with Prev & Next */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs font-mono font-medium text-[#6B5744]">
              <button
                onClick={prevSlide}
                className="w-6 h-6 rounded-full hover:bg-[#EBE4DC] flex items-center justify-center text-[#1A1612] transition-colors cursor-pointer"
                title="Previous slide"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              
              <div className="flex items-center gap-3">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => { playSound('click'); setCurrentSlide(idx); }}
                    className={`transition-all cursor-pointer ${
                      currentSlide === idx 
                        ? 'text-[#1A1612] font-bold border-b-2 border-[#C59B27] pb-0.5' 
                        : 'text-[#6B5744]/60 hover:text-[#1A1612]'
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-6 h-6 rounded-full hover:bg-[#EBE4DC] flex items-center justify-center text-[#1A1612] transition-colors cursor-pointer"
                title="Next slide"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Column: Dynamic Celebration Cake with Ceramic Stand & Script */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Script Overlay in Background - Animates on slide change */}
            <motion.div 
              key={`script-${currentSlide}`}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute -top-10 right-2 sm:right-6 z-20 font-script text-2xl sm:text-3xl lg:text-4xl text-[#1A1612] text-right leading-tight transform rotate-[-3deg] pointer-events-none select-none"
            >
              {slide.scriptMain} <br />
              <span className="italic">{slide.scriptAccent}</span> <br />
              {slide.scriptEnd}
            </motion.div>

            {/* Main Ceramic Stand & Cake Stage - Organic Rounded Shape with dynamic key for cake change */}
            <motion.div 
              key={`cake-stage-${currentSlide}`}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg aspect-[1.08/1] rounded-3xl sm:rounded-[48px] overflow-hidden shadow-[0_20px_50px_rgba(40,25,15,0.12)] flex items-center justify-center bg-[#F2ECE4] border border-[#E8DFD3] transform-gpu"
            >
              <img
                src={slide.cakeImage}
                alt={slide.cakeTitle}
                loading="eager"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Circular Previous AND Next Arrow Controls at Bottom Right */}
            <div className="absolute -bottom-3 right-4 sm:right-6 z-30 flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous Cake"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-[#E6DFD5] text-[#1A1612] hover:bg-[#181310] hover:text-[#D6A84F] hover:border-[#181310] transition-all flex items-center justify-center shadow-lg cursor-pointer active:scale-90 group"
                title="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Cake"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-[#E6DFD5] text-[#1A1612] hover:bg-[#181310] hover:text-[#D6A84F] hover:border-[#181310] transition-all flex items-center justify-center shadow-lg cursor-pointer active:scale-90 group"
                title="Next slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
