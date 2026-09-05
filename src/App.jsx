import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import FeaturedSection from './components/FeaturedSection';
import SignatureCreations from './components/SignatureCreations';
import IngredientStory from './components/IngredientStory';
import CustomCakeSection from './components/CustomCakeSection';
import OurStory from './components/OurStory';
import TestimonialStatsSection from './components/TestimonialStatsSection';
import BakeryDiarySection from './components/BakeryDiarySection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

// Distinct Pages
import CakesPage from './pages/CakesPage';
import DessertsPage from './pages/DessertsPage';
import CookiesPage from './pages/CookiesPage';
import OurStoryPage from './pages/OurStoryPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import ServicesPage from './pages/ServicesPage';

// Modals
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import QuickViewModal from './components/QuickViewModal';
import SearchModal from './components/SearchModal';
import AccountModal from './components/AccountModal';
import VideoModal from './components/VideoModal';
import CustomCakeModal from './components/CustomCakeModal';

import { MENU_ITEMS } from './data/menuData';
import { playSound } from './utils/sound';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const [cart, setCart] = useState([
    {
      ...MENU_ITEMS[0], // Normandy Butter Croissants
      quantity: 2
    }
  ]);

  // Modal States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutTotal, setCheckoutTotal] = useState(0);
  const [checkoutDiscount, setCheckoutDiscount] = useState(0);
  const [selectedQuickViewItem, setSelectedQuickViewItem] = useState(null);
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isCustomCakeOpen, setIsCustomCakeOpen] = useState(false);
  const [selectedBlogArticleId, setSelectedBlogArticleId] = useState(null);

  const handleNavigate = (page) => {
    playSound('click');
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (item, quantity = 1) => {
    setCart(prevCart => {
      const existing = prevCart.find(i => i.id === item.id);
      if (existing) {
        return prevCart.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prevCart, { ...item, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      handleRemoveFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const handleRemoveFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleProceedCheckout = (total, discount) => {
    setCheckoutTotal(total);
    setCheckoutDiscount(discount);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const totalCartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1612] font-sans antialiased overflow-x-hidden selection:bg-[#C59B27] selection:text-white">
      
      {/* 1. STICKY HEADER - Always Visible with Active Link Underline */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={totalCartItemsCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSearchClick={() => setIsSearchOpen(true)}
        onAccountClick={() => setIsAccountOpen(true)}
        onOrderClick={() => setIsCustomCakeOpen(true)}
      />

      {/* 2. DYNAMIC PAGE VIEW */}
      <main>
        {currentPage === 'home' && (
          <>
            {/* HERO SECTION */}
            <Hero
              onExploreClick={() => handleNavigate('cakes')}
              onCustomCakeClick={() => setIsVideoOpen(true)}
            />

            {/* CATEGORY / DISCOVERY SECTION */}
            <CategorySection
              onViewAll={() => handleNavigate('cakes')}
              onSelectCategory={(catId) => {
                if (catId === 'cakes') handleNavigate('cakes');
                else if (catId === 'pastries' || catId === 'desserts') handleNavigate('desserts');
                else if (catId === 'cookies' || catId === 'brownies' || catId === 'breads') handleNavigate('cookies');
                else if (catId === 'custom') setIsCustomCakeOpen(true);
                else handleNavigate('cakes');
              }}
            />

            {/* FEATURED / CHEF'S PICK SECTION */}
            <FeaturedSection
              onAddToCart={handleAddToCart}
              onViewDetails={(item) => setSelectedQuickViewItem(item)}
            />

            {/* SIGNATURE CREATIONS */}
            <SignatureCreations
              onAddToCart={handleAddToCart}
              onViewAll={() => handleNavigate('cakes')}
              onViewDetails={(item) => setSelectedQuickViewItem(item)}
            />

            {/* PREMIUM INGREDIENT STORY */}
            <IngredientStory
              onExploreStory={() => handleNavigate('story')}
            />

            {/* CUSTOM CAKE BUILDER PREVIEW */}
            <CustomCakeSection
              onStartCustomizing={() => setIsCustomCakeOpen(true)}
            />

            {/* BAKERY STORY / CHEF SECTION */}
            <OurStory
              onOpenVideo={() => setIsVideoOpen(true)}
              onExploreStory={() => handleNavigate('story')}
            />

            {/* TESTIMONIAL + STATISTICS */}
            <TestimonialStatsSection />

            {/* BAKERY JOURNAL / BLOG */}
            <BakeryDiarySection
              onViewAll={() => {
                setSelectedBlogArticleId(null);
                handleNavigate('blog');
              }}
              onSelectPost={(post) => {
                setSelectedBlogArticleId(post.id);
                handleNavigate('blog');
              }}
            />

            {/* NEWSLETTER SECTION */}
            <NewsletterSection />
          </>
        )}

        {/* DEDICATED ARTISANAL CAKES PAGE */}
        {currentPage === 'cakes' && (
          <CakesPage
            onAddToCart={handleAddToCart}
            onViewDetails={(item) => setSelectedQuickViewItem(item)}
            onNavigateHome={() => handleNavigate('home')}
            onOpenCustomCake={() => setIsCustomCakeOpen(true)}
          />
        )}

        {/* DEDICATED DESSERTS & VIENNOISERIE PAGE */}
        {currentPage === 'desserts' && (
          <DessertsPage
            onAddToCart={handleAddToCart}
            onViewDetails={(item) => setSelectedQuickViewItem(item)}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {/* DEDICATED COOKIES & BREADS PAGE */}
        {currentPage === 'cookies' && (
          <CookiesPage
            onAddToCart={handleAddToCart}
            onViewDetails={(item) => setSelectedQuickViewItem(item)}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {/* DEDICATED OUR STORY & CHEF'S CRAFT PAGE */}
        {currentPage === 'story' && (
          <OurStoryPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenVideo={() => setIsVideoOpen(true)}
            onExploreCakes={() => handleNavigate('cakes')}
          />
        )}

        {/* DEDICATED BAKERY DIARY & RECIPES BLOG PAGE */}
        {currentPage === 'blog' && (
          <BlogPage
            onNavigateHome={() => handleNavigate('home')}
            selectedArticleId={selectedBlogArticleId}
            onClearSelectedArticle={() => setSelectedBlogArticleId(null)}
          />
        )}

        {/* DEDICATED BOUTIQUES & CONTACT PAGE */}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {/* DEDICATED TERMS & CONDITIONS PAGE */}
        {currentPage === 'terms' && (
          <TermsPage
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {/* DEDICATED PRIVACY POLICY PAGE */}
        {currentPage === 'privacy' && (
          <PrivacyPage
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {/* DEDICATED COOKIE POLICY & SETTINGS PAGE */}
        {currentPage === 'cookie-policy' && (
          <CookiePolicyPage
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {/* DEDICATED ATELIER SERVICES PAGES */}
        {(['services', 'wedding-cakes', 'dessert-catering', 'corporate-gifting', 'baking-workshops', 'chef-tasting'].includes(currentPage)) && (
          <ServicesPage
            activeServiceId={currentPage === 'services' ? 'wedding-cakes' : currentPage}
            onNavigate={(serviceId) => handleNavigate(serviceId)}
            onNavigateHome={() => handleNavigate('home')}
            onOpenCustomCake={() => setIsCustomCakeOpen(true)}
          />
        )}
      </main>

      {/* 3. FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCustomCake={() => setIsCustomCakeOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
      />

      {/* Slide-Over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedCheckout={handleProceedCheckout}
      />

      {/* 4-Step Luxury Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        totalAmount={checkoutTotal}
        discountAmount={checkoutDiscount}
        onClearCart={handleClearCart}
      />

      {/* Quick View Product Modal */}
      <QuickViewModal
        item={selectedQuickViewItem}
        onClose={() => setSelectedQuickViewItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onAddToCart={handleAddToCart}
        onViewDetails={(item) => setSelectedQuickViewItem(item)}
      />

      {/* User Account / VIP Rewards Modal */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

      {/* Chef Craft Video Documentary Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      {/* 3D Tier Custom Cake Builder Modal */}
      <CustomCakeModal
        isOpen={isCustomCakeOpen}
        onClose={() => setIsCustomCakeOpen(false)}
        onAddToCart={handleAddToCart}
      />

    </div>
  );
}
