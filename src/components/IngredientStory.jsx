import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { playSound } from '../utils/sound';

import ingPistachios from '../assets/ing_pistachios.png';
import ingAlmonds from '../assets/ing_almonds.png';
import ingWalnuts from '../assets/ing_walnuts.png';
import ingChocolate from '../assets/ing_chocolate.png';
import ingCream from '../assets/ing_cream.png';
import ingStrawberry from '../assets/ing_strawberry.png';

export default function IngredientStory({ onExploreStory }) {
  const [selectedIdx, setSelectedIdx] = useState(3); // Belgian Chocolate default selected
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const ingredients = [
    { 
      id: 'pistachios',
      name: 'Pistachios', 
      origin: 'Sicily & Iran', 
      note: 'Rich emerald crunch with buttery roasted sweetness',
      image: ingPistachios 
    },
    { 
      id: 'almonds',
      name: 'Almonds', 
      origin: 'California', 
      note: 'Slow-roasted to aromatic perfection for delicate crunch',
      image: ingAlmonds 
    },
    { 
      id: 'walnuts',
      name: 'Walnuts', 
      origin: 'Kashmir Valley', 
      note: 'Hand-cracked golden halves rich in natural earthy oils',
      image: ingWalnuts 
    },
    { 
      id: 'chocolate',
      name: 'Belgian Chocolate', 
      origin: 'Brussels, Belgium', 
      note: '70% single-origin dark cocoa with a velvety melt',
      image: ingChocolate 
    },
    { 
      id: 'cream',
      name: 'Fresh Cream', 
      origin: 'Normandy, France', 
      note: 'AOP churned dairy with cloud-like silky whipped texture',
      image: ingCream 
    },
    { 
      id: 'fruits',
      name: 'Real Fruits', 
      origin: 'Local Organic Farms', 
      note: 'Sun-ripened handpicked strawberries & wild berries',
      image: ingStrawberry 
    },
  ];

  const currentIngredient = ingredients[hoveredIdx !== null ? hoveredIdx : selectedIdx];

  return (
    <section className="relative z-20 w-full bg-[#FFF8EE] overflow-hidden">
      
      {/* 
        TOP LINE: 100% Clean, Sharp Straight Line 
        Background: Dark Chocolate (#3E1F16)
      */}
      <div className="w-full bg-[#3E1F16] text-[#FFF8EE] pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column (5 cols): Editorial Copy matching user reference */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-1">
                  <span className="w-6 h-[1.5px] bg-[#C9823A] block" />
                  <span className="font-script text-3xl sm:text-4xl text-[#C9823A] tracking-wide">
                    Goodness
                  </span>
                </div>
                <h2 className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#C9823A] leading-[1.05] tracking-wide">
                  in Every Bite
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#F4E5D2] font-light leading-relaxed max-w-sm mx-auto lg:mx-0">
                From handpicked nuts to rich cocoa, we source the finest, natural ingredients to create desserts that feel as good as they taste.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    playSound('click');
                    if (onExploreStory) onExploreStory();
                  }}
                  className="px-7 py-3 rounded-full bg-[#FFF8EE] text-[#2B1A14] hover:bg-[#5A2E1F] hover:text-white hover:shadow-lg transition-all font-medium text-xs tracking-wider inline-flex items-center justify-center cursor-pointer shadow-sm active:scale-95"
                >
                  <span>Our Ingredients</span>
                </button>
              </div>
            </div>

            {/* Right Column (7 cols): Interactive Framer Motion 6 Ingredients Array */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-end w-full">
              
              {/* 6 Separate Animated Ingredient Capsules */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 sm:gap-3 w-full">
                {ingredients.map((item, idx) => {
                  const isSelected = (hoveredIdx !== null ? hoveredIdx : selectedIdx) === idx;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center cursor-pointer group"
                      onMouseEnter={() => {
                        playSound('hover');
                        setHoveredIdx(idx);
                      }}
                      onMouseLeave={() => setHoveredIdx(null)}
                      onClick={() => {
                        playSound('pop');
                        setSelectedIdx(idx);
                      }}
                    >
                      {/* Floating Item Card */}
                      <motion.div
                        animate={{ 
                          y: [0, -6, 0] 
                        }}
                        transition={{ 
                          duration: 3 + idx * 0.4, 
                          repeat: Infinity, 
                          ease: 'easeInOut' 
                        }}
                        whileHover={{ 
                          scale: 1.08,
                          y: -10,
                          transition: { duration: 0.25 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative w-full aspect-[3/4] rounded-2xl p-1.5 overflow-hidden transition-all duration-300 flex flex-col items-center justify-between transform-gpu ${
                          isSelected 
                            ? 'bg-[#5A2E1F] border-2 border-[#C9823A] shadow-[0_8px_25px_rgba(201,130,58,0.35)]' 
                            : 'bg-[#2B1A14] border border-[#5A2E1F] hover:border-[#C9823A]/60 shadow-md'
                        }`}
                      >
                        {/* Selected golden aura glow */}
                        {isSelected && (
                          <div className="absolute inset-0 bg-[#C9823A]/10 rounded-2xl pointer-events-none" />
                        )}

                        {/* Separate High-Definition Food Item Image */}
                        <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
                          <motion.img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </motion.div>

                      {/* Ingredient Label Below */}
                      <span className={`text-[11px] sm:text-xs font-serif mt-2 transition-colors text-center ${
                        isSelected 
                          ? 'text-[#C9823A] font-bold tracking-wide' 
                          : 'text-[#F4E5D2]/80 group-hover:text-[#FFF8EE]'
                      }`}>
                        {item.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Dynamic Interactive Callout Box for Selected Ingredient */}
              <motion.div
                key={currentIngredient.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full mt-5 p-3.5 rounded-2xl bg-[#2B1A14] border border-[#5A2E1F] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#C9823A]/20 border border-[#C9823A]/40 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-[#C9823A]" />
                  </div>
                  <div>
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <span className="font-serif text-sm font-semibold text-[#FFF8EE]">
                        {currentIngredient.name}
                      </span>
                      <span className="text-[10px] uppercase font-sans font-semibold px-2 py-0.5 rounded-full bg-[#C9823A]/20 text-[#C9823A]">
                        {currentIngredient.origin}
                      </span>
                    </div>
                    <p className="text-xs text-[#F4E5D2] font-light mt-0.5">
                      {currentIngredient.note}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] text-[#C9823A]/70 italic hidden sm:block shrink-0">
                  Hover or tap to explore
                </span>
              </motion.div>

            </div>

          </div>
        </div>
      </div>

      {/* 
        BOTTOM LINE: UNDENIABLE ORGANIC SNAKE WAVE (S-Curve)
        The dark cocoa body (#3E1F16) swoops like a slithering snake, 
        dipping low under the button, climbing into a crest across the nuts,
        undulating across the chocolate and cream, and revealing the warm cream canvas below!
      */}
      <div className="w-full overflow-hidden leading-none -mt-px pointer-events-none select-none">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-16 sm:h-24 lg:h-32 block fill-[#3E1F16]"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,0 
               L 1440,0 
               L 1440,45 
               C 1320,65 1200,20 1080,20 
               C 980,20 900,68 800,68 
               C 700,68 620,22 510,22 
               C 400,22 300,85 200,85 
               C 120,85 80,45 0,45 
               Z"
          />
        </svg>
      </div>

    </section>
  );
}
