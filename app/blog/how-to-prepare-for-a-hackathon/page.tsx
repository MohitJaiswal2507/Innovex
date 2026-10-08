import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/seo";

// TODO(Antigravity): replace this stub – see "/blog/how-to-prepare-for-a-hackathon/" in Antigravity_prompt.md
export const metadata = pageMetadata({
  path: "/blog/how-to-prepare-for-a-hackathon/",
  title: "How to Prepare for a Hackathon (coming soon) – INNOVEX",
  description: "A step-by-step hackathon preparation guide for students, from INNOVEX 2027 (class prototype). This article is still being written.",
  noindex: true,
});

export default function Page() {
  return <ComingSoon heading="How to prepare for a hackathon" crumbs={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }, { name: "How to Prepare for a Hackathon", path: "/blog/how-to-prepare-for-a-hackathon/" }]} />;
}
