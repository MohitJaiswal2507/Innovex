import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { POSTS } from "@/lib/posts";
import { articleLd, pageMetadata } from "@/lib/seo";
import { ORG_NAME } from "@/lib/site";

const post = POSTS[0];

export const metadata = pageMetadata({
  path: post.path,
  title: post.title,
  description: post.description,
  type: "article",
});

const roles = [
  ["Frontend / UI", "Builds screens, forms, navigation and responsive layout", "HTML/CSS, React, Next.js or Tailwind"],
  ["Backend / API", "Handles data models, endpoints, auth and storage", "Node.js, Python, FastAPI or SQLite"],
  ["Integrations / AI", "Connects APIs, datasets or hardware sensors cleanly", "REST, JSON, Python scripts or Arduino"],
  ["Product & Pitch", "Manages scope, tests user flows, writes README and demos", "Docs, slide deck, screen recording"],
];

const plan24h = [
  ["Hours 0–2", "Read problem statements, pick one track and agree on a single-sentence MVP."],
  ["Hours 2–4", "Create the Git repository, set up folders and deploy an empty hello-world app."],
  ["Hours 4–12", "Build the core user flow end-to-end with simple placeholder data first."],
  ["Hours 12–16", "Take turns resting, attend Mentor Round 2 and fix blocking bugs."],
  ["Hours 16–20", "Connect frontend and backend, replace mock data and test edge cases."],
  ["Hours 20–22", "Freeze features. Polish error states, contrast and mobile layout."],
  ["Hours 22–24", "Record a two-minute demo video, update the README and submit early."],
];

const trackIdeas = [
  {
    track: "Campus life",
    idea: "A lost-and-found board with photo tags and hostel pickup points so students recover ID cards and chargers faster.",
  },
  {
    track: "Sustainability",
    idea: "A simple classroom energy and water-leak reporter that logs issues by block and tracks repair status.",
  },
  {
    track: "Health & wellbeing",
    idea: "A study-break and hydration reminder with a campus walking-route timer (without making medical claims).",
  },
  {
    track: "Open innovation",
    idea: "A beginner-friendly study-group matcher that pairs students by course code and free timetable slots.",
  },
];

const faqs = [
  [
    "What should I bring to a 24-hour hackathon?",
    "Bring your laptop, charger, extension board, college ID card, water bottle, light hoodie and basic toiletries. Do not forget any hardware cables or microcontrollers if your project needs them.",
  ],
  [
    "Can beginners join a 24-hour hackathon without knowing advanced frameworks?",
    "Yes. A clean static site, simple form or small Python script that actually works beats a broken complex app. Pick tools you already know and keep your scope small.",
  ],
  [
    "How do judges score a hackathon demo?",
    "Judges look at problem fit, whether the prototype genuinely runs, code clarity, usability and a clear three-minute explanation. Honest demos of finished core features score higher than slides.",
  ],
];

export default function HackathonGuidePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: "How to Prepare for a Hackathon", path: post.path },
        ]}
      />
      <JsonLd
        data={articleLd({
          headline: post.title,
          description: post.description,
          path: post.path,
          image: post.image,
          datePublished: post.datePublished,
          dateModified: post.datePublished,
        })}
      />

      <article className="py-10">
        <div className="container-x max-w-[75ch]">
          <header className="mb-8">
            <p className="eyebrow !text-orange-dark">{post.tag}</p>
            <h1 className="my-2 text-3xl font-bold leading-tight text-indigo md:text-[2.5rem]">
              How to prepare for a hackathon: a 10-step guide for students
            </h1>
            <p className="mt-3 mb-4 text-sm text-muted">
              By {ORG_NAME} · Published <time dateTime={post.datePublished}>{post.dateLabel}</time> · {post.readingTime}
            </p>
            <p className="rounded-2xl border border-line bg-tint p-5 text-lg leading-relaxed text-ink">
              To prepare for a 24-hour hackathon, form a balanced team of two to four, pick a tech stack you already
              know, set up Git beforehand and scope a tiny minimum viable product. Pack your charger and college ID,
              follow a simple hourly plan and leave two full hours for testing and your final demo.
            </p>
          </header>

          <figure className="mb-8 overflow-hidden rounded-2xl border border-line bg-indigo p-3">
            <Image
              src={post.image}
              width={720}
              height={340}
              priority
              className="h-auto w-full"
              alt={post.imageAlt}
            />
            <figcaption className="mt-2 text-center text-sm text-[#d9dcef]">
              A 24-hour hackathon splits naturally into four blocks: scope, core build, integration and submission.
            </figcaption>
          </figure>

          <div className="prose-x">
            <h2>1. Read the format and rules early</h2>
            <p>
              Every hackathon has its own rules on team size, code originality and submission format. Read the{" "}
              <Link href="/events/hackathon/">24-hour hackathon rules</Link> at least a week before arriving. Check
              whether problem statements are released at kick-off and whether open-source libraries are allowed. Knowing
              the judging weights helps you avoid spending six hours on slides when working prototypes carry 30% of the
              score.
            </p>
            <p>
              Verify your <Link href="/faq/">eligibility criteria</Link> and team-change deadlines too. At INNOVEX,
              every team member must register individually and join using a shared team code before rosters lock.
            </p>

            <h2>2. Build a balanced team</h2>
            <p>
              A strong hackathon team of two to four students covers building, connecting data and explaining the result.
              You do not need four experts. Two developers who communicate well and one teammate focused on design and
              testing can ship faster than four people writing conflicting code.
            </p>
            <div className="table-wrap">
              <table>
                <caption>Suggested roles for a 2–4 person student hackathon team</caption>
                <thead>
                  <tr>
                    <th scope="col">Role</th>
                    <th scope="col">Main responsibility</th>
                    <th scope="col">Typical tools</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map(([role, resp, tools]) => (
                    <tr key={role}>
                      <td>{role}</td>
                      <td>{resp}</td>
                      <td>{tools}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>3. Pick a familiar tech stack</h2>
            <p>
              A 24-hour hackathon is the worst place to learn a brand-new database or framework from scratch. Choose tools
              your team has already used in a class lab or weekend project. Boring, reliable choices—like HTML, CSS,
              React, Python or SQLite—save hours of debugging at 3:00 AM.
            </p>
            <p>
              If you are still learning web fundamentals, review the{" "}
              <a href="https://developer.mozilla.org/en-US/docs/Learn_web_development" target="_blank" rel="noopener noreferrer">
                MDN Web Development learning guides
              </a>{" "}
              before the event so core concepts feel natural.
            </p>

            <h2>4. Set up your environment and accounts</h2>
            <p>
              Install your code editor, Node.js or Python, and Git at home where Wi-Fi is uncrowded. Create your GitHub
              account and test pushing a sample repository so you do not lose an hour to SSH keys or login prompts. If
              you need a quick refresher on repositories and branches, check the{" "}
              <a href="https://docs.github.com/en/get-started" target="_blank" rel="noopener noreferrer">
                GitHub Get Started documentation
              </a>
              .
            </p>
            <p>
              Also install any local database or mobile emulator you plan to use. Downloading large SDKs on shared fest
              Wi-Fi slows down your whole team.
            </p>

            <h2>5. Run a practice mini-hackathon</h2>
            <p>
              Two weeks before the fest, meet your teammates for a three-hour practice sprint. Pick a tiny prompt—such as
              a campus book-swap page—and build a working form and list view together. You will quickly discover who
              handles layout, who writes endpoints and how you resolve Git merge conflicts.
            </p>
            <p>
              Practising together once removes most of the friction on Day 1. You can also attend our Day 1 Git and web
              workshops listed on the <Link href="/schedule/">INNOVEX schedule</Link>.
            </p>

            <h2>6. Follow a 24-hour plan</h2>
            <p>
              Without timeboxes, teams spend ten hours debating ideas and rush to code in the final four. Write a rough
              clock on paper at kick-off and check your progress every four hours.
            </p>
            <div className="table-wrap">
              <table>
                <caption>Sample 24-hour hackathon schedule for student teams</caption>
                <thead>
                  <tr>
                    <th scope="col">Time block</th>
                    <th scope="col">Team goal</th>
                  </tr>
                </thead>
                <tbody>
                  {plan24h.map(([block, goal]) => (
                    <tr key={block}>
                      <td>{block}</td>
                      <td>{goal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>7. Cut scope to a working MVP</h2>
            <p>
              Your goal is one complete user journey, not ten half-built tabs. If your app solves campus lost-and-found
              items, build posting an item and searching items first. Skip user profiles, dark-mode toggles and admin
              analytics until the core flow works reliably.
            </p>
            <p>
              Ask yourself at hour 12: &ldquo;If we had to demo right now, would anything run?&rdquo; If the answer is no,
              cut secondary features immediately and focus on one working path.
            </p>

            <h2>8. Pack using a checklist</h2>
            <p>
              Small forgotten items cause unnecessary stress overnight. Pack your bag the night before check-in:
            </p>
            <ul>
              <li>Laptop, charger and a shared multi-plug extension strip.</li>
              <li>College ID card, government photo ID and registration QR pass.</li>
              <li>Refillable water bottle, light jacket (halls get cold at night) and basic medicines.</li>
              <li>Notebook, pen and any sensors, cables or breadboards for hardware builds.</li>
            </ul>

            <h2>9. Prepare your demo and pitch</h2>
            <p>
              Judges often see dozens of projects in one morning. Start your three-minute demo by stating the problem in
              one sentence, then show the live prototype immediately. Do not spend two minutes on a title slide or login
              screen.
            </p>
            <p>
              Record a two-minute backup video before code freeze in case Wi-Fi drops or a server restarts during
              finals. Write a clear <code>README.md</code> explaining setup steps and crediting any open-source packages.
            </p>

            <h2>10. Prioritise self-care and rest</h2>
            <p>
              Pulling a full all-nighter with zero sleep usually leads to silly bugs and blank minds during Q&amp;A.
              Rotate sleep shifts in pairs—two teammates rest for three hours while two keep building, then swap. Drink
              water regularly, eat the meals provided at the venue and step outside for five minutes of fresh air when
              you feel stuck.
            </p>

            <h2>Beginner-friendly hackathon ideas by INNOVEX track</h2>
            <p>
              Not sure what kind of project fits a 24-hour window? Here are four focused ideas mapped to the four
              INNOVEX tracks:
            </p>
            <ul>
              {trackIdeas.map((item) => (
                <li key={item.track}>
                  <strong>{item.track}:</strong> {item.idea}
                </li>
              ))}
            </ul>

            <h2>Hackathon preparation FAQ</h2>
            {faqs.map(([q, a]) => (
              <details key={q} className="faq">
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}

            <p className="mt-6">
              Ready to join? Complete your <Link href="/register/">INNOVEX 2027 registration</Link> or read our{" "}
              <Link href="/blog/tech-fest-guide-first-year-students/">
                first-year student&apos;s guide to college tech fests
              </Link>
              .
            </p>
          </div>
        </div>
      </article>

      <CtaBand
        heading="Put your plan into action"
        text="Form a team of 2–4 and register free for the INNOVEX 24-hour hackathon."
        href="/register/"
        label="Register your team"
      />
    </>
  );
}
