import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, ArrowRight, Eye, ArrowLeft, Cookie } from 'lucide-react';
import { playSound } from '../utils/sound';

import hdCatCookies from '../assets/hd_cat_cookies.jpg';
import hdCatBreads from '../assets/hd_cat_breads.jpg';
import hdCatBrownies from '../assets/hd_cat_brownies.jpg';
import hdSigAlmond from '../assets/hd_sig_almond.jpg';

export default function CookiesPage({ onAddToCart, onViewDetails, onNavigateHome }) {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    playSound('click');
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const items = [
    {
      id: 'artisanal-choc-chip-cookies',
      name: "Belgian Triple Choc Chip Cookies (Box of 4)",
      price: 280,
      rating: 4.95,
      reviewsCount: 380,
      image: hdCatCookies,
      badge: 'Bestseller',
      desc: "Crispy edges, chewy molten center, packed with dark, milk, and white Belgian chocolate chips."
    },
    {
      id: 'french-country-sourdough',
      name: "Artisan Country Sourdough Boule",
      price: 220,
      rating: 4.98,
      reviewsCount: 460,
      image: hdCatBreads,
      badge: 'Baked 6 AM',
      desc: "36-hour slow fermented wild yeast sourdough with blistered caramelized crust and open airy crumb."
    },
    {
      id: 'roasted-almond-sables',
      name: "Salted Butter Almond Sablés (Box of 8)",
      price: 320,
      rating: 4.9,
      reviewsCount: 210,
      image: hdSigAlmond,
      badge: 'French Classic',
      desc: "Melt-in-your-mouth Breton butter shortbread cookies studded with roasted almond slivers."
    },
    {
      id: 'double-chocolate-fudge-cookies',
      name: "Espresso Dark Fudge Cookies (Box of 4)",
      price: 290,
      rating: 4.92,
      reviewsCount: 195,
      image: hdCatBrownies,
      badge: 'Rich & Fudgy',
      desc: "Intense 70% dark cocoa cookie infused with fresh espresso and sprinkled with Maldon sea salt flakes."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#FFF8EE] min-h-screen text-[#2B1A14]">
      
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 border-b border-[#E9D8C5]">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => { playSound('click'); onNavigateHome(); }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#78665C] hover:text-[#5A2E1F] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        <span className="font-script text-3xl text-[#C9823A] block">
          Fresh From the Oven
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#2B1A14] mt-1">
          Gourmet Cookies & Artisan Breads
        </h1>
        <p className="text-xs sm:text-sm text-[#78665C] font-light mt-2 max-w-xl">
          Freshly baked every morning with French butter, natural wild sourdough starter, and pure cane sugar.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group bg-white rounded-3xl p-3.5 border border-[#E9D8C5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4E5D2] mb-3">
                  <span className="absolute top-2.5 left-2.5 z-10 px-2.5 py-0.5 rounded-full bg-[#5A2E1F] text-[#FFF8EE] text-[9px] font-semibold uppercase tracking-wider">
                    {item.badge}
                  </span>

                  <button
                    onClick={(e) => toggleFavorite(item.id, e)}
                    className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#2B1A14] flex items-center justify-center shadow-xs transition-transform active:scale-90 cursor-pointer"
                  >
                    <Heart className={`w-4 h-4 ${favorites[item.id] ? 'fill-[#5A2E1F] text-[#5A2E1F]' : 'hover:text-[#5A2E1F]'}`} />
                  </button>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <button
                    onClick={() => { playSound('click'); onViewDetails(item); }}
                    className="absolute inset-x-4 bottom-3 py-2 rounded-xl bg-white/95 backdrop-blur-xs text-[#2B1A14] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-[#5A2E1F] hover:text-white"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick View</span>
                  </button>
                </div>

                <div className="space-y-1 px-1">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-[#2B1A14]">
                    <Star className="w-3 h-3 fill-[#C9823A] text-[#C9823A]" />
                    <span>{item.rating}</span>
                    <span className="text-[#78665C] font-normal">({item.reviewsCount} reviews)</span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-semibold text-[#2B1A14] group-hover:text-[#5A2E1F] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#78665C] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 px-1 flex items-center justify-between border-t border-[#E9D8C5] mt-3">
                <span className="font-serif text-lg sm:text-xl font-bold text-[#2B1A14]">
                  ₹ {item.price}
                </span>

                <button
                  onClick={() => { playSound('cart'); onAddToCart(item); }}
                  className="px-4 py-2 rounded-full bg-[#5A2E1F] text-[#FFF8EE] text-xs font-medium uppercase tracking-wider hover:bg-[#3E1F16] transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
                >
                  <span>Add to Cart</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
