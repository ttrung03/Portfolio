type SkillsProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    groups: readonly {
      title: string;
      items: readonly string[];
    }[];
  };
};

export function Skills({ content }: SkillsProps) {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl">
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

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {content.groups.map((group) => (
          <article
            key={group.title}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
          >
            <h3 className="text-base font-semibold text-white">
              {group.title}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-cyan-300/15 bg-cyan-300/10 px-3 py-1.5 text-sm text-cyan-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
