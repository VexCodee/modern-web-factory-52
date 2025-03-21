
import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';
import SolutionCard from '../components/SolutionCard';
import { ArrowUpRight } from 'lucide-react';

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
      {/* Updated Hero section with dark background and animated elements */}
      <section className="relative min-h-[80vh] bg-[#1A1F2C] overflow-hidden flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated particles background */}
          {Array.from({ length: 80 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                animationDelay: `${Math.random() * 5}s`,
                animation: 'float-around 20s infinite ease-in-out'
              }}
            ></div>
          ))}
          
          {/* Gradient overlay */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 border border-primary/30">
                <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-primary font-medium tracking-wide text-sm">
                  {t('solutions.title')}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-white">
                {t('solutions.subtitle')}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {t('solutions.description')}
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                {t('solutions.description')}
              </p>
              <a 
                href="#solutions-section"
                className="inline-block text-white bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-full font-medium shadow-lg transition-all duration-300"
              >
                {t('cta.exploreMore')}
              </a>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
                  alt="Featured solution" 
                  className="relative rounded-2xl shadow-2xl border border-gray-700"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-gray-900/80 backdrop-blur-md rounded-xl p-4 border border-gray-700">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-gray-400 text-sm">Featured Solution</div>
                      <div className="text-white font-bold text-xl">{solutions[0].title}</div>
                    </div>
                    <div className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400">
          <span className="text-sm mb-1">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-[scrollDown_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>

      {/* Solutions section */}
      <section id="solutions-section" ref={solutionsRef} className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {t('solutions.subtitle')}
            </span>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              {t('solutions.features.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              {t('solutions.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-16">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className="solution-item opacity-0 transition-all duration-700"
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

      {/* Industries section */}
      <section className="relative py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="mb-16 mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {t('solutions.industries.title')}
            </span>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              {t('solutions.features.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              {t('solutions.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="h-full overflow-hidden rounded-lg bg-white dark:bg-gray-900 p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl">
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
