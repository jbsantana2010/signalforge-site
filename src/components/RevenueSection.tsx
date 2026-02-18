import { siteCopy } from "@/content/siteCopy";
import Section from "./Section";
import FeatureGrid from "./FeatureGrid";
import KpiStrip from "./KpiStrip";

export default function RevenueSection() {
  const { revenueIntelligence: ri } = siteCopy;

  return (
    <Section
      id={ri.id}
      label={ri.sectionLabel}
      headline={ri.headline}
      intro={ri.intro}
    >
      {/* KPI visual */}
      <div className="mb-12">
        <KpiStrip />
      </div>

      <FeatureGrid features={ri.features} columns={3} />
    </Section>
  );
}
