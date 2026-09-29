import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cake, 
  Gift, 
  Store, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MessageSquare, 
  Send, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Heart, 
  MapPin, 
  CheckCircle2, 
  ArrowLeft,
  ChevronDown,
  Sparkles,
  UtensilsCrossed,
  Bell,
  Compass,
  Navigation,
  ExternalLink
} from 'lucide-react';
import { playSound } from '../utils/sound';
import CustomDropdown from '../components/CustomDropdown';

export default function ContactPage({ onNavigateHome }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: 'Wedding & Multi-Tier Cake',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeMapId, setActiveMapId] = useState('mumbai');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    playSound('celebrate');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', occasion: 'Wedding & Multi-Tier Cake', message: '' });
    }, 6000);
  };

  const boutiques = [
    {
      id: 'paris',
      city: 'PARIS • 8TH ARRONDISSEMENT',
      shortCity: 'Paris Atelier',
      name: 'Flagship Atelier Paris',
      address: '18 Rue de la Paix, 75002 Paris, France',
      hours: 'Tue – Sun : 7:30 AM – 7:30 PM',
      phone: 'Call +91 62397 96319',
      image: '/images/boutique_paris.jpg',
      mapUrl: 'https://maps.google.com/?q=18+Rue+de+la+Paix+75002+Paris+France',
      embedUrl: 'https://maps.google.com/maps?q=18+Rue+de+la+Paix+75002+Paris+France&t=&z=14&ie=UTF8&iwloc=&output=embed'
    },
    {
      id: 'london',
      city: 'LONDON • MAYFAIR',
      shortCity: 'London Mayfair',
      name: 'Boutique Mayfair London',
      address: '42 Mount Street, Mayfair, London W1K 2RN',
      hours: 'Mon – Sat : 8:00 AM – 8:00 PM',
      phone: 'Call +91 62397 96319',
      image: '/images/boutique_london.jpg',
      mapUrl: 'https://maps.google.com/?q=42+Mount+Street+Mayfair+London',
      embedUrl: 'https://maps.google.com/maps?q=42+Mount+Street+Mayfair+London+W1K+2RN&t=&z=14&ie=UTF8&iwloc=&output=embed'
    },
    {
      id: 'mumbai',
      city: 'MUMBAI • BANDRA WEST',
      shortCity: 'Mumbai Boutique',
      name: 'Boutique Bandra Mumbai',
      address: 'Pali Hill, Nargis Dutt Road, Bandra West, Mumbai 400050',
      hours: 'Everyday : 9:00 AM – 11:00 PM',
      phone: 'Call +91 62397 96319',
      image: '/images/boutique_mumbai.jpg',
      mapUrl: 'https://maps.google.com/?q=Pali+Hill+Bandra+West+Mumbai',
      embedUrl: 'https://maps.google.com/maps?q=Pali+Hill+Nargis+Dutt+Road+Bandra+West+Mumbai+400050&t=&z=14&ie=UTF8&iwloc=&output=embed'
    }
  ];

  const currentMapBoutique = boutiques.find(b => b.id === activeMapId) || boutiques[2];

  return (
    <div className="pt-24 pb-0 bg-[#FFF8EE] min-h-screen text-[#2B1A14] select-none font-sans">
      
      {/* 1. HERO HEADER SECTION WITH FULL COVER BACKGROUND */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-4 sm:pb-6">
        
        {/* Navigation Bar (Back Button only, no breadcrumb trail) */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <button
            onClick={() => { playSound('click'); onNavigateHome(); }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#78665C] hover:text-[#5A2E1F] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Hero Full Cover Image Background Banner (Seamless, zero corner border artifacts, 100% blend into page) */}
        <div className="relative min-h-[380px] sm:min-h-[440px] flex items-center bg-[#FFF8EE] overflow-visible">
          
          {/* Background Cover Image with Radial Soft Mask to Eliminate All Corner Border Artifacts */}
          <div 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ 
              maskImage: 'radial-gradient(ellipse 90% 85% at 65% 50%, black 45%, transparent 88%)',
              WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 65% 50%, black 45%, transparent 88%)'
            }}
          >
            <img
              src="/images/contact_hero_cake.jpg"
              alt="Artisanal French Drip Celebration Cake Tasting"
              className="w-full h-full object-cover object-right sm:object-center"
            />
          </div>

          {/* Luxury Feathering Gradient Masks (Seamless Left, Right, Top & Bottom Edge Blending with #FFF8EE) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8EE] via-[#FFF8EE]/95 via-45% to-transparent sm:w-[75%] lg:w-[62%] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#FFF8EE] via-[#FFF8EE]/40 via-10% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8EE] via-transparent via-15% to-[#FFF8EE]/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8EE] via-transparent via-10% to-transparent pointer-events-none" />

          {/* Hero Content on Left Overlay */}
          <div className="relative z-10 max-w-2xl p-6 sm:p-10 lg:p-12 space-y-4">
            <span className="font-script text-2xl sm:text-3xl text-[#C9823A] block">
              Visit or Connect
            </span>
            
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2B1A14] leading-[1.15] tracking-tight">
              Boutiques & Tasting Consultations
            </h1>
            
            <p className="text-xs sm:text-sm text-[#78665C] font-light leading-relaxed max-w-md">
              Book a bespoke wedding cake tasting, place bulk gift box orders, or visit our atelier patisseries in person.
            </p>

            {/* 3 Quick Badges (Responsive 3-column layout that fits on all screen sizes) */}
            <div className="pt-3 grid grid-cols-3 gap-1.5 sm:gap-3 w-full max-w-lg">
              
              {/* Badge 1 */}
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md p-1.5 sm:px-3 sm:py-2 rounded-xl sm:rounded-2xl border border-[#E9D8C5]/70 shadow-2xs min-w-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#F4E5D2] flex items-center justify-center text-[#5A2E1F] shrink-0">
                  <Cake className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left min-w-0 pr-0.5">
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#2B1A14] block leading-tight truncate">Tasting</span>
                  <span className="text-[8.5px] sm:text-[10px] text-[#78665C] font-light leading-tight block truncate">Consults</span>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md p-1.5 sm:px-3 sm:py-2 rounded-xl sm:rounded-2xl border border-[#E9D8C5]/70 shadow-2xs min-w-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#F4E5D2] flex items-center justify-center text-[#5A2E1F] shrink-0">
                  <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left min-w-0 pr-0.5">
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#2B1A14] block leading-tight truncate">Custom</span>
                  <span className="text-[8.5px] sm:text-[10px] text-[#78665C] font-light leading-tight block truncate">& Bulk</span>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md p-1.5 sm:px-3 sm:py-2 rounded-xl sm:rounded-2xl border border-[#E9D8C5]/70 shadow-2xs min-w-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#F4E5D2] flex items-center justify-center text-[#5A2E1F] shrink-0">
                  <Store className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left min-w-0 pr-0.5">
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#2B1A14] block leading-tight truncate">Visit</span>
                  <span className="text-[8.5px] sm:text-[10px] text-[#78665C] font-light leading-tight block truncate">Ateliers</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* 2. MAIN CARD CONTAINER (FORM + BOUTIQUES) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4 pb-8 sm:pb-12">
        <div className="bg-white rounded-2xl sm:rounded-[2rem] border border-[#E9D8C5] shadow-[0_12px_40px_rgba(43,26,20,0.05)] p-4 sm:p-8 lg:p-10 relative overflow-hidden">
          
          {/* Subtle Decorative Background Botanical Leaf Watermark */}
          <div className="absolute top-0 right-0 w-80 h-80 opacity-[0.03] pointer-events-none">
            <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-[#5A2E1F]">
              <path d="M40,-68.7C51.4,-61.4,59.8,-50.3,66.8,-38.3C73.8,-26.3,79.4,-13.1,79.5,0.1C79.6,13.2,74.2,26.4,66.4,37.8C58.6,49.2,48.4,58.8,36.5,65.3C24.6,71.8,12.3,75.2,-0.2,75.5C-12.7,75.9,-25.4,73.1,-37.2,66.8C-49,60.5,-59.9,50.6,-67.2,38.6C-74.5,26.5,-78.2,13.3,-77.7,0.3C-77.1,-12.7,-72.4,-25.3,-64.7,-36.5C-57.1,-47.6,-46.5,-57.2,-34.7,-64.3C-22.9,-71.4,-11.5,-76,-0.1,-75.8C11.3,-75.6,28.6,-76,40,-68.7Z" transform="translate(100 100)" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 relative z-10">
            
            {/* LEFT COLUMN: CONSULTATION INQUIRY FORM */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                
                {/* Form Header */}
                <div className="mb-4 sm:mb-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9823A] block font-mono">
                    GET IN TOUCH
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B1A14] mt-1">
                    Book a Tasting or Send an Inquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-[#78665C] font-light mt-1">
                    Our Head Concierge responds to all consultation inquiries within 2 hours.
                  </p>
                </div>

                {/* Submission Success State */}
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-[#FFF8EE] border border-[#5E8060] text-center space-y-3 my-6 shadow-sm"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#5E8060] text-white flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#2B1A14]">Inquiry Received!</h3>
                    <p className="text-xs text-[#78665C] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#2B1A14]">{formData.name || 'valued guest'}</strong>. Our Master Pastry Concierge has received your consultation request and will reach out to you within 2 hours with tailored recommendations.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Row 1: Full Name & Email Address */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-semibold uppercase tracking-wider text-[#78665C] block mb-1.5 font-mono">
                          YOUR FULL NAME *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-[#78665C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Sarah Jenkins"
                            className="w-full bg-[#FFF8EE]/60 hover:bg-[#FFF8EE] focus:bg-white border border-[#E9D8C5] focus:border-[#5A2E1F] rounded-xl pl-10 pr-4 py-3 text-xs text-[#2B1A14] placeholder-[#78665C]/60 focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-semibold uppercase tracking-wider text-[#78665C] block mb-1.5 font-mono">
                          EMAIL ADDRESS *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-[#78665C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            placeholder="sarah@example.com"
                            className="w-full bg-[#FFF8EE]/60 hover:bg-[#FFF8EE] focus:bg-white border border-[#E9D8C5] focus:border-[#5A2E1F] rounded-xl pl-10 pr-4 py-3 text-xs text-[#2B1A14] placeholder-[#78665C]/60 focus:outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Phone Number & Occasion Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-semibold uppercase tracking-wider text-[#78665C] block mb-1.5 font-mono">
                          PHONE NUMBER *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-[#78665C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 62397 96319"
                            className="w-full bg-[#FFF8EE]/60 hover:bg-[#FFF8EE] focus:bg-white border border-[#E9D8C5] focus:border-[#5A2E1F] rounded-xl pl-10 pr-4 py-3 text-xs text-[#2B1A14] placeholder-[#78665C]/60 focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-semibold uppercase tracking-wider text-[#78665C] block mb-1.5 font-mono">
                          OCCASION / INQUIRY TYPE
                        </label>
                        <CustomDropdown
                          value={formData.occasion}
                          onChange={(val) => setFormData({ ...formData, occasion: val })}
                          options={[
                            'Wedding & Multi-Tier Cake',
                            'Private Tasting Consultation',
                            'Corporate & Bulk Gifting',
                            'Birthday & Anniversary Cake',
                            'Custom Bespoke Order'
                          ]}
                          icon={Calendar}
                          buttonClassName="py-3"
                        />
                      </div>
                    </div>

                    {/* Row 3: Special Requests & Flavours */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-[10px] font-semibold uppercase tracking-wider text-[#78665C] font-mono">
                          SPECIAL REQUESTS & FLAVOURS
                        </label>
                      </div>
                      <div className="relative">
                        <MessageSquare className="w-4 h-4 text-[#78665C] absolute left-3.5 top-3.5 pointer-events-none" />
                        <textarea
                          rows={4}
                          maxLength={500}
                          value={formData.message}
                          onChange={e => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your celebration date, guest count, and flavor preferences..."
                          className="w-full bg-[#FFF8EE]/60 hover:bg-[#FFF8EE] focus:bg-white border border-[#E9D8C5] focus:border-[#5A2E1F] rounded-xl pl-10 pr-4 pt-3 pb-7 text-xs text-[#2B1A14] placeholder-[#78665C]/60 focus:outline-none transition-all resize-none"
                        />
                        <span className="absolute right-3.5 bottom-2 text-[10px] font-mono text-[#78665C]/70">
                          {formData.message.length}/500
                        </span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#5A2E1F] text-[#FFF8EE] text-xs font-semibold uppercase tracking-wider hover:bg-[#3E1F16] transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-md active:scale-95 group"
                      >
                        <Send className="w-4 h-4 text-[#C9823A] group-hover:translate-x-0.5 transition-transform" />
                        <span>SUBMIT CONSULTATION REQUEST</span>
                        <ArrowRight className="w-4 h-4 text-[#FFF8EE] group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </form>
                )}

                {/* INTERACTIVE ATELIER LOCATOR MAP (Fills vacant gap and provides live map) */}
                <div className="mt-8 pt-6 border-t border-[#E9D8C5]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#C9823A]" />
                      <h4 className="font-serif text-sm font-bold text-[#2B1A14]">
                        Interactive Atelier Locator
                      </h4>
                    </div>

                    {/* Boutique Selector Tabs */}
                    <div className="flex items-center gap-1.5 p-1 bg-[#FFF8EE] rounded-xl border border-[#E9D8C5] self-start sm:self-auto">
                      {boutiques.map((b) => (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => { playSound('click'); setActiveMapId(b.id); }}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold transition-all cursor-pointer ${
                            activeMapId === b.id
                              ? 'bg-[#5A2E1F] text-[#FFF8EE] shadow-2xs'
                              : 'text-[#78665C] hover:text-[#2B1A14] hover:bg-[#F4E5D2]/60'
                          }`}
                        >
                          {b.shortCity}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Map Frame Container */}
                  <div className="relative rounded-2xl overflow-hidden border border-[#E9D8C5] shadow-xs bg-[#F4E5D2] h-44 sm:h-48 group">
                    <iframe
                      title={`Google Map for ${currentMapBoutique.name}`}
                      src={currentMapBoutique.embedUrl}
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />

                    {/* Overlay Info Strip */}
                    <div className="absolute bottom-2 left-2 right-2 p-2 sm:p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E9D8C5] shadow-md flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-serif text-xs font-bold text-[#2B1A14] truncate">
                          {currentMapBoutique.name}
                        </p>
                        <p className="text-[10px] text-[#78665C] truncate font-light">
                          {currentMapBoutique.address}
                        </p>
                      </div>
                      <a
                        href={currentMapBoutique.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-[#5A2E1F] hover:bg-[#3E1F16] text-[#FFF8EE] text-[10px] font-semibold uppercase tracking-wider transition-all shrink-0 flex items-center gap-1 shadow-2xs cursor-pointer"
                      >
                        <span>Open Map</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT COLUMN: OUR ATELIER BOUTIQUES & DIRECT WHATSAPP ORDERS */}
            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
              
              {/* Boutiques Header */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9823A] block font-mono">
                    GLOBAL PRESENCE
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#2B1A14] mt-0.5">
                    Our Atelier Boutiques
                  </h3>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4E5D2] text-[#5A2E1F] text-[10px] font-mono font-medium">
                  <Compass className="w-3.5 h-3.5 text-[#C9823A]" />
                  <span>3 Locations</span>
                </div>
              </div>

              {/* 3 Boutique Cards */}
              <div className="space-y-3.5">
                {boutiques.map((b) => (
                  <div 
                    key={b.id} 
                    className="p-4 rounded-2xl bg-[#FFF8EE]/40 hover:bg-white border border-[#E9D8C5] hover:border-[#C9823A]/80 shadow-[0_4px_15px_rgba(43,26,20,0.03)] hover:shadow-[0_12px_28px_rgba(90,46,31,0.09)] transition-all duration-300 flex flex-col sm:flex-row gap-4 items-stretch group relative overflow-hidden"
                  >
                    {/* Left Accent Color Stripe on Hover */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9823A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l" />

                    {/* Boutique Thumbnail Image */}
                    <div className="w-full sm:w-36 h-32 sm:h-auto rounded-xl overflow-hidden shrink-0 bg-[#F4E5D2] relative shadow-inner">
                      <img
                        src={b.image}
                        alt={b.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      />
                      {/* Live Badge */}
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#2B1A14]/75 backdrop-blur-md text-[#FFF8EE] text-[9px] font-mono flex items-center gap-1.5 border border-white/20 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5E8060] animate-pulse"></span>
                        <span>Open</span>
                      </div>
                    </div>

                    {/* Boutique Info */}
                    <div className="flex-1 flex flex-col justify-between space-y-2 w-full text-left">
                      
                      <div>
                        <span className="text-[9px] font-mono font-bold tracking-wider text-[#C9823A] uppercase block">
                          {b.city}
                        </span>
                        <h4 className="font-serif text-base font-bold text-[#2B1A14] group-hover:text-[#5A2E1F] transition-colors leading-tight mt-0.5">
                          {b.name}
                        </h4>
                        <div className="flex items-start gap-1.5 text-[11px] text-[#78665C] mt-1.5 leading-snug">
                          <MapPin className="w-3.5 h-3.5 text-[#C9823A] shrink-0 mt-0.5" />
                          <span className="font-light">{b.address}</span>
                        </div>
                      </div>

                      {/* Timings & Phone */}
                      <div className="space-y-1 pt-1 border-t border-[#E9D8C5]/60 text-[11px]">
                        <div className="flex items-center gap-1.5 text-[#78665C] font-light">
                          <Clock className="w-3 h-3 text-[#5A2E1F]/70 shrink-0" />
                          <span>{b.hours}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[#2B1A14] font-medium">
                          <Phone className="w-3 h-3 text-[#C9823A] shrink-0" />
                          <a href="tel:+916239796319" className="hover:text-[#5A2E1F] hover:underline transition-colors font-mono text-[11px]">
                            {b.phone}
                          </a>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-1 flex items-center justify-between">
                        <a
                          href={b.mapUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#E9D8C5] bg-white text-[#2B1A14] hover:bg-[#5A2E1F] hover:text-[#FFF8EE] hover:border-[#5A2E1F] text-[10px] font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-2xs group-hover:border-[#5A2E1F] active:scale-95"
                        >
                          <Navigation className="w-3 h-3 text-[#C9823A] group-hover:text-white transition-colors" />
                          <span>Get Directions</span>
                          <ArrowRight className="w-3 h-3 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

              {/* DIRECT WHATSAPP ORDERS BANNER CARD */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#2B1A14] via-[#3E1F16] to-[#2B1A14] text-[#FFF8EE] shadow-lg border border-[#C9823A]/30 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 relative overflow-hidden">
                
                {/* Subtle Gold Ambient Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9823A]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3.5 relative z-10">
                  <div className="w-11 h-11 rounded-full bg-[#5E8060] flex items-center justify-center text-white shrink-0 shadow-md ring-2 ring-[#5E8060]/30">
                    <MessageSquare className="w-5 h-5 fill-white text-white" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-[#C9823A] uppercase block">
                      DIRECT WHATSAPP CONCIERGE
                    </span>
                    <h4 className="font-serif text-sm font-bold text-white leading-tight">
                      Need a cake delivered within 3 hours?
                    </h4>
                    <p className="text-[11px] text-[#E9D8C5] font-light mt-0.5 leading-tight">
                      Message our express pastry concierge directly.
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/916239796319"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-full bg-[#FFF8EE] hover:bg-white text-[#2B1A14] hover:text-[#5A2E1F] font-bold text-[11px] flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-95 shrink-0 cursor-pointer text-center relative z-10 group"
                >
                  <div className="text-left">
                    <span className="block text-[8.5px] uppercase tracking-wider text-[#78665C] font-semibold font-mono">Chat on WhatsApp</span>
                    <span className="block text-[11px] font-bold text-[#2B1A14] font-mono">+91 62397 96319</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#5A2E1F] group-hover:translate-x-1 transition-transform" />
                </a>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* 3. BOTTOM 4-PILLAR FEATURE STRIP */}
      <div className="bg-[#F4E5D2]/70 border-t border-[#E9D8C5] py-5 sm:py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            
            {/* 1. Bespoke Creations */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFF8EE] flex items-center justify-center text-[#5A2E1F] shrink-0 border border-[#E9D8C5]">
                <Cake className="w-5 h-5 text-[#5A2E1F]" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-[#2B1A14] leading-tight">
                  Bespoke Creations
                </h4>
                <p className="text-[11px] text-[#78665C] font-light mt-0.5">
                  Made for your celebrations
                </p>
              </div>
            </div>

            {/* 2. Bulk & Corporate Orders */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFF8EE] flex items-center justify-center text-[#5A2E1F] shrink-0 border border-[#E9D8C5]">
                <Gift className="w-5 h-5 text-[#5A2E1F]" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-[#2B1A14] leading-tight">
                  Bulk & Corporate Orders
                </h4>
                <p className="text-[11px] text-[#78665C] font-light mt-0.5">
                  Beautifully packaged
                </p>
              </div>
            </div>

            {/* 3. Expert Consultation */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFF8EE] flex items-center justify-center text-[#5A2E1F] shrink-0 border border-[#E9D8C5]">
                <UtensilsCrossed className="w-5 h-5 text-[#5A2E1F]" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-[#2B1A14] leading-tight">
                  Expert Consultation
                </h4>
                <p className="text-[11px] text-[#78665C] font-light mt-0.5">
                  Personalised guidance
                </p>
              </div>
            </div>

            {/* 4. Visit Our Ateliers */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFF8EE] flex items-center justify-center text-[#5A2E1F] shrink-0 border border-[#E9D8C5]">
                <Bell className="w-5 h-5 text-[#5A2E1F]" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-[#2B1A14] leading-tight">
                  Visit Our Ateliers
                </h4>
                <p className="text-[11px] text-[#78665C] font-light mt-0.5">
                  Experience the taste in person
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
