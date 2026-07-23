# 🚀 Deployment Guide for Netlify

## Step 1: Prepare Your Local Environment

1. **Make sure you have the latest Node.js installed:**
   ```bash
   node --version  # Should be v16 or higher
   npm --version
   ```

2. **Install dependencies:**
   ```bash
   cd vaidile-portfolio-netlify
   npm install
   # or
   pnpm install
   ```

3. **Test locally:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` and verify everything looks good.

## Step 2: Push to GitHub

1. **Create a GitHub account** (if you don't have one): https://github.com

2. **Create a new repository** on GitHub named `vaidile-portfolio`

3. **Initialize Git in your project folder:**
   ```bash
   cd vaidile-portfolio-netlify
   git init
   git add .
   git commit -m "Initial commit - Vaidilė photography portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/vaidile-portfolio.git
   git push -u origin main
   ```

## Step 3: Deploy to Netlify

### Method A: Connect via Netlify Dashboard (Easiest)

1. Go to **https://netlify.com**
2. Log in (create account if needed)
3. Click **"New site from Git"**
4. Select **GitHub**
5. Authorize Netlify to access your GitHub
6. Select your **vaidile-portfolio** repository
7. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click **Deploy**

Netlify will automatically:
- Install dependencies
- Build your project
- Deploy to a live URL
- Set up HTTPS
- Enable auto-deploy on every GitHub push

### Method B: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

## Step 4: Custom Domain (Optional)

1. **Purchase a domain** (GoDaddy, Namecheap, etc.)
2. In Netlify dashboard: **Site settings → Domain management**
3. Add your custom domain
4. Follow Netlify's DNS instructions

## Step 5: Form Submission Setup (To Make Contact Form Work)

Currently, the contact form shows a success message but doesn't send emails.

### Option A: Use Formspree (Simplest)

1. Go to https://formspree.io
2. Sign up and create a new form
3. In `src/components/ContactSection.jsx`, update the form:

```jsx
<form onSubmit={handleSubmit} action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

### Option B: Use EmailJS

1. Go to https://www.emailjs.com
2. Create an account and set up service
3. Install EmailJS: `npm install @emailjs/browser`
4. Use EmailJS SDK in your contact form

### Option C: Use Netlify Functions (Advanced)

This comes with your Netlify site for free!

## Step 6: Environment Variables (If Needed)

Create `.env` file in root:
```
VITE_API_URL=your_api_url
```

Then in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Step 7: Monitoring & Analytics

### Built-in Netlify Analytics
- Site settings → Analytics
- View traffic, page views, etc.

### Connect Google Analytics
1. Get your Google Analytics ID
2. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## Updating Your Site

Every time you push changes to GitHub, Netlify automatically rebuilds and deploys:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

## Troubleshooting

### Build fails
- Check `npm run build` works locally
- Ensure all dependencies are installed
- Check Node version (should be 16+)

### Site looks broken after deploy
- Clear browser cache (Ctrl+Shift+Delete)
- Check Netlify deploy logs for errors
- Rebuild: Site settings → Trigger deploy

### Custom domain not working
- Wait 24-48 hours for DNS propagation
- Check DNS settings in Netlify dashboard

## Support

- **Netlify Docs:** https://docs.netlify.com
- **Vite Docs:** https://vitejs.dev
- **Tailwind Docs:** https://tailwindcss.com
