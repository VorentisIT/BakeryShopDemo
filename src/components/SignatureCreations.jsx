import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, ArrowRight, Bookmark } from 'lucide-react';
import { playSound } from '../utils/sound';

import sigPistachio from '../assets/hd_sig_pistachio.jpg';
import sigAlmond from '../assets/hd_sig_almond.jpg';
import sigWalnut from '../assets/hd_sig_walnut.jpg';
import sigBlackforest from '../assets/hd_sig_blackforest.jpg';

export default function SignatureCreations({ onAddToCart, onViewAll, onViewDetails }) {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    playSound('click');
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const products = [
    {
      id: 'pistachio-dream-cake',
      name: 'Pistachio Dream Cake',
      price: 749,
      rating: 4.7,
      reviewsCount: 320,
      image: sigPistachio,
      category: 'cakes',
      description: 'Slow-roasted Sicilian emerald pistachios folded into silky mascarpone mousse and sponge layers.',
      dietary: ['Vegetarian'],
      prepTime: 'Freshly Baked'
    },
    {
      id: 'roasted-almond-cake',
      name: 'Roasted Almond Cake',
      price: 699,
      rating: 4.8,
      reviewsCount: 412,
      image: sigAlmond,
      category: 'cakes',
      description: 'Golden California roasted almonds enveloped in aromatic sponge and pure vanilla cream.',
      dietary: ['Vegetarian'],
      prepTime: 'Freshly Baked'
    },
    {
      id: 'golden-walnut-delight',
      name: 'Golden Walnut Delight',
      price: 749,
      rating: 4.9,
      reviewsCount: 295,
      image: sigWalnut,
      category: 'cakes',
      description: 'Hand-cracked Kashmiri golden walnuts atop a rich chocolate and caramel layer cake.',
      dietary: ['Vegetarian'],
      prepTime: 'Freshly Baked'
    },
    {
      id: 'classic-black-forest',
      name: 'Classic Black Forest',
      price: 699,
      rating: 4.8,
      reviewsCount: 980,
      image: sigBlackforest,
      category: 'cakes',
      description: 'Traditional Black Forest layers with tart Morello cherries, Belgian chocolate, and fresh whipped cream.',
      dietary: ['Vegetarian'],
      prepTime: 'Freshly Baked'
    }
  ];

  return (
    <section id="signature" className="py-12 sm:py-16 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      
      {/* Top Header matching reference */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 text-center sm:text-left">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C59B27] block">
            HANDPICKED FOR YOU
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1612] mt-0.5">
            Our Signature Creations
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

      {/* 4-Column Product Cards: 2-col on mobile, 4-col on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {products.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            viewport={{ once: true }}
            className="group relative bg-white sm:bg-[#FAF8F5] rounded-2xl p-2 sm:p-2.5 border border-[#E6DFD5] sm:border-transparent hover:border-[#E6DFD5] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
          >
            
            {/* Image Box with Heart */}
            <div 
              onClick={() => {
                playSound('click');
                if (onViewDetails) onViewDetails(item);
              }}
              className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-3 bg-[#F4EFEA] cursor-pointer"
            >
              
              {/* Heart Wishlist Icon */}
              <button
                onClick={(e) => toggleFavorite(item.id, e)}
                className="absolute top-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center text-[#1A1612] hover:text-[#C59B27] shadow-xs transition-transform active:scale-90"
                title="Save to Wishlist"
              >
                <Heart className={`w-3.5 h-3.5 ${favorites[item.id] ? 'fill-[#7B3131] text-[#7B3131]' : ''}`} />
              </button>

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Details Row */}
            <div className="space-y-1.5 px-1">
              <h3 
                onClick={() => {
                  playSound('click');
                  if (onViewDetails) onViewDetails(item);
                }}
                className="font-serif text-sm font-semibold text-[#1A1612] group-hover:text-[#C59B27] transition-colors truncate cursor-pointer"
              >
                {item.name}
              </h3>

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-sm font-bold text-[#1A1612]">₹ {item.price}</span>
                  <div className="flex items-center gap-1 text-[11px] text-[#6B5744]">
                    <Star className="w-3 h-3 fill-[#C59B27] text-[#C59B27]" />
                    <span>{item.rating}</span>
                    <span className="text-[10px]">({item.reviewsCount})</span>
                  </div>
                </div>

                {/* Circular Black Action/Cart Button */}
                <button
                  onClick={() => { playSound('cart'); onAddToCart(item); }}
                  className="w-7 h-7 rounded-full bg-[#181310] text-[#D6A84F] hover:bg-[#C59B27] hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
                  title="Add to Cart"
                >
                  <Bookmark className="w-3.5 h-3.5 fill-current" />
                </button>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
