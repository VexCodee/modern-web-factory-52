
import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';
import SolutionCard from '../components/SolutionCard';

const Solution = () => {
  const { t } = useLanguage();
  const solutionsRef = useRef<HTMLDivElement>(null);

  // Set up intersection observer for animations
  useEffect(() => {
    if (!solutionsRef.current) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });
    
    const items = solutionsRef.current.querySelectorAll('.solution-item');
    items.forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      items.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  const solutions = [
    {
      title: t('solutions.items.digitalTransformation.title'),
      description: t('solutions.items.digitalTransformation.description'),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
      features: [
        t('solutions.items.digitalTransformation.features.infrastructure'),
        t('solutions.items.digitalTransformation.features.processes'),
        t('solutions.items.digitalTransformation.features.migration'),
        t('solutions.items.digitalTransformation.features.change'),
        t('solutions.items.digitalTransformation.features.workflow')
      ]
    },
    {
      title: t('solutions.items.aiCustomerExperience.title'),
      description: t('solutions.items.aiCustomerExperience.description'),
      image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      features: [
        t('solutions.items.aiCustomerExperience.features.chatbots'),
        t('solutions.items.aiCustomerExperience.features.analytics'),
        t('solutions.items.aiCustomerExperience.features.recommendations'),
        t('solutions.items.aiCustomerExperience.features.automation'),
        t('solutions.items.aiCustomerExperience.features.sentiment')
      ]
    },
    {
      title: t('solutions.items.ecommerce.title'),
      description: t('solutions.items.ecommerce.description'),
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      features: [
        t('solutions.items.ecommerce.features.responsive'),
        t('solutions.items.ecommerce.features.inventory'),
        t('solutions.items.ecommerce.features.payment'),
        t('solutions.items.ecommerce.features.fulfillment'),
        t('solutions.items.ecommerce.features.crm')
      ]
    },
    {
      title: t('solutions.items.dataAnalytics.title'),
      description: t('solutions.items.dataAnalytics.description'),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      features: [
        t('solutions.items.dataAnalytics.features.warehouse'),
        t('solutions.items.dataAnalytics.features.dashboards'),
        t('solutions.items.dataAnalytics.features.predictive'),
        t('solutions.items.dataAnalytics.features.reporting'),
        t('solutions.items.dataAnalytics.features.visualization')
      ]
    }
  ];

  const industries = [
    {
      name: t('solutions.industries.healthcare'),
      icon: "🏥",
      description: t('solutions.industriesDesc.healthcare')
    },
    {
      name: t('solutions.industries.finance'),
      icon: "💼",
      description: t('solutions.industriesDesc.finance')
    },
    {
      name: t('solutions.industries.retail'),
      icon: "🛍️",
      description: t('solutions.industriesDesc.retail')
    },
    {
      name: t('solutions.industries.manufacturing'),
      icon: "🏭",
      description: t('solutions.industriesDesc.manufacturing')
    },
    {
      name: t('solutions.industries.education'),
      icon: "🎓",
      description: t('solutions.industriesDesc.education')
    },
    {
      name: t('solutions.industries.logistics'),
      icon: "🚚",
      description: t('solutions.industriesDesc.logistics')
    }
  ];

  return (
    <Layout>
      {/* Hero Section with parallax effect */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pb-20 pt-32">
        {/* Floating background elements */}
        <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl"></div>
        <div className="absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-purple-100/40 blur-3xl"></div>
        
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="animate-fade-in rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {t('solutions.title')}
            </span>
            <h1 
              className="mt-6 animate-fade-in text-4xl font-bold leading-tight md:text-5xl" 
              style={{ animationDelay: '100ms' }}
            >
              {t('solutions.subtitle')}
            </h1>
            <p 
              className="mx-auto mt-6 max-w-2xl animate-fade-in text-xl text-gray-600" 
              style={{ animationDelay: '200ms' }}
            >
              {t('solutions.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section ref={solutionsRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className="solution-item opacity-0"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <SolutionCard
                  title={solution.title}
                  description={solution.description}
                  features={solution.features}
                  image={solution.image}
                  index={index}
                  ctaText={t('cta.getStarted')}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Glass Card Design */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-purple-50/20"></div>
        
        {/* Animated particles */}
        <div className="absolute top-20 right-10 h-32 w-32 rounded-full bg-blue-200/30 mix-blend-multiply blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 h-32 w-32 rounded-full bg-purple-200/30 mix-blend-multiply blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container relative mx-auto px-6">
          <div className="mb-16 mx-auto max-w-3xl text-center">
            <span className="animate-fade-in rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {t('solutions.industries.title')}
            </span>
            <h2 
              className="mt-6 animate-fade-in text-3xl font-bold md:text-4xl" 
              style={{ animationDelay: '100ms' }}
            >
              {t('solutions.features.title')}
            </h2>
            <p 
              className="mt-4 animate-fade-in text-lg text-gray-600" 
              style={{ animationDelay: '200ms' }}
            >
              {t('solutions.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="group h-full overflow-hidden rounded-2xl bg-white/70 p-8 backdrop-blur-sm shadow-md border border-white/50 dark:bg-gray-800/70 dark:border-gray-700/50">
                  <div className="mb-6 flex h-16 w-16 transform items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:from-indigo-500/20 group-hover:to-purple-500/20">
                    {industry.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-semibold">{industry.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Solution;
