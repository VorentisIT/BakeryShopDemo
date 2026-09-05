import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Cookie, Check, Sliders } from 'lucide-react';
import { playSound } from '../utils/sound';

export default function CookiePolicyPage({ onNavigateHome }) {
  const [preferences, setPreferences] = useState({
    essential: true, // Always on
    experience: true,
    analytics: false
  });
  const [saved, setSaved] = useState(false);

  const toggle = (key) => {
    if (key === 'essential') return;
    playSound('click');
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    playSound('celebrate');
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const cookieItems = [
    {
      key: 'essential',
      title: 'Essential Cookies',
      required: true,
      desc: 'Required for our online bakery to function—remembering your shopping cart items, custom cake selections, and secure checkout.'
    },
    {
      key: 'experience',
      title: 'Sound & Experience Cookies',
      required: false,
      desc: 'Remembers your sound preferences (artisan audio clicks) and previously chosen dietary filters (like Vegetarian or Nut-free).'
    },
    {
      key: 'analytics',
      title: 'Performance & Speed',
      required: false,
      desc: 'Helps us measure page loading speeds so we can keep the site fast and responsive across all mobile phones and desktops.'
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
            Digital Cookies
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#1A1612] mt-1">
            Cookie Preferences
          </h1>
          <p className="text-xs sm:text-sm text-[#6B5744] font-light mt-2 max-w-xl leading-relaxed">
            We use a few digital cookies to remember your bag and cake designs. You can customize them below anytime.
          </p>
        </div>

        {/* Cookie Switches */}
        <div className="space-y-4">
          {cookieItems.map((c) => (
            <div
              key={c.key}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E6DFD5] shadow-xs flex items-center justify-between gap-4"
            >
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-base sm:text-lg font-medium text-[#1A1612]">
                    {c.title}
                  </h3>
                  {c.required && (
                    <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#181310] text-[#D6A84F] font-bold">
                      Always On
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-[#6B5744] font-light leading-relaxed">
                  {c.desc}
                </p>
              </div>

              {/* Toggle switch */}
              <button
                disabled={c.required}
                onClick={() => toggle(c.key)}
                className={`w-12 h-6 rounded-full transition-colors relative shrink-0 cursor-pointer ${
                  c.required || preferences[c.key] ? 'bg-[#181310]' : 'bg-[#D5C9BC]'
                } ${c.required ? 'cursor-not-allowed opacity-80' : ''}`}
              >
                <span
                  className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                    c.required || preferences[c.key] ? 'left-7 bg-[#D6A84F]' : 'left-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        {/* Save CTA */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#E6DFD5]">
          <span className="text-xs text-[#8C7A6B]">
            Preferences are saved on this browser.
          </span>

          <button
            onClick={handleSave}
            className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95 ${
              saved 
                ? 'bg-[#556B2F] text-white' 
                : 'bg-[#181310] text-[#D6A84F] hover:bg-[#C59B27] hover:text-white'
            }`}
          >
            {saved ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Saved!</span>
              </>
            ) : (
              <>
                <Sliders className="w-3.5 h-3.5" />
                <span>Save Preferences</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
