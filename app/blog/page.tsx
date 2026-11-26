import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { POSTS } from "@/lib/posts";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/blog/",
  title: "INNOVEX Blog – Hackathon & Tech Fest Guides",
  description:
    "Practical guides for college students preparing for INNOVEX 2027: how to prepare for a 24-hour hackathon and a first-year guide to tech fests.",
});

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }]} />
      <PageHero
        eyebrow="Student guides"
        title="INNOVEX blog: hackathon and tech fest guides"
        intro="Step-by-step guides written for college students attending INNOVEX 2027 or any campus tech fest for the first time."
      />

      <section className="py-12">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2">
            {POSTS.map((post) => (
              <article key={post.slug} className="card">
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
                  <span className="tag">{post.tag}</span>
                  <time dateTime={post.datePublished}>{post.dateLabel}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-1 mb-2 text-2xl">{post.title}</h2>
                <p className="m-0 text-muted">{post.excerpt}</p>
                <Link href={post.path} className="mt-auto pt-3 font-bold">
                  Read {post.title} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to put these guides into practice?"
        text="Check the hackathon rules or register your team for INNOVEX 2027."
        href="/register/"
        label="Register for INNOVEX 2027"
      />
    </>
  );
}
