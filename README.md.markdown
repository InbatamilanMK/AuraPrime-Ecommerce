# 💎 AuraPrime — Next-Gen Intelligent Commerce Platform

An enterprise-grade, visually stunning, full-featured eCommerce platform designed to showcase modern frontend architecture, interactive UX, and real-time state management for portfolios and live client demonstrations.

---

## 🌟 Key Highlights & Features (Complete Checklist)

### 🔑 1. Core Features
- **User Authentication & Profile**: Instant guest & persistent authenticated profiles, saved address book, order history, and dynamic 1-click **Customer / Admin mode switcher**.
- **Product Catalog & Advanced Discovery**:
  - Multi-category navigation (Electronics, Audio, Gaming, Fashion, Home & Living).
  - Dynamic interactive filters: Price range slider, brand checkboxes, star rating filters (4.8★+, 4.5★+).
  - Instant live autocomplete search bar with real-time dropdown product matches.
  - Sort by Featured, Price (Low to High / High to Low), Customer Rating, and Newest Arrivals.
  - Switchable Grid View and List View.
- **Shopping Cart & Wishlist**:
  - Slide-out Cart Drawer + Dedicated Full Cart Page.
  - Quantity increments (`+`/`-`), instant item removal, and "Save for Later" into Wishlist.
  - Dynamic Free Shipping progress meter (e.g., *"Add $50 more for FREE Express Shipping"*).
  - Multi-coupon engine (`MEGA50` for 50% discount, `WELCOME10` for 10% discount, `FREESHIP`).
- **Complete Checkout Wizard & Multi-Gateway Simulation**:
  - Step-by-step checkout process with delivery address form validation.
  - **UPI Gateway**: Realistic QR Code generator with GPay, PhonePe, and Paytm UPI simulation.
  - **3D Animated Credit/Debit Card**: Live updating card preview reflecting cardholder name, formatted card number, expiry, and CVV.
  - **Cash on Delivery (COD)** option.
  - **Instant Invoice / Receipt Generator**: Printable, downloadable invoice with itemized table, taxes, and order details.
- **Real-Time Live Order Tracking**:
  - Interactive status stepper: *Order Placed ➔ Packed ➔ In Transit ➔ Out for Delivery ➔ Delivered*.
  - Live satellite transit feed simulation with an animated moving courier van across map coordinates.
  - Courier specialist details with phone call simulation and doorbell instructions.
  - **"Advance Live Delivery Step" button** for recruiter/portfolio live demonstration.
- **Admin Management & Analytics Dashboard**:
  - Accessible via top navbar role switcher (*Switch to Admin*).
  - Real-time KPI widgets: Total Store Revenue, Processed Orders, Inventory count, and Customer CSAT.
  - **Interactive SVG Weekly Sales Velocity Chart** with responsive gradients and data points.
  - Product Inventory CRUD: Add new products, update prices, delete items, and monitor low stock badges.
  - Customer Orders management table with status updating.

---

### 🚀 2. Advanced Professional Touch
- **Intelligent Recommendation Engine**:
  - *"Frequently Bought Together"* bundle box with automatic bundled discount calculations (e.g., Headphones + Spatial Speaker, OLED Laptop + Mechanical Keyboard).
  - Complementary item pairing based on category and tags.
- **Dynamic Pricing & Flash Sales**:
  - Live animated hero countdown ticker (Hours : Minutes : Seconds).
  - Automatic discount percentage badges (`-35% OFF`, `⚡ Flash Deal`).
- **Multi-Language & Multi-Currency Engine**:
  - Real-time currency switching between **USD ($)**, **INR (₹)**, **EUR (€)**, and **GBP (£)** with automatic rate conversion.
  - Real-time language switching between **English** and **தமிழ் (Tamil)** with localized UI strings.
- **Verified Review & Rating System**:
  - Star rating breakdown with verified purchase badges.
  - Interactive *"Write a Review"* modal that stores new reviews in persistent storage.
- **AI Concierge Helpdesk Chatbot**:
  - Floating bottom-right widget with notification indicator.
  - Quick action prompt chips: *"Where is my order?"*, *"Best coupon?"*, *"Recommend a laptop"*, *"Return policy"*.
  - Smart keyword-aware responses with dynamic order lookup and product suggestions.
- **Product Enhancements**:
  - **Interactive Image Zoom Lens** on hover/move.
  - **Interactive 360° Product Rotation View** with drag-to-rotate and auto-spin controls.
  - Technical specifications table, verified customer reviews tab, and shipping policy accordion.
- **Modern Glassmorphic Dark & Light Mode**:
  - Flawless dark mode styling with smooth CSS transitions, neon glows, and persistent local theme storage.

---

## 🚀 Live Hosting Guide (For Your Portfolio)

You can host this project completely free on any platform within 2 minutes:

### Option 1: Vercel (Recommended)
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository and click **Deploy**.
4. Vercel will instantly detect `vercel.json` and give you a live production URL (e.g., `https://lumina-ecommerce.vercel.app`).

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com) and click **"Add new site" ➔ "Import an existing project"**.
2. Select your GitHub repository.
3. Netlify will detect `netlify.toml` and deploy your site immediately with global CDN.

### Option 3: GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** ➔ **Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

---

## 💻 Local Development & Testing

This project has **zero external runtime dependencies** and works out of the box:

### Using Node.js:
```bash
npm start
# or
node server.js
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Using Python:
```bash
python3 -m http.server 3000
```

### Standalone:
Simply double-click `index.html` to open it in Google Chrome, Edge, Safari, or Firefox!

---

## 📁 Project Structure

```
ecommerce-platform/
├── index.html       # Ultra-modern Single Page App UI shell
├── styles.css       # Complete design system (Dark mode, glassmorphism, responsive grid)
├── app.js           # Core state management, cart, checkout, 360 viewer, AI chat, admin logic
├── server.js        # Zero-dependency Node.js production server with REST APIs
├── vercel.json      # Zero-config Vercel routing
├── netlify.toml     # Zero-config Netlify routing
├── package.json     # Standard Node.js package manifest
└── README.md        # Documentation and deployment guide
```


