import { siteCopy } from "@/content/siteCopy";
import Section from "./Section";
import FeatureGrid from "./FeatureGrid";

export default function AILayerSection() {
  const { aiLayer } = siteCopy;

  return (
    <div className="ai-layer-bg relative overflow-hidden">
      <Section
        id={aiLayer.id}
        label={aiLayer.sectionLabel}
        headline={aiLayer.headline}
        intro={aiLayer.intro}
        dark
        className="!bg-transparent"
      >
        <FeatureGrid features={aiLayer.features} columns={2} dark />
      </Section>
    </div>
  );
}
