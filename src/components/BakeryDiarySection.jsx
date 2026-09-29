import React from 'react';
import { motion } from 'framer-motion';
import { playSound } from '../utils/sound';

import exactBlogCroissant from '../assets/hd_blog_croissant.jpg';
import exactBlogChocolate from '../assets/hd_blog_chocolate.jpg';
import exactBlogTart from '../assets/hd_blog_tart.jpg';

export default function BakeryDiarySection({ onViewAll = () => {}, onSelectPost = () => {} }) {
  const posts = [
    {
      id: 1,
      badge: 'BAKING TIPS',
      title: '5 Secrets to the Perfect Croissant',
      date: 'Aug 20, 2026',
      image: exactBlogCroissant
    },
    {
      id: 2,
      badge: 'OUR STORY',
      title: 'The Art of Chocolate',
      date: 'Aug 12, 2026',
      image: exactBlogChocolate
    },
    {
      id: 3,
      badge: 'RECIPES',
      title: 'Seasonal Fruits, Endless Possibilities',
      date: 'Jul 28, 2026',
      image: exactBlogTart
    }
  ];

  return (
    <section id="blog" className="py-16 sm:py-20 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FFF8EE]">
      
      {/* Header matching reference */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 text-center sm:text-left">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2B1A14]">
            From Our Bakery Diary
          </h2>
          <p className="text-xs sm:text-sm text-[#C9823A] font-script text-xl mt-0.5">
            Stories, Recipes & Inspiration
          </p>
        </div>

        <button
          onClick={() => { playSound('click'); onViewAll(); }}
          className="text-xs font-semibold uppercase tracking-wider text-[#2B1A14] hover:text-[#C9823A] transition-colors cursor-pointer active:scale-95"
        >
          <span>View All Posts</span>
        </button>
      </div>

      {/* 3 Cards Grid matching reference */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {posts.map((post, idx) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            viewport={{ once: true }}
            className="group rounded-2xl bg-[#FFFFFF] p-3 sm:p-4 border border-[#E9D8C5] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer active:scale-[0.98]"
            onClick={() => { playSound('click'); onSelectPost(post); }}
          >
            {/* Image Box with Rounded Pill Badge on Lower Left */}
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-3 bg-[#F4E5D2]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-2.5 left-2.5 px-3 py-0.5 rounded-full bg-white text-[#5A2E1F] text-[9px] font-bold uppercase tracking-wider shadow-sm">
                {post.badge}
              </div>
            </div>

            {/* Content Details matching reference */}
            <div className="space-y-1 px-1">
              <h3 className="font-serif text-sm sm:text-base font-medium text-[#2B1A14] group-hover:text-[#C9823A] transition-colors leading-snug">
                {post.title}
              </h3>
              <span className="text-[10px] text-[#78665C] font-sans block">
                {post.date}
              </span>
            </div>

          </motion.article>
        ))}
      </div>

    </section>
  );
}
