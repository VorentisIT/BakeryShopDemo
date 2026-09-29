import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Heart, Truck, ArrowRight } from 'lucide-react';
import { playSound } from '../utils/sound';
import heroBakeryTable from '../assets/hero_bakery_table.jpg';
import heroDeliceCake from '../assets/hero_delice_cake.jpg';
import hdFeaturedCake from '../assets/hd_featured_cake.jpg';
import hdCustomCake from '../assets/hd_custom_cake.jpg';
import hdSigPistachio from '../assets/hd_sig_pistachio.jpg';

export default function Hero({ onExploreClick, onCustomCakeClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  // Dynamic shadow effect on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const slides = [
    {
      titlePrefix: "Crafted with",
      titleAccent: "Real Ingredients",
      desc: "Artisanal cakes and desserts, made with passion and heritage French techniques for life's most cherished celebrations.",
      cakeImage: heroDeliceCake,
      cakeTitle: "Grand Cru Valrhona Chocolate Cake"
    },
    {
      titlePrefix: "Pure Luxury in",
      titleAccent: "Every Layer",
      desc: "Rich dark cocoa layered with roasted Piedmont walnuts, striking the perfect balance between velvety cream and crunch.",
      cakeImage: hdFeaturedCake,
      cakeTitle: "Grand Choco Noir Walnut Cake"
    },
    {
      titlePrefix: "Designed for Your",
      titleAccent: "Special Moments",
      desc: "Multi-tier bespoke cakes adorned with organic wild berries, fresh botanical petals, and edible 24K gold leaf drips.",
      cakeImage: hdCustomCake,
      cakeTitle: "Vanilla Berry Gold Celebration"
    },
    {
      titlePrefix: "Velvety Smooth",
      titleAccent: "Pistachio Dream",
      desc: "Slow-roasted Sicilian pistachios folded into airy mascarpone mousse and delicate golden sponge layers.",
      cakeImage: hdSigPistachio,
      cakeTitle: "Sicilian Pistachio Dream Cake"
    }
  ];

  // Automatic slide transition (faster 3.5s interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section ref={containerRef} className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#181310]">
      
      {/* Background Hero Image - Static with Dark Shadow Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.img
          key={`hero-bg-${currentSlide}`}
          initial={{ scale: 1.04, opacity: 0.92 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          src={heroBakeryTable}
          alt="Artisanal Bakery Spread"
          className="w-full h-full object-cover object-center"
        />

        {/* Ambient Dark Shadow & Vignette around the image */}
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.6)] pointer-events-none" />

        {/* Dark directional gradient from the left for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 via-55% to-transparent pointer-events-none" />
        
        {/* Subtle top & bottom shadow gradient for smooth navbar and section transitions */}
        <div className="absolute inset-x-0 top-0 h-32 sm:h-36 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FFF8EE] via-[#FFF8EE]/20 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto pt-36 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-5 sm:space-y-6 text-left">
          
          {/* Animated Hero Text with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`slide-content-${currentSlide}`}
              initial={{ opacity: 0, y: 16, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -14, filter: 'blur(5px)' }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3.5 sm:space-y-4"
            >
              {/* Large Heading with Gold Script/Italic */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] text-white drop-shadow-lg tracking-tight">
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.38, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {slide.titlePrefix}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 14, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="italic text-[#C9823A] font-serif block mt-1 font-normal drop-shadow-md"
                >
                  {slide.titleAccent}
                </motion.span>
              </h1>

              {/* Short Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-base lg:text-lg text-[#F4E5D2]/95 font-normal leading-relaxed max-w-xl drop-shadow-sm"
              >
                {slide.desc}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Slide Progress Indicators */}
          <div className="flex items-center gap-2 pt-1 pb-1">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => { playSound('click'); setCurrentSlide(idx); }}
                className="relative h-1.5 rounded-full transition-all duration-300 overflow-hidden cursor-pointer"
                style={{ width: currentSlide === idx ? '36px' : '12px', backgroundColor: currentSlide === idx ? '#C9823A' : 'rgba(255, 255, 255, 0.25)' }}
                aria-label={`Go to slide ${idx + 1}`}
              >
                {currentSlide === idx && (
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '0%' }}
                    transition={{ duration: 3.5, ease: 'linear' }}
                    className="absolute inset-0 bg-white/40"
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => { playSound('click'); onExploreClick(); }}
              className="px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#5A2E1F] text-[#FFF8EE] border border-[#5A2E1F] font-medium text-xs uppercase tracking-widest hover:bg-[#3E1F16] hover:border-[#3E1F16] hover:text-[#FFF8EE] transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Explore Our Cakes</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C9823A] group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => { playSound('click'); onCustomCakeClick(); }}
              className="px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white/95 backdrop-blur-sm text-[#2B1A14] border border-white font-medium text-xs uppercase tracking-widest hover:bg-[#5A2E1F] hover:border-[#5A2E1F] hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg"
            >
              <span>Watch Our Story</span>
            </motion.button>
          </motion.div>

          {/* Three Value/Trust Points */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="pt-5 border-t border-white/20 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg text-left"
          >
            <div className="flex flex-col items-start gap-1 cursor-default">
              <ShieldCheck className="w-4 h-4 text-[#C9823A]" />
              <span className="text-[11px] sm:text-xs text-white/95 font-semibold leading-snug drop-shadow-xs">100% Fresh</span>
            </div>
            <div className="flex flex-col items-start gap-1 cursor-default">
              <Heart className="w-4 h-4 text-[#C9823A]" />
              <span className="text-[11px] sm:text-xs text-white/95 font-semibold leading-snug drop-shadow-xs">Handcrafted</span>
            </div>
            <div className="flex flex-col items-start gap-1 cursor-default">
              <Truck className="w-4 h-4 text-[#C9823A]" />
              <span className="text-[11px] sm:text-xs text-white/95 font-semibold leading-snug drop-shadow-xs">Same Day Delivery</span>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
