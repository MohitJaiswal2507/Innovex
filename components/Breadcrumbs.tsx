import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbLd, type Crumb } from "@/lib/seo";

/** Visible breadcrumb trail + matching BreadcrumbList JSON-LD (they can never drift apart). */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="container-x pt-3.5 text-sm text-muted">
        <ol className="flex flex-wrap gap-1.5">
          {items.map((c, i) => (
            <li key={c.path} className="flex gap-1.5">
              {i > 0 && <span aria-hidden="true">›</span>}
              {i < items.length - 1 ? (
                <Link href={c.path} className="text-muted">{c.name}</Link>
              ) : (
                <span aria-current="page">{c.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbLd(items)} />
    </>
  );
}
