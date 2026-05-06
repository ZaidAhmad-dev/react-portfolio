# Zaid Ahmad — Portfolio (zaidahmaddev.com)

A fast, SEO-focused personal website for **Shopify & WordPress development services** and **1:1 web development tutoring** (React, JavaScript, Node.js, HTML, Shopify, WordPress) — built with **Next.js 15** (App Router), **React 19**, and **TypeScript**.

**Live:** [https://zaidahmaddev.com](https://zaidahmaddev.com)

---

## Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Available Scripts](#available-scripts)
* [Environment Variables](#environment-variables)
* [Content Management](#content-management)
* [Deployment](#deployment)
* [Performance & SEO](#performance--seo)
* [Accessibility](#accessibility)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

---

## Features

* ⚡️ **Next.js 15 App Router** with React 19 and full TypeScript
* 🧭 **Clean routing** — services, tutoring, case studies, resources, booking, contact, about
* 📈 **SEO-first** — per-page metadata, sitemap, robots, JSON-LD (`WebSite`, `Person`, `FAQPage`)
* 🎯 **Targeted FAQ sections** on every page with proper `FAQPage` schema
* 📅 **Cal.com inline embed** for development consultations and tutoring sessions
* ✉️ **Contact form** wired to Resend (transactional email)
* 📥 **Lead magnets** with email-gated PDF delivery via Resend
* 📊 **Google Analytics 4** with App Router-aware page-view tracking
* 📱 **Fully responsive** — mobile-first layout, accessible menus and accordions
* 🖼️ **OG / Twitter card** metadata and a knowledge-panel-ready `Person` schema
* 🧩 **Single content source** — all copy lives in `lib/site-data.json`

---

## Tech Stack

* **Framework:** Next.js 15 (App Router)
* **Runtime:** React 19
* **Language:** TypeScript 5
* **Email:** [Resend](https://resend.com)
* **Scheduling:** [Cal.com](https://cal.com) (inline embed)
* **Icons:** `react-icons`, `lucide-react`
* **Image CDN:** ImageKit
* **Analytics:** Google Analytics 4
* **Styling:** Plain CSS + CSS Modules (no Tailwind)

---

## Project Structure

```text
root
├─ app/                                 # Next.js App Router
│  ├─ about/                            # /about
│  ├─ api/contact/route.ts              # POST contact-form handler (Resend)
│  ├─ book/[slug]/page.tsx              # /book/development-consultation, /book/tutoring-diagnostic
│  ├─ case-studies/                     # /case-studies + /case-studies/[slug]
│  ├─ contact/                          # /contact
│  ├─ download/route.ts                 # GET signed PDF download (lead magnets)
│  ├─ privacy-policy/                   # /privacy-policy
│  ├─ resources/                        # /resources
│  ├─ services/                         # /services + /services/[slug]
│  ├─ subscribe/route.ts                # POST lead-magnet form (Resend)
│  ├─ tutoring/                         # /tutoring + /tutoring/[slug]
│  ├─ layout.tsx                        # Root layout, metadata, JSON-LD, GA
│  ├─ manifest.ts                       # PWA manifest
│  ├─ not-found.tsx                     # 404
│  ├─ page.tsx                          # Homepage
│  ├─ robots.ts                         # /robots.txt
│  ├─ sitemap.ts                        # /sitemap.xml
│  └─ globals.css                       # Global styles
├─ components/
│  ├─ layout/                           # Header, Footer
│  └─ shared/                           # CalEmbed, ContactForm, CtaBanner, FaqAccordion,
│                                       # GoogleAnalytics, JsonLd, PageHero, SectionHeading
├─ lib/
│  ├─ seo.ts                            # buildMetadata helper
│  ├─ site-data.json                    # All site content (single source of truth)
│  ├─ site-data.ts                      # Typed exports + getters
│  └─ types.ts                          # Shared TS types
├─ public/                              # Static assets (favicon, icons, images, lead magnets)
│  ├─ images/                           # Logo, social, project screenshots
│  └─ lead-magnets/                     # Gated PDFs delivered via /download
├─ .env.example                         # Env-var template
├─ next.config.mjs
├─ package.json
└─ README.md
```

---

## Getting Started

### Prerequisites

* **Node.js:** v18.17+ (Next.js 15 requirement)
* **Package Manager:** npm, yarn, or pnpm
* **Resend account** (free tier is fine) for the contact form and lead-magnet emails
* **Cal.com account** for booking embeds

### Installation

```bash
# clone
git clone https://github.com/ZaidAhmad-dev/personal-portfolio.git
cd personal-portfolio

# install deps
npm install
# or
yarn
# or
pnpm install
```

### Configure Environment

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

### Run Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

* `npm run dev` — start the Next.js dev server
* `npm run build` — production build (also runs type-checking)
* `npm run start` — serve the production build locally
* `npm run lint` — run ESLint

---

## Environment Variables

All env vars are documented in `.env.example`. Create `.env.local` in the project root:

```bash
# Public site URL (used for canonical URLs, OG tags, redirects)
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Google Analytics measurement ID (G-XXXXXXXXXX)
NEXT_PUBLIC_GA_ID=

# Resend (transactional email — contact form + lead magnets)
RESEND_API_KEY=
RESEND_FROM_EMAIL="Website Contact <hello@your-domain.com>"
CONTACT_TO_EMAIL=contact@your-domain.com

# Optional: YouTube data (only if you wire YouTube widgets)
YOUTUBE_CHANNEL_ID=
YOUTUBE_API_KEY=
```

> **Tip:** the `RESEND_FROM_EMAIL` address must be a verified sender in Resend, otherwise transactional emails fail silently.

---

## Content Management

All site copy — services, tutoring subjects, case studies, FAQs, testimonials, social links, and SEO keywords — lives in [`lib/site-data.json`](./lib/site-data.json). Edit that file to update content; no code changes are needed for routine updates.

The structure is typed via [`lib/types.ts`](./lib/types.ts), so TypeScript will flag missing or malformed fields at build time.

---

## Deployment

This project uses Next.js features that require a **Node runtime** (API routes for the contact form and lead magnets, dynamic Cal.com embeds, server-side metadata). It cannot be deployed as a static export.

### Vercel (recommended)

1. Import the repository at [vercel.com/new](https://vercel.com/new)
2. Add the env vars from `.env.example`
3. Set the production domain (`zaidahmaddev.com`) and ensure DNS points to Vercel

### Self-hosted / Node

```bash
npm run build
npm run start  # listens on $PORT (default 3000)
```

Run behind a reverse proxy (Nginx, Caddy) with HTTPS. Ensure all env vars are exported to the Node process.

---

## Performance & SEO

* **Per-page metadata** via [`lib/seo.ts`](./lib/seo.ts) — title, description, canonical URL, OG, Twitter card
* **Sitemap** auto-generated from content in [`app/sitemap.ts`](./app/sitemap.ts)
* **JSON-LD structured data** — `WebSite` + `Person` (with `image`, `sameAs`, `jobTitle`, `knowsAbout`) on every page; per-page `FAQPage` schema where FAQs are present
* **Image optimization** via `next/image` with ImageKit as the source
* **Cal.com loader** is deferred (`afterInteractive`) so it never blocks initial paint
* Audit production pages with **Lighthouse** in Chrome DevTools

---

## Accessibility

* Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<section>`)
* Keyboard-operable navigation and accordion components
* Proper `aria-expanded` / `aria-controls` on the FAQ toggles
* Focus-visible outlines on interactive elements
* Alt text on all meaningful images

---

## Contributing

This is a personal site. External contributions are currently not accepted, but feel free to open an issue for bugs or suggestions.

---

## License

MIT © Zaid Ahmad

---

## Contact

* **Website:** [https://zaidahmaddev.com](https://zaidahmaddev.com)
* **Email:** [contact@zaidahmaddev.com](mailto:contact@zaidahmaddev.com)
* **LinkedIn:** [https://www.linkedin.com/in/zaidahmaddev](https://www.linkedin.com/in/zaidahmaddev)
* **GitHub:** [https://github.com/zaidahmad-dev](https://github.com/zaidahmad-dev)
* **YouTube:** [https://www.youtube.com/zaidahmad](https://www.youtube.com/zaidahmad)

---
