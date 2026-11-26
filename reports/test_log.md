# Quality & Test Log

| Date | Check | Tool | Result | Evidence |
|---|---|---|---|---|
| 2026-11-26 | Static export & TypeScript check | `npm run build` (`next build`) | Pass (17 static routes, 0 TS/build errors) | `out/` |
| 2026-11-26 | Static SEO rules (titles, descriptions, H1, canonical, alt, JSON-LD, internal links, sitemap) | `python tools/check_seo.py --site out` | Pass (13 pages, 13 indexable, 13 in sitemap, 0 errors, 0 warnings) | `reports/seo_check_log.md` |
| 2026-11-26 | Outbound citation URLs (`docs.github.com`, `developer.mozilla.org`) | `Invoke-WebRequest -Method Head` | Pass (HTTP 200 on both URLs) | — |
| 2026-11-26 | Lighthouse CI (mobile) — `/` | `npx @lhci/cli@0.15.1 autorun` | Pass (Perf 100 · A11y 100 · BP 96 · SEO 100) | `reports/lighthouse-ci/` |
| 2026-11-26 | Lighthouse CI (mobile) — `/events/hackathon/` | `npx @lhci/cli@0.15.1 autorun` | Pass (Perf 99 · A11y 100 · BP 96 · SEO 100) | `reports/lighthouse-ci/` |
| 2026-11-26 | Lighthouse CI (mobile) — `/schedule/` | `npx @lhci/cli@0.15.1 autorun` | Pass (Perf 99 · A11y 100 · BP 96 · SEO 100) | `reports/lighthouse-ci/` |
| 2026-11-26 | Lighthouse CI (mobile) — `/register/` | `npx @lhci/cli@0.15.1 autorun` | Pass (Perf 99 · A11y 100 · BP 96 · SEO 100) | `reports/lighthouse-ci/` |
| 2026-11-26 | Lighthouse CI (mobile) — `/blog/how-to-prepare-for-a-hackathon/` | `npx @lhci/cli@0.15.1 autorun` | Pass (Perf 99 · A11y 100 · BP 96 · SEO 100) | `reports/lighthouse/mobile-blog-hackathon-guide.html` |
| 2026-11-26 | Lighthouse CI (mobile) — `/faq/` | `npx @lhci/cli@0.15.1 autorun` | Pass (Perf 99 · A11y 100 · BP 96 · SEO 100) | `reports/lighthouse/mobile-faq.html` |
