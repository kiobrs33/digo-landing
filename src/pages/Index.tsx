import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PlansSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CoverageSection from "@/components/CoverageSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import { MapDev } from "@/components/MapDev";
import { PaymentMethodsSection } from "@/components/PaymentMethodsSection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <PricingSection />
      <ProcessSection />
      <TestimonialsSection />
      {/* <CoverageSection /> */}
      <PaymentMethodsSection />
      <ContactSection />
      <MapDev />
      <FaqSection />
    </>
  );
};

export default Index;
