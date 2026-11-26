import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import Facts from "@/components/Facts";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { CONTACT_EMAIL, FEST } from "@/lib/site";
import { organizationContactLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/venue/",
  title: "Venue, Travel & Contact – INNOVEX 2027",
  description:
    "INNOVEX 2027 venue, campus map, how to reach [University Name] Main Campus, outstation student accommodation, accessibility and committee contact.",
});

const contacts = [
  {
    role: "Registrations & passes",
    notes: "Questions about registration status, team codes, QR passes or workshop seat availability.",
  },
  {
    role: "Hackathon & competitions",
    notes: "Questions about hackathon tracks, Code Sprint divisions, hardware needs or project expo tables.",
  },
  {
    role: "Hospitality & accessibility",
    notes: "Outstation student accommodation requests, late check-in or wheelchair and quiet-room arrangements.",
  },
];

export default function VenuePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Venue & Contact", path: "/venue/" }]} />
      <JsonLd data={organizationContactLd} />
      <PageHero
        eyebrow="Venue & contact"
        title="INNOVEX 2027 venue, travel and contact details"
        intro="Everything you need to reach [University Name] Main Campus, find your way between halls and labs, request outstation stay or contact the organising committee."
      />

      <section className="bg-tint pb-10">
        <div className="container-x">
          <Facts
            items={[
              { label: "Venue", value: FEST.venue },
              { label: "Dates", value: `${FEST.datesLabel} (placeholder)` },
              { label: "Check-in desk", value: "Innovation Block lobby, 9:00 AM" },
              { label: "Outstation stay", value: "₹300/night (placeholder)" },
            ]}
          />
        </div>
      </section>

      <section className="py-12" aria-labelledby="map-h">
        <div className="container-x grid items-start gap-8 md:grid-cols-[1.3fr_1fr]">
          <div className="min-w-0">
            <h2 id="map-h">Schematic campus map</h2>
            <div className="overflow-hidden rounded-2xl border border-line bg-tint p-3">
              <Image
                src="/campus-map.svg"
                width={720}
                height={420}
                className="h-auto w-full"
                alt="Schematic campus map showing Main Gate, Parking, Atrium, Labs 1 to 5, Main Auditorium and Innovation Block"
              />
            </div>
          </div>
          <div className="prose-x min-w-0">
            <h3>Walking route from Main Gate</h3>
            <p>
              Enter through the <strong>Main Gate</strong> and show your college ID and registration pass at security.
              Visitor <strong>Parking</strong> is on the right just past the gate.
            </p>
            <p>
              Walk straight along the central walkway for about three minutes to reach the <strong>Atrium</strong> (home
              to the Day 2 Project Expo). From the Atrium, <strong>Innovation Block</strong> — where check-in and the
              24-hour Hack Hall are located — is directly ahead.
            </p>
            <p>
              <strong>Labs 1–5</strong> (for workshops and the Code Sprint) are on the left wing off the central
              walkway, and the <strong>Main Auditorium</strong> (for opening, talks and finals) is on the right wing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-tint py-12" aria-labelledby="reach-h">
        <div className="container-x grid items-start gap-8 md:grid-cols-2">
          <div className="prose-x min-w-0">
            <h2 id="reach-h">How to reach the campus</h2>
            <p>
              Because INNOVEX 2027 is a class-prototype site, route distances below use placeholders instead of invented
              bus numbers or train timings:
            </p>
            <ul>
              <li>
                <strong>By train:</strong> arrive at <code>[nearest railway station]</code> (approx.{" "}
                <code>[distance]</code> km from campus). Auto-rickshaws and cabs run directly to the Main Gate.
              </li>
              <li>
                <strong>By metro or city bus:</strong> get off at <code>[nearest metro / bus stop]</code>, a short
                walk or e-rickshaw ride from the Main Gate.
              </li>
              <li>
                <strong>By road:</strong> campus entry is via <code>[main highway / campus road]</code>. Two-wheeler
                and car parking is available near the Main Gate on a first-come basis.
              </li>
            </ul>
          </div>
          <div className="prose-x min-w-0">
            <h2>Accommodation for outstation students</h2>
            <p>
              Outstation students travelling from outside <code>[City]</code> can request shared hostel accommodation on
              campus for 11–14 February 2027 at a placeholder fee of <strong>₹300 per night</strong> (excluding meals).
            </p>
            <p>
              Request accommodation when filling out the <Link href="/register/">registration form</Link>, or email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> after registering. Carry a valid college ID card
              and a government photo ID for hostel check-in.
            </p>
            <h2>Accessibility</h2>
            <p>
              Innovation Block, the Main Auditorium, the Atrium and Labs 1–5 have step-free ramp or lift access and
              accessible restrooms. A quiet rest room is reserved near the Hack Hall during the 24-hour hackathon. If
              you need seating support or sign-language assistance, write to us at least seven days before the fest.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12" aria-labelledby="contact-h">
        <div className="container-x">
          <h2 id="contact-h">Contact the organising committee</h2>
          <p className="mt-0 max-w-[70ch] text-muted">
            All enquiries are handled by role via{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. As a class prototype, no personal names or phone
            numbers are published.
          </p>
          <div className="mt-5 grid gap-4.5 md:grid-cols-3">
            {contacts.map((c) => (
              <article key={c.role} className="card">
                <span className="tag">Committee desk</span>
                <h3 className="m-0">{c.role}</h3>
                <p className="m-0 text-muted">{c.notes}</p>
                <p className="mt-auto mb-0 pt-2 text-sm font-semibold">
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Plan your visit and register"
        text="Check the day-wise schedule or complete your registration in five minutes."
        href="/register/"
        label="Register for INNOVEX 2027"
      />
    </>
  );
}
