import { siteCopy } from "@/content/siteCopy";
import Section from "./Section";

export default function ProblemSection() {
  const { problem } = siteCopy;

  return (
    <Section
      id={problem.id}
      label={problem.sectionLabel}
      headline={problem.headline}
      intro={problem.intro}
      className="bg-neutral-50"
    >
      <div className="space-y-8">
        {problem.points.map((point) => (
          <div key={point.title} className="max-w-3xl">
            <h3 className="text-lg font-semibold text-neutral-900">
              {point.title}
            </h3>
            <p className="mt-1 leading-relaxed text-neutral-600">
              {point.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-neutral-200 bg-white p-6 md:p-8">
        <h3 className="text-xl font-bold text-neutral-900">
          {problem.closing.title}
        </h3>
        <p className="mt-2 leading-relaxed text-neutral-600">
          {problem.closing.body}
        </p>
      </div>
    </Section>
  );
}
