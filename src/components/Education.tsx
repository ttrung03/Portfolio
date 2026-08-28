type EducationProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly {
      school: string;
      degree: string;
      period: string;
      details: readonly string[];
    }[];
  };
};

export function Education({ content }: EducationProps) {
  return (
    <section
      id="education"
      className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 lg:px-8"
    >
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-cyan-300">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            {content.description}
          </p>
        </div>

        <div className="space-y-4">
          {content.items.map((item) => (
            <article
              key={`${item.school}-${item.degree}`}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.school}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-cyan-200">
                    {item.degree}
                  </p>
                </div>
                <p className="rounded-md border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-300">
                  {item.period}
                </p>
              </div>

              <ul className="mt-6 space-y-3">
                {item.details.map((detail) => (
                  <li
                    key={detail}
                    className="border-l border-cyan-300/40 pl-4 text-sm leading-6 text-slate-300"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
