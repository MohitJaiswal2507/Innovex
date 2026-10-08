import type { Metadata } from "next";
import { CONTACT_EMAIL, FEST, ORG_NAME, SITE_NAME, SITE_URL } from "./site";

type MetaInput = {
  path: string; // must start and end with "/"
  title: string; // 30–60 chars, unique per page
  description: string; // 70–160 chars, unique per page
  noindex?: boolean;
  type?: "website" | "article";
};

/** One helper for every page: title, description, canonical, robots, Open Graph, Twitter. */
export function pageMetadata({ path, title, description, noindex = false, type = "website" }: MetaInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, "max-image-preview": "large" },
    openGraph: {
      type,
      url: path,
      title,
      description,
      siteName: `${SITE_NAME} (Class Prototype)`,
      locale: "en_IN",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "INNOVEX 2027 banner: inter-college tech fest, labelled as a class prototype" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
  };
}

// ---------- JSON-LD builders (schema.org) ----------

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: ORG_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.svg`,
  email: CONTACT_EMAIL,
  description:
    "Fictional student organising committee created for the CSET489 Search Engine Optimization course project. Not a real organisation.",
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const place = {
  "@type": "Place",
  name: "[University Name] Main Campus — Innovation Block (placeholder)",
  address: {
    "@type": "PostalAddress",
    streetAddress: "[Campus address]",
    addressLocality: "[City]",
    addressRegion: "[State]",
    addressCountry: "IN",
  },
};

export function eventLd(opts: { name: string; description: string; path: string; start: string; end: string; price?: string }) {
  const price = opts.price ?? "0";
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    startDate: opts.start,
    endDate: opts.end,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: place,
    image: [`${SITE_URL}/og-image.png`],
    isAccessibleForFree: price === "0",
    organizer: { "@type": "Organization", name: ORG_NAME, url: `${SITE_URL}/` },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/register/`,
      validFrom: "2026-11-01T00:00:00+05:30",
    },
  };
}

export const festEventLd = eventLd({
  name: "INNOVEX 2027 – Inter-College Tech Fest (Class Prototype)",
  description:
    "Fictional three-day inter-college tech fest with a 24-hour hackathon, coding contest, workshops and student tech talks, created as a CSET489 class prototype.",
  path: "/",
  start: FEST.start,
  end: FEST.end,
});

export type Crumb = { name: string; path: string };

export function breadcrumbLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${SITE_URL}${c.path}` })),
  };
}
