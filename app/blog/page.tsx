import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/seo";

// TODO(Antigravity): replace this stub – see "/blog/" in Antigravity_prompt.md
export const metadata = pageMetadata({
  path: "/blog/",
  title: "Blog (coming soon) – INNOVEX 2027",
  description: "Hackathon and tech fest guides from INNOVEX 2027, a class-prototype tech fest website. This page is still being written.",
  noindex: true,
});

export default function Page() {
  return <ComingSoon heading="INNOVEX blog" crumbs={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }]} />;
}
