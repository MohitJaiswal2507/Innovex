import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { CONTACT_EMAIL, FEST, SCHEDULE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/speakers/",
  title: "Student Tech Conference & Workshops | INNOVEX",
  description:
    "Student tech conference talks and hands-on workshops at INNOVEX 2027: three talk tracks, four workshops, call for student talks and what to bring.",
});

const conferenceTracks = [
  {
    tag: "Day 2 · 10:30 AM",
    title: "Student project talks",
    where: "Main Auditorium",
    text: "Ten-minute lightning talks by undergraduate and postgraduate students on projects they built, what broke in testing and what they would do differently next time.",
  },
  {
    tag: "Day 2 · 3:30 PM",
    title: "Internships & careers",
    where: "Main Auditorium",
    text: "Practical sessions on preparing for software and hardware internships, writing clear project READMEs, technical interviews and navigating early-career roles.",
  },
  {
    tag: "Day 2 · 1:00 PM",
    title: "Open source & communities",
    where: "Main Auditorium",
    text: "How students can make their first open-source pull request, maintain campus developer clubs and collaborate across colleges without burning out.",
  },
];

const speakerPlaceholders = [
  {
    role: "Industry speaker — to be announced",
    track: "Internships & careers",
    topic: "How engineering teams evaluate student portfolios and internship applications",
  },
  {
    role: "Alumni engineer — to be announced",
    track: "Open source & communities",
    topic: "Moving from college side projects to maintaining open-source tools",
  },
  {
    role: "Student speaker — selected via CFP",
    track: "Student project talks",
    topic: "Ten-minute lightning talks chosen from open student submissions",
  },
  {
    role: "Workshop lead — faculty & senior mentors",
    track: "Hands-on workshops",
    topic: "Guided lab sessions on web deployment, Git workflows, cloud basics and AI tools",
  },
];

const talkSteps = [
  "Pick a real project, tool or lesson you worked on in the last year — it does not need to be a finished startup.",
  "Write a short 100-word summary explaining what you built, who it helps and one technical takeaway for other students.",
  `Email your summary, college name and year of study to ${CONTACT_EMAIL} with the subject "Student Talk – INNOVEX 2027" by 10 Jan 2027 (placeholder deadline).`,
  "Selected speakers get a 10-minute slot (8 minutes talk + 2 minutes Q&A) on Day 2 in the Main Auditorium.",
];

const workshopMeta: Record<string, { prereq: string }> = {
  "Workshop: Build and deploy your first website": { prereq: "Basic HTML or curiosity; laptop required" },
  "Workshop: Git and GitHub for teams": { prereq: "GitHub account created beforehand; laptop required" },
  "Workshop: Cloud basics for student projects": { prereq: "Basic command-line familiarity; laptop required" },
  "Workshop: AI tools for developers": { prereq: "Any code editor installed; laptop required" },
};

const workshops = SCHEDULE.flatMap((day) =>
  day.sessions
    .filter((s) => s.title.startsWith("Workshop:"))
    .map((s) => ({
      name: s.title.replace("Workshop: ", ""),
      dayTime: `${day.heading.split(" — ")[0]} · ${s.time}`,
      lab: s.where,
      fee: FEST.workshopFee,
      seats: "30 seats",
      prereq: workshopMeta[s.title]?.prereq ?? "Laptop required",
    })),
);

export default function SpeakersPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Speakers & Workshops", path: "/speakers/" }]} />
      <PageHero
        eyebrow="Conference & workshops"
        title="Student tech conference and hands-on workshops at INNOVEX 2027"
        intro="Learn alongside peers in short student-led talks, career sessions and small-group lab workshops across all three days of INNOVEX 2027."
      />

      <section className="py-12">
        <div className="container-x prose-x max-w-[75ch]">
          <h2>Why attend the conference and workshops</h2>
          <p>
            Not every moment at a tech fest has to be a timed competition. The INNOVEX student tech conference and
            workshops are built for students who want to learn a new skill, ask honest questions about internships or
            hear how peers shipped real projects. Conference talks are free and open to all registered visitors in the
            Main Auditorium. Workshops run in computer labs with 30 seats each so mentors can help every participant
            directly. Check the full <Link href="/schedule/">fest schedule</Link> or browse all{" "}
            <Link href="/events/">events at INNOVEX</Link>.
          </p>
        </div>
      </section>

      <section className="bg-tint py-12" aria-labelledby="tracks-h">
        <div className="container-x">
          <h2 id="tracks-h">Three conference talk tracks</h2>
          <p className="mt-0 max-w-[70ch] text-muted">
            All conference sessions take place on Day 2 in the Main Auditorium. Times match our published{" "}
            <Link href="/schedule/">Day 2 schedule</Link>.
          </p>
          <div className="mt-5 grid gap-4.5 md:grid-cols-3">
            {conferenceTracks.map((t) => (
              <article key={t.title} className="card">
                <span className="tag">{t.tag}</span>
                <h3 className="m-0">{t.title}</h3>
                <p className="m-0 text-muted">{t.text}</p>
                <p className="mt-auto mb-0 pt-2 text-sm font-semibold">{t.where} · Free</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12" aria-labelledby="speakers-h">
        <div className="container-x">
          <h2 id="speakers-h">Speakers (role placeholders)</h2>
          <div className="callout mb-6 max-w-[75ch]">
            <p className="m-0">
              <strong>No speakers are confirmed yet.</strong> Because INNOVEX 2027 is a class prototype for CSET489, this
              page lists speaker roles only and does not name real individuals, companies or sponsors.
            </p>
          </div>
          <div className="grid gap-4.5 md:grid-cols-2">
            {speakerPlaceholders.map((s) => (
              <article key={s.role} className="card">
                <span className="tag">{s.track}</span>
                <h3 className="m-0">{s.role}</h3>
                <p className="m-0 text-muted">{s.topic}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-tint py-12" aria-labelledby="cfp-h">
        <div className="container-x max-w-[75ch]">
          <h2 id="cfp-h">Call for student talks (10-minute slots)</h2>
          <p>
            If you have built a project, debugged a tough problem or learned a tool worth sharing, apply for a
            10-minute student talk. First-time speakers are encouraged to apply.
          </p>
          <ol className="grid list-none gap-3.5 p-0">
            {talkSteps.map((step, i) => (
              <li key={i} className="relative rounded-2xl border border-line bg-white py-4 pr-4.5 pl-16">
                <span aria-hidden="true" className="absolute top-4 left-4.5 grid size-8 place-items-center rounded-full bg-orange font-extrabold text-ink">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-12" aria-labelledby="workshops-h">
        <div className="container-x">
          <h2 id="workshops-h">Hands-on tech workshops for students</h2>
          <p className="mt-0 max-w-[70ch] text-muted">
            Each workshop is capped at 30 seats and costs {FEST.workshopFee} (placeholder fee) to cover printed guides
            and lab support. Reserve your seat during <Link href="/register/">online registration</Link>.
          </p>
          <div className="table-wrap">
            <table>
              <caption>INNOVEX 2027 hands-on workshops (30 seats each, placeholder schedule)</caption>
              <thead>
                <tr>
                  <th scope="col">Workshop</th>
                  <th scope="col">Day &amp; time</th>
                  <th scope="col">Lab</th>
                  <th scope="col">Fee</th>
                  <th scope="col">Seats</th>
                  <th scope="col">Prerequisites</th>
                </tr>
              </thead>
              <tbody>
                {workshops.map((w) => (
                  <tr key={w.name}>
                    <td>{w.name}</td>
                    <td>{w.dayTime}</td>
                    <td>{w.lab}</td>
                    <td>{w.fee}</td>
                    <td>{w.seats}</td>
                    <td>{w.prereq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="callout-info max-w-[75ch]">
            <h3 className="mt-0">What to bring to workshops</h3>
            <ul className="mb-0 list-disc pl-6">
              <li>A charged laptop and charger (power strips are available in Lab 1 and Lab 2).</li>
              <li>Your college ID card and registration QR pass.</li>
              <li>A GitHub account and a code editor installed before arriving, so lab time goes into building.</li>
              <li>Directions to Lab 1 and Lab 2 are on the <Link href="/venue/">campus venue page</Link>.</li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Reserve a workshop seat or attend talks"
        text="Conference talks are free. Workshop seats are allocated first-come, first-served."
        href="/register/"
        label="Register for INNOVEX 2027"
      />
    </>
  );
}
