import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { playSound } from '../utils/sound';
import exactChefCraft from '../assets/hd_chef_craft.jpg';

export default function OurStory({ onOpenVideo, onExploreStory }) {
  return (
    <section id="story" className="py-16 sm:py-20 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Exact Pastry Chef Video Thumbnail matching reference */}
        <div className="lg:col-span-6 relative flex justify-center">
          <div 
            onClick={() => {
              playSound('click');
              if (onOpenVideo) onOpenVideo();
            }}
            className="relative w-full max-w-lg aspect-[16/10] rounded-3xl overflow-hidden shadow-md group cursor-pointer"
          >
            
            <img
              src={exactChefCraft}
              alt="Pastry Chef decorating cake"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Play Button Overlay */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                playSound('click');
                if (onOpenVideo) onOpenVideo();
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/95 text-[#181310] hover:bg-[#C59B27] hover:text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 cursor-pointer active:scale-95"
              title="Watch Chef Documentary"
            >
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </button>

          </div>
        </div>

        {/* Right Column: Copy & Features matching reference */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left relative">
          
          {/* Cursive Accent */}
          <div className="absolute -top-8 right-4 font-script text-3xl text-[#C59B27] transform rotate-[-3deg] pointer-events-none select-none">
            More Than Just Cake ♡
          </div>

          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C59B27] block">
              OUR STORY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1612] mt-1 leading-tight">
              The Craft Behind <br />
              <span className="italic text-[#C59B27] font-serif">Every Crumb</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#6B5744] font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
            A passion for baking, a love for fine ingredients, and a belief that every moment deserves something sweet.
          </p>

          <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <button
              onClick={() => {
                playSound('click');
                if (onOpenVideo) onOpenVideo();
              }}
              className="px-7 py-3 rounded-full bg-[#181310] text-[#FAF8F5] hover:bg-[#C59B27] transition-all font-medium text-xs tracking-wider inline-flex items-center gap-3 shadow-md cursor-pointer group active:scale-95"
            >
              <span>Watch Our Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            {onExploreStory && (
              <button
                onClick={() => {
                  playSound('click');
                  onExploreStory();
                }}
                className="px-6 py-3 rounded-full bg-white text-[#181310] border border-[#E6DFD5] hover:border-[#181310] transition-all font-medium text-xs tracking-wider inline-flex items-center gap-2 shadow-xs cursor-pointer active:scale-95"
              >
                <span>Read Full Story</span>
              </button>
            )}
          </div>

          {/* 3 Indicators matching reference */}
          <div className="pt-6 border-t border-[#E6DFD5] grid grid-cols-3 gap-4 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start gap-1">
              <Award className="w-4 h-4 text-[#C59B27]" />
              <span className="text-[11px] text-[#1A1612] font-medium">Artisan Techniques</span>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-1">
              <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
              <span className="text-[11px] text-[#1A1612] font-medium">Premium Ingredients</span>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-1">
              <Sparkles className="w-4 h-4 text-[#C59B27]" />
              <span className="text-[11px] text-[#1A1612] font-medium">Baked Fresh Daily</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
