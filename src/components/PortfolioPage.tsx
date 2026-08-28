"use client";

import { useState } from "react";
import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import {
  Language,
  languages,
  portfolioContent,
} from "@/data/portfolio";

export function PortfolioPage() {
  const [language, setLanguage] = useState<Language>("en");
  const content = portfolioContent[language];

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <Navbar
        content={content.nav}
        currentLanguage={language}
        languages={languages}
        onLanguageChange={setLanguage}
      />
      <main>
        <Hero content={content.hero} />
        <About content={content.about} />
      </main>
    </div>
  );
}
