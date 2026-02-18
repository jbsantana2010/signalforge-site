"use client";

import { useState, useCallback } from "react";
import { siteCopy } from "@/content/siteCopy";
import Button from "./Button";
import Modal from "./Modal";
import DemoForm from "./DemoForm";

export default function Navbar() {
  const { brand, nav, demoForm } = siteCopy;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const openModal = useCallback(() => {
    setModalOpen(true);
    setMobileOpen(false);
  }, []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white text-sm font-black">
              SF
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-neutral-900">{brand.name}</span>
              <span className="text-[10px] font-medium text-neutral-400">{brand.parentShort}</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-6 lg:flex">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button onClick={openModal} className="text-sm px-5 py-2">
              Request a Demo
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-neutral-700"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-neutral-200 bg-white px-6 py-4 lg:hidden">
            <ul className="space-y-3">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMobile}
                    className="block text-sm text-neutral-700 hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Button onClick={openModal} className="w-full text-sm">
                Request a Demo
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Demo modal */}
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
