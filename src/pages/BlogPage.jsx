import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Calendar, Clock, BookOpen, Share2, Sparkles, Check, ChevronRight, Bookmark, ChefHat } from 'lucide-react';
import { playSound } from '../utils/sound';

import hdBlogCroissant from '../assets/hd_blog_croissant.jpg';
import hdBlogChocolate from '../assets/hd_blog_chocolate.jpg';
import hdBlogTart from '../assets/hd_blog_tart.jpg';
import hdCatBreads from '../assets/hd_cat_breads.jpg';

export default function BlogPage({ onNavigateHome, selectedArticleId = null, onClearSelectedArticle }) {
  const articles = [
    {
      id: 1,
      tag: 'BAKING TIPS',
      title: '5 Secrets to the Perfect Croissant',
      subtitle: 'Mastering the elusive 27 micro-layers of French AOP butter and dough lamination.',
      author: 'Chef Laurent Vaneau',
      authorRole: 'Master Boulanger & Executive Chef',
      date: 'Aug 20, 2026',
      readTime: '6 min read',
      image: hdBlogCroissant,
      excerpt: "Mastering the elusive 27 micro-layers of French butter requires precise dough temperature and laminating discipline.",
      lead: "The croissant is the undisputed Everest of French Viennoiserie. To achieve an open honeycomb crumb with a crackling golden exterior, temperature control and dough resting discipline are paramount.",
      content: [
        "1. Butter Fat Percentage: Always use churned dry butter with at least 82% to 84% butterfat. Normal table butter contains excess water that turns into steam prematurely in the oven, rupturing the delicate dough membranes.",
        "2. The 16°C Rule: The butter sheet and the fermented dough must be at the exact same pliable temperature when you begin the lock-in. If the butter is too cold, it shatters into uneven chunks; if too warm, it melts directly into the flour.",
        "3. Three Single Turns: At Délice, we do three single letter folds with a mandatory 45-minute rest in the chiller between each turn to allow the gluten strands to relax and avoid shrinking.",
        "4. Proofing Without Melting: Proof your shaped croissants at 26°C to 28°C with 75% humidity. If your room exceeds 30°C, the butter pools at the bottom of the baking sheet.",
        "5. High Initial Heat: Bake at 200°C for the first 8 minutes to create instant oven spring, then reduce to 175°C to caramelize the crust evenly to deep amber."
      ],
      proTip: "Listen to the croissant as it cools on the wire rack. If you hear a faint crackling whisper (the 'chant' of the crust), you have created a true Parisian masterpiece."
    },
    {
      id: 2,
      tag: 'MASTER CLASS',
      title: 'The Art of Chocolate Tempering',
      subtitle: 'Why chocolate snaps, shines, and melts cleanly on the palate: Cocoa crystal chemistry explained.',
      author: 'Chef Jacqueline Morel',
      authorRole: 'Master Chocolatier',
      date: 'Aug 12, 2026',
      readTime: '8 min read',
      image: hdBlogChocolate,
      excerpt: "Why chocolate snaps, shines, and melts cleanly on the palate: An intimate look into cocoa crystal chemistry.",
      lead: "Tempering chocolate is essentially coaxing cocoa butter molecules into Form V beta crystals—the only crystal structure that yields a high-gloss mirror finish and a crisp, audible snap.",
      content: [
        "When chocolate is improperly melted, it separates into dull, greyish streaks known as fat bloom. With the traditional seeding method, we heat chocolate to 45°C, cool it down to 28°C with un-melted tempered seed callets, and gently bring it back to working temperature at 31°C.",
        "The result is a silky, molten texture that enrobes cakes with mirror-like brilliance and contracts cleanly from silicon moulds.",
        "Always maintain your studio environment between 19°C and 21°C with low humidity to preserve the crystallization integrity."
      ],
      proTip: "Never allow even a single droplet of water near melting chocolate; the moisture instantly dissolves the sugar crystals and causes the chocolate to seize into a grainy paste."
    },
    {
      id: 3,
      tag: 'RECIPES',
      title: 'Seasonal Fruits, Endless Possibilities',
      subtitle: 'Balancing acidity, sweetness, and crispness in handcrafted summer berry tarts.',
      author: 'Chef Antoine Delacroix',
      authorRole: 'Head Patissier',
      date: 'Jul 28, 2026',
      readTime: '5 min read',
      image: hdBlogTart,
      excerpt: "How our pastry kitchen balances natural berry acidity with sweet Tahitian vanilla pastry cream.",
      lead: "A great tart is a dialogue between temperature, crunch, and acidity. We explore the harmonious interplay of sweet almond crust and farm-fresh berries.",
      content: [
        "The foundation begins with a pâte sablée—a sweet shortcrust dough where the butter is rubbed into flour to coat each grain in fat, preventing gluten development for maximum crumbly tenderness.",
        "Blind bake the shells to golden perfection with ceramic baking beads to prevent puffing.",
        "We layer velvety diplomat cream (crème pâtissière enriched with whipped cream) inside, topped with fresh raspberries and a light brush of warm apricot glaze for salon shine."
      ],
      proTip: "Always glaze fresh berries while the fruit is dry; any surface condensation will prevent the glaze from adhering evenly."
    },
    {
      id: 4,
      tag: 'HERITAGE',
      title: 'The Soul of Wild Yeast Sourdough',
      subtitle: 'Nurturing our 12-year-old sourdough starter, affectionately named \'Mireille\'.',
      author: 'Chef Laurent Vaneau',
      authorRole: 'Master Boulanger',
      date: 'Jul 15, 2026',
      readTime: '7 min read',
      image: hdCatBreads,
      excerpt: "Behind the scenes with our 12-year-old French levain that gives our country boules their signature flavor.",
      lead: "Commercial yeast produces fast volume, but wild fermentation builds complex organic acids, deep aroma, and effortless digestibility.",
      content: [
        "Mireille, our heritage mother starter, is refreshed twice daily with stoneground stone-milled rye flour and pure filtered water at 24°C.",
        "The slow 36-hour cold autolyse and bulk fermentation allows natural lactic and acetic acids to develop without ever turning sharp or harsh.",
        "Baked on heavy refractory stone deck ovens with direct steam injection, the crust blossoms with delicate blistering and caramelized ear."
      ],
      proTip: "Store your bread cut-side down on a wooden board at room temperature. Never refrigerate artisanal bread as it accelerates starch retrogradation."
    }
  ];

  const [selectedArticle, setSelectedArticle] = useState(
    selectedArticleId ? articles.find(a => a.id === selectedArticleId) || null : null
  );

  useEffect(() => {
    if (selectedArticleId) {
      const art = articles.find(a => a.id === selectedArticleId);
      if (art) setSelectedArticle(art);
    }
  }, [selectedArticleId]);

  const handleSelectArticle = (art) => {
    playSound('click');
    setSelectedArticle(art);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    playSound('click');
    setSelectedArticle(null);
    if (onClearSelectedArticle) onClearSelectedArticle();
  };

  return (
    <div className="pt-24 pb-20 bg-[#FFF8EE] min-h-screen text-[#2B1A14]">

      {/* 1. SINGLE ARTICLE DETAIL VIEW */}
      {selectedArticle ? (
        <motion.article 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
        >
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={handleBackToList}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#78665C] hover:text-[#2B1A14] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </button>

            <span className="text-xs text-[#C9823A] font-mono uppercase tracking-widest">
              Bakery Diary / {selectedArticle.tag}
            </span>
          </div>

          {/* Article Header */}
          <div className="space-y-4 mb-8">
            <span className="px-3.5 py-1 rounded-full bg-[#5A2E1F] text-[#FFF8EE] text-[10px] font-bold uppercase tracking-widest inline-block shadow-xs">
              {selectedArticle.tag}
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#2B1A14] leading-[1.15]">
              {selectedArticle.title}
            </h1>

            <p className="text-sm sm:text-lg text-[#78665C] font-light leading-relaxed">
              {selectedArticle.subtitle}
            </p>

            {/* Author & Meta Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E9D8C5] text-xs text-[#78665C]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#F4E5D2] border border-[#E9D8C5] flex items-center justify-center text-[#5A2E1F]">
                  <ChefHat className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-serif font-bold text-[#2B1A14]">{selectedArticle.author}</div>
                  <div className="text-[10px] text-[#78665C]">{selectedArticle.authorRole}</div>
                </div>
              </div>

              <span className="text-[#E9D8C5]">•</span>

              <div className="flex items-center gap-1.5 font-mono">
                <Calendar className="w-3.5 h-3.5 text-[#C9823A]" />
                <span>{selectedArticle.date}</span>
              </div>

              <span className="text-[#E9D8C5]">•</span>

              <div className="flex items-center gap-1.5 font-mono">
                <Clock className="w-3.5 h-3.5 text-[#C9823A]" />
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Hero Banner */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-lg border border-[#E9D8C5] mb-10">
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body Typography */}
          <div className="space-y-6 text-[#2B1A14] text-sm sm:text-base leading-relaxed font-light">
            <p className="text-base sm:text-xl text-[#2B1A14] font-serif italic border-l-2 border-[#C9823A] pl-4 sm:pl-6 my-6">
              "{selectedArticle.lead}"
            </p>

            {selectedArticle.content.map((paragraph, index) => (
              <div key={index} className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E9D8C5] shadow-xs">
                <p className="text-sm sm:text-base leading-relaxed">{paragraph}</p>
              </div>
            ))}

            {/* Pro Tip Callout Box */}
            {selectedArticle.proTip && (
              <div className="mt-8 p-6 rounded-2xl bg-[#F4E5D2] border border-[#E9D8C5] shadow-xs relative overflow-hidden">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#5A2E1F] text-[#FFF8EE] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 text-[#C9823A]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#2B1A14] uppercase tracking-wider mb-1">
                      Chef's Golden Rule
                    </h4>
                    <p className="text-xs sm:text-sm text-[#78665C] font-light leading-relaxed">
                      {selectedArticle.proTip}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Article Footer & Return Actions */}
          <div className="mt-12 pt-8 border-t border-[#E9D8C5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handleBackToList}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#5A2E1F] text-[#FFF8EE] hover:bg-[#3E1F16] transition-all font-medium text-xs tracking-wider inline-flex items-center justify-center cursor-pointer shadow-md active:scale-95"
            >
              <span>Back to Bakery Diary</span>
            </button>

            <button
              onClick={() => { playSound('click'); onNavigateHome(); }}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-[#2B1A14] border border-[#E9D8C5] hover:bg-[#5A2E1F] hover:text-white hover:border-[#5A2E1F] transition-all font-medium text-xs tracking-wider inline-flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
            >
              <span>Explore Bakery Home</span>
            </button>
          </div>

          {/* Read Next Section */}
          <div className="mt-16 pt-10 border-t border-[#E9D8C5]">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#2B1A14] mb-6">
              More Stories from the Bakery Diary
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {articles.filter(a => a.id !== selectedArticle.id).slice(0, 3).map((art) => (
                <div
                  key={art.id}
                  onClick={() => handleSelectArticle(art)}
                  className="bg-white rounded-2xl p-3 border border-[#E9D8C5] hover:border-[#5A2E1F]/40 shadow-xs hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-[#F4E5D2]">
                    <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-[9px] font-bold text-[#C9823A] uppercase tracking-wider block mb-1">
                    {art.tag}
                  </span>
                  <h4 className="font-serif text-sm font-semibold text-[#2B1A14] group-hover:text-[#5A2E1F] line-clamp-2">
                    {art.title}
                  </h4>
                  <div className="mt-2 flex items-center text-[10px] text-[#78665C] font-mono">
                    <span>{art.date}</span>
                    <span className="mx-1.5">•</span>
                    <span>{art.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </motion.article>
      ) : (

        /* 2. FULL BLOG CATALOG VIEW */
        <>
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
                Home / Bakery Diary
              </span>
            </div>

            <span className="font-script text-3xl text-[#C9823A] block">
              Stories, Recipes & Craft
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#2B1A14] mt-1">
              From Our Bakery Diary
            </h1>
            <p className="text-xs sm:text-sm text-[#78665C] font-light mt-2 max-w-xl">
              Deep dives into French pastry techniques, ingredient sourcing journeys, and home baking recipes from our Master Chefs.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((art) => (
                <motion.div
                  key={art.id}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-4 border border-[#E9D8C5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                  onClick={() => handleSelectArticle(art)}
                >
                  <div>
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#F4E5D2] mb-4">
                      <span className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-[#5A2E1F] text-[#FFF8EE] text-[9px] font-semibold uppercase tracking-wider">
                        {art.tag}
                      </span>

                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="flex items-center gap-3 text-[11px] font-mono text-[#78665C] mb-2">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {art.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {art.readTime}</span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[#2B1A14] group-hover:text-[#5A2E1F] transition-colors leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-xs text-[#78665C] font-light mt-2 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E9D8C5] mt-4 flex items-center justify-between text-xs font-semibold text-[#2B1A14] group-hover:text-[#5A2E1F]">
                    <span>Read Article</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </>
      )}

    </div>
  );
}
