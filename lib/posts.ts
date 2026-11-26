export type BlogPost = {
  slug: string;
  path: string;
  title: string;
  description: string;
  excerpt: string;
  datePublished: string;
  dateLabel: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  tag: string;
};

export const POSTS: BlogPost[] = [
  {
    slug: "how-to-prepare-for-a-hackathon",
    path: "/blog/how-to-prepare-for-a-hackathon/",
    title: "How to Prepare for a Hackathon: 10-Step Guide",
    description:
      "A 10-step guide on how to prepare for a hackathon: team roles, 24-hour plan, what to bring, beginner project ideas and demo tips for college students.",
    excerpt:
      "A practical 10-step plan covering team roles, choosing a stack, a 24-hour timeline, what to pack, beginner-friendly ideas and how to pitch a working demo.",
    datePublished: "2026-11-05",
    dateLabel: "5 Nov 2026",
    readingTime: "8 min read",
    image: "/hackathon-plan.svg",
    imageAlt: "Diagram of a 24-hour hackathon plan showing team setup, build sprints, mentor check-ins and final demo",
    tag: "Hackathon guide",
  },
  {
    slug: "tech-fest-guide-first-year-students",
    path: "/blog/tech-fest-guide-first-year-students/",
    title: "First-Year Student's Guide to College Tech Fests",
    description:
      "What happens at a college tech fest and how first-year students can choose events, find teammates, plan costs and make the most of their first fest.",
    excerpt:
      "New to college tech fests? Learn what happens at a fest, how to pick the right events, how to find teammates and how to prepare in one week.",
    datePublished: "2026-11-12",
    dateLabel: "12 Nov 2026",
    readingTime: "6 min read",
    image: "/first-year-guide.svg",
    imageAlt: "Illustration of a first-year student's path through a college tech fest: workshops, coding contest, expo and hackathon",
    tag: "First-year guide",
  },
];
