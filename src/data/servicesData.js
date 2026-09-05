import serviceWeddingHero from '../assets/service_wedding_hero.jpg';
import serviceWeddingDetail from '../assets/service_wedding_detail.jpg';
import serviceDessertHero from '../assets/service_dessert_hero.jpg';
import serviceDessertDetail from '../assets/service_dessert_detail.jpg';
import serviceCorporateHero from '../assets/service_corporate_hero.jpg';
import serviceWorkshopHero from '../assets/service_workshop_hero.jpg';
import serviceTastingHero from '../assets/service_tasting_hero.jpg';

import hdCustomCake from '../assets/hd_custom_cake.jpg';
import hdCatPastries from '../assets/hd_cat_pastries.jpg';
import hdCatDesserts from '../assets/hd_cat_desserts.jpg';
import hdCatBrownies from '../assets/hd_cat_brownies.jpg';
import hdCatCookies from '../assets/hd_cat_cookies.jpg';
import hdCatBreads from '../assets/hd_cat_breads.jpg';
import hdChefCraft from '../assets/hd_chef_craft.jpg';
import hdFeaturedCake from '../assets/hd_featured_cake.jpg';
import hdBlogCroissant from '../assets/hd_blog_croissant.jpg';
import hdBlogChocolate from '../assets/hd_blog_chocolate.jpg';
import hdBlogTart from '../assets/hd_blog_tart.jpg';
import hdNewsMacarons from '../assets/hd_news_macarons.jpg';

export const SERVICES_DATA = [
  {
    id: 'wedding-cakes',
    name: 'Bespoke Wedding & Celebration Cakes',
    shortTitle: 'Wedding & Celebration Cakes',
    badge: 'BESPOKE ATELIER',
    tagline: 'Architectural grandeur and bespoke flavour profiles crafted for your life’s most momentous milestones.',
    heroImage: serviceWeddingHero,
    lead: 'Every wedding cake we design is a one-of-a-kind culinary sculpture. From sugar petal cascades and gold-drip tiers to single-origin chocolate Ganache fillings, our master cake artisans work intimately with you to turn your vision into an unforgettable centerpiece.',
    gallery: [
      {
        id: 'w1',
        image: serviceWeddingHero,
        title: 'Château Grand Showpiece',
        subtitle: '5-Tier Architectural Centerpiece in French Conservatory',
        tag: 'Featured Staging'
      },
      {
        id: 'w2',
        image: serviceWeddingDetail,
        title: 'Handcrafted Sugar Botanicals',
        subtitle: '24K Edible Gold Leaf with Petal-by-Petal Peonies',
        tag: 'Artisan Detail'
      },
      {
        id: 'w3',
        image: hdCustomCake,
        title: 'Ivory Lace & Buttercream',
        subtitle: 'Velvety Textured Frosting with Garden Floral Garland',
        tag: 'Boutique Design'
      },
      {
        id: 'w4',
        image: hdFeaturedCake,
        title: 'Midnight Chocolate Tier',
        subtitle: 'Dark Belgian Ganache with Candied Roasted Walnuts',
        tag: 'Signature Flavour'
      }
    ],
    features: [
      'Private 6-flavour tasting box delivered or hosted at our boutique atelier',
      'Architectural 3D tier sketch and color palette consultation with our Head Chef',
      'Handcrafted sugar florals, organic edible blossoms, and 24K edible gold leaves',
      'Climate-controlled delivery van transit and professional white-glove on-site assembly'
    ],
    process: [
      { step: '01', title: 'Flavour Consultation', desc: 'Taste 6 signature cake sponges, curd compotes, and ganaches in our private salon.' },
      { step: '02', title: 'Artistic Blueprint', desc: 'Our head chef illustrates an architectural 3D tier diagram matched to your florals.' },
      { step: '03', title: 'White-Glove Staging', desc: 'Refrigerated direct delivery and on-site assembly at your venue 2 hours prior.' }
    ],
    packages: [
      {
        name: 'The Petit Atelier',
        servings: '30 - 50 Guests',
        price: 'From ₹12,500',
        highlights: ['2 Grand Tiers', '2 Custom Flavours', 'Delicate Buttercream Texture', 'Atelier Tasting Box Included']
      },
      {
        name: 'The Parisian Grand',
        servings: '60 - 120 Guests',
        price: 'From ₹24,000',
        highlights: ['3 to 4 Architectural Tiers', '3 Custom Flavours', 'Sugar Blossom Accents', 'Complimentary On-Site Staging']
      },
      {
        name: 'Haute Pâtisserie Couture',
        servings: '150+ Guests',
        price: 'From ₹42,000',
        highlights: ['5+ Showpiece Tiers', 'Full Custom Fondant & 24K Gold Leaf', 'Bespoke Flavour Development', 'Chef-Supervised Setup']
      }
    ],
    faqs: [
      { q: 'How far in advance should we reserve our date?', a: 'We recommend booking 2 to 4 months in advance, especially for wedding seasons between October and March.' },
      { q: 'Can we schedule a private flavour tasting?', a: 'Yes! We host private champagne and cake tasting sessions every weekend at our flagship boutique.' }
    ]
  },
  {
    id: 'dessert-catering',
    name: 'Artisanal Event Pastry Catering',
    shortTitle: 'Event Pastry Catering',
    badge: 'LUXURY TABLES',
    tagline: 'Lavish dessert grazing spreads, French viennoiserie displays, and interactive live pastry stations.',
    heroImage: serviceDessertHero,
    lead: 'Transform your celebrations, cocktail receptions, and high-tea gatherings into a Parisian promenade. We design opulent dessert tables filled with miniature fruit tartlets, crisp mille-feuille bites, choux au craquelin, and buttery croissants.',
    gallery: [
      {
        id: 'd1',
        image: serviceDessertHero,
        title: 'Grand Parisian Gala Buffet',
        subtitle: 'Tiered Brass & Marble Stands with Crystal Cloches',
        tag: 'Gala Staging'
      },
      {
        id: 'd2',
        image: serviceDessertDetail,
        title: 'Royal Macaron Tier Stand',
        subtitle: 'Pistachio, Wild Raspberry, & Lavender Vanilla Flavours',
        tag: 'High-Tea Detail'
      },
      {
        id: 'd3',
        image: hdCatPastries,
        title: 'Artisan Viennoiserie Display',
        subtitle: 'Flaky Laminated Brioches, Cruffins, and Pains au Chocolat',
        tag: 'Morning Grazing'
      },
      {
        id: 'd4',
        image: hdCatDesserts,
        title: 'Miniature Glazed Tartlets',
        subtitle: 'Valrhona Chocolate Cups and Seasonal Fresh Berry Tarts',
        tag: 'Petit Fours'
      }
    ],
    features: [
      'Custom marble and brass risers and luxury tableware staging',
      'Curated assortment of 8 to 14 petit four and viennoiserie varieties',
      'Live torching station for vanilla bean crème brûlée and flambéed tarts',
      'Dedicated pastry butler service in formal atelier attire'
    ],
    process: [
      { step: '01', title: 'Menu Curation', desc: 'Select from over 24 sweet and savory viennoiserie and mini-dessert selections.' },
      { step: '02', title: 'Theme & Prop Styling', desc: 'Matching luxury marble platters, candelabras, and floral arrangements.' },
      { step: '03', title: 'Live Butler Service', desc: 'Our uniformed pastry butlers manage live plating, torching, and guest service.' }
    ],
    packages: [
      {
        name: 'Afternoon High Tea',
        servings: '20 - 40 Guests',
        price: 'From ₹15,000',
        highlights: ['6 Pastry Selections', 'Mini Croissant Sliders', 'Artisanal Jam & Clotted Cream', 'Floral Table Dressing']
      },
      {
        name: 'Grand Dessert Banquet',
        servings: '50 - 150 Guests',
        price: 'From ₹35,000',
        highlights: ['12 Pastry Varieties', 'Macaron Display Tower', 'Mini Éclair & Tartlet Bar', '2 On-Site Pastry Butlers']
      },
      {
        name: 'Bespoke Gala Spread',
        servings: '200+ Guests',
        price: 'From ₹65,000',
        highlights: ['Unlimited Dessert Stations', 'Live Crème Brûlée Torching', 'Chocolate Fountain Station', 'Complete Tableware Styling']
      }
    ],
    faqs: [
      { q: 'Do you provide dietary options for large events?', a: 'Yes, we provide clearly labeled gluten-conscious, vegetarian, and dairy-alternative dessert platters.' },
      { q: 'Do you supply plates and display risers?', a: 'Yes, all packages include complete luxury display stands, ceramic platters, and gold tongs.' }
    ]
  },
  {
    id: 'corporate-gifting',
    name: 'Corporate & Executive Luxury Gifting',
    shortTitle: 'Corporate Luxury Gifting',
    badge: 'EXECUTIVE SUITE',
    tagline: 'Handmade macarons, custom embossed chocolate ribbons, and bespoke gift hampers for VIP clients.',
    heroImage: serviceCorporateHero,
    lead: 'Leave an indelible impression on key clients, partners, and high-performing teams with Délice executive gifting. Each gift box is tailored with custom hot-stamped foil logos, bespoke ribbon colors, and curated artisanal pastries.',
    gallery: [
      {
        id: 'c1',
        image: serviceCorporateHero,
        title: 'Executive Delice Keepsake Trunk',
        subtitle: 'Gold Embossed Chest with Macarons, Bonbons, & Champagne',
        tag: 'VIP Gifting'
      },
      {
        id: 'c2',
        image: hdNewsMacarons,
        title: 'Custom Branded Macaron Towers',
        subtitle: 'Pantone-Matched Shells with Company Monograms',
        tag: 'Bespoke Branding'
      },
      {
        id: 'c3',
        image: hdCatBrownies,
        title: 'Single-Origin Cocoa Truffles',
        subtitle: 'Hand-Rolled 70% Dark Chocolate Truffles with Edible Gold',
        tag: 'Artisan Confections'
      },
      {
        id: 'c4',
        image: hdCatCookies,
        title: 'Heritage Butter Cookie Tins',
        subtitle: 'Normandy Butter Sablés in Embossed Gold Metal Tins',
        tag: 'Holiday Collections'
      }
    ],
    features: [
      'Custom corporate branding on macaron shells, boxes, and greeting cards',
      'Multi-address direct refrigerated delivery to your client lists across the country',
      'Dedicated corporate concierge managing logistics, tax invoices, and batch tracking',
      'Volume pricing and dedicated sample delivery prior to bulk sign-off'
    ],
    process: [
      { step: '01', title: 'Hamper Formulation', desc: 'Choose pastry assortments, coffee beans, preserves, and wine pairings.' },
      { step: '02', title: 'Brand Personalization', desc: 'Custom hot-stamped gold foil logos, satin ribbon printing, and gift cards.' },
      { step: '03', title: 'Multi-City Dispatch', desc: 'Refrigerated logistics with direct tracking links sent to each recipient.' }
    ],
    packages: [
      {
        name: 'The Macaron Keepsake',
        servings: 'Box of 12 Macarons',
        price: 'From ₹1,250 / box',
        highlights: ['Custom Satin Ribbon', 'Embossed Logo Greeting Card', '6 Signature Flavours', 'Minimum 10 Boxes']
      },
      {
        name: 'Executive Patisserie Hamper',
        servings: 'Luxury Gift Crate',
        price: 'From ₹3,800 / crate',
        highlights: ['Artisan Cookie Tin', 'Valrhona Cocoa Truffles', 'Handmade Jam Jar', 'Wooden Keepsake Box']
      },
      {
        name: 'Presidential Suite Hamper',
        servings: 'Grand Celebration Trunk',
        price: 'From ₹7,500 / trunk',
        highlights: ['Full Pâtisserie Collection', 'Single-Origin Coffee Beans', 'Champagne Pairing Glassware', 'Custom Brass Plaque']
      }
    ],
    faqs: [
      { q: 'Can we print our company logo on the boxes?', a: 'Yes! We offer gold foil debossing and custom branded sleeves for orders of 15 boxes or more.' },
      { q: 'Can you deliver to individual client homes?', a: 'Yes, we handle bulk multi-drop courier logistics with automated delivery confirmation tracking.' }
    ]
  },
  {
    id: 'baking-workshops',
    name: 'Masterclass & Baking Workshops',
    shortTitle: 'Masterclasses & Workshops',
    badge: 'CHEF ACADEMY',
    tagline: 'Learn the secrets of French laminations, sourdough fermentation, and chocolate tempering from Master Bakers.',
    heroImage: serviceWorkshopHero,
    lead: 'Step inside the Délice kitchen laboratory. Under the personal mentorship of Chef Laurent Vaneau and our culinary team, you will learn the exact science, muscle memory, and delicate nuances required to bake world-class pastries at home.',
    gallery: [
      {
        id: 'k1',
        image: serviceWorkshopHero,
        title: 'Lamination Technique Masterclass',
        subtitle: 'Chef Laurent Demonstrating 27-Layer Butter Folding',
        tag: 'Live Workshop'
      },
      {
        id: 'k2',
        image: hdChefCraft,
        title: 'Precision Pâtisserie Finishing',
        subtitle: 'Glazing, Piping, and Sugar Floral Sculpting Stations',
        tag: 'Chef Mentorship'
      },
      {
        id: 'k3',
        image: hdBlogCroissant,
        title: 'The Golden Croissant Crust',
        subtitle: 'Honeycomb Crumb Structure and Flaky Butter Layers',
        tag: 'Baking Results'
      },
      {
        id: 'k4',
        image: hdCatBreads,
        title: 'Wild Sourdough Fermentation',
        subtitle: 'Hydration Ratios, Stretches & Folds, and Dutch Oven Baking',
        tag: 'Artisan Breads'
      }
    ],
    features: [
      'Small, hands-on classes strictly limited to 8 students per station',
      'Professional ingredients provided: Normandy butter, French T55 flour, Valrhona chocolate',
      'Comprehensive master recipe binder and starter culture to take home',
      'Champagne celebration and complete pastry box of your personal creations'
    ],
    process: [
      { step: '01', title: 'Ingredient Science', desc: 'Understand flour gluten levels, hydration thermodynamics, and fat melting points.' },
      { step: '02', title: 'Hands-on Knead & Fold', desc: 'Direct station practice with individual copper cookware and marble slabs.' },
      { step: '03', title: 'Bake & Tasting Salon', desc: 'Bake your creations in stone-deck ovens followed by tea and tasting.' }
    ],
    packages: [
      {
        name: 'The Viennoiserie Atelier',
        servings: 'Full Day (6 Hours)',
        price: '₹7,500 / person',
        highlights: ['Croissant Dough Lamination', 'Pain au Chocolat', 'Kouign-Amann Craft', 'French Chef Apron Included']
      },
      {
        name: 'Wild Sourdough Levain',
        servings: 'Weekend Masterclass',
        price: '₹8,500 / person',
        highlights: ['Fermentation Science', 'Dough Shaping & Scoring', 'Cast Iron Baking', 'Our 2018 Mother Starter Included']
      },
      {
        name: 'Private Group Masterclass',
        servings: 'Private 6 - 10 Persons',
        price: '₹45,000 / group',
        highlights: ['Exclusive Atelier Access', 'Custom Menu of Your Choice', 'Champagne & Cheese Grazing', 'Team Bonding / Birthdays']
      }
    ],
    faqs: [
      { q: 'Do I need baking experience to attend?', a: 'No, our masterclasses are structured from beginner to intermediate with dedicated step-by-step guidance.' },
      { q: 'Do we take home what we bake?', a: 'Absolutely! You take home a full luxury bakery box of everything you craft during the workshop.' }
    ]
  },
  {
    id: 'chef-tasting',
    name: 'Private Chef’s Tasting Table',
    shortTitle: 'Chef’s Tasting Table',
    badge: 'PRIVATE DEGUSTATION',
    tagline: 'An intimate 5-course dessert degustation hosted in our atelier laboratory after boutique closing hours.',
    heroImage: serviceTastingHero,
    lead: 'Experience patisserie like never before. Pull up a seat at our chef’s marble counter after dark for an exclusive multi-course exploration of warmth, acidity, texture, and aroma paired with rare single-origin teas and dessert wines.',
    gallery: [
      {
        id: 't1',
        image: serviceTastingHero,
        title: 'Midnight Dessert Omakase',
        subtitle: 'Chocolate Quenelle, Raspberry Glaze, and 24K Gold Leaf',
        tag: 'Private Dining'
      },
      {
        id: 't2',
        image: hdBlogChocolate,
        title: 'Grand Cru Cocoa Flight',
        subtitle: 'Textures of Single-Origin Madagascar and Ecuadorian Chocolate',
        tag: 'Course 03'
      },
      {
        id: 't3',
        image: hdBlogTart,
        title: 'Deconstructed Glazed Tartlet',
        subtitle: 'Caramelized Fig, Tahitian Vanilla Mascarpone, and Gold Foil',
        tag: 'Course 04'
      },
      {
        id: 't4',
        image: hdFeaturedCake,
        title: 'Chef Laurent Signature Petit Four',
        subtitle: 'Warm Spiced Walnut Ganache with Smoked Sea Salt',
        tag: 'Finale Course'
      }
    ],
    features: [
      'Only 8 seats available per seating for an exclusive culinary experience',
      '5 avant-garde dessert courses prepared live right in front of you',
      'Artisanal drink pairings curated by our house tea and coffee sommelier',
      'Direct storytelling and conversation with our Executive Pastry Chef'
    ],
    process: [
      { step: '01', title: 'Welcome Aperitif', desc: 'Champagne and amuse-bouche upon arrival in our secluded evening dining room.' },
      { step: '02', title: 'Live Counter Plating', desc: 'Watch each dessert course assembled with liquid nitrogen and flame torching.' },
      { step: '03', title: 'Pairing Notes', desc: 'Sommelier notes on acidity, tea floral notes, and chocolate terroir.' }
    ],
    packages: [
      {
        name: 'Seasonal Degustation',
        servings: 'Single Reservation',
        price: '₹3,500 / guest',
        highlights: ['5 Courses', 'Single-Origin Tea Pairings', 'Welcome Aperitif', 'Chef Laurent Signature Dessert']
      },
      {
        name: 'Wine & Cocoa Reserve',
        servings: 'Single Reservation',
        price: '₹5,000 / guest',
        highlights: ['5 Courses', 'Dessert Wine & Champagne Pairings', 'Grand Cru Valrhona Flight', 'Personalized Menu Keepsake']
      },
      {
        name: 'Full Laboratory Buyout',
        servings: 'Private 8 - 12 Guests',
        price: '₹38,000 / evening',
        highlights: ['Private Atelier Exclusive', 'Customized Flavour Story', 'Champagne Reception', 'Take-Home Gift Box for Every Guest']
      }
    ],
    faqs: [
      { q: 'What days are tastings hosted?', a: 'Tasting tables are hosted on Thursday, Friday, and Saturday evenings starting promptly at 8:00 PM.' },
      { q: 'Can dietary restrictions be accommodated?', a: 'Yes, with at least 48 hours notice we can tailor the tasting menu for vegetarian or nut-free requirements.' }
    ]
  }
];
