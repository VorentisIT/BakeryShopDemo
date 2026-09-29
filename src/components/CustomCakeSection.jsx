import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import { playSound } from '../utils/sound';
import exactCustomCake from '../assets/hd_custom_cake.jpg';

export default function CustomCakeSection({ onStartCustomizing }) {
  const steps = [
    { num: '1', title: 'Choose Flavour', icon: Layers },
    { num: '2', title: 'Add Details', icon: FileText },
    { num: '3', title: 'Review & Order', icon: CheckCircle2 },
  ];

  return (
    <section id="cake-builder" className="w-full bg-[#FFF8EE] pt-4 sm:pt-8 pb-16 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (4 cols): Heading & CTA with Framer Motion reveal */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-4 text-center lg:text-left"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9823A] block">
              MAKE IT YOURS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2B1A14] leading-tight">
              Custom Cake <br /> Builder
            </h2>
            <p className="text-xs sm:text-sm text-[#78665C] font-light max-w-sm mx-auto lg:mx-0 leading-relaxed">
              Design a cake as unique as your celebration with our interactive bespoke studio.
            </p>
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { playSound('click'); if (onStartCustomizing) onStartCustomizing(); }}
                className="px-7 py-3 rounded-full bg-[#5A2E1F] text-[#FFF8EE] hover:bg-[#3E1F16] transition-all font-medium text-xs tracking-wider flex items-center justify-center mx-auto lg:mx-0 shadow-md cursor-pointer"
              >
                <span>Start Customizing</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Center Column (4 cols): 3-Step Timeline with Interactive Spring Animations */}
          <div className="lg:col-span-4 flex items-center justify-center relative py-6 lg:py-0">
            
            {/* Connecting Dotted Line */}
            <div className="absolute top-1/2 left-8 right-8 h-0.5 border-t-2 border-dashed border-[#E9D8C5] -translate-y-4 z-0 hidden sm:block" />

            <div className="grid grid-cols-3 gap-3 w-full relative z-10 text-center">
              {steps.map((step, idx) => {
                const IconComp = step.icon;
                return (
                  <motion.div 
                    key={step.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.4 }}
                    whileHover={{ y: -6, scale: 1.05 }}
                    className="flex flex-col items-center space-y-2 cursor-pointer group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#F4E5D2] border border-[#E9D8C5] text-[#C9823A] group-hover:bg-[#5A2E1F] group-hover:text-white transition-all flex items-center justify-center shadow-xs">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-xs font-semibold text-[#C9823A]">
                      {step.num}
                    </span>
                    <h4 className="font-serif font-medium text-[#2B1A14] text-[11px] leading-tight">
                      {step.title}
                    </h4>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Right Column (4 cols): Interactive 3D Float Cake Stage */}
          <div className="lg:col-span-4 relative flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              onClick={() => {
                playSound('click');
                if (onStartCustomizing) onStartCustomizing();
              }}
              className="relative w-full max-w-xs aspect-square rounded-[28px] overflow-hidden shadow-xl border border-[#E9D8C5] cursor-pointer group transform-gpu"
              title="Click to Open Custom Cake Builder"
            >
              <img
                src={exactCustomCake}
                alt="Custom Celebration Cake"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Golden corner badge */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[#C9823A] flex items-center gap-1.5 text-[10px] font-mono">
                <Sparkles className="w-3 h-3 text-[#C9823A] animate-spin" />
                <span>Bespoke 3D</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
