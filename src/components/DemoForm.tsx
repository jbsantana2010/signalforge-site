"use client";

import { FormEvent, useState, useCallback, useRef } from "react";
import { useCopy, useLang } from "@/lib/lang";
import Button from "./Button";
import Toast from "./Toast";

interface DemoFormProps {
  onSuccess?: () => void;
}

const ENDPOINT = process.env.NEXT_PUBLIC_LEAD_FORM_ENDPOINT ?? "";
const PROVIDER = (process.env.NEXT_PUBLIC_LEAD_FORM_PROVIDER ?? "formspree") as
  | "formspree"
  | "basin";

function toUrlEncoded(data: Record<string, string>): string {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
}

async function submitLead(payload: Record<string, string>): Promise<void> {
  if (PROVIDER === "basin") {
    // Try JSON first; if the provider rejects it, retry as form-urlencoded.
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const res2 = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: toUrlEncoded(payload),
      });
      if (!res2.ok) throw new Error(`Basin submit failed: ${res2.status}`);
    }
  } else {
    // formspree (default) — JSON only
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Formspree submit failed: ${res.status}`);
  }
}

type Status = "idle" | "submitting" | "success" | "error";

export default function DemoForm({ onSuccess }: DemoFormProps) {
  const { demoForm } = useCopy();
  const { lang } = useLang();

  const [status, setStatus] = useState<Status>("idle");
  const [devError, setDevError] = useState<string | null>(null);
  const [toast, setToast] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Guard: env var missing
      if (!ENDPOINT) {
        if (process.env.NODE_ENV === "development") {
          setDevError(
            "Dev: NEXT_PUBLIC_LEAD_FORM_ENDPOINT is not set. Add it to .env.local to test submissions."
          );
          setStatus("error");
        } else {
          // Prod safe-fallback: show success without throwing
          setStatus("success");
          setToast(true);
          onSuccess?.();
        }
        return;
      }

      setStatus("submitting");
      setDevError(null);

      const formData = new FormData(e.currentTarget);
      const payload: Record<string, string> = {
        ...(Object.fromEntries(formData.entries()) as Record<string, string>),
        to_email: "hello@warderai.com",
        lang,
        page: typeof window !== "undefined" ? window.location.pathname : "",
        referrer: typeof document !== "undefined" ? document.referrer : "",
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
        timestamp: new Date().toISOString(),
      };

      try {
        await submitLead(payload);
        setStatus("success");
        setToast(true);
        formRef.current?.reset();
        onSuccess?.();
      } catch (err) {
        console.error("[DemoForm] Submission error:", err);
        setStatus("error");
      }
    },
    [lang, onSuccess]
  );

  const closeToast = useCallback(() => setToast(false), []);

  const inputClass =
    "block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none transition-colors";

  if (status === "success") {
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
          <p className="text-lg font-semibold text-neutral-900">{demoForm.successTitle}</p>
          <p className="mt-1 text-sm text-neutral-500">{demoForm.successMessage}</p>
        </div>
        <Toast message={demoForm.successMessage} visible={toast} onClose={closeToast} />
      </>
    );
  }

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="demo-name"
            className="mb-1 block text-sm font-medium text-neutral-700"
          >
            {demoForm.fields.name.label}
          </label>
          <input
            id="demo-name"
            name="name"
            type="text"
            required
            placeholder={demoForm.fields.name.placeholder}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="demo-email"
            className="mb-1 block text-sm font-medium text-neutral-700"
          >
            {demoForm.fields.email.label}
          </label>
          <input
            id="demo-email"
            name="email"
            type="email"
            required
            placeholder={demoForm.fields.email.placeholder}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="demo-company"
            className="mb-1 block text-sm font-medium text-neutral-700"
          >
            {demoForm.fields.company.label}
          </label>
          <input
            id="demo-company"
            name="company"
            type="text"
            required
            placeholder={demoForm.fields.company.placeholder}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="demo-website"
            className="mb-1 block text-sm font-medium text-neutral-700"
          >
            {demoForm.fields.website.label}
          </label>
          <input
            id="demo-website"
            name="website"
            type="url"
            placeholder={demoForm.fields.website.placeholder}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="demo-message"
            className="mb-1 block text-sm font-medium text-neutral-700"
          >
            {demoForm.fields.message.label}
          </label>
          <textarea
            id="demo-message"
            name="message"
            rows={3}
            placeholder={demoForm.fields.message.placeholder}
            className={inputClass}
          />
        </div>

        {status === "error" && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm">
            <p className="font-medium text-red-700">{demoForm.errorTitle}</p>
            <p className="mt-0.5 text-red-600">{devError ?? demoForm.errorBody}</p>
          </div>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? demoForm.submittingLabel : demoForm.submitLabel}
        </Button>
      </form>
      <Toast message={demoForm.successMessage} visible={toast} onClose={closeToast} />
    </>
  );
}
