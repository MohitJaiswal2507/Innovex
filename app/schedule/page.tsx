import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { SCHEDULE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/schedule/",
  title: "INNOVEX 2027 Schedule – Day-wise Tech Fest Timings",
  description: "Day-wise INNOVEX 2027 tech fest schedule: workshop, hackathon, Code Sprint, talk and expo timings for 12–14 February 2027, with venues for each session.",
});

export default function SchedulePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Schedule", path: "/schedule/" }]} />
      <PageHero eyebrow="Schedule" title="INNOVEX 2027 tech fest schedule: day-wise timings" intro="Session-by-session timings for all three days, 12–14 February 2027. All times are in IST. Timings are placeholders for the class prototype and will be confirmed one week before the fest." />
      <section className="py-12">
        <div className="container-x">
          <nav aria-label="Jump to day" className="mb-6 flex flex-wrap gap-3">
            {SCHEDULE.map((d) => <a key={d.id} href={`#${d.id}`} className="rounded-full bg-tint px-4 py-1.5 font-semibold no-underline">{d.heading.split(" — ")[0]} · {d.heading.split(", ")[1]}</a>)}
          </nav>
          {SCHEDULE.map((day) => (
            <div key={day.id}>
              <h2 id={day.id} className="scroll-mt-24">{day.heading}</h2>
              <div className="table-wrap">
                <table>
                  <caption>{day.heading.split(" — ")[0]} sessions</caption>
                  <thead><tr><th scope="col">Time</th><th scope="col">Session</th><th scope="col">Where</th></tr></thead>
                  <tbody>
                    {day.sessions.map((s) => (
                      <tr key={s.time + s.title}><td>{s.time}</td><td>{s.href ? <Link href={s.href}>{s.title}</Link> : s.title}</td><td>{s.where}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          <div className="callout-info">
            <p className="m-0"><strong>Plan your visit:</strong> directions, parking and accommodation for outstation students are on the <Link href="/venue/">venue page</Link>. Talk and workshop details are on <Link href="/speakers/">speakers and workshops</Link>.</p>
          </div>
        </div>
      </section>
      <CtaBand heading="Save your seat" text="Workshops have limited seats. Register early to pick your sessions." href="/register/" label="Register now" />
    </>
  );
}
