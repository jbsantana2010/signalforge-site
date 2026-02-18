"use client";

import { FormEvent, useState, useCallback } from "react";
import { siteCopy } from "@/content/siteCopy";
import Button from "./Button";
import Toast from "./Toast";

interface DemoFormProps {
  onSuccess?: () => void;
}

export default function DemoForm({ onSuccess }: DemoFormProps) {
  const { fields, submitLabel, successMessage } = siteCopy.demoForm;
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Demo request submitted:", data);
    setSubmitted(true);
    setToast(true);
    onSuccess?.();
  };

  const closeToast = useCallback(() => setToast(false), []);

  if (submitted) {
    return (
      <>
        <div className="py-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-lg font-medium text-neutral-900">
            {successMessage}
          </p>
        </div>
        <Toast message={successMessage} visible={toast} onClose={closeToast} />
      </>
    );
  }

  const inputClass =
    "block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none transition-colors";

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="demo-name" className="mb-1 block text-sm font-medium text-neutral-700">
            {fields.name.label}
          </label>
          <input
            id="demo-name"
            name="name"
            type="text"
            required
            placeholder={fields.name.placeholder}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="demo-email" className="mb-1 block text-sm font-medium text-neutral-700">
            {fields.email.label}
          </label>
          <input
            id="demo-email"
            name="email"
            type="email"
            required
            placeholder={fields.email.placeholder}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="demo-company" className="mb-1 block text-sm font-medium text-neutral-700">
            {fields.company.label}
          </label>
          <input
            id="demo-company"
            name="company"
            type="text"
            required
            placeholder={fields.company.placeholder}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="demo-website" className="mb-1 block text-sm font-medium text-neutral-700">
            {fields.website.label}
          </label>
          <input
            id="demo-website"
            name="website"
            type="url"
            placeholder={fields.website.placeholder}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="demo-message" className="mb-1 block text-sm font-medium text-neutral-700">
            {fields.message.label}
          </label>
          <textarea
            id="demo-message"
            name="message"
            rows={3}
            placeholder={fields.message.placeholder}
            className={inputClass}
          />
        </div>

        <Button type="submit" className="w-full">
          {submitLabel}
        </Button>
      </form>
      <Toast message={successMessage} visible={toast} onClose={closeToast} />
    </>
  );
}
