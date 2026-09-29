import React from 'react';
import { motion } from 'framer-motion';
import { Wheat, Flame, Clock, Truck, Sparkles } from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    {
      num: '01',
      icon: Wheat,
      title: 'Farm Fresh Organic Flour',
      desc: 'Single-origin T55 & T65 French wheat flour milled in Normandy without artificial additives.'
    },
    {
      num: '02',
      icon: Clock,
      title: '48-Hour Cold Fermentation',
      desc: 'Dough rests for 48 hours at 4°C allowing natural wild yeast to build complex prebiotic flavors.'
    },
    {
      num: '03',
      icon: Flame,
      title: 'Stone Deck Steam Baking',
      desc: 'Baked at 240°C on natural granite deck plates with micro-steam bursts for a golden blistered crust.'
    },
    {
      num: '04',
      icon: Truck,
      title: 'Fresh Daily Express Service',
      desc: 'Hand-packed in insulated thermal luxury boxes and dispatched fresh to your doorstep.'
    }
  ];

  return (
    <section className="py-24 relative z-20 bg-white text-[#1A1612] border-t border-[#E6DFD5] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E6DFD5]">
            <Sparkles className="w-3 h-3 text-[#C59B27]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C59B27]">
              OUR BAKING PROCESS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1612]">
            How We Craft <span className="italic text-[#C59B27]">Perfection</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5744] font-light">
            Four meticulous steps that define our award-winning French pastry standards.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-[#FAF8F5] p-8 rounded-2xl border border-[#E6DFD5] hover:border-[#5A2E1F]/50 transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-bold text-[#5A2E1F]/40 group-hover:text-[#5A2E1F] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E6DFD5] flex items-center justify-center text-[#5A2E1F] group-hover:scale-110 transition-transform shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-normal text-[#1A1612] group-hover:text-[#5A2E1F] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#6B5744] font-light mt-3 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Gold Progress Line */}
                <div className="w-0 h-0.5 bg-[#C59B27] transition-all duration-500 group-hover:w-full mt-6" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
