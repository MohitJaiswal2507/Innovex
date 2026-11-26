import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { POSTS } from "@/lib/posts";
import { articleLd, pageMetadata } from "@/lib/seo";
import { FEST, ORG_NAME } from "@/lib/site";

const post = POSTS[1];

export const metadata = pageMetadata({
  path: post.path,
  title: post.title,
  description: post.description,
  type: "article",
});

const eventTypes = [
  ["Hackathon", "Teams of 2–4", "24 hours", "Build a working software or hardware prototype from scratch"],
  ["Coding contest", "Individual", "2–3 hours", "Solve algorithmic problems on an online judge by division"],
  ["Workshops", "Individual", "90–120 mins", "Follow a mentor step-by-step on your own laptop"],
  ["Tech talks", "Open audience", "15–45 mins", "Listen to students and engineers share projects and career lessons"],
  ["Project expo", "1–4 members", "Half day", "Demonstrate an already-built project at a booth to visitors"],
];

const faqs = [
  [
    "Do first-year students actually win anything or learn enough at a tech fest?",
    "Yes. Most fests include beginner divisions in coding contests and mentorship in hackathons. Even without winning a prize, you leave with a working project, new friends and a clearer idea of what skills to learn next.",
  ],
  [
    "What if I only know basic C or Python from my first semester?",
    "That is enough to join the Beginner division of Code Sprint, attend hands-on workshops and contribute to a hackathon team. You can handle documentation, testing, simple scripts or UI layout while learning from teammates.",
  ],
  [
    "Should I attend alone if none of my classmates are going?",
    "Yes, go anyway. Workshops, talks and the project expo are easy to attend solo, and organisers often help solo hackathon registrants form teams at check-in.",
  ],
];

export default function FirstYearGuidePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: "First-Year Guide", path: post.path },
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
              A first-year student&apos;s guide to college tech fests
            </h1>
            <p className="mt-3 mb-4 text-sm text-muted">
              By {ORG_NAME} · Published <time dateTime={post.datePublished}>{post.dateLabel}</time> · {post.readingTime}
            </p>
            <p className="rounded-2xl border border-line bg-tint p-5 text-lg leading-relaxed text-ink">
              A college tech fest is a two- or three-day campus event combining coding contests, hackathons, workshops,
              student talks and project expos. First-year students do not need advanced experience to attend: pick one
              workshop, try a beginner coding division and explore the expo to learn how campus tech communities work.
            </p>
          </header>

          <figure className="mb-8 overflow-hidden rounded-2xl border border-line bg-tint p-3">
            <Image
              src={post.image}
              width={720}
              height={340}
              priority
              className="h-auto w-full"
              alt={post.imageAlt}
            />
            <figcaption className="mt-2 text-center text-sm text-muted">
              Four low-pressure ways for first-year students to get started at a campus tech fest.
            </figcaption>
          </figure>

          <div className="prose-x">
            <h2>What happens at a college tech fest?</h2>
            <p>
              If you have never attended one, a tech fest can sound intimidating. In practice, it is simply a multi-day
              gathering where students from different colleges build things, learn practical skills and meet peers who
              enjoy technology. You can learn more about how our own three-day format is structured on the{" "}
              <Link href="/about/">about INNOVEX page</Link>.
            </p>
            <p>
              Unlike regular lectures, tech fests focus on doing. You might spend Friday morning deploying your first
              web page in a lab, Saturday afternoon watching student demos at the expo and Sunday morning hearing how
              seniors landed their first internships.
            </p>

            <h2>Common event types at a tech fest</h2>
            <p>
              Most campus tech fests—including INNOVEX 2027—organise activities into five familiar formats. Knowing the
              difference helps you pick events that match your comfort level.
            </p>
            <div className="table-wrap">
              <table>
                <caption>Typical college tech fest events compared</caption>
                <thead>
                  <tr>
                    <th scope="col">Event type</th>
                    <th scope="col">Format</th>
                    <th scope="col">Typical duration</th>
                    <th scope="col">What you actually do</th>
                  </tr>
                </thead>
                <tbody>
                  {eventTypes.map(([type, format, dur, desc]) => (
                    <tr key={type}>
                      <td>{type}</td>
                      <td>{format}</td>
                      <td>{dur}</td>
                      <td>{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>How to choose your events as a first-year student</h2>
            <p>
              Do not try to register for every single session on the timetable. Pick two or three events that give you a
              good mix of learning and hands-on practice without burning out:
            </p>
            <ul>
              <li>
                <strong>Start with one workshop:</strong> workshops are guided by mentors, so you leave with something
                working on your laptop even if you arrived as a beginner.
              </li>
              <li>
                <strong>Try a beginner coding division:</strong> contests like our Code Sprint separate first- and
                second-year students from final-year competitors.
              </li>
              <li>
                <strong>Visit the project expo and talks:</strong> walking around project booths gives you concrete ideas
                for what you can build next semester.
              </li>
            </ul>
            <p>
              Browse the full <Link href="/events/">INNOVEX events list</Link> to compare timings, team sizes and entry
              rules before you decide.
            </p>

            <h2>What does a tech fest cost?</h2>
            <p>
              Many college tech fests keep competitions and talks free so any student can participate regardless of
              budget. At INNOVEX 2027, the 24-hour hackathon, Code Sprint, Project Expo and student tech conference are
              all free. Only small-group lab workshops charge a placeholder fee of {FEST.workshopFee} per session.
            </p>
            <p>
              If you are travelling from another city, budget for train or bus fare, meals outside hackathon hours and
              shared campus accommodation (₹300/night placeholder at INNOVEX). Always check the official registration
              page for exact fees before paying anything.
            </p>

            <h2>A simple one-week preparation plan</h2>
            <p>
              You do not need months of preparation for your first tech fest. Use the week before the event to handle
              basics so you can focus on learning once you arrive:
            </p>
            <ul>
              <li>
                <strong>Seven days before:</strong> complete online <Link href="/register/">tech fest registration</Link>{" "}
                and save your QR pass.
              </li>
              <li>
                <strong>Five days before:</strong> install a code editor, Python or Node.js, and create a GitHub
                account.
              </li>
              <li>
                <strong>Three days before:</strong> check the venue map, travel route and reporting times.
              </li>
              <li>
                <strong>One day before:</strong> charge your laptop, pack your college ID card, water bottle and
                notebook, and get a good night&apos;s sleep.
              </li>
            </ul>

            <h2>Etiquette and campus safety</h2>
            <p>
              Good etiquette makes a tech fest enjoyable for everyone. Arrive at labs ten minutes early, silence your
              phone during talks and ask questions respectfully during Q&amp;A. Keep lab desks clean and never unplug
              another team&apos;s laptop or hardware setup.
            </p>
            <p>
              Carry your college ID card at all times—campus security checks it at the gate and inside overnight halls.
              If you stay overnight for a hackathon, let a family member or hostel warden know your schedule and keep
              the emergency or hospitality desk email handy.
            </p>

            <h2>How to find teammates</h2>
            <p>
              Many first-year students skip hackathons because they think they lack a team. Start by asking classmates
              in your lab group, hostel wing or campus coding club. Look for people with complementary habits—one friend
              who likes writing code, one who enjoys design and one who is organised with presentations.
            </p>
            <p>
              If you are still short of a teammate, register anyway and talk to volunteers at the check-in desk on Day
              1. Once you have a team, read our{" "}
              <Link href="/blog/how-to-prepare-for-a-hackathon/">10-step hackathon preparation guide</Link> together.
            </p>

            <h2>What to do after the fest ends</h2>
            <p>
              The week after a tech fest is where most of the long-term value happens. Push your workshop exercises or
              hackathon prototype to GitHub with a short README describing what you built. Connect with teammates and
              seniors you met, and note one skill you noticed at the expo that you want to learn next month.
            </p>

            <h2>First-year tech fest FAQ</h2>
            {faqs.map(([q, a]) => (
              <details key={q} className="faq">
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </article>

      <CtaBand
        heading="Join your first college tech fest"
        text="Pick a workshop, try the beginner Code Sprint or team up for the hackathon."
        href="/register/"
        label="Register for INNOVEX 2027"
      />
    </>
  );
}
