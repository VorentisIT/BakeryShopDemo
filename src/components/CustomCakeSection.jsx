import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, FileText, CheckCircle2 } from 'lucide-react';
import { playSound } from '../utils/sound';
import exactCustomCake from '../assets/hd_custom_cake.jpg';

export default function CustomCakeSection({ onStartCustomizing }) {
  const steps = [
    { num: '1', title: 'Choose Flavour', icon: Layers },
    { num: '2', title: 'Add Details', icon: FileText },
    { num: '3', title: 'Review & Order', icon: CheckCircle2 },
  ];

  return (
    <section id="cake-builder" className="w-full bg-[#FAF8F5] pt-4 sm:pt-8 pb-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (4 cols): Heading & CTA */}
          <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C59B27] block">
              MAKE IT YOURS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1612] leading-tight">
              Custom Cake <br /> Builder
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5744] font-light max-w-sm mx-auto lg:mx-0 leading-relaxed">
              Design a cake as unique as your celebration.
            </p>
            <div className="pt-2">
              <button
                onClick={() => { playSound('click'); if (onStartCustomizing) onStartCustomizing(); }}
                className="px-7 py-3 rounded-full bg-[#181310] text-[#FAF8F5] hover:bg-[#C59B27] transition-all font-medium text-xs tracking-wider flex items-center justify-center lg:justify-start gap-3 mx-auto lg:mx-0 shadow-md cursor-pointer group"
              >
                <span>Start Customizing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Center Column (4 cols): 3-Step Timeline with Dotted Line Connector */}
          <div className="lg:col-span-4 flex items-center justify-center relative py-6 lg:py-0">
            
            {/* Connecting Dotted Line */}
            <div className="absolute top-1/2 left-8 right-8 h-0.5 border-t-2 border-dashed border-[#D5C9BC] -translate-y-4 z-0 hidden sm:block" />

            <div className="grid grid-cols-3 gap-3 w-full relative z-10 text-center">
              {steps.map((step) => {
                const IconComp = step.icon;
                return (
                  <div key={step.num} className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-[#FAF5EE] border border-[#E0D5C7] text-[#8C6D23] flex items-center justify-center shadow-xs">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-xs font-semibold text-[#8C6D23]">
                      {step.num}
                    </span>
                    <h4 className="font-serif font-medium text-[#1A1612] text-[11px] leading-tight">
                      {step.title}
                    </h4>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column (4 cols): Exact Reference Custom Cake with Plaque */}
          <div className="lg:col-span-4 relative flex items-center justify-center">
            <div 
              onClick={() => {
                playSound('click');
                if (onStartCustomizing) onStartCustomizing();
              }}
              className="relative w-full max-w-xs aspect-square rounded-[28px] overflow-hidden shadow-xl border border-[#E6DFD5] cursor-pointer group"
              title="Click to Open Custom Cake Builder"
            >
              <img
                src={exactCustomCake}
                alt="Custom Celebration Cake"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
