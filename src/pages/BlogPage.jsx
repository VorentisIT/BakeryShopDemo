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
      excerpt: "How our pastry chefs balance acidity, sweetness, and crispness in handcrafted summer berry tarts.",
      lead: "Summer berries bring an essential burst of brightness to rich vanilla bean pastry cream. We hand-select raspberries and wild blackberries picked at peak morning ripeness.",
      content: [
        "A blind-baked sweet shortcrust (Pâte Sablée) provides a buttery, crumbly base that holds its crunch against luscious fillings.",
        "We infuse the pastry cream with whole Tahitian vanilla beans and folded-in white chocolate ganache for structure.",
        "A delicate brush of warm apricot glaze seals each berry, locking in its natural hydration while imparting an artisan patisserie sheen."
      ],
      proTip: "Assemble fresh fruit tarts no more than 3 hours before serving to maintain the contrast between the crisp tart shell and the velvety cream."
    },
    {
      id: 4,
      tag: 'FERMENTATION',
      title: 'Keeping Your Wild Sourdough Levain Alive',
      subtitle: 'A guide to feeding ratios, hydration percentages, and unlocking deep aromatic notes in artisan bread.',
      author: 'Chef Laurent Vaneau',
      authorRole: 'Master Boulanger',
      date: 'Jul 15, 2026',
      readTime: '7 min read',
      image: hdCatBreads,
      excerpt: "A beginner's guide to feeding schedules, hydration percentages, and unlocking deep sour notes in artisan bread.",
      lead: "Our bakery's mother starter has been fed every single morning since 2018. It is a living ecosystem of wild yeasts and lactobacilli that produces gentle acidity and exceptional digestibility.",
      content: [
        "Maintaining a 1:2:2 feeding ratio (starter : stoneground flour : water) keeps the starter vigorously active without developing harsh, throat-burning acetic acid.",
        "Use unchlorinated water at 24°C and high-protein unbleached flour to nourish the microbial colony.",
        "When your starter floats in a bowl of room-temperature water and smells pleasantly of green apples and yogurt, it is ready for your dough batch."
      ],
      proTip: "If you bake once a week, store your fed starter in the chiller. Take it out 24 hours prior and feed twice before mixing your dough."
    }
  ];

  const [selectedArticle, setSelectedArticle] = useState(null);
  const [copied, setCopied] = useState(false);

  // Synchronize with external selected article ID
  useEffect(() => {
    if (selectedArticleId) {
      const found = articles.find(a => a.id === Number(selectedArticleId));
      if (found) {
        setSelectedArticle(found);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    playSound('click');
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="pt-24 pb-20 bg-[#FAF8F5] min-h-screen text-[#1A1612]">
      
      {/* 1. DEDICATED ARTICLE TITLE PAGE VIEW */}
      {selectedArticle ? (
        <motion.article 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
        >
          {/* Breadcrumb & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E6DFD5] mb-8">
            <div className="flex items-center gap-3">
              <button
                onClick={handleBackToList}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1A1612] hover:text-[#C59B27] transition-colors cursor-pointer bg-white px-3.5 py-2 rounded-full border border-[#E6DFD5] shadow-xs active:scale-95"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Articles</span>
              </button>

              <button
                onClick={() => { playSound('click'); onNavigateHome(); }}
                className="text-xs text-[#6B5744] hover:text-[#1A1612] transition-colors hidden sm:inline"
              >
                Home
              </button>
              <span className="text-[#D5C9BC] hidden sm:inline">/</span>
              <span className="text-xs text-[#6B5744] hidden sm:inline">Bakery Diary</span>
              <span className="text-[#D5C9BC] hidden sm:inline">/</span>
              <span className="text-xs text-[#C59B27] font-serif italic truncate max-w-[200px] hidden sm:inline">
                {selectedArticle.title}
              </span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-white border border-[#E6DFD5] hover:border-[#181310] transition-colors cursor-pointer shadow-xs active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#556B2F]" />
                  <span className="text-[#556B2F]">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Share Article</span>
                </>
              )}
            </button>
          </div>

          {/* Article Header & Title */}
          <div className="space-y-4 text-center sm:text-left mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181310] text-[#FAF8F5] text-[10px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3 text-[#D6A84F]" />
              <span>{selectedArticle.tag}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#1A1612] leading-[1.15]">
              {selectedArticle.title}
            </h1>

            <p className="text-xs sm:text-sm text-[#6B5744] font-light leading-relaxed max-w-2xl">
              {selectedArticle.subtitle}
            </p>

            {/* Author & Timestamp Bar */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-4 border-t border-[#E6DFD5] text-xs text-[#6B5744]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#EFE8DD] border border-[#D5C9BC] flex items-center justify-center text-[#8C6D23]">
                  <ChefHat className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-serif font-bold text-[#1A1612]">{selectedArticle.author}</div>
                  <div className="text-[10px] text-[#8C7A6B]">{selectedArticle.authorRole}</div>
                </div>
              </div>

              <span className="text-[#D5C9BC]">•</span>

              <div className="flex items-center gap-1.5 font-mono">
                <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>{selectedArticle.date}</span>
              </div>

              <span className="text-[#D5C9BC]">•</span>

              <div className="flex items-center gap-1.5 font-mono">
                <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Hero Banner */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-lg border border-[#E6DFD5] mb-10">
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body Typography */}
          <div className="space-y-6 text-[#2E241E] text-sm sm:text-base leading-relaxed font-light">
            <p className="text-base sm:text-xl text-[#1A1612] font-serif italic border-l-2 border-[#C59B27] pl-4 sm:pl-6 my-6">
              "{selectedArticle.lead}"
            </p>

            {selectedArticle.content.map((paragraph, index) => (
              <div key={index} className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E6DFD5] shadow-xs">
                <p className="text-sm sm:text-base leading-relaxed">{paragraph}</p>
              </div>
            ))}

            {/* Pro Tip Callout Box */}
            {selectedArticle.proTip && (
              <div className="mt-8 p-6 rounded-2xl bg-[#F7F1E6] border border-[#D6A84F]/40 shadow-xs relative overflow-hidden">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-[#181310] text-[#D6A84F] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1A1612] uppercase tracking-wider mb-1">
                      Chef's Golden Rule
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4A3928] font-light leading-relaxed">
                      {selectedArticle.proTip}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Article Footer & Return Actions */}
          <div className="mt-12 pt-8 border-t border-[#E6DFD5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handleBackToList}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#181310] text-[#FAF8F5] hover:bg-[#C59B27] transition-all font-medium text-xs tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Bakery Diary</span>
            </button>

            <button
              onClick={() => { playSound('click'); onNavigateHome(); }}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-[#1A1612] border border-[#E6DFD5] hover:border-[#1A1612] transition-all font-medium text-xs tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-95"
            >
              <span>Explore Bakery Home</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Read Next Section */}
          <div className="mt-16 pt-10 border-t border-[#E6DFD5]">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1A1612] mb-6">
              More Stories from the Bakery Diary
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {articles.filter(a => a.id !== selectedArticle.id).slice(0, 3).map((art) => (
                <div
                  key={art.id}
                  onClick={() => handleSelectArticle(art)}
                  className="bg-white rounded-2xl p-3 border border-[#E6DFD5] hover:border-[#C59B27] shadow-xs hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-[#FAF8F5]">
                    <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-[9px] font-bold text-[#C59B27] uppercase tracking-wider block mb-1">
                    {art.tag}
                  </span>
                  <h4 className="font-serif text-sm font-semibold text-[#1A1612] group-hover:text-[#C59B27] line-clamp-2">
                    {art.title}
                  </h4>
                  <div className="mt-2 flex items-center text-[10px] text-[#8C7A6B] font-mono">
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 border-b border-[#E6DFD5]">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => { playSound('click'); onNavigateHome(); }}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6B5744] hover:text-[#1A1612] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </button>

              <span className="text-xs text-[#C59B27] font-mono uppercase tracking-widest">
                Home / Bakery Diary
              </span>
            </div>

            <span className="font-script text-3xl text-[#C59B27] block">
              Stories, Recipes & Craft
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#1A1612] mt-1">
              From Our Bakery Diary
            </h1>
            <p className="text-xs sm:text-sm text-[#6B5744] font-light mt-2 max-w-xl">
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
                  className="bg-white rounded-3xl p-4 border border-[#E6DFD5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                  onClick={() => handleSelectArticle(art)}
                >
                  <div>
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#F2ECE4] mb-4">
                      <span className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-[#181310] text-[#FAF8F5] text-[9px] font-semibold uppercase tracking-wider">
                        {art.tag}
                      </span>

                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="flex items-center gap-3 text-[11px] font-mono text-[#6B5744] mb-2">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {art.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {art.readTime}</span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[#1A1612] group-hover:text-[#C59B27] transition-colors leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-xs text-[#6B5744] font-light mt-2 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F2ECE4] mt-4 flex items-center justify-between text-xs font-semibold text-[#1A1612] group-hover:text-[#C59B27]">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
