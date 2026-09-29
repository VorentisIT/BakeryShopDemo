import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Bookmark } from 'lucide-react';
import { playSound } from '../utils/sound';

import sigPistachio from '../assets/hd_sig_pistachio.jpg';
import sigAlmond from '../assets/hd_sig_almond.jpg';
import sigWalnut from '../assets/hd_sig_walnut.jpg';
import sigBlackforest from '../assets/hd_sig_blackforest.jpg';

export default function SignatureCreations({ onAddToCart, onViewAll, onViewDetails }) {
  const [favorites, setFavorites] = useState({});
  const [isPaused, setIsPaused] = useState(false);

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

  // Triplicate list for continuous seamless opposite-direction loop
  const loopProducts = [...products, ...products, ...products];

  return (
    <section id="signature" className="py-10 sm:py-14 relative z-20 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 bg-[#FFF8EE]">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 px-2 sm:px-3 text-center sm:text-left">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9823A] block">
            HANDPICKED FOR YOU
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2B1A14] mt-0.5">
            Our Signature Creations
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

      {/* Infinite Auto-Scrolling Looping Carousel in Opposite Direction */}
      <div 
        className="relative w-full overflow-hidden py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft edge gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#FFF8EE] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#FFF8EE] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 sm:gap-6 w-max"
          animate={{
            x: isPaused ? undefined : ['-33.333%', '0%']
          }}
          transition={{
            ease: 'linear',
            duration: 25,
            repeat: Infinity
          }}
        >
          {loopProducts.map((item, idx) => (
            <motion.div
              key={`${item.id}-${idx}`}
              whileHover={{ y: -4 }}
              className="group relative bg-[#FFFFFF] rounded-2xl p-3 border border-[#E9D8C5] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md w-[250px] sm:w-[280px] shrink-0"
            >
              
              {/* Image Box with Heart */}
              <div 
                onClick={() => {
                  playSound('click');
                  if (onViewDetails) onViewDetails(item);
                }}
                className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-3 bg-[#F4E5D2] cursor-pointer"
              >
                
                {/* Heart Wishlist Icon */}
                <button
                  onClick={(e) => toggleFavorite(item.id, e)}
                  className="absolute top-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center text-[#2B1A14] hover:text-[#C9823A] shadow-xs transition-transform active:scale-90"
                  title="Save to Wishlist"
                >
                  <Heart className={`w-3.5 h-3.5 ${favorites[item.id] ? 'fill-[#5A2E1F] text-[#5A2E1F]' : ''}`} />
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
                  className="font-serif text-sm font-semibold text-[#2B1A14] group-hover:text-[#C9823A] transition-colors truncate cursor-pointer"
                >
                  {item.name}
                </h3>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-sm font-bold text-[#2B1A14]">₹ {item.price}</span>
                    <div className="flex items-center gap-1 text-[11px] text-[#78665C]">
                      <Star className="w-3 h-3 fill-[#C9823A] text-[#C9823A]" />
                      <span>{item.rating}</span>
                      <span className="text-[10px]">({item.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Circular Action/Cart Button */}
                  <button
                    onClick={() => { playSound('cart'); onAddToCart(item); }}
                    className="w-7 h-7 rounded-full bg-[#5A2E1F] text-[#FFF8EE] hover:bg-[#3E1F16] flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
                    title="Add to Cart"
                  >
                    <Bookmark className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
