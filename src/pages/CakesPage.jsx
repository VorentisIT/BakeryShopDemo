import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, ArrowRight, Eye, Sparkles, Filter, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import { playSound } from '../utils/sound';

import hdFeaturedCake from '../assets/hd_featured_cake.jpg';
import heroDeliceCake from '../assets/hero_delice_cake.jpg';
import hdCustomCake from '../assets/hd_custom_cake.jpg';
import hdSigPistachio from '../assets/hd_sig_pistachio.jpg';
import hdSigAlmond from '../assets/hd_sig_almond.jpg';
import hdSigWalnut from '../assets/hd_sig_walnut.jpg';
import hdSigBlackforest from '../assets/hd_sig_blackforest.jpg';
import hdCatCakes from '../assets/hd_cat_cakes.jpg';

export default function CakesPage({ onAddToCart, onViewDetails, onNavigateHome, onOpenCustomCake }) {
  const [activeFlavour, setActiveFlavour] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    playSound('click');
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const cakes = [
    {
      id: 'grand-choco-noir-walnut',
      name: "Grand Choco Noir Walnut Cake",
      flavour: 'chocolate',
      price: 899,
      rating: 4.9,
      reviewsCount: 1200,
      image: hdFeaturedCake,
      isBestseller: true,
      dietary: 'Eggless Available',
      desc: "Rich 70% dark Belgian chocolate layered with slow-roasted California walnuts."
    },
    {
      id: 'sicilian-pistachio-dream',
      name: "Sicilian Pistachio Dream Cake",
      flavour: 'pistachio',
      price: 749,
      rating: 4.8,
      reviewsCount: 620,
      image: hdSigPistachio,
      isBestseller: true,
      dietary: 'Vegetarian',
      desc: "Roasted emerald pistachios folded into silky mascarpone mousse and sponge."
    },
    {
      id: 'belgian-truffle-celebration',
      name: "Belgian Truffle Layer Cake",
      flavour: 'chocolate',
      price: 949,
      rating: 5.0,
      reviewsCount: 980,
      image: heroDeliceCake,
      isBestseller: true,
      dietary: 'Eggless Available',
      desc: "27 crispy micro-layers of French butter laminated with dark Valrhona ganache."
    },
    {
      id: 'roasted-almond-cream',
      name: "Roasted Almond Cream Cake",
      flavour: 'vanilla',
      price: 699,
      rating: 4.8,
      reviewsCount: 410,
      image: hdSigAlmond,
      isBestseller: false,
      dietary: 'Vegetarian',
      desc: "Fragrant Madagascar vanilla sponge infused with almond praline crunch."
    },
    {
      id: 'black-forest-kirsch',
      name: "Black Forest Kirsch Gateau",
      flavour: 'chocolate',
      price: 799,
      rating: 4.9,
      reviewsCount: 540,
      image: hdSigBlackforest,
      isBestseller: true,
      dietary: 'Vegetarian',
      desc: "Valrhona chocolate sponge layered with sour cherry compote and Chantilly cream."
    },
    {
      id: 'caramel-walnut-delight',
      name: "Caramel Walnut Royale",
      flavour: 'vanilla',
      price: 849,
      rating: 4.7,
      reviewsCount: 310,
      image: hdSigWalnut,
      isBestseller: false,
      dietary: 'Nut-Free Optional',
      desc: "Burnt caramel buttercream layered between toasted walnut dacquoise."
    },
    {
      id: 'classic-opera-cake',
      name: "Classic French Opera Cake",
      flavour: 'chocolate',
      price: 899,
      rating: 4.95,
      reviewsCount: 470,
      image: hdCatCakes,
      isBestseller: false,
      dietary: 'Vegetarian',
      desc: "Layers of almond sponge soaked in coffee syrup, layered with ganache and coffee buttercream."
    },
    {
      id: 'custom-artisan-tier',
      name: "Chef's Signature 3-Tier Atelier",
      flavour: 'chocolate',
      price: 1899,
      rating: 5.0,
      reviewsCount: 150,
      image: hdCustomCake,
      isBestseller: true,
      dietary: 'Eggless Available',
      desc: "Custom tiered celebration cake decorated with edible gold leaf and sugar flowers."
    }
  ];

  // Filtering
  const filteredCakes = cakes.filter(cake => {
    if (activeFlavour !== 'all' && cake.flavour !== activeFlavour) return false;
    if (dietaryFilter === 'eggless' && !cake.dietary.toLowerCase().includes('eggless')) return false;
    if (dietaryFilter === 'vegetarian' && !cake.dietary.toLowerCase().includes('vegetarian')) return false;
    if (dietaryFilter === 'nut-free' && !cake.dietary.toLowerCase().includes('nut-free')) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="pt-24 pb-20 bg-[#FFF8EE] min-h-screen text-[#2B1A14]">
      
      {/* Top Banner / Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 border-b border-[#E9D8C5]">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => { playSound('click'); onNavigateHome(); }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#78665C] hover:text-[#2B1A14] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <span className="text-xs text-[#C9823A] font-mono uppercase tracking-widest">
            Home / Collection / Cakes
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-script text-3xl text-[#C9823A] block">
              Handcrafted Pâtisserie
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#2B1A14] mt-1">
              Artisanal Cakes Collection
            </h1>
            <p className="text-xs sm:text-sm text-[#78665C] font-light mt-2 max-w-xl">
              Each cake is baked fresh daily using French AOP butter, single-origin Valrhona cocoa, and organic fruit purees.
            </p>
          </div>

          <button
            onClick={() => { playSound('click'); onOpenCustomCake(); }}
            className="self-start md:self-auto px-6 py-3 rounded-full bg-[#5A2E1F] text-[#FFF8EE] hover:bg-[#3E1F16] transition-all text-xs font-medium uppercase tracking-wider shadow-md inline-flex items-center gap-2 cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-[#C9823A] group-hover:rotate-12 transition-transform" />
            <span>Design Custom Cake</span>
          </button>
        </div>
      </div>

      {/* Filter & Sort Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-3.5 rounded-2xl border border-[#E9D8C5] shadow-xs">
          
          {/* Flavour Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 w-full md:w-auto">
            {[
              { id: 'all', label: 'All Cakes' },
              { id: 'chocolate', label: 'Chocolate' },
              { id: 'pistachio', label: 'Pistachio' },
              { id: 'vanilla', label: 'Vanilla & Caramel' },
              { id: 'berry', label: 'Berries & Fruits' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => { playSound('click'); setActiveFlavour(f.id); }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all shrink-0 cursor-pointer ${
                  activeFlavour === f.id
                    ? 'bg-[#5A2E1F] text-[#FFF8EE] shadow-xs font-semibold'
                    : 'bg-[#F4E5D2] text-[#78665C] hover:bg-[#E9D8C5] hover:text-[#2B1A14]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Right Controls: Dietary & Sort */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <select
              value={dietaryFilter}
              onChange={(e) => setDietaryFilter(e.target.value)}
              className="bg-[#FFF8EE] border border-[#E9D8C5] text-xs text-[#2B1A14] px-3 py-1.5 rounded-xl focus:outline-none cursor-pointer"
            >
              <option value="all">Dietary: All</option>
              <option value="eggless">Eggless</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="nut-free">Nut-Free</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#FFF8EE] border border-[#E9D8C5] text-xs text-[#2B1A14] px-3 py-1.5 rounded-xl focus:outline-none cursor-pointer"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {filteredCakes.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-sm text-[#78665C]">No cakes found matching the selected filters.</p>
            <button
              onClick={() => { setActiveFlavour('all'); setDietaryFilter('all'); }}
              className="mt-3 px-5 py-2 rounded-full bg-[#5A2E1F] text-white text-xs font-medium cursor-pointer hover:bg-[#3E1F16]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredCakes.map((cake, idx) => (
              <motion.div
                key={cake.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-white rounded-3xl p-3.5 border border-[#E9D8C5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Wishlist */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4E5D2] mb-3">
                    {cake.isBestseller && (
                      <span className="absolute top-2.5 left-2.5 z-10 px-2.5 py-0.5 rounded-full bg-[#5A2E1F] text-[#FFF8EE] text-[9px] font-semibold uppercase tracking-wider shadow-xs">
                        Bestseller
                      </span>
                    )}

                    <button
                      onClick={(e) => toggleFavorite(cake.id, e)}
                      className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#2B1A14] flex items-center justify-center shadow-xs transition-transform active:scale-90 cursor-pointer"
                      title="Add to Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${favorites[cake.id] ? 'fill-[#5A2E1F] text-[#5A2E1F]' : 'hover:text-[#5A2E1F]'}`} />
                    </button>

                    <img
                      src={cake.image}
                      alt={cake.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Quick View Hover Button */}
                    <button
                      onClick={() => { playSound('click'); onViewDetails(cake); }}
                      className="absolute inset-x-4 bottom-3 py-2 rounded-xl bg-white/95 backdrop-blur-xs text-[#2B1A14] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-[#5A2E1F] hover:text-white"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>

                  {/* Info */}
                  <div className="space-y-1.5 px-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C9823A]">
                        {cake.dietary}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-[#2B1A14]">
                        <Star className="w-3 h-3 fill-[#C9823A] text-[#C9823A]" />
                        <span>{cake.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-base sm:text-lg font-semibold text-[#2B1A14] group-hover:text-[#5A2E1F] transition-colors line-clamp-1">
                      {cake.name}
                    </h3>

                    <p className="text-xs text-[#78665C] font-light line-clamp-2">
                      {cake.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Price & Add to Cart */}
                <div className="pt-4 px-1 flex items-center justify-between border-t border-[#E9D8C5] mt-3">
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#2B1A14]">
                    ₹ {cake.price}
                  </span>

                  <button
                    onClick={() => { playSound('cart'); onAddToCart(cake); }}
                    className="px-4 py-2 rounded-full bg-[#5A2E1F] text-[#FFF8EE] text-xs font-medium uppercase tracking-wider hover:bg-[#3E1F16] transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
                  >
                    <span>Add to Cart</span>
                  </button>
                </div>

              </motion.div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
