export default function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="bg-tint pt-7 pb-9">
      <div className="container-x">
        <p className="eyebrow !text-orange-dark">{eyebrow}</p>
        <h1 className="my-2 text-3xl font-bold leading-tight text-indigo md:text-[2.6rem]">{title}</h1>
        <p className="m-0 max-w-[70ch] text-lg text-muted">{intro}</p>
      </div>
    </section>
  );
}
