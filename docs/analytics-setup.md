# Analytics & Search Console Setup (Milestone II)

This guide covers connecting **Google Search Console** and **Google Analytics 4 (GA4)** for `innovexfest.tech` once the static site is live behind Cloudflare.

---

## 1. Google Search Console (Domain property)

1. Sign in to [Google Search Console](https://search.google.com/search-console) and click **Add property**.
2. Choose **Domain** (not URL prefix) and enter `innovexfest.tech`.
3. Copy the **TXT** verification record provided by Search Console.
4. Open the **Cloudflare Dashboard** → select `innovexfest.tech` → **DNS** → **Records** → **Add record**:
   - **Type:** `TXT`
   - **Name:** `@`
   - **Content:** paste the verification token
   - **TTL:** Auto
5. Wait 1–5 minutes for DNS propagation, then click **Verify** in Search Console.
6. Once verified, open **Sitemaps** in the left sidebar, enter `sitemap.xml` (full URL: `https://innovexfest.tech/sitemap.xml`), and click **Submit**.

---

## 2. Google Analytics 4 (GA4)

1. Open [Google Analytics](https://analytics.google.com/) and create a new **Property** (`INNOVEX 2027`, reporting time zone `India (GMT+05:30)`, currency `INR`).
2. Under **Data Streams**, add a **Web** stream for `https://innovexfest.tech` and copy the **Measurement ID** (`G-XXXXXXXXXX`).
3. Add the Measurement ID to your build environment before running `npm run build`:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX npm run build
```

When `NEXT_PUBLIC_GA_ID` is unset (the default in `.env.example`), `components/Analytics.tsx` renders `null` and adds zero scripts to the static export.

---

## 3. Mark `register_click` as a Key Event & Verify in Realtime

`components/RegisterForm.tsx` already fires:

```ts
window.gtag?.("event", "register_click", {
  event_category: "registration",
  event_label: "demo_form",
});
```

1. In GA4, go to **Admin** → **Events** (or **Key events**).
2. Either wait for the first `register_click` event to appear or click **New key event** and enter the exact event name `register_click`.
3. Open the live `/register/` page in a browser, submit the demo form, and open **Reports → Realtime** in GA4.
4. Confirm that `page_view` and `register_click` appear in the **Event count by Event name** card within 30 seconds.
