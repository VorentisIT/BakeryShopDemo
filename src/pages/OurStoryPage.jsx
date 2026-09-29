import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, ArrowLeft, Award, ShieldCheck, Sparkles, Heart, Clock, MapPin } from 'lucide-react';
import { playSound } from '../utils/sound';

import hdChefCraft from '../assets/hd_chef_craft.jpg';
import heroDeliceCake from '../assets/hero_delice_cake.jpg';

export default function OurStoryPage({ onNavigateHome, onOpenVideo, onExploreCakes }) {
  return (
    <div className="pt-24 pb-20 bg-[#FFF8EE] min-h-screen text-[#2B1A14]">
      
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 border-b border-[#E9D8C5]">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => { playSound('click'); onNavigateHome(); }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#78665C] hover:text-[#2B1A14] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <span className="text-xs text-[#C9823A] font-mono uppercase tracking-widest">
            Home / Our Story & Craft
          </span>
        </div>

        <span className="font-script text-3xl sm:text-4xl text-[#C9823A] block">
          More Than Just Cake ♡
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#2B1A14] mt-1">
          The Craft Behind <span className="italic text-[#C9823A]">Every Crumb</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#78665C] font-light mt-2 max-w-xl leading-relaxed">
          Founded on the uncompromising pursuit of French pâtisserie artistry, Délice was born from the belief that celebration desserts should not only be breathtaking, but also made with real, unadulterated ingredients.
        </p>
      </div>

      {/* Main Narrative with Video Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Chef Video Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden shadow-xl group border border-[#E9D8C5]">
              <img
                src={hdChefCraft}
                alt="Master Pastry Chef decorating cake"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

              {/* Video Play Button */}
              <button
                onClick={() => { playSound('click'); onOpenVideo(); }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/95 text-[#2B1A14] hover:bg-[#5A2E1F] hover:text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 cursor-pointer"
                title="Watch Documentary"
              >
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </button>

              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-[11px] font-mono">
                Inside the Atelier • 2:45 min
              </span>
            </div>
          </div>

          {/* Right: The Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9823A] block">
              OUR ATELIER PHILOSOPHY
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2B1A14] leading-snug">
              "We measure time not in minutes, but in layers."
            </h2>

            <p className="text-xs sm:text-sm text-[#78665C] font-light leading-relaxed">
              Every morning at 4:30 AM, our ovens preheat in silence. The butter is tempered to exactly 16°C. The flour is sifted by hand. We never use artificial essences, premixes, or vegetable shortenings. 
            </p>

            <p className="text-xs sm:text-sm text-[#78665C] font-light leading-relaxed">
              When you take a bite of our Grand Choco Noir or a flaky croissant, you are tasting 72 hours of dedication, French artisan techniques, and genuine passion.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#E9D8C5]">
                <Clock className="w-5 h-5 text-[#C9823A] mb-2" />
                <h4 className="font-serif text-base font-semibold">Slow Fermentation</h4>
                <p className="text-[11px] text-[#78665C] font-light mt-0.5">36-hour wild yeast fermentation for exceptional crumb depth.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E9D8C5]">
                <ShieldCheck className="w-5 h-5 text-[#C9823A] mb-2" />
                <h4 className="font-serif text-base font-semibold">100% Traceable</h4>
                <p className="text-[11px] text-[#78665C] font-light mt-0.5">Pure single-origin chocolate, Normandy AOP butter, and local cream.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => { playSound('click'); onExploreCakes(); }}
                className="px-7 py-3.5 rounded-full bg-[#5A2E1F] text-[#FFF8EE] hover:bg-[#3E1F16] transition-all text-xs font-medium uppercase tracking-wider inline-flex items-center justify-center shadow-md cursor-pointer active:scale-95"
              >
                <span>Explore Signature Cakes</span>
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
