import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Eye, Heart, Star, Sparkles, Filter, Search, Check } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { playSound } from '../utils/sound';
import QuickViewModal from './QuickViewModal';

export default function MenuSection({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedDietary, setSelectedDietary] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [quickViewItem, setQuickViewItem] = useState(null);
  const [addedItemIds, setAddedItemIds] = useState([]);

  // Extract all unique dietary tags for filter bar
  const dietaryOptions = ['Vegetarian', 'Gluten-Free', 'Contains Nuts', 'Artisanal'];

  const toggleDietary = (tag) => {
    playSound('click');
    setSelectedDietary(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    playSound('click');
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Filtered menu logic
  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDietary = selectedDietary.length === 0 || 
                          selectedDietary.every(tag => item.dietary.includes(tag));
    return matchesCategory && matchesSearch && matchesDietary;
  });

  const handleQuickAdd = (e, item) => {
    e.stopPropagation();
    playSound('cart');
    onAddToCart(item, 1);
    setAddedItemIds(prev => [...prev, item.id]);
    setTimeout(() => {
      setAddedItemIds(prev => prev.filter(id => id !== item.id));
    }, 1200);
  };

  return (
    <section id="menu" className="py-24 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FFF8EE] border-t border-[#E9D8C5]">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9823A] block">
          OUR SELECTION
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2B1A14]">
          Our Daily Gourmet <span className="italic text-[#C9823A]">Creations</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#78665C] font-light">
          Freshly baked. Beautifully crafted. Perfect for every occasion.
        </p>
      </div>

      {/* Controls Bar: Category Tabs & Filters */}
      <div className="mt-12 space-y-6">
        
        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { playSound('click'); setActiveCategory(cat.id); }}
              className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#5A2E1F] text-[#FFF8EE] font-bold shadow-md'
                  : 'bg-[#F4E5D2] text-[#78665C] border border-[#E9D8C5] hover:text-[#2B1A14]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#F4E5D2] p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 border border-[#E9D8C5]">
          
          {/* Live Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#C9823A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search croissants, tarts, cakes..."
              className="w-full bg-white text-[#2B1A14] placeholder-[#78665C]/50 text-xs pl-10 pr-4 py-2.5 rounded-xl border border-[#E9D8C5] focus:outline-none focus:border-[#5A2E1F]"
            />
          </div>

          {/* Dietary Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-center">
            <span className="text-xs text-[#78665C] flex items-center gap-1 font-medium mr-1">
              <Filter className="w-3.5 h-3.5" /> Dietary:
            </span>
            {dietaryOptions.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleDietary(tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedDietary.includes(tag)
                    ? 'bg-[#5A2E1F] text-[#FFF8EE] font-bold'
                    : 'bg-white text-[#78665C] border border-[#E9D8C5] hover:border-[#5A2E1F]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Product Grid */}
      <motion.div 
        layout
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredItems.map((item) => {
            const isFav = favorites.includes(item.id);
            const isAdded = addedItemIds.includes(item.id);

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#E9D8C5] hover:border-[#5A2E1F]/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 shadow-sm"
              >
                {/* Image & Favorite Heart Button */}
                <div className="relative aspect-square overflow-hidden bg-[#FFF8EE] border-b border-[#E9D8C5]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                  />

                  {/* Favorite Toggle */}
                  <button
                    onClick={(e) => toggleFavorite(e, item.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 text-[#78665C] border border-[#E9D8C5] hover:text-[#5A2E1F] transition-colors shadow-sm cursor-pointer"
                  >
                    <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-[#5A2E1F] text-[#5A2E1F]' : ''}`} />
                  </button>

                  {/* Quick View Trigger */}
                  <button
                    onClick={() => { playSound('click'); setQuickViewItem(item); }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-xs transition-opacity duration-300 cursor-pointer"
                  >
                    <span className="px-4 py-2 rounded-full bg-white text-[#2B1A14] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:bg-[#5A2E1F] hover:text-white transition-all">
                      <Eye className="w-3.5 h-3.5" />
                      Quick View
                    </span>
                  </button>

                  {/* Rating Badge */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-md text-[#2B1A14] text-[11px] font-bold flex items-center gap-1 border border-[#E9D8C5] shadow-xs">
                    <Star className="w-3 h-3 fill-[#C9823A] text-[#C9823A]" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                {/* Info & Add Action */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif text-lg font-normal text-[#2B1A14] group-hover:text-[#5A2E1F] group-hover:translate-x-1 transition-all duration-300 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#78665C] font-light mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E9D8C5] flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-[#78665C] uppercase tracking-widest block font-semibold">Price</span>
                      <span className="text-base font-bold font-serif text-[#2B1A14]">
                        ₹{item.price}
                      </span>
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.92 }}
                      onClick={(e) => handleQuickAdd(e, item)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                        isAdded 
                          ? 'bg-[#5E8060] text-white'
                          : 'bg-[#5A2E1F] hover:bg-[#3E1F16] text-[#FFF8EE]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Quick View Drawer */}
      {quickViewItem && (
        <QuickViewModal
          item={quickViewItem}
          onClose={() => setQuickViewItem(null)}
          onAddToCart={onAddToCart}
        />
      )}

    </section>
  );
}
