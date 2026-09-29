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
          className="fixed inset-0 bg-[#2B1A14]/60 backdrop-blur-sm"
        />

        {/* Slide-Over Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          className="relative w-full max-w-lg h-full bg-white border-l border-[#E9D8C5] shadow-2xl z-10 flex flex-col justify-between overflow-y-auto text-[#2B1A14]"
        >
          {/* Close button */}
          <button
            onClick={() => { playSound('click'); onClose(); }}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 text-[#2B1A14] hover:bg-[#FFF8EE] border border-[#E9D8C5] shadow-md cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Product Image */}
          <div className="relative aspect-square w-full bg-[#FFF8EE] overflow-hidden flex items-center justify-center p-8 border-b border-[#E9D8C5]">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]"
            />
          </div>

          {/* Product Info */}
          <div className="p-8 flex-1 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-semibold text-[#C9823A] uppercase tracking-[0.2em]">
                <span>{item.category}</span>
                <span>•</span>
                <div className="flex items-center text-[#C9823A]">
                  <Star className="w-3.5 h-3.5 fill-[#C9823A] text-[#C9823A] mr-1" />
                  <span>{item.rating} ({item.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 className="font-serif text-3xl font-normal text-[#2B1A14] mt-2">
                {item.name}
              </h2>

              <p className="text-2xl font-bold font-serif text-[#5A2E1F] mt-2">
                ₹{item.price}
              </p>

              <p className="text-sm text-[#78665C] font-light mt-4 leading-relaxed">
                {item.description}
              </p>

              {/* Dietary Pills */}
              {item.dietary && Array.isArray(item.dietary) && item.dietary.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.dietary.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#F4E5D2] text-[#5A2E1F] border border-[#E9D8C5] text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Specifications */}
              <div className="mt-6 space-y-2 pt-4 border-t border-[#E9D8C5] text-xs text-[#78665C]">
                <div className="flex justify-between">
                  <span>Process:</span>
                  <span className="font-medium text-[#2B1A14]">{item.prepTime || 'Freshly Baked Daily'}</span>
                </div>
                {item.calories && (
                  <div className="flex justify-between">
                    <span>Calories:</span>
                    <span className="font-medium text-[#2B1A14]">{item.calories}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Allergens:</span>
                  <span className="font-medium text-[#2B1A14]">
                    {item.allergens && Array.isArray(item.allergens) && item.allergens.length > 0
                      ? item.allergens.join(', ')
                      : 'Dairy, Gluten, Nuts (Prepared in artisan facility)'}
                  </span>
                </div>
              </div>
            </div>

            {/* Quantity Selector & Add CTA */}
            <div className="space-y-4 pt-4 border-t border-[#E9D8C5]">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#78665C] uppercase tracking-widest font-medium">
                  Quantity
                </span>
                <div className="flex items-center gap-3 bg-[#FFF8EE] border border-[#E9D8C5] rounded-xl px-3 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-[#2B1A14] text-lg font-bold px-1 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-[#2B1A14] font-bold w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-[#2B1A14] text-lg font-bold px-1 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAdd}
                disabled={added}
                className={`w-full py-4 rounded-full font-semibold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
                  added 
                    ? 'bg-[#5E8060] text-white' 
                    : 'bg-[#5A2E1F] text-[#FFF8EE] hover:bg-[#3E1F16]'
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
