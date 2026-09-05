import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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

  const categories = [
    { id: 'cakes', name: 'Cakes', image: catCakes },
    { id: 'pastries', name: 'Pastries', image: catPastries },
    { id: 'cookies', name: 'Cookies', image: catCookies },
    { id: 'brownies', name: 'Brownies', image: catBrownies },
    { id: 'desserts', name: 'Desserts', image: catDesserts },
    { id: 'breads', name: 'Breads', image: catBreads },
    { id: 'custom', name: 'Custom Cakes', image: catCustom },
  ];

  return (
    <section id="category" className="py-12 sm:py-16 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      
      {/* Top Header matching reference */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 text-center sm:text-left">
        <div>
          <span className="font-script text-2xl text-[#C59B27] block">
            Explore by Category
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1612] mt-0.5">
            Find Your Perfect Treat
          </h2>
        </div>

        <button
          onClick={() => {
            playSound('click');
            if (onViewAll) onViewAll();
          }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1A1612] hover:text-[#C59B27] transition-colors group cursor-pointer active:scale-95"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 7 Arched Capsule Cards: Swipeable on mobile, 4-col on tablet, 7-col on desktop */}
      <div className="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory gap-3 pb-2 sm:pb-0 sm:grid sm:grid-cols-4 lg:grid-cols-7 sm:overflow-visible">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <motion.div
              key={cat.id}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                playSound('click');
                setActiveCategory(cat.id);
                if (onSelectCategory) onSelectCategory(cat.id);
              }}
              className={`pt-3 pb-3 px-2 rounded-t-[44px] rounded-b-[20px] text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-between border min-w-[96px] sm:min-w-0 snap-start shrink-0 sm:shrink ${
                isActive
                  ? 'bg-white border-[#C59B27] shadow-md ring-1 ring-[#C59B27]/30 -translate-y-1'
                  : 'bg-[#F7F2EC] hover:bg-white border-[#EBE4DC] shadow-xs'
              }`}
            >
              {/* Product Visual */}
              <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-t-full rounded-b-xl flex items-center justify-center overflow-hidden bg-[#EFE9E1]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Category Name */}
              <span className={`text-[11px] sm:text-xs font-serif tracking-wide pt-1 whitespace-nowrap sm:whitespace-normal ${isActive ? 'font-bold text-[#1A1612]' : 'text-[#6B5744]'}`}>
                {cat.name}
              </span>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
