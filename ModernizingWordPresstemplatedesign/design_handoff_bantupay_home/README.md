# Handoff: BantuPay Homepage — Modern Redesign + GSAP

## Overview
A modern, bespoke redesign of the BantuPay marketing homepage, replacing the "WordPress-template" feel (emoji badges, gradient-clip text, glass floating navbar, particle fields, floating cards) with a clean, professional fintech look that keeps the existing brown/cream brand palette. Adds real GSAP motion.

## About the Design Files
The file in this bundle — `BantuPay Hero.dc.html` — is a **design reference created in HTML/GSAP**. It is a prototype showing intended look, layout, and motion; it is **NOT production code to copy directly**. The task is to **recreate this design inside the existing Next.js codebase** (`bantupayweb`) using its established patterns: React components under `src/app/components/`, Tailwind classes / `globals.css`, `next-intl` for copy, and `next/image` for assets. The HTML uses inline styles and vanilla GSAP only because that is how the prototype environment works — port it to the repo's conventions.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, and interactions are intended as shown. Recreate pixel-close using the codebase's libraries.

## How to use this with Claude Code (CLI)
1. Unzip this folder into the repo root (e.g. `bantupayweb/design_handoff_bantupay_home/`).
2. From the repo, run Claude Code and point it at this folder, e.g.:
   > "Read design_handoff_bantupay_home/README.md and BantuPay Hero.dc.html. Recreate these sections in our Next.js app, updating src/app/components/Intro.jsx, About.jsx, Features.jsx, Pricingss.jsx, and the below-fold components, plus src/app/globals.css. Add gsap (npm i gsap) and implement the motion in client components."
3. Review the diff, run `npm run dev`, iterate, commit, and deploy as usual.

## Sections (top to bottom)
1. **Navbar** — fixed, transparent over hero; on scroll (>40px) becomes `rgba(247,240,231,0.88)` + `backdrop-filter: blur(12px)` + soft shadow and shrinks padding `20px→13px`. Left: logo (`/Logo.png`, 40px) + "BantuPay" (Montserrat 700, 19px). Center links: Features, Pricing, About, Contact (Inter 500, 14.5px, `#52443e`). Right: EN/FR pill + "Get the App" primary button.
2. **Hero** — two-column grid `1.05fr 1.15fr`, `max-width:1240px`, padding-top ~150px, min-height 100vh. Left: eyebrow (rule + uppercase Montserrat 600 12.5px `#8B3D27`), H1 (Montserrat 800, `clamp(2.7rem,5.2vw,4.5rem)`, line-height 1.02, `#2D1810`, third line `#8B3D27`), paragraph (Inter 18.5px `#6B5B4F`), two CTAs, stat row (50K+ / 99.9% / 24/7). Right: `/Artboard.webp` on a radial peach glow + a thin concentric ring; drop-shadow.
3. **How it works** — 3 numbered step cards (`#FBF9F4`, border `#E4D8CC`, radius 20).
4. **About** (`#about`) — header; grid `0.85fr 1.15fr` with the mask illustration (`/About.png`) on a dark radial panel + "Our story" text; a full-width Mission panel (dark `linear-gradient(135deg,#421904,#6B2D1A)` left, cream text grid right); a 5-card Pillars row (line icons in `#FFDBCC` circles).
5. **Features** (`#features`) — full-bleed dark band `linear-gradient(135deg,#562315,#6B2D1A 45%,#4A1F12)`; centered light header; 4×2 grid of cream cards, each with a `#FFDBCC` rounded-square holding a brand line-icon PNG.
6. **Pricing** (`#pricing`) — horizontal comparison: a label column + 6 plan columns (GOLD popular, PREMIUM, DIASPORA, SILVER, DIASPORA+, BASIC), 9 feature rows, check (`#1F8A5B`) / muted dash, plan price footer. Wrapper scrolls horizontally on narrow screens. GOLD highlighted gold border + "★ POPULAR" pill.
7. **App screenshots** (`#screenshots`) — `#EFE7DA` band. GSAP **pinned horizontal scroll**: the section pins and the image track (`/carousel*.webp`) translates sideways with scroll. **Coverflow focus**: centered image at scale 1 / opacity 1, neighbors recede (scale down, opacity down, slight `rotateY` tilt, `translateY`), z-index by proximity. A progress bar (`.bp-shots-bar`) fills 8%→100% with scroll.
8. **Coverage / Map** (`#coverage`) — centered; region chips (Europe, UK, USA, Canada, D.R. Congo); `/map.webp`.
9. **Signup** (`#signup`) — dark band; left copy, right pre-signup form (name, email, phone, account select, Sign Up).
10. **Contact** (`#contact`) — left heading, right form (first name, email, phone, message, Send).
11. **Footer** — dark `#2b1206`; logo + social icons (facebook/insta/linkedin/tiktok svgs + inline X) + copyright + Privacy / Terms links.

## Interactions & Behavior (GSAP + ScrollTrigger)
- **Intro (on load):** headline lines reveal with a masked upward slide (`yPercent 118→0`, stagger 0.12); eyebrow/paragraph/CTAs/stats fade+rise; hero visual slides in from the right.
- **Stat count-ups:** 0→50 ("K+"), 0→99.9 ("%") over ~1.7s (they sit in the pinned hero, so fire with the intro, not on scroll).
- **Pinned scrubbed hero:** hero pins for ~85% of a viewport; copy drifts up + fades, the app image scales up + rises, the background orb rotates/scales, the scroll cue fades. (Scaled by a `motion` intensity: Subtle 0.6 / Standard 1 / Bold 1.5.)
- **Scroll reveal:** `.bp-reveal` elements fade+rise (`y 38→0`) via `ScrollTrigger.batch`, start `top 88%`, stagger 0.1.
- **Pinned horizontal screenshots + coverflow:** see section 7. `end = trackScrollWidth - innerWidth + 200`, `scrub: 1`.
- **Magnetic buttons:** `.magnetic` translate toward the cursor (strength 0.35) with `power3.out`, spring back with `elastic.out(1,0.4)`.
- **Card hover lifts:** feature/pillar cards translate `y:-6` on hover.
- **Navbar scroll state:** see section 1.
- **Reduced motion:** respect `prefers-reduced-motion` (the original `globals.css` already zeroes animations there).

### Porting note (important)
In the prototype environment the host re-injects scripts and swaps the global GSAP instance, so the prototype uses a watchdog to rebuild triggers. **In a normal Next.js app you do NOT need that.** Just register once in a client component:
```jsx
'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default function HeroMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => { /* timelines + triggers here */ });
    return () => ctx.revert();
  }, []);
  return null;
}
```
Or use `@gsap/react`'s `useGSAP()`.

## Design Tokens
- **Backgrounds:** page cream `#F7F0E7`; card cream `#FBF9F4`; alt band `#EFE7DA`; dark brand `#421904`, `#562315`, `#6B2D1A`, `#2b1206`.
- **Ink / text:** headline `#2D1810`; body `#52443e` / `#6B5B4F`; muted `#8B7355`.
- **Accent brand:** `#8B3D27` (primary accent), `#904c27`, `#C0632F`; peach `#FFB693`, `#FFDBCC`.
- **Borders:** `#E4D8CC`, `#EEE6DC`, `#d7c2ba`.
- **Positive check:** `#1F8A5B`. Gold (popular): `#E6B84C`→`#C98A2E`.
- **Primary button:** `linear-gradient(135deg,#421904,#8B3D27)`, radius 12–14, white text, shadow `0 10px 26px rgba(86,35,21,0.28)`.
- **Radii:** cards 18–24; buttons 12–14; pills 999.
- **Type:** Montserrat (600/700/800 headings, labels, numerals), Inter (400/500/600 body). Titles are sentence-case (not uppercase) for the modern feel; section titles `clamp(2rem,4vw,3rem)`, weight 800, letter-spacing -0.02em.
- **Section padding:** ~100–110px vertical, 32px horizontal, `max-width:1240px`.

## Tweakable props (exposed in the prototype)
- `accent` (color): `#8B3D27` default — recolors accent text + primary buttons.
- `motion` (enum): Subtle / Standard / Bold — scales scrub distances + stagger.
- `pinHero` (boolean): toggle the pinned/scrubbed hero.
Map these to component props or config as appropriate.

## Assets
All already exist in the repo's `public/` — reuse them, do not re-import:
`Logo.png`, `Artboard.webp`, `About.png`, `map.webp`, feature icons (`smartphone.png`, `money-transfer-1.png`, `customer-service.png`, `smartphone-1.png`, `store.png`, `transaction.png`, `payment.png`, `payment-method.png`), screenshots (`carousel.webp`, `carousel2/3/5/6/7/9.webp`, `carousel 8.webp`), social svgs (`facebook.svg`, `insta2.svg`, `linkedin.svg`, `tiktok2.svg`). Copies are included here under `assets/` for reference only.

## Copy source
All visible strings should come from `messages/en.json` / `messages/fr.json` via `next-intl` (namespaces `IntroPage`, `AboutPage`, `FeaturesPage`, `PricingPage`, `SignupPages`, `CarouselPages`, `MapPages`, `ContactPages`). The prototype hardcodes English for a couple of hero/step lines — wire those to translations. New hero headline ("Your money, moving at the speed of trust.") and step copy are new; add them to the message files.

## Files in this bundle
- `BantuPay Hero.dc.html` — the full design reference (all sections + GSAP logic in the `<script>` block near the bottom).
- `assets/` — copies of the images the design references (originals already live in the repo `public/`).
