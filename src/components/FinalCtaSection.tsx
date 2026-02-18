"use client";

import { useState, useCallback } from "react";
import { siteCopy } from "@/content/siteCopy";
import Button from "./Button";
import Modal from "./Modal";
import DemoForm from "./DemoForm";

export default function FinalCtaSection() {
  const { finalCta, demoForm } = siteCopy;
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <>
      <section className="bg-gradient-to-b from-white to-brand-50/60 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            {finalCta.body}
          </p>
          <p className="mt-6 text-lg font-semibold text-brand">
            {finalCta.accent}
          </p>
          <p className="mt-2 text-neutral-600">{finalCta.closing}</p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button onClick={() => setModalOpen(true)}>
              {finalCta.primaryCta}
            </Button>
            <Button variant="secondary" href="/request-demo">
              {finalCta.secondaryCta}
            </Button>
          </div>
        </div>
      </section>

      <Modal open={modalOpen} onClose={closeModal} ariaLabel={demoForm.title}>
        <h2 className="text-xl font-bold text-neutral-900">{demoForm.title}</h2>
        <p className="mt-1 text-sm text-neutral-500">{demoForm.subtitle}</p>
        <div className="mt-6">
          <DemoForm onSuccess={() => setTimeout(closeModal, 2500)} />
        </div>
      </Modal>
    </>
  );
}
