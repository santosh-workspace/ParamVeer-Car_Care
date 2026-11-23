# ParamVeer Car Care — Website

Premium, mobile-first, six-page website for **ParamVeer Car Care**, a multi-brand automobile workshop in Moshi, Pimpri-Chinchwad, Maharashtra.

Built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS 4** and **Lucide React**. All pages are statically prerendered; there is no backend, database or admin panel — enquiries are delivered to the workshop over WhatsApp.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us |
| `/services` | Our Services |
| `/appointment` | Book an Appointment (enquiry form) |
| `/gallery` | Gallery (filters + lightbox) |
| `/contact` | Contact & Location |

Plus `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, favicon and a 404 page.

## Features

- Mobile-first responsive design, tested at 320, 375, 390, 430, 768, 1024 and 1440 px.
- Persistent floating WhatsApp (green) and Call (orange) buttons on every page, with desktop tooltips, safe-area support and auto-hide over form fields.
- WhatsApp deep links with URL-encoded prefilled messages; `tel:` click-to-call.
- Appointment enquiry form with validation, success state and a generated WhatsApp message.
- Contact enquiry form delivered via WhatsApp.
- Gallery with category filters (All / Workshop / Car Servicing / Engine Repair / Denting & Painting / Detailing / Before & After) and a keyboard-accessible lightbox.
- Embedded Google Map (no API key) + Get Directions + Google Business Profile links.
- SEO: per-page titles/descriptions, Open Graph + Twitter cards, canonical URLs, `AutoRepair` JSON-LD, sitemap and robots.
- Accessibility: skip link, focus traps, `aria-modal` dialogs, reduced-motion support, 44 px touch targets, good contrast.
- Performance: optimized/cropped images, lazy loading, minimal client JS, CSS animations via IntersectionObserver.

## Requirements

- Node.js 20.9 or newer (22 LTS recommended).
- npm 10+.

## Install

```bash
git clone <your-repo-url> paramveer-car-care
cd paramveer-car-care
npm install
```

## Environment

Copy the example file and set your production URL (no trailing slash):

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SITE_URL=https://paramveercarcare.in
```

This value drives canonical URLs, sitemap, Open Graph and JSON-LD. Update it before deploying to a real domain.

## Run locally

```bash
npm run dev
```

Open http://localhost:3000.

## Type check & build

```bash
npm run typecheck   # tsc --noEmit
npm run build       # production build
npm run start       # serve the production build locally
```

## Deploy

### Vercel (recommended)

1. Push the repository to GitHub / GitLab / Bitbucket.
2. Import the project in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` in Project → Settings → Environment Variables.
4. Deploy. Vercel auto-detects Next.js.

### Node server / self-hosted

```bash
npm ci
npm run build
NEXT_PUBLIC_SITE_URL=https://your-domain.com npm run start
```

`next start` listens on port 3000 by default (`-p` to change). Put it behind a reverse proxy (Nginx/Caddy) with HTTPS for production.

### Static export (optional)

If you need a fully static export, add `output: "export"` to `next.config.ts` and run `npm run build`. Note: this disables the image optimizer; images will be served as-is.

## Customising business data

All business details live in `src/lib/site.ts`:

- `phoneDisplay`, `phoneHref`, `whatsappNumber`
- `address`, `hours`, `googleRating`, `googleProfileUrl`
- `mapEmbedUrl` / `mapDirectionsUrl` / `mapPlaceUrl`
- `navLinks`

Services are defined in `src/lib/services.ts` (title, slug, description, image, icon, included items). Gallery items and categories in `src/lib/gallery.ts`. Reviews (verbatim, including the negative one) in `src/lib/reviews.ts`.

### Rating & reviews

The Google rating (`4.8`) and the three supplied reviews are shown **as supplied**. Verify the current rating, review count and review text on the Google Business Profile before publishing, and update `site.googleRating` / `src/lib/reviews.ts` accordingly. Do not fabricate reviews, counts or stars.

### Brands

The brand strip is an editable list of text chips with an explicit disclaimer. Confirm supported brands with the workshop before claiming support.

### Photographs

All photographs are licensed stock images cropped to fixed aspect ratios and are labelled as illustrative. They are **not** photographs of the actual workshop or customer vehicles. Replace `public/images/*` with genuine workshop photography when available, keeping the same filenames or updating the references in `src/lib/services.ts`, `src/lib/gallery.ts` and the page components.

## Project structure

```
src/
  app/                 Next.js App Router pages
    about/ services/ appointment/ gallery/ contact/
    layout.tsx sitemap.ts robots.ts manifest.ts icon.svg not-found.tsx
  components/          Reusable UI (Header, Footer, Hero, forms, gallery, …)
  lib/                 site data, services, gallery, reviews, forms, helpers
public/
  images/              Optimized site photography
```

## Scope (intentional exclusions)

This is a customer-facing marketing/enquiry site only. It deliberately does **not** include an admin portal, customer login/registration, garage management, inventory, live vehicle tracking, AI chatbot, online payments, CRM or staff management. Appointment and contact submissions open WhatsApp with a prefilled message; nothing is stored on the website.

## Testing checklist

- [ ] All six pages load (`/`, `/about`, `/services`, `/appointment`, `/gallery`, `/contact`).
- [ ] Mobile navigation opens/closes, traps focus, restores scroll.
- [ ] Desktop navigation and active-link indicator.
- [ ] No horizontal scrolling at 320, 375, 390, 430, 768, 1024, 1440 px.
- [ ] All images cropped correctly, no text overlaps.
- [ ] Floating WhatsApp button opens `https://wa.me/917588520106` with the default message.
- [ ] Floating Call button dials `tel:+917588520106`.
- [ ] Appointment form validates name, mobile, brand, model, service, date, time; shows errors; on success opens WhatsApp with all details; disclaimer visible.
- [ ] Contact form validates and opens WhatsApp.
- [ ] Google Map embed loads; Get Directions opens Maps.
- [ ] Gallery filters switch categories; lightbox opens, navigates with arrows, closes with Esc and restores focus.
- [ ] All internal and footer links work.
- [ ] SEO metadata, canonical, OG tags, JSON-LD present in page source.
- [ ] `npm run typecheck` and `npm run build` pass.

## License

Proprietary — built for ParamVeer Car Care. All rights reserved.
