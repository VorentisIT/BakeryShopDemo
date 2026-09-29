import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { playSound } from '../utils/sound';

import exactNewsCroissant from '../assets/hd_news_croissant.jpg';
import exactNewsMacarons from '../assets/hd_news_macarons.jpg';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    playSound('celebrate');
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <section className="py-12 sm:py-16 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FFF8EE]">
      
      {/* Wide Rounded Newsletter Container */}
      <div className="rounded-[32px] bg-[#F4E5D2] p-5 sm:p-6 lg:p-8 border border-[#E9D8C5] shadow-sm relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Left: Croissants (3 cols on tablet/desktop) */}
        <div className="hidden md:flex md:col-span-3 justify-center lg:justify-start">
          <div className="w-full max-w-[200px] aspect-[16/11] rounded-2xl overflow-hidden">
            <img
              src={exactNewsCroissant}
              alt="Fresh Butter Croissants"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Center: Copy & Form (6 cols on tablet/desktop, 12 on mobile) */}
        <div className="col-span-1 md:col-span-6 space-y-3 text-center lg:text-left">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2B1A14]">
              Stay in the Loop
            </h2>
            <p className="text-xs text-[#78665C] font-light mt-0.5">
              Get the latest updates, new flavours and exclusive offers.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto lg:mx-0">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-[#FFFFFF] p-1.5 sm:p-1 rounded-2xl sm:rounded-full border border-[#E9D8C5] shadow-xs gap-2 sm:gap-0">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-transparent px-4 py-2 text-xs text-[#2B1A14] placeholder-[#78665C] focus:outline-none"
              />
              <button
                type="submit"
                className={`px-6 py-2.5 rounded-full font-medium text-xs tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer shrink-0 active:scale-95 ${
                  subscribed 
                    ? 'bg-[#5E8060] text-white' 
                    : 'bg-[#5A2E1F] text-[#FFF8EE] hover:bg-[#3E1F16]'
                }`}
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Joined!</span>
                  </>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Right: Macarons with Good Things Ahead Stamp (3 cols on tablet/desktop) */}
        <div className="hidden md:flex md:col-span-3 justify-center lg:justify-end">
          <div className="w-full max-w-[180px] aspect-[16/11] rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src={exactNewsMacarons}
              alt="Macarons & Stamp"
              loading="lazy"
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>

    </section>
  );
}
