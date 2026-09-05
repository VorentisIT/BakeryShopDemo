import React, { useState, useEffect } from 'react';
import { Clock, Flame, Bell, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { playSound } from '../utils/sound';

export default function FreshBatchBanner({ onReserveBatch }) {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 42 });
  const [notified, setNotified] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 25, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNotify = () => {
    playSound('cart');
    setNotified(true);
    setTimeout(() => setNotified(false), 4000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 relative z-20">
      <div className="relative rounded-3xl overflow-hidden glass-panel p-6 sm:p-8 gold-border bg-gradient-to-r from-amber-950/60 via-[#1C1A18] to-amber-950/60">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left: Oven Live Info */}
          <div className="flex items-center gap-5 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 shadow-gold-glow animate-pulse">
              <Flame className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                <span>OVEN BATCH #04</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>HOT RELEASE</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                Warm Normandy Butter Croissants & Pain au Chocolat
              </h2>
              <p className="text-xs sm:text-sm text-amber-100/70 mt-0.5">
                Fresh out of our French Deck Stone Oven in:
              </p>
            </div>
          </div>

          {/* Center: Live Countdown Numbers */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#121110] border border-amber-500/30 flex items-center justify-center font-serif text-2xl sm:text-3xl font-bold text-amber-300 shadow-inner">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span className="text-[10px] text-amber-200/60 uppercase tracking-wider mt-1">MINUTES</span>
            </div>

            <span className="font-serif text-2xl font-bold text-amber-400 mb-4 animate-pulse">:</span>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#121110] border border-amber-500/30 flex items-center justify-center font-serif text-2xl sm:text-3xl font-bold text-amber-300 shadow-inner">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <span className="text-[10px] text-amber-200/60 uppercase tracking-wider mt-1">SECONDS</span>
            </div>
          </div>

          {/* Right: Reserve Action */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleNotify}
              className="flex-1 sm:flex-none px-5 py-3 rounded-2xl bg-amber-950/60 text-amber-200 border border-amber-500/30 hover:border-amber-400 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Bell className="w-4 h-4 text-amber-400" />
              <span>{notified ? 'Subscribed!' : 'Notify Me'}</span>
            </button>

            <button
              onClick={() => { playSound('cart'); onReserveBatch(); }}
              className="flex-1 sm:flex-none px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 text-[#121110] font-bold text-xs shadow-gold-glow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Pre-Reserve Batch</span>
            </button>
          </div>

        </div>

        {/* Success toast notification */}
        <AnimatePresence>
          {notified && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 pt-3 border-t border-amber-500/20 text-center text-xs text-amber-300 flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>You’ll receive a push chime when the oven door opens in 14 minutes!</span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
