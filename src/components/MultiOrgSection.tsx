import { siteCopy } from "@/content/siteCopy";
import Section from "./Section";
import FeatureGrid from "./FeatureGrid";

export default function MultiOrgSection() {
  const { multiOrg } = siteCopy;

  return (
    <Section
      id={multiOrg.id}
      label={multiOrg.sectionLabel}
      headline={multiOrg.headline}
      intro={multiOrg.intro}
    >
      <FeatureGrid features={multiOrg.features} columns={2} />
    </Section>
  );
}
