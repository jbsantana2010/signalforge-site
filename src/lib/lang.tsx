"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { siteCopy, type Lang, type SiteCopy } from "@/content/siteCopy";

const STORAGE_KEY = "sf_lang";
const DEFAULT_LANG: Lang = "en";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LangContext = createContext<LangContextValue>({
  lang: DEFAULT_LANG,
  setLang: () => {},
});

export function getInitialLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "es") return stored;
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  // Sync from localStorage on mount (client only)
  useEffect(() => {
    setLangState(getInitialLang());
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export function useCopy(): SiteCopy {
  const { lang } = useLang();
  return siteCopy[lang];
}
