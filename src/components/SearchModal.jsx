import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Star, ArrowRight, ShoppingBag } from 'lucide-react';
import { playSound } from '../utils/sound';

import hdFeaturedCake from '../assets/hd_featured_cake.jpg';
import heroDeliceCake from '../assets/hero_delice_cake.jpg';
import hdCustomCake from '../assets/hd_custom_cake.jpg';
import hdSigPistachio from '../assets/hd_sig_pistachio.jpg';
import hdSigAlmond from '../assets/hd_sig_almond.jpg';
import hdSigWalnut from '../assets/hd_sig_walnut.jpg';
import hdSigBlackforest from '../assets/hd_sig_blackforest.jpg';
import hdBlogCroissant from '../assets/hd_blog_croissant.jpg';
import hdNewsMacarons from '../assets/hd_news_macarons.jpg';
import hdCatCookies from '../assets/hd_cat_cookies.jpg';
import hdCatBrownies from '../assets/hd_cat_brownies.jpg';

export default function SearchModal({ isOpen, onClose, onAddToCart, onViewDetails }) {
  const [query, setQuery] = useState('');

  const allItems = [
    { id: 'grand-choco-noir', name: "Grand Choco Noir Walnut Cake", category: 'Cakes', price: 899, rating: 4.9, image: hdFeaturedCake },
    { id: 'pistachio-dream', name: "Sicilian Pistachio Dream Cake", category: 'Cakes', price: 749, rating: 4.8, image: hdSigPistachio },
    { id: 'belgian-truffle', name: "Belgian Truffle Layer Cake", category: 'Cakes', price: 949, rating: 5.0, image: heroDeliceCake },
    { id: 'almond-cake', name: "Roasted Almond Cream Cake", category: 'Cakes', price: 699, rating: 4.8, image: hdSigAlmond },
    { id: 'walnut-cake', name: "Golden Walnut Praline Cake", category: 'Cakes', price: 749, rating: 4.9, image: hdSigWalnut },
    { id: 'black-forest', name: "Classic Black Forest Cake", category: 'Cakes', price: 699, rating: 4.8, image: hdSigBlackforest },
    { id: 'custom-gold', name: "Vanilla Berry 24K Gold Cake", category: 'Cakes', price: 1199, rating: 4.9, image: hdCustomCake },
    { id: 'normandy-croissant', name: "Normandy Butter Croissants", category: 'Pastries', price: 260, rating: 4.98, image: hdBlogCroissant },
    { id: 'french-macarons', name: "Assorted French Macarons", category: 'Desserts', price: 480, rating: 4.95, image: hdNewsMacarons },
    { id: 'choc-chip-cookies', name: "Belgian Triple Choc Chip Cookies", category: 'Cookies', price: 280, rating: 4.95, image: hdCatCookies },
    { id: 'fudge-brownies', name: "Dark Fudge Walnut Brownies", category: 'Desserts', price: 220, rating: 4.88, image: hdCatBrownies },
  ];

  const results = query.trim() === '' 
    ? allItems.slice(0, 4) 
    : allItems.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) || 
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-[#E6DFD5] relative overflow-hidden"
        >
          {/* Header & Input */}
          <div className="flex items-center gap-3 pb-4 border-b border-[#E6DFD5]">
            <Search className="w-5 h-5 text-[#C59B27]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search cakes, croissants, macarons, cookies..."
              className="w-full bg-transparent text-sm sm:text-base text-[#1A1612] placeholder-[#8C7A68] focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#FAF8F5] text-[#6B5744] hover:text-[#1A1612] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Filter Tags */}
          <div className="flex items-center gap-2 py-3 border-b border-[#F2ECE4] text-xs">
            <span className="text-[#8C7A68]">Popular:</span>
            {['Chocolate', 'Pistachio', 'Croissant', 'Macarons'].map(tag => (
              <button
                key={tag}
                onClick={() => { playSound('click'); setQuery(tag); }}
                className="px-2.5 py-1 rounded-full bg-[#FAF8F5] hover:bg-[#EBE4DC] text-[#1A1612] font-medium transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="max-h-[55vh] overflow-y-auto divide-y divide-[#F2ECE4] py-2">
            {results.length === 0 ? (
              <div className="py-12 text-center text-xs text-[#8C7A68]">
                No delicious creations found matching "{query}".
              </div>
            ) : (
              results.map(item => (
                <div
                  key={item.id}
                  className="py-3 flex items-center justify-between gap-4 hover:bg-[#FAF8F5] px-2 rounded-xl transition-colors group cursor-pointer"
                  onClick={() => { playSound('click'); onViewDetails(item); onClose(); }}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-[#1A1612] group-hover:text-[#5A2E1F] transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-2 text-[11px] text-[#6B5744]">
                        <span className="text-[#C59B27] font-medium">{item.category}</span>
                        <span>•</span>
                        <div className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 fill-[#C59B27] text-[#C59B27]" />
                          <span>{item.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-serif text-sm font-bold text-[#1A1612]">
                      ₹ {item.price}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playSound('cart');
                        onAddToCart(item);
                        onClose();
                      }}
                      className="p-2 rounded-full bg-[#5A2E1F] hover:bg-[#3E1F16] text-white transition-all shadow-xs"
                      title="Add to Cart"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
