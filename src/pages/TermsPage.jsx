import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, AlertTriangle, RefreshCw } from 'lucide-react';
import { playSound } from '../utils/sound';

export default function TermsPage({ onNavigateHome }) {
  const terms = [
    {
      icon: Clock,
      title: 'Orders & Custom Lead Times',
      text: 'Standard cakes and pastries are baked fresh daily. Custom multi-tier celebration cakes require 24 to 48 hours advance notice for handcrafting.'
    },
    {
      icon: RefreshCw,
      title: 'Perishable Goods & Cancellations',
      text: 'Because our desserts are freshly baked with no artificial preservatives, orders can be modified or cancelled up to 12 hours before scheduled delivery or pickup.'
    },
    {
      icon: Clock,
      title: 'Fresh Delivery & Pickup',
      text: 'All orders are transported in temperature-controlled refrigerated couriers. Please ensure someone is available at the delivery location to receive fresh pastries.'
    },
    {
      icon: AlertTriangle,
      title: 'Allergen Notice',
      text: 'Our bakery uses wheat, milk, eggs, and nuts (pistachios, almonds, walnuts). While we maintain strict kitchen hygiene, items are prepared in a facility handling these ingredients.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure Payments & Pricing',
      text: 'All prices are in INR (₹) and include applicable taxes. We accept all major cards, UPI, and digital wallets through secure encrypted gateways.'
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#FAF8F5] min-h-screen text-[#1A1612]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 text-center sm:text-left">
          <button
            onClick={() => { playSound('click'); onNavigateHome(); }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6B5744] hover:text-[#1A1612] transition-colors cursor-pointer bg-white px-4 py-2 rounded-full border border-[#E6DFD5] shadow-xs active:scale-95 mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <span className="font-script text-3xl sm:text-4xl text-[#C59B27] block">
            Simple & Transparent
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#1A1612] mt-1">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-[#6B5744] font-light mt-2 max-w-xl leading-relaxed">
            Our straightforward commitments to quality, freshness, and bespoke service.
          </p>
        </div>

        {/* Simple Cards List */}
        <div className="space-y-4">
          {terms.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E6DFD5] shadow-xs flex items-start gap-4 hover:border-[#C59B27]/40 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-[#FAF5EE] text-[#C59B27] flex items-center justify-center shrink-0 mt-0.5">
                <item.icon className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-base sm:text-lg font-medium text-[#1A1612]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5744] font-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Contact Callout */}
        <div className="mt-8 p-5 rounded-2xl bg-[#F7F2EC] border border-[#E6DFD5] text-center text-xs text-[#6B5744]">
          <span>Have questions about your order? Reach our bakery concierge anytime at </span>
          <a href="mailto:concierge@delicebakery.com" className="font-semibold text-[#C59B27] hover:underline">
            concierge@delicebakery.com
          </a>
        </div>

      </div>
    </div>
  );
}
