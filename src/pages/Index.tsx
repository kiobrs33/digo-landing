
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import PricingSection from '@/components/PricingSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CoverageSection from '@/components/CoverageSection';
import ContactSection from '@/components/ContactSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <PricingSection />
        <ProcessSection />
        <TestimonialsSection />
        <CoverageSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
