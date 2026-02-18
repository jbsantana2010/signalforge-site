import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SystemSection from "@/components/SystemSection";
import AILayerSection from "@/components/AILayerSection";
import RevenueSection from "@/components/RevenueSection";
import TemplatesSection from "@/components/TemplatesSection";
import MultiOrgSection from "@/components/MultiOrgSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import ProductGallery from "@/components/ProductGallery";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SystemSection />
        <AILayerSection />
        <RevenueSection />
        <TemplatesSection />
        <MultiOrgSection />
        <WhyDifferentSection />
        <ProductGallery />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
