
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ServiceSection from '../components/ServiceSection';
import TechnologiesSection from '../components/TechnologiesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import InnovationShowcase from '../components/InnovationShowcase';

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <HeroSection />
        <div className="pt-0 mt-0"> {/* Reduced spacing */}
          <ServiceSection />
        </div>
        <WhyChooseUs />
        <InnovationShowcase />
        <TechnologiesSection />
        <Testimonials />
        <CTASection />
      </div>
    </Layout>
  );
};

export default Index;
