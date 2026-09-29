import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import TransparentImg from './TransparentImg';
import { Award } from 'lucide-react';

export default function GlobalScrollCake() {
  const cakeContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const progress = Math.min(1, Math.max(0, window.scrollY / docHeight));
      setScrollProgress(Math.round(progress * 100));

      if (cakeContainerRef.current) {
        const rotY = Math.sin(progress * Math.PI * 4) * 12;
        const scale = 1 + Math.sin(progress * Math.PI * 2) * 0.05;
        gsap.to(cakeContainerRef.current, {
          rotationY: rotY,
          scale: scale,
          duration: 0.4,
          ease: 'power1.out'
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={cakeContainerRef}
      className="fixed bottom-6 right-6 z-40 w-36 sm:w-44 aspect-square pointer-events-none transition-all duration-300 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] hidden md:block"
    >
      {/* Dynamic Glow Background */}
      <div className="absolute inset-0 bg-[#C9823A]/15 rounded-full blur-xl pointer-events-none" />

      {/* Floating Transparent Cake */}
      <div className="w-full h-full relative z-10 p-2">
        <TransparentImg
          src="/images/cake_holes.jpg"
          alt="Artisanal Floating Cake"
          className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
        />
      </div>

      {/* Scroll Progress Indicator Pill */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#5A2E1F] text-[#FFF8EE] border border-[#E9D8C5] text-[9px] font-mono font-medium shadow-lg z-20 whitespace-nowrap flex items-center gap-1.5 pointer-events-auto">
        <Award className="w-3 h-3 text-[#C9823A]" />
        <span>SCROLL {scrollProgress}%</span>
      </div>
    </div>
  );
}
