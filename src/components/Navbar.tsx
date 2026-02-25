"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useCopy, useLang } from "@/lib/lang";
import type { Lang } from "@/content/siteCopy";
import Button from "./Button";
import Modal from "./Modal";
import DemoForm from "./DemoForm";

const langs: Lang[] = ["en", "es"];

// First 5 links shown inline; remaining go into "More / Más" dropdown
const PRIMARY_COUNT = 5;

export default function Navbar() {
  const copy = useCopy();
  const { lang, setLang } = useLang();
  const { brand, nav, demoForm, hero } = copy;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const openModal = useCallback(() => {
    setModalOpen(true);
    setMobileOpen(false);
  }, []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  const primaryLinks = nav.links.slice(0, PRIMARY_COUNT);
  const moreLinks = nav.links.slice(PRIMARY_COUNT);
  const moreLabel = lang === "es" ? "Más" : "More";

  // Close dropdown on outside click or ESC
  useEffect(() => {
    if (!dropdownOpen) return;
    function onMouseDown(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setDropdownOpen(false);
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [dropdownOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white text-sm font-black">
              SF
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-neutral-900">{brand.name}</span>
              <span className="text-[10px] font-medium text-neutral-400">{brand.parentShort}</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="ml-8 hidden items-center gap-5 lg:flex">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="whitespace-nowrap text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* "More / Más" dropdown */}
            {moreLinks.length > 0 && (
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((o) => !o)}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1 whitespace-nowrap text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                >
                  {moreLabel}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <polyline points="2 4 6 8 10 4" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 top-full mt-2 min-w-[160px] rounded-lg border border-neutral-200 bg-white py-1 shadow-md"
                  >
                    {moreLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        role="menuitem"
                        onClick={() => setDropdownOpen(false)}
                        className="block whitespace-nowrap px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            )}
          </ul>

          {/* Language toggle + Desktop CTA */}
          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <div className="flex rounded-full border border-neutral-200 p-0.5 text-xs font-medium">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-full px-2.5 py-1 transition-colors ${
                    lang === l
                      ? "bg-brand text-white"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <Button onClick={openModal} className="text-sm px-5 py-2">
              {hero.primaryCta}
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

        {/* Mobile menu — unchanged */}
        {mobileOpen && (
          <div className="border-t border-neutral-200 bg-white px-6 py-4 lg:hidden">
            {/* Mobile language toggle */}
            <div className="mb-4 flex rounded-full border border-neutral-200 p-0.5 text-xs font-medium w-fit">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-full px-2.5 py-1 transition-colors ${
                    lang === l
                      ? "bg-brand text-white"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
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
                {hero.primaryCta}
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
