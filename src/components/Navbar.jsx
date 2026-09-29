import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  User, 
  Menu as MenuIcon, 
  X, 
  ArrowRight, 
  ChevronRight,
  Sparkles,
  Phone,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { playSound } from '../utils/sound';
import vorentisLogo from '../assets/vorentis_logo.png';

import serviceWeddingHero from '../assets/service_wedding_hero.jpg';
import serviceDessertHero from '../assets/service_dessert_hero.jpg';
import serviceCorporateHero from '../assets/service_corporate_hero.jpg';
import serviceWorkshopHero from '../assets/service_workshop_hero.jpg';
import serviceTastingHero from '../assets/service_tasting_hero.jpg';

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
  const [hoveredServiceId, setHoveredServiceId] = useState('wedding-cakes');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceItems = [
    { 
      id: 'wedding-cakes', 
      name: 'Wedding & Celebration Cakes', 
      desc: 'Architectural multi-tier showpieces & florals',
      tag: 'Bespoke',
      image: serviceWeddingHero,
      previewTitle: 'Grand Wedding & Couture Tiers',
      previewDesc: '5-tier architectural sculptures with handcrafted sugar botanicals and 24K gold drips.'
    },
    { 
      id: 'dessert-catering', 
      name: 'Event Pastry Catering', 
      desc: 'Opulent dessert tables & French viennoiserie',
      tag: 'Catering',
      image: serviceDessertHero,
      previewTitle: 'Opulent Dessert Tables',
      previewDesc: 'Signature Parisian patisserie spreads, tartlets, and viennoiserie curated for luxury events.'
    },
    { 
      id: 'corporate-gifting', 
      name: 'Corporate Luxury Gifting', 
      desc: 'Custom branded macaron boxes & hampers',
      tag: 'Gifting',
      image: serviceCorporateHero,
      previewTitle: 'Luxury Branded Gifting',
      previewDesc: 'Handcrafted macaron gift suites and executive gourmet hampers embossed with bespoke ribbons.'
    },
    { 
      id: 'baking-workshops', 
      name: 'Masterclasses & Workshops', 
      desc: 'Hands-on croissant & sourdough ateliers',
      tag: 'Academy',
      image: serviceWorkshopHero,
      previewTitle: 'Pastry & Bread Masterclasses',
      previewDesc: 'Master the 27 layers of French lamination and sourdough fermentation in private atelier sessions.'
    },
    { 
      id: 'chef-tasting', 
      name: 'Chef’s Tasting Table', 
      desc: 'Exclusive 5-course private degustation',
      tag: 'VIP Table',
      image: serviceTastingHero,
      previewTitle: 'Private 5-Course Degustation',
      previewDesc: 'An intimate tasting journey paired with rare teas and single-origin chocolates with our Executive Chef.'
    },
  ];

  const activePreview = serviceItems.find(s => s.id === hoveredServiceId) || serviceItems[0];
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
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full -left-28 mt-2.5 w-[580px] lg:w-[640px] rounded-3xl bg-white/98 backdrop-blur-2xl p-4 shadow-[0_25px_60px_rgba(43,26,20,0.15)] border border-[#E9D8C5] z-50 overflow-hidden text-left"
                >
                  {/* Top Header */}
                  <div className="px-3 pb-3 border-b border-[#E9D8C5] mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#C9823A]" />
                      <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#C9823A]">
                        HAUTE PÂTISSERIE SERVICES
                      </span>
                    </div>
                    <span className="text-[10.5px] text-[#78665C] font-light">
                      Bespoke Culinary Craft
                    </span>
                  </div>

                  {/* 2-Column Content Grid */}
                  <div className="grid grid-cols-12 gap-3.5 items-stretch">
                    
                    {/* Left: 5 Service Links (Clean Typography without icons) */}
                    <div className="col-span-7 space-y-1.5">
                      {serviceItems.map((item) => {
                        const isSelected = hoveredServiceId === item.id || (currentPage === item.id && !hoveredServiceId);
                        return (
                          <button
                            key={item.id}
                            onMouseEnter={() => setHoveredServiceId(item.id)}
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              playSound('click');
                              onNavigate(item.id);
                            }}
                            className={`w-full text-left p-2.5 px-3 rounded-2xl transition-all duration-200 flex items-center justify-between group cursor-pointer border ${
                              isSelected
                                ? 'bg-[#F4E5D2] border-[#5A2E1F]/25 text-[#2B1A14] shadow-2xs' 
                                : 'bg-transparent border-transparent hover:bg-[#FFF8EE] hover:border-[#E9D8C5]/70 text-[#78665C]'
                            }`}
                          >
                            <div className="space-y-0.5 pr-2 min-w-0">
                              <span className={`font-serif text-[13px] font-bold transition-colors block truncate ${
                                isSelected ? 'text-[#5A2E1F]' : 'text-[#2B1A14] group-hover:text-[#5A2E1F]'
                              }`}>
                                {item.name}
                              </span>
                              <span className="text-[10.5px] text-[#78665C] font-light block leading-snug truncate">
                                {item.desc}
                              </span>
                            </div>

                            <span className="text-[8.5px] font-mono uppercase tracking-wider text-[#C9823A] bg-white px-2 py-0.5 rounded-md border border-[#E9D8C5] shrink-0 font-semibold shadow-2xs">
                              {item.tag}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Right: Dynamic Live Preview Card */}
                    <div className="col-span-5 rounded-2xl bg-gradient-to-br from-[#2B1A14] to-[#3E1F16] text-[#FFF8EE] p-3.5 flex flex-col justify-between border border-[#5A2E1F] shadow-inner relative overflow-hidden">
                      
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`preview-${activePreview.id}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          className="flex flex-col justify-between h-full space-y-2.5"
                        >
                          {/* Image Thumbnail Banner */}
                          <div className="w-full h-28 rounded-xl overflow-hidden relative bg-black/40 shadow-md shrink-0">
                            <img 
                              src={activePreview.image} 
                              alt={activePreview.name} 
                              className="w-full h-full object-cover" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <span className="absolute bottom-1.5 left-2 text-[8.5px] font-mono uppercase tracking-wider text-[#FFF8EE] font-semibold flex items-center gap-1 bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-xs border border-white/20">
                              <Sparkles className="w-2.5 h-2.5 text-[#C9823A]" />
                              {activePreview.tag} Feature
                            </span>
                          </div>

                          <div className="space-y-1 text-left">
                            <h4 className="font-serif text-xs font-bold text-white leading-tight">
                              {activePreview.previewTitle}
                            </h4>
                            <p className="text-[10px] text-[#E9D8C5] font-light leading-snug line-clamp-2">
                              {activePreview.previewDesc}
                            </p>
                          </div>

                          <button
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              playSound('click');
                              onNavigate(activePreview.id);
                            }}
                            className="w-full py-2 rounded-xl bg-[#C9823A] hover:bg-[#b07030] text-[#2B1A14] hover:text-white font-semibold text-[10px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md active:scale-95 shrink-0"
                          >
                            <span>Explore Offering</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </motion.div>
                      </AnimatePresence>

                    </div>

                  </div>

                  {/* Bottom Footer Bar */}
                  <div className="mt-3 pt-2.5 border-t border-[#E9D8C5] px-2 flex items-center justify-between text-[10.5px]">
                    <div className="flex items-center gap-1.5 text-[#78665C]">
                      <Phone className="w-3 h-3 text-[#C9823A]" />
                      <span>Concierge:</span>
                      <a href="tel:+916239796319" className="font-semibold text-[#2B1A14] hover:text-[#5A2E1F] hover:underline font-mono">
                        +91 62397 96319
                      </a>
                    </div>

                    <button
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        playSound('click');
                        onNavigate('wedding-cakes');
                      }}
                      className="text-[#5A2E1F] hover:text-[#C9823A] font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore All Services</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
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
                <div className="pl-1 py-2 space-y-1.5">
                  {serviceItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        playSound('click');
                        onNavigate(item.id);
                      }}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-colors ${
                        currentPage === item.id 
                          ? 'bg-[#F4E5D2] text-[#5A2E1F] font-bold' 
                          : 'text-[#78665C] hover:bg-[#FFF8EE]'
                      }`}
                    >
                      <span className="text-xs truncate font-medium text-[#2B1A14]">{item.name}</span>
                      <span className="text-[8.5px] font-mono uppercase tracking-wider text-[#C9823A] bg-white px-2 py-0.5 rounded border border-[#E9D8C5] shrink-0 font-semibold">
                        {item.tag}
                      </span>
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
              <a
                href="tel:+916239796319"
                className="w-full py-2.5 rounded-full bg-[#FFF8EE] text-[#5A2E1F] border border-[#E9D8C5] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer hover:bg-[#F4E5D2]"
              >
                <span>Call Concierge: +91 62397 96319</span>
              </a>

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
