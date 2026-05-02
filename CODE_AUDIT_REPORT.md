# Code Audit Report - Diamond Capital Africa

**Date:** May 2, 2026  
**Project:** Diamond Capital Africa (Next.js 16 - Gold Trading Platform)  
**Status:** ⚠️ **Multiple critical issues identified**

---

## Executive Summary

The application is a Next.js 16 project for a gold trading business with a clean UI/UX design. However, there are **15+ actionable issues** spanning code quality, security, performance, accessibility, and configuration. Most are **high-priority** fixes that impact production readiness.

---

## 🔴 CRITICAL ISSUES (Fix Immediately)

### 1. **TypeScript `strict` Mode Disabled**
**File:** `tsconfig.json`  
**Severity:** 🔴 CRITICAL  

```jsonc
"strict": false  // ❌ Type safety disabled
```

**Impact:**
- No compile-time type checking
- Undefined behavior in production
- Harder to maintain as codebase grows
- Defeats the purpose of using TypeScript

**Fix:**
```jsonc
"strict": true
```

This may reveal hidden bugs in the codebase.

---

### 2. **Unsafe HTML in `dangerouslySetInnerHTML`**
**File:** `app/layout.tsx` (lines 99-140)  
**Severity:** 🔴 CRITICAL  

```tsx
<script dangerouslySetInnerHTML={{
  __html: `window.dataLayer = window.dataLayer || [];...`
}}/>
```

**Issues:**
- Google Analytics script is hardcoded
- Vulnerable to XSS if data source changes
- No CSP (Content Security Policy) headers
- API key exposed in code (`AW-18021829324`)

**Recommendations:**
1. Move to `next/script` component with appropriate attributes
2. Use environment variables for tracking IDs
3. Add CSP headers in `next.config.ts`
4. Remove hardcoded JSON-LD if possible or validate it

**Better approach:**
```tsx
import Script from 'next/script';

<Script
  src="https://www.googletagmanager.com/gtag/js?id={process.env.NEXT_PUBLIC_GA_ID}"
  strategy="afterInteractive"
/>
```

---

### 3. **Missing Environment Variables**
**File:** `.env.example`  
**Severity:** 🔴 CRITICAL  

```dotenv
# Current .env.example references "Victoria Gold", not "Diamond Capital Africa"
NEXT_PUBLIC_SITE_URL=https://victoriagold.ac.ug
NEXT_PUBLIC_SITE_NAME=Victoria Gold
```

**Issues:**
- Stale environment template (different company name)
- Missing critical vars: `NEXT_PUBLIC_GA_ID`, API endpoints
- Dev secrets may be exposed in git history
- No .env.local in git (good), but template is outdated

**Fix:**
```dotenv
# .env.example
NEXT_PUBLIC_SITE_URL=https://diamondcapitalafrica.com
NEXT_PUBLIC_SITE_NAME=Diamond Capital Africa
NEXT_PUBLIC_GA_ID=AW-18021829324
NEXT_PUBLIC_API_URL=https://api.diamondcapitalafrica.com
```

---

### 4. **Security: Exposed Phone Number in Plain Text**
**File:** `app/page.tsx` (line ~122), `app/components/WhatsAppButton.tsx` (line 6)  
**Severity:** 🔴 CRITICAL  

```tsx
const phoneNumber = '256704833021'; // Exposed in client code
```

**Issues:**
- Phone number visible in frontend code and compiled JS
- Exposed to scrapers, bots, spammers
- No rate limiting on WhatsApp link

**Fix:**
```tsx
// Move to environment variable
const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '';

// In .env.local
NEXT_PUBLIC_PHONE_NUMBER=256704833021
```

---

### 5. **Form Submission via mailto: Link (Insecure)**
**File:** `app/contact/page.tsx` (lines 65-87)  
**Severity:** 🔴 CRITICAL  

```tsx
const mailtoLink = `mailto:info@diamondcapitalafrica.com?subject=...`;
window.location.href = mailtoLink;
```

**Issues:**
- Form data sent via client-side mailto link
- No server-side validation or rate limiting
- No spam protection (CAPTCHA)
- User experience broken if they don't have email client
- No audit trail of submissions
- Data not persisted (lost if email fails)

**Fix - Implement proper backend:**
```tsx
// Create API endpoint: app/api/contact/route.ts
export async function POST(request: NextRequest) {
  const formData = await request.json();
  
  // Validate
  if (!formData.email || !formData.message) {
    return NextResponse.json({ error: 'Invalid' }, { status: 400 });
  }
  
  // Rate limiting
  // TODO: Implement with Redis or similar
  
  // Send email via Resend, SendGrid, etc.
  // await sendEmail(formData);
  
  // Log to database
  // TODO: Save submission to DB
  
  return NextResponse.json({ success: true });
}
```

---

### 6. **Missing Security Headers**
**File:** `next.config.ts`  
**Severity:** 🔴 CRITICAL  

No security headers configured.

**Issues:**
- No CSP (Content Security Policy)
- No X-Frame-Options
- No X-Content-Type-Options
- Vulnerable to clickjacking, MIME type attacks

**Fix - Add headers:**
```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: "https://diamondcapitalafrica.com",
    NEXT_PUBLIC_SITE_NAME: "Diamond Capital Africa",
  },
  images: {
    unoptimized: true,
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()',
        },
      ],
    },
  ],
};

export default nextConfig;
```

---

### 7. **Gold Ticker: Hardcoded Fallback Data**
**File:** `app/components/GoldTicker.jsx` (lines 37-45)  
**Severity:** 🔴 CRITICAL  

```jsx
const fallback = 3320;
setData({
  spotOz: fallback,
  spotG: fallback / 31.1035,
  spotKg: fallback * 32.1507,
  dcaOz: fallback * (1 + DCA_PREMIUM),
  chg: 0.41,
  up: true,
});
setUpdatedAt("Delayed data");
```

**Issues:**
- Fake data shown to users when API fails
- Users may make trading decisions on stale/false prices
- No error indication (says "Delayed data")
- Can cause compliance/legal issues

**Fix:**
```jsx
catch {
  // Show error state instead of fake data
  setUpdatedAt("Unable to fetch data");
  setData({
    spotOz: null,
    spotG: null,
    spotKg: null,
    dcaOz: null,
    chg: null,
    up: null,
    error: true, // New flag
  });
}
```

Then update UI to show error message:
```jsx
{data?.error && <div className="text-red-600">Price data unavailable</div>}
{!data?.error && <div>Price: ${data?.spotOz}</div>}
```

---

## 🟠 HIGH-PRIORITY ISSUES (Fix in next sprint)

### 8. **JSX in .jsx File Without TypeScript**
**File:** `app/components/GoldTicker.jsx`, `app/components/partners.jsx`  
**Severity:** 🟠 HIGH  

**Issues:**
- Mixed TypeScript (.tsx) and JavaScript (.jsx) in same project
- No type safety for these components
- Harder to refactor/maintain
- `partners.jsx` uses inline styles instead of Tailwind

**Fix:**
Rename to `.tsx` and add proper types:
```tsx
// GoldTicker.tsx
interface GoldData {
  spotOz: number;
  spotG: number;
  spotKg: number;
  dcaOz: number;
  chg: number;
  up: boolean;
  error?: boolean;
}

const [data, setData] = useState<GoldData | null>(null);
```

---

### 9. **Inconsistent Tailwind vs Inline Styles**
**File:** Multiple files (page.tsx, partners.jsx, GoldTicker.jsx)  
**Severity:** 🟠 HIGH  

Examples:
```tsx
// page.tsx - inline styles mixed with Tailwind
style={{ color: '#fff', textShadow: '0 20px 50px rgba(...)' }}
className="text-4xl sm:text-5xl..."

// partners.jsx - all inline styles
<div style={{ background: "#ffffff", borderTop: "1px solid..." }}

// GoldTicker.jsx - Tailwind only (good)
```

**Issues:**
- Inconsistent styling approach
- Harder to maintain design consistency
- CSS-in-JS runtime overhead
- Tailwind is not fully utilized

**Fix:**
Convert all inline styles to Tailwind classes. For complex shadows/text-shadow, add to `globals.css`:

```css
/* globals.css */
.hero-heading-shadow {
  text-shadow: 0 20px 50px rgba(15, 23, 42, 0.55);
}
```

Then use: `<h1 className="text-4xl hero-heading-shadow">`

---

### 10. **Missing alt Text & Image Optimization**
**File:** `app/layout.tsx` (line 49), `app/page.tsx` (line 66)  
**Severity:** 🟠 HIGH  

```tsx
// Missing alt text
<img src="/Logo.png" alt="Diamond Capital Africa" className="h-12 w-auto object-contain" />

// Background images without alt
style={{ backgroundImage: `url(${src})` }}
```

**Issues:**
- Logo in Header has alt text (good) but some images don't
- `next/image` not used (images: { unoptimized: true })
- No lazy loading optimization
- Accessibility issues for screen readers

**Fix:**
```tsx
import Image from 'next/image';

<Image
  src="/Logo.png"
  alt="Diamond Capital Africa - Logo"
  width={48}
  height={48}
  priority
  className="h-12 w-auto object-contain"
/>
```

Update `next.config.ts`:
```typescript
images: {
  unoptimized: false, // Enable optimization
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**.unsplash.com',
    },
  ],
},
```

---

### 11. **Missing Tailwind Theme Configuration**
**File:** `tailwind.config.ts`  
**Severity:** 🟠 HIGH  

```typescript
const config: Config = {
  content: [...],
  theme: {
    extend: {}, // Empty!
  },
  plugins: [],
};
```

**Issues:**
- No custom colors defined (gold, amber, emerald hardcoded)
- No spacing/sizing tokens
- No typography scales
- Makes it hard to maintain consistent design

**Fix:**
```typescript
theme: {
  extend: {
    colors: {
      gold: {
        50: '#FEF8EB',
        100: '#FDEFD1',
        400: '#F7E7B0',
        500: '#E6C77B',
        700: '#D4A72A',
        900: '#704214',
      },
      cream: '#fdfbf7',
    },
    fontFamily: {
      playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
      'source-sans': ['var(--font-source-sans)', 'sans-serif'],
    },
    spacing: {
      'safe': 'max(1rem, env(safe-area-inset-bottom))',
    },
  },
},
```

Then use: `className="border-gold-500 text-gold-900"`

---

### 12. **No Error Boundaries**
**File:** `app/layout.tsx`, `app/page.tsx`  
**Severity:** 🟠 HIGH  

**Issues:**
- No error.tsx files for error handling
- If components crash, whole page breaks
- No graceful fallback UI
- Users see blank screen instead of helpful message

**Fix:**
Create [error.tsx](app/error.tsx):
```tsx
'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-amber-600 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}
```

---

### 13. **API Route Not Fully Implemented**
**File:** `app/api/download/route.ts` (massive file, 491 lines)  
**Severity:** 🟠 HIGH  

**Issues:**
- Generates PDFs on-demand (resource intensive)
- No caching headers
- No size limits
- Vulnerable to abuse (DOS attacks)

**Fix - Add rate limiting:**
```typescript
import { headers } from 'next/headers';

export async function GET(request: NextRequest) {
  // Rate limiting
  const ip = headers().get('x-forwarded-for') || 'unknown';
  const limit = await checkRateLimit(ip); // Implement with Redis
  
  if (!limit) {
    return new NextResponse('Too many requests', { status: 429 });
  }

  // ... rest of code
  
  return new NextResponse(pdfUint8Array, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${filename}.pdf"`,
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
}
```

---

### 14. **No Loading States on Forms & Links**
**File:** `app/contact/page.tsx` (line 70-85)  
**Severity:** 🟠 HIGH  

```tsx
const [isSubmitting, setIsSubmitting] = useState(false);
// But not used to disable button during submission!

<button type="submit">Send Message</button> // Can be clicked multiple times
```

**Fix:**
```tsx
<button
  type="submit"
  disabled={isSubmitting}
  className="... disabled:opacity-50 disabled:cursor-not-allowed"
>
  {isSubmitting ? 'Sending...' : 'Send Message'}
</button>
```

---

### 15. **Missing JSON-LD Schema Validation**
**File:** `app/layout.tsx` (lines 108-130)  
**Severity:** 🟠 HIGH  

**Issues:**
- JSON-LD embedded in HTML is prone to errors
- No validation
- Missing postal code in address
- Schema might not be complete

**Fix - Validate with Schema.org:**
Use https://validator.schema.org/ to test. Update:

```tsx
{
  "@type": "LocalBusiness",
  // ...
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot X, Kampala",
    "addressLocality": "Kampala",
    "addressRegion": "Central",
    "postalCode": "100001", // Add real postal code
    "addressCountry": "UG",
  },
  "areaServed": ["UG", "CD"],
  "image": "https://diamondcapitalafrica.com/opengraph-image",
  "priceRange": "$$$$", // Update based on actual range
}
```

---

## 🟡 MEDIUM-PRIORITY ISSUES (Fix before launch)

### 16. **Missing Robots.txt Metadata**
**File:** `public/robots.txt`  
**Severity:** 🟡 MEDIUM  

Ensure it exists and is properly configured.

---

### 17. **No Analytics/Monitoring**
**File:** All files  
**Severity:** 🟡 MEDIUM  

**Issues:**
- GA4 ID hardcoded in layout
- No error tracking (Sentry, etc.)
- No performance monitoring

**Fix:**
```typescript
// lib/analytics.ts
export function trackEvent(name: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, params);
  }
}
```

---

### 18. **Mobile Menu Animation Janky**
**File:** `app/components/Header.tsx` (lines 126-155)  
**Severity:** 🟡 MEDIUM  

AnimatePresence works but could be optimized.

---

### 19. **No 404 or Not Found Handler**
**File:** `app/not-found.tsx`  
**Severity:** 🟡 MEDIUM  

Create custom 404 page:
```tsx
// app/not-found.tsx
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <Link href="/" className="text-amber-600 hover:text-amber-700">
          Return to Home
        </Link>
      </div>
    </main>
  );
}
```

---

### 20. **No Sitemap.xml (SEO)**
**File:** `app/sitemap.ts`  
**Severity:** 🟡 MEDIUM  

File exists but should be verified. Ensure all routes are included.

---

## 🔵 LOW-PRIORITY ISSUES (Nice to have)

### 21. **CSS Organization**
**File:** `app/globals.css`  
**Severity:** 🔵 LOW  

Break into multiple files:
```
styles/
  globals.css
  typography.css
  patterns.css
  animations.css
```

---

### 22. **Magic Numbers Hardcoded**
**File:** `GoldTicker.jsx` (lines 5, 24, 28)  
**Severity:** 🔵 LOW  

```jsx
const DCA_PREMIUM = 0.018;
const spotOz = parseFloat(spot);
const prevClose = spotOz * (1 - (Math.random() * 0.012 - 0.004)); // Magic numbers!
```

Extract to constants file:
```typescript
// lib/constants.ts
export const GOLD_PRICING = {
  DCA_PREMIUM: 0.018, // 1.8% facilitation fee
  OZ_TO_GRAM: 31.1035,
  GRAM_TO_KG: 1000,
};
```

---

### 23. **Unused Import: `React.Fragment`**
**File:** `app/components/Header.tsx` (line 137)  
**Severity:** 🔵 LOW  

```tsx
<React.Fragment key={link.href}>
```

Use shorthand:
```tsx
<>key={link.href}</> // Error: keys not allowed in <>
// Use React.Fragment only when key is needed (correct here)
```

---

### 24. **Hero Slideshow Animation**
**File:** `app/globals.css` (lines 82-105)  
**Severity:** 🔵 LOW  

Comment shows animation but might not be used. Verify and clean up.

---

### 25. **Missing .env.local Template**
**File:** Root directory  
**Severity:** 🔵 LOW  

Add `.env.local.example` for development:
```bash
# .env.local.example
NEXT_PUBLIC_PHONE_NUMBER=256704833021
```

---

## Summary Table

| Issue | Severity | Category | Impact |
|-------|----------|----------|--------|
| TypeScript strict off | 🔴 | Code Quality | High |
| dangerouslySetInnerHTML | 🔴 | Security | Critical |
| Missing env vars | 🔴 | Config | Critical |
| Exposed phone number | 🔴 | Security | High |
| Form via mailto | 🔴 | Security/UX | Critical |
| No security headers | 🔴 | Security | Critical |
| Fake ticker data | 🔴 | Compliance | Critical |
| Mixed TS/JS files | 🟠 | Code Quality | High |
| Inline vs Tailwind | 🟠 | Maintainability | Medium |
| Missing image optimization | 🟠 | Performance | High |
| Empty Tailwind config | 🟠 | Maintainability | High |
| No error boundaries | 🟠 | Reliability | High |
| API route issues | 🟠 | Security | High |
| No loading states | 🟠 | UX | Medium |
| Schema validation | 🟠 | SEO | Medium |
| Mobile menu animation | 🟡 | UX | Low |
| No 404 handler | 🟡 | UX | Low |
| CSS organization | 🔵 | Maintainability | Low |
| Magic numbers | 🔵 | Code Quality | Low |

---

## Recommended Fix Order

1. **Immediate (Today):**
   - Enable TypeScript strict mode
   - Fix form submission (add backend API)
   - Move phone number to env vars
   - Add security headers

2. **This Week:**
   - Replace dangerouslySetInnerHTML with next/script
   - Convert .jsx to .tsx
   - Consolidate styling (Tailwind only)
   - Add error boundaries

3. **Before Launch:**
   - Implement proper image optimization
   - Add error/404 handlers
   - Complete Tailwind theme
   - Fix ticker fallback behavior

---

## Next Steps

1. Create a `.todo` file with prioritized tasks
2. Set up TypeScript strict mode (expect ~20 errors to fix)
3. Implement backend contact form API
4. Add security headers to next.config.ts
5. Move hardcoded values to environment variables

---

**Generated:** May 2, 2026
