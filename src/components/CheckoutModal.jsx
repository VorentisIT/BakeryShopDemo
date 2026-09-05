import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, ShieldCheck, CheckCircle2, MapPin, Truck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSound } from '../utils/sound';

export default function CheckoutModal({ isOpen, onClose, cart, totalAmount, discountAmount, onClearCart }) {
  const [step, setStep] = useState(1); // 1: Delivery & Schedule, 2: Payment, 3: Confirmation
  const [deliveryMode, setDeliveryMode] = useState('delivery');
  const [pickupSlot, setPickupSlot] = useState('09:00 AM - 10:00 AM');
  const [formData, setFormData] = useState({
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    phone: '+91 98765 43210',
    address: '14 Marine Drive, Suite 8B, Mumbai',
    notes: 'Please add a gold ribbon bow on the cake box.',
    cardNumber: '4242 •••• •••• 4242',
    exp: '12/28',
    cvc: '888'
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handlePay = (e) => {
    e.preventDefault();
    playSound('click');
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const generatedId = `LE-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedId);
      setStep(3);
      playSound('celebrate');

      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#C59B27', '#D6A84F', '#FAF8F5', '#1A1612']
        });
      } catch (err) {}

      onClearCart();
    }, 1800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1612]/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 border border-[#E6DFD5] shadow-2xl z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-[#6B5744] hover:text-[#1A1612]"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          {step < 3 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 text-[10px] font-semibold text-[#C59B27] uppercase tracking-[0.25em]">
                <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
                <span>Encrypted Gold Checkout</span>
              </div>
              <h2 className="font-serif text-2xl font-normal text-[#1A1612] mt-1">
                {step === 1 ? 'Delivery & Schedule' : 'Payment Details'}
              </h2>
            </div>
          )}

          {/* STEP 1: Delivery & Details */}
          {step === 1 && (
            <div className="space-y-4">
              
              {/* Pickup / Courier Selector */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => { playSound('click'); setDeliveryMode('delivery'); }}
                  className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    deliveryMode === 'delivery'
                      ? 'border-[#C59B27] bg-[#FAF8F5] shadow-sm'
                      : 'border-[#E6DFD5] bg-white'
                  }`}
                >
                  <Truck className="w-5 h-5 text-[#C59B27]" />
                  <div>
                    <p className="font-serif text-[#1A1612] text-xs">White-Glove Delivery</p>
                    <p className="text-[10px] text-[#6B5744]">₹50 • Temperature Controlled</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => { playSound('click'); setDeliveryMode('pickup'); }}
                  className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    deliveryMode === 'pickup'
                      ? 'border-[#C59B27] bg-[#FAF8F5] shadow-sm'
                      : 'border-[#E6DFD5] bg-white'
                  }`}
                >
                  <MapPin className="w-5 h-5 text-[#C59B27]" />
                  <div>
                    <p className="font-serif text-[#1A1612] text-xs">In-Store Pickup</p>
                    <p className="text-[10px] text-[#6B5744]">Free • Fresh from Oven</p>
                  </div>
                </button>
              </div>

              {/* Time Slot Picker */}
              <div>
                <label className="text-xs text-[#6B5744] font-medium block mb-1">
                  Select Delivery Time Slot:
                </label>
                <select
                  value={pickupSlot}
                  onChange={(e) => setPickupSlot(e.target.value)}
                  className="w-full bg-[#FAF8F5] text-[#1A1612] text-xs p-3 rounded-xl border border-[#E6DFD5] focus:outline-none"
                >
                  <option>09:00 AM - 11:00 AM (Morning Bake)</option>
                  <option>01:00 PM - 03:00 PM (Midday Fresh Batch)</option>
                  <option>05:00 PM - 07:00 PM (Evening Pastry Batch)</option>
                </select>
              </div>

              {/* Form Inputs */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#6B5744] block mb-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF8F5] text-[#1A1612] text-xs p-3 rounded-xl border border-[#E6DFD5]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#6B5744] block mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF8F5] text-[#1A1612] text-xs p-3 rounded-xl border border-[#E6DFD5]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#6B5744] block mb-1">Phone</label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF8F5] text-[#1A1612] text-xs p-3 rounded-xl border border-[#E6DFD5]"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#6B5744] block mb-1">Delivery Address</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-[#FAF8F5] text-[#1A1612] text-xs p-3 rounded-xl border border-[#E6DFD5]"
                  />
                </div>
              </div>

              <button
                onClick={() => { playSound('click'); setStep(2); }}
                className="w-full py-3.5 rounded-full bg-[#181310] text-[#D6A84F] font-semibold text-xs uppercase tracking-widest hover:bg-[#D6A84F] hover:text-[#181310] transition-all shadow-md mt-4"
              >
                Continue to Payment • ₹{totalAmount}
              </button>

            </div>
          )}

          {/* STEP 2: Card Payment Simulation */}
          {step === 2 && (
            <form onSubmit={handlePay} className="space-y-4">
              
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#6B5744] block">Total Amount</span>
                  <span className="font-serif font-bold text-[#C59B27] text-xl">₹{totalAmount}</span>
                </div>
                <CreditCard className="w-6 h-6 text-[#C59B27]" />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-[#6B5744] block mb-1">Card Number</label>
                <input
                  type="text"
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                  className="w-full bg-[#FAF8F5] text-[#1A1612] text-xs p-3 rounded-xl border border-[#E6DFD5] font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#6B5744] block mb-1">Expiration</label>
                  <input
                    type="text"
                    value={formData.exp}
                    onChange={(e) => setFormData({ ...formData, exp: e.target.value })}
                    className="w-full bg-[#FAF8F5] text-[#1A1612] text-xs p-3 rounded-xl border border-[#E6DFD5] font-mono"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#6B5744] block mb-1">CVC Code</label>
                  <input
                    type="text"
                    value={formData.cvc}
                    onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                    className="w-full bg-[#FAF8F5] text-[#1A1612] text-xs p-3 rounded-xl border border-[#E6DFD5] font-mono"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-full bg-[#FAF8F5] text-[#6B5744] text-xs font-semibold uppercase tracking-widest border border-[#E6DFD5]"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="flex-1 py-3.5 rounded-full bg-[#181310] text-[#D6A84F] font-semibold text-xs uppercase tracking-widest hover:bg-[#D6A84F] hover:text-[#181310] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2 animate-pulse">
                      <Sparkles className="w-4 h-4" /> Authorizing Payment...
                    </span>
                  ) : (
                    <span>Pay ₹{totalAmount} Now</span>
                  )}
                </button>
              </div>

            </form>
          )}

          {/* STEP 3: Order Confirmation */}
          {step === 3 && (
            <div className="text-center space-y-5 py-4">
              
              <div className="w-16 h-16 rounded-full bg-[#556B2F]/10 border border-[#556B2F] text-[#556B2F] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] font-semibold text-[#C59B27] uppercase tracking-[0.3em] block">
                  ORDER CONFIRMED • {orderId}
                </span>
                <h2 className="font-serif text-2xl font-normal text-[#1A1612] mt-1">
                  Your masterpiece is being prepared.
                </h2>
                <p className="text-xs text-[#6B5744] mt-1">
                  Merci, {formData.name}! Master Chef Geneviève Moreau has received your order.
                </p>
              </div>

              {/* Receipt Summary */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] text-left text-xs space-y-2">
                <div className="flex justify-between text-[#6B5744]">
                  <span>Estimated Delivery Time:</span>
                  <span className="font-semibold text-[#1A1612]">{pickupSlot}</span>
                </div>
                <div className="flex justify-between text-[#6B5744]">
                  <span>Fulfillment Method:</span>
                  <span className="font-semibold text-[#1A1612] capitalize">{deliveryMode}</span>
                </div>
                <div className="flex justify-between text-[#6B5744] pt-2 border-t border-[#E6DFD5]">
                  <span>Total Paid:</span>
                  <span className="font-serif font-bold text-[#C59B27]">₹{totalAmount}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-full bg-[#181310] text-[#D6A84F] font-semibold text-xs uppercase tracking-widest hover:bg-[#D6A84F] hover:text-[#181310]"
              >
                Return to L’ÉTOILE PATISSERIE
              </button>

            </div>
          )}

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
