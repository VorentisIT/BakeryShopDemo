import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { playSound } from '../utils/sound';
import TransparentImg from './TransparentImg';

gsap.registerPlugin(ScrollTrigger);

export default function InteractiveScrollCake({ onAddToCart }) {
  const triggerRef = useRef(null);

  // Ingredient references for flying animations
  const cherryRef = useRef(null);
  const pistachioRef = useRef(null);
  const almondRef = useRef(null);
  const walnutRef = useRef(null);

  // Stage text references
  const textPhase1Ref = useRef(null);
  const textPhase2Ref = useRef(null);
  const textPhase3Ref = useRef(null);
  const textPhase4Ref = useRef(null);

  const [activeStage, setActiveStage] = useState(1);
  const [activeHotspot, setActiveHotspot] = useState(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: 'top top',
        end: '+=2400',
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress < 0.25) setActiveStage(1);
          else if (progress < 0.50) setActiveStage(2);
          else if (progress < 0.75) setActiveStage(3);
          else setActiveStage(4);
        }
      }
    });

    // Initial ingredient flying positions (off-screen / high floating)
    gsap.set(cherryRef.current, { x: 280, y: -220, opacity: 0, scale: 1.3, rotation: 30 });
    gsap.set(almondRef.current, { x: -280, y: -200, opacity: 0, scale: 1.3, rotation: -40 });
    gsap.set(pistachioRef.current, { x: 280, y: -180, opacity: 0, scale: 1.3, rotation: 40 });
    gsap.set(walnutRef.current, { x: -160, y: -260, opacity: 0, scale: 1.3, rotation: -15 });

    gsap.set([textPhase2Ref.current, textPhase3Ref.current, textPhase4Ref.current], { opacity: 0, y: 35 });

    // Stage 1 -> 2: Cherries drop into top cavity
    tl.to(textPhase1Ref.current, { opacity: 0, y: -25, duration: 0.5 }, 0.5)
      .to(cherryRef.current, {
        x: 0,
        y: -125,
        opacity: 1,
        scale: 0.65,
        rotation: -5,
        duration: 1,
        ease: 'back.out(1.8)'
      }, 0.6)
      .to(textPhase2Ref.current, { opacity: 1, y: 0, duration: 0.5 }, 0.8);

    // Stage 2 -> 3: Dry fruits drop into side & center cavities
    tl.to(textPhase2Ref.current, { opacity: 0, y: -25, duration: 0.5 }, 1.5)
      .to(almondRef.current, {
        x: -75,
        y: -95,
        opacity: 1,
        scale: 0.52,
        rotation: -20,
        duration: 0.7,
        ease: 'back.out(1.6)'
      }, 1.6)
      .to(pistachioRef.current, {
        x: 75,
        y: -95,
        opacity: 1,
        scale: 0.52,
        rotation: 20,
        duration: 0.7,
        ease: 'back.out(1.6)'
      }, 1.8)
      .to(walnutRef.current, {
        x: 0,
        y: -65,
        opacity: 1,
        scale: 0.56,
        rotation: 5,
        duration: 0.7,
        ease: 'back.out(1.6)'
      }, 2.0)
      .to(textPhase3Ref.current, { opacity: 1, y: 0, duration: 0.5 }, 2.2);

    // Stage 3 -> 4: Complete Masterpiece Reveal
    tl.to(textPhase3Ref.current, { opacity: 0, y: -25, duration: 0.5 }, 2.7)
      .to(textPhase4Ref.current, { opacity: 1, y: 0, duration: 0.5 }, 3.0);

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  const handleOrderSpecial = () => {
    playSound('cart');
    const specialItem = {
      id: 'grand-cru-transparent-masterpiece',
      name: "Grand Cru Artisanal Cake Masterpiece",
      category: 'cakes',
      price: 1800,
      rating: 5.0,
      reviewsCount: 52,
      image: '/images/cake_holes.jpg',
      description: "70% Valrhona Dark Chocolate Cake with 4 handcrafted cavities filled with fresh cherries, Bronte pistachios, California almonds, and golden walnuts.",
      dietary: ['Organic', 'Handcrafted', 'Transparent Artisanal'],
      ingredients: ['70% Valrhona Cocoa', 'Wild Black Cherries', 'California Almonds', 'Bronte Pistachios', 'Golden Walnuts'],
      allergens: ['Tree Nuts', 'Milk', 'Wheat', 'Eggs'],
      calories: '390 kcal / slice',
      prepTime: 'Live Assembled'
    };

    onAddToCart(specialItem, 1);
  };

  const hotspots = [
    { id: 'top', x: '50%', y: '32%', label: '70% Valrhona Mirror Glaze', info: 'Hand-poured 70% dark cocoa glaze with high-gloss mirror sheen at 32°C.' },
    { id: 'center', x: '50%', y: '50%', label: 'Gourmet Cavity Core', info: 'Custom sculpted center cavity designed for whole organic cherries & dry fruits.' },
    { id: 'base', x: '50%', y: '72%', label: 'Sablée Biscuit Crust', info: 'Cold-laminated cocoa butter sablée base with a delicate Fleur de Sel crunch.' }
  ];

  return (
    <section 
      ref={triggerRef} 
      className="relative h-screen w-full bg-[#FFF8EE] overflow-hidden flex flex-col justify-between border-y border-[#E9D8C5] z-30 select-none"
    >
      {/* Dynamic Ambient Spotlight Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C9823A]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Editorial Header & Stage Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 rounded-full bg-[#C9823A] animate-pulse" />
              <span className="text-[10px] font-semibold text-[#C9823A] uppercase tracking-[0.3em]">
                ARTISANAL INTERACTIVE ASSEMBLY
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#2B1A14] mt-1">
              Interactive <span className="italic text-[#C9823A]">Cake Assembly</span>
            </h2>
          </div>

          {/* Pro Max Stage Progress Controls */}
          <div className="flex items-center gap-4 bg-white/95 backdrop-blur-xl px-5 py-2.5 rounded-full border border-[#E9D8C5] shadow-xs">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeStage >= step ? 'w-6 bg-[#C9823A]' : 'w-2 bg-[#E9D8C5]'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-mono font-medium text-[#2B1A14] tracking-widest pl-2 border-l border-[#E9D8C5]">
              STAGE 0{activeStage} / 04
            </span>
          </div>

        </div>
      </div>

      {/* Center Stage: Transparent Floating Cake + Ingredients + Tooltips */}
      <div className="relative flex-1 flex items-center justify-center my-4">
        
        {/* Left HUD Stats Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="hidden lg:flex flex-col gap-3 absolute left-12 top-1/2 -translate-y-1/2 z-30 w-56 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E9D8C5] shadow-md"
        >
          <div className="flex items-center gap-2.5 text-[#C9823A]">
            <Award className="w-4 h-4" />
            <span className="text-[10px] font-semibold tracking-widest uppercase">GRAND CRU SPEC</span>
          </div>
          <div className="space-y-2 pt-1">
            <div className="flex justify-between text-xs">
              <span className="text-[#78665C]">Cocoa Mass</span>
              <span className="text-[#2B1A14] font-mono font-semibold">70% Valrhona</span>
            </div>
            <div className="w-full h-1 bg-[#E9D8C5] rounded-full overflow-hidden">
              <div className="w-[70%] h-full bg-[#C9823A]" />
            </div>
            <div className="flex justify-between text-xs pt-1">
              <span className="text-[#78665C]">Fermentation</span>
              <span className="text-[#2B1A14] font-mono font-semibold">48 Hours</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#78665C]">Temperature</span>
              <span className="text-[#2B1A14] font-mono font-semibold">18°C Controlled</span>
            </div>
          </div>
        </motion.div>

        {/* Center Transparent Cake Showcase Container */}
        <div className="relative w-80 sm:w-[460px] lg:w-[500px] aspect-square flex items-center justify-center z-20">
          
          {/* Pristine Transparent Background Cake */}
          <TransparentImg
            src="/images/cake_holes.jpg"
            alt="Artisanal Chocolate Cake Base with Cavities"
            className="w-full h-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.16)]"
          />

          {/* Interactive Glowing Hotspots on Cake */}
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              style={{ left: spot.x, top: spot.y }}
              className="absolute z-40 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              onClick={() => {
                playSound('click');
                setActiveHotspot(activeHotspot === spot.id ? null : spot.id);
              }}
            >
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9823A] opacity-75" />
                <span className="relative inline-flex rounded-full h-5 w-5 bg-[#5A2E1F] border-2 border-[#C9823A] items-center justify-center text-[9px] font-bold text-[#FFF8EE]">
                  +
                </span>
              </span>

              {/* Hotspot Micro-Tooltip */}
              <AnimatePresence>
                {activeHotspot === spot.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 w-52 p-3 rounded-xl bg-[#2B1A14] text-[#FFF8EE] border border-[#C9823A] shadow-2xl text-left pointer-events-auto z-50 backdrop-blur-2xl"
                  >
                    <h4 className="text-xs font-serif font-semibold text-[#FFF8EE]">{spot.label}</h4>
                    <p className="text-[10px] text-[#E9D8C5] font-light mt-1 leading-relaxed">{spot.info}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Flying Transparent Cherry Ingredient */}
          <div ref={cherryRef} className="absolute z-30 pointer-events-none w-28 sm:w-36 aspect-square">
            <TransparentImg src="/images/cherry.jpg" alt="Cherries" className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.2)]" />
          </div>

          {/* Flying Transparent Almond Ingredient */}
          <div ref={almondRef} className="absolute z-30 pointer-events-none w-20 sm:w-28 aspect-square">
            <TransparentImg src="/images/almond.png" alt="Almond" className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.2)]" />
          </div>

          {/* Flying Transparent Pistachio Ingredient */}
          <div ref={pistachioRef} className="absolute z-30 pointer-events-none w-20 sm:w-28 aspect-square">
            <TransparentImg src="/images/pistachio.png" alt="Pistachio" className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.2)]" />
          </div>

          {/* Flying Transparent Walnut Ingredient */}
          <div ref={walnutRef} className="absolute z-30 pointer-events-none w-24 sm:w-32 aspect-square">
            <TransparentImg src="/images/walnut.jpg" alt="Walnut" className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.2)]" />
          </div>

        </div>

        {/* Right HUD Glassmorphic Ingredient Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="hidden lg:flex flex-col gap-3 absolute right-12 top-1/2 -translate-y-1/2 z-30 w-56 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E9D8C5] shadow-md"
        >
          <div className="flex items-center gap-2.5 text-[#C9823A]">
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-semibold tracking-widest uppercase">GALA COMPOSITION</span>
          </div>
          <div className="space-y-2 text-xs text-[#78665C] font-light">
            <div className="flex items-center justify-between">
              <span>Top Cavity</span>
              <span className="text-[#2B1A14] font-semibold">Wild Cherries</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Left Cavity</span>
              <span className="text-[#2B1A14] font-semibold">CA Almonds</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Right Cavity</span>
              <span className="text-[#2B1A14] font-semibold">Bronte Pistachio</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Center Core</span>
              <span className="text-[#2B1A14] font-semibold">Golden Walnuts</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Stage Narrative & CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 relative z-20">
        <div className="relative h-24 flex items-center justify-center text-center">
          
          {/* STAGE 01 */}
          <div ref={textPhase1Ref} className="absolute inset-0 flex flex-col items-center justify-center space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C9823A]">
              STAGE 01 — ARTISANAL BASE
            </span>
            <h3 className="font-serif text-xl sm:text-3xl font-normal text-[#2B1A14]">
              Grand Cru 70% Valrhona Dark Chocolate Base
            </h3>
          </div>

          {/* STAGE 02 */}
          <div ref={textPhase2Ref} className="absolute inset-0 flex flex-col items-center justify-center space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C9823A]">
              STAGE 02 — TOP CAVITY INJECTION
            </span>
            <h3 className="font-serif text-xl sm:text-3xl font-normal text-[#2B1A14]">
              Organic Wild Cherries Placed In Sculpted Top Hole
            </h3>
          </div>

          {/* STAGE 03 */}
          <div ref={textPhase3Ref} className="absolute inset-0 flex flex-col items-center justify-center space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C9823A]">
              STAGE 03 — LUXURY NUT EMBEDDING
            </span>
            <h3 className="font-serif text-xl sm:text-3xl font-normal text-[#2B1A14]">
              Almonds, Pistachios & Walnuts Nestled in Cavities
            </h3>
          </div>

          {/* STAGE 04 */}
          <div ref={textPhase4Ref} className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#5E8060]">
              STAGE 04 — MASTERPIECE COMPLETE
            </span>
            <h3 className="font-serif text-xl sm:text-3xl font-normal text-[#2B1A14]">
              Grand Cru Artisanal Masterpiece • <span className="italic text-[#C9823A]">₹1,800</span>
            </h3>
            <button
              onClick={handleOrderSpecial}
              className="px-8 py-3.5 rounded-full bg-[#5A2E1F] text-[#FFF8EE] font-semibold text-xs uppercase tracking-widest hover:bg-[#3E1F16] transition-all shadow-md flex items-center justify-center cursor-pointer"
            >
              <span>Order This Masterpiece</span>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
