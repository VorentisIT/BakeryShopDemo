import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Cookie, Palette, Heart, Check, ShoppingBag } from 'lucide-react';
import { playSound } from '../utils/sound';

import TransparentImg from './TransparentImg';

export default function CakeBuilder({ onAddToCart }) {
  const [activeStep, setActiveStep] = useState(1);
  const [added, setAdded] = useState(false);

  // Configuration state
  const [tiers, setTiers] = useState({ id: 3, label: '3 Tiers (35 Slices)', price: 1500 });
  const [sponge, setSponge] = useState({ id: 'chocolate', label: 'Belgian Chocolate', color: '#2A1810', price: 0 });
  const [filling, setFilling] = useState({ id: 'ganache', label: 'Dark Chocolate Ganache', color: '#1A0E08', price: 0 });
  const [topping, setTopping] = useState({ id: 'gold-drips', label: '24K Gold Drips & Berries', price: 300 });
  const [inscription, setInscription] = useState('Happy Birthday Sarah!');

  const tierOptions = [
    { id: 1, label: '1 Tier (10 Slices)', price: 650 },
    { id: 2, label: '2 Tiers (20 Slices)', price: 1100 },
    { id: 3, label: '3 Tiers (35 Slices)', price: 1500 },
    { id: 4, label: '4 Grand Tiers (60 Slices)', price: 2200 },
  ];

  const spongeOptions = [
    { id: 'vanilla', label: 'Organic Vanilla', color: '#FAF0D7', price: 0 },
    { id: 'chocolate', label: 'Belgian Chocolate', color: '#2A1810', price: 0 },
    { id: 'redvelvet', label: 'Red Velvet', color: '#7E191B', price: 100 },
    { id: 'pistachio', label: 'Pistachio', color: '#8C9A70', price: 150 },
  ];

  const fillingOptions = [
    { id: 'vanillacream', label: 'Vanilla Cream', color: '#F5EBDD', price: 0 },
    { id: 'ganache', label: 'Dark Chocolate Ganache', color: '#1A0E08', price: 0 },
    { id: 'raspberry', label: 'Raspberry Compote', color: '#7B3131', price: 80 },
    { id: 'caramel', label: 'Salted Caramel', color: '#D6A84F', price: 80 },
    { id: 'praline', label: 'Pistachio Praline', color: '#5A3826', price: 120 },
  ];

  const toppingOptions = [
    { id: 'berries', label: 'Fresh Berries', price: 150, icon: '🫐' },
    { id: 'nuts', label: 'Roasted Nuts Cluster', price: 180, icon: '🌰' },
    { id: 'shards', label: 'Chocolate Shards', price: 120, icon: '🍫' },
    { id: 'flowers', label: 'Edible Flowers', price: 200, icon: '🌸' },
    { id: 'gold-drips', label: '24K Gold Drips & Berries', price: 300, icon: '✨' },
  ];

  const totalPrice = tiers.price + sponge.price + filling.price + topping.price;

  const handleStepChange = (step) => {
    playSound('click');
    setActiveStep(step);
  };

  const handleAddCustomCake = () => {
    playSound('cart');
    const customCakeItem = {
      id: `custom-cake-${Date.now()}`,
      name: `Custom ${tiers.label} Cake`,
      category: 'cakes',
      price: totalPrice,
      rating: 5.0,
      reviewsCount: 1,
      image: '/images/custom_cake.jpg',
      description: `Bespoke build: ${sponge.label} sponge, ${filling.label} filling, ${topping.label}. Inscription: "${inscription}"`,
      dietary: ['Custom Order', 'Organic'],
      ingredients: [sponge.label, filling.label, topping.label],
      allergens: ['Wheat', 'Milk', 'Eggs'],
      calories: '390 kcal / slice',
      prepTime: 'Custom Handcrafted 24h'
    };

    onAddToCart(customCakeItem, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div id="cake-builder" className="w-full">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-1 mb-6">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#C59B27] block">
          INTERACTIVE CONFIGURATOR
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1612]">
          Custom Cake <span className="italic text-[#C59B27]">Builder</span>
        </h2>
        <p className="text-xs text-[#6B5744] font-light">
          Your story. Your cake.
        </p>
      </div>

        {/* Steps Navigation Bar */}
        <div className="mt-8 flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-2">
          {[
            { num: 1, label: '01 Tiers', icon: Layers },
            { num: 2, label: '02 Sponge', icon: Cookie },
            { num: 3, label: '03 Filling', icon: Palette },
            { num: 4, label: '04 Toppings', icon: Heart },
            { num: 5, label: '05 Message', icon: Sparkles },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.num}
                onClick={() => handleStepChange(s.num)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeStep === s.num
                    ? 'bg-[#181310] text-[#D6A84F] font-bold shadow-md'
                    : 'bg-white text-[#6B5744] border border-[#E6DFD5] hover:border-[#1A1612]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Configurator Steps */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Tiers */}
            {activeStep === 1 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <h3 className="text-xs font-semibold text-[#C59B27] uppercase tracking-widest">Step 01: Choose Tiers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tierOptions.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => { playSound('click'); setTiers(t); }}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                        tiers.id === t.id
                          ? 'border-[#C59B27] bg-white shadow-md'
                          : 'border-[#E6DFD5] bg-white hover:border-[#C59B27]/40'
                      }`}
                    >
                      <p className="font-serif text-[#1A1612] text-sm">{t.label}</p>
                      <p className="text-[#C59B27] font-bold text-xs mt-1">₹{t.price}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Sponge */}
            {activeStep === 2 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <h3 className="text-xs font-semibold text-[#C59B27] uppercase tracking-widest">Step 02: Choose Sponge</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {spongeOptions.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => { playSound('click'); setSponge(s); }}
                      className={`p-4 rounded-xl flex items-center justify-between border transition-all cursor-pointer ${
                        sponge.id === s.id
                          ? 'border-[#C59B27] bg-white shadow-md'
                          : 'border-[#E6DFD5] bg-white hover:border-[#C59B27]/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border border-[#E6DFD5]" style={{ backgroundColor: s.color }} />
                        <span className="font-serif text-[#1A1612] text-sm">{s.label}</span>
                      </div>
                      <span className="text-xs text-[#C59B27] font-bold">{s.price > 0 ? `+₹${s.price}` : 'Included'}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Filling */}
            {activeStep === 3 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <h3 className="text-xs font-semibold text-[#C59B27] uppercase tracking-widest">Step 03: Choose Filling</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {fillingOptions.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => { playSound('click'); setFilling(f); }}
                      className={`p-4 rounded-xl flex items-center justify-between border transition-all cursor-pointer ${
                        filling.id === f.id
                          ? 'border-[#C59B27] bg-white shadow-md'
                          : 'border-[#E6DFD5] bg-white hover:border-[#C59B27]/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border border-[#E6DFD5]" style={{ backgroundColor: f.color }} />
                        <span className="font-serif text-[#1A1612] text-sm">{f.label}</span>
                      </div>
                      <span className="text-xs text-[#C59B27] font-bold">{f.price > 0 ? `+₹${f.price}` : 'Included'}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Topping */}
            {activeStep === 4 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <h3 className="text-xs font-semibold text-[#C59B27] uppercase tracking-widest">Step 04: Choose Toppings</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {toppingOptions.map((top) => (
                    <button
                      key={top.id}
                      onClick={() => { playSound('click'); setTopping(top); }}
                      className={`p-4 rounded-xl flex items-center justify-between border transition-all cursor-pointer ${
                        topping.id === top.id
                          ? 'border-[#C59B27] bg-white shadow-md'
                          : 'border-[#E6DFD5] bg-white hover:border-[#C59B27]/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{top.icon}</span>
                        <span className="font-serif text-[#1A1612] text-sm">{top.label}</span>
                      </div>
                      <span className="text-xs text-[#C59B27] font-bold">{top.price > 0 ? `+₹${top.price}` : 'Included'}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 5: Inscription */}
            {activeStep === 5 && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                <h3 className="text-xs font-semibold text-[#C59B27] uppercase tracking-widest">Step 05: Add Message</h3>
                <div>
                  <label className="text-xs text-[#6B5744] block mb-2 font-medium">Custom Sugar Ribbon Inscription:</label>
                  <input
                    type="text"
                    maxLength={30}
                    value={inscription}
                    onChange={(e) => setInscription(e.target.value)}
                    placeholder="e.g. Happy Birthday Sarah!"
                    className="w-full bg-white text-[#1A1612] text-xs p-3.5 rounded-xl border border-[#E6DFD5] focus:outline-none focus:border-[#C59B27]"
                  />
                  <p className="text-[10px] text-[#6B5744]/70 mt-1">Hand-piped in golden cocoa butter script on edible fondant ribbon.</p>
                </div>
              </motion.div>
            )}

          </div>

          {/* Right Column: Persistent Creation Summary Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 border border-[#E6DFD5] flex flex-col justify-between space-y-6 shadow-sm">
              
              <div>
                <span className="text-[9px] text-[#C59B27] uppercase tracking-[0.25em] font-semibold block">
                  YOUR CREATION
                </span>
                <h4 className="font-serif text-xl text-[#1A1612] mt-1">
                  {tiers.label}
                </h4>

                <div className="mt-4 space-y-2 text-xs text-[#6B5744] pt-4 border-t border-[#E6DFD5]">
                  <div className="flex justify-between"><span>Sponge:</span> <span className="text-[#1A1612] font-semibold">{sponge.label}</span></div>
                  <div className="flex justify-between"><span>Filling:</span> <span className="text-[#1A1612] font-semibold">{filling.label}</span></div>
                  <div className="flex justify-between"><span>Topping:</span> <span className="text-[#1A1612] font-semibold">{topping.label}</span></div>
                  {inscription.trim() && (
                    <div className="flex justify-between"><span>Message:</span> <span className="text-[#C59B27] font-serif italic">"{inscription}"</span></div>
                  )}
                </div>
              </div>

              {/* Live Preview graphic */}
              <div className="w-full h-36 bg-[#FAF8F5] rounded-xl border border-[#E6DFD5] flex items-center justify-center relative p-3 overflow-hidden">
                <TransparentImg
                  src="/images/cake_holes.jpg"
                  alt="Custom Cake Live Preview"
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)]"
                />
                {inscription.trim() && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#181310] text-[#D6A84F] font-serif text-[9px] font-bold truncate max-w-[180px] shadow-md">
                    "{inscription}"
                  </div>
                )}
              </div>

              {/* Total & Add CTA */}
              <div className="pt-4 border-t border-[#E6DFD5] space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-[#6B5744] font-semibold">Total</span>
                  <span className="font-serif text-2xl font-bold text-[#1A1612]">₹{totalPrice}</span>
                </div>

                <button
                  onClick={handleAddCustomCake}
                  className={`w-full py-3.5 rounded-full font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    added ? 'bg-[#556B2F] text-white' : 'bg-[#181310] text-[#D6A84F] hover:bg-[#D6A84F] hover:text-[#181310]'
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
                      <span>Add Creation to Cart →</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
  );
}
