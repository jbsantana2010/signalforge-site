"use client";

import { LanguageProvider } from "@/lib/lang";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
