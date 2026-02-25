"use client";

import { useCopy } from "@/lib/lang";
import Section from "./Section";

export default function WhyDifferentSection() {
  const { whyDifferent } = useCopy();

  return (
    <Section
      id={whyDifferent.id}
      label={whyDifferent.sectionLabel}
      headline={whyDifferent.headline}
      dark
    >
      <div className="grid gap-8 sm:grid-cols-2">
        {whyDifferent.comparisons.map((c) => (
          <div
            key={c.title}
            className="rounded-xl border border-neutral-800 bg-neutral-900 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{c.title}</h3>
            <p className="mt-2 leading-relaxed text-neutral-400">{c.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
