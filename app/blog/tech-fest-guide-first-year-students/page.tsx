import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/seo";

// TODO(Antigravity): replace this stub – see "/blog/tech-fest-guide-first-year-students/" in Antigravity_prompt.md
export const metadata = pageMetadata({
  path: "/blog/tech-fest-guide-first-year-students/",
  title: "First-Year Guide to Tech Fests (coming soon) – INNOVEX",
  description: "A guide to college tech fests for first-year students, from INNOVEX 2027 (class prototype). This article is still being written.",
  noindex: true,
});

export default function Page() {
  return <ComingSoon heading="Tech fest guide for first-year students" crumbs={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }, { name: "First-Year Guide", path: "/blog/tech-fest-guide-first-year-students/" }]} />;
}
