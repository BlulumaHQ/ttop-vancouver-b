# TTOP Chicken — Full English Website Build

Build the complete official marketing website for **TTOP Chicken (Taiwan Taipei Original Pot)** as a single, client-ready site. Everything user-facing is **English only** — no Traditional Chinese dish subtitles, no bilingual UI, no language switcher. Chinese-language source PDFs (school meal brochure) will still be offered as downloadable files exactly as supplied, but never rendered as UI copy.

## Scope of pages

All routes, each with unique `<title>`, meta description, og tags, and real content:

```
/                                → Home
/menu                            → Full menu (structured, English only)
/school-programs                 → Program overview
/school-programs/montessori-daycare
/school-programs/hot-lunch
/catering                        → Catering info + inquiry form (mailto)
/frozen-foods                    → Frozen catalogue gallery
/about-us
/gallery
/faq
/contact                         → Address, hours, phone, map, form (mailto)
/privacy-policy
/terms-of-service
```

Plus a shared header, mobile drawer, sticky mobile "Order Online" button, and footer with the exact required Bluluma credit.

## Content sources (English only)

- Business facts, hours, address, phone, emails, menu structure, program details, FAQs → taken directly from the pasted brief (Tier 2/3 content there is already in English).
- Menu items → rebuilt as accessible HTML from the menu image scans + brief; English names only. Menu scans offered as "View original menu" download links, not as primary UI.
- Images → extracted from `花雕雞資料包.zip` into `/public/images/ttop/` and `/public/downloads/` per the required asset mapping. Official ttopchicken.ca hot-link URLs used only for dish photography that has no local original.
- Loyalty PDF and school program PDF served from `/public/downloads/` as download links (labelled in English, e.g. "School Meal Program Brochure (Chinese, PDF)").

## Tech stack

Project uses **TanStack Start** (not plain React Router). I will keep the brief's URL structure but implement routing via TanStack file-based routes under `src/routes/`. Trailing slashes will be normalized (TanStack doesn't use them); `_redirects` will still be shipped for Cloudflare hosting compatibility. No Supabase, no auth, no DB, no cart. "Order Online" always opens the ChatChefs URL in a new tab.

## Design system

Implemented via `src/styles.css` tokens (oklch equivalents of the brief's hex values) and Tailwind v4 utilities:

- Primary blue `#1D418F`, secondary red `#CA3134`, deep navy `#122A5A`, warm cream `#F7F1E7` page surface, soft blue/red tints, neutral text.
- Typography: **Noto Serif TC** for editorial headings, **Manrope** for body/UI. Loaded via `<link>` in `__root.tsx` head (per Tailwind v4 rule against remote `@import` in CSS).
- Shape language: squared / 4–10px radius cards, thin red rules, blue borders. No default shadcn rounded-2xl look.
- Signature "steam ribbon" SVG accent reused across hero and section dividers.
- Hero: asymmetrical editorial split, real signature chicken pot photo on right, two CTAs (Order Online / View Menu) on left. Mobile stacks text first.

## Structured data files

```
src/data/
  business.ts        // name, address, hours, phone, emails, socials, order URL
  menu.ts            // categories → items (English name, description, price, image?)
  frozenFoods.ts     // 17 catalogue slides + 3 category shots
  schoolPrograms.ts  // Montessori/Daycare + Hot Lunch content
  catering.ts
  faqs.ts
  gallery.ts
```

Components consume these data files so content is easy to update later.

## Header / nav

- Desktop: Menu · School Programs (dropdown: Program Overview, Montessori & Daycare Meals, School Hot Lunch Program) · Catering · Frozen Foods · About (dropdown: Our Story, Gallery, FAQ) · Contact · **Order Online** (prominent red CTA).
- Mobile: clean drawer with the same tree; sticky bottom "Order Online" button, 48px+ tall, red, respects iOS safe-area (`env(safe-area-inset-bottom)`), opens ChatChefs in a new tab.
- Route change scroll-to-top via a small `useRouterState` effect in `__root.tsx`.

## Footer

Contact block, hours, socials (Instagram, Facebook, Google reviews), quick nav, and the exact copyright line:

`© {currentYear} TTOP Chicken. All rights reserved. | Web Design by Bluluma`

with Bluluma linking to `https://bluluma.com` (`target="_blank" rel="noopener noreferrer"`), rendered exactly once.

## SEO / metadata

- Per-route `head()` in each route file with the exact titles from the brief and unique meta descriptions.
- Canonical URLs based on `https://ttopchicken.ca/`.
- OG image saved as `/public/images/og-image.webp` derived from a TTOP banner.
- Favicon generated from the TTOP logo under `/public/`.
- Semantic HTML, single H1 per page, descriptive alt text on meaningful images, empty alt on decorative ones, JSON-LD `Restaurant` schema on Home and Contact.

## Cloudflare deployment config

Ship (in addition to the app):

- `public/_redirects`:
  ```
  /frozezn-foods/ /frozen-foods/ 301
  /about/ /about-us/ 301
  /* /index.html 200
  ```
- `public/_headers` with sensible cache + security headers.
- `.nvmrc` → `22`.
- `wrangler.toml` for Cloudflare Pages.

Note: TanStack Start's default template targets an edge Worker (SSR). For a Cloudflare **Pages** static deploy per the brief, I will configure the Vite build to output a static SPA (`dist/`) suitable for `_redirects`-based routing. If preserving SSR is preferred, tell me and I'll switch to Cloudflare Pages Functions instead.

## Asset pipeline

- Unzip `花雕雞資料包.zip`, copy required images to `public/images/ttop/...` with kebab-case filenames per the brief's mapping, convert large JPG/PNG food/menu scans to optimized WebP, keep logos as transparent PNG.
- Copy PDFs to `public/downloads/`.
- Verify zero occurrences of `lovable-uploads`, `__l5e`, `blob:`, or builder-hosted URLs before finishing.

## Out of scope for this build

- No Traditional Chinese anywhere in UI copy (per your instruction).
- No fabricated testimonials, prices, ratings, weekend hours, delivery-platform logos, or staff photos.
- No cart, checkout, auth, or CMS.

## Deliverable

A complete multi-page English website with real owner content, deployable to Cloudflare Pages, matching the brief's design direction, engineering laws, and metadata requirements.
