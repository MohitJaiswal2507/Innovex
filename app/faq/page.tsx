import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/seo";

// TODO(Antigravity): replace this stub – see "/faq/" in Antigravity_prompt.md
export const metadata = pageMetadata({
  path: "/faq/",
  title: "FAQ (coming soon) – INNOVEX 2027",
  description: "Frequently asked questions for INNOVEX 2027, a class-prototype tech fest website. This page is still being written.",
  noindex: true,
});

export default function Page() {
  return <ComingSoon heading="INNOVEX FAQ" crumbs={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq/" }]} />;
}
