# Changelog

All notable changes to the INNOVEX 2027 SEO project (`innovex-seo-nextjs`) are documented here.

## 2026-11-26

- **Added `/speakers/` (`app/speakers/page.tsx`)** — replaced `<ComingSoon>` stub with three conference talk tracks, role-only speaker placeholders, call for student talks, workshops table from `SCHEDULE`, and what-to-bring checklist to cover `student tech conference india`.
- **Added `/venue/` (`app/venue/page.tsx`, `public/campus-map.svg`)** — replaced stub with `<Facts>`, schematic campus map SVG with walking route, placeholder travel instructions, outstation accommodation, accessibility info, role-based contacts, and `Organization` `contactPoint` JSON-LD.
- **Added `/faq/` (`app/faq/page.tsx`)** — replaced stub with 19 Q&As across five groups (`Eligibility`, `Registration & fees`, `Hackathon`, `Travel & stay`, `Code of conduct`). Intentionally omitted `FAQPage` JSON-LD because Google restricts FAQ rich results to authoritative government and health sites.
- **Added `/archive/` (`app/archive/page.tsx`)** — replaced stub with first-edition notice, post-event results publishing plan, placeholder 2027 results table, consent policy, and correction request instructions.
- **Added `/blog/` hub and two resource guides (`lib/posts.ts`, `app/blog/**`, `public/hackathon-plan.svg`, `public/first-year-guide.svg`)** — built the blog index and two long-form student guides (`how-to-prepare-for-a-hackathon`, `tech-fest-guide-first-year-students`) with `Article` JSON-LD (`articleLd()` in `lib/seo.ts`) and verified outbound citations.
- **Updated site-wide SEO (`lib/site.ts`, `app/about/page.tsx`, `seo-data/*.csv`)** — added all 13 routes to `INDEXABLE_ROUTES` for `sitemap.xml`, added contextual link from `/about/` to `/archive/`, and marked all entries `built` in `page_inventory.csv` and `keyword_map.csv`.
- **Added opt-in GA4 analytics (`components/Analytics.tsx`, `app/layout.tsx`, `.env.example`, `docs/analytics-setup.md`)** — loads GA4 only when `NEXT_PUBLIC_GA_ID` is set at build time, keeping the default static export unchanged, and documents Search Console + GA4 `register_click` verification.
- **Restored `tools/check_seo.py`** — added dependency-free Python static SEO checker matching `package.json` (`check:seo`) and CI workflow expectations.
- **Added `seonalabs.com` outbound link & GSC verification env support (`app/blog/how-to-prepare-for-a-hackathon/page.tsx`, `app/layout.tsx`, `.env.example`)** — added contextual outbound link to `https://seonalabs.com` (`rel="noopener"`, matching Milestone II Section 4) and opt-in `NEXT_PUBLIC_GSC_VERIFICATION` meta verification support.
- **Updated `SITE_URL` & Search Console verification (`lib/site.ts`, `app/layout.tsx`, `lib/seo.ts`)** — set `SITE_URL` to `https://innovex-seo-nextjs.vercel.app` so canonicals and `sitemap.xml` match the live Vercel host, embedded Search Console meta verification tag, and added ISO timezone + organization fields to `articleLd()`.
