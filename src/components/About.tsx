type AboutProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: readonly string[];
  };
};

export function About({ content }: AboutProps) {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 lg:px-8"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-300">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            {content.title}
          </h2>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-cyan-950/20">
          <p className="text-base leading-8 text-slate-300">
            {content.description}
          </p>

          <div className="mt-8 grid gap-3">
            {content.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-md border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
