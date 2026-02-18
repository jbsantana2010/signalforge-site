interface SectionProps {
  id?: string;
  label?: string;
  headline: string;
  intro?: string;
  children?: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Section({
  id,
  label,
  headline,
  intro,
  children,
  className = "",
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${dark ? "bg-neutral-950 text-white" : "bg-white text-neutral-900"} ${className}`}
    >
      <div className="mx-auto max-w-5xl px-6">
        {label && (
          <p
            className={`mb-3 text-sm font-semibold uppercase tracking-wider ${dark ? "text-brand-300" : "text-brand"}`}
          >
            {label}
          </p>
        )}
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-balance">
          {headline}
        </h2>
        {intro && (
          <p
            className={`mt-4 max-w-3xl text-lg leading-relaxed ${dark ? "text-neutral-300" : "text-neutral-600"}`}
          >
            {intro}
          </p>
        )}
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}
