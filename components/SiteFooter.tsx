import Link from "next/link";
import { FEST, FOOTER_LINKS } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="mt-6 bg-ink py-10 text-[.95rem] text-[#c9cce0]">
      <div className="container-x">
        <div className="grid gap-7 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h2 className="mb-2.5 text-base text-white">INNOVEX 2027</h2>
            <p>
              A fictional inter-college tech fest and student tech conference, built as a search-engine-optimised class
              prototype for CSET489. {FEST.datesLabel} (placeholder dates).
            </p>
          </div>
          {(["explore", "more"] as const).map((group) => (
            <div key={group}>
              <h2 className="mb-2.5 text-base text-white">{group === "explore" ? "Explore" : "More"}</h2>
              <ul className="grid gap-1.5">
                {FOOTER_LINKS[group].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[#e4e6f2]">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-7 border-t border-[#33385a] pt-4 text-sm">
          © 2026 INNOVEX class prototype · Student project for CSET489 Search Engine Optimization · Not a real event; no
          real speakers, sponsors or prizes are listed.
        </p>
      </div>
    </footer>
  );
}
