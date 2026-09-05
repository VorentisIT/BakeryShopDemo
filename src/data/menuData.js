export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Creations' },
  { id: 'cakes', label: 'Cakes' },
  { id: 'pastries', label: 'Pastries' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'giftboxes', label: 'Gift Boxes' },
  { id: 'seasonal', label: 'Seasonal' },
];

export const MENU_ITEMS = [
  {
    id: 'croissant-normandy-1',
    name: "Normandy Butter Croissants",
    category: 'pastries',
    price: 140,
    rating: 4.98,
    reviewsCount: 312,
    isBestseller: true,
    isFavorite: false,
    image: '/images/hero.jpg',
    description: "27 crispy micro-layers of 84% butter fat AOP Normandy butter and T55 French flour. Golden flaky exterior with a rich honeycomb interior.",
    dietary: ['Organic'],
    ingredients: ['AOP Normandy Butter', 'T55 French Flour', 'Fresh Organic Milk', 'Cane Sugar', 'Sea Salt'],
    allergens: ['Milk', 'Wheat', 'Eggs'],
    calories: '320 kcal',
    prepTime: 'Baked Fresh at 5:00 AM Daily'
  },
  {
    id: 'pain-au-chocolat-2',
    name: "Pain au Chocolat",
    category: 'pastries',
    price: 160,
    rating: 4.95,
    reviewsCount: 210,
    isBestseller: true,
    isFavorite: true,
    image: '/images/hero.jpg',
    description: "Flaky laminated croissant dough wrapped around two thick batons of 64% Valrhona semi-sweet chocolate, baked to molten perfection.",
    dietary: ['Organic'],
    ingredients: ['T55 Pastry Flour', 'Valrhona Dark Chocolate Batons', 'AOP Normandy Butter', 'Yeast'],
    allergens: ['Milk', 'Wheat', 'Eggs', 'Soy'],
    calories: '380 kcal',
    prepTime: 'Oven Release Every 2 Hours'
  },
  {
    id: 'cheesecake-ny-3',
    name: "New York Cheesecake",
    category: 'cakes',
    price: 220,
    rating: 4.9,
    reviewsCount: 184,
    isBestseller: false,
    isFavorite: false,
    image: '/images/chocolate_cake.jpg',
    description: "Velvety dense cream cheese cake on a graham butter crust topped with fresh organic raspberry compote.",
    dietary: ['Nut-Free'],
    ingredients: ['Philadelphia Cream Cheese', 'Organic Heavy Cream', 'Graham Crust', 'Madagascar Vanilla'],
    allergens: ['Milk', 'Wheat', 'Eggs'],
    calories: '410 kcal / slice',
    prepTime: 'Chilled Artisanal Masterpiece'
  },
  {
    id: 'signature-tart-4',
    name: "Signature Chocolate Tart",
    category: 'desserts',
    price: 240,
    rating: 4.96,
    reviewsCount: 156,
    isBestseller: true,
    isFavorite: true,
    image: '/images/chocolate_cake.jpg',
    description: "Crisp dark cocoa sablée shell filled with silky 70% Valrhona dark ganache and Fleur de Sel caramel drip.",
    dietary: ['Organic', 'Nut-Free'],
    ingredients: ['70% Valrhona Chocolate', 'Cocoa Sablée Shell', 'Fleur de Sel Caramel', 'Heavy Cream'],
    allergens: ['Milk', 'Wheat', 'Eggs', 'Soy'],
    calories: '390 kcal',
    prepTime: 'Handcrafted Daily'
  },
  {
    id: 'vanilla-berry-cake-5',
    name: "Vanilla Berry Cake",
    category: 'cakes',
    price: 250,
    rating: 4.92,
    reviewsCount: 198,
    isBestseller: true,
    isFavorite: false,
    image: '/images/custom_cake.jpg',
    description: "Light Madagascar vanilla bean sponge layered with fresh wild strawberries, blackberries, and Swiss meringue buttercream.",
    dietary: ['Organic'],
    ingredients: ['Tahitian Vanilla Bean', 'Swiss Buttercream', 'Fresh Strawberries', 'Wild Blackberries'],
    allergens: ['Milk', 'Wheat', 'Eggs'],
    calories: '360 kcal / slice',
    prepTime: 'Made to Order'
  },
  {
    id: 'red-velvet-6',
    name: "Red Velvet Delight",
    category: 'cakes',
    price: 260,
    rating: 4.88,
    reviewsCount: 142,
    isBestseller: false,
    isFavorite: false,
    image: '/images/chocolate_cake.jpg',
    description: "Rich cocoa velvet sponge with silky cream cheese frosting and subtle dark chocolate nib accents.",
    dietary: ['Nut-Free'],
    ingredients: ['Silk Cocoa Velvet Sponge', 'Cream Cheese Frosting', 'Valrhona Nibs'],
    allergens: ['Milk', 'Wheat', 'Eggs'],
    calories: '420 kcal / slice',
    prepTime: 'Freshly Baked'
  },
  {
    id: 'zesty-lemon-tart-7',
    name: "Zesty Lemon Tart",
    category: 'desserts',
    price: 200,
    rating: 4.94,
    reviewsCount: 118,
    isBestseller: false,
    isFavorite: false,
    image: '/images/macarons.jpg',
    description: "Tangy Menton lemon curd in a golden buttery pastry crust, topped with toasted Swiss meringue peaks.",
    dietary: ['Organic', 'Nut-Free'],
    ingredients: ['Menton Lemon Juice', 'Fresh Butter Crust', 'Organic Eggs', 'Toasted Meringue'],
    allergens: ['Milk', 'Wheat', 'Eggs'],
    calories: '290 kcal',
    prepTime: 'Handcrafted Daily'
  },
  {
    id: 'custom-birthday-cake-8',
    name: "Custom Birthday Cake",
    category: 'cakes',
    price: 1500,
    rating: 5.0,
    reviewsCount: 96,
    isBestseller: true,
    isFavorite: true,
    image: '/images/custom_cake.jpg',
    description: "Bespoke multi-tier celebration cake configured with edible rose petals, gold leaf drips, and personalized sugar ribbon inscription.",
    dietary: ['Organic', 'Custom Configurable'],
    ingredients: ['Madagascar Vanilla', 'Swiss Buttercream', 'Rose Water', '24K Gold Leaf'],
    allergens: ['Milk', 'Wheat', 'Eggs'],
    calories: '400 kcal / slice',
    prepTime: 'Custom Handcrafted 24h'
  },
  {
    id: 'macaron-box-9',
    name: "Pastel Macaron Gift Box (12 pcs)",
    category: 'giftboxes',
    price: 850,
    rating: 4.95,
    reviewsCount: 240,
    isBestseller: true,
    isFavorite: true,
    image: '/images/macarons.jpg',
    description: "Assorted French almond macaron shells filled with Lavender Honey, Bronte Pistachio, Tahitian Vanilla, and Fleur de Sel Caramel.",
    dietary: ['Gluten-Free'],
    ingredients: ['California Almond Flour', 'Organic Egg Whites', 'Bronte Pistachio Paste', 'Tahitian Vanilla'],
    allergens: ['Tree Nuts', 'Eggs', 'Milk'],
    calories: '90 kcal / piece',
    prepTime: 'Gift Box Packed'
  },
  {
    id: 'seasonal-truffle-10',
    name: "Seasonal Dark Cocoa Truffles",
    category: 'seasonal',
    price: 680,
    rating: 4.91,
    reviewsCount: 74,
    isBestseller: false,
    isFavorite: false,
    image: '/images/chocolate_cake.jpg',
    description: "Hand-rolled 70% Valrhona dark chocolate truffles dusted with raw cocoa powder and edible gold flakes.",
    dietary: ['Gluten-Free', 'Nut-Free'],
    ingredients: ['70% Valrhona Dark Ganache', 'Raw Cocoa Powder', 'Edible Gold Leaf'],
    allergens: ['Milk', 'Soy'],
    calories: '75 kcal / truffle',
    prepTime: 'Limited Seasonal Batch'
  }
];

export const SIGNATURE_ITEMS = [
  {
    id: 'sig-1',
    title: '70% Valrhona Dark Chocolate Sponge',
    subtitle: 'Grand Cru Cocoa',
    desc: 'Slow-baked with 70% single-origin Valrhona dark cocoa for unparalleled bitter-sweet depth.',
    tag: 'Signature Base'
  },
  {
    id: 'sig-2',
    title: 'Roasted Almonds, Walnuts & Pistachios',
    subtitle: 'Crunchy Nutrients',
    desc: 'Lightly toasted Bronte pistachios, California almonds, and roasted walnuts packed with Omega-3s.',
    tag: 'Organic Topping'
  },
  {
    id: 'sig-3',
    title: 'Classic Fresh Fruit & Vanilla Cream',
    subtitle: 'Tahitian Vanilla',
    desc: 'Infused with whole Tahitian vanilla beans and folded with micro-textured farm-fresh cream.',
    tag: 'Hand-Whipped'
  },
  {
    id: 'sig-4',
    title: 'Organic Wild Black Cherries',
    subtitle: 'Antioxidant Burst',
    desc: 'Hand-picked wild black cherries simmered in natural juices for an exquisite tart note.',
    tag: 'Seasonal Reserve'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Chef Jean-Luc Vaneau",
    role: "Michelin 3-Star Culinary Critic",
    comment: "L'Étoile produces the single finest sourdough and croissants outside of Paris. The 48-hour cold fermentation creates a flavor complexity that is truly world-class.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Sophia Sterling",
    role: "Luxury Event Planner",
    comment: "The Custom Cake Builder made ordering for our VIP gala effortless. The cake arrived looking like a high-fashion sculpture and tasted divine!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "Marcus Vance",
    role: "Specialty Coffee Roaster",
    comment: "Their double laminated croissant paired with single-origin Ethiopian espresso is my morning ritual. Unmatched craftsmanship in every layer.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  }
];
