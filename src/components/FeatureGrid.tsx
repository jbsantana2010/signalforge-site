interface Feature {
  title: string;
  body: string;
}

interface FeatureGridProps {
  features: readonly Feature[];
  columns?: 2 | 3;
  dark?: boolean;
}

export default function FeatureGrid({
  features,
  columns = 2,
  dark = false,
}: FeatureGridProps) {
  const grid =
    columns === 3
      ? "grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      : "grid gap-8 sm:grid-cols-2";

  return (
    <div className={grid}>
      {features.map((f) => (
        <div key={f.title}>
          <h3 className="text-lg font-semibold">{f.title}</h3>
          <p
            className={`mt-2 leading-relaxed ${dark ? "text-neutral-400" : "text-neutral-600"}`}
          >
            {f.body}
          </p>
        </div>
      ))}
    </div>
  );
}
