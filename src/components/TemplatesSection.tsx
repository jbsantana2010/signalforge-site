import { siteCopy } from "@/content/siteCopy";
import Section from "./Section";

export default function TemplatesSection() {
  const { templates } = siteCopy;

  return (
    <Section
      id={templates.id}
      label={templates.sectionLabel}
      headline={templates.headline}
      intro={templates.intro}
      className="bg-neutral-50"
    >
      <p className="max-w-3xl leading-relaxed text-neutral-600">
        {templates.body}
      </p>

      <ul className="mt-8 space-y-4">
        {templates.examples.map((ex) => (
          <li key={ex.label} className="flex gap-2">
            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand" aria-hidden="true" />
            <p className="text-neutral-700">
              <strong className="font-semibold">{ex.label}</strong>{" "}
              {ex.body}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-3xl leading-relaxed text-neutral-600">
        {templates.closing}
      </p>
    </Section>
  );
}
