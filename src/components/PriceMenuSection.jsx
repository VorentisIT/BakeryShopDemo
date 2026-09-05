import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingBag } from 'lucide-react';
import { playSound } from '../utils/sound';

export default function PriceMenuSection({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems = [
    { id: 'normandy-croissant', name: 'Normandy Butter Croissant', price: 140, category: 'pastries', desc: '27 micro-layers of AOP Normandy butter & T55 French flour', isHot: true },
    { id: 'pain-au-chocolat', name: 'Pain au Chocolat', price: 160, category: 'pastries', desc: 'Flaky croissant dough filled with two Valrhona dark chocolate batons', isHot: true },
    { id: 'grand-cru-cake-slice', name: 'Grand Cru Dark Chocolate Slice', price: 280, category: 'cakes', desc: '70% Valrhona cocoa cake with mirror glaze & organic cherries', isHot: true },
    { id: 'brioche-feuilletee', name: 'Brioche Feuilletée', price: 210, category: 'breads', desc: 'Rich golden butter brioche folded into flaky golden ribbons', isHot: false },
    { id: 'signature-tart', name: 'Signature Dark Chocolate Tart', price: 240, category: 'desserts', desc: 'Crisp cocoa sablée shell filled with Fleur de Sel caramel ganache', isHot: true },
    { id: 'macaron-box-6', name: 'Pastel Macaron Box (6 pcs)', price: 450, category: 'giftboxes', desc: 'Assorted almond macarons: Pistachio, Lavender Honey, Tahitian Vanilla', isHot: false },
    { id: 'artisanal-sourdough', name: 'San Francisco Sourdough Loaf', price: 320, category: 'breads', desc: '48-hour cold fermented wild yeast starter with dark blistered crust', isHot: false },
    { id: 'zesty-lemon-tart', name: 'Menton Lemon Meringue Tart', price: 200, category: 'desserts', desc: 'Tangy Menton lemon curd in butter crust with toasted meringue peaks', isHot: false }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 relative z-20 bg-[#FAF8F5] text-[#1A1612] border-t border-[#E6DFD5] overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E6DFD5]">
            <Star className="w-3 h-3 text-[#C59B27] fill-[#C59B27]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C59B27]">
              PARISIAN BAKERY PRICING MENU
            </span>
            <Star className="w-3 h-3 text-[#C59B27] fill-[#C59B27]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1612]">
            Fresh Daily <span className="italic text-[#C59B27]">Price List</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5744] font-light">
            Handcrafted luxury patisserie served fresh from our deck ovens daily.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {[
            { id: 'all', label: 'All Items' },
            { id: 'pastries', label: 'Pastries' },
            { id: 'cakes', label: 'Cakes' },
            { id: 'breads', label: 'Artisanal Breads' },
            { id: 'desserts', label: 'Desserts' },
            { id: 'giftboxes', label: 'Gift Boxes' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => { playSound('click'); setActiveCategory(tab.id); }}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#181310] text-[#D6A84F] font-semibold shadow-md scale-105'
                  : 'bg-white text-[#6B5744] border border-[#E6DFD5] hover:border-[#1A1612]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Qode Pretzel Style Dashed Menu List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group p-5 rounded-2xl bg-white border border-[#E6DFD5] hover:border-[#C59B27] transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Title + Price with Dashed Leader Line */}
                <div className="flex items-baseline justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-lg font-normal text-[#1A1612] group-hover:text-[#C59B27] transition-colors">
                      {item.name}
                    </h3>
                    {item.isHot && (
                      <span className="px-2 py-0.5 rounded-full bg-[#C59B27]/15 text-[#C59B27] text-[9px] uppercase tracking-wider font-semibold border border-[#C59B27]/30">
                        Chef Choice
                      </span>
                    )}
                  </div>
                  
                  {/* Dashed Line Filler */}
                  <div className="flex-1 border-b border-dashed border-[#D6CBBF] mx-2 opacity-80" />

                  {/* Price in Indian Rupees */}
                  <span className="font-serif text-lg font-semibold text-[#1A1612]">
                    ₹{item.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-[#6B5744] font-light mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Add to Cart Button */}
              <div className="mt-4 pt-3 border-t border-[#E6DFD5]/60 flex justify-end">
                <button
                  onClick={() => {
                    playSound('cart');
                    onAddToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      category: item.category,
                      description: item.desc,
                      image: '/images/cake_holes.jpg'
                    }, 1);
                  }}
                  className="px-4 py-1.5 rounded-full bg-[#181310] text-[#D6A84F] hover:bg-[#D6A84F] hover:text-[#181310] text-[10px] uppercase font-semibold tracking-widest border border-[#181310] transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <ShoppingBag className="w-3 h-3" />
                  <span>Add to Order</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
