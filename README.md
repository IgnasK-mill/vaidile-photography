# Vaidilė Gudašiūtė Photography Portfolio

A modern, bright & airy photography portfolio website built with React, Tailwind CSS, and Vite. Deployed on Netlify.

## Features

✨ **Bilingual Support** - Lithuanian & English
📱 **Fully Responsive** - Mobile-first design
🎨 **Minimalist Aesthetics** - Bright, clean, professional
🖼️ **Portfolio Gallery** - Filterable gallery with categories
💼 **Service Cards** - Pricing and service information
📝 **Contact Form** - Easy client inquiries
🔍 **SEO Optimized** - Meta tags and proper structure

## Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons
- **Framer Motion** - Animations (ready to use)

## Getting Started

### Prerequisites
- Node.js 16+
- npm or pnpm

### Installation

```bash
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
pnpm dev
```

Visit `http://localhost:3000` to see your site.

### Build

```bash
npm run build
# or
pnpm build
```

## Deployment to Netlify

### Option 1: GitHub Integration (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/vaidile-portfolio.git
git push -u origin main
```

2. Connect to Netlify:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose your repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy!

### Option 2: Direct Deploy

```bash
npm install -g netlify-cli
netlify login
netlify deploy
```

## Customization

### Colors
Edit the theme colors in `tailwind.config.js`:
- `cream` - Background
- `ivory` - Secondary background
- `stone` - Primary text
- `sage` - Accent color
- `blush` - Highlight color
- `warm` - Hover state

### Content
Update translations and content in `src/content.js`

### Images
Replace placeholder images in components with real images:
- Hero section image
- Portfolio gallery images
- About section image

## File Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── PortfolioSection.jsx
│   ├── ServicesSection.jsx
│   ├── AboutSection.jsx
│   ├── TestimonialsSection.jsx
│   ├── ContactSection.jsx
│   └── Footer.jsx
├── App.jsx
├── content.js
├── index.css
└── main.jsx
```

## License

© 2024 Vaidilė Gudašiūtė Photography. All rights reserved.
