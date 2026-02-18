"use client";

import { useState, useCallback } from "react";
import { siteCopy } from "@/content/siteCopy";
import Button from "./Button";
import Modal from "./Modal";
import DemoForm from "./DemoForm";
import ProductMockup from "./ProductMockup";

export default function HeroSection() {
  const { hero, brand, demoForm } = siteCopy;
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 to-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Copy */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-[3.25rem] xl:text-5xl text-balance">
                {hero.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-neutral-600 md:text-xl leading-relaxed lg:max-w-none">
                {hero.subheadline}
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button onClick={() => setModalOpen(true)}>
                  {hero.primaryCta}
                </Button>
                <Button variant="secondary" href={hero.secondaryCtaHref}>
                  {hero.secondaryCta}
                </Button>
              </div>

              <p className="mt-3 text-[11px] text-neutral-400 text-center lg:text-left">
                {brand.parent}
              </p>

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-500 lg:max-w-none">
                {hero.body}
              </p>
            </div>

            {/* Product mockup */}
            <div className="mx-auto w-full max-w-lg lg:max-w-none">
              <ProductMockup />
            </div>
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
