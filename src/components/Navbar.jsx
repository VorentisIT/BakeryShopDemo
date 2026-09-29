import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Menu as MenuIcon, X, ArrowRight, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { playSound } from '../utils/sound';
import vorentisLogo from '../assets/vorentis_logo.png';

export default function Navbar({ 
  currentPage = 'home', 
  onNavigate, 
  cartCount, 
  onOpenCart, 
  onSearchClick, 
  onAccountClick,
  onOrderClick 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceItems = [
    { id: 'wedding-cakes', name: 'Wedding & Celebration Cakes', desc: 'Custom architectural multi-tier showpieces' },
    { id: 'dessert-catering', name: 'Event Pastry Catering', desc: 'Opulent dessert tables & French viennoiserie' },
    { id: 'corporate-gifting', name: 'Corporate Luxury Gifting', desc: 'Branded macaron boxes & executive hampers' },
    { id: 'baking-workshops', name: 'Masterclasses & Workshops', desc: 'Hands-on croissant & sourdough ateliers' },
    { id: 'chef-tasting', name: 'Chef’s Tasting Table', desc: 'Exclusive 5-course private degustation' },
  ];

  const isServiceActive = serviceItems.some(s => s.id === currentPage) || currentPage === 'services';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-[#E9D8C5] py-3.5 shadow-sm' 
        : 'bg-white/90 backdrop-blur-sm py-5 border-b border-[#E9D8C5]/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Logo & Subtitle */}
        <button 
          onClick={() => { playSound('click'); onNavigate('home'); }}
          className="flex flex-col group text-left focus:outline-none cursor-pointer"
        >
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#2B1A14] group-hover:text-[#5A2E1F] transition-colors">
            Délice
          </span>
          <span className="text-[8px] sm:text-[9px] tracking-[0.3em] text-[#78665C] uppercase font-sans font-semibold -mt-1">
            BAKERY & PATISSERIE
          </span>
        </button>

        {/* Center: Navigation Links with Services Hover Dropdown */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          <button
            onClick={() => { playSound('click'); onNavigate('home'); }}
            className={`text-xs uppercase tracking-wider font-medium transition-colors relative py-1 cursor-pointer ${
              currentPage === 'home' ? 'text-[#2B1A14] font-bold' : 'text-[#78665C] hover:text-[#2B1A14]'
            }`}
          >
            Home
            {currentPage === 'home' && (
              <motion.span layoutId="activeNavIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5A2E1F] rounded-full" />
            )}
          </button>

          <button
            onClick={() => { playSound('click'); onNavigate('cakes'); }}
            className={`text-xs uppercase tracking-wider font-medium transition-colors relative py-1 cursor-pointer ${
              currentPage === 'cakes' ? 'text-[#2B1A14] font-bold' : 'text-[#78665C] hover:text-[#2B1A14]'
            }`}
          >
            Cakes
            {currentPage === 'cakes' && (
              <motion.span layoutId="activeNavIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5A2E1F] rounded-full" />
            )}
          </button>

          <button
            onClick={() => { playSound('click'); onNavigate('desserts'); }}
            className={`text-xs uppercase tracking-wider font-medium transition-colors relative py-1 cursor-pointer ${
              currentPage === 'desserts' ? 'text-[#2B1A14] font-bold' : 'text-[#78665C] hover:text-[#2B1A14]'
            }`}
          >
            Desserts
            {currentPage === 'desserts' && (
              <motion.span layoutId="activeNavIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5A2E1F] rounded-full" />
            )}
          </button>

          <button
            onClick={() => { playSound('click'); onNavigate('cookies'); }}
            className={`text-xs uppercase tracking-wider font-medium transition-colors relative py-1 cursor-pointer ${
              currentPage === 'cookies' ? 'text-[#2B1A14] font-bold' : 'text-[#78665C] hover:text-[#2B1A14]'
            }`}
          >
            Cookies
            {currentPage === 'cookies' && (
              <motion.span layoutId="activeNavIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5A2E1F] rounded-full" />
            )}
          </button>

          {/* SERVICES HOVER DROPDOWN */}
          <div 
            className="relative py-1"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => { playSound('click'); onNavigate('wedding-cakes'); }}
              className={`text-xs uppercase tracking-wider font-medium transition-colors relative flex items-center gap-1.5 cursor-pointer ${
                isServiceActive ? 'text-[#2B1A14] font-bold' : 'text-[#78665C] hover:text-[#2B1A14]'
              }`}
            >
              <span>Services</span>
              <svg className={`w-3 h-3 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#5A2E1F]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
              {isServiceActive && (
                <motion.span layoutId="activeNavIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5A2E1F] rounded-full" />
              )}
            </button>

            {/* Dropdown Floating Mega Panel */}
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full -left-6 mt-2 w-80 sm:w-96 rounded-3xl bg-white/98 backdrop-blur-xl p-3 shadow-2xl border border-[#E9D8C5] z-50 overflow-hidden"
                >
                  <div className="px-3 py-2 border-b border-[#E9D8C5] mb-1 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#C9823A]">
                      ATELIER SERVICES
                    </span>
                    <span className="text-[10px] text-[#78665C]">Bespoke Offerings</span>
                  </div>

                  <div className="space-y-1">
                    {serviceItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          playSound('click');
                          onNavigate(item.id);
                        }}
                        className={`w-full text-left p-2.5 rounded-2xl transition-all flex items-center justify-between group cursor-pointer ${
                          currentPage === item.id 
                            ? 'bg-[#F4E5D2] text-[#2B1A14]' 
                            : 'hover:bg-[#FFF8EE] text-[#78665C]'
                        }`}
                      >
                        <div className="space-y-0.5 pr-2">
                          <span className="font-serif text-sm font-semibold text-[#2B1A14] group-hover:text-[#5A2E1F] transition-colors block">
                            {item.name}
                          </span>
                          <span className="text-[11px] text-[#78665C] font-light block leading-tight">
                            {item.desc}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => { playSound('click'); onNavigate('story'); }}
            className={`text-xs uppercase tracking-wider font-medium transition-colors relative py-1 cursor-pointer ${
              currentPage === 'story' ? 'text-[#2B1A14] font-bold' : 'text-[#78665C] hover:text-[#2B1A14]'
            }`}
          >
            Our Story
            {currentPage === 'story' && (
              <motion.span layoutId="activeNavIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5A2E1F] rounded-full" />
            )}
          </button>

          <button
            onClick={() => { playSound('click'); onNavigate('blog'); }}
            className={`text-xs uppercase tracking-wider font-medium transition-colors relative py-1 cursor-pointer ${
              currentPage === 'blog' ? 'text-[#2B1A14] font-bold' : 'text-[#78665C] hover:text-[#2B1A14]'
            }`}
          >
            Blog
            {currentPage === 'blog' && (
              <motion.span layoutId="activeNavIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5A2E1F] rounded-full" />
            )}
          </button>

          <button
            onClick={() => { playSound('click'); onNavigate('contact'); }}
            className={`text-xs uppercase tracking-wider font-medium transition-colors relative py-1 cursor-pointer ${
              currentPage === 'contact' ? 'text-[#2B1A14] font-bold' : 'text-[#78665C] hover:text-[#2B1A14]'
            }`}
          >
            Contact
            {currentPage === 'contact' && (
              <motion.span layoutId="activeNavIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#5A2E1F] rounded-full" />
            )}
          </button>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          
          {/* Search Icon */}
          <button
            onClick={() => { playSound('click'); onSearchClick(); }}
            className="p-2 rounded-full text-[#2B1A14] hover:text-[#5A2E1F] transition-colors cursor-pointer"
            title="Search creations"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* User Account Icon */}
          <button
            onClick={() => { playSound('click'); onAccountClick(); }}
            className="p-2 rounded-full text-[#2B1A14] hover:text-[#5A2E1F] transition-colors cursor-pointer"
            title="My Account"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Shopping Bag Icon with Notification Badge */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => { playSound('click'); onOpenCart(); }}
            className="relative p-2 rounded-full text-[#2B1A14] hover:text-[#5A2E1F] transition-colors cursor-pointer"
            title="Shopping Bag"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#5A2E1F] text-[#FFF8EE] text-[9px] font-bold flex items-center justify-center border border-white">
                {cartCount}
              </span>
            )}
          </motion.button>

          {/* Dark Rounded CTA Button */}
          <button
            onClick={() => { playSound('click'); onOrderClick(); }}
            className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-[#5A2E1F] text-[#FFF8EE] hover:bg-[#3E1F16] hover:text-white font-medium text-xs tracking-wider transition-all shadow-sm items-center justify-center cursor-pointer active:scale-95"
          >
            <span>Custom Cake</span>
          </button>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => {
              playSound('click');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-lg text-[#2B1A14] hover:bg-[#F4E5D2] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#5A2E1F]" /> : <MenuIcon className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-[#E9D8C5] px-6 py-6 space-y-3 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto block"
          >
            <button
              onClick={() => { setMobileMenuOpen(false); playSound('click'); onNavigate('home'); }}
              className={`block text-left w-full font-serif text-lg py-1 ${currentPage === 'home' ? 'text-[#5A2E1F] font-bold' : 'text-[#2B1A14]'}`}
            >
              Home
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); playSound('click'); onNavigate('cakes'); }}
              className={`block text-left w-full font-serif text-lg py-1 ${currentPage === 'cakes' ? 'text-[#5A2E1F] font-bold' : 'text-[#2B1A14]'}`}
            >
              Cakes
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); playSound('click'); onNavigate('desserts'); }}
              className={`block text-left w-full font-serif text-lg py-1 ${currentPage === 'desserts' ? 'text-[#5A2E1F] font-bold' : 'text-[#2B1A14]'}`}
            >
              Desserts
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); playSound('click'); onNavigate('cookies'); }}
              className={`block text-left w-full font-serif text-lg py-1 ${currentPage === 'cookies' ? 'text-[#5A2E1F] font-bold' : 'text-[#2B1A14]'}`}
            >
              Cookies
            </button>

            {/* Mobile Services Accordion */}
            <div className="py-1 border-y border-[#E9D8C5]">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between font-serif text-lg py-1 text-[#2B1A14]"
              >
                <span className={isServiceActive ? 'text-[#5A2E1F] font-bold' : ''}>Services</span>
                <ChevronRight className={`w-4 h-4 text-[#78665C] transition-transform ${mobileServicesOpen ? 'rotate-90 text-[#5A2E1F]' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 py-2 space-y-2">
                  {serviceItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        playSound('click');
                        onNavigate(item.id);
                      }}
                      className={`block text-left w-full text-xs py-1 transition-colors ${
                        currentPage === item.id ? 'text-[#5A2E1F] font-bold' : 'text-[#78665C]'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => { setMobileMenuOpen(false); playSound('click'); onNavigate('story'); }}
              className={`block text-left w-full font-serif text-lg py-1 ${currentPage === 'story' ? 'text-[#5A2E1F] font-bold' : 'text-[#2B1A14]'}`}
            >
              Our Story
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); playSound('click'); onNavigate('blog'); }}
              className={`block text-left w-full font-serif text-lg py-1 ${currentPage === 'blog' ? 'text-[#5A2E1F] font-bold' : 'text-[#2B1A14]'}`}
            >
              Bakery Diary
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); playSound('click'); onNavigate('contact'); }}
              className={`block text-left w-full font-serif text-lg py-1 ${currentPage === 'contact' ? 'text-[#5A2E1F] font-bold' : 'text-[#2B1A14]'}`}
            >
              Contact
            </button>

            <div className="pt-4 border-t border-[#E9D8C5] space-y-3">
              <button
                onClick={() => { setMobileMenuOpen(false); onOrderClick(); }}
                className="w-full py-3 rounded-full bg-[#5A2E1F] text-[#FFF8EE] font-bold text-xs uppercase tracking-widest flex items-center justify-center cursor-pointer hover:bg-[#3E1F16]"
              >
                <span>Custom Cake Studio</span>
              </button>

              <div className="text-center pt-1">
                <p className="text-[10px] text-[#78665C] inline-flex items-center justify-center gap-1.5 flex-wrap">
                  <span>Developed by</span>
                  <a 
                    href="https://vorentis-it.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#5A2E1F] font-semibold underline underline-offset-2 hover:text-[#3E1F16] transition-colors inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#F4E5D2] border border-[#E9D8C5]"
                  >
                    <img src={vorentisLogo} alt="Vorentis-IT" className="w-3.5 h-3.5 object-contain" />
                    <span>vorentis-it.com</span>
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
