import Link from "next/link";
import Image from "next/image";
import Facts from "@/components/Facts";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { FEST } from "@/lib/site";
import { festEventLd, organizationLd, pageMetadata, websiteLd } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/",
  title: "INNOVEX 2027 – Inter-College Tech Fest | Class Prototype",
  description:
    "INNOVEX 2027 is a 3-day inter-college tech fest with a 24-hour hackathon, coding contest, workshops and student tech talks. Dates, venue and registration.",
});

const highlights = [
  { tag: "Flagship", tagClass: "bg-[#ffe6dc] text-[#9a3412]", title: "24-Hour Hackathon", text: "Teams of 2–4 build a working prototype on one of four problem tracks, with mentors on hand through the night.", meta: "Day 1–2 · Free · Teams of 2–4", href: "/events/hackathon/", link: "Hackathon rules and tracks →" },
  { tag: "Competition", tagClass: "bg-[#e4e5fa] text-[#3f42a3]", title: "Code Sprint", text: "A three-hour individual coding contest for college students, with beginner and advanced divisions.", meta: "Day 2 · Free · Individual", href: "/events/", link: "Browse all tech fest events →" },
  { tag: "Learn", tagClass: "bg-[#d7f5f1] text-teal-dark", title: "Workshops & tech talks", text: "Hands-on sessions on web development, cloud basics and AI tools, plus a student tech conference track.", meta: `Day 1–3 · Some workshops ${FEST.workshopFee}`, href: "/speakers/", link: "Speakers and workshops →" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationLd} />
      <JsonLd data={websiteLd} />
      <JsonLd data={festEventLd} />

      <section className="bg-indigo pt-14 pb-16 text-white">
        <div className="container-x grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
          <div className="min-w-0">
            <p className="eyebrow">Inter-college tech fest · 12–14 Feb 2027</p>
            <h1 className="mb-4 text-4xl font-bold leading-[1.12] md:text-5xl">INNOVEX 2027 — Inter-College Tech Fest &amp; Student Tech Conference</h1>
            <p className="max-w-[46ch] text-lg text-[#d9dcef]">
              Three days of a 24-hour hackathon, a coding contest, hands-on workshops and student tech talks. Open to
              undergraduate and postgraduate students from any college in India.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/register/" className="btn btn-primary">Register for INNOVEX 2027</Link>
              <Link href="/schedule/" className="btn btn-ghost">See the full schedule</Link>
            </div>
          </div>
          <Image
            src="/hero-network.svg"
            width={480}
            height={360}
            priority
            className="h-auto w-full max-w-[420px] min-w-0 md:max-w-full"
            alt="Illustration of connected nodes and a terminal window showing build, ship and 24h commands, representing the INNOVEX hackathon"
          />
        </div>
      </section>

      <section className="bg-tint py-12" aria-labelledby="facts-h">
        <div className="container-x">
          <h2 id="facts-h">INNOVEX 2027 at a glance</h2>
          <Facts
            items={[
              { label: "Dates", value: `${FEST.datesLabel} (placeholder)` },
              { label: "Venue", value: FEST.venue },
              { label: "Who can join", value: "UG & PG students, any college" },
              { label: "Registration", value: `Open · closes ${FEST.regCloses}`, highlight: true },
              { label: "Entry fee", value: "Free (hackathon & talks)" },
              { label: "Organiser", value: "INNOVEX Organising Committee (prototype)" },
            ]}
          />
        </div>
      </section>

      <section className="py-12" aria-labelledby="whats-on">
        <div className="container-x">
          <h2 id="whats-on">What happens at this tech fest</h2>
          <p className="mt-0 max-w-[70ch] text-muted">
            INNOVEX brings students from different colleges together to build, compete and learn. Every activity has its
            own page with rules, timings and eligibility, so you never have to search through posters or group chats.
          </p>
          <div className="mt-5 grid gap-4.5 md:grid-cols-3">
            {highlights.map((h) => (
              <article key={h.title} className="card">
                <span className={`tag ${h.tagClass}`}>{h.tag}</span>
                <h3 className="m-0">{h.title}</h3>
                <p className="m-0 text-muted">{h.text}</p>
                <p className="m-0 text-sm font-semibold">{h.meta}</p>
                <Link href={h.href} className="mt-auto pt-2.5 font-bold">{h.link}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-tint py-12" aria-labelledby="schedule-h">
        <div className="container-x grid items-start gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="min-w-0">
            <h2 id="schedule-h">Three-day schedule snapshot</h2>
            <div className="table-wrap bg-white">
              <table>
                <caption>INNOVEX 2027 day-by-day overview (placeholder timings)</caption>
                <thead><tr><th scope="col">Day</th><th scope="col">Highlights</th></tr></thead>
                <tbody>
                  <tr><td>Fri 12 Feb</td><td>Opening session, workshops, hackathon kick-off at 6:00 PM</td></tr>
                  <tr><td>Sat 13 Feb</td><td>Hackathon ends 6:00 PM, Code Sprint, student tech talks, project expo</td></tr>
                  <tr><td>Sun 14 Feb</td><td>Hackathon finals and demos, workshops, results and closing</td></tr>
                </tbody>
              </table>
            </div>
            <p><Link href="/schedule/">See the full schedule with session timings</Link></p>
          </div>
          <div className="prose-x min-w-0">
            <h2>Why attend INNOVEX?</h2>
            <ul>
              <li><strong>Build something real</strong> in 24 hours with a team and a mentor.</li>
              <li><strong>Meet students from other colleges</strong> who share your interests.</li>
              <li><strong>Learn by doing</strong> in small-group workshops.</li>
              <li><strong>Find every detail in one place</strong>: dates, rules, venue and registration.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12" aria-labelledby="faq-h">
        <div className="container-x max-w-[75ch]">
          <h2 id="faq-h">Quick answers</h2>
          <details className="faq"><summary>Who can participate in INNOVEX 2027?</summary><p>Any student currently enrolled in an undergraduate or postgraduate programme in India can take part. First-year students are welcome. Bring a valid college ID card.</p></details>
          <details className="faq"><summary>Is the hackathon free to join?</summary><p>Yes. The 24-hour hackathon, the Code Sprint and the tech talks are free. Only some hands-on workshops have a small fee to cover materials.</p></details>
          <details className="faq"><summary>When does registration close?</summary><p>Online registration closes on {FEST.regCloses} or when seats run out, whichever comes first. See the <Link href="/register/">registration page</Link> for each step.</p></details>
          <p>More questions? Read the <Link href="/faq/">full FAQ on eligibility, fees and rules</Link>.</p>
        </div>
      </section>

      <CtaBand heading="Ready to build?" text="Registration takes about five minutes. Team details can be added later." href="/register/" label="Register now" />
    </>
  );
}
