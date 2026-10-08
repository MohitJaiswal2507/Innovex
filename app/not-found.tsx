import Link from "next/link";

export const metadata = { title: "Page not found – INNOVEX 2027", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="py-16">
      <div className="container-x max-w-[75ch]">
        <h1 className="mb-4 text-3xl font-bold text-indigo">Page not found</h1>
        <p>The page you were looking for does not exist or has moved. Try one of these:</p>
        <ul className="list-disc pl-6">
          <li><Link href="/">INNOVEX 2027 home</Link></li>
          <li><Link href="/events/">Events list</Link></li>
          <li><Link href="/schedule/">Schedule</Link></li>
          <li><Link href="/register/">Registration</Link></li>
        </ul>
      </div>
    </section>
  );
}
