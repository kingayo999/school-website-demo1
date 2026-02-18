# Quick Start Guide

## 🚀 Get Running in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to: **http://localhost:3000**

---

## 📝 Before You Deploy

### Essential Updates in `constants.ts`:

1. **School Information:**
   - Update `name`, `location`, `address`
   - Change `phone` and `whatsapp` numbers
   - Update `email` address

2. **Google Maps:**
   - Replace `GOOGLE_MAPS_EMBED` URL with your actual school location
   - Get embed URL from: https://www.google.com/maps

3. **SEO:**
   - Update `app/layout.tsx` - change `alternates.canonical` URL
   - Update `app/sitemap.ts` - change `baseUrl`
   - Update `app/robots.ts` - change sitemap URL

4. **Content:**
   - Replace testimonials with real parent reviews
   - Update stats with actual school data
   - Add real school photos to gallery

---

## 🌐 Deploy to Vercel

### Fastest Method:
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import GitHub repo
4. Click "Deploy" (auto-detects Next.js)
5. Done! 🎉

---

## ✅ Post-Deployment Checklist

- [ ] Test all WhatsApp links
- [ ] Verify contact information
- [ ] Check mobile responsiveness
- [ ] Test form submission
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)

---

**Need help?** Check the full README.md for detailed instructions.

