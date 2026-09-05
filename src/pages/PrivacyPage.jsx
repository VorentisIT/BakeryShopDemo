import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Lock, Shield, Eye, Bell, UserCheck } from 'lucide-react';
import { playSound } from '../utils/sound';

export default function PrivacyPage({ onNavigateHome }) {
  const policies = [
    {
      icon: Eye,
      title: 'What We Collect',
      text: 'Only the details required to bake and deliver your orders: your name, phone number, delivery address, and custom cake message specifications.'
    },
    {
      icon: Bell,
      title: 'How We Use It',
      text: 'To schedule your baking slot, send live courier dispatch updates, and share occasional seasonal cake launches (which you can turn off anytime).'
    },
    {
      icon: Lock,
      title: 'Payment & Security',
      text: 'All transactions use bank-grade 256-bit encryption through certified payment processors. We never store credit card numbers or banking passwords on our platform.'
    },
    {
      icon: Shield,
      title: 'Zero Data Selling',
      text: 'We never sell, rent, or trade your personal information to third parties or marketing brokers. Your information remains strictly within Délice.'
    },
    {
      icon: UserCheck,
      title: 'Your Control',
      text: 'You can request to view, edit, or completely delete your profile and order history at any moment by contacting our privacy team.'
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
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <span className="font-script text-3xl sm:text-4xl text-[#C59B27] block">
            Clear & Respectful
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#1A1612] mt-1">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#6B5744] font-light mt-2 max-w-xl leading-relaxed">
            We value your trust as much as our recipes. Here is how your personal information is protected.
          </p>
        </div>

        {/* Simple Cards List */}
        <div className="space-y-4">
          {policies.map((item, idx) => (
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

        {/* Contact Footer */}
        <div className="mt-8 p-5 rounded-2xl bg-[#F7F2EC] border border-[#E6DFD5] text-center text-xs text-[#6B5744]">
          <span>Questions about your personal data? Write directly to our data officer at </span>
          <a href="mailto:privacy@delicebakery.com" className="font-semibold text-[#C59B27] hover:underline">
            privacy@delicebakery.com
          </a>
        </div>

      </div>
    </div>
  );
}
