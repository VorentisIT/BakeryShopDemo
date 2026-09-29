import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Eye, ShoppingBag, Filter, Heart, Check } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { playSound } from '../utils/sound';
import QuickViewModal from './QuickViewModal';

export default function MenuSection({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState([]);
  const [sortBy, setSortBy] = useState('popular');
  const [favorites, setFavorites] = useState(['pain-au-chocolat-2', 'custom-birthday-cake-8']);
  const [quickViewItem, setQuickViewItem] = useState(null);
  const [addedItemIds, setAddedItemIds] = useState([]);

  const dietaryOptions = ['Organic', 'Vegan', 'Gluten-Free', 'Nut-Free'];

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    playSound('click');
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleDietary = (tag) => {
    playSound('click');
    setSelectedDietary(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc) return false;
      }
      if (selectedDietary.length > 0) {
        const matchesDietary = selectedDietary.every(d => item.dietary.includes(d));
        if (!matchesDietary) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviewsCount - a.reviewsCount;
    });
  }, [activeCategory, searchQuery, selectedDietary, sortBy]);

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
    <section id="menu" className="py-24 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E6DFD5]">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C59B27] block">
          OUR SELECTION
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1612]">
          Our Daily Gourmet <span className="italic text-[#C59B27]">Creations</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#6B5744] font-light">
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
                  ? 'bg-[#181310] text-[#D6A84F] font-bold shadow-md'
                  : 'bg-[#FAF8F5] text-[#6B5744] border border-[#E6DFD5] hover:text-[#1A1612]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#FAF8F5] p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 border border-[#E6DFD5]">
          
          {/* Live Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#C59B27] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search croissants, tarts, cakes..."
              className="w-full bg-white text-[#1A1612] placeholder-[#6B5744]/50 text-xs pl-10 pr-4 py-2.5 rounded-xl border border-[#E6DFD5] focus:outline-none focus:border-[#C59B27]"
            />
          </div>

          {/* Dietary Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-center">
            <span className="text-xs text-[#6B5744] flex items-center gap-1 font-medium mr-1">
              <Filter className="w-3.5 h-3.5" /> Dietary:
            </span>
            {dietaryOptions.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleDietary(tag)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedDietary.includes(tag)
                    ? 'bg-[#181310] text-[#D6A84F] font-bold'
                    : 'bg-white text-[#6B5744] border border-[#E6DFD5] hover:border-[#1A1612]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <span className="text-xs text-[#6B5744]">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white text-[#1A1612] text-xs font-semibold px-3 py-2 rounded-xl border border-[#E6DFD5] focus:outline-none"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

        </div>

      </div>

      {/* Product Cards Grid */}
      <motion.div 
        layout
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item) => {
            const isAdded = addedItemIds.includes(item.id);
            const isFav = favorites.includes(item.id);
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#E6DFD5] hover:border-[#C59B27] transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 shadow-sm"
              >
                {/* Image & Favorite Heart Button */}
                <div className="relative aspect-square overflow-hidden bg-white border-b border-[#E6DFD5]/60">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                  />

                  {/* Favorite Toggle */}
                  <button
                    onClick={(e) => toggleFavorite(e, item.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 text-[#6B5744] border border-[#E6DFD5] hover:text-[#7B3131] transition-colors shadow-sm"
                  >
                    <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-[#7B3131] text-[#7B3131]' : ''}`} />
                  </button>

                  {/* Quick View Trigger */}
                  <button
                    onClick={() => { playSound('click'); setQuickViewItem(item); }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-xs transition-opacity duration-300 cursor-pointer"
                  >
                    <span className="px-4 py-2 rounded-full bg-white text-[#1A1612] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:bg-[#5A2E1F] hover:text-white transition-all">
                      <Eye className="w-3.5 h-3.5" />
                      Quick View
                    </span>
                  </button>

                  {/* Rating Badge */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-md text-[#1A1612] text-[11px] font-bold flex items-center gap-1 border border-[#E6DFD5] shadow-xs">
                    <Star className="w-3 h-3 fill-[#C59B27] text-[#C59B27]" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                {/* Info & Add Action */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif text-lg font-normal text-[#1A1612] group-hover:text-[#5A2E1F] group-hover:translate-x-1 transition-all duration-300 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#6B5744] font-light mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E6DFD5] flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-[#6B5744] uppercase tracking-widest block font-semibold">Price</span>
                      <span className="text-base font-bold font-serif text-[#1A1612]">
                        ₹{item.price}
                      </span>
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.92 }}
                      onClick={(e) => handleQuickAdd(e, item)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                        isAdded 
                          ? 'bg-[#556B2F] text-white'
                          : 'bg-[#181310] hover:bg-[#5A2E1F] text-white border border-[#181310] hover:border-[#5A2E1F]'
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
