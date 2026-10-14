import { createContext, useCallback, useContext, useLayoutEffect, useRef, useState } from "react";
import en from "../content/en.js";
import ar from "../content/ar.js";

const CONTENT = { en, ar };
const AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";
const LanguageContext = createContext(null);

function initialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "ar" || saved === "en") return saved;
  } catch {
    /* storage unavailable */
  }
  return (navigator.language || "").toLowerCase().startsWith("ar") ? "ar" : "en";
}

// The section the reader is currently looking at, so a language switch keeps them there
function sectionInView() {
  if (window.scrollY < 40) return null;
  return [...document.querySelectorAll("main section[id]")].find((s) => s.getBoundingClientRect().bottom > 120) ?? null;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);
  const pendingScroll = useRef(null);
  const c = CONTENT[lang];

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = c.ui.pageTitle;
    if (pendingScroll.current) {
      pendingScroll.current.scrollIntoView({ block: "start", behavior: "instant" });
      pendingScroll.current = null;
    }
  }, [lang, c]);

  const setLang = useCallback((next) => {
    if (next === lang) return;
    pendingScroll.current = sectionInView();
    setLangState(next);
    try {
      localStorage.setItem("lang", next);
    } catch {
      /* storage unavailable */
    }
  }, [lang]);

  const digits = useCallback(
    (n) => (lang === "ar" ? String(n).replace(/\d/g, (d) => AR_DIGITS[d]) : String(n)),
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, c, t: c.ui, digits }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
