import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestDemoContent from "./RequestDemoContent";

export const metadata: Metadata = {
  title: "Request a Demo — Warder",
  description:
    "See how Warder connects spend to revenue. Request a personalized demo.",
};

export default function RequestDemoPage() {
  return (
    <>
      <Navbar />
      <RequestDemoContent />
      <Footer />
    </>
  );
}
