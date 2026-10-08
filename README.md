# INNOVEX 2027 — SEO Launch Plan for a Campus Tech Fest

CSET489 Search Engine Optimization mini-project · project seed **P2**.
Built with **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4**, exported as static HTML and served by **Nginx on a DigitalOcean VPS behind Cloudflare**.

> **Class prototype.** INNOVEX 2027 is a fictional event. Every page shows a prototype banner, and no real speakers, sponsors, prizes or results are listed.

## What's done / what's left

| Area | Status |
|---|---|
| Layout, header/menu, footer, design tokens (Tailwind v4) | ✅ |
| Home, About, Events, 24-Hour Hackathon, Schedule, Register | ✅ metadata, canonical, OG, breadcrumbs, JSON-LD |
| Speakers, Venue, FAQ, Past Editions, Blog hub, 2 blog posts | ⏳ `noindex` stubs; finish with `Antigravity_prompt.md` |
| `sitemap.xml` / `robots.txt` generated from code | ✅ |
| SEO checker (`tools/check_seo.py`) | ✅ 0 errors (7 warnings = the stubs) |
| Lighthouse (mobile) on 4 key pages | ✅ Perf 98–99 · A11y 100 · BP 100 · SEO 100 (`reports/lighthouse/`) |
| CI: build + SEO check + Lighthouse CI | ✅ `.github/workflows/ci.yml` |
| VPS scripts (Nginx, UFW, Certbot, rsync deploy) | ✅ `deploy/` (run on your own server) |
| Milestone I report | ✅ `docs/` |

## Requirements

- **Node.js 20.9 or newer** (22 LTS recommended): https://nodejs.org
- **Python 3** (only for the SEO checker)
- Git (optional)

## Run it locally

```bash
cd innovex-seo-nextjs
npm install          # first time only
npm run dev          # development server with hot reload
```

Open **http://localhost:3000**.

To test exactly what will go live:

```bash
npm run build        # writes the static site to ./out
npm run preview      # serves ./out with gzip at http://localhost:3000
```

## Check the SEO

```bash
npm run build
npm run check:seo    # titles, descriptions, H1, canonical, alt text, JSON-LD, links, sitemap
```

This writes `reports/seo_check_log.md`. For Lighthouse, run `npm run preview`, open Chrome DevTools → Lighthouse → Mobile → Analyze, or run `npm run lhci`.

## Project structure

```
app/                 routes (App Router) – one folder per URL, page.tsx inside
  layout.tsx         banner, header, footer, metadataBase
  sitemap.ts         sitemap.xml built from INDEXABLE_ROUTES
  robots.ts          robots.txt
components/          SiteHeader, SiteFooter, Breadcrumbs (+JSON-LD), PageHero, Facts, CtaBand, RegisterForm, ComingSoon
lib/site.ts          every event fact (dates, fees, schedule) + indexable route list
lib/seo.ts           pageMetadata() helper + JSON-LD builders (Organization, WebSite, Event, BreadcrumbList)
public/              logo, hero illustration, Open Graph image
tools/check_seo.py   SEO rule checker (Python, no dependencies)
deploy/              setup_vps.sh, deploy.sh, verify_dns.sh, nginx/innovex.conf
seo-data/            keyword_map.csv, page_inventory.csv
reports/             SEO check log, Lighthouse reports
docs/                Milestone I report, architecture diagram
Antigravity_prompt.md  instructions for finishing the remaining 50%
```
