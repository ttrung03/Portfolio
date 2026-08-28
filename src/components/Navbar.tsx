import { Language } from "@/data/portfolio";

type NavbarProps = {
  content: {
    brand: string;
    contactCta: string;
    items: readonly {
      label: string;
      href: string;
    }[];
  };
  currentLanguage: Language;
  languages: readonly {
    code: Language;
    label: string;
  }[];
  onLanguageChange: (language: Language) => void;
};

export function Navbar({
  content,
  currentLanguage,
  languages,
  onLanguageChange,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="text-sm font-semibold text-white">
          {content.brand}
        </a>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {content.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div
            className="flex rounded-md border border-white/10 bg-white/5 p-1"
            aria-label="Language switcher"
          >
            {languages.map((language) => {
              const isActive = language.code === currentLanguage;

              return (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => onLanguageChange(language.code)}
                  className={`rounded px-2.5 py-1 text-xs font-semibold transition ${
                    isActive
                      ? "bg-cyan-300 text-slate-950"
                      : "text-slate-300 hover:text-white"
                  }`}
                  aria-pressed={isActive}
                >
                  {language.label}
                </button>
              );
            })}
          </div>

          <a
            href="#contact"
            className="rounded-md border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-300/10"
          >
            {content.contactCta}
          </a>
        </div>
      </nav>
    </header>
  );
}
