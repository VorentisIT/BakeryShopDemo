import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, X, Crown, Package, MapPin, Heart, ArrowRight, Check } from 'lucide-react';
import { playSound } from '../utils/sound';

export default function AccountModal({ isOpen, onClose }) {
  const [tab, setTab] = useState('orders');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E9D8C5] relative overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#FFF8EE] text-[#78665C] hover:text-[#2B1A14] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* User Profile Header */}
          <div className="flex items-center gap-4 pb-6 border-b border-[#E9D8C5]">
            <div className="w-14 h-14 rounded-full bg-[#5A2E1F] text-[#FFF8EE] flex items-center justify-center font-serif text-xl font-bold shadow-md">
              AS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg font-semibold text-[#2B1A14]">Aditi Sharma</h3>
                <span className="px-2 py-0.5 rounded-full bg-[#F4E5D2] text-[#5A2E1F] text-[10px] font-semibold uppercase flex items-center gap-1">
                  <Crown className="w-3 h-3 text-[#C9823A]" /> VIP Baker
                </span>
              </div>
              <p className="text-xs text-[#78665C] font-light">aditi.sharma@example.com • Member since 2024</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 py-4 border-b border-[#E9D8C5] text-xs">
            {[
              { id: 'orders', label: 'My Orders', icon: Package },
              { id: 'rewards', label: 'VIP Rewards', icon: Crown },
              { id: 'addresses', label: 'Addresses', icon: MapPin },
            ].map(t => {
              const IconComp = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => { playSound('click'); setTab(t.id); }}
                  className={`px-3 py-1.5 rounded-xl font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                    tab === t.id
                      ? 'bg-[#5A2E1F] text-[#FFF8EE]'
                      : 'bg-[#FFF8EE] text-[#78665C] hover:bg-[#F4E5D2]'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="py-4 min-h-[180px]">
            {tab === 'orders' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#FFF8EE] border border-[#E9D8C5] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#5A2E1F] uppercase font-bold">Delivered • Order #DLC-8492</span>
                    <h4 className="font-serif text-sm font-semibold text-[#2B1A14]">Grand Choco Noir Walnut Cake</h4>
                    <span className="text-xs text-[#78665C]">Yesterday at 3:15 PM • ₹ 899</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#5E8060]/15 text-[#5E8060] text-[10px] font-semibold">
                    Completed
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FFF8EE] border border-[#E9D8C5] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#5A2E1F] uppercase font-bold">Delivered • Order #DLC-7210</span>
                    <h4 className="font-serif text-sm font-semibold text-[#2B1A14]">Normandy Butter Croissants (Set of 2)</h4>
                    <span className="text-xs text-[#78665C]">Aug 28, 2026 • ₹ 260</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#5E8060]/15 text-[#5E8060] text-[10px] font-semibold">
                    Completed
                  </span>
                </div>
              </div>
            )}

            {tab === 'rewards' && (
              <div className="p-5 rounded-2xl bg-[#2B1A14] text-white text-center space-y-3">
                <Crown className="w-8 h-8 text-[#C9823A] mx-auto" />
                <h4 className="font-serif text-lg font-semibold">450 Patisserie Points</h4>
                <p className="text-xs text-[#F4E5D2] font-light max-w-xs mx-auto">
                  You are only 50 points away from unlocking a complimentary French Macaron gift box on your next order!
                </p>
                <div className="w-full bg-[#5A2E1F] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#C9823A] h-full w-[85%]" />
                </div>
              </div>
            )}

            {tab === 'addresses' && (
              <div className="space-y-2">
                <div className="p-3.5 rounded-2xl bg-[#FFF8EE] border border-[#E9D8C5] flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-[#2B1A14]">Home</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#5A2E1F] text-white text-[9px]">Default</span>
                    </div>
                    <p className="text-xs text-[#78665C] font-light mt-0.5">Flat 402, Sea Green Apts, Bandra West, Mumbai</p>
                  </div>
                  <Check className="w-4 h-4 text-[#5A2E1F]" />
                </div>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-[#E9D8C5] flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#5A2E1F] text-[#FFF8EE] text-xs font-semibold hover:bg-[#3E1F16] transition-all cursor-pointer"
            >
              Done
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
