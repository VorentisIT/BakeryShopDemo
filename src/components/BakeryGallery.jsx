import React from 'react';
import { ArrowRight, Camera } from 'lucide-react';
import { playSound } from '../utils/sound';

export default function BakeryGallery() {
  const galleryItems = [
    { id: 1, img: '/images/hero.jpg', title: 'Normandy Croissants' },
    { id: 2, img: '/images/chocolate_cake.jpg', title: 'Belgian Truffle Cake' },
    { id: 3, img: '/images/macarons.jpg', title: 'Pastel Macarons' },
    { id: 4, img: '/images/custom_cake.jpg', title: 'Floral Celebration Cake' },
    { id: 5, img: '/images/baker.jpg', title: 'Artisan Master Baker' }
  ];

  return (
    <section className="py-20 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E6DFD5]">
      
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C59B27] block">
            GALLERY
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#1A1612] mt-1">
            Fresh Off The Bakery Floor
          </h2>
        </div>
        <button
          onClick={() => playSound('click')}
          className="text-xs font-semibold uppercase tracking-widest text-[#1A1612] hover:text-[#C59B27] flex items-center gap-2 cursor-pointer"
        >
          <span>View Gallery</span>
          <ArrowRight className="w-4 h-4 text-[#C59B27]" />
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group relative min-w-[260px] sm:min-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E6DFD5] shrink-0 shadow-sm"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-serif text-white font-medium block">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
