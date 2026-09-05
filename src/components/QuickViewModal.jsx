import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingBag, Check } from 'lucide-react';
import { playSound } from '../utils/sound';

export default function QuickViewModal({ item, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!item) return null;

  const handleAdd = () => {
    playSound('cart');
    onAddToCart(item, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1612]/60 backdrop-blur-sm"
        />

        {/* Slide-Over Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          className="relative w-full max-w-lg h-full bg-white border-l border-[#E6DFD5] shadow-2xl z-10 flex flex-col justify-between overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={() => { playSound('click'); onClose(); }}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 text-[#1A1612] hover:bg-[#FAF8F5] border border-[#E6DFD5] shadow-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product Image */}
          <div className="relative aspect-square w-full bg-[#FAF8F5] overflow-hidden flex items-center justify-center p-8 border-b border-[#E6DFD5]">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]"
            />
          </div>

          {/* Product Info */}
          <div className="p-8 flex-1 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-semibold text-[#C59B27] uppercase tracking-[0.2em]">
                <span>{item.category}</span>
                <span>•</span>
                <div className="flex items-center text-[#C59B27]">
                  <Star className="w-3.5 h-3.5 fill-[#C59B27] text-[#C59B27] mr-1" />
                  <span>{item.rating} ({item.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 className="font-serif text-3xl font-normal text-[#1A1612] mt-2">
                {item.name}
              </h2>

              <p className="text-2xl font-bold font-serif text-[#C59B27] mt-2">
                ₹{item.price}
              </p>

              <p className="text-sm text-[#6B5744] font-light mt-4 leading-relaxed">
                {item.description}
              </p>

              {/* Dietary Pills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {item.dietary.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#FAF8F5] text-[#C59B27] border border-[#E6DFD5] text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Specifications */}
              <div className="mt-6 space-y-2 pt-4 border-t border-[#E6DFD5] text-xs text-[#6B5744]">
                <div className="flex justify-between">
                  <span>Process:</span>
                  <span className="font-medium text-[#1A1612]">{item.prepTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Calories:</span>
                  <span className="font-medium text-[#1A1612]">{item.calories}</span>
                </div>
                <div className="flex justify-between">
                  <span>Allergens:</span>
                  <span className="font-medium text-[#1A1612]">{item.allergens.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Quantity Selector & Add CTA */}
            <div className="space-y-4 pt-4 border-t border-[#E6DFD5]">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#6B5744] uppercase tracking-widest font-medium">
                  Quantity
                </span>
                <div className="flex items-center gap-3 bg-[#FAF8F5] border border-[#E6DFD5] rounded-xl px-3 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-[#1A1612] text-lg font-bold px-1"
                  >
                    -
                  </button>
                  <span className="text-[#1A1612] font-bold w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-[#1A1612] text-lg font-bold px-1"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAdd}
                disabled={added}
                className={`w-full py-4 rounded-full font-semibold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 ${
                  added 
                    ? 'bg-[#8C9A70] text-white' 
                    : 'bg-[#181310] text-[#D6A84F] hover:bg-[#D6A84F] hover:text-[#181310]'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag • ₹{item.price * quantity}</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
