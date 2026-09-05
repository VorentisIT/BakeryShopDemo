import React from 'react';
import { ArrowUp, ArrowRight } from 'lucide-react';
import { playSound } from '../utils/sound';
import exactFooterCake from '../assets/hd_footer_cake.jpg';

export default function Footer({ onNavigate = () => {}, onOpenCustomCake = () => {}, onOpenAccount = () => {} }) {
  const scrollToTop = () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (page) => {
    playSound('click');
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative z-20 bg-[#100E0C] text-[#FAF8F5] pt-12 pb-8 border-t border-[#211A15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#211A15]">
          
          {/* Left: Brand info & Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col cursor-pointer" onClick={() => handleLink('home')}>
              <span className="font-serif text-3xl font-bold tracking-tight text-[#FAF8F5]">
                Délice
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[#D6A84F] uppercase font-sans font-semibold -mt-1">
                BAKERY & PATISSERIE
              </span>
            </div>

            <p className="text-xs text-[#B9AA98] font-light leading-relaxed max-w-sm">
              Crafting joy one bite at a time. Pure French pâtisserie artistry, made with real ingredients and devotion.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); playSound('click'); }}
                className="w-8 h-8 rounded-full bg-[#181310] border border-[#4A3928] text-[#B9AA98] hover:text-[#D6A84F] hover:border-[#D6A84F] flex items-center justify-center transition-all cursor-pointer"
                title="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); playSound('click'); }}
                className="w-8 h-8 rounded-full bg-[#181310] border border-[#4A3928] text-[#B9AA98] hover:text-[#D6A84F] hover:border-[#D6A84F] flex items-center justify-center transition-all cursor-pointer"
                title="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); playSound('click'); }}
                className="w-8 h-8 rounded-full bg-[#181310] border border-[#4A3928] text-[#B9AA98] hover:text-[#D6A84F] hover:border-[#D6A84F] flex items-center justify-center transition-all cursor-pointer"
                title="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A84F]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#B9AA98] font-light">
              <li><button onClick={() => handleLink('home')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">Home</button></li>
              <li><button onClick={() => handleLink('cakes')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">Artisanal Cakes</button></li>
              <li><button onClick={() => handleLink('desserts')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">Viennoiserie & Desserts</button></li>
              <li><button onClick={() => handleLink('cookies')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">Cookies & Breads</button></li>
              <li><button onClick={() => handleLink('story')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">Our Craft Story</button></li>
            </ul>
          </div>

          {/* Shop Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A84F]">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-[#B9AA98] font-light">
              <li><button onClick={() => { playSound('click'); onOpenCustomCake(); }} className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left">Custom Cake Studio</button></li>
              <li><button onClick={() => handleLink('wedding-cakes')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left">Wedding Cakes & Tastings</button></li>
              <li><button onClick={() => handleLink('dessert-catering')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left">Event Pastry Catering</button></li>
              <li><button onClick={() => handleLink('corporate-gifting')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left">Corporate Luxury Gifting</button></li>
              <li><button onClick={() => handleLink('baking-workshops')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-left">Masterclasses & Workshops</button></li>
            </ul>
          </div>

          {/* Help Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A84F]">
              Atelier
            </h4>
            <ul className="space-y-2 text-xs text-[#B9AA98] font-light">
              <li><button onClick={() => handleLink('contact')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">Boutique Locations</button></li>
              <li><button onClick={() => handleLink('contact')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">Express Delivery</button></li>
              <li><button onClick={() => handleLink('story')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">Ingredient Purity</button></li>
              <li><button onClick={() => handleLink('contact')} className="hover:text-[#FAF8F5] transition-colors cursor-pointer">Contact Concierge</button></li>
            </ul>
          </div>

          {/* Far Right Promotional Card (2 cols) */}
          <div className="lg:col-span-2 flex justify-start lg:justify-end">
            <div 
              onClick={() => handleLink('cakes')}
              className="w-full max-w-[200px] rounded-2xl bg-[#181310] border border-[#3A2D22] p-2.5 flex items-center gap-3 group cursor-pointer hover:border-[#D6A84F] transition-all shadow-md"
            >
              <img
                src={exactFooterCake}
                alt="Cake Card"
                className="w-16 h-16 object-cover rounded-xl shrink-0"
              />
              <div className="space-y-1">
                <span className="font-serif text-[11px] text-[#FAF8F5] group-hover:text-[#D6A84F] transition-colors leading-tight block">
                  Life is Sweeter with Cake
                </span>
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[#D6A84F] group-hover:bg-[#D6A84F] group-hover:text-black transition-all">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Links matching reference */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#B9AA98] font-light">
          <p>© 2026 Délice Bakery. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => handleLink('terms')} 
              className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-[11px]"
            >
              Terms & Conditions
            </button>
            <button 
              onClick={() => handleLink('privacy')} 
              className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-[11px]"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handleLink('cookie-policy')} 
              className="hover:text-[#FAF8F5] transition-colors cursor-pointer text-[11px]"
            >
              Cookie Policy
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#D6A84F] hover:text-white transition-colors cursor-pointer font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
