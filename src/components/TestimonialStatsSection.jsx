import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, animate } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { playSound } from '../utils/sound';
import aditiAvatar from '../assets/aditi_avatar.png';

// Framer Motion Animated Number Counter
function AnimatedCounter({ value, duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration,
        ease: 'easeOut',
        onUpdate: (latest) => setDisplayValue(Math.floor(latest))
      });
      return controls.stop;
    }
  }, [inView, value, duration, count]);

  return <span ref={ref}>{displayValue}</span>;
}

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

  // Automatic slide transition
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

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
    <section className="relative z-20 w-full bg-[#2B1A14] text-[#FFF8EE] py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C9823A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Testimonial slider with Framer Motion transitions */}
          <div className="lg:col-span-7 flex flex-col items-center text-center space-y-4 sm:space-y-5">
            
            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#FFF8EE] tracking-wide"
            >
              Loved by Thousands
            </motion.h2>

            {/* Quote Area */}
            <div className="min-h-[52px] sm:min-h-[60px] flex items-center justify-center max-w-xl px-2 sm:px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIdx}
                  initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(3px)' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <p className="font-serif text-xs sm:text-sm lg:text-[15px] font-light text-[#F4E5D2] italic leading-relaxed">
                    {t.quote}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows + Customer Profile Row */}
            <div className="w-full max-w-md flex items-center justify-between pt-1">
              
              {/* Left Arrow Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevT}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#5A2E1F] hover:border-[#C9823A] text-[#C9823A] hover:bg-[#C9823A]/10 flex items-center justify-center transition-all cursor-pointer shadow-sm shrink-0"
                title="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>

              {/* Customer Avatar, Name, Role & 5 Stars */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIdx}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-3"
                >
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-[#C9823A]/50 shadow-sm"
                  />
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-medium text-xs sm:text-[13px] text-[#FFF8EE]">
                        {t.name}
                      </span>
                      <span className="text-[10px] text-[#C9823A]/80 font-sans">
                        {t.role}
                      </span>
                    </div>
                    {/* 5 Gold Stars */}
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#C9823A] text-[#C9823A]" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Right Arrow Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextT}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#5A2E1F] hover:border-[#C9823A] text-[#C9823A] hover:bg-[#C9823A]/10 flex items-center justify-center transition-all cursor-pointer shadow-sm shrink-0"
                title="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>

            </div>

          </div>

          {/* RIGHT COLUMN: Statistics with Framer Motion Count-Up Animation */}
          <div className="lg:col-span-5 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8 grid grid-cols-3 gap-3 sm:gap-4 text-center">
            
            {/* Stat 1: 10K+ */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-1 py-1 group cursor-default"
            >
              <div className="font-serif text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#C9823A] tracking-tight group-hover:scale-105 transition-transform">
                <AnimatedCounter value={10} duration={1.6} />K+
              </div>
              <div className="text-[9px] sm:text-[10px] text-[#F4E5D2]/80 font-medium tracking-normal">
                Happy Customers
              </div>
            </motion.div>

            {/* Stat 2: 4.8 ★ with border-l */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-1 py-1 border-l border-white/10 group cursor-default"
            >
              <div className="font-serif text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#C9823A] tracking-tight flex items-center justify-center gap-1 group-hover:scale-105 transition-transform">
                <span>4.8</span>
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#C9823A] text-[#C9823A]" />
              </div>
              <div className="text-[9px] sm:text-[10px] text-[#F4E5D2]/80 font-medium tracking-normal">
                Average Rating
              </div>
            </motion.div>

            {/* Stat 3: 95% with border-l */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-1 py-1 border-l border-white/10 group cursor-default"
            >
              <div className="font-serif text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#C9823A] tracking-tight group-hover:scale-105 transition-transform">
                <AnimatedCounter value={95} duration={1.8} />%
              </div>
              <div className="text-[9px] sm:text-[10px] text-[#F4E5D2]/80 font-medium tracking-normal">
                Would Order Again
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
