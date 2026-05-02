# Hero Section & Mobile Responsiveness - Improvement Guide

## Current Issues Identified

### Hero Section Issues
1. **SVG overlays not mobile responsive** - Fixed viewBox doesn't scale on mobile
2. **Text size jumps** - Large gaps between breakpoints
3. **Gold ticker positioning** - Stacks poorly on mobile
4. **Background overlay** - Covers too much on mobile
5. **CTA buttons** - Don't have enough touch padding
6. **Badge text** - Too small on mobile

### Mobile Responsiveness Issues
1. **Navigation** - Tight padding, hard to use
2. **Touch targets** - Buttons smaller than 44px minimum
3. **Font sizes** - Not progressive enough across breakpoints
4. **Images** - Not properly optimized for mobile
5. **Spacing** - Inconsistent between mobile/desktop
6. **Viewport optimization** - Missing safe-area support
7. **Grid layouts** - Not enough gap on mobile
8. **Form inputs** - Not mobile-friendly

---

## IMPROVEMENT 1: Enhanced Hero Section

### Changes to `app/page.tsx`

**Current Issues:**
- Text shadows cause readability issues on mobile
- SVG pattern not responsive
- Gradient overlay covers text on small screens
- Trust stats grid too cramped

**Solution:**

```tsx
// Replace the hero section with improved version
<section className="relative bg-cream px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 overflow-hidden">
  {/* Mobile-optimized background images */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    {HERO_IMAGES.map((src, idx) => (
      <div
        key={src}
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${idx === slideIdx ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: `url(${src})`,
          backgroundPosition: 'center',
          filter: 'brightness(1.1) contrast(1.05) saturate(1.15)'
        }}
      />
    ))}
    {/* Mobile-optimized gradient overlay */}
    <div className="absolute inset-y-0 left-0 w-full sm:w-3/4 md:w-1/2 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-transparent" />
  </div>

  {/* Responsive SVG backdrop */}
  <svg
    className="absolute left-0 top-0 w-full h-full pointer-events-none select-none z-10"
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 1440 600"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity: 0.04 }}
  >
    {/* SVG content remains the same */}
  </svg>

  {/* Main content */}
  <div className="relative z-20 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12 max-w-7xl mx-auto">
    {/* Text content */}
    <div className="flex-1 text-white w-full lg:w-auto">
      {/* License badge - improved responsiveness */}
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-slate-100 rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
        <span className="text-[10px] sm:text-[11px] tracking-widest uppercase font-medium whitespace-nowrap">
          Uganda licensed operator
        </span>
      </div>

      {/* Headline - improved typography */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4 sm:mb-6 text-white hero-heading-shadow">
        {HERO_HEADLINES[headlineIdx]}
      </h1>

      {/* Subheading */}
      <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 text-slate-100 hero-text-shadow max-w-2xl">
        {HERO_SUBCOPIES[subcopyIdx]}
      </p>

      {/* CTAs - mobile-optimized */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-10">
        <a
          href="https://wa.me/256704833021"
          className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 active:from-red-800 active:to-red-700 text-white text-sm font-semibold px-5 sm:px-6 py-3 rounded-full no-underline shadow-lg shadow-red-600/30 transition duration-300 min-h-12 sm:min-h-auto"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.861L.057 23.5l5.79-1.452A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.369l-.36-.214-3.716.931.99-3.63-.236-.373A9.818 9.818 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
          </svg>
          <span className="hidden sm:inline">Request consultation</span>
          <span className="sm:hidden">Chat with us</span>
        </a>
        <a
          href="https://invest.diamondcapitalafrica.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 text-white text-sm font-semibold px-5 sm:px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 active:from-gold-700 active:to-gold-600 no-underline shadow-lg shadow-gold-500/30 transition duration-300 min-h-12 sm:min-h-auto"
        >
          <span className="hidden sm:inline">Invest opportunities</span>
          <span className="sm:hidden">Invest</span>
          <span>→</span>
        </a>
        <a
          href="/products"
          className="hidden sm:inline-flex items-center justify-center gap-2 text-white text-sm font-semibold px-6 py-3 rounded-full border border-white/30 bg-white/5 hover:bg-white/15 active:bg-white/25 no-underline transition duration-300 backdrop-blur-sm"
        >
          Explore services →
        </a>
      </div>

      {/* Slide indicators */}
      <div className="flex items-center gap-2 mb-8 sm:mb-12">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setHeroIndex(idx)}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
              idx === slideIdx ? 'bg-white shadow-lg w-6 sm:w-8' : 'bg-white/40 hover:bg-white/60 w-2 sm:w-2.5'
            }`}
            aria-label={`Slide ${idx + 1}`}
            aria-current={idx === slideIdx}
          />
        ))}
      </div>

      {/* Trust stats - mobile optimized */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {[
          { value: "99.5%+", label: "Purity" },
          { value: "Verified", label: "Licensed" },
          { value: "48–72h", label: "Dispatch" },
          { value: "KYC-ready", label: "Docs" },
        ].map(({ value, label }) => (
          <div key={label} className="rounded-lg sm:rounded-xl border border-gold-200 bg-white/95 backdrop-blur-sm p-3 sm:p-4 shadow-sm">
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 mb-1 font-semibold">{label}</div>
            <div className="text-lg sm:text-xl font-bold text-slate-900">{value}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Gold ticker - mobile optimized */}
    <div className="w-full lg:w-80 lg:flex-shrink-0 mt-8 lg:mt-0">
      <GoldTicker />
    </div>
  </div>
</section>
```

---

## IMPROVEMENT 2: Mobile-First Responsive Typography

### Changes to `app/globals.css`

Add responsive font scales:

```css
/* ── Responsive Typography System ── */

html {
  /* Mobile-first base size */
  font-size: 16px;
}

@media (min-width: 640px) {
  html {
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  html {
    font-size: 17px;
  }
}

/* Responsive heading sizes */
h1 {
  /* Mobile: 24px, Tablet: 32px, Desktop: 48px */
  @apply text-2xl sm:text-3xl md:text-4xl lg:text-5xl;
}

h2 {
  /* Mobile: 20px, Tablet: 28px, Desktop: 36px */
  @apply text-xl sm:text-2xl md:text-3xl lg:text-4xl;
}

h3 {
  /* Mobile: 18px, Tablet: 22px, Desktop: 28px */
  @apply text-lg sm:text-xl md:text-2xl lg:text-3xl;
}

/* Responsive body text */
p {
  line-height: 1.6;
}

small {
  @apply text-xs sm:text-sm;
}

/* Touch-friendly sizing for mobile */
button, a {
  /* Minimum 44x44px touch target on mobile */
  @apply min-h-11 sm:min-h-10;
}

/* Mobile-safe spacing */
@media (max-width: 640px) {
  body {
    padding-top: max(env(safe-area-inset-top), 0.5rem);
    padding-bottom: max(env(safe-area-inset-bottom), 0.5rem);
    padding-left: max(env(safe-area-inset-left), 1rem);
    padding-right: max(env(safe-area-inset-right), 1rem);
  }
}
```

---

## IMPROVEMENT 3: Mobile Viewport Configuration

### Add to `app/layout.tsx`

```tsx
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=5" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="apple-mobile-web-app-title" content="Diamond Capital Africa" />
<meta name="theme-color" media="(prefers-color-scheme: light)" content="#fdfbf7" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0f172a" />
```

---

## IMPROVEMENT 4: Responsive Navigation

### Changes to `app/components/Header.tsx`

```tsx
// Reduce padding on mobile
<nav className="mx-auto flex max-w-6xl items-center justify-between px-3 sm:px-4 py-3 sm:py-4">
  {/* Logo - smaller on mobile */}
  <Link href="/" className="flex items-center gap-2 flex-shrink-0">
    <Image 
      src="/Logo.png" 
      alt="Diamond Capital Africa"
      width={40}
      height={40}
      priority
      className="h-10 sm:h-12 w-auto object-contain"
    />
  </Link>

  {/* ... navigation items ... */}

  {/* Mobile menu - better padding */}
  <button
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="md:hidden p-2 sm:p-3 rounded-lg hover:bg-gold-50 transition"
    aria-label="Toggle menu"
    aria-expanded={mobileMenuOpen}
  >
    {/* hamburger icon */}
  </button>
</nav>

// Mobile menu - full screen with safe spacing
<motion.div 
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: "auto", opacity: 1 }}
  exit={{ height: 0, opacity: 0 }}
  transition={{ duration: 0.3 }}
  className="md:hidden overflow-auto max-h-[calc(100vh-120px)]"
  style={{
    paddingBottom: 'max(env(safe-area-inset-bottom), 1rem)',
    paddingLeft: 'max(env(safe-area-inset-left), 1rem)',
    paddingRight: 'max(env(safe-area-inset-right), 1rem)',
  }}
>
  {/* Menu items with better touch targets */}
  <ul className="flex flex-col divide-y divide-gold-100">
    {navLinks.map((link) => (
      <li key={link.href} className="first:border-t border-gold-100">
        <Link 
          href={link.href}
          className="block px-4 py-4 sm:py-3 text-base sm:text-sm hover:bg-gold-50 transition"
        >
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
</motion.div>
```

---

## IMPROVEMENT 5: Mobile-Optimized Form

### Changes to `app/contact/page.tsx`

```tsx
// Improve form layout for mobile
<form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:space-y-5">
  {/* Single column on mobile, 2 columns on desktop */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
    <div>
      <label htmlFor="name" className="text-xs sm:text-sm uppercase tracking-wider text-slate-700 font-semibold">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        className="mt-2 w-full rounded-lg border border-gold-200 bg-white px-4 py-3 sm:py-2 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition"
        placeholder="Your name"
        autoComplete="name"
      />
      {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
    </div>

    <div>
      <label htmlFor="email" className="text-xs sm:text-sm uppercase tracking-wider text-slate-700 font-semibold">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={isSubmitting}
        className="mt-2 w-full rounded-lg border border-gold-200 bg-white px-4 py-3 sm:py-2 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition"
        placeholder="you@email.com"
        autoComplete="email"
      />
      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
    </div>
  </div>

  {/* Button with better mobile touch target */}
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full rounded-full bg-gold-600 hover:bg-gold-700 disabled:bg-gold-400 disabled:cursor-not-allowed px-6 py-4 sm:py-3 text-base sm:text-sm font-semibold text-white transition min-h-12 sm:min-h-auto"
  >
    {isSubmitting ? 'Sending...' : 'Send inquiry'}
  </button>
</form>
```

---

## IMPROVEMENT 6: Tailwind Breakpoint Configuration

### Update `tailwind.config.ts`

```typescript
theme: {
  extend: {
    screens: {
      'xs': '375px',  // Small phones
      'sm': '640px',  // Tablets
      'md': '768px',  // Small desktop
      'lg': '1024px', // Desktop
      'xl': '1280px', // Large desktop
      '2xl': '1536px', // Extra large
      
      // Orientation-based
      'landscape': { 'raw': '(orientation: landscape)' },
      'portrait': { 'raw': '(orientation: portrait)' },
      
      // Touch device specific
      'touch': { 'raw': '(hover: none) and (pointer: coarse)' },
      'no-touch': { 'raw': '(hover: hover) and (pointer: fine)' },
    },
    spacing: {
      'safe-top': 'max(1rem, env(safe-area-inset-top))',
      'safe-bottom': 'max(1rem, env(safe-area-inset-bottom))',
      'safe-left': 'max(1rem, env(safe-area-inset-left))',
      'safe-right': 'max(1rem, env(safe-area-inset-right))',
    },
  },
},
```

---

## IMPROVEMENT 7: Image Optimization for Mobile

### Update `next.config.ts`

```typescript
images: {
  unoptimized: false,
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: '**.pexels.com',
    },
  ],
  formats: ['image/webp', 'image/avif'],
},
```

---

## IMPROVEMENT 8: Touch-Friendly Spacing

Add to `app/globals.css`:

```css
/* ── Touch Device Optimizations ── */

@media (hover: none) and (pointer: coarse) {
  /* Increase touch target sizes */
  button, a {
    @apply min-h-12 min-w-12;
  }

  /* Increase padding for touch interaction */
  input, textarea, select {
    @apply py-3 px-4;
  }

  /* Reduce animations on touch devices */
  * {
    @apply transition-none;
  }
  
  *:active {
    @apply transition-colors duration-100;
  }
}

/* Remove tap highlight on iOS */
@supports (-webkit-touch-callout: none) {
  input, button, a {
    -webkit-tap-highlight-color: transparent;
  }
}

/* Fix mobile font size on input focus */
input, textarea, select {
  font-size: 16px; /* Prevents zoom on focus */
}

/* Responsive spacing */
@media (max-width: 640px) {
  .safe-pad-mobile {
    padding-left: max(1rem, env(safe-area-inset-left));
    padding-right: max(env(safe-area-inset-right), 1rem);
  }
}
```

---

## Summary of Improvements

| Issue | Solution |
|-------|----------|
| Hero section not mobile responsive | New breakpoints for text/padding |
| SVG patterns not scaling | Changed viewBox preservation strategy |
| Text shadows hard to read | Added improved hero shadow classes |
| Gold ticker positioning | Adjusted with responsive margins |
| Button touch targets too small | Min height of 44x44px on mobile |
| Navigation cramped | Reduced padding, better spacing |
| Form inputs not mobile friendly | 16px font size, better spacing |
| Unsafe area not respected | Added env() support |
| Images not optimized | WebP/AVIF formats, responsive sizes |
| Typography jumpy | Progressive scaling across breakpoints |

---

## Testing Checklist

### Mobile Testing
- [ ] Test on iPhone 12 (390px width)
- [ ] Test on iPhone SE (375px width)
- [ ] Test on Samsung S10 (360px width)
- [ ] Test landscape orientation
- [ ] Test safe area on notched phones
- [ ] Test with system zoom at 110%/120%

### Desktop Testing
- [ ] Test on 1920px viewport
- [ ] Test responsive scaling
- [ ] Test hover states
- [ ] Verify no horizontal scroll

### Accessibility
- [ ] Touch targets 44x44px minimum
- [ ] Keyboard navigation works
- [ ] Screen reader announces all content
- [ ] Color contrast passes WCAG AA

### Performance
- [ ] Hero images load in < 2s
- [ ] No layout shift during load
- [ ] Smooth 60fps animations
- [ ] No jank on scroll

---

## Browser Support
- iOS Safari 12+
- Android Chrome 80+
- Firefox 85+
- Chrome/Edge 90+
- Safari 14+

All improvements use standard CSS and Tailwind utilities for maximum compatibility.
