/**
 * AuraPrime eCOMMERCE PLATFORM
 * Full-featured interactive engine with State Management, Offline Mock DB,
 * Cart, Wishlist, Multi-currency, Multi-language (English & Tamil),
 * Checkout (UPI, Cards, COD), Order Tracking, Admin Suite,
 * Recommendations, Image Zoom, 360° Viewer, and AI Helpdesk.
 */

// ==========================================
// 1. INITIAL SEED DATA
// ==========================================
const SEED_PRODUCTS = [
  {
    id: 'prod-1',
    title: 'AeroPulse Pro Wireless Noise-Cancelling Headphones',
    category: 'Audio',
    brand: 'Sony',
    price: 349,
    originalPrice: 399,
    rating: 4.9,
    reviewCount: 312,
    stock: 24,
    flashSale: true,
    tags: ['wireless', 'anc', 'bluetooth 5.3', '40hr battery'],
    description: 'Immerse in studio-grade acoustics with dual adaptive active noise cancellation, LDAC high-resolution audio streaming, and ultra-plush memory foam earcups.',
    specs: {
      'Driver Size': '40mm Custom Dynamic',
      'Battery Life': 'Up to 40 Hours (ANC On)',
      'Connectivity': 'Bluetooth 5.3 / 3.5mm Aux / USB-C',
      'Weight': '254 grams',
      'Warranty': '2 Years Comprehensive'
    },
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80'
    ],
    reviews: [
      { id: 'rev-1', author: 'Karthik Raja', rating: 5, date: '2 days ago', verified: true, title: 'Unbeatable sound clarity', comment: 'The noise cancellation completely blocks out traffic and office noise. LDAC mode on Android is mindblowing!' },
      { id: 'rev-2', author: 'Sophia Chen', rating: 5, date: '1 week ago', verified: true, title: 'Supreme comfort', comment: 'I wear these for 8 hours daily during remote work. No ear fatigue whatsoever.' }
    ]
  },
  {
    id: 'prod-2',
    title: 'Zenith Horizon 16-inch OLED Creator Laptop',
    category: 'Electronics',
    brand: 'Apple',
    price: 1899,
    originalPrice: 2199,
    rating: 4.8,
    reviewCount: 148,
    stock: 12,
    flashSale: true,
    tags: ['oled', 'm3 max', '32gb ram', '1tb ssd', '4k'],
    description: 'Engineered for power users, developers, and visual artists. Featuring a vivid 3.2K 120Hz OLED display, cutting-edge 16-core processor, and all-day thermal efficiency.',
    specs: {
      'Processor': '16-Core Ultra Bionic Chip',
      'Display': '16.0" 3.2K (3200x2000) 120Hz OLED HDR',
      'RAM & Storage': '32GB LPDDR5X + 1TB NVMe Gen4 SSD',
      'Battery': '99.9Wh (Up to 18 Hours)',
      'Weight': '1.68 kg'
    },
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=80'
    ],
    reviews: [
      { id: 'rev-3', author: 'Arun Kumar', rating: 5, date: '3 days ago', verified: true, title: 'Absolute powerhouse for coding', comment: 'Docker containers, multiple IDEs, and 4K video rendering without even spinning up the fans loudly.' }
    ]
  },
  {
    id: 'prod-3',
    title: 'Chronos Sapphire Titanium Smartwatch Ultra',
    category: 'Electronics',
    brand: 'Samsung',
    price: 499,
    originalPrice: 599,
    rating: 4.7,
    reviewCount: 215,
    stock: 18,
    flashSale: false,
    tags: ['smartwatch', 'titanium', 'ecg', 'gps', 'waterproof 100m'],
    description: 'Precision aerospace titanium casing with scratch-resistant sapphire crystal. Advanced multi-band dual-frequency GPS, ECG monitor, and 100-hour expedition battery.',
    specs: {
      'Case Material': 'Aerospace Grade 5 Titanium',
      'Water Resistance': '10 ATM (100 meters dive proof)',
      'Sensors': 'Optical HR, SpO2, ECG, Barometer, Skin Temp',
      'Battery': 'Up to 100 Hours Normal / 36 Hours GPS',
      'Compatibility': 'iOS & Android'
    },
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&auto=format&fit=crop&q=80'
    ],
    reviews: [
      { id: 'rev-4', author: 'Priya Sundaram', rating: 5, date: '1 month ago', verified: true, title: 'Best fitness companion', comment: 'Battery lasts 4 days easily with sleep tracking and workouts enabled.' }
    ]
  },
  {
    id: 'prod-4',
    title: 'Vortex Mechanical RGB Wireless Gaming Keyboard',
    category: 'Gaming',
    brand: 'Razer',
    price: 159,
    originalPrice: 199,
    rating: 4.8,
    reviewCount: 184,
    stock: 35,
    flashSale: true,
    tags: ['hot-swap', 'rgb', 'wireless', 'pbt keycaps', 'gaming'],
    description: 'Hot-swappable tactile switches with pre-lubricated stabilizers, gasket mounted sound dampening foam, and tri-mode wireless low-latency 2.4GHz connectivity.',
    specs: {
      'Switches': 'Custom Pre-lubed Linear Yellow Switches',
      'Keycaps': 'Double-shot PBT Cherry Profile',
      'Connectivity': '2.4Ghz Wireless / Bluetooth 5.2 / USB-C',
      'RGB Backlight': '16.8M Per-Key Addressable LEDs',
      'Battery': '4000mAh (Up to 200 hours)'
    },
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541140532154-b024d705b909?w=800&auto=format&fit=crop&q=80'
    ],
    reviews: [
      { id: 'rev-5', author: 'Dinesh Balan', rating: 5, date: '5 days ago', verified: true, title: 'Creamy sound signature', comment: 'The gasket mount makes typing pure joy. Zero latency during competitive gaming.' }
    ]
  },
  {
    id: 'prod-5',
    title: 'CyberGlide Ergonomic Wireless Precision Gaming Mouse',
    category: 'Gaming',
    brand: 'Razer',
    price: 89,
    originalPrice: 119,
    rating: 4.6,
    reviewCount: 162,
    stock: 42,
    flashSale: false,
    tags: ['mouse', 'wireless', '30k dpi', 'lightweight 58g'],
    description: 'Ultra-lightweight 58-gram chassis with 30,000 DPI optical sensor, optical gen-3 switches rated for 90 million clicks, and pure PTFE glide feet.',
    specs: {
      'Sensor': 'Focus Pro 30,000 DPI Optical Sensor',
      'Weight': '58 grams',
      'Polling Rate': 'Up to 4000Hz HyperPolling',
      'Battery': '90 Hours continuous motion',
      'Feet': '100% Virgin Grade PTFE'
    },
    images: [
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1626218174358-7769486c4b79?w=800&auto=format&fit=crop&q=80'
    ],
    reviews: [
      { id: 'rev-6', author: 'Manoj S.', rating: 5, date: '2 weeks ago', verified: true, title: 'Feels weightless!', comment: 'My aim tracking in FPS games improved significantly.' }
    ]
  },
  {
    id: 'prod-6',
    title: 'AirNova Dynamic Cushion Performance Running Shoes',
    category: 'Fashion',
    brand: 'Nike',
    price: 145,
    originalPrice: 180,
    rating: 4.7,
    reviewCount: 94,
    stock: 28,
    flashSale: true,
    tags: ['running', 'cushion', 'breathable', 'carbon plate'],
    description: 'Engineered breathable mesh upper with responsive ZoomX foam and curved carbon-fiber propulsion plate for maximum energy return and marathon endurance.',
    specs: {
      'Midsole': 'Full-length ZoomX Superfoam + Carbon Plate',
      'Drop': '8mm Heel-to-Toe',
      'Weight': '210g (Size 9)',
      'Closure': 'Lace-up Lockdown Flyknit',
      'Terrain': 'Road / Track / Marathon'
    },
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&auto=format&fit=crop&q=80'
    ],
    reviews: [
      { id: 'rev-7', author: 'Vikram Seth', rating: 4, date: '3 weeks ago', verified: true, title: 'Super responsive bounce', comment: 'Cut 2 minutes off my 10k running time. Fits true to size.' }
    ]
  },
  {
    id: 'prod-7',
    title: 'Barista Artisan Touch Espresso & Latte Machine',
    category: 'Home & Living',
    brand: 'Dyson',
    price: 699,
    originalPrice: 849,
    rating: 4.9,
    reviewCount: 88,
    stock: 14,
    flashSale: false,
    tags: ['espresso', 'coffee', '15 bar', 'milk frother', 'touchscreen'],
    description: 'Café quality at home. Integrated conical burr grinder with 30 grind sizes, dual PID temperature thermo-jets, and microfoam automatic steaming wand.',
    specs: {
      'Pressure Pump': '15-Bar Italian Vibration Pump',
      'Heating System': 'Dual ThermoJet (3-sec heatup)',
      'Water Tank': '2.0 Liters with Water Filter',
      'Grinder': 'Stainless Steel Conical Burrs (30 settings)',
      'Material': 'Brushed Stainless Steel'
    },
    images: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80'
    ],
    reviews: [
      { id: 'rev-8', author: 'Ananya Sharma', rating: 5, date: '1 month ago', verified: true, title: 'Replaced Starbucks forever', comment: 'Velvety microfoam for latte art. The espresso extraction is rich and full-bodied.' }
    ]
  },
  {
    id: 'prod-8',
    title: 'SoundSphere 360 Spatial High-Fidelity Smart Speaker',
    category: 'Audio',
    brand: 'Bose',
    price: 279,
    originalPrice: 329,
    rating: 4.7,
    reviewCount: 110,
    stock: 22,
    flashSale: true,
    tags: ['smart speaker', 'room-filling', 'dolby atmos', 'wifi', 'alexa'],
    description: 'Room-filling acoustic brilliance with 6 beamforming drivers, upward firing Dolby Atmos speaker, and automatic room calibration.',
    specs: {
      'Acoustic Drivers': '6 Micro-Drivers + 1 Long-throw Subwoofer',
      'Audio Formats': 'Dolby Atmos, Hi-Res FLAC 24-bit/192kHz',
      'Connectivity': 'Wi-Fi 6, AirPlay 2, Spotify Connect, BT 5.3',
      'Microphones': 'Far-field Voice Array with Mute Switch',
      'Dimensions': '180mm x 180mm x 220mm'
    },
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=80'
    ],
    reviews: [
      { id: 'rev-9', author: 'Rajesh V.', rating: 5, date: '4 days ago', verified: true, title: 'Incredible bass depth', comment: 'Fills my entire living room with clean, distortion-free sound even at 90% volume.' }
    ]
  }
];

// Complementary bundle mapping for recommendation engine
const COMPLEMENTARY_BUNDLES = {
  'prod-1': 'prod-8', // Headphones + Speaker
  'prod-2': 'prod-4', // Laptop + Mechanical Keyboard
  'prod-4': 'prod-5', // Keyboard + Gaming Mouse
  'prod-3': 'prod-1', // Watch + Headphones
  'prod-6': 'prod-3', // Running Shoes + Smartwatch
  'prod-7': 'prod-8'  // Espresso Maker + Speaker
};

// Available coupons
const INITIAL_COUPONS = [
  { code: 'WELCOME10', discountPercent: 10, minSpend: 50, description: '10% off on orders above $50' },
  { code: 'MEGA50', discountPercent: 50, minSpend: 200, description: '50% mega discount on orders above $200' },
  { code: 'FREESHIP', discountPercent: 0, freeShipping: true, minSpend: 0, description: 'Free Express Shipping' }
];

// Multi-currency exchange rates (Base USD)
const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0, name: 'USD ($)' },
  INR: { symbol: '₹', rate: 83.5, name: 'INR (₹)' },
  EUR: { symbol: '€', rate: 0.92, name: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, name: 'GBP (£)' }
};

// Multi-language UI translations (English & Tamil)
const TRANSLATIONS = {
  en: {
    brand_sub: 'Next-Gen Intelligence',
    nav_catalog: 'Explore Store',
    nav_wishlist: 'Wishlist',
    nav_cart: 'Cart',
    nav_orders: 'Track Orders',
    nav_admin: 'Admin Portal',
    search_placeholder: 'Search 4K laptops, wireless audio, sneakers...',
    hero_title: 'Experience The Future of Luxury Commerce',
    hero_desc: 'Curated audio gear, hyper-fast laptops, and bespoke lifestyle products with instant express delivery.',
    flash_ends_in: 'FLASH SALE ENDS IN:',
    filter_categories: 'Categories',
    filter_price: 'Max Price:',
    filter_brand: 'Brands',
    filter_rating: 'Minimum Rating',
    filter_all: 'All Categories',
    add_to_cart: 'Add to Cart',
    buy_now: 'Buy Now',
    quick_view: 'Quick View',
    out_of_stock: 'Out of Stock',
    in_stock: 'In Stock',
    free_shipping_notice: 'Free Express Shipping on orders over',
    cart_empty: 'Your cart is empty',
    cart_empty_sub: 'Discover cutting-edge gadgets and add them here!',
    checkout_btn: 'Proceed to Secure Checkout',
    total: 'Total',
    subtotal: 'Subtotal',
    discount: 'Discount',
    shipping: 'Shipping',
    apply: 'Apply',
    promo_placeholder: 'Enter promo code (e.g. MEGA50)',
    order_success: 'Order Confirmed!',
    order_success_sub: 'Thank you for your purchase. We are preparing your shipment.',
    live_tracking_title: 'Live Order Tracker',
    admin_title: 'Commerce Management System',
    admin_revenue: 'Total Revenue',
    admin_orders: 'Total Orders',
    admin_products: 'Catalog Size',
    chat_header: 'Lumina Concierge AI',
    chat_welcome: 'Hello! I am your Lumina Shopping Assistant. How can I assist your shopping today?'
  },
  ta: {
    brand_sub: 'அடுத்த தலைமுறை காமர்ஸ்',
    nav_catalog: 'பொருட்கள்',
    nav_wishlist: 'விருப்பப்பட்டியல்',
    nav_cart: 'கார்ட்',
    nav_orders: 'ஆர்டர்கள்',
    nav_admin: 'நிர்வாக போர்டல்',
    search_placeholder: 'லேப்டாப், ஹெட்ஃபோன், காலணி தேடுக...',
    hero_title: 'அதிநவீன வாழ்க்கை முறை சாதனங்கள்',
    hero_desc: 'தரமான ஆடியோ சாதனங்கள், அதிவேக லேப்டாப்கள் மற்றும் ஆடம்பர வாழ்க்கை பொருட்கள் உடனடியாக டெலிவரி.',
    flash_ends_in: 'மின்னல் சலுகை முடிய:',
    filter_categories: 'பிரிவுகள்',
    filter_price: 'அதிகபட்ச விலை:',
    filter_brand: 'பிராண்டுகள்',
    filter_rating: 'குறைந்தபட்ச மதிப்பீடு',
    filter_all: 'அனைத்து பிரிவுகள்',
    add_to_cart: 'கார்ட்டில் சேர்',
    buy_now: 'உடனே வாங்கு',
    quick_view: 'விரைவு பார்வை',
    out_of_stock: 'இருப்பில் இல்லை',
    in_stock: 'இருப்பில் உள்ளது',
    free_shipping_notice: 'இலவச எக்ஸ்பிரஸ் டெலிவரி இதற்கு மேல்:',
    cart_empty: 'கார்ட் காலியாக உள்ளது',
    cart_empty_sub: 'புதிய தொழில்நுட்ப சாதனங்களை தேர்ந்தெடுத்து சேருங்கள்!',
    checkout_btn: 'பாதுகாப்பான செக்அவுட் தொடர்க',
    total: 'மொத்த தொகை',
    subtotal: 'துணை தொகை',
    discount: 'தள்ளுபடி',
    shipping: 'டெலிவரி கட்டணம்',
    apply: 'பயன்படுத்து',
    promo_placeholder: 'கூப்பன் குறியீடு (எ.கா: MEGA50)',
    order_success: 'ஆர்டர் உறுதி செய்யப்பட்டது!',
    order_success_sub: 'உங்கள் ஆர்டருக்கு நன்றி! உங்கள் பார்சல் விரைவில் அனுப்பப்படும்.',
    live_tracking_title: 'நேரலை ஆர்டர் கண்காணிப்பு',
    admin_title: 'காமர்ஸ் நிர்வாக அமைப்பு',
    admin_revenue: 'மொத்த வருவாய்',
    admin_orders: 'மொத்த ஆர்டர்கள்',
    admin_products: 'பொருட்கள் எண்ணிக்கை',
    chat_header: 'லுமினா AI உதவியாளர்',
    chat_welcome: 'வணக்கம்! நான் உங்கள் லுமினா ஷாப்பிங் உதவியாளர். உங்களுக்கு இன்று என்ன வேண்டும்?'
  }
};

// ==========================================
// 2. APPLICATION STATE
// ==========================================
class AppStore {
  constructor() {
    this.products = this.load('lumina_products', SEED_PRODUCTS);
    this.cart = this.load('lumina_cart', [
      { productId: 'prod-1', quantity: 1, selectedVariant: 'Space Black' }
    ]);
    this.wishlist = this.load('lumina_wishlist', ['prod-2', 'prod-4']);
    this.orders = this.load('lumina_orders', [
      {
        id: 'LUM-84920',
        date: '2026-09-24',
        items: [{ productId: 'prod-3', quantity: 1, title: 'Chronos Sapphire Titanium Smartwatch Ultra', price: 499, image: SEED_PRODUCTS[2].images[0] }],
        subtotal: 499,
        discount: 50,
        shipping: 0,
        total: 449,
        paymentMethod: 'UPI (GPay)',
        status: 'In Transit', // Order Placed -> Packed -> In Transit -> Out for Delivery -> Delivered
        step: 3,
        estimatedDelivery: 'Tomorrow, 5:00 PM',
        trackingNumber: 'TRK-99201-IND',
        rider: { name: 'Vikram Sundaram', phone: '+91 98401 23456', vehicle: 'Express Van' },
        customer: { name: 'Alex Johnson', email: 'alex@example.com', address: '42 Marina Bay View, Chennai, TN 600001' }
      }
    ]);
    this.coupons = this.load('lumina_coupons', INITIAL_COUPONS);
    this.currency = this.load('lumina_currency', 'USD');
    this.lang = this.load('lumina_lang', 'en');
    this.theme = this.load('lumina_theme', 'light');
    this.currentUser = this.load('lumina_user', {
      name: 'Alex Johnson',
      email: 'alex.johnson@lumina.io',
      phone: '+91 98765 43210',
      role: 'customer' // 'customer' or 'admin'
    });
    this.appliedCoupon = null;
    this.currentView = 'catalog'; // 'catalog', 'cart', 'checkout', 'tracking', 'admin', 'dashboard'
    this.activeProduct = null;
    this.activeTrackingOrder = this.orders[0] || null;
    this.selectedCategory = 'all';
    this.maxPriceFilter = 2500;
    this.searchQuery = '';
    this.selectedBrand = 'all';
    this.minRating = 0;
    this.sortBy = 'featured';
    this.viewMode = 'grid'; // 'grid' or 'list'
  }

  load(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  save(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {}
  }

  setCurrency(curr) {
    if (CURRENCIES[curr]) {
      this.currency = curr;
      this.save('lumina_currency', curr);
      UI.renderAll();
    }
  }

  setLang(l) {
    if (TRANSLATIONS[l]) {
      this.lang = l;
      this.save('lumina_lang', l);
      UI.renderAll();
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.save('lumina_theme', this.theme);
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  // Price conversion helper
  formatPrice(amountUSD) {
    const curr = CURRENCIES[this.currency];
    const converted = amountUSD * curr.rate;
    if (this.currency === 'INR') {
      return `${curr.symbol}${Math.round(converted).toLocaleString('en-IN')}`;
    }
    return `${curr.symbol}${converted.toFixed(2)}`;
  }

  // Raw converted numeric
  convertPrice(amountUSD) {
    return Math.round((amountUSD * CURRENCIES[this.currency].rate) * 100) / 100;
  }

  // Cart operations
  addToCart(productId, qty = 1, variant = 'Default') {
    const existing = this.cart.find(item => item.productId === productId && item.selectedVariant === variant);
    const prod = this.products.find(p => p.id === productId);
    if (!prod) return;

    if (existing) {
      existing.quantity += qty;
    } else {
      this.cart.push({ productId, quantity: qty, selectedVariant: variant });
    }
    this.save('lumina_cart', this.cart);
    UI.updateCartDrawer();
    UI.updateBadges();
    UI.showToast(`Added "${prod.title.substring(0, 24)}..." to Cart!`, 'success');
  }

  updateCartQty(productId, delta) {
    const item = this.cart.find(i => i.productId === productId);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
      this.cart = this.cart.filter(i => i.productId !== productId);
    }
    this.save('lumina_cart', this.cart);
    UI.updateCartDrawer();
    UI.updateBadges();
    if (store.currentView === 'cart' || store.currentView === 'checkout') {
      UI.renderCurrentView();
    }
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(i => i.productId !== productId);
    this.save('lumina_cart', this.cart);
    UI.updateCartDrawer();
    UI.updateBadges();
    UI.showToast('Item removed from cart', 'warning');
    if (store.currentView === 'cart' || store.currentView === 'checkout') {
      UI.renderCurrentView();
    }
  }

  toggleWishlist(productId) {
    const index = this.wishlist.indexOf(productId);
    const prod = this.products.find(p => p.id === productId);
    if (index > -1) {
      this.wishlist.splice(index, 1);
      UI.showToast(`Removed from Wishlist`, 'warning');
    } else {
      this.wishlist.push(productId);
      UI.showToast(`Saved "${prod ? prod.title.substring(0, 20) : 'Item'}" to Wishlist!`, 'success');
    }
    this.save('lumina_wishlist', this.wishlist);
    UI.updateBadges();
    UI.renderProductCards();
  }

  applyCouponCode(code) {
    const cleanCode = code.trim().toUpperCase();
    const coupon = this.coupons.find(c => c.code === cleanCode);
    const subtotal = this.getCartSubtotal();

    if (!coupon) {
      UI.showToast('Invalid Coupon Code!', 'error');
      return false;
    }
    if (coupon.minSpend && subtotal < coupon.minSpend) {
      UI.showToast(`Minimum order of $${coupon.minSpend} required for this code.`, 'warning');
      return false;
    }

    this.appliedCoupon = coupon;
    UI.showToast(`Coupon ${coupon.code} applied successfully!`, 'success');
    UI.updateCartDrawer();
    if (store.currentView === 'cart' || store.currentView === 'checkout') {
      UI.renderCurrentView();
    }
    return true;
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => {
      const prod = this.products.find(p => p.id === item.productId);
      return sum + (prod ? prod.price * item.quantity : 0);
    }, 0);
  }

  getCartTotals() {
    const subtotal = this.getCartSubtotal();
    let discount = 0;
    let shipping = subtotal > 150 || (this.appliedCoupon && this.appliedCoupon.freeShipping) || subtotal === 0 ? 0 : 15;

    if (this.appliedCoupon && this.appliedCoupon.discountPercent) {
      discount = (subtotal * this.appliedCoupon.discountPercent) / 100;
    }

    const total = Math.max(0, subtotal - discount + shipping);
    return { subtotal, discount, shipping, total };
  }

  createOrder(orderDetails) {
    const totals = this.getCartTotals();
    const newOrder = {
      id: `LUM-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toISOString().split('T')[0],
      items: this.cart.map(c => {
        const prod = this.products.find(p => p.id === c.productId);
        return {
          productId: c.productId,
          title: prod ? prod.title : 'Item',
          price: prod ? prod.price : 0,
          quantity: c.quantity,
          image: prod ? prod.images[0] : ''
        };
      }),
      subtotal: totals.subtotal,
      discount: totals.discount,
      shipping: totals.shipping,
      total: totals.total,
      paymentMethod: orderDetails.paymentMethod,
      status: 'Order Placed',
      step: 1,
      estimatedDelivery: '3 Days from today',
      trackingNumber: `TRK-${Math.floor(100000 + Math.random() * 900000)}-EXP`,
      rider: { name: 'K. Senthil Nathan', phone: '+91 94421 88902', vehicle: 'Express Hub Van' },
      customer: {
        name: orderDetails.name,
        email: orderDetails.email,
        address: `${orderDetails.address}, ${orderDetails.city}, ${orderDetails.zip}`
      }
    };

    this.orders.unshift(newOrder);
    this.save('lumina_orders', this.orders);
    this.activeTrackingOrder = newOrder;

    // Deduct stock
    newOrder.items.forEach(item => {
      const p = this.products.find(x => x.id === item.productId);
      if (p) {
        p.stock = Math.max(0, p.stock - item.quantity);
      }
    });
    this.save('lumina_products', this.products);

    // Empty cart
    this.cart = [];
    this.appliedCoupon = null;
    this.save('lumina_cart', this.cart);
    UI.updateBadges();
    return newOrder;
  }
}

const store = new AppStore();

// ==========================================
// 3. UI RENDERING & COMPONENT LOGIC
// ==========================================
const UI = {
  t(key) {
    const dict = TRANSLATIONS[store.lang] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || key;
  },

  init() {
    document.documentElement.setAttribute('data-theme', store.theme);
    this.bindEvents();
    this.startFlashCountdown();
    this.renderAll();
  },

  bindEvents() {
    // Theme toggle
    document.getElementById('theme-toggle')?.addEventListener('click', () => store.toggleTheme());

    // Currency selector
    const currSelect = document.getElementById('currency-select');
    if (currSelect) {
      currSelect.value = store.currency;
      currSelect.addEventListener('change', (e) => store.setCurrency(e.target.value));
    }

    // Language selector
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
      langSelect.value = store.lang;
      langSelect.addEventListener('change', (e) => store.setLang(e.target.value));
    }

    // Cart drawer trigger
    document.querySelectorAll('.trigger-cart').forEach(btn => {
      btn.addEventListener('click', () => this.toggleCartDrawer(true));
    });
    document.getElementById('close-drawer')?.addEventListener('click', () => this.toggleCartDrawer(false));
    document.getElementById('drawer-backdrop')?.addEventListener('click', (e) => {
      if (e.target.id === 'drawer-backdrop') this.toggleCartDrawer(false);
    });

    // Search input
    const searchInp = document.getElementById('global-search');
    const searchSuggestions = document.getElementById('search-suggestions');
    searchInp?.addEventListener('input', (e) => {
      store.searchQuery = e.target.value.toLowerCase().trim();
      this.handleSearchSuggestions(store.searchQuery);
      this.renderProductCards();
    });

    // Clear search
    document.getElementById('search-clear')?.addEventListener('click', () => {
      if (searchInp) {
        searchInp.value = '';
        store.searchQuery = '';
        searchSuggestions.classList.remove('active');
        this.renderProductCards();
      }
    });

    // Close suggestions on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-wrapper')) {
        searchSuggestions?.classList.remove('active');
      }
    });

    // Navigation switches
    document.querySelectorAll('[data-view-nav]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const view = btn.getAttribute('data-view-nav');
        this.switchView(view);
      });
    });

    // Sort selector
    document.getElementById('catalog-sort')?.addEventListener('change', (e) => {
      store.sortBy = e.target.value;
      this.renderProductCards();
    });

    // View mode toggles (grid / list)
    document.getElementById('view-grid-btn')?.addEventListener('click', () => {
      store.viewMode = 'grid';
      document.getElementById('view-grid-btn').classList.add('active');
      document.getElementById('view-list-btn').classList.remove('active');
      this.renderProductCards();
    });
    document.getElementById('view-list-btn')?.addEventListener('click', () => {
      store.viewMode = 'list';
      document.getElementById('view-list-btn').classList.add('active');
      document.getElementById('view-grid-btn').classList.remove('active');
      this.renderProductCards();
    });

    // Chatbot widget toggle
    const chatToggle = document.getElementById('chat-toggle-btn');
    const chatWindow = document.getElementById('chatbot-window');
    chatToggle?.addEventListener('click', () => {
      chatWindow.classList.toggle('open');
    });
    document.getElementById('close-chat-btn')?.addEventListener('click', () => {
      chatWindow.classList.remove('open');
    });
    document.getElementById('chat-send-btn')?.addEventListener('click', () => this.handleChatSubmit());
    document.getElementById('chat-input')?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.handleChatSubmit();
    });

    // Role switcher button (Customer / Admin)
    document.getElementById('role-switcher-btn')?.addEventListener('click', () => {
      store.currentUser.role = store.currentUser.role === 'customer' ? 'admin' : 'customer';
      store.save('lumina_user', store.currentUser);
      this.updateUserRoleBadge();
      this.showToast(`Switched mode to: ${store.currentUser.role.toUpperCase()}`, 'success');
      if (store.currentUser.role === 'admin') {
        this.switchView('admin');
      } else {
        this.switchView('catalog');
      }
    });
  },

  updateUserRoleBadge() {
    const badge = document.getElementById('role-badge-text');
    if (badge) {
      badge.textContent = store.currentUser.role === 'admin' ? 'Admin Mode' : 'Customer';
    }
  },

  startFlashCountdown() {
    const targetHours = 8;
    const targetTime = Date.now() + targetHours * 60 * 60 * 1000;

    setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, targetTime - now);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      const hEl = document.getElementById('flash-hours');
      const mEl = document.getElementById('flash-mins');
      const sEl = document.getElementById('flash-secs');

      if (hEl) hEl.textContent = String(hours).padStart(2, '0');
      if (mEl) mEl.textContent = String(mins).padStart(2, '0');
      if (sEl) sEl.textContent = String(secs).padStart(2, '0');
    }, 1000);
  },

  renderAll() {
    this.updateUserRoleBadge();
    this.updateBadges();
    this.renderCategoryBar();
    this.renderFiltersSidebar();
    this.renderCurrentView();
    this.updateCartDrawer();
  },

  switchView(viewName) {
    store.currentView = viewName;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update active nav links
    document.querySelectorAll('[data-view-nav]').forEach(link => {
      if (link.getAttribute('data-view-nav') === viewName) {
        link.classList.add('text-primary');
      } else {
        link.classList.remove('text-primary');
      }
    });

    this.renderCurrentView();
  },

  renderCurrentView() {
    const mainContainer = document.getElementById('main-content-view');
    if (!mainContainer) return;

    if (store.currentView === 'catalog') {
      mainContainer.innerHTML = this.templateCatalogView();
      this.renderProductCards();
      this.bindCatalogFilters();
    } else if (store.currentView === 'cart') {
      mainContainer.innerHTML = this.templateFullCartView();
      this.bindCartPageEvents();
    } else if (store.currentView === 'checkout') {
      mainContainer.innerHTML = this.templateCheckoutWizard();
      this.bindCheckoutEvents();
    } else if (store.currentView === 'tracking') {
      mainContainer.innerHTML = this.templateOrderTrackingView();
      this.bindTrackingEvents();
    } else if (store.currentView === 'admin') {
      mainContainer.innerHTML = this.templateAdminDashboard();
      this.bindAdminEvents();
    } else if (store.currentView === 'dashboard') {
      mainContainer.innerHTML = this.templatePersonalizedDashboard();
    }
  },

  updateBadges() {
    const cartCount = store.cart.reduce((sum, item) => sum + item.quantity, 0);
    const wishlistCount = store.wishlist.length;

    document.querySelectorAll('.cart-badge-count').forEach(el => {
      el.textContent = cartCount;
      el.style.display = cartCount > 0 ? 'flex' : 'none';
    });

    document.querySelectorAll('.wishlist-badge-count').forEach(el => {
      el.textContent = wishlistCount;
      el.style.display = wishlistCount > 0 ? 'flex' : 'none';
    });
  },

  renderCategoryBar() {
    const bar = document.getElementById('category-nav-bar');
    if (!bar) return;
    const categories = ['all', 'Electronics', 'Audio', 'Gaming', 'Fashion', 'Home & Living'];

    bar.innerHTML = categories.map(cat => {
      const label = cat === 'all' ? this.t('filter_all') : cat;
      const isActive = store.selectedCategory === cat ? 'active' : '';
      return `<button class="category-link ${isActive}" data-category="${cat}">${label}</button>`;
    }).join('');

    bar.querySelectorAll('.category-link').forEach(btn => {
      btn.addEventListener('click', () => {
        store.selectedCategory = btn.getAttribute('data-category');
        this.renderCategoryBar();
        this.renderProductCards();
      });
    });
  },

  renderFiltersSidebar() {
    // Dynamically populate categories & brands checkboxes
    const brands = Array.from(new Set(store.products.map(p => p.brand)));
    const brandWrap = document.getElementById('filter-brands-list');
    if (brandWrap) {
      brandWrap.innerHTML = brands.map(b => `
        <label class="filter-item">
          <input type="checkbox" value="${b}" class="filter-brand-check" ${store.selectedBrand === b ? 'checked' : ''}>
          <span>${b}</span>
        </label>
      `).join('');
    }
  },

  bindCatalogFilters() {
    const priceSlider = document.getElementById('filter-price-slider');
    const priceDisplay = document.getElementById('filter-price-val');
    if (priceSlider && priceDisplay) {
      priceSlider.value = store.maxPriceFilter;
      priceDisplay.textContent = store.formatPrice(store.maxPriceFilter);
      priceSlider.addEventListener('input', (e) => {
        store.maxPriceFilter = Number(e.target.value);
        priceDisplay.textContent = store.formatPrice(store.maxPriceFilter);
        this.renderProductCards();
      });
    }

    // Brand checks
    document.querySelectorAll('.filter-brand-check').forEach(chk => {
      chk.addEventListener('change', () => {
        const checked = Array.from(document.querySelectorAll('.filter-brand-check:checked')).map(c => c.value);
        store.selectedBrand = checked.length > 0 ? checked[0] : 'all';
        this.renderProductCards();
      });
    });

    // Rating checks
    document.querySelectorAll('input[name="filter-rating"]').forEach(r => {
      r.addEventListener('change', (e) => {
        store.minRating = Number(e.target.value);
        this.renderProductCards();
      });
    });

    // Reset filters
    document.getElementById('reset-filters-btn')?.addEventListener('click', () => {
      store.selectedCategory = 'all';
      store.selectedBrand = 'all';
      store.minRating = 0;
      store.maxPriceFilter = 2500;
      store.searchQuery = '';
      this.renderCategoryBar();
      this.renderFiltersSidebar();
      this.renderProductCards();
    });
  },

  getFilteredProducts() {
    return store.products.filter(p => {
      // Category match
      if (store.selectedCategory !== 'all' && p.category.toLowerCase() !== store.selectedCategory.toLowerCase()) {
        return false;
      }
      // Brand match
      if (store.selectedBrand !== 'all' && p.brand !== store.selectedBrand) {
        return false;
      }
      // Price match
      if (p.price > store.maxPriceFilter) {
        return false;
      }
      // Rating match
      if (p.rating < store.minRating) {
        return false;
      }
      // Search match
      if (store.searchQuery) {
        const q = store.searchQuery;
        const inTitle = p.title.toLowerCase().includes(q);
        const inBrand = p.brand.toLowerCase().includes(q);
        const inCategory = p.category.toLowerCase().includes(q);
        const inTags = p.tags.some(t => t.toLowerCase().includes(q));
        if (!inTitle && !inBrand && !inCategory && !inTags) return false;
      }
      return true;
    }).sort((a, b) => {
      if (store.sortBy === 'price-low') return a.price - b.price;
      if (store.sortBy === 'price-high') return b.price - a.price;
      if (store.sortBy === 'rating') return b.rating - a.rating;
      if (store.sortBy === 'newest') return b.id.localeCompare(a.id);
      return 0; // featured default
    });
  },

  renderProductCards() {
    const grid = document.getElementById('products-container');
    const countEl = document.getElementById('catalog-results-count');
    if (!grid) return;

    const products = this.getFilteredProducts();
    if (countEl) {
      countEl.textContent = `Showing ${products.length} of ${store.products.length} products`;
    }

    if (products.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3 class="text-xl font-bold">No products match your search criteria</h3>
          <p class="text-muted" style="margin-top: 0.5rem;">Try relaxing your filters or search query.</p>
          <button class="btn btn-primary" id="empty-reset-btn" style="margin-top: 1.5rem;">Reset All Filters</button>
        </div>
      `;
      document.getElementById('empty-reset-btn')?.addEventListener('click', () => {
        store.selectedCategory = 'all';
        store.selectedBrand = 'all';
        store.minRating = 0;
        store.maxPriceFilter = 2500;
        store.searchQuery = '';
        this.renderCategoryBar();
        this.renderProductCards();
      });
      return;
    }

    grid.className = store.viewMode === 'grid' ? 'products-grid' : 'products-list';

    grid.innerHTML = products.map(prod => {
      const isWishlisted = store.wishlist.includes(prod.id);
      const discount = Math.round(((prod.originalPrice - prod.price) / prod.originalPrice) * 100);

      return `
        <div class="product-card" data-product-id="${prod.id}">
          <div class="product-thumb-wrap" onclick="UI.openProductModal('${prod.id}')">
            <img src="${prod.images[0]}" alt="${prod.title}" loading="lazy" />
            <div class="product-card-badges">
              ${prod.flashSale ? `<span class="badge badge-accent">⚡ -${discount}%</span>` : ''}
              ${prod.stock < 15 ? `<span class="badge badge-danger">Only ${prod.stock} left</span>` : ''}
            </div>
            <button class="wishlist-toggle ${isWishlisted ? 'active' : ''}" 
                    title="Add to Wishlist"
                    onclick="event.stopPropagation(); store.toggleWishlist('${prod.id}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <div class="quick-view-overlay">
              <button class="btn btn-secondary w-full" style="backdrop-filter: blur(8px); background: rgba(255,255,255,0.9); font-size: 0.85rem;">
                👁️ ${this.t('quick_view')}
              </button>
            </div>
          </div>

          <div class="product-info">
            <span class="product-brand">${prod.brand} • ${prod.category}</span>
            <h3 class="product-title" onclick="UI.openProductModal('${prod.id}')">${prod.title}</h3>
            
            <div class="product-rating">
              <span>⭐ ${prod.rating}</span>
              <span class="rating-count">(${prod.reviewCount})</span>
            </div>

            <div class="product-pricing">
              <span class="price-current">${store.formatPrice(prod.price)}</span>
              <span class="price-original">${store.formatPrice(prod.originalPrice)}</span>
            </div>

            <div class="card-actions">
              <button class="btn btn-primary flex-1 btn-sm" onclick="store.addToCart('${prod.id}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                ${this.t('add_to_cart')}
              </button>
              <button class="btn btn-outline btn-sm" title="View details" onclick="UI.openProductModal('${prod.id}')">
                Details
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  handleSearchSuggestions(query) {
    const box = document.getElementById('search-suggestions');
    if (!box) return;

    if (!query || query.length < 2) {
      box.classList.remove('active');
      return;
    }

    const matches = store.products.filter(p => 
      p.title.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query)
    ).slice(0, 5);

    if (matches.length === 0) {
      box.innerHTML = `<div style="padding: 1rem; color: var(--text-muted); font-size: 0.85rem;">No products found for "${query}"</div>`;
      box.classList.add('active');
      return;
    }

    box.innerHTML = matches.map(p => `
      <div class="suggestion-item" onclick="UI.openProductModal('${p.id}'); document.getElementById('search-suggestions').classList.remove('active');">
        <img src="${p.images[0]}" alt="${p.title}" />
        <div style="flex: 1; min-width: 0;">
          <div style="font-weight: 600; font-size: 0.875rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${p.title}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${p.brand} • ${store.formatPrice(p.price)}</div>
        </div>
        <span class="badge badge-primary">View</span>
      </div>
    `).join('');
    box.classList.add('active');
  },

  // ==========================================
  // PRODUCT DETAIL MODAL & 360 & ZOOM
  // ==========================================
  openProductModal(productId) {
    const prod = store.products.find(p => p.id === productId);
    if (!prod) return;
    store.activeProduct = prod;

    const modalBackdrop = document.getElementById('product-modal-backdrop');
    const modalContent = document.getElementById('product-modal-content');
    if (!modalBackdrop || !modalContent) return;

    const compId = COMPLEMENTARY_BUNDLES[prod.id] || (prod.id !== 'prod-1' ? 'prod-1' : 'prod-2');
    const bundleProd = store.products.find(p => p.id === compId);
    const bundleTotal = bundleProd ? Math.round((prod.price + bundleProd.price) * 0.85) : prod.price;

    modalContent.innerHTML = `
      <button class="modal-close-btn" onclick="UI.closeProductModal()">✕</button>
      
      <div class="pdp-grid">
        <!-- Visuals Column -->
        <div>
          <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem;">
            <button class="btn btn-sm btn-primary" id="pdp-view-zoom-btn">🔍 Zoom View</button>
            <button class="btn btn-sm btn-secondary" id="pdp-view-360-btn">🔄 360° Interactive View</button>
          </div>

          <!-- Standard / Zoom Canvas -->
          <div id="pdp-standard-view" class="zoom-container">
            <img src="${prod.images[0]}" id="pdp-main-img" class="zoom-image" alt="${prod.title}" />
            <div id="pdp-zoom-lens" class="zoom-lens"></div>
          </div>

          <!-- 360 Degree Viewer Canvas -->
          <div id="pdp-360-view" class="viewer-360-container hidden">
            <div class="viewer-360-canvas-wrap" id="canvas-360-wrap">
              <img src="${prod.images[0]}" id="img-360" style="max-height: 280px; object-fit: contain; pointer-events: none;" alt="360 view" />
            </div>
            <div class="viewer-360-controls">
              <span>↔️ Drag horizontally to rotate</span>
              <button class="btn btn-sm btn-outline" style="color: white; border-color: rgba(255,255,255,0.4);" id="btn-360-spin">Auto Spin</button>
            </div>
          </div>

          <!-- Thumbnails -->
          <div class="gallery-thumbs">
            ${prod.images.map((img, i) => `
              <div class="thumb-item ${i === 0 ? 'active' : ''}" onclick="UI.selectGalleryThumb('${img}', this)">
                <img src="${img}" alt="Thumbnail ${i+1}" />
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Info Column -->
        <div>
          <div class="badge badge-primary" style="margin-bottom: 0.5rem;">${prod.brand} Authentic</div>
          <h2 class="text-2xl font-bold" style="line-height: 1.25; margin-bottom: 0.75rem;">${prod.title}</h2>
          
          <div class="flex items-center gap-3" style="margin-bottom: 1.25rem;">
            <div class="flex items-center text-warning font-semibold">
              ⭐ ${prod.rating} <span class="text-muted text-sm" style="margin-left: 4px;">(${prod.reviewCount} customer reviews)</span>
            </div>
            <span style="color: var(--border-strong);">|</span>
            <span class="badge ${prod.stock > 0 ? 'badge-success' : 'badge-danger'}">
              ${prod.stock > 0 ? `In Stock (${prod.stock} available)` : 'Out of Stock'}
            </span>
          </div>

          <div style="background: var(--bg-muted); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
            <div class="flex items-baseline gap-3">
              <span class="text-3xl font-bold text-primary">${store.formatPrice(prod.price)}</span>
              <span class="text-muted" style="text-decoration: line-through; font-size: 1.1rem;">${store.formatPrice(prod.originalPrice)}</span>
              <span class="badge badge-accent">Save ${Math.round(((prod.originalPrice - prod.price) / prod.originalPrice) * 100)}%</span>
            </div>
            <p class="text-xs text-muted" style="margin-top: 0.35rem;">Includes all taxes & duty. Free express delivery within 48 hours.</p>
          </div>

          <p class="text-muted" style="margin-bottom: 1.5rem; font-size: 0.95rem; line-height: 1.6;">${prod.description}</p>

          <!-- Variant Selector -->
          <div style="margin-bottom: 1.5rem;">
            <label class="text-sm font-semibold" style="display: block; margin-bottom: 0.5rem;">Color / Finish:</label>
            <div class="flex gap-2">
              <button class="btn btn-sm btn-secondary active" style="border: 2px solid var(--primary);">Space Titanium</button>
              <button class="btn btn-sm btn-secondary">Midnight Obsidian</button>
              <button class="btn btn-sm btn-secondary">Starlight Silver</button>
            </div>
          </div>

          <!-- Quantity & Actions -->
          <div class="flex items-center gap-4" style="margin-bottom: 1.5rem;">
            <div class="quantity-ctrl">
              <button onclick="UI.decrementModalQty()">-</button>
              <span id="modal-qty-val">1</span>
              <button onclick="UI.incrementModalQty()">+</button>
            </div>
            <button class="btn btn-primary flex-1" onclick="UI.addModalProductToCart('${prod.id}')">
              🛒 Add to Cart
            </button>
            <button class="btn btn-secondary" onclick="UI.buyNowDirectly('${prod.id}')">
              ⚡ Buy Now
            </button>
          </div>

          <!-- Frequently Bought Together Recommendation Box -->
          ${bundleProd ? `
            <div class="bundle-box">
              <div class="text-xs font-bold text-primary uppercase" style="letter-spacing: 0.05em;">Frequently Bought Together</div>
              <div class="flex items-center gap-3" style="margin-top: 0.75rem;">
                <img src="${prod.images[0]}" style="width: 48px; height: 48px; border-radius: 6px; object-fit: cover;" />
                <span class="font-bold">+</span>
                <img src="${bundleProd.images[0]}" style="width: 48px; height: 48px; border-radius: 6px; object-fit: cover;" />
                <div style="flex: 1; font-size: 0.85rem;">
                  <div class="font-semibold">${bundleProd.title.substring(0, 32)}...</div>
                  <div class="text-primary font-bold">Bundle Price: ${store.formatPrice(bundleTotal)} <span class="badge badge-success">-15% Bundle OFF</span></div>
                </div>
                <button class="btn btn-sm btn-outline" onclick="store.addToCart('${prod.id}'); store.addToCart('${bundleProd.id}'); UI.closeProductModal();">
                  Add Both
                </button>
              </div>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- Detail Tabs (Specifications, Reviews, Shipping) -->
      <div class="pdp-tabs-nav">
        <button class="tab-btn active" onclick="UI.switchPdpTab('specs', this)">Technical Specifications</button>
        <button class="tab-btn" onclick="UI.switchPdpTab('reviews', this)">Customer Reviews (${prod.reviews.length})</button>
        <button class="tab-btn" onclick="UI.switchPdpTab('shipping', this)">Delivery & Warranty</button>
      </div>

      <div id="pdp-tab-specs" class="pdp-tab-pane active">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
          ${Object.entries(prod.specs).map(([key, val]) => `
            <tr style="border-bottom: 1px solid var(--border);">
              <td style="padding: 0.75rem 0; font-weight: 600; width: 35%; color: var(--text-muted);">${key}</td>
              <td style="padding: 0.75rem 0;">${val}</td>
            </tr>
          `).join('')}
        </table>
      </div>

      <div id="pdp-tab-reviews" class="pdp-tab-pane">
        <div class="flex justify-between items-center" style="margin-bottom: 1.5rem;">
          <div>
            <div class="text-2xl font-bold">⭐ ${prod.rating} out of 5</div>
            <div class="text-muted text-sm">Based on ${prod.reviewCount} verified global ratings</div>
          </div>
          <button class="btn btn-primary btn-sm" onclick="UI.openWriteReviewModal('${prod.id}')">✍️ Write a Review</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${prod.reviews.map(r => `
            <div style="background: var(--bg-muted); padding: 1rem; border-radius: var(--radius-md);">
              <div class="flex items-center justify-between" style="margin-bottom: 0.5rem;">
                <div class="flex items-center gap-2">
                  <span style="font-weight: 600;">${r.author}</span>
                  ${r.verified ? '<span class="badge badge-success">✓ Verified Buyer</span>' : ''}
                </div>
                <span class="text-xs text-muted">${r.date}</span>
              </div>
              <div class="text-warning text-sm" style="margin-bottom: 0.4rem;">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)} <strong style="color: var(--text-main);">${r.title}</strong></div>
              <p style="font-size: 0.875rem; color: var(--text-muted);">${r.comment}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div id="pdp-tab-shipping" class="pdp-tab-pane">
        <div style="font-size: 0.9rem; line-height: 1.8; color: var(--text-muted);">
          <p>🚚 <strong>Express Shipping:</strong> Orders placed before 3:00 PM EST ship the same day. Delivered via FedEx / BlueDart Express air freight.</p>
          <p>🔄 <strong>30-Day Money-Back Guarantee:</strong> Return any item in original packaging for a full instant refund.</p>
          <p>🛡️ <strong>Global Manufacturer Warranty:</strong> Covered with 24 months accidental damage protection and international support.</p>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('active');
    this.initImageZoom();
    this.init360Viewer();
  },

  closeProductModal() {
    document.getElementById('product-modal-backdrop')?.classList.remove('active');
  },

  selectGalleryThumb(src, el) {
    document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    const mainImg = document.getElementById('pdp-main-img');
    const img360 = document.getElementById('img-360');
    if (mainImg) mainImg.src = src;
    if (img360) img360.src = src;
  },

  switchPdpTab(tabName, el) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.pdp-tab-pane').forEach(p => p.classList.remove('active'));
    el.classList.add('active');
    document.getElementById(`pdp-tab-${tabName}`)?.classList.add('active');
  },

  incrementModalQty() {
    const val = document.getElementById('modal-qty-val');
    if (val) val.textContent = Number(val.textContent) + 1;
  },

  decrementModalQty() {
    const val = document.getElementById('modal-qty-val');
    if (val && Number(val.textContent) > 1) {
      val.textContent = Number(val.textContent) - 1;
    }
  },

  addModalProductToCart(productId) {
    const qty = Number(document.getElementById('modal-qty-val')?.textContent || 1);
    store.addToCart(productId, qty);
    this.closeProductModal();
  },

  buyNowDirectly(productId) {
    store.addToCart(productId, 1);
    this.closeProductModal();
    this.switchView('checkout');
  },

  // Interactive Zoom Lens logic
  initImageZoom() {
    const container = document.getElementById('pdp-standard-view');
    const img = document.getElementById('pdp-main-img');
    const lens = document.getElementById('pdp-zoom-lens');
    if (!container || !img || !lens) return;

    container.addEventListener('mouseenter', () => lens.style.display = 'block');
    container.addEventListener('mouseleave', () => {
      lens.style.display = 'none';
      img.style.transform = 'scale(1)';
    });

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      lens.style.left = `${x - 60}px`;
      lens.style.top = `${y - 60}px`;

      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;
      img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
      img.style.transform = 'scale(1.85)';
    });
  },

  // Interactive 360 Degree View Simulator
  init360Viewer() {
    const zoomBtn = document.getElementById('pdp-view-zoom-btn');
    const btn360 = document.getElementById('pdp-view-360-btn');
    const zoomView = document.getElementById('pdp-standard-view');
    const view360 = document.getElementById('pdp-360-view');
    const spinBtn = document.getElementById('btn-360-spin');
    const canvasWrap = document.getElementById('canvas-360-wrap');
    const img360 = document.getElementById('img-360');

    if (!zoomBtn || !btn360 || !zoomView || !view360) return;

    zoomBtn.addEventListener('click', () => {
      zoomView.classList.remove('hidden');
      view360.classList.add('hidden');
      zoomBtn.className = 'btn btn-sm btn-primary';
      btn360.className = 'btn btn-sm btn-secondary';
    });

    btn360.addEventListener('click', () => {
      view360.classList.remove('hidden');
      zoomView.classList.add('hidden');
      btn360.className = 'btn btn-sm btn-primary';
      zoomBtn.className = 'btn btn-sm btn-secondary';
    });

    let isSpinning = false;
    let spinInterval = null;
    let currentAngle = 0;

    spinBtn?.addEventListener('click', () => {
      if (isSpinning) {
        clearInterval(spinInterval);
        isSpinning = false;
        spinBtn.textContent = 'Auto Spin';
      } else {
        isSpinning = true;
        spinBtn.textContent = 'Pause Spin';
        spinInterval = setInterval(() => {
          currentAngle = (currentAngle + 4) % 360;
          if (img360) {
            img360.style.transform = `rotateY(${currentAngle}deg) scale(1.05)`;
          }
        }, 50);
      }
    });

    let isDragging = false;
    let startX = 0;

    canvasWrap?.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
    });
    window.addEventListener('mouseup', () => isDragging = false);
    canvasWrap?.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      startX = e.clientX;
      currentAngle = (currentAngle + deltaX * 0.8) % 360;
      if (img360) {
        img360.style.transform = `rotateY(${currentAngle}deg)`;
      }
    });
  },

  openWriteReviewModal(productId) {
    const name = prompt('Your Name:', store.currentUser.name);
    if (!name) return;
    const title = prompt('Review Title (e.g. Excellent build quality):');
    if (!title) return;
    const comment = prompt('Your Experience & Comments:');
    if (!comment) return;

    const prod = store.products.find(p => p.id === productId);
    if (prod) {
      prod.reviews.unshift({
        id: `rev-${Date.now()}`,
        author: name,
        rating: 5,
        date: 'Just now',
        verified: true,
        title: title,
        comment: comment
      });
      prod.reviewCount += 1;
      store.save('lumina_products', store.products);
      this.showToast('Review submitted successfully! Thank you.', 'success');
      this.openProductModal(productId);
    }
  },

  // ==========================================
  // CART DRAWER & SLIDEOUT
  // ==========================================
  toggleCartDrawer(open) {
    const backdrop = document.getElementById('drawer-backdrop');
    if (!backdrop) return;
    if (open) {
      backdrop.classList.add('active');
    } else {
      backdrop.classList.remove('active');
    }
  },

  updateCartDrawer() {
    const drawerList = document.getElementById('drawer-items-list');
    const subtotalEl = document.getElementById('drawer-subtotal');
    const totals = store.getCartTotals();

    if (subtotalEl) {
      subtotalEl.textContent = store.formatPrice(totals.total);
    }

    // Shipping progress bar ($150 target)
    const thresholdUSD = 150;
    const currentUSD = totals.subtotal;
    const pct = Math.min(100, Math.round((currentUSD / thresholdUSD) * 100));
    const progressBar = document.getElementById('drawer-shipping-progress');
    const shippingNotice = document.getElementById('drawer-shipping-notice');
    if (progressBar) progressBar.style.width = `${pct}%`;
    if (shippingNotice) {
      if (pct >= 100) {
        shippingNotice.innerHTML = '🎉 <strong style="color: var(--success);">You unlocked FREE Express Delivery!</strong>';
      } else {
        const remaining = store.formatPrice(thresholdUSD - currentUSD);
        shippingNotice.innerHTML = `Add <strong>${remaining}</strong> more for <strong>FREE Express Shipping</strong>`;
      }
    }

    if (!drawerList) return;

    if (store.cart.length === 0) {
      drawerList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem;">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🛍️</div>
          <h4 class="font-bold text-lg">${this.t('cart_empty')}</h4>
          <p class="text-sm text-muted" style="margin-top: 0.35rem;">${this.t('cart_empty_sub')}</p>
        </div>
      `;
      return;
    }

    drawerList.innerHTML = store.cart.map(item => {
      const prod = store.products.find(p => p.id === item.productId);
      if (!prod) return '';

      return `
        <div class="cart-item">
          <img src="${prod.images[0]}" class="cart-item-img" alt="${prod.title}" />
          <div style="flex: 1; min-width: 0;">
            <h4 style="font-weight: 600; font-size: 0.9rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${prod.title}</h4>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.35rem;">${item.selectedVariant || 'Standard Edition'}</div>
            <div class="font-bold text-primary">${store.formatPrice(prod.price)}</div>
            
            <div class="flex items-center justify-between" style="margin-top: 0.6rem;">
              <div class="quantity-ctrl">
                <button onclick="store.updateCartQty('${prod.id}', -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="store.updateCartQty('${prod.id}', 1)">+</button>
              </div>
              <button style="color: var(--danger); font-size: 0.8rem;" onclick="store.removeFromCart('${prod.id}')">
                Remove
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  // ==========================================
  // VIEW TEMPLATES
  // ==========================================
  templateCatalogView() {
    return `
      <!-- Hero Flash Sale Banner -->
      <section class="hero-section">
        <div class="hero-glow-1"></div>
        <div class="hero-glow-2"></div>
        <div class="hero-content">
          <div class="flash-countdown">
            <span>⚡ ${this.t('flash_ends_in')}</span>
            <span class="countdown-box" id="flash-hours">07</span>:
            <span class="countdown-box" id="flash-mins">45</span>:
            <span class="countdown-box" id="flash-secs">12</span>
            <span class="badge badge-accent" style="margin-left: 0.5rem; cursor: pointer;" onclick="store.applyCouponCode('MEGA50')">Code: MEGA50</span>
          </div>

          <h1 class="text-4xl font-bold" style="line-height: 1.15; margin-bottom: 1rem;">
            ${this.t('hero_title')}
          </h1>
          <p style="font-size: 1.1rem; color: #cbd5e1; margin-bottom: 1.75rem; line-height: 1.6;">
            ${this.t('hero_desc')}
          </p>

          <div class="flex gap-3 flex-wrap">
            <button class="btn btn-primary btn-lg" onclick="document.getElementById('catalog-content').scrollIntoView({ behavior: 'smooth' })">
              Shop Trending Tech →
            </button>
            <button class="btn btn-outline btn-lg" style="color: white; border-color: rgba(255,255,255,0.4);" onclick="UI.switchView('tracking')">
              📦 ${this.t('live_tracking_title')}
            </button>
          </div>
        </div>
      </section>

      <!-- Category Filter Chips -->
      <div id="category-nav-bar" class="category-list" style="margin-bottom: 1.5rem;"></div>

      <!-- Main Catalog Layout (Sidebar Filters + Products Grid) -->
      <div class="catalog-layout" id="catalog-content">
        <!-- Sidebar Filters -->
        <aside class="filters-sidebar">
          <div class="flex items-center justify-between" style="margin-bottom: 1.25rem;">
            <h3 class="font-bold text-lg">Filters</h3>
            <button id="reset-filters-btn" class="text-xs text-primary font-semibold hover:underline">Reset All</button>
          </div>

          <!-- Price Range Slider -->
          <div class="filter-group">
            <div class="filter-title">
              <span>${this.t('filter_price')}</span>
              <span id="filter-price-val" class="text-primary font-bold">${store.formatPrice(store.maxPriceFilter)}</span>
            </div>
            <input type="range" min="50" max="2500" step="50" class="range-slider" id="filter-price-slider" />
          </div>

          <!-- Brands -->
          <div class="filter-group">
            <div class="filter-title">${this.t('filter_brand')}</div>
            <div id="filter-brands-list"></div>
          </div>

          <!-- Customer Ratings -->
          <div class="filter-group">
            <div class="filter-title">${this.t('filter_rating')}</div>
            <label class="filter-item">
              <input type="radio" name="filter-rating" value="4.8" />
              <span>⭐⭐⭐⭐⭐ 4.8 & Above</span>
            </label>
            <label class="filter-item">
              <input type="radio" name="filter-rating" value="4.5" />
              <span>⭐⭐⭐⭐ 4.5 & Above</span>
            </label>
            <label class="filter-item">
              <input type="radio" name="filter-rating" value="0" checked />
              <span>All Ratings</span>
            </label>
          </div>
        </aside>

        <!-- Product Grid Column -->
        <section>
          <div class="catalog-header">
            <span id="catalog-results-count" class="text-sm text-muted font-medium">Showing products</span>
            
            <div class="flex items-center gap-3">
              <div class="selector-dropdown">
                <select class="selector-select" id="catalog-sort">
                  <option value="featured">Featured Picks</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest Arrivals</option>
                </select>
                <span class="selector-chevron">▼</span>
              </div>

              <div class="view-toggles">
                <button class="view-btn active" id="view-grid-btn" title="Grid View">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"/></svg>
                </button>
                <button class="view-btn" id="view-list-btn" title="List View">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
                </button>
              </div>
            </div>
          </div>

          <div id="products-container" class="products-grid"></div>
        </section>
      </div>
    `;
  },

  templateFullCartView() {
    const totals = store.getCartTotals();

    return `
      <div style="max-width: 1000px; margin: 2rem auto;">
        <h2 class="text-3xl font-bold" style="margin-bottom: 1.5rem;">Shopping Cart (${store.cart.length} items)</h2>

        ${store.cart.length === 0 ? `
          <div style="text-align: center; padding: 4rem 1rem; background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px solid var(--border);">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🛒</div>
            <h3 class="text-2xl font-bold">Your cart is completely empty</h3>
            <p class="text-muted" style="margin-top: 0.5rem;">Explore our high-performance electronics and trending audio catalog!</p>
            <button class="btn btn-primary" style="margin-top: 1.5rem;" onclick="UI.switchView('catalog')">Start Shopping Now</button>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Items list -->
            <div style="grid-column: span 2;">
              <div style="background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.5rem;">
                ${store.cart.map(item => {
                  const prod = store.products.find(p => p.id === item.productId);
                  if (!prod) return '';
                  return `
                    <div class="cart-item" style="padding: 1.25rem 0;">
                      <img src="${prod.images[0]}" class="cart-item-img" style="width: 84px; height: 84px;" />
                      <div style="flex: 1;">
                        <div class="flex justify-between items-start">
                          <div>
                            <h4 class="font-bold">${prod.title}</h4>
                            <div class="text-xs text-muted">${prod.brand} • In Stock</div>
                          </div>
                          <div class="text-lg font-bold text-primary">${store.formatPrice(prod.price * item.quantity)}</div>
                        </div>

                        <div class="flex items-center justify-between" style="margin-top: 1rem;">
                          <div class="quantity-ctrl">
                            <button onclick="store.updateCartQty('${prod.id}', -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="store.updateCartQty('${prod.id}', 1)">+</button>
                          </div>
                          <div class="flex gap-3">
                            <button class="text-xs text-primary" onclick="store.toggleWishlist('${prod.id}'); store.removeFromCart('${prod.id}');">Save for Later</button>
                            <button class="text-xs text-danger" onclick="store.removeFromCart('${prod.id}')">Remove</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Summary -->
            <div>
              <div style="background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.5rem;">
                <h3 class="font-bold text-lg" style="margin-bottom: 1.25rem;">Order Summary</h3>
                
                <div class="flex justify-between" style="margin-bottom: 0.75rem;">
                  <span class="text-muted">Subtotal</span>
                  <span class="font-semibold">${store.formatPrice(totals.subtotal)}</span>
                </div>

                ${totals.discount > 0 ? `
                  <div class="flex justify-between text-success" style="margin-bottom: 0.75rem;">
                    <span>Discount (${store.appliedCoupon.code})</span>
                    <span>-${store.formatPrice(totals.discount)}</span>
                  </div>
                ` : ''}

                <div class="flex justify-between" style="margin-bottom: 0.75rem;">
                  <span class="text-muted">Shipping</span>
                  <span class="font-semibold">${totals.shipping === 0 ? '<strong style="color: var(--success);">FREE</strong>' : store.formatPrice(totals.shipping)}</span>
                </div>

                <div style="border-top: 1px solid var(--border); margin: 1rem 0; padding-top: 1rem;" class="flex justify-between font-bold text-xl">
                  <span>Total</span>
                  <span class="text-primary">${store.formatPrice(totals.total)}</span>
                </div>

                <!-- Coupon Box -->
                <div style="margin: 1.5rem 0;">
                  <div class="flex gap-2">
                    <input type="text" id="cart-coupon-input" placeholder="Promo code (e.g. MEGA50)" class="form-input" style="text-transform: uppercase;" />
                    <button class="btn btn-secondary btn-sm" id="cart-coupon-apply">Apply</button>
                  </div>
                  <div class="flex gap-2 flex-wrap" style="margin-top: 0.5rem;">
                    <span class="badge badge-accent" style="cursor: pointer;" onclick="document.getElementById('cart-coupon-input').value='MEGA50'">MEGA50 (-50%)</span>
                    <span class="badge badge-primary" style="cursor: pointer;" onclick="document.getElementById('cart-coupon-input').value='WELCOME10'">WELCOME10 (-10%)</span>
                  </div>
                </div>

                <button class="btn btn-primary btn-lg w-full" onclick="UI.switchView('checkout')">
                  Proceed to Checkout →
                </button>
              </div>
            </div>
          </div>
        `}
      </div>
    `;
  },

  bindCartPageEvents() {
    document.getElementById('cart-coupon-apply')?.addEventListener('click', () => {
      const code = document.getElementById('cart-coupon-input')?.value;
      if (code) store.applyCouponCode(code);
    });
  },

  // ==========================================
  // CHECKOUT WIZARD WITH UPI, CARDS & RECEIPT
  // ==========================================
  templateCheckoutWizard() {
    const totals = store.getCartTotals();

    return `
      <div style="max-width: 1040px; margin: 2rem auto;">
        <!-- Step Indicator -->
        <div class="checkout-steps">
          <div class="step-item active completed">
            <span class="step-num">✓</span>
            <span>1. Cart Review</span>
          </div>
          <div class="step-item active">
            <span class="step-num">2</span>
            <span>2. Shipping & Payment</span>
          </div>
          <div class="step-item">
            <span class="step-num">3</span>
            <span>3. Order Confirmation</span>
          </div>
        </div>

        <div class="checkout-grid">
          <!-- Shipping and Payment Forms -->
          <div>
            <!-- Section 1: Delivery Address -->
            <div style="background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.75rem; margin-bottom: 1.5rem;">
              <h3 class="font-bold text-xl" style="margin-bottom: 1.25rem;">📍 1. Delivery Address</h3>
              
              <div class="grid grid-cols-2 gap-4">
                <div class="form-group">
                  <label class="form-label">Full Name *</label>
                  <input type="text" id="chk-name" class="form-input" value="${store.currentUser.name}" required />
                </div>
                <div class="form-group">
                  <label class="form-label">Phone Number *</label>
                  <input type="tel" id="chk-phone" class="form-input" value="${store.currentUser.phone}" required />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Street Address *</label>
                <input type="text" id="chk-address" class="form-input" value="84 Innovation Blvd, Cyber Heights" required />
              </div>

              <div class="grid grid-cols-3 gap-4">
                <div class="form-group">
                  <label class="form-label">City *</label>
                  <input type="text" id="chk-city" class="form-input" value="Chennai" required />
                </div>
                <div class="form-group">
                  <label class="form-label">State / Region *</label>
                  <input type="text" id="chk-state" class="form-input" value="Tamil Nadu" required />
                </div>
                <div class="form-group">
                  <label class="form-label">Postal / ZIP Code *</label>
                  <input type="text" id="chk-zip" class="form-input" value="600001" required />
                </div>
              </div>
            </div>

            <!-- Section 2: Payment Gateways -->
            <div style="background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.75rem;">
              <h3 class="font-bold text-xl" style="margin-bottom: 1.25rem;">💳 2. Payment Method</h3>

              <div class="flex gap-2" style="margin-bottom: 1.5rem; flex-wrap: wrap;">
                <button class="btn btn-secondary active" id="pay-tab-card" onclick="UI.selectPaymentTab('card')">
                  💳 Credit / Debit Card
                </button>
                <button class="btn btn-secondary" id="pay-tab-upi" onclick="UI.selectPaymentTab('upi')">
                  📱 UPI / QR Code (GPay, PhonePe)
                </button>
                <button class="btn btn-secondary" id="pay-tab-cod" onclick="UI.selectPaymentTab('cod')">
                  💵 Cash on Delivery
                </button>
              </div>

              <!-- Credit Card Option with 3D Preview -->
              <div id="payment-pane-card">
                <!-- 3D Card Preview -->
                <div class="credit-card-preview">
                  <div class="flex justify-between items-center">
                    <div class="card-chip"></div>
                    <span style="font-weight: 800; font-size: 1.2rem; font-style: italic;">VISA / MASTER</span>
                  </div>
                  <div class="card-number-display" id="card-num-preview">•••• •••• •••• 4242</div>
                  <div class="flex justify-between text-xs">
                    <div>
                      <span style="opacity: 0.7; font-size: 0.65rem;">CARD HOLDER</span>
                      <div id="card-name-preview" style="font-weight: 700; text-transform: uppercase;">${store.currentUser.name}</div>
                    </div>
                    <div>
                      <span style="opacity: 0.7; font-size: 0.65rem;">EXPIRES</span>
                      <div id="card-exp-preview" style="font-weight: 700;">12/28</div>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">Card Number</label>
                  <input type="text" id="card-input-number" class="form-input" placeholder="4242 4242 4242 4242" maxlength="19" value="4242 8899 1234 4242" />
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div class="form-group">
                    <label class="form-label">Expiry Date</label>
                    <input type="text" id="card-input-exp" class="form-input" placeholder="MM/YY" maxlength="5" value="12/28" />
                  </div>
                  <div class="form-group">
                    <label class="form-label">CVV / CVC</label>
                    <input type="password" id="card-input-cvv" class="form-input" placeholder="•••" maxlength="4" value="888" />
                  </div>
                </div>
              </div>

              <!-- UPI Option -->
              <div id="payment-pane-upi" class="hidden" style="text-align: center; padding: 1.5rem 0;">
                <div class="upi-qr-box">
                  <div style="font-weight: 700; margin-bottom: 0.5rem; color: #4338ca;">Scan QR Code with any UPI App</div>
                  <!-- SVG Mock QR Code -->
                  <svg width="180" height="180" viewBox="0 0 100 100" style="margin: 0 auto; display: block;">
                    <rect width="100" height="100" fill="#ffffff" />
                    <!-- Corner Top Left -->
                    <rect x="5" y="5" width="28" height="28" fill="#0f172a" />
                    <rect x="9" y="9" width="20" height="20" fill="#ffffff" />
                    <rect x="13" y="13" width="12" height="12" fill="#4338ca" />
                    <!-- Corner Top Right -->
                    <rect x="67" y="5" width="28" height="28" fill="#0f172a" />
                    <rect x="71" y="9" width="20" height="20" fill="#ffffff" />
                    <rect x="75" y="13" width="12" height="12" fill="#4338ca" />
                    <!-- Corner Bottom Left -->
                    <rect x="5" y="67" width="28" height="28" fill="#0f172a" />
                    <rect x="9" y="71" width="20" height="20" fill="#ffffff" />
                    <rect x="13" y="75" width="12" height="12" fill="#4338ca" />
                    <!-- Random QR bits pattern -->
                    <rect x="40" y="8" width="6" height="6" fill="#0f172a" />
                    <rect x="52" y="14" width="8" height="6" fill="#0f172a" />
                    <rect x="40" y="26" width="12" height="6" fill="#0f172a" />
                    <rect x="42" y="42" width="16" height="16" fill="#6366f1" />
                    <rect x="10" y="44" width="8" height="8" fill="#0f172a" />
                    <rect x="24" y="48" width="8" height="6" fill="#0f172a" />
                    <rect x="68" y="44" width="10" height="6" fill="#0f172a" />
                    <rect x="82" y="50" width="8" height="8" fill="#0f172a" />
                    <rect x="40" y="68" width="8" height="8" fill="#0f172a" />
                    <rect x="56" y="76" width="12" height="6" fill="#0f172a" />
                    <rect x="74" y="80" width="14" height="10" fill="#0f172a" />
                  </svg>
                  <div style="font-weight: 700; margin-top: 0.5rem; font-size: 0.95rem;">Amount: ${store.formatPrice(totals.total)}</div>
                  <div class="text-xs text-muted">UPI ID: pay.lumina@hdfcbank</div>
                </div>

                <div class="upi-apps-icons">
                  <span class="badge badge-primary">Google Pay</span>
                  <span class="badge badge-accent">PhonePe</span>
                  <span class="badge badge-success">Paytm UPI</span>
                </div>
              </div>

              <!-- COD Option -->
              <div id="payment-pane-cod" class="hidden" style="padding: 1.5rem; background: var(--bg-muted); border-radius: var(--radius-md);">
                <div class="font-bold">💵 Cash / Card on Delivery</div>
                <p class="text-sm text-muted" style="margin-top: 0.4rem;">
                  Pay in cash or tap your debit/credit card on the delivery agent's handheld POS machine when your package arrives at your doorstep.
                </p>
              </div>
            </div>
          </div>

          <!-- Order Summary Column -->
          <div>
            <div style="background: var(--bg-surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.5rem; position: sticky; top: 90px;">
              <h4 class="font-bold text-lg" style="margin-bottom: 1rem;">Items in Order (${store.cart.length})</h4>
              
              <div style="max-height: 220px; overflow-y: auto; margin-bottom: 1rem;">
                ${store.cart.map(c => {
                  const p = store.products.find(x => x.id === c.productId);
                  if (!p) return '';
                  return `
                    <div class="flex items-center gap-3" style="padding: 0.4rem 0;">
                      <img src="${p.images[0]}" style="width: 40px; height: 40px; border-radius: 4px; object-fit: cover;" />
                      <div style="flex: 1; font-size: 0.825rem;">
                        <div class="font-semibold" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 170px;">${p.title}</div>
                        <div class="text-muted">Qty: ${c.quantity}</div>
                      </div>
                      <span class="font-bold text-sm">${store.formatPrice(p.price * c.quantity)}</span>
                    </div>
                  `;
                }).join('')}
              </div>

              <div style="border-top: 1px solid var(--border); padding-top: 1rem;">
                <div class="flex justify-between text-sm" style="margin-bottom: 0.4rem;">
                  <span class="text-muted">Subtotal</span>
                  <span>${store.formatPrice(totals.subtotal)}</span>
                </div>
                ${totals.discount > 0 ? `
                  <div class="flex justify-between text-sm text-success" style="margin-bottom: 0.4rem;">
                    <span>Discount</span>
                    <span>-${store.formatPrice(totals.discount)}</span>
                  </div>
                ` : ''}
                <div class="flex justify-between text-sm" style="margin-bottom: 0.4rem;">
                  <span class="text-muted">Shipping</span>
                  <span>${totals.shipping === 0 ? 'FREE' : store.formatPrice(totals.shipping)}</span>
                </div>
                <div class="flex justify-between font-bold text-lg" style="margin-top: 0.75rem; border-top: 1px solid var(--border); padding-top: 0.75rem;">
                  <span>Payable Total</span>
                  <span class="text-primary">${store.formatPrice(totals.total)}</span>
                </div>
              </div>

              <button class="btn btn-primary btn-lg w-full" id="place-order-btn" style="margin-top: 1.5rem;">
                🔒 Complete Purchase (${store.formatPrice(totals.total)})
              </button>

              <div class="text-center text-xs text-muted" style="margin-top: 0.75rem;">
                🛡️ 256-bit SSL Encrypted Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  selectPaymentTab(method) {
    document.getElementById('pay-tab-card')?.classList.toggle('active', method === 'card');
    document.getElementById('pay-tab-upi')?.classList.toggle('active', method === 'upi');
    document.getElementById('pay-tab-cod')?.classList.toggle('active', method === 'cod');

    document.getElementById('payment-pane-card')?.classList.toggle('hidden', method !== 'card');
    document.getElementById('payment-pane-upi')?.classList.toggle('hidden', method !== 'upi');
    document.getElementById('payment-pane-cod')?.classList.toggle('hidden', method !== 'cod');
  },

  bindCheckoutEvents() {
    const cardInput = document.getElementById('card-input-number');
    const cardPreview = document.getElementById('card-num-preview');
    cardInput?.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      let matches = v.match(/\d{4,16}/g);
      let match = matches && matches[0] || '';
      let parts = [];
      for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
      }
      if (parts.length) {
        e.target.value = parts.join(' ');
        cardPreview.textContent = parts.join(' ');
      }
    });

    document.getElementById('place-order-btn')?.addEventListener('click', () => {
      const name = document.getElementById('chk-name')?.value.trim();
      const address = document.getElementById('chk-address')?.value.trim();
      const city = document.getElementById('chk-city')?.value.trim();
      const zip = document.getElementById('chk-zip')?.value.trim();

      if (!name || !address || !city) {
        UI.showToast('Please fill in required delivery address fields!', 'error');
        return;
      }

      const activeMethod = document.getElementById('payment-pane-card')?.classList.contains('hidden')
        ? (document.getElementById('payment-pane-upi')?.classList.contains('hidden') ? 'Cash on Delivery' : 'UPI (Scan & Pay)')
        : 'Credit Card (Visa/Master)';

      const order = store.createOrder({
        name,
        email: store.currentUser.email,
        address,
        city,
        zip,
        paymentMethod: activeMethod
      });

      UI.showConfetti();
      UI.switchView('tracking');
      UI.showToast(`Order #${order.id} placed successfully!`, 'success');
    });
  },

  // ==========================================
  // ORDER TRACKING VIEW & SIMULATOR
  // ==========================================
  templateOrderTrackingView() {
    const order = store.activeTrackingOrder || store.orders[0];
    if (!order) {
      return `
        <div style="max-width: 800px; margin: 3rem auto; text-align: center;">
          <h2 class="text-2xl font-bold">No active orders found</h2>
          <button class="btn btn-primary" style="margin-top: 1rem;" onclick="UI.switchView('catalog')">Shop Now</button>
        </div>
      `;
    }

    const steps = [
      { num: 1, name: 'Order Placed', time: '10:30 AM' },
      { num: 2, name: 'Packed & Verified', time: '12:15 PM' },
      { num: 3, name: 'In Transit', time: '02:45 PM' },
      { num: 4, name: 'Out for Delivery', time: 'Est. 05:00 PM' },
      { num: 5, name: 'Delivered', time: 'Pending' }
    ];

    return `
      <div style="max-width: 900px; margin: 2rem auto;">
        <div class="flex justify-between items-center" style="margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="badge badge-primary">Real-time GPS Tracking</span>
            <h2 class="text-3xl font-bold" style="margin-top: 0.35rem;">Order #${order.id}</h2>
            <div class="text-sm text-muted">Tracking Code: <strong>${order.trackingNumber}</strong> • Placed on ${order.date}</div>
          </div>
          <div class="flex gap-2">
            <button class="btn btn-secondary btn-sm" id="btn-print-receipt">🖨️ Print Invoice Receipt</button>
            <button class="btn btn-primary btn-sm" id="btn-simulate-step">🚀 Advance Live Delivery Step</button>
          </div>
        </div>

        <div class="order-tracking-card">
          <!-- Stepper -->
          <div class="tracking-timeline">
            ${steps.map(s => {
              const isDone = order.step > s.num;
              const isCurrent = order.step === s.num;
              return `
                <div class="tracking-step ${isDone ? 'done' : ''} ${isCurrent ? 'current' : ''}">
                  <div class="tracking-step-icon">
                    ${isDone ? '✓' : s.num}
                  </div>
                  <div style="font-weight: 700; font-size: 0.85rem;">${s.name}</div>
                  <div class="text-xs text-muted">${s.time}</div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Live Courier Map Simulation -->
          <div class="map-simulation" id="live-map-sim">
            <div style="position: absolute; top: 12px; left: 16px; color: #38bdf8; font-weight: 600; font-size: 0.85rem;">
              📡 Satellite Live Transit Feed
            </div>
            <div class="map-road"></div>
            <div class="map-vehicle" id="map-courier-van" style="left: ${Math.min(80, order.step * 18)}%;">
              🚚
            </div>
            <div style="position: absolute; bottom: 12px; right: 16px; color: #94a3b8; font-size: 0.8rem;">
              Destination: ${order.customer.address}
            </div>
          </div>

          <!-- Delivery Agent details -->
          <div class="flex justify-between items-center" style="background: var(--bg-muted); padding: 1.25rem; border-radius: var(--radius-md); margin-top: 1.5rem; flex-wrap: wrap; gap: 1rem;">
            <div class="flex items-center gap-3">
              <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #6366f1, #06b6d4); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.2rem;">
                ${order.rider.name.charAt(0)}
              </div>
              <div>
                <div class="font-bold">${order.rider.name}</div>
                <div class="text-xs text-muted">Courier Specialist • ⭐ 4.95 Rating</div>
              </div>
            </div>
            <div class="flex gap-2">
              <a href="tel:${order.rider.phone}" class="btn btn-secondary btn-sm">📞 Call Rider (${order.rider.phone})</a>
              <button class="btn btn-outline btn-sm" onclick="alert('Driver notified. They will ring the doorbell upon arrival!')">🔔 Gate Instructions</button>
            </div>
          </div>

          <!-- Items in this shipment -->
          <div style="margin-top: 1.5rem; border-top: 1px solid var(--border); padding-top: 1.5rem;">
            <h4 class="font-bold" style="margin-bottom: 1rem;">Package Contents</h4>
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              ${order.items.map(item => `
                <div class="flex items-center justify-between" style="font-size: 0.9rem;">
                  <div class="flex items-center gap-3">
                    <img src="${item.image}" style="width: 44px; height: 44px; border-radius: 6px; object-fit: cover;" />
                    <div>
                      <div class="font-semibold">${item.title}</div>
                      <div class="text-xs text-muted">Quantity: ${item.quantity}</div>
                    </div>
                  </div>
                  <span class="font-bold text-primary">${store.formatPrice(item.price * item.quantity)}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Hidden Printable Receipt for Printing -->
        <div id="printable-receipt" style="display: none; padding: 2rem; background: white; color: black; font-family: sans-serif;">
          <h1 style="font-size: 2rem; border-bottom: 2px solid #000; padding-bottom: 0.5rem;">LUMINA LUXE OFFICIAL INVOICE</h1>
          <p><strong>Order ID:</strong> ${order.id}</p>
          <p><strong>Date:</strong> ${order.date}</p>
          <p><strong>Customer:</strong> ${order.customer.name} (${order.customer.email})</p>
          <p><strong>Shipping Address:</strong> ${order.customer.address}</p>
          <p><strong>Payment Method:</strong> ${order.paymentMethod}</p>
          <hr style="margin: 1.5rem 0;" />
          <table style="width: 100%; text-align: left; border-collapse: collapse;">
            <thead>
              <tr style="border-bottom: 1px solid #000;">
                <th>Item</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${order.items.map(i => `
                <tr>
                  <td>${i.title}</td>
                  <td>${i.quantity}</td>
                  <td>${store.formatPrice(i.price * i.quantity)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <hr style="margin: 1.5rem 0;" />
          <p style="text-align: right; font-size: 1.25rem;"><strong>Grand Total: ${store.formatPrice(order.total)}</strong></p>
        </div>
      </div>
    `;
  },

  bindTrackingEvents() {
    const order = store.activeTrackingOrder || store.orders[0];
    if (!order) return;

    // Advance step simulator button
    document.getElementById('btn-simulate-step')?.addEventListener('click', () => {
      if (order.step < 5) {
        order.step += 1;
        if (order.step === 5) order.status = 'Delivered';
        else if (order.step === 4) order.status = 'Out for Delivery';
        else if (order.step === 3) order.status = 'In Transit';
        else if (order.step === 2) order.status = 'Packed';
        
        store.save('lumina_orders', store.orders);
        this.renderCurrentView();
        this.showToast(`Order status advanced to: ${order.status}!`, 'success');
      } else {
        this.showToast('This package has already been successfully delivered!', 'warning');
      }
    });

    // Print Receipt
    document.getElementById('btn-print-receipt')?.addEventListener('click', () => {
      window.print();
    });
  },

  // ==========================================
  // ADMIN DASHBOARD & ANALYTICS
  // ==========================================
  templateAdminDashboard() {
    const totalRev = store.orders.reduce((sum, o) => sum + o.total, 0);
    const totalOrders = store.orders.length;
    const inventoryCount = store.products.length;

    return `
      <div style="max-width: 1200px; margin: 2rem auto;">
        <div class="flex justify-between items-center" style="margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div class="badge badge-accent">Store Administration Suite</div>
            <h2 class="text-3xl font-bold" style="margin-top: 0.35rem;">Admin Analytics & Management</h2>
          </div>
          <div class="flex gap-2">
            <button class="btn btn-primary btn-sm" id="btn-admin-add-product">➕ Add New Product</button>
            <button class="btn btn-secondary btn-sm" id="btn-admin-add-coupon">🏷️ Create Discount Code</button>
          </div>
        </div>

        <!-- KPI Metrics Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" style="margin-bottom: 2rem;">
          <div class="stat-widget">
            <div class="stat-icon" style="background: var(--primary-light); color: var(--primary);">💰</div>
            <div>
              <div class="text-xs text-muted uppercase font-bold">Total Revenue</div>
              <div class="text-2xl font-bold">${store.formatPrice(totalRev)}</div>
              <span class="stat-trend text-success">↑ 24.8% vs last week</span>
            </div>
          </div>

          <div class="stat-widget">
            <div class="stat-icon" style="background: var(--success-light); color: var(--success);">📦</div>
            <div>
              <div class="text-xs text-muted uppercase font-bold">Orders Processed</div>
              <div class="text-2xl font-bold">${totalOrders}</div>
              <span class="stat-trend text-success">↑ 18.2%</span>
            </div>
          </div>

          <div class="stat-widget">
            <div class="stat-icon" style="background: var(--warning-light); color: var(--warning);">🛍️</div>
            <div>
              <div class="text-xs text-muted uppercase font-bold">Active Inventory</div>
              <div class="text-2xl font-bold">${inventoryCount} Items</div>
              <span class="stat-trend text-primary">In Stock</span>
            </div>
          </div>

          <div class="stat-widget">
            <div class="stat-icon" style="background: #fce7f3; color: #db2777;">👥</div>
            <div>
              <div class="text-xs text-muted uppercase font-bold">Active Customers</div>
              <div class="text-2xl font-bold">1,480</div>
              <span class="stat-trend text-success">↑ 99.4% CSAT</span>
            </div>
          </div>
        </div>

        <!-- Interactive SVG Chart -->
        <div class="admin-card" style="margin-bottom: 2rem;">
          <div class="flex justify-between items-center" style="margin-bottom: 1.5rem;">
            <h3 class="font-bold text-lg">📈 Weekly Revenue Velocity (USD)</h3>
            <span class="badge badge-success">Live Sync Active</span>
          </div>

          <!-- SVG Chart -->
          <svg viewBox="0 0 700 200" style="width: 100%; height: 200px; overflow: visible;">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#6366f1" stop-opacity="0.4" />
                <stop offset="100%" stop-color="#6366f1" stop-opacity="0.0" />
              </linearGradient>
            </defs>
            <!-- Grid lines -->
            <line x1="0" y1="40" x2="700" y2="40" stroke="var(--border)" stroke-dasharray="4" />
            <line x1="0" y1="90" x2="700" y2="90" stroke="var(--border)" stroke-dasharray="4" />
            <line x1="0" y1="140" x2="700" y2="140" stroke="var(--border)" stroke-dasharray="4" />
            <line x1="0" y1="190" x2="700" y2="190" stroke="var(--border)" />
            
            <!-- Area & Line -->
            <path d="M 20,160 Q 120,120 220,140 T 420,70 T 560,95 T 680,30 L 680,190 L 20,190 Z" fill="url(#chartGrad)" />
            <path d="M 20,160 Q 120,120 220,140 T 420,70 T 560,95 T 680,30" fill="none" stroke="#6366f1" stroke-width="4" stroke-linecap="round" />
            
            <!-- Data Points -->
            <circle cx="20" cy="160" r="5" fill="#6366f1" />
            <circle cx="220" cy="140" r="5" fill="#6366f1" />
            <circle cx="420" cy="70" r="5" fill="#6366f1" />
            <circle cx="560" cy="95" r="5" fill="#6366f1" />
            <circle cx="680" cy="30" r="6" fill="#06b6d4" stroke="#ffffff" stroke-width="2" />
          </svg>
          <div class="flex justify-between text-xs text-muted" style="margin-top: 0.5rem;">
            <span>Mon ($1,200)</span>
            <span>Tue ($2,400)</span>
            <span>Wed ($1,850)</span>
            <span>Thu ($3,900)</span>
            <span>Fri ($3,100)</span>
            <span>Sat ($5,400)</span>
            <span>Sun Today ($6,800)</span>
          </div>
        </div>

        <!-- Products Inventory Table -->
        <div class="admin-card" style="margin-bottom: 2rem;">
          <h3 class="font-bold text-lg" style="margin-bottom: 1rem;">📦 Product Inventory Management</h3>
          <div class="table-responsive">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${store.products.map(p => `
                  <tr>
                    <td>
                      <div class="flex items-center gap-3">
                        <img src="${p.images[0]}" style="width: 36px; height: 36px; border-radius: 4px; object-fit: cover;" />
                        <span class="font-semibold">${p.title}</span>
                      </div>
                    </td>
                    <td>${p.category}</td>
                    <td class="font-bold">${store.formatPrice(p.price)}</td>
                    <td>
                      <span class="badge ${p.stock < 15 ? 'badge-danger' : 'badge-success'}">${p.stock} units</span>
                    </td>
                    <td>⭐ ${p.rating}</td>
                    <td>
                      <button class="btn btn-outline btn-sm" onclick="UI.editProductPrice('${p.id}')">Edit Price</button>
                      <button class="btn btn-danger btn-sm" onclick="UI.deleteProduct('${p.id}')">Delete</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Orders Table -->
        <div class="admin-card">
          <h3 class="font-bold text-lg" style="margin-bottom: 1rem;">📋 Customer Orders Management</h3>
          <div class="table-responsive">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${store.orders.map(o => `
                  <tr>
                    <td class="font-bold">${o.id}</td>
                    <td>${o.customer.name}</td>
                    <td>${o.date}</td>
                    <td class="font-bold">${store.formatPrice(o.total)}</td>
                    <td>
                      <span class="badge ${o.status === 'Delivered' ? 'badge-success' : 'badge-primary'}">${o.status}</span>
                    </td>
                    <td>
                      <button class="btn btn-secondary btn-sm" onclick="store.activeTrackingOrder = store.orders.find(x => x.id === '${o.id}'); UI.switchView('tracking');">
                        Track Map
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  bindAdminEvents() {
    // Add product
    document.getElementById('btn-admin-add-product')?.addEventListener('click', () => {
      const title = prompt('Enter Product Title:');
      if (!title) return;
      const category = prompt('Category (Electronics / Audio / Gaming / Fashion / Home & Living):', 'Electronics');
      const price = Number(prompt('Price in USD:', '299'));
      const stock = Number(prompt('Initial Stock Quantity:', '20'));

      const newProduct = {
        id: `prod-${Date.now()}`,
        title,
        category: category || 'Electronics',
        brand: 'Lumina Custom',
        price: price || 199,
        originalPrice: Math.round((price || 199) * 1.25),
        rating: 5.0,
        reviewCount: 1,
        stock: stock || 20,
        flashSale: true,
        tags: ['new arrival', 'exclusive'],
        description: 'New premium addition to the Lumina curated catalog.',
        specs: { 'Warranty': '1 Year' },
        images: [
          'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=80'
        ],
        reviews: []
      };

      store.products.unshift(newProduct);
      store.save('lumina_products', store.products);
      this.renderCurrentView();
      this.showToast(`New product "${title}" published!`, 'success');
    });

    // Add coupon
    document.getElementById('btn-admin-add-coupon')?.addEventListener('click', () => {
      const code = prompt('Enter Coupon Code (e.g. VIP25):');
      if (!code) return;
      const pct = Number(prompt('Discount Percentage (e.g. 25):', '25'));
      store.coupons.push({
        code: code.toUpperCase(),
        discountPercent: pct,
        minSpend: 50,
        description: `${pct}% discount code`
      });
      store.save('lumina_coupons', store.coupons);
      this.showToast(`Coupon ${code.toUpperCase()} created!`, 'success');
    });
  },

  editProductPrice(productId) {
    const prod = store.products.find(p => p.id === productId);
    if (!prod) return;
    const newPrice = Number(prompt(`Enter new price in USD for "${prod.title}":`, prod.price));
    if (newPrice && !isNaN(newPrice)) {
      prod.price = newPrice;
      store.save('lumina_products', store.products);
      this.renderCurrentView();
      this.showToast('Product price updated!', 'success');
    }
  },

  deleteProduct(productId) {
    if (confirm('Are you sure you want to remove this product from the store catalog?')) {
      store.products = store.products.filter(p => p.id !== productId);
      store.save('lumina_products', store.products);
      this.renderCurrentView();
      this.showToast('Product deleted from catalog.', 'warning');
    }
  },

  // ==========================================
  // PERSONALIZED USER DASHBOARD
  // ==========================================
  templatePersonalizedDashboard() {
    return `
      <div style="max-width: 960px; margin: 2rem auto;">
        <div style="background: linear-gradient(135deg, #1e1b4b, #312e81); color: white; padding: 2.5rem; border-radius: var(--radius-lg); margin-bottom: 2rem;">
          <div class="flex items-center gap-4">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #6366f1, #06b6d4); display: flex; align-items: center; justify-content: center; font-size: 1.75rem; font-weight: bold;">
              ${store.currentUser.name.charAt(0)}
            </div>
            <div>
              <h2 class="text-2xl font-bold">Welcome back, ${store.currentUser.name}!</h2>
              <div style="color: #94a3b8; font-size: 0.9rem;">${store.currentUser.email} • Lumina VIP Platinum Member</div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4" style="margin-bottom: 2rem;">
          <div class="stat-widget">
            <div class="stat-icon" style="background: var(--primary-light); color: var(--primary);">📦</div>
            <div>
              <div class="text-xs text-muted font-bold">Orders Placed</div>
              <div class="text-xl font-bold">${store.orders.length}</div>
            </div>
          </div>

          <div class="stat-widget">
            <div class="stat-icon" style="background: #fce7f3; color: #db2777;">❤️</div>
            <div>
              <div class="text-xs text-muted font-bold">Wishlist Items</div>
              <div class="text-xl font-bold">${store.wishlist.length}</div>
            </div>
          </div>

          <div class="stat-widget">
            <div class="stat-icon" style="background: var(--success-light); color: var(--success);">🪙</div>
            <div>
              <div class="text-xs text-muted font-bold">Reward Points</div>
              <div class="text-xl font-bold">2,450 pts</div>
            </div>
          </div>
        </div>

        <!-- Recent Orders -->
        <div class="admin-card">
          <h3 class="font-bold text-lg" style="margin-bottom: 1rem;">Past Order History</h3>
          ${store.orders.map(o => `
            <div style="border-bottom: 1px solid var(--border); padding: 1rem 0;" class="flex justify-between items-center">
              <div>
                <div class="font-bold">#${o.id} - ${o.items[0]?.title || 'Package'}</div>
                <div class="text-xs text-muted">Placed on ${o.date} • Total: ${store.formatPrice(o.total)}</div>
              </div>
              <div class="flex items-center gap-3">
                <span class="badge badge-success">${o.status}</span>
                <button class="btn btn-primary btn-sm" onclick="store.activeTrackingOrder = store.orders.find(x => x.id === '${o.id}'); UI.switchView('tracking');">
                  Track Package
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // ==========================================
  // AI CHATBOT / HELPDESK
  // ==========================================
  handleChatSubmit() {
    const inp = document.getElementById('chat-input');
    const msg = inp?.value.trim();
    if (!msg) return;

    this.addChatMessage(msg, 'user');
    inp.value = '';

    // Simulate AI thinking and reply
    setTimeout(() => {
      const lower = msg.toLowerCase();
      let reply = "I'm glad to help! You can browse our curated catalog or speak to human support at support@lumina.io.";

      if (lower.includes('order') || lower.includes('track')) {
        const o = store.orders[0];
        reply = `Your recent order #${o.id} is currently **${o.status}** with estimated delivery by tomorrow! You can click "Track Orders" in the top bar to watch the live van.`;
      } else if (lower.includes('coupon') || lower.includes('discount') || lower.includes('offer')) {
        reply = "Today's best offer is **MEGA50** for 50% discount on orders over $200! You can also use **WELCOME10** for 10% off.";
      } else if (lower.includes('return') || lower.includes('refund')) {
        reply = "We offer a 100% hassle-free 30-day return policy. Simply head to your orders page or reply here to generate a return pickup.";
      } else if (lower.includes('laptop') || lower.includes('computer')) {
        reply = "I highly recommend the **Zenith Horizon 16-inch OLED Creator Laptop**! It features an M3 Max chip and 3.2K 120Hz display.";
      } else if (lower.includes('headphone') || lower.includes('audio') || lower.includes('sound')) {
        reply = "Check out our best-seller: **AeroPulse Pro Noise-Cancelling Headphones** with 40-hour battery and high-res audio!";
      }

      this.addChatMessage(reply, 'bot');
    }, 600);
  },

  addChatMessage(text, sender) {
    const container = document.getElementById('chat-messages-container');
    if (!container) return;

    const bubble = document.createElement('div');
    bubble.className = `chat-bubble chat-bubble-${sender}`;
    bubble.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
  },

  sendQuickChatPrompt(query) {
    const inp = document.getElementById('chat-input');
    if (inp) {
      inp.value = query;
      this.handleChatSubmit();
    }
  },

  // Toast notification
  showToast(message, type = 'primary') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✅' : type === 'warning' ? '⚠️' : type === 'error' ? '❌' : 'ℹ️'}</span>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  },

  // Confetti effect on checkout
  showConfetti() {
    const canvas = document.createElement('div');
    canvas.style.position = 'fixed';
    canvas.style.inset = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    const colors = ['#6366f1', '#06b6d4', '#ec4899', '#10b981', '#f59e0b'];
    for (let i = 0; i < 60; i++) {
      const piece = document.createElement('div');
      piece.style.position = 'absolute';
      piece.style.width = `${Math.random() * 10 + 6}px`;
      piece.style.height = `${Math.random() * 6 + 4}px`;
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.top = '-20px';
      piece.style.borderRadius = '2px';
      piece.style.transition = `all ${Math.random() * 2 + 1.5}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
      canvas.appendChild(piece);

      setTimeout(() => {
        piece.style.top = `${Math.random() * 80 + 30}%`;
        piece.style.transform = `rotate(${Math.random() * 720}deg) scale(0.6)`;
        piece.style.opacity = '0';
      }, 50);
    }

    setTimeout(() => canvas.remove(), 3500);
  }
};

// Auto boot on DOM load
document.addEventListener('DOMContentLoaded', () => {
  UI.init();
});

// Export globally for onclick handlers
window.UI = UI;
window.store = store;
