export type Fact = { label: string; value: string; highlight?: boolean };

/** Key facts as a definition list – easy for students to scan and for crawlers to parse. */
export default function Facts({ items }: { items: Fact[] }) {
  return (
    <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3.5">
      {items.map((f) => (
        <div key={f.label} className="rounded-2xl border border-line bg-white px-4.5 py-4">
          <dt className="text-xs font-bold uppercase tracking-widest text-muted">{f.label}</dt>
          <dd className={`mt-1 font-bold ${f.highlight ? "text-teal-dark" : "text-ink"}`}>{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}
