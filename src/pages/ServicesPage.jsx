import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Calendar, 
  Users, 
  HelpCircle, 
  X, 
  ChevronRight, 
  MessageSquare, 
  Maximize2, 
  Camera, 
  Eye, 
  Compass, 
  Award,
  Layers
} from 'lucide-react';
import { playSound } from '../utils/sound';
import { SERVICES_DATA } from '../data/servicesData';

export default function ServicesPage({ 
  activeServiceId = 'wedding-cakes', 
  onNavigate, 
  onNavigateHome,
  onOpenCustomCake 
}) {
  const [currentServiceId, setCurrentServiceId] = useState(activeServiceId || 'wedding-cakes');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Inquiry Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formGuests, setFormGuests] = useState('50');
  const [formNotes, setFormNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (activeServiceId) {
      setCurrentServiceId(activeServiceId);
      setActiveGalleryIndex(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeServiceId]);

  const currentService = SERVICES_DATA.find(s => s.id === currentServiceId) || SERVICES_DATA[0];

  const handleSelectService = (id) => {
    playSound('click');
    setCurrentServiceId(id);
    setActiveGalleryIndex(0);
    if (onNavigate) onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (pkg = null) => {
    playSound('click');
    setSelectedPackage(pkg);
    setIsInquiryOpen(true);
  };

  const handleOpenLightbox = (item) => {
    playSound('click');
    setLightboxImage(item);
  };

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    playSound('celebrate');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsInquiryOpen(false);
      setFormName('');
      setFormEmail('');
      setFormPhone('');
      setFormDate('');
      setFormNotes('');
    }, 2800);
  };

  const galleryList = currentService.gallery || [
    { id: 'g1', image: currentService.heroImage, title: currentService.name, subtitle: currentService.shortTitle, tag: 'Signature View' }
  ];
  const activeImageObj = galleryList[activeGalleryIndex] || galleryList[0];

  return (
    <div className="pt-24 pb-24 bg-[#FAF8F5] min-h-screen text-[#1A1612]">
      
      {/* 1. TOP HEADER & BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 border-b border-[#E6DFD5]">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <button
            onClick={() => { playSound('click'); onNavigateHome(); }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6B5744] hover:text-[#1A1612] transition-colors cursor-pointer bg-white px-4 py-2 rounded-full border border-[#E6DFD5] shadow-xs active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <span className="text-xs text-[#C59B27] font-mono uppercase tracking-widest font-semibold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atelier Services / {currentService.shortTitle}</span>
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <span className="font-script text-3xl sm:text-4xl text-[#C59B27] block">
              Haute Pâtisserie & Bespoke Moments
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#1A1612] mt-1">
              Atelier Services
            </h1>
            <p className="text-xs sm:text-sm text-[#6B5744] font-light mt-2 max-w-xl leading-relaxed">
              Explore bespoke event designs, high-end pastry catering spreads, corporate luxury gift dockets, and private tasting tables.
            </p>
          </div>

          <button
            onClick={() => handleOpenInquiry()}
            className="px-7 py-3.5 rounded-full bg-[#181310] text-[#FAF8F5] hover:bg-[#C59B27] transition-all font-medium text-xs tracking-wider inline-flex items-center justify-center gap-2.5 shadow-lg cursor-pointer active:scale-95 shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-[#D6A84F]" />
            <span>Book a Consultation</span>
          </button>
        </div>

        {/* Horizontal Service Selector Pills */}
        <div className="mt-8 flex overflow-x-auto no-scrollbar scroll-smooth gap-2.5 pb-2">
          {SERVICES_DATA.map((srv) => {
            const isSelected = currentServiceId === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => handleSelectService(srv.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all cursor-pointer shrink-0 border ${
                  isSelected
                    ? 'bg-[#181310] text-[#D6A84F] border-[#181310] shadow-md font-bold scale-[1.02]'
                    : 'bg-white text-[#6B5744] border-[#E6DFD5] hover:border-[#181310] hover:text-[#1A1612]'
                }`}
              >
                {srv.shortTitle}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. MAIN DETAILED SERVICE PRESENTATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        
        {/* HERO SHOWCASE: EDITORIAL COPY & STYLISH MASTER HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Narrative Copy */}
          <motion.div 
            key={`hero-${currentService.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181310] text-[#FAF8F5] text-[10px] font-bold uppercase tracking-widest shadow-xs">
              <Sparkles className="w-3 h-3 text-[#D6A84F]" />
              <span>{currentService.badge}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1612] leading-[1.15]">
              {currentService.name}
            </h2>

            <p className="font-serif text-base sm:text-lg italic text-[#C59B27] leading-relaxed">
              "{currentService.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-[#6B5744] font-light leading-relaxed">
              {currentService.lead}
            </p>

            {/* Quick Metrics / Guarantees */}
            <div className="grid grid-cols-3 gap-3 py-2 border-y border-[#E6DFD5] max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <span className="block font-serif text-lg font-bold text-[#1A1612]">100%</span>
                <span className="text-[10px] uppercase tracking-wider text-[#8C6D23] font-medium">Bespoke Recipe</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block font-serif text-lg font-bold text-[#1A1612]">White Glove</span>
                <span className="text-[10px] uppercase tracking-wider text-[#8C6D23] font-medium">Venue Delivery</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block font-serif text-lg font-bold text-[#1A1612]">Chef Lead</span>
                <span className="text-[10px] uppercase tracking-wider text-[#8C6D23] font-medium">Direct Staging</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => handleOpenInquiry()}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#181310] text-[#FAF8F5] hover:bg-[#C59B27] font-medium text-xs tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Reserve Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {currentService.id === 'wedding-cakes' && (
                <button
                  onClick={() => { playSound('click'); onOpenCustomCake(); }}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-[#1A1612] border border-[#E6DFD5] hover:border-[#1A1612] font-medium text-xs tracking-wider transition-all shadow-xs inline-flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>3D Custom Cake Studio</span>
                </button>
              )}
            </div>
          </motion.div>

          {/* Right Column: Master Hero Visual Card */}
          <motion.div 
            key={`img-${currentService.id}`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-[#F2ECE4] group">
              <img
                src={currentService.heroImage}
                alt={currentService.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Elegant Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

              {/* Top Right Zoom Button */}
              <button
                onClick={() => handleOpenLightbox({
                  image: currentService.heroImage,
                  title: currentService.name,
                  subtitle: currentService.tagline,
                  tag: currentService.badge
                })}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1A1612] backdrop-blur-md flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
                title="View High Resolution"
              >
                <Maximize2 className="w-4 h-4 text-[#1A1612]" />
              </button>

              {/* Bottom Card Information */}
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#D6A84F] block">
                    {currentService.badge}
                  </span>
                  <span className="font-serif text-lg sm:text-xl font-semibold leading-snug">
                    {currentService.shortTitle}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] uppercase tracking-wider text-[#FAF8F5] border border-white/20">
                  Haute Atelier
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 3. ATELIER VISUAL LOOKBOOK & AESTHETIC GALLERY (STYLISH MULTI-IMAGE DESIGN) */}
        <div className="pt-10 border-t border-[#E6DFD5] space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C59B27] block">
                CURATED VISUAL LOOKBOOK
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#1A1612] mt-1">
                Artisanal Staging & Textures
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5744] font-light mt-1 max-w-lg">
                Click any composition to open high-definition culinary details, flora arrangements, and plating textures.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#8C6D23] font-mono">
                {activeGalleryIndex + 1} of {galleryList.length} Compositions
              </span>
            </div>
          </div>

          {/* Interactive Lookbook Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Main Interactive Stage (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-[#181310] shadow-xl border border-[#E6DFD5] group">
                <motion.img
                  key={activeImageObj.id}
                  src={activeImageObj.image}
                  alt={activeImageObj.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                  onClick={() => handleOpenLightbox(activeImageObj)}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#181310]/85 backdrop-blur-md text-[#D6A84F] text-[10px] font-mono uppercase font-bold tracking-widest border border-[#D6A84F]/30 shadow-md">
                    {activeImageObj.tag}
                  </span>
                </div>

                {/* Expand Button */}
                <button
                  onClick={() => handleOpenLightbox(activeImageObj)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#181310] backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-md"
                  title="Expand Full View"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Caption Banner */}
                <div className="absolute bottom-4 left-5 right-5 text-white flex items-end justify-between">
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl font-bold">
                      {activeImageObj.title}
                    </h4>
                    <p className="text-xs text-[#E6DFD5] font-light mt-0.5">
                      {activeImageObj.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => handleOpenLightbox(activeImageObj)}
                    className="px-3.5 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-[11px] font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#D6A84F]" />
                    <span>Zoom</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnail Grid & Details (5 Cols) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
              {galleryList.map((item, idx) => {
                const isActive = activeGalleryIndex === idx;
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      playSound('click');
                      setActiveGalleryIndex(idx);
                    }}
                    className={`relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer transition-all duration-300 border-2 group ${
                      isActive 
                        ? 'border-[#C59B27] ring-4 ring-[#C59B27]/20 scale-[1.02] shadow-lg' 
                        : 'border-[#E6DFD5] hover:border-[#181310] opacity-85 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-[9px] font-mono text-[#D6A84F]">
                        {item.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                      <span className="font-serif text-xs font-semibold line-clamp-1 block">
                        {item.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* 4. THE 3-STEP ATELIER CRAFT PROCESS */}
        {currentService.process && (
          <div className="pt-10 border-t border-[#E6DFD5]">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C59B27] block">
                THE ATELIER BLUEPRINT
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#1A1612] mt-1">
                How We Bring Your Vision to Life
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentService.process.map((step, idx) => (
                <div 
                  key={idx}
                  className="rounded-3xl bg-white p-7 border border-[#E6DFD5] shadow-xs relative overflow-hidden flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-[#D6A84F]">
                      {step.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#FAF5EE] text-[#181310] flex items-center justify-center text-xs font-mono font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#1A1612]">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#6B5744] font-light mt-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="h-0.5 w-12 bg-[#D6A84F] rounded-full" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. WHAT IS INCLUDED SECTION */}
        <div className="pt-10 border-t border-[#E6DFD5]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C59B27] block">
              THE DÉLICE STANDARD
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#1A1612] mt-1">
              Included In Every Experience
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentService.features.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-[#E6DFD5] shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="w-9 h-9 rounded-full bg-[#FAF5EE] text-[#C59B27] flex items-center justify-center">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </div>
                <p className="text-xs sm:text-sm text-[#2E241E] font-light leading-relaxed">
                  {feat}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 6. CURATED PACKAGES TIER SECTION */}
        <div className="pt-10 border-t border-[#E6DFD5]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C59B27] block">
              CURATED PACKAGES
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#1A1612] mt-1">
              Tailored Options For Your Gathering
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentService.packages.map((pkg, idx) => (
              <motion.div
                key={pkg.name}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl bg-white p-6 sm:p-8 border border-[#E6DFD5] shadow-xs hover:shadow-xl hover:border-[#C59B27]/50 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-serif text-xl font-semibold text-[#1A1612] group-hover:text-[#C59B27] transition-colors">
                      {pkg.name}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#FAF5EE] text-[#8C6D23] font-semibold">
                      {pkg.servings}
                    </span>
                  </div>

                  <div className="font-serif text-2xl font-bold text-[#1A1612] pt-2 pb-4 border-b border-[#F2ECE4]">
                    {pkg.price}
                  </div>

                  <ul className="space-y-2.5 py-5 text-xs text-[#6B5744]">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleOpenInquiry(pkg)}
                  className="w-full py-3.5 rounded-full bg-[#181310] text-[#FAF8F5] hover:bg-[#C59B27] font-medium text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95 mt-2"
                >
                  <span>Select & Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 7. FAQS */}
        <div className="pt-10 border-t border-[#E6DFD5] max-w-3xl mx-auto">
          <h4 className="font-serif text-xl sm:text-2xl font-normal text-center text-[#1A1612] mb-6">
            Frequently Asked Questions
          </h4>
          <div className="space-y-3">
            {currentService.faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-[#E6DFD5] shadow-xs space-y-1.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-serif font-bold text-[#1A1612]">
                  <HelpCircle className="w-4 h-4 text-[#C59B27]" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-xs text-[#6B5744] font-light leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 8. BOTTOM CTA BANNER */}
        <div className="rounded-[2.5rem] bg-[#181310] text-[#FAF8F5] p-8 sm:p-12 text-center space-y-4 shadow-2xl border border-[#2E2620] relative overflow-hidden">
          <span className="font-script text-3xl sm:text-4xl text-[#D6A84F] block">
            Let's Create Something Extraordinary
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white max-w-xl mx-auto">
            Ready to plan your bespoke celebration?
          </h3>
          <p className="text-xs sm:text-sm text-[#D5C9BC] font-light max-w-md mx-auto leading-relaxed">
            Our atelier pastry concierge is on hand to guide you through flavor profiles, custom sketches, and refrigerated logistics.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleOpenInquiry()}
              className="px-9 py-4 rounded-full bg-[#FAF8F5] text-[#181310] hover:bg-[#C59B27] hover:text-white transition-all font-medium text-xs tracking-wider inline-flex items-center gap-2.5 cursor-pointer shadow-lg active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-[#C59B27]" />
              <span>Schedule a Personal Tasting / Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* 9. INTERACTIVE LIGHTBOX MODAL (FOR ALL IMAGES) */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative max-w-4xl w-full bg-[#181310] rounded-3xl overflow-hidden shadow-2xl border border-[#3A2D22]"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-[#C59B27] text-white flex items-center justify-center transition-all cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] bg-black">
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#2E241E]">
                <div>
                  <span className="text-[10px] font-mono text-[#D6A84F] uppercase tracking-widest block">
                    {lightboxImage.tag || 'Atelier Collection'}
                  </span>
                  <h4 className="font-serif text-xl font-semibold">
                    {lightboxImage.title}
                  </h4>
                  <p className="text-xs text-[#B9AA98] font-light mt-0.5">
                    {lightboxImage.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setLightboxImage(null);
                    handleOpenInquiry();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#D6A84F] text-[#181310] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer shrink-0"
                >
                  Inquire This Style
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 10. INTERACTIVE CONSULTATION / INQUIRY MODAL */}
      <AnimatePresence>
        {isInquiryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E6DFD5] relative my-auto"
            >
              <button
                onClick={() => setIsInquiryOpen(false)}
                className="w-9 h-9 rounded-full bg-[#FAF5EE] text-[#181310] hover:bg-[#181310] hover:text-white flex items-center justify-center transition-all absolute top-5 right-5 cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-5">
                <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-[#C59B27] block">
                  ATELIER RESERVATION
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#1A1612]">
                  {selectedPackage ? `Inquire: ${selectedPackage.name}` : `Inquire: ${currentService.shortTitle}`}
                </h3>
                <p className="text-xs text-[#6B5744] font-light mt-1">
                  Share your event parameters and our head patissier will prepare a personalized proposal.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#556B2F] text-white flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#1A1612]">
                    Inquiry Received!
                  </h4>
                  <p className="text-xs text-[#6B5744] max-w-xs mx-auto font-light leading-relaxed">
                    Thank you, {formName || 'valued guest'}. Our atelier concierge will contact you within 4 hours with your tasting consultation docket.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry} className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-semibold text-[#1A1612] block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#D5C9BC] focus:outline-none focus:border-[#C59B27]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-[#1A1612] block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="eleanor@example.com"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#D5C9BC] focus:outline-none focus:border-[#C59B27]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#1A1612] block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#D5C9BC] focus:outline-none focus:border-[#C59B27]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-[#1A1612] block mb-1">Target Event Date *</label>
                      <input
                        type="date"
                        required
                        value={formDate}
                        onChange={(e) => setFormDate(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#D5C9BC] focus:outline-none focus:border-[#C59B27]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#1A1612] block mb-1">Estimated Guests</label>
                      <select
                        value={formGuests}
                        onChange={(e) => setFormGuests(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#D5C9BC] focus:outline-none focus:border-[#C59B27] bg-white"
                      >
                        <option value="20">10 - 30 Guests</option>
                        <option value="50">30 - 60 Guests</option>
                        <option value="100">60 - 150 Guests</option>
                        <option value="200">150+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#1A1612] block mb-1">Special Preferences / Flavour Notes</label>
                    <textarea
                      rows="2"
                      value={formNotes}
                      onChange={(e) => setFormNotes(e.target.value)}
                      placeholder="e.g. Wedding tier inspiration, pistachio preference, gold leaf request..."
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#D5C9BC] focus:outline-none focus:border-[#C59B27] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#181310] text-[#D6A84F] hover:bg-[#C59B27] hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer active:scale-95 mt-2"
                  >
                    Submit Atelier Inquiry
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
