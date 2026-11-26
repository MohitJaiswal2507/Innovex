import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { CONTACT_EMAIL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/archive/",
  title: "Past Editions & Results – INNOVEX",
  description:
    "INNOVEX 2027 is the first edition of this inter-college tech fest. Past editions, results publishing plan, consent policy and how to request corrections.",
});

const resultsRows = [
  "24-Hour Hackathon — Campus Life",
  "24-Hour Hackathon — Sustainability",
  "24-Hour Hackathon — Health & Wellbeing",
  "24-Hour Hackathon — Open Innovation",
  "Code Sprint — Beginner Division",
  "Code Sprint — Open Division",
  "Project Expo — People's Choice",
];

export default function ArchivePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Past Editions", path: "/archive/" }]} />
      <PageHero
        eyebrow="Archive & results"
        title="INNOVEX past editions and results"
        intro="INNOVEX 2027 is the first edition of this tech fest. After 14 February 2027, verified results and winning project links will be published here."
      />

      <section className="py-12">
        <div className="container-x prose-x max-w-[75ch]">
          <h2>First edition: no past winners yet</h2>
          <p>
            INNOVEX 2027 is the inaugural edition of the fest (and a class prototype for the CSET489 SEO course). There
            are no previous editions, past winners or historical statistics to list. Rather than inventing placeholder
            winners or fake metrics, this archive starts with a clear record of what will be published once the 2027
            edition concludes.
          </p>

          <h2>What this page will hold after 14 Feb 2027</h2>
          <p>
            Following the closing session on Sunday, 14 February 2027, the organising committee will publish the final
            standings for the <Link href="/events/hackathon/">24-hour hackathon</Link>, the{" "}
            <Link href="/events/#coding-competition">Code Sprint</Link> and the Project Expo. Where teams opt in, each
            entry will link to the team&apos;s public repository or demo summary so future participants can study past
            projects.
          </p>

          <div className="table-wrap">
            <table>
              <caption>INNOVEX 2027 results table (to be updated after 14 Feb 2027)</caption>
              <thead>
                <tr>
                  <th scope="col">Track / competition</th>
                  <th scope="col">First place</th>
                  <th scope="col">Runner-up</th>
                  <th scope="col">Repository / notes</th>
                </tr>
              </thead>
              <tbody>
                {resultsRows.map((track) => (
                  <tr key={track}>
                    <td>To be published after 14 Feb 2027</td>
                    <td>To be published after 14 Feb 2027</td>
                    <td>To be published after 14 Feb 2027</td>
                    <td>To be published after 14 Feb 2027</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Consent policy for names and photos</h2>
          <p>
            Participant names, college names and event photographs are only published on this archive with explicit
            written consent collected during check-in or after results are announced. Teams may choose to list only a
            project title and college name if any member prefers not to have their personal name indexed by search
            engines.
          </p>

          <h2>How to request corrections or removals</h2>
          <p>
            If your team name, project link or credit is misspelled, or if you want a name or photo removed from the
            archive at any time, email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with the subject line{" "}
            <code>Archive Correction – INNOVEX</code>. Requests are reviewed and updated within seven days.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Be part of the first edition"
        text="View the full event list or register for INNOVEX 2027."
        href="/register/"
        label="Register now"
      />
    </>
  );
}
