import Link from "next/link";

export default function CtaBand({ heading, text, href, label }: { heading: string; text: string; href: string; label: string }) {
  return (
    <section className="py-12">
      <div className="container-x">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-indigo p-7 text-white">
          <div>
            <h2 className="mb-1 text-white">{heading}</h2>
            <p className="m-0 text-[#d9dcef]">{text}</p>
          </div>
          <Link href={href} className="btn btn-primary">{label}</Link>
        </div>
      </div>
    </section>
  );
}
