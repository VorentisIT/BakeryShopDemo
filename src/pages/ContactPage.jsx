import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowLeft, MessageSquare } from 'lucide-react';
import { playSound } from '../utils/sound';

export default function ContactPage({ onNavigateHome }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: 'Celebration Cake',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    playSound('celebrate');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', occasion: 'Celebration Cake', message: '' });
    }, 5000);
  };

  const boutiques = [
    {
      city: 'Flagship Atelier Paris',
      address: '18 Rue de la Paix, 75002 Paris, France',
      hours: 'Tue - Sun: 7:30 AM - 7:30 PM',
      phone: '+33 1 42 68 00 20'
    },
    {
      city: 'Boutique Mayfair London',
      address: '42 Mount Street, Mayfair, London W1K 2RN',
      hours: 'Mon - Sat: 8:00 AM - 8:00 PM',
      phone: '+44 20 7499 1234'
    },
    {
      city: 'Boutique Bandra Mumbai',
      address: 'Pali Hill, Nargis Dutt Road, Bandra West, Mumbai 400050',
      hours: 'Everyday: 9:00 AM - 11:00 PM',
      phone: '+91 98200 12345'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#FFF8EE] min-h-screen text-[#2B1A14]">
      
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 border-b border-[#E9D8C5]">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => { playSound('click'); onNavigateHome(); }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#78665C] hover:text-[#2B1A14] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <span className="text-xs text-[#C9823A] font-mono uppercase tracking-widest">
            Home / Boutiques & Contact
          </span>
        </div>

        <span className="font-script text-3xl text-[#C9823A] block">
          Visit or Connect
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#2B1A14] mt-1">
          Boutiques & Tasting Consultations
        </h1>
        <p className="text-xs sm:text-sm text-[#78665C] font-light mt-2 max-w-xl">
          Book a bespoke wedding cake tasting, place bulk gift box orders, or visit our atelier patisseries in person.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Consultation Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E9D8C5] shadow-xs">
            <h2 className="font-serif text-2xl font-semibold text-[#2B1A14] mb-1">
              Book a Tasting or Send an Inquiry
            </h2>
            <p className="text-xs text-[#78665C] font-light mb-6">
              Our Head Concierge responds to all consultation inquiries within 2 hours.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-[#F4E5D2] border border-[#5E8060] text-center space-y-3"
              >
                <CheckCircle2 className="w-10 h-10 text-[#5E8060] mx-auto" />
                <h3 className="font-serif text-xl font-semibold text-[#2B1A14]">Inquiry Received!</h3>
                <p className="text-xs text-[#78665C] max-w-md mx-auto">
                  Thank you, {formData.name}. Our Master Concierge has received your consultation request and will reach out to you shortly via phone & email.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#78665C] block mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-[#FFF8EE] border border-[#E9D8C5] rounded-xl px-4 py-2.5 text-xs text-[#2B1A14] focus:outline-none focus:border-[#5A2E1F]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#78665C] block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@example.com"
                      className="w-full bg-[#FFF8EE] border border-[#E9D8C5] rounded-xl px-4 py-2.5 text-xs text-[#2B1A14] focus:outline-none focus:border-[#5A2E1F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#78665C] block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98200 12345"
                      className="w-full bg-[#FFF8EE] border border-[#E9D8C5] rounded-xl px-4 py-2.5 text-xs text-[#2B1A14] focus:outline-none focus:border-[#5A2E1F]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#78665C] block mb-1">
                      Occasion / Inquiry Type
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={e => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full bg-[#FFF8EE] border border-[#E9D8C5] rounded-xl px-4 py-2.5 text-xs text-[#2B1A14] focus:outline-none focus:border-[#5A2E1F] cursor-pointer"
                    >
                      <option value="Celebration Cake">Wedding & Multi-Tier Cake</option>
                      <option value="Birthday Cake">Birthday & Anniversary Cake</option>
                      <option value="Corporate Gifting">Corporate Bulk Gifting</option>
                      <option value="General Inquiry">General Atelier Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#78665C] block mb-1">
                    Special Requests & Flavours
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your celebration date, guest count, and flavor preferences..."
                    className="w-full bg-[#FFF8EE] border border-[#E9D8C5] rounded-xl p-4 text-xs text-[#2B1A14] focus:outline-none focus:border-[#5A2E1F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#5A2E1F] text-[#FFF8EE] text-xs font-medium uppercase tracking-wider hover:bg-[#3E1F16] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Consultation Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Boutiques Locations */}
          <div className="lg:col-span-5 space-y-5">
            <h2 className="font-serif text-xl font-semibold text-[#2B1A14]">
              Our Atelier Boutiques
            </h2>

            {boutiques.map((b, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-[#E9D8C5] shadow-xs space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C9823A]" />
                  <h3 className="font-serif text-base font-semibold text-[#2B1A14]">{b.city}</h3>
                </div>
                <p className="text-xs text-[#78665C] font-light pl-6">{b.address}</p>
                <div className="flex items-center gap-2 text-xs font-mono text-[#78665C] pl-6 pt-1">
                  <Clock className="w-3.5 h-3.5 text-[#C9823A]" />
                  <span>{b.hours}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#2B1A14] font-semibold pl-6">
                  <Phone className="w-3.5 h-3.5 text-[#C9823A]" />
                  <span>{b.phone}</span>
                </div>
              </div>
            ))}

            <div className="p-5 rounded-2xl bg-[#5A2E1F] text-[#FFF8EE] shadow-md space-y-2 border border-[#3E1F16]">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C9823A] font-semibold">Direct WhatsApp Orders</span>
              <p className="text-xs text-[#F4E5D2] font-light">
                Need a cake delivered within 3 hours? Message our express pastry concierge directly.
              </p>
              <a
                href="https://wa.me/919820012345"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFF8EE] hover:text-[#C9823A] hover:underline pt-1"
              >
                <MessageSquare className="w-4 h-4 text-[#C9823A]" />
                <span>Chat on WhatsApp: +91 98200 12345</span>
              </a>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
