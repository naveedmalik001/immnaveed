---
name: frontend-design
description: >-
  Provides comprehensive guidelines, design tokens, typography rules, layout patterns, and modern aesthetic principles for creating world-class, human-designed frontend user interfaces, web applications, and landing pages. Use when designing, building, or refining frontend UI, styling with CSS/Tailwind, enhancing typography, crafting color schemes, or eliminating generic AI looks.
---

# Frontend Design & UI/UX Mastery Skill

This skill guides the creation of high-converting, visually stunning, human-crafted frontend user interfaces and design systems.

---

## 1. Core Philosophy: Eliminating the "Generic AI" Look

1. **Avoid Template Homogeneity**: Never use default purple/neon gradients, generic floating spheres, or unstructured dark-grey cards.
2. **Distinct Visual Rhythm**: Alternate section weights (e.g., Deep Hero Canvas $\rightarrow$ Crisp High-Contrast Light Section $\rightarrow$ Deep Action Footer).
3. **Intentional Typography Hierarchy**:
   - **Display Headings**: Tight line-height (`1.05` to `1.15`), negative letter-spacing (`-0.02em` to `-0.04em`), bold geometric or clean grotesque typefaces (e.g., Inter, Plus Jakarta Sans, Outfit).
   - **Body Copy**: High readability, slate tones (`#64748B` on light, `#CBD5E1` on dark), 1.5 to 1.7 line height.
   - **Eyebrow Badges**: Small caps/uppercase, subtle border, pulsing status indicator.
4. **Purposeful Micro-Interactions**: Hover lifts (`translateY(-2px)`), glow shadows, smooth tab transitions, tactile button depressions.

---

## 2. Color Palette & Harmonious Accent Architecture

Follow the **60-30-10 Rule**:
- **60% Dominant Base**: Deep corporate navy (`#041E42` / `#031730`) or clean crisp porcelain (`#FFFFFF` / `#F8FAFC`).
- **30% Secondary Structure**: Elevated card surfaces (`#082852`, `#FFFFFF` with hairlines), borders (`#1A3E6D` or `#E2E8F0`), dividers.
- **10% High-Intent Accent**:
  - **Electric Highlight**: Teal/Cyan (`#14B8C4` / `#00D4E0`) for pill badges, key phrases, active tabs, icon counters.
  - **Primary Action CTA**: Sunset Amber/Orange (`#F7931E` / `#D97A10`) with glow shadow for primary conversions.
  - **Trust/Direct Action**: WhatsApp Green (`#25D366`) or Verified Emerald (`#10B981`).

---

## 3. High-Converting Component Patterns

### A. Hero Architecture
- **Eyebrow Pill**: `<span class="badge-pill">` with pulsing dot.
- **Headline**: High-contrast headline with a 2–3 word gradient accent.
- **Action Hierarchy**:
  1. **Primary Button**: Warm gradient with colored drop shadow (`shadow-orange-500/25`).
  2. **Secondary Button**: Crisp white or subtle outline.
  3. **Direct Contact**: Direct phone or WhatsApp CTA.
- **Trust Strip**: Inline verified statistics with distinct icons (Shield, Star, Users).
- **Floating Stat Cards**: Key metrics (`+342%`, `10+ Years`) elevated on side cards with ambient glows.

### B. Category Filter Tabs & Bento Grids
- **Active State**: Solid contrast pill with bold label.
- **Inactive State**: Subtle border with hover highlight.
- **Grid Layout**: Responsive 1 $\rightarrow$ 2 $\rightarrow$ 3 column grids with equal heights and grouped metadata.

### C. Stepper & Process Timelines
- Interactive numbered tabs (`01`, `02`, `03`...) with deliverable checklists and direct consultation triggers.

### D. Conversion & Booking Forms
- Focused inputs with clean focus rings (`rgba(20, 184, 196, 0.2)`).
- Trust seals ("256-bit Encrypted", "NDA Signed", "24h Response Guarantee").

---

## 4. CSS / Tailwind Best Practices

```css
/* Fluid Typography */
.font-display {
  font-family: var(--font-sans), 'Plus Jakarta Sans', system-ui, sans-serif;
  letter-spacing: -0.03em;
}

/* Gradient Accent */
.text-gradient-teal {
  background-image: linear-gradient(135deg, #14B8C4 0%, #00D4E0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Blueprint Grid Mask */
.bg-grid-blueprint {
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 4rem 4rem;
}
```

---

## 5. Quality Checklist Before Delivery

- [ ] Is the typography crisp with clear visual hierarchy?
- [ ] Are primary vs secondary action buttons unmistakably distinguishable?
- [ ] Are mobile touch targets at least 44x44px?
- [ ] Is contrast compliant (WCAG AA) across all text elements?
- [ ] Does the design feel bespoke, credible, and human-crafted rather than generic AI?
