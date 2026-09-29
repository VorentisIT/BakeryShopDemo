import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, CreditCard, Sparkles, MapPin, Truck } from 'lucide-react';
import { playSound } from '../utils/sound';
import CustomDropdown from './CustomDropdown';

export default function CheckoutModal({
  isOpen,
  onClose,
  cart,
  totalAmount,
  discountAmount,
  onClearCart
}) {
  const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Confirmation
  const [formData, setFormData] = useState({
    name: 'Eleanor Vance',
    email: 'eleanor@vance-atelier.com',
    phone: '+91 62397 96319',
    address: 'Boutique Residence, 4th Floor, Pali Hill, Bandra West, Mumbai 400050',
    cardNumber: '•••• •••• •••• 4242',
    exp: '12/28',
    cvc: '789'
  });
  const [deliveryMode, setDeliveryMode] = useState('delivery'); // delivery or pickup
  const [pickupSlot, setPickupSlot] = useState('05:00 PM - 07:00 PM (Evening Pastry Batch)');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handlePay = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    playSound('click');

    setTimeout(() => {
      setIsProcessing(false);
      setOrderId('DEL-' + Math.floor(100000 + Math.random() * 900000));
      setStep(3);
      playSound('celebrate');
      onClearCart();
    }, 1800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2B1A14]/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 border border-[#E9D8C5] shadow-2xl z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-[#78665C] hover:text-[#2B1A14] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          {step < 3 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 text-[10px] font-semibold text-[#C9823A] uppercase tracking-[0.25em]">
                <ShieldCheck className="w-4 h-4 text-[#C9823A]" />
                <span>Encrypted Atelier Checkout</span>
              </div>
              <h2 className="font-serif text-2xl font-normal text-[#2B1A14] mt-1">
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
                  className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                    deliveryMode === 'delivery'
                      ? 'border-[#5A2E1F] bg-[#F4E5D2] shadow-xs'
                      : 'border-[#E9D8C5] bg-white'
                  }`}
                >
                  <Truck className="w-5 h-5 text-[#5A2E1F]" />
                  <div>
                    <p className="font-serif text-[#2B1A14] text-xs font-semibold">White-Glove Delivery</p>
                    <p className="text-[10px] text-[#78665C]">₹50 • Temperature Controlled</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => { playSound('click'); setDeliveryMode('pickup'); }}
                  className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                    deliveryMode === 'pickup'
                      ? 'border-[#5A2E1F] bg-[#F4E5D2] shadow-xs'
                      : 'border-[#E9D8C5] bg-white'
                  }`}
                >
                  <MapPin className="w-5 h-5 text-[#5A2E1F]" />
                  <div>
                    <p className="font-serif text-[#2B1A14] text-xs font-semibold">In-Store Pickup</p>
                    <p className="text-[10px] text-[#78665C]">Free • Fresh from Oven</p>
                  </div>
                </button>
              </div>

              {/* Time Slot Picker */}
              <div>
                <label className="text-xs text-[#78665C] font-medium block mb-1">
                  Select Delivery Time Slot:
                </label>
                <CustomDropdown
                  value={pickupSlot}
                  onChange={setPickupSlot}
                  options={[
                    '09:00 AM - 11:00 AM (Morning Bake)',
                    '01:00 PM - 03:00 PM (Midday Fresh Batch)',
                    '05:00 PM - 07:00 PM (Evening Pastry Batch)'
                  ]}
                  icon={Truck}
                  buttonClassName="py-3 bg-[#FFF8EE]"
                />
              </div>

              {/* Form Inputs */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#78665C] block mb-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FFF8EE] text-[#2B1A14] text-xs p-3 rounded-xl border border-[#E9D8C5] focus:outline-none focus:border-[#5A2E1F]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#78665C] block mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FFF8EE] text-[#2B1A14] text-xs p-3 rounded-xl border border-[#E9D8C5] focus:outline-none focus:border-[#5A2E1F]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-[#78665C] block mb-1">Phone</label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FFF8EE] text-[#2B1A14] text-xs p-3 rounded-xl border border-[#E9D8C5] focus:outline-none focus:border-[#5A2E1F]"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#78665C] block mb-1">Delivery Address</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-[#FFF8EE] text-[#2B1A14] text-xs p-3 rounded-xl border border-[#E9D8C5] focus:outline-none focus:border-[#5A2E1F]"
                  />
                </div>
              </div>

              <button
                onClick={() => { playSound('click'); setStep(2); }}
                className="w-full py-3.5 rounded-full bg-[#5A2E1F] text-[#FFF8EE] font-semibold text-xs uppercase tracking-widest hover:bg-[#3E1F16] transition-all shadow-md mt-4 cursor-pointer active:scale-95"
              >
                Continue to Payment • ₹{totalAmount}
              </button>

            </div>
          )}

          {/* STEP 2: Card Payment Simulation */}
          {step === 2 && (
            <form onSubmit={handlePay} className="space-y-4">
              
              <div className="p-4 rounded-xl bg-[#F4E5D2] border border-[#E9D8C5] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#78665C] block">Total Amount</span>
                  <span className="font-serif font-bold text-[#5A2E1F] text-xl">₹{totalAmount}</span>
                </div>
                <CreditCard className="w-6 h-6 text-[#5A2E1F]" />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest text-[#78665C] block mb-1">Card Number</label>
                <input
                  type="text"
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                  className="w-full bg-[#FFF8EE] text-[#2B1A14] text-xs p-3 rounded-xl border border-[#E9D8C5] font-mono focus:outline-none focus:border-[#5A2E1F]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#78665C] block mb-1">Expiration</label>
                  <input
                    type="text"
                    value={formData.exp}
                    onChange={(e) => setFormData({ ...formData, exp: e.target.value })}
                    className="w-full bg-[#FFF8EE] text-[#2B1A14] text-xs p-3 rounded-xl border border-[#E9D8C5] font-mono focus:outline-none focus:border-[#5A2E1F]"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-[#78665C] block mb-1">CVC Code</label>
                  <input
                    type="text"
                    value={formData.cvc}
                    onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                    className="w-full bg-[#FFF8EE] text-[#2B1A14] text-xs p-3 rounded-xl border border-[#E9D8C5] font-mono focus:outline-none focus:border-[#5A2E1F]"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-full bg-white text-[#78665C] text-xs font-semibold uppercase tracking-widest border border-[#E9D8C5] hover:border-[#5A2E1F] cursor-pointer"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="flex-1 py-3.5 rounded-full bg-[#5A2E1F] text-[#FFF8EE] font-semibold text-xs uppercase tracking-widest hover:bg-[#3E1F16] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2 animate-pulse">
                      <Sparkles className="w-4 h-4 text-[#C9823A]" /> Authorizing Payment...
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
              
              <div className="w-16 h-16 rounded-full bg-[#5E8060]/10 border border-[#5E8060] text-[#5E8060] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] font-semibold text-[#C9823A] uppercase tracking-[0.3em] block">
                  ORDER CONFIRMED • {orderId}
                </span>
                <h2 className="font-serif text-2xl font-normal text-[#2B1A14] mt-1">
                  Your masterpiece is being prepared.
                </h2>
                <p className="text-xs text-[#78665C] mt-1">
                  Merci, {formData.name}! Our Atelier Master Chefs have received your order.
                </p>
              </div>

              {/* Receipt Summary */}
              <div className="p-4 rounded-xl bg-[#F4E5D2] border border-[#E9D8C5] text-left text-xs space-y-2">
                <div className="flex justify-between text-[#78665C]">
                  <span>Estimated Delivery Time:</span>
                  <span className="font-semibold text-[#2B1A14]">{pickupSlot}</span>
                </div>
                <div className="flex justify-between text-[#78665C]">
                  <span>Fulfillment Method:</span>
                  <span className="font-semibold text-[#2B1A14] capitalize">{deliveryMode}</span>
                </div>
                <div className="flex justify-between text-[#78665C] pt-2 border-t border-[#E9D8C5]">
                  <span>Total Paid:</span>
                  <span className="font-serif font-bold text-[#5A2E1F]">₹{totalAmount}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-full bg-[#5A2E1F] text-[#FFF8EE] font-semibold text-xs uppercase tracking-widest hover:bg-[#3E1F16] cursor-pointer"
              >
                Return to Délice Bakery
              </button>

            </div>
          )}

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
