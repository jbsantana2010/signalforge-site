import { siteCopy } from "@/content/siteCopy";
import Section from "./Section";
import Stepper from "./Stepper";
import SystemDiagram from "./SystemDiagram";

export default function SystemSection() {
  const { system } = siteCopy;

  return (
    <Section
      id={system.id}
      label={system.sectionLabel}
      headline={system.headline}
      intro={system.intro}
    >
      {/* Lifecycle diagram */}
      <div className="mb-14 rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-8 sm:px-10">
        <SystemDiagram />
      </div>

      {/* Detailed stepper */}
      <Stepper steps={system.steps} />
    </Section>
  );
}
