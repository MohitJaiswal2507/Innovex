// Single source of truth for INNOVEX 2027 facts.
// Every page reads from here, so a date or fee changes in one place only.
// All values are PLACEHOLDERS for a fictional class-prototype event.

export const SITE_URL = "https://innovexfest.tech"; // proposed domain – replace after registering
export const SITE_NAME = "INNOVEX 2027";
export const ORG_NAME = "INNOVEX Organising Committee (Class Prototype)";
export const CONTACT_EMAIL = "team@innovexfest.tech";

export const FEST = {
  datesLabel: "12–14 February 2027",
  start: "2027-02-12T09:00:00+05:30",
  end: "2027-02-14T18:00:00+05:30",
  venue: "[University Name] Main Campus, Innovation Block",
  regOpens: "1 Nov 2026",
  regCloses: "25 Jan 2027",
  teamChangesUntil: "5 Feb 2027",
  workshopFee: "₹200",
};

export const NAV = [
  { href: "/about/", label: "About" },
  { href: "/events/", label: "Events" },
  { href: "/schedule/", label: "Schedule" },
  { href: "/speakers/", label: "Speakers & Workshops" },
  { href: "/venue/", label: "Venue" },
];

export const FOOTER_LINKS = {
  explore: [
    { href: "/events/hackathon/", label: "24-Hour Hackathon" },
    { href: "/schedule/", label: "Schedule" },
    { href: "/register/", label: "Registration" },
    { href: "/faq/", label: "FAQ" },
  ],
  more: [
    { href: "/archive/", label: "Past editions" },
    { href: "/blog/", label: "Blog" },
    { href: "/venue/", label: "Venue & contact" },
    { href: "/about/#prototype", label: "Prototype disclaimer" },
  ],
};

export type Session = { time: string; title: string; where: string; href?: string };

export const SCHEDULE: { id: string; heading: string; sessions: Session[] }[] = [
  {
    id: "day-1",
    heading: "Day 1 — Friday, 12 February 2027",
    sessions: [
      { time: "9:00 AM", title: "Registration desk opens, ID check and welcome kits", where: "Innovation Block lobby" },
      { time: "10:00 AM", title: "Opening session: about INNOVEX and fest rules", where: "Main Auditorium" },
      { time: "11:30 AM", title: "Workshop: Build and deploy your first website", where: "Lab 1" },
      { time: "11:30 AM", title: "Workshop: Git and GitHub for teams", where: "Lab 2" },
      { time: "2:00 PM", title: "Workshop: Cloud basics for student projects", where: "Lab 1" },
      { time: "4:00 PM", title: "Hackathon check-in", where: "Innovation Block lobby" },
      { time: "6:00 PM", title: "24-hour hackathon starts", where: "Hack Hall", href: "/events/hackathon/" },
    ],
  },
  {
    id: "day-2",
    heading: "Day 2 — Saturday, 13 February 2027",
    sessions: [
      { time: "8:00 AM", title: "Hackathon mentor round 2", where: "Hack Hall" },
      { time: "10:00 AM", title: "Code Sprint coding contest (3 hours)", where: "Computer Labs 3–5" },
      { time: "10:30 AM", title: "Student tech conference: project talks", where: "Main Auditorium" },
      { time: "2:00 PM", title: "Project Expo opens to visitors", where: "Atrium" },
      { time: "3:30 PM", title: "Student tech conference: internships and careers", where: "Main Auditorium" },
      { time: "6:00 PM", title: "Hackathon code freeze and submissions", where: "Hack Hall" },
      { time: "7:00 PM", title: "Code Sprint results", where: "Main Auditorium" },
    ],
  },
  {
    id: "day-3",
    heading: "Day 3 — Sunday, 14 February 2027",
    sessions: [
      { time: "10:00 AM", title: "Hackathon finals: top 10 team demos", where: "Main Auditorium" },
      { time: "11:00 AM", title: "Workshop: AI tools for developers", where: "Lab 1" },
      { time: "1:30 PM", title: "Project Expo people's choice voting closes", where: "Atrium" },
      { time: "4:00 PM", title: "Closing session and results", where: "Main Auditorium" },
      { time: "5:30 PM", title: "Fest ends", where: "—" },
    ],
  },
];

// Pages that are finished and indexable. sitemap.ts reads this list,
// so a page only enters the sitemap when it is added here.
export const INDEXABLE_ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/events/", priority: 0.8, changeFrequency: "weekly" },
  { path: "/events/hackathon/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/schedule/", priority: 0.8, changeFrequency: "weekly" },
  { path: "/register/", priority: 0.9, changeFrequency: "weekly" },
];
