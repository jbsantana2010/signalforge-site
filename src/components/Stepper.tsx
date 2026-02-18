interface Step {
  title: string;
  body: string;
}

interface StepperProps {
  steps: readonly Step[];
}

export default function Stepper({ steps }: StepperProps) {
  return (
    <ol className="relative border-l-2 border-brand-200 ml-4" aria-label="System flow">
      {steps.map((step, i) => (
        <li key={step.title} className="mb-10 ml-8 last:mb-0">
          {/* Step number dot */}
          <span
            className="absolute -left-[17px] flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white text-sm font-bold ring-4 ring-white"
            aria-hidden="true"
          >
            {i + 1}
          </span>
          <h3 className="text-lg font-semibold text-neutral-900">
            {step.title}
          </h3>
          <p className="mt-1 leading-relaxed text-neutral-600">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
