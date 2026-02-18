import type { Metadata } from "next";
import { siteCopy } from "@/content/siteCopy";
import Navbar from "@/components/Navbar";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Request a Demo — SignalForge",
  description:
    "See how SignalForge connects spend to revenue. Request a personalized demo.",
};

export default function RequestDemoPage() {
  const { demoForm } = siteCopy;

  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
