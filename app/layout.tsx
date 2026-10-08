import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL), // turns relative canonical/OG paths into absolute URLs
  icons: { icon: "/logo.svg" },
};

export const viewport: Viewport = { themeColor: "#22264b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <a href="#content" className="absolute -left-[999px] top-2 z-[100] rounded-lg bg-amber px-3.5 py-2 text-ink focus:left-4">
          Skip to content
        </a>
        <div role="note" className="bg-amber px-4 py-2 text-center text-sm font-semibold text-ink">
          Class prototype: INNOVEX 2027 is a fictional event created for the CSET489 SEO course. Dates, venue and events
          are placeholders. <Link href="/about/#prototype" className="text-ink">Read the prototype disclaimer</Link>
        </div>
        <SiteHeader />
        <main id="content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
