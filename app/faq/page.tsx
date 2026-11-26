import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { CONTACT_EMAIL, FEST } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/faq/",
  title: "INNOVEX FAQ – Eligibility, Fees & Rules",
  description:
    "Answers on INNOVEX 2027 tech fest eligibility criteria, registration fees, 24-hour hackathon rules, outstation travel, stay and code of conduct.",
});

type FaqGroup = {
  id: string;
  heading: string;
  items: { q: string; a: string }[];
};

const faqGroups: FaqGroup[] = [
  {
    id: "eligibility",
    heading: "Eligibility",
    items: [
      {
        q: "Who can participate in INNOVEX 2027?",
        a: "Any student currently enrolled in a recognised undergraduate or postgraduate programme in India can participate. Both engineering and non-engineering students are welcome to join competitions, workshops and talks. You must carry a physical or official digital college ID card at check-in so volunteers can verify your enrolment.",
      },
      {
        q: "Can first-year students join the hackathon and coding contest?",
        a: "Yes, first-year students are welcome in every event at INNOVEX 2027. The Code Sprint includes a dedicated Beginner division for first- and second-year students, and the 24-hour hackathon offers an Open Innovation track suited to newcomers. Mentors are available throughout to help beginners scope small, working projects.",
      },
      {
        q: "Can students from other colleges participate?",
        a: "Yes, INNOVEX 2027 is an inter-college tech fest open to students from any college or university across India. Outstation participants follow the same registration steps as host-campus students and can also request shared campus accommodation during registration. Cross-college teams are allowed in both the hackathon and Project Expo.",
      },
      {
        q: "Are teams allowed to have members from different colleges or branches?",
        a: "Yes, inter-college and cross-department teams are allowed in the 24-hour hackathon and the Project Expo. Mixing different years and skill sets—such as frontend, backend and design—is encouraged. Each member must still register individually and link to the same team code before the team-change deadline.",
      },
      {
        q: "Can recent graduates or working professionals enter competitions?",
        a: "No, competitions such as the 24-hour hackathon, Code Sprint and Project Expo are restricted to currently enrolled college students. Alumni, faculty and industry guests are welcome to attend the student tech conference talks and Project Expo as visitors, provided they register for a visitor pass in advance.",
      },
      {
        q: "Can one student register for multiple events?",
        a: "Yes, you can select multiple events in a single registration as long as their timings do not clash. For example, you can attend a Day 1 morning workshop and still join the 24-hour hackathon at 6:00 PM. Check the schedule page carefully before picking overlapping Day 2 sessions.",
      },
    ],
  },
  {
    id: "fees",
    heading: "Registration & fees",
    items: [
      {
        q: "Is the 24-hour hackathon free to join?",
        a: "Yes, the 24-hour hackathon is completely free for all eligible college students. There is no registration fee, no team entry fee and no deposit required for the hackathon, Code Sprint, Project Expo or student tech conference talks. Only hands-on lab workshops carry a small material fee.",
      },
      {
        q: "Which events have a fee and how much do workshops cost?",
        a: `Only the four hands-on lab workshops charge a placeholder fee of ${FEST.workshopFee} per workshop. That fee covers printed lab handouts and workshop support for the 30-seat sessions. All competitions and conference talks are free, and no payment is collected on this class-prototype website.`,
      },
      {
        q: "When do registrations open and close?",
        a: `Online registration opens on ${FEST.regOpens} and closes on ${FEST.regCloses} (placeholder dates), or earlier if event capacities fill up. Team member edits for the hackathon remain open until ${FEST.teamChangesUntil}. Late walk-in entries are not guaranteed a seat, so register online before the deadline.`,
      },
      {
        q: "Can we change or add hackathon team members after registering?",
        a: `Yes, you can add, remove or swap team members until ${FEST.teamChangesUntil} using your team code. Every new teammate must complete their own individual registration first. After that deadline, team rosters are locked so check-in desks can prepare participant badges and seating allocations.`,
      },
      {
        q: "Is on-spot registration available at the venue?",
        a: "Limited on-spot registration may open only for conference talks if Main Auditorium seats remain available. Competitions—including the 24-hour hackathon, Code Sprint and 30-seat workshops—require prior online registration before the closing date so organisers can plan lab computers, food and mentor ratios.",
      },
    ],
  },
  {
    id: "hackathon",
    heading: "Hackathon",
    items: [
      {
        q: "Do we need to bring our own laptops and chargers?",
        a: "Yes, every hackathon and workshop participant must bring their own laptop and charger. Power strips and campus Wi-Fi are provided in the Hack Hall and workshop labs. Only the Code Sprint coding contest provides pre-configured desktop computers in Labs 3–5, where personal laptops are not permitted.",
      },
      {
        q: "Are food and overnight rest areas provided during the 24-hour hackathon?",
        a: "Yes, registered hackathon participants receive dinner on Day 1, breakfast and lunch on Day 2, and tea or water stations throughout the night. A quiet rest room near the Hack Hall is available for teams taking turns to sleep. Inform the committee if you have dietary restrictions.",
      },
      {
        q: "Can solo participants join the 24-hour hackathon?",
        a: "No, the hackathon requires teams of two to four members, so solo entries are not judged separately. However, solo students who register can ask volunteers at the Day 1 check-in desk to match them with another partial team. Alternatively, solo participants can enter the individual Code Sprint.",
      },
    ],
  },
  {
    id: "travel",
    heading: "Travel & stay",
    items: [
      {
        q: "Is accommodation available for outstation students?",
        a: "Yes, shared campus hostel rooms are available on request for outstation students from 11 to 14 February 2027 at a placeholder rate of ₹300 per night. Select the accommodation option during online registration or email the hospitality desk early, as rooms are allocated on a first-come basis.",
      },
      {
        q: "What documents must outstation participants carry?",
        a: "Outstation participants must carry their original college ID card, their INNOVEX registration QR pass and one government-issued photo ID such as an Aadhaar card, driving licence or passport. Hostel security requires a government photo ID for overnight campus stay, even for hackathon participants.",
      },
      {
        q: "Is parking available on campus for visitors?",
        a: "Yes, designated two-wheeler and car parking is available near the Main Gate on a first-come basis. Follow security directions upon entry and display your registration pass if asked. Because parking spots are limited during peak morning hours, public transport or carpooling is recommended.",
      },
    ],
  },
  {
    id: "conduct",
    heading: "Code of conduct",
    items: [
      {
        q: "What behaviour is expected at INNOVEX 2027?",
        a: "All participants, speakers, mentors and visitors must treat each other with respect and keep the campus safe and welcoming. Harassment, discrimination, vandalism or disruption of sessions leads to immediate removal from the fest. Report any concern to a volunteer at the Innovation Block desk or via email.",
      },
      {
        q: "What happens if a team plagiarises code or breaks contest rules?",
        a: "Submitting pre-built code as new hackathon work, copying another team's repository or using prohibited tools during the Code Sprint results in immediate disqualification. Judges check commit histories and ask technical questions during demos. Always credit open-source libraries clearly in your project README.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq/" }]} />
      <PageHero
        eyebrow="Frequently asked questions"
        title="INNOVEX FAQ: eligibility, fees and rules"
        intro="Direct answers on who can join INNOVEX 2027, what is free, how the 24-hour hackathon works, outstation stay and the fest code of conduct."
      />

      <section className="py-12">
        <div className="container-x max-w-[75ch]">
          <nav aria-label="FAQ sections" className="mb-8 flex flex-wrap gap-2.5">
            {faqGroups.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="rounded-full bg-tint px-4 py-1.5 font-semibold no-underline">
                {g.heading}
              </a>
            ))}
          </nav>

          {faqGroups.map((group) => (
            <div key={group.id} className="mb-10">
              <h2 id={group.id} className="scroll-mt-24">
                {group.heading}
              </h2>
              {group.items.map((item) => (
                <details key={item.q} className="faq">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          ))}

          <div className="callout-info">
            <p className="m-0">
              <strong>Still have a question?</strong> Email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or check the{" "}
              <Link href="/events/hackathon/">24-hour hackathon rules</Link> and{" "}
              <Link href="/venue/">venue &amp; travel page</Link>.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Eligible and ready to join?"
        text={`Registration closes on ${FEST.regCloses}. Competitions and talks are free.`}
        href="/register/"
        label="Register for INNOVEX 2027"
      />
    </>
  );
}
