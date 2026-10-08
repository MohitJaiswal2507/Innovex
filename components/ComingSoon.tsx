import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import type { Crumb } from "@/lib/seo";

/**
 * Placeholder for pages that are planned in the architecture but not written yet.
 * Each stub exports `robots: noindex` metadata and is NOT listed in INDEXABLE_ROUTES (so not in the sitemap).
 * TODO(Antigravity): replace each stub using its spec in Antigravity_prompt.md.
 */
export default function ComingSoon({ heading, crumbs }: { heading: string; crumbs: Crumb[] }) {
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <section className="py-16">
        <div className="container-x max-w-[75ch]">
          <h1 className="mb-4 text-3xl font-bold text-indigo">{heading} (coming soon)</h1>
          <div className="callout">
            <p className="m-0">
              <strong>Placeholder page.</strong> This page is planned in the site architecture but has not been written
              yet. It is set to <code>noindex</code> and stays out of the sitemap until its content is complete.
            </p>
          </div>
          <p className="mt-4">
            Meanwhile, see the <Link href="/events/">events list</Link>, the <Link href="/schedule/">schedule</Link> or{" "}
            <Link href="/register/">registration</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
