
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
        <div className="flex flex-col items-center">
          <ServiceSection />
          <WhyChooseUs />
          <InnovationShowcase />
          <TechnologiesSection />
          <Testimonials />
          <CTASection />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
