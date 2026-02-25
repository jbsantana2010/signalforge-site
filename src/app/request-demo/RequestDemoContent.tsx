"use client";

import { useCopy } from "@/lib/lang";
import DemoForm from "@/components/DemoForm";

export default function RequestDemoContent() {
  const { demoForm } = useCopy();

  return (
    <main className="py-20 md:py-28">
      <div className="mx-auto max-w-lg px-6">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
          {demoForm.title}
        </h1>
        <p className="mt-2 text-neutral-500">{demoForm.subtitle}</p>
        <div className="mt-8">
          <DemoForm />
        </div>
      </div>
    </main>
  );
}
