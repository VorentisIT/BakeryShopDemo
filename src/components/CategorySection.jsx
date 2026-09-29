import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { playSound } from '../utils/sound';

import catCakes from '../assets/hd_cat_cakes.jpg';
import catPastries from '../assets/hd_cat_pastries.jpg';
import catCookies from '../assets/hd_cat_cookies.jpg';
import catBrownies from '../assets/hd_cat_brownies.jpg';
import catDesserts from '../assets/hd_cat_desserts.jpg';
import catBreads from '../assets/hd_cat_breads.jpg';
import catCustom from '../assets/hd_cat_custom.jpg';

export default function CategorySection({ onSelectCategory, onViewAll }) {
  const [activeCategory, setActiveCategory] = useState('cakes');
  const [isPaused, setIsPaused] = useState(false);

  const categories = [
    { id: 'cakes', name: 'Cakes', image: catCakes },
    { id: 'pastries', name: 'Pastries', image: catPastries },
    { id: 'cookies', name: 'Cookies', image: catCookies },
    { id: 'brownies', name: 'Brownies', image: catBrownies },
    { id: 'desserts', name: 'Desserts', image: catDesserts },
    { id: 'breads', name: 'Breads', image: catBreads },
    { id: 'custom', name: 'Custom Cakes', image: catCustom },
  ];

  // Triplicate list to achieve a seamless, continuous infinite loop marquee
  const loopCategories = [...categories, ...categories, ...categories];

  return (
    <section id="category" className="py-8 sm:py-12 relative z-20 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 bg-[#FFF8EE]">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 px-2 sm:px-3 text-center sm:text-left">
        <div>
          <span className="font-script text-2xl text-[#C9823A] block">
            Explore by Category
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2B1A14] mt-0.5">
            Find Your Perfect Treat
          </h2>
        </div>

        <button
          onClick={() => {
            playSound('click');
            if (onViewAll) onViewAll();
          }}
          className="text-xs font-semibold uppercase tracking-wider text-[#2B1A14] hover:text-[#C9823A] transition-colors cursor-pointer active:scale-95"
        >
          <span>View All</span>
        </button>
      </div>

      {/* Infinite Auto-Scrolling Looping Carousel with Hover Pause */}
      <div 
        className="relative w-full overflow-hidden py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft edge gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#FFF8EE] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#FFF8EE] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-3 sm:gap-4 w-max"
          animate={{
            x: isPaused ? undefined : ['0%', '-33.333%']
          }}
          transition={{
            ease: 'linear',
            duration: 22,
            repeat: Infinity
          }}
        >
          {loopCategories.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            return (
              <motion.div
                key={`${cat.id}-${idx}`}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  playSound('click');
                  setActiveCategory(cat.id);
                  if (onSelectCategory) onSelectCategory(cat.id);
                }}
                className={`p-2.5 sm:p-3 pb-3 sm:pb-3.5 rounded-t-full rounded-b-2xl text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-between border w-[120px] sm:w-[145px] shrink-0 ${
                  isActive
                    ? 'bg-[#FFFFFF] border-[#C9823A] shadow-md ring-1 ring-[#C9823A]/30 -translate-y-1'
                    : 'bg-[#F4E5D2] hover:bg-[#FFFFFF] border-[#E9D8C5] shadow-xs'
                }`}
              >
                {/* Product Visual - Perfect Dome Arch matching outer card */}
                <div className="w-full aspect-[4/5] rounded-t-full rounded-b-xl flex items-center justify-center overflow-hidden bg-[#F4E5D2]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Category Name */}
                <span className={`text-xs font-serif tracking-wide pt-2 whitespace-nowrap ${isActive ? 'font-bold text-[#2B1A14]' : 'text-[#78665C]'}`}>
                  {cat.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
}
