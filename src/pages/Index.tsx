
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ServiceSection from '../components/ServiceSection';
import TechnologiesSection from '../components/TechnologiesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import AwardsSection from '../components/AwardsSection';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServiceSection />
      <TechnologiesSection />
      <WhyChooseUs />
      <AwardsSection />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
