import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import Facts from "@/components/Facts";
import RegisterForm from "@/components/RegisterForm";
import { FEST } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/register/",
  title: "Register for INNOVEX 2027 – Fees, Deadlines, Steps",
  description: "How to register for INNOVEX 2027: step-by-step tech fest registration, fees, deadlines and 24-hour hackathon team registration. Closes 25 January 2027.",
});

const steps = [
  <><strong>Check eligibility.</strong> You must be a current UG or PG student at any college in India. See the <Link href="/faq/">eligibility FAQ</Link>.</>,
  <><strong>Fill in the form.</strong> Name, college, year, email and the events you want to join.</>,
  <><strong>Create or join a team</strong> (hackathon only). The first member creates a team code and shares it with teammates.</>,
  <><strong>Pay for workshops</strong>, if you chose any. Competitions and talks are free.</>,
  <><strong>Get your confirmation email</strong> with a QR pass. Bring it and your college ID to check-in.</>,
];
const fees = [
  ["24-hour hackathon", "Free", "Teams of 2–4", "/events/hackathon/"],
  ["Code Sprint", "Free", "Individual"],
  ["Project Expo", "Free", "1–4 members"],
  ["Student tech conference", "Free", "Seats on first-come basis"],
  ["Each hands-on workshop", FEST.workshopFee, "Covers materials; laptop required"],
];

export default function RegisterPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Register", path: "/register/" }]} />
      <PageHero eyebrow="Registration" title="Register for INNOVEX 2027: fees, deadlines and steps" intro="Tech fest registration is open. One registration covers every event you want to join. It takes about five minutes, and team details can be added later." />
      <section className="bg-tint pb-10">
        <div className="container-x">
          <Facts items={[
            { label: "Status", value: "Open", highlight: true },
            { label: "Registration opens", value: FEST.regOpens },
            { label: "Registration closes", value: FEST.regCloses },
            { label: "Team changes until", value: FEST.teamChangesUntil },
          ]} />
        </div>
      </section>
      <section className="py-12">
        <div className="container-x grid items-start gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="prose-x min-w-0">
            <h2>How to register for the tech fest</h2>
            <ol className="grid list-none gap-3.5 p-0">
              {steps.map((s, i) => (
                <li key={i} className="relative rounded-2xl border border-line bg-white py-4 pr-4.5 pl-16">
                  <span aria-hidden="true" className="absolute top-4 left-4.5 grid size-8 place-items-center rounded-full bg-orange font-extrabold text-ink">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <h2>Fees</h2>
            <div className="table-wrap">
              <table>
                <caption>INNOVEX 2027 registration fees (placeholder)</caption>
                <thead><tr><th scope="col">Item</th><th scope="col">Fee</th><th scope="col">Notes</th></tr></thead>
                <tbody>{fees.map(([item, fee, note, href]) => <tr key={item}><td>{href ? <Link href={href}>{item}</Link> : item}</td><td>{fee}</td><td>{note}</td></tr>)}</tbody>
              </table>
            </div>
            <h2>24-hour hackathon registration</h2>
            <p>Every hackathon team member registers separately and selects &quot;24-Hour Hackathon&quot; in the form. The first member creates the team; the others enter the team code. Read the <Link href="/events/hackathon/">hackathon rules and tracks</Link> before you register.</p>
            <h2>After you register</h2>
            <ul>
              <li>You receive a confirmation email within 24 hours.</li>
              <li>Schedule updates are posted on the <Link href="/schedule/">schedule page</Link> first.</li>
              <li>Outstation students can check travel and stay options on the <Link href="/venue/">venue page</Link>.</li>
            </ul>
          </div>
          <RegisterForm />
        </div>
      </section>
    </>
  );
}
