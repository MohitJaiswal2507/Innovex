import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import Facts from "@/components/Facts";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { FEST } from "@/lib/site";
import { eventLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/events/hackathon/",
  title: "24-Hour Hackathon for College Students | INNOVEX",
  description: "Rules, team size, problem tracks, timeline and judging criteria for the free INNOVEX 24-hour hackathon for college students. Teams of 2–4 from any college.",
});

const timeline = [
  ["Fri 4:00 PM", "Check-in with college ID, Innovation Block lobby"],
  ["Fri 6:00 PM", "Problem statements released; hacking starts"],
  ["Fri 11:00 PM", "Mentor round 1 (idea check)"],
  ["Sat 8:00 AM", "Mentor round 2 (progress check)"],
  ["Sat 6:00 PM", "Code freeze; submit repository link and a 2-minute video"],
  ["Sun 10:00 AM", "Top 10 teams demo to judges"],
  ["Sun 4:00 PM", "Results at the closing session"],
];
const judging = [
  ["Problem fit", "25%", "Does the project solve the stated problem for a real user?"],
  ["Working prototype", "30%", "Does the demo actually run?"],
  ["Technical depth", "20%", "Sensible architecture and clean code"],
  ["Design & usability", "15%", "Is it easy to use and accessible?"],
  ["Presentation", "10%", "A clear, honest 3-minute demo"],
];
const faqs = [
  ["Can first-year students participate in the hackathon?", "Yes. First-year students are welcome, and the Open Innovation track is a good starting point. Mixed teams of juniors and seniors often do well."],
  ["How many members are allowed in a hackathon team?", "Two to four members. Solo participants can ask the organisers to be matched with a team during check-in."],
  ["Do we need to have an idea before the hackathon?", "No. Problem statements are released at the start. You may think about the tracks in advance, but all code must be written during the 24 hours."],
  ["Can we use open-source libraries and AI tools?", "Yes, as long as you credit them in your repository README. Judges score what your team built, so explain clearly which parts are yours."],
];

export default function HackathonPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Events", path: "/events/" }, { name: "24-Hour Hackathon", path: "/events/hackathon/" }]} />
      <JsonLd data={eventLd({
        name: "INNOVEX 24-Hour Hackathon (Class Prototype)",
        description: "Fictional free 24-hour hackathon for college students, teams of 2-4, part of the INNOVEX 2027 class-prototype tech fest.",
        path: "/events/hackathon/",
        start: "2027-02-12T18:00:00+05:30",
        end: "2027-02-13T18:00:00+05:30",
      })} />
      <PageHero eyebrow="Flagship event" title="24-Hour Hackathon for College Students" intro="Form a team of two to four, pick a problem track and build a working prototype in 24 hours. Free to join, open to students from any college, and beginner-friendly." />
      <section className="bg-tint pb-10">
        <div className="container-x">
          <Facts items={[
            { label: "Starts", value: "Fri 12 Feb 2027, 6:00 PM" },
            { label: "Ends", value: "Sat 13 Feb 2027, 6:00 PM" },
            { label: "Team size", value: "2–4 members" },
            { label: "Fee", value: "Free" },
            { label: "Eligibility", value: "UG/PG students, any college" },
            { label: "Registration", value: `Open · closes ${FEST.regCloses}`, highlight: true },
          ]} />
        </div>
      </section>
      <section className="py-12">
        <div className="container-x grid items-start gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="prose-x min-w-0">
            <h2>What is the INNOVEX hackathon?</h2>
            <p>A hackathon is a time-boxed event where small teams design and build a software or hardware prototype that solves a stated problem. At INNOVEX, the hackathon runs for 24 hours on campus. Mentors from the faculty and senior student community are available throughout, and the final demos take place on Day 3.</p>
            <h2>Problem tracks</h2>
            <ul>
              <li><strong>Campus life:</strong> tools that make everyday student life easier, such as timetables, lost-and-found and club management.</li>
              <li><strong>Sustainability:</strong> energy, waste and water monitoring for a campus.</li>
              <li><strong>Health &amp; wellbeing:</strong> apps that encourage healthier routines (no medical diagnosis tools).</li>
              <li><strong>Open innovation:</strong> any idea that does not fit the other three tracks.</li>
            </ul>
            <p>Detailed problem statements are released at the opening session so that every team starts at the same time.</p>
            <h2>Team size rules</h2>
            <ul>
              <li>Teams have <strong>2 to 4 members</strong>. Solo entries are not accepted in the hackathon (try the <Link href="/events/#code-sprint">Code Sprint</Link> instead).</li>
              <li>Members may come from different colleges, years and branches.</li>
              <li>Each member registers individually and joins the team using a team code.</li>
              <li>Team changes are allowed until {FEST.teamChangesUntil}.</li>
            </ul>
            <h2>Hackathon timeline</h2>
            <div className="table-wrap">
              <table>
                <caption>24-hour hackathon timeline (placeholder timings)</caption>
                <thead><tr><th scope="col">When</th><th scope="col">What happens</th></tr></thead>
                <tbody>{timeline.map(([w, t]) => <tr key={w}><td>{w}</td><td>{t}</td></tr>)}</tbody>
              </table>
            </div>
            <h2>Judging criteria</h2>
            <div className="table-wrap">
              <table>
                <caption>How hackathon projects are scored</caption>
                <thead><tr><th scope="col">Criterion</th><th scope="col">Weight</th><th scope="col">What judges look for</th></tr></thead>
                <tbody>{judging.map(([c, w, d]) => <tr key={c}><td>{c}</td><td>{w}</td><td>{d}</td></tr>)}</tbody>
              </table>
            </div>
            <h2>What to bring</h2>
            <p>Your laptop and charger, college ID card, a reusable water bottle and any hardware your idea needs. Food and power sockets are provided. For a full checklist and preparation plan, read our guide on <Link href="/blog/how-to-prepare-for-a-hackathon/">how to prepare for a hackathon</Link>.</p>
            <h2>Prizes</h2>
            <p>Prize details will be announced by the organising committee. As a class prototype, this site does not list real prizes or sponsors.</p>
          </div>
          <aside className="callout-info min-w-0">
            <h2>Ready to join?</h2>
            <p>Each team member registers individually, then joins the team with a shared team code.</p>
            <p><Link href="/register/" className="btn btn-primary">Register your team</Link></p>
            <p className="mt-3 mb-0">Check the <Link href="/faq/">eligibility FAQ</Link> before registering.</p>
          </aside>
        </div>
      </section>
      <section className="bg-tint py-12" aria-labelledby="hfaq">
        <div className="container-x max-w-[75ch]">
          <h2 id="hfaq">Hackathon questions</h2>
          {faqs.map(([q, a]) => <details key={q} className="faq"><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </section>
      <CtaBand heading="Register your hackathon team" text={`Registration closes on ${FEST.regCloses} or when seats are full.`} href="/register/" label="Register now" />
    </>
  );
}
