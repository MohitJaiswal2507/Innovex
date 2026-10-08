import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/seo";

// TODO(Antigravity): replace this stub – see "/venue/" in Antigravity_prompt.md
export const metadata = pageMetadata({
  path: "/venue/",
  title: "Venue & Contact (coming soon) – INNOVEX 2027",
  description: "Venue, travel and contact page for INNOVEX 2027, a class-prototype tech fest website. This page is still being written.",
  noindex: true,
});

export default function Page() {
  return <ComingSoon heading="Venue, travel & contact" crumbs={[{ name: "Home", path: "/" }, { name: "Venue & Contact", path: "/venue/" }]} />;
}
