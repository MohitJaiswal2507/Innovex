import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import Facts from "@/components/Facts";
import CtaBand from "@/components/CtaBand";
import { FEST } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/about/",
  title: "About INNOVEX – Inter-College Tech Fest & Conference",
  description: "What INNOVEX is, who organises it, who it is for and how the three-day inter-college tech fest and student tech conference is run.",
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about/" }]} />
      <PageHero
        eyebrow="About the fest"
        title="About INNOVEX: an inter-college tech fest built around students"
        intro="INNOVEX is a three-day inter-college tech fest and student tech conference. It is designed so that every question a participant, organiser or visitor has can be answered on one clear page."
      />
      <section className="py-12">
        <div className="container-x grid items-start gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="prose-x min-w-0">
            <h2>What is INNOVEX?</h2>
            <p>INNOVEX is a technical festival where students from different colleges come together to build projects, compete in coding challenges, attend workshops and hear talks about technology careers. It is planned as an annual event, and the 2027 edition runs from 12 to 14 February 2027 (placeholder dates).</p>
            <p>Unlike many college tech fests that share details only through posters and messaging groups, INNOVEX publishes its schedule, rules, eligibility and registration steps on this website in plain text. Students can find what they need through search, on any phone, without downloading a PDF.</p>
            <h2>Goals of the 2027 edition</h2>
            <ul>
              <li><strong>Hands-on learning:</strong> every participant leaves having built or tried something new.</li>
              <li><strong>Open to all colleges:</strong> registration is not limited to the host campus.</li>
              <li><strong>Beginner-friendly:</strong> first-year students get a dedicated track in the hackathon and a beginner division in the Code Sprint.</li>
              <li><strong>Clear information:</strong> one source of truth for dates, venue, rules and results.</li>
            </ul>
            <h2>Who organises INNOVEX?</h2>
            <p>The fest is run by the INNOVEX Organising Committee, a student team at [University Name] supported by faculty coordinators from the department of computer science. The committee handles events, registrations, hospitality and outreach. You can reach the team through the <Link href="/venue/">venue and contact page</Link>.</p>
            <h2>Who is it for?</h2>
            <p><strong>Participants</strong> who want to compete in the <Link href="/events/hackathon/">24-hour hackathon</Link> or the Code Sprint. <strong>Visitors</strong> who want to attend talks, workshops and the project expo without competing. <strong>Faculty and parents</strong> who want to know exactly when and where the fest happens.</p>
          </div>
          <aside className="callout-info min-w-0" aria-labelledby="fmt">
            <h2 id="fmt">Fest format</h2>
            <Facts items={[
              { label: "Edition", value: "INNOVEX 2027" },
              { label: "Duration", value: `3 days, ${FEST.datesLabel}` },
              { label: "Events", value: "Hackathon, Code Sprint, workshops, talks, expo" },
              { label: "Format", value: "In person, on campus" },
            ]} />
            <p className="mt-4"><Link href="/events/" className="btn btn-dark">See all events</Link></p>
          </aside>
        </div>
      </section>
      <section id="prototype" className="bg-tint py-12" aria-labelledby="proto-h">
        <div className="container-x max-w-[75ch]">
          <h2 id="proto-h">Class prototype disclaimer</h2>
          <div className="callout">
            <p><strong>INNOVEX 2027 is not a real event.</strong> This website was built for the CSET489 Search Engine Optimization course mini-project (project seed P2: &quot;SEO Launch Plan for a Campus Event or Student Club&quot;).</p>
            <p className="m-0">All dates, venues, fees, events and schedules are placeholder data used to demonstrate information architecture, on-page SEO and structured data. No real speakers, sponsors, prizes or partners are named or implied. Please do not travel to or pay for this event.</p>
          </div>
        </div>
      </section>
      <CtaBand heading="Explore the events" text="Hackathon, Code Sprint, workshops and talks: rules and timings for each." href="/events/" label="Browse events" />
    </>
  );
}
