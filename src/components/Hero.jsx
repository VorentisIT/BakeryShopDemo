import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Heart, Truck } from 'lucide-react';
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

  const shadowOpacity = useTransform(scrollYProgress, [0, 0.8], [0.1, 0.4]);

  const slides = [
    {
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

  // Automatic slide transition
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section ref={containerRef} className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#181310]">
      
      {/* Background Hero Image - Static with Dark Shadow Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <img
          src={heroBakeryTable}
          alt="Artisanal Bakery Spread"
          className="w-full h-full object-cover object-center"
        />

        {/* Ambient Dark Shadow & Vignette around the image */}
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.6)] pointer-events-none" />

        {/* Dark directional gradient from the left for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent pointer-events-none" />
        
        {/* Subtle top & bottom shadow gradient for smooth navbar and section transitions */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FFF8EE] via-[#FFF8EE]/30 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6 sm:space-y-8 text-left">
          
          {/* Large Heading with Gold Script/Italic */}
          <motion.h1 
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] text-white drop-shadow-md"
          >
            {slide.titlePrefix} <br />
            <span className="italic text-[#C9823A] font-serif block mt-1 font-normal drop-shadow-sm">
              {slide.titleAccent}
            </span>
          </motion.h1>

          {/* Short Description */}
          <motion.p 
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base lg:text-lg text-[#F4E5D2] font-normal leading-relaxed max-w-xl drop-shadow-sm"
          >
            {slide.desc}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => { playSound('click'); onExploreClick(); }}
              className="px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#5A2E1F] text-[#FFF8EE] border border-[#5A2E1F] font-medium text-xs uppercase tracking-widest hover:bg-[#3E1F16] hover:border-[#3E1F16] hover:text-[#FFF8EE] transition-all duration-300 shadow-xl flex items-center justify-center cursor-pointer"
            >
              <span>Explore Our Cakes</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => { playSound('click'); onCustomCakeClick(); }}
              className="px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white text-[#2B1A14] border border-white font-medium text-xs uppercase tracking-widest hover:bg-[#5A2E1F] hover:border-[#5A2E1F] hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg"
            >
              <span>Watch Our Story</span>
            </motion.button>
          </motion.div>

          {/* Three Value/Trust Points */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="pt-6 border-t border-white/20 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg text-left"
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
