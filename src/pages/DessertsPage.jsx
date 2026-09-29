import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, ArrowRight, Eye, ArrowLeft, Coffee, Sparkles } from 'lucide-react';
import { playSound } from '../utils/sound';

import hdBlogCroissant from '../assets/hd_blog_croissant.jpg';
import hdNewsMacarons from '../assets/hd_news_macarons.jpg';
import hdCatBrownies from '../assets/hd_cat_brownies.jpg';
import hdCatDesserts from '../assets/hd_cat_desserts.jpg';
import hdBlogTart from '../assets/hd_blog_tart.jpg';
import hdCatPastries from '../assets/hd_cat_pastries.jpg';
import hdBlogChocolate from '../assets/hd_blog_chocolate.jpg';

export default function DessertsPage({ onAddToCart, onViewDetails, onNavigateHome }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    playSound('click');
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const desserts = [
    {
      id: 'french-macarons-box',
      name: "Assorted French Macarons Box",
      type: 'macarons',
      price: 480,
      rating: 4.95,
      reviewsCount: 420,
      image: hdNewsMacarons,
      badge: 'Bestseller',
      desc: "Box of 6 pastel macarons: Pistachio, Raspberry, Madagascar Vanilla, Salted Caramel, Dark Chocolate, and Lemon."
    },
    {
      id: 'normandy-butter-croissants',
      name: "Normandy Butter Croissants (Set of 2)",
      type: 'pastries',
      price: 260,
      rating: 4.98,
      reviewsCount: 512,
      image: hdBlogCroissant,
      badge: 'Fresh 5 AM',
      desc: "27 crispy golden micro-layers of 84% butter fat AOP Normandy butter with light, airy honeycomb interior."
    },
    {
      id: 'raspberry-fruit-tartlet',
      name: "Raspberry & Wild Berry Tartlet",
      type: 'tarts',
      price: 240,
      rating: 4.92,
      reviewsCount: 290,
      image: hdBlogTart,
      badge: 'Chef Favorite',
      desc: "Buttery sweet sablé crust filled with Tahitian vanilla bean pastry cream and glazed fresh berries."
    },
    {
      id: 'belgian-fudge-brownies',
      name: "Belgian Dark Fudge Brownies",
      type: 'brownies',
      price: 220,
      rating: 4.88,
      reviewsCount: 380,
      image: hdCatBrownies,
      badge: 'Indulgent',
      desc: "Dense, gooey 70% dark chocolate brownie squares with roasted walnut chunks and flaky sea salt."
    },
    {
      id: 'berry-mousse-cup',
      name: "Chilled Berry Mousse Verrine",
      type: 'mousse',
      price: 190,
      rating: 4.85,
      reviewsCount: 175,
      image: hdCatDesserts,
      badge: 'Chilled',
      desc: "Layers of strawberry coulis, white chocolate vanilla mousse, and almond crumble crunch."
    },
    {
      id: 'pain-au-chocolat',
      name: "Valrhona Pain au Chocolat",
      type: 'pastries',
      price: 180,
      rating: 4.94,
      reviewsCount: 340,
      image: hdCatPastries,
      badge: 'Classic',
      desc: "Laminated French croissant pastry filled with two molten bars of dark Valrhona baking chocolate."
    },
    {
      id: 'chocolate-praline-tart',
      name: "Silky Chocolate Ganache Tart",
      type: 'tarts',
      price: 250,
      rating: 4.9,
      reviewsCount: 215,
      image: hdBlogChocolate,
      badge: 'Signature',
      desc: "Crisp cocoa pastry shell filled with 64% Guanaja chocolate ganache and hazelnut praline."
    }
  ];

  const filtered = activeCategory === 'all' 
    ? desserts 
    : desserts.filter(d => d.type === activeCategory);

  return (
    <div className="pt-24 pb-20 bg-[#FFF8EE] min-h-screen text-[#2B1A14]">
      
      {/* Top Banner */}
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
            Home / Collection / Desserts
          </span>
        </div>

        <span className="font-script text-3xl text-[#C9823A] block">
          Sweet Indulgences
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#2B1A14] mt-1">
          Artisanal Desserts & Viennoiserie
        </h1>
        <p className="text-xs sm:text-sm text-[#78665C] font-light mt-2 max-w-xl">
          From crisp flaky French croissants and delicate macarons to rich dark fudge brownies and berry tarts.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {[
            { id: 'all', label: 'All Desserts' },
            { id: 'pastries', label: 'Croissants & Pastries' },
            { id: 'macarons', label: 'French Macarons' },
            { id: 'tarts', label: 'Tarts & Verrines' },
            { id: 'brownies', label: 'Brownies & Fudge' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => { playSound('click'); setActiveCategory(tab.id); }}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all shrink-0 cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#5A2E1F] text-[#FFF8EE] shadow-sm font-semibold'
                  : 'bg-white border border-[#E9D8C5] text-[#78665C] hover:border-[#5A2E1F] hover:text-[#2B1A14]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: Full Card Image Presentation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E9D8C5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Full Card Top Image Thumbnail */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#F4E5D2]">
                <span className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full bg-[#5A2E1F] text-[#FFF8EE] text-[9px] font-semibold uppercase tracking-wider shadow-sm">
                  {item.badge}
                </span>

                <button
                  onClick={(e) => toggleFavorite(item.id, e)}
                  className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#2B1A14] flex items-center justify-center shadow-sm transition-transform active:scale-90 cursor-pointer"
                >
                  <Heart className={`w-4 h-4 ${favorites[item.id] ? 'fill-[#5A2E1F] text-[#5A2E1F]' : 'hover:text-[#5A2E1F]'}`} />
                </button>

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />

                <button
                  onClick={() => { playSound('click'); onViewDetails(item); }}
                  className="absolute inset-x-4 bottom-3.5 py-2.5 rounded-xl bg-white/95 backdrop-blur-xs text-[#2B1A14] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-[#5A2E1F] hover:text-white"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Quick View</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#2B1A14]">
                    <Star className="w-3.5 h-3.5 fill-[#C9823A] text-[#C9823A]" />
                    <span>{item.rating}</span>
                    <span className="text-[#78665C] font-normal">({item.reviewsCount} reviews)</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#2B1A14] group-hover:text-[#5A2E1F] transition-colors leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#78665C] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-[#E9D8C5]">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#2B1A14]">
                    ₹ {item.price}
                  </span>

                  <button
                    onClick={() => { playSound('cart'); onAddToCart(item); }}
                    className="px-6 py-2.5 rounded-full bg-[#5A2E1F] text-[#FFF8EE] text-xs font-medium uppercase tracking-wider hover:bg-[#3E1F16] transition-all flex items-center justify-center cursor-pointer shadow-sm active:scale-95"
                  >
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
