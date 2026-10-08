import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/seo";

// TODO(Antigravity): replace this stub – see "/archive/" in Antigravity_prompt.md
export const metadata = pageMetadata({
  path: "/archive/",
  title: "Past Editions (coming soon) – INNOVEX 2027",
  description: "Past editions and results page for INNOVEX 2027, a class-prototype tech fest website. This page is still being written.",
  noindex: true,
});

export default function Page() {
  return <ComingSoon heading="Past editions & results" crumbs={[{ name: "Home", path: "/" }, { name: "Past Editions", path: "/archive/" }]} />;
}
