type HeroProps = {
  content: {
    eyebrow: string;
    role: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    socials: readonly {
      label: string;
      href: string;
    }[];
    focusCard: {
      label: string;
      title: string;
      items: readonly string[];
    };
  };
};

export function Hero({ content }: HeroProps) {
  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8"
    >
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-full max-w-3xl -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="max-w-3xl">
        <p className="mb-5 text-sm font-semibold uppercase text-cyan-300">
          {content.eyebrow}
        </p>

        <p className="mb-4 inline-flex rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
          {content.role}
        </p>

        <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl">
          {content.title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          {content.description}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#about"
            className="rounded-md bg-cyan-300 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            {content.primaryCta}
          </a>
          <a
            href="#contact"
            className="rounded-md border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
          >
            {content.secondaryCta}
          </a>
        </div>

        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
          {content.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="transition hover:text-cyan-300"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <aside className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/30">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">
              {content.focusCard.label}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">
              {content.focusCard.title}
            </h2>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-cyan-300 text-sm font-bold text-slate-950">
            VT
          </div>
        </div>

        <div className="space-y-3">
          {content.focusCard.items.map((item, index) => (
            <div
              key={item}
              className="flex gap-3 rounded-md border border-white/10 bg-slate-950/60 p-4"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-cyan-300/10 text-xs font-semibold text-cyan-200">
                {index + 1}
              </span>
              <p className="text-sm leading-6 text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
