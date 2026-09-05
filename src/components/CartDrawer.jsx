import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight, Check } from 'lucide-react';
import { playSound } from '../utils/sound';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onProceedCheckout }) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const deliveryFee = subtotal > 0 ? 50 : 0; // ₹50 delivery
  const finalTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyPromo = () => {
    playSound('click');
    const code = promoCode.trim().toUpperCase();
    if (code === 'GOLDEN15') {
      setDiscountPercent(15);
      setPromoApplied(true);
      setPromoError('');
      playSound('celebrate');
    } else {
      setPromoError('Invalid promo code. Try GOLDEN15');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1A1612]/60 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-md bg-white border-l border-[#E6DFD5] text-[#1A1612] shadow-2xl flex flex-col justify-between"
            >
              
              {/* Header */}
              <div className="p-6 border-b border-[#E6DFD5] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#C59B27]" />
                  <h2 className="font-serif text-xl font-normal text-[#1A1612]">Your Creation Bag</h2>
                  <span className="text-xs text-[#181310] bg-[#D6A84F] px-2 py-0.5 rounded-full font-bold">
                    {cart.reduce((a, b) => a + b.quantity, 0)}
                  </span>
                </div>
                <button
                  onClick={() => { playSound('click'); onClose(); }}
                  className="p-2 rounded-full text-[#6B5744] hover:text-[#1A1612]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-center mx-auto text-[#C59B27]">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-normal text-[#1A1612]">Your bag is empty</h3>
                    <p className="text-xs text-[#6B5744] max-w-xs mx-auto">
                      Explore our Normandy croissants, chocolate tarts, or build a custom cake!
                    </p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E6DFD5] flex items-center gap-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover shrink-0 border border-[#E6DFD5]"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif font-normal text-[#1A1612] text-sm truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs font-bold font-serif text-[#C59B27] mt-0.5">
                          ₹{item.price * item.quantity}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center gap-2 bg-white border border-[#E6DFD5] rounded-lg px-2 py-0.5">
                            <button
                              onClick={() => { playSound('click'); onUpdateQuantity(item.id, item.quantity - 1); }}
                              className="text-[#1A1612] text-xs font-bold px-1"
                            >
                              -
                            </button>
                            <span className="text-xs text-[#1A1612] font-bold w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => { playSound('click'); onUpdateQuantity(item.id, item.quantity + 1); }}
                              className="text-[#1A1612] text-xs font-bold px-1"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => { playSound('click'); onRemoveItem(item.id); }}
                            className="text-[#6B5744] hover:text-[#7B3131] p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Summary & Checkout */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-[#E6DFD5] bg-[#FAF8F5] space-y-4">
                  
                  {/* Promo Input */}
                  <div className="space-y-1">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Promo code (GOLDEN15)"
                        className="flex-1 bg-white text-[#1A1612] text-xs px-3 py-2.5 rounded-xl border border-[#E6DFD5] focus:outline-none uppercase"
                      />
                      <button
                        onClick={handleApplyPromo}
                        className="px-4 py-2.5 rounded-xl bg-[#181310] text-[#D6A84F] text-xs font-semibold hover:bg-[#D6A84F] hover:text-[#181310] transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                    {promoApplied && (
                      <p className="text-[11px] text-[#556B2F] flex items-center gap-1">
                        <Check className="w-3 h-3" /> 15% Champagne Discount Applied!
                      </p>
                    )}
                    {promoError && (
                      <p className="text-[11px] text-[#7B3131]">{promoError}</p>
                    )}
                  </div>

                  {/* Calculations */}
                  <div className="space-y-2 text-xs text-[#6B5744] pt-2 border-t border-[#E6DFD5]">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold text-[#1A1612]">₹{subtotal}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-[#556B2F]">
                        <span>Discount (15%)</span>
                        <span>-₹{discountAmount}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>White-Glove Delivery</span>
                      <span className="font-semibold text-[#1A1612]">₹{deliveryFee}</span>
                    </div>
                    <div className="flex justify-between text-sm font-serif font-bold text-[#C59B27] pt-2 border-t border-[#E6DFD5]">
                      <span>Total</span>
                      <span>₹{finalTotal}</span>
                    </div>
                  </div>

                  {/* Checkout Action */}
                  <button
                    onClick={() => { playSound('celebrate'); onProceedCheckout(finalTotal, discountAmount); }}
                    className="w-full py-4 rounded-full bg-[#181310] text-[#D6A84F] font-semibold text-xs uppercase tracking-widest hover:bg-[#D6A84F] hover:text-[#181310] transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                </div>
              )}

            </motion.div>
          </div>

        </div>
      )}
    </AnimatePresence>
  );
}
