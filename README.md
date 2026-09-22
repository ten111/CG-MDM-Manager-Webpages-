# CG MDM Manager — Official Static Website

A professional, responsive, and accessible static website for **CG MDM Manager**, an Android application designed for schools and educators in Chhattisgarh to digitally manage Mid-Day Meal (MDM) / PM POSHAN records.

Developed by **E Kosh Tech Solutions**.

---

## 📁 Project Structure

```text
├── index.html              # Homepage (Hero, About, Features, How It Works, Benefits, CTA)
├── privacy-policy.html     # Comprehensive, professional Privacy Policy (14 sections)
├── terms-of-service.html   # Full Terms of Service with Non-Affiliation Disclaimers
├── contact.html            # Contact & Support page with static form + direct mailto trigger
├── css/
│   └── style.css           # Complete responsive stylesheet (CSS variables, mobile-first)
├── js/
│   └── script.js           # Vanilla JavaScript (download config, mobile nav, contact handler)
├── assets/
│   ├── logo.svg            # Official vector emblem logo for CG MDM Manager
│   └── app-screenshot.svg  # Realistic Android smartphone interface mockup
├── public/                 # Static assets mirrored for Vite dev server / build tools
│   ├── assets/
│   ├── css/
│   └── js/
└── README.md               # Documentation, customization, and deployment instructions
```

---

## 🚀 How to View & Test Locally

Because this is a **100% static website** (pure semantic HTML5, CSS3, and vanilla JavaScript):

### Option 1: Direct File Opening
Double-click `index.html` in any modern web browser (Google Chrome, Firefox, Safari, Edge).

### Option 2: Using Any Lightweight Static Server
```bash
# Using Python 3
python3 -m http.server 3000

# OR using Node.js npx serve
npx serve .

# OR using the included Vite dev server
npm run dev
```
Open `http://localhost:3000` in your web browser.

---

## ⚙️ Customization Guide

### 1. Connecting Your Google Play Store Download Link
Open `js/script.js` (and `public/js/script.js`) and locate line 10:
```javascript
// Replace '#download' with your actual Google Play Store URL:
const APP_DOWNLOAD_URL = "https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME";
```
Every "Download App" button across the homepage, navigation bar, hero, and footer will automatically update to link directly to your Play Store listing.

### 2. Updating Support & Developer Email Addresses
Search and replace the contact addresses in `index.html`, `privacy-policy.html`, `terms-of-service.html`, and `contact.html`:
- **App Support Email:** `cgmdmmanager@gmail.com`
- **Developer Email:** `krish.7m@gmail.com`
- **Developer Name:** `E Kosh Tech Solutions`

In `js/script.js`, verify `targetEmail = "cgmdmmanager@gmail.com";` in the contact form handler.

### 3. Customizing Colors & Theme Variables
The entire design uses CSS custom properties defined at the top of `css/style.css`:
```css
:root {
  --primary: #1565C0;        /* Main Brand Blue */
  --primary-dark: #0D47A1;   /* Deep Blue */
  --accent-green: #2E7D32;   /* Nutrition / Growth Green */
  --slate-900: #0F172A;      /* Dark Text / Footer */
  --radius-lg: 16px;         /* Card Border Radius */
}
```

### 4. Replacing Screenshots or Logos
- Replace `assets/logo.svg` with your custom SVG or PNG image.
- Replace `assets/app-screenshot.svg` with your actual Android application screenshot (recommended dimensions: ~720x1520 or 1080x2400).

---

## 🌐 Deploying to Static Hosting Platforms

This project can be deployed instantly to any static hosting provider without server configuration:

### GitHub Pages
1. Push the repository to GitHub.
2. In your GitHub repository, navigate to **Settings > Pages**.
3. Under **Branch**, select `main` (or `master`) and directory `/ (root)`.
4. Click **Save**. Your site will be live at `https://<username>.github.io/<repo>/`.

### Netlify
1. Drag and drop the project folder directly into the Netlify Drop dashboard at `app.netlify.com/drop`.
2. Or connect your Git repository with:
   - **Build command:** *(leave empty)*
   - **Publish directory:** `.`

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run `firebase login` and `firebase init hosting`.
3. Set public directory to `.` and configure as single-page app if desired.
4. Run `firebase deploy`.

### Vercel / Cloudflare Pages
- Connect repository, set framework preset to **Other**, and publish directory to `.`.

---

## ⚖️ Official Legal & Non-Affiliation Disclaimer

**CG MDM Manager** is an independent digital tool developed by **E Kosh Tech Solutions** to assist schools, headmasters, and teachers in maintaining Mid-Day Meal / PM POSHAN records digitally.

This software application and website are **not** owned, operated, authorized, or officially endorsed by the Government of Chhattisgarh, the School Education Department, or any government department or ministry.
