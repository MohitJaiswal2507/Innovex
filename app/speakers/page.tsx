import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/seo";

// TODO(Antigravity): replace this stub – see "/speakers/" in Antigravity_prompt.md
export const metadata = pageMetadata({
  path: "/speakers/",
  title: "Speakers & Workshops (coming soon) – INNOVEX 2027",
  description: "Speakers and workshops page for INNOVEX 2027, a class-prototype tech fest website. This page is still being written.",
  noindex: true,
});

export default function Page() {
  return <ComingSoon heading="Student tech conference & workshops" crumbs={[{ name: "Home", path: "/" }, { name: "Speakers & Workshops", path: "/speakers/" }]} />;
}
