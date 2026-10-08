import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { FEST } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/events/",
  title: "Events & Competitions at INNOVEX 2027 Tech Fest",
  description: "Full tech fest events list for INNOVEX 2027: 24-hour hackathon, Code Sprint coding contest, project expo, workshops and talks, with fees and team sizes.",
});

const competitions = [
  { id: "hackathon", tag: "Flagship · Team", title: "24-Hour Hackathon", text: "Build a working prototype on one of four problem tracks. Mentors, food and a quiet room are provided through the night.", meta: "Day 1, 6:00 PM → Day 2, 6:00 PM · Free · 2–4 members", href: "/events/hackathon/", link: "Hackathon rules, tracks and judging →" },
  { id: "code-sprint", tag: "Individual", title: "Code Sprint (coding contest)", text: "A three-hour coding competition for college students with two divisions: Beginner (first and second year) and Open.", meta: "Day 2, 10:00 AM · Free · Individual", href: "#coding-competition", link: "How the coding contest works →" },
  { id: "expo", tag: "Exhibition", title: "Project Expo", text: "Show a project you have already built: a website, app, robot or research prototype. Visitors vote for the people's choice.", meta: "Day 2, 2:00 PM · Free · 1–4 members", href: "/register/", link: "Register for the expo →" },
];
const learning = [
  { tag: "Workshop", title: "Hands-on workshops", text: "Small-group sessions on web development, cloud basics, Git and AI tools for developers. Laptops required.", meta: `Day 1 & Day 3 · ${FEST.workshopFee} per workshop`, href: "/speakers/", link: "Workshop topics →" },
  { tag: "Conference", title: "Student tech conference", text: "Short talks by students and invited industry professionals on projects, internships and careers in technology.", meta: "Day 2 · Free · Open to all", href: "/speakers/", link: "Talk tracks →" },
];

function Card(c: { id?: string; tag: string; title: string; text: string; meta: string; href: string; link: string }) {
  return (
    <article id={c.id} className="card">
      <span className="tag">{c.tag}</span>
      <h3 className="m-0">{c.title}</h3>
      <p className="m-0 text-muted">{c.text}</p>
      <p className="m-0 text-sm font-semibold">{c.meta}</p>
      <Link href={c.href} className="mt-auto pt-2.5 font-bold">{c.link}</Link>
    </article>
  );
}

export default function EventsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Events", path: "/events/" }]} />
      <PageHero eyebrow="Events & competitions" title="INNOVEX 2027 tech fest events list" intro="Every competition, workshop and talk at INNOVEX 2027, with the day, team size, fee and who can take part. Pick an event, then register once for everything you want to join." />
      <section className="py-12">
        <div className="container-x">
          <h2>Competitions</h2>
          <div className="grid gap-4.5 md:grid-cols-3">{competitions.map((c) => <Card key={c.title} {...c} />)}</div>
          <h2 className="mt-10">Learning sessions</h2>
          <div className="grid gap-4.5 md:grid-cols-2">{learning.map((c) => <Card key={c.title} {...c} />)}</div>
        </div>
      </section>
      <section className="bg-tint py-12" aria-labelledby="compare-h">
        <div className="container-x">
          <h2 id="compare-h">Compare events at a glance</h2>
          <div className="table-wrap bg-white">
            <table>
              <caption>INNOVEX 2027 events: day, team size, fee and eligibility</caption>
              <thead><tr><th scope="col">Event</th><th scope="col">Day</th><th scope="col">Team size</th><th scope="col">Fee</th><th scope="col">Who can join</th></tr></thead>
              <tbody>
                <tr><td><Link href="/events/hackathon/">24-Hour Hackathon</Link></td><td>Day 1–2</td><td>2–4</td><td>Free</td><td>UG/PG students, any college</td></tr>
                <tr><td>Code Sprint</td><td>Day 2</td><td>1</td><td>Free</td><td>UG/PG students; Beginner division for 1st–2nd year</td></tr>
                <tr><td>Project Expo</td><td>Day 2</td><td>1–4</td><td>Free</td><td>Students with a built project</td></tr>
                <tr><td>Workshops</td><td>Day 1, Day 3</td><td>1</td><td>{FEST.workshopFee} each</td><td>Anyone with a laptop</td></tr>
                <tr><td>Student tech conference</td><td>Day 2</td><td>—</td><td>Free</td><td>Open to all visitors</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section id="coding-competition" className="py-12" aria-labelledby="cc-h">
        <div className="container-x prose-x max-w-[75ch]">
          <h2 id="cc-h">Coding competition for college students: how the Code Sprint works</h2>
          <p>The Code Sprint is a three-hour individual contest held on Day 2 in the computer labs. You solve five to seven algorithmic problems in C, C++, Java or Python on an online judge. Problems are ranked by difficulty, and ties are broken by total time.</p>
          <h3>Divisions</h3>
          <ul>
            <li><strong>Beginner:</strong> for first- and second-year students. Problems cover arrays, strings, sorting and basic maths.</li>
            <li><strong>Open:</strong> for everyone. Problems include graphs, dynamic programming and greedy algorithms.</li>
          </ul>
          <h3>Rules in short</h3>
          <ul>
            <li>Use of AI assistants or communication with others during the contest leads to disqualification.</li>
            <li>Lab computers are provided; personal laptops are not allowed in the Code Sprint.</li>
            <li>Results are published on the same evening and later moved to <Link href="/archive/">past editions</Link>.</li>
          </ul>
          <p>Preparing for the hackathon instead? Read <Link href="/blog/how-to-prepare-for-a-hackathon/">how to prepare for a hackathon</Link>.</p>
        </div>
      </section>
      <CtaBand heading="One registration, every event" text="Choose your events in a single form. Team details can be added later." href="/register/" label="Register for INNOVEX 2027" />
    </>
  );
}
