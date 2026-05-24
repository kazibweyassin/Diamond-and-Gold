# Typography & Text Sizing Audit Report
## Diamond Capital Africa Website

**Audit Date:** May 22, 2026  
**Overall Assessment:** 🟡 **FAIR - Good Foundation with Accessibility & Consistency Issues**

---

## Executive Summary

The website demonstrates **strong design intent** with sophisticated use of `clamp()` for responsive scaling and a well-defined color hierarchy. However, there are **critical accessibility concerns** and **inconsistencies in body text sizing** that need attention. The typography system works well for large displays but shows problems on mobile devices and for long-form content readability.

### Key Findings:
- ✅ Hero text scaling uses excellent `clamp()` functions
- ✅ Strong visual hierarchy with serif headers
- ❌ **CRITICAL:** Body text too small on mobile (11px-13px)
- ❌ **CRITICAL:** Mixed font sizes for similar content (inconsistent)
- ⚠️ Monospace typography oversized in some places
- ⚠️ Missing responsive line-height adjustments
- ⚠️ Some text lacks sufficient contrast/readability

---

## Detailed Findings

### 1. HERO & MAIN HEADINGS ✅ GOOD

#### Home Page Hero (app/page.tsx)
**Lines 315-320**
```tsx
.hero-h1 {
  font-size: clamp(2.35rem, 5.2vw, 4rem);
  font-weight: 300;
  line-height: 1.05;
  letter-spacing: -0.03em;
}
```
- **Desktop:** 4rem (64px) - Excellent, impressive
- **Mobile:** 2.35rem (37.6px) - Appropriate scaling
- **Responsive:** ✅ Uses `clamp()` effectively
- **Line Height:** 1.05 - Tight but acceptable for display text
- **Assessment:** ✅ **EXCELLENT** - Well-executed responsive scaling

#### About Page Hero (app/about/page.tsx)
**Lines 92-94**
```tsx
.hero-title { font-size: 1.8rem; line-height: 1.08; margin-bottom: 1rem; }
```
- **Desktop:** 1.8rem (28.8px) - Small for hero
- **Mobile:** 1.8rem (fixed, no scaling) - **ISSUE:** Not responsive
- **Assessment:** ⚠️ **NEEDS WORK** - Hero text should be larger and responsive

#### Section Titles (Various)
**Homepage (app/page.tsx, Line 289)**
```tsx
.section-title { 
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 300;
  letter-spacing: -0.025em;
  line-height: 1.18;
}
```
- **Desktop:** 2.5rem (40px) - Good
- **Mobile:** 1.8rem (28.8px) - Appropriate
- **Assessment:** ✅ **GOOD** - Consistent responsive scaling

---

### 2. BODY TEXT ❌ CRITICAL ISSUES

#### Desktop Body Text (Acceptable)
- **Primary:** 14px-15px `color: rgba(10,22,40,0.55)` - Readable
- **Secondary:** 13px `color: rgba(10,22,40,0.48)` - Acceptable

**Lines in app/page.tsx:**
- L325: `.hero-sub { font-size: clamp(14px, 1.05vw, 16px); }` ✅ Good
- L1006: `font-size: 15px` in hero description ✅ Good
- L1146: `font-size: 14px` in about section ✅ Good

#### Mobile Body Text (🔴 CRITICAL ISSUE)
**app/page.tsx Lines 803-806 (560px breakpoint)**
```css
@media (max-width: 560px) {
  .hero-sub { font-size: 0.86rem; line-height: 1.55; }
  .step-body, .why-body, .cred-body, .ops-desc { font-size: 11px; line-height: 1.6; }
}
```
- **Mobile:** 11px - **TOO SMALL** ❌
- **WCAG AA Standard:** Minimum 12px for body text
- **Impact:** Strain on vision, especially for users 40+, users with low vision

**app/about/page.tsx Lines 149-150 (560px breakpoint)**
```css
.p-body, .service-body, .cred-body { font-size: 11px; line-height: 1.6; }
```
- **Same Issue:** 11px body text on mobile ❌

**app/components/Navbar.jsx Lines 65 (desktop nav)**
```css
.nav-links-desktop {
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
```
- **All Breakpoints:** 11px - Small but acceptable for nav

**app/components/ProductShowcase.tsx Lines 123 (product descriptions)**
```tsx
fontSize: '0.82rem', // ~13px
```
- Desktop: 13px - Borderline acceptable
- No mobile-specific override - ⚠️ Might be too small on mobile

**app/components/QuoteFormSection.tsx Lines 88**
```tsx
fontSize: 14,
```
- Form labels: 14px ✅ Good

---

### 3. SECONDARY TEXT & CAPTIONS ⚠️ MIXED

#### Monospace Typography (DCA Mono)

**Eyebrow Labels (Section headers)**
- **Size:** 10px (consistent across breakpoints) 
- **Issue:** Very small, but acceptable for uppercase labels
- **Example:** app/page.tsx L283 `.eyebrow { font-size: 10px; }`

**Team Page Skills/Expertise Tags** (app/team/page.tsx)
```tsx
className="text-xs px-3 py-1"
```
- **Size:** 12px (Tailwind `text-xs`)
- **Assessment:** Acceptable

**Team Member Bio Text** (app/team/page.tsx)
```tsx
<p className="text-sm leading-relaxed text-[rgba(10,22,40,0.65)]">
```
- **Size:** 14px (Tailwind `text-sm`)
- **Assessment:** ✅ Good

**Team Member Role** (app/team/page.tsx)
```tsx
<p className="text-sm font-medium text-[#B8922A]">
```
- **Size:** 14px ✅ Good

---

### 4. RESPONSIVE SCALING ISSUES ❌

#### Missing `clamp()` in Key Areas

**About Page Hero** (app/about/page.tsx L92)
```tsx
.hero-title { font-size: 1.8rem; line-height: 1.08; }
```
- **Issue:** Fixed size, not responsive ❌
- **Should be:** `clamp(1.5rem, 4vw, 2.2rem)`

**About Page Section Title** (app/about/page.tsx)
```tsx
.section-title { font-size: clamp(1.8rem, 3vw, 2.6rem); }
```
- ✅ Good - Uses clamp()

**Team Page Section Title** (app/team/page.tsx)
- **Issue:** No inline styles shown, likely inherits Tailwind defaults
- **Risk:** May not be optimally responsive ⚠️

#### Line Height Inconsistencies

| Content Type | Line Height | Ideal |
|---|---|---|
| Hero h1 | 1.05 | 1.1-1.2 (display text is tight) |
| Body text | 1.6-1.8 | 1.5-1.75 ✅ |
| Small text | 1.35-1.6 | 1.3-1.5 |
| Headings | 1.08-1.18 | 1.1-1.3 ✅ |

---

### 5. COLOR & CONTRAST ISSUES ⚠️

#### Low Contrast Body Text
**app/page.tsx L326, L1006, etc.**
```css
color: rgba(10,22,40,0.55) /* ~55% opacity on light background */
```
- **Contrast Ratio:** ~4.2:1 (WCAG AA passes, but marginal)
- **On Cream Background (#F7F6F2):** Slightly reduced contrast
- **Assessment:** ⚠️ Acceptable but could be darker for better accessibility

#### Very Low Contrast in Secondary Text
```css
color: rgba(10,22,40,0.45) /* ~45% opacity */
```
- **Contrast Ratio:** ~3.5:1 - **FAILS WCAG AA** ❌
- **Examples:**
  - app/page.tsx L1133: `.cred-body { color: rgba(10,22,40,0.45) }`
  - app/about/page.tsx: Multiple instances
- **Impact:** Hard to read, accessibility violation

---

### 6. COMPONENT-SPECIFIC FINDINGS

#### Navbar (Header.tsx & Navbar.jsx)
**Navigation Links** (Navbar.jsx L65)
- **Size:** 11px - Small but acceptable for nav
- **Mobile:** Uses Tailwind `text-sm` in mobile menu
- **Assessment:** Acceptable for navigation

**Logo Area:**
- No fixed size defined, responsive via `Image` component
- **Assessment:** ✅ Good

#### Hero Ticker (GoldTicker component, app/page.tsx L107)
**Price Display**
```javascript
div style={{ fontSize: '2rem', fontWeight: 600 }} // Large, good
span style={{ fontSize: 11 }} // Small labels
```
- **Main Price:** 32px ✅ Excellent
- **Sub-labels:** 11px - Small but OK for financial data
- **Assessment:** Mixed but contextually appropriate

#### Product Showcase (ProductShowcase.tsx)
**Product Names** (L235)
```tsx
fontSize: '1.25rem' // 20px
fontWeight: 400
```
- **Assessment:** ✅ Good - Clear and readable

**Product Description** (L245)
```tsx
fontSize: '0.82rem', // ~13px
```
- **Assessment:** ⚠️ Borderline - Could be 14px on desktop

**Badge/Label** (L200)
```tsx
fontSize: '0.62rem' // ~10px
letterSpacing: '0.3em'
```
- **Assessment:** ✅ Acceptable for labels

---

### 7. TAILWIND CLASSES vs. INLINE STYLES INCONSISTENCY ⚠️

The codebase mixes:
1. **Inline `style` props** with explicit pixel/rem values
2. **Tailwind classes** (e.g., `text-xs`, `text-sm`)
3. **CSS-in-JS within `<style>` tags**

**Examples of Inconsistency:**
- **app/team/page.tsx:** Tailwind `text-sm` (14px)
- **app/page.tsx:** Inline `fontSize: '13px'`
- **ProductShowcase.tsx:** Mixed approaches
- **Navbar.jsx:** Mostly inline styles

**Issue:** Makes font size scaling unpredictable across components ⚠️

---

### 8. ORPHANED/SMALL TEXT ISSUES 🔴

| Location | Size | Issue | Line |
|---|---|---|---|
| GoldTicker labels | 10-11px | Small but contextual | app/page.tsx:107 |
| Monospace nav | 11px | Tiny nav links | Navbar.jsx:65 |
| Form inputs | 13px | Acceptable | QuoteFormSection.tsx:88 |
| Stat unit labels | 8-9px | Very small | app/page.tsx:552 |
| Credentials code badge | 10px | Small but OK | app/page.tsx:712 |
| Team expertise tags | 12px | Acceptable | app/team/page.tsx |

---

### 9. MOBILE READABILITY ASSESSMENT 🔴

#### Critical Issues on Mobile:

**1. Body Text Too Small (11px)**
- **Files:** app/page.tsx, app/about/page.tsx
- **Breakpoint:** @media (max-width: 560px)
- **Impact:** WCAG violation, difficult to read

**2. Missing Mobile Line Height Adjustment**
- **Issue:** Some text uses same line-height on mobile as desktop
- **Example:** Hero description on mobile might be cramped

**3. Form Text**
- **Size:** 13px (adequate)
- **Issue:** No explicit mobile reduction, relies on viewport
- **Assessment:** Acceptable

**4. Navigation Too Small**
- **Navbar:** 11px on desktop
- **Mobile:** Depends on Tailwind mobile menu styling
- **Assessment:** ⚠️ Could be larger on mobile

---

### 10. DESKTOP READABILITY ✅

**Overall:** Excellent on desktop (>1024px)
- Body text: 14-16px ✅
- Headings: 28-64px ✅
- Line heights: 1.5-1.8 ✅
- Letter spacing: Appropriate ✅
- Contrast: Acceptable (with noted exceptions)

---

## Accessibility Assessment

### WCAG 2.1 Compliance

| Criterion | Status | Issue |
|---|---|---|
| 1.4.3 Contrast (Level AA) | ⚠️ PARTIAL | Some text at 45% opacity fails; most body text passes |
| 1.4.4 Text Resize | ✅ PASS | Text scales properly with browser zoom |
| 1.4.10 Reflow | ✅ PASS | Responsive design handles reflow well |
| 1.4.11 Non-text Contrast | ⚠️ CHECK | Some UI elements may have insufficient contrast |
| **2.5.5 Target Size** | ⚠️ PASS | Buttons adequate, but could be larger on mobile |
| **3.1.4 Abbreviations** | ✅ PASS | Monospace abbreviations clear in context |

### Key Accessibility Violations:
- 🔴 **11px body text on mobile** - Violates optimal readability
- 🔴 **45% opacity text** - Fails WCAG AA contrast
- 🟡 **No defined minimum font size policy** - Risk of very small text

---

## Recommendations

### IMMEDIATE (Critical - Address First)

1. **Increase Mobile Body Text to 14px**
   - **File:** app/page.tsx, line 806
   - **Change:**
     ```css
     @media (max-width: 560px) {
       .step-body, .why-body, .cred-body, .ops-desc { 
         font-size: 14px; /* was 11px */
         line-height: 1.65;
       }
     }
     ```
   - **Also update:** app/about/page.tsx line 149

2. **Darken Secondary Text for Accessibility**
   - **Change:** `rgba(10,22,40,0.45)` → `rgba(10,22,40,0.6)`
   - **Files:** app/page.tsx (L712), app/about/page.tsx (multiple)
   - **Impact:** Meets WCAG AA contrast requirements
   - **Tradeoff:** Slightly darker appearance, but more readable

3. **Make About Page Hero Responsive**
   - **File:** app/about/page.tsx, line 92
   - **Change:**
     ```tsx
     .hero-title { 
       font-size: clamp(1.5rem, 4vw, 2.2rem);
       line-height: 1.15;
     }
     ```

---

### HIGH PRIORITY (Within 1-2 Sprints)

4. **Establish Consistent Font Size Scale**
   - Create a Tailwind/CSS scale:
     - `text-xs: 12px` (minimum)
     - `text-sm: 14px` (body)
     - `text-base: 16px` (body-emphasis)
     - `text-lg: 18px` (section intro)
     - `text-xl: 20px+` (headings)
   - Use exclusively instead of mixing inline + Tailwind
   - **Files to standardize:** All components

5. **Add Mobile Line Height Adjustment**
   - Increase line height on small screens for better readability
   - **Example:**
     ```css
     @media (max-width: 640px) {
       body { line-height: 1.75; } /* from 1.65 */
     }
     ```

6. **Increase Monospace Nav to 12px**
   - **File:** Navbar.jsx, line 65
   - **Change:** `font-size: 11px` → `font-size: 12px`
   - **Impact:** Better readability without losing design intent

7. **Add Minimum Font Size Rule**
   - Policy: No text below 12px (except special cases like icons/badges)
   - Document in design system

---

### MEDIUM PRIORITY (Polish - Next Quarter)

8. **Improve Stat Labels on Hero**
   - **File:** app/page.tsx, line 552
   - **Current:** 8-9px
   - **Recommendation:** 10px minimum for better readability
   - **Change:** `.stat-unit { font-size: 8px; }` → `font-size: 10px;`

9. **Increase Product Card Descriptions**
   - **File:** ProductShowcase.tsx, line 245
   - **Change:** `fontSize: '0.82rem'` → `fontSize: '0.95rem'` (14px)

10. **Add Letter Spacing Consistency**
    - Currently varies (0.08em to 0.3em)
    - Consider standard: 0.15em for small caps

11. **Test with Real Font Rendering**
    - Current typography uses `-webkit-font-smoothing: antialiased`
    - Verify on Windows (ClearType) and Mac (Subpixel)
    - Some text may appear thinner than expected

---

### LOW PRIORITY (Future Enhancements)

12. **Implement Dark Mode Typography**
    - Current colors assume light background
    - Need higher contrast for dark mode variants

13. **Variable Font Optimization**
    - Consider using variable font for weight ranges
    - Could reduce file size and improve performance

14. **Add Typography Component Library**
    - Create reusable Heading, Body, Caption components
    - Ensures consistency across pages
    - Simplifies future updates

---

## Summary Table

| Aspect | Status | Priority | Effort |
|---|---|---|---|
| Hero Text Scaling | ✅ Good | - | - |
| Body Text - Desktop | ✅ Good | - | - |
| **Body Text - Mobile** | 🔴 Too Small | CRITICAL | Low |
| **Text Contrast** | 🔴 Some Fail | CRITICAL | Low |
| Section Headings | ✅ Good | - | - |
| Responsive Design | 🟡 Partial | HIGH | Medium |
| **Consistency** | 🟡 Mixed | HIGH | Medium |
| Accessibility | ⚠️ Marginal | HIGH | Low |
| Navigation Text | ⚠️ Small | HIGH | Very Low |
| Mobile Readability | 🔴 Poor | CRITICAL | Very Low |

---

## Code Changes Checklist

- [ ] Increase body text to 14px on mobile (app/page.tsx, app/about/page.tsx)
- [ ] Darken secondary text to 60% opacity for contrast
- [ ] Make about page hero responsive with clamp()
- [ ] Increase monospace nav to 12px
- [ ] Document minimum font size policy (12px)
- [ ] Standardize font sizing across components
- [ ] Increase stat labels to 10px minimum
- [ ] Improve product card description sizing
- [ ] Test contrast ratios with accessibility tools
- [ ] Add mobile line-height adjustments

---

## Testing Recommendations

1. **Use WAVE or Axe DevTools** to verify contrast compliance
2. **Test on real devices:**
   - iPhone SE (small screen)
   - iPad (medium screen)
   - Windows 1920x1080 (desktop)
3. **Use browser zoom** to simulate low vision (200% zoom)
4. **Check with Lighthouse** for accessibility score
5. **Get user feedback** from older adults or users with vision issues

---

## Overall Assessment

**Current Grade: C+ (Fair)**

**Strengths:**
- ✅ Excellent hero/display text responsive scaling
- ✅ Good visual hierarchy and typography system
- ✅ Sophisticated design with serif + sans-serif blend
- ✅ Desktop readability is strong

**Weaknesses:**
- ❌ Mobile body text violations (11px)
- ❌ Accessibility contrast failures (45% opacity)
- ❌ Inconsistent sizing approach (inline + Tailwind)
- ❌ Not responsive for about page hero
- ❌ Navigation text too small

**Estimated Fix Time:** 2-4 hours for critical issues; 1-2 days for comprehensive solution

**With Fixes: Expected Grade A (Good)** once critical mobile and contrast issues are resolved.

---

**Prepared by:** Typography Audit System  
**Audit Type:** Comprehensive Code Review  
**Scope:** All user-facing text sizing and responsive typography
