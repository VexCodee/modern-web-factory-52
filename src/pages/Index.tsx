
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ServiceSection from '../components/ServiceSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServiceSection />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
