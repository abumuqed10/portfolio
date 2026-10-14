import { useState } from "react";
import { useLang } from "../i18n/LanguageContext.jsx";
import { Gem, MenuIcon } from "./icons.jsx";

const DESKTOP = [["about", "navAbout"], ["projects", "navProjects"], ["skills", "navSkills"], ["experience", "navExperience"], ["contact", "navContact"]];
const MOBILE = [...DESKTOP.slice(0, 4), ["education", "navEducation"], ["certifications", "navCerts"], ["languages", "navLanguages"], ["contact", "navContact"]];

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 border-b border-line bg-cream/90 backdrop-blur-md backdrop-saturate-125">
      <div className="wrap flex min-h-[72px] items-center justify-between gap-6">
        <a href="#top" aria-label={t.fullName} className="inline-flex items-center gap-2.5 font-display text-xl font-bold text-ink no-underline ar:text-2xl">
          <Gem className="h-3 w-3 flex-none" />
          <span>{t.brand}</span>
        </a>

        <ul className="hidden items-center gap-[clamp(16px,2.4vw,34px)] min-[961px]:flex">
          {DESKTOP.map(([id, key]) => (
            <li key={id}>
              <a href={`#${id}`} className="border-b border-transparent py-1.5 text-[.9375rem] font-medium text-muted no-underline transition-colors hover:border-gold hover:text-ink ar:text-base">
                {t[key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div role="group" aria-label={t.langGroup} className="inline-flex gap-0.5 border border-sand bg-cream p-[3px]">
            {[["ar", "ع", "العربية"], ["en", "EN", "English"]].map(([code, label, name]) => (
              <button
                key={code}
                type="button"
                lang={code}
                aria-label={name}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
                style={{ fontFamily: code === "ar" ? '"IBM Plex Sans Arabic", sans-serif' : '"IBM Plex Sans", sans-serif' }}
                className={`min-h-9 min-w-11 cursor-pointer px-2.5 font-semibold transition-colors ${code === "ar" ? "text-[1.0625rem]" : "text-sm"} ${lang === code ? "bg-primary text-cream" : "text-muted hover:text-ink"}`}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={t.menu}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center border border-sand bg-cream text-ink min-[961px]:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label={t.mainNav} hidden={!open} className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-line bg-cream">
        <ul className="wrap pt-2 pb-4">
          {MOBILE.map(([id, key]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className="block border-b border-line py-[13px] font-medium no-underline">
                {t[key]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
