
import React from 'react';
import Layout from '../components/Layout';
import { ArrowRight, UserPlus, Globe, Palette, Wrench, Bot, BarChart3, Share2, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';

const ServicePage = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <UserPlus size={24} />,
      title: t('services.items.outsourcing.title'),
      description: t('services.items.outsourcing.description'),
      benefits: [
        t('services.items.outsourcing.benefits.cost'),
        t('services.items.outsourcing.benefits.expertise'),
        t('services.items.outsourcing.benefits.scalability'),
        t('services.items.outsourcing.benefits.focus')
      ],
      delay: 100
    },
    {
      icon: <Globe size={24} />,
      title: t('services.items.webDev.title'),
      description: t('services.items.webDev.description'),
      benefits: [
        t('services.items.webDev.benefits.responsive'),
        t('services.items.webDev.benefits.seo'),
        t('services.items.webDev.benefits.secure'),
        t('services.items.webDev.benefits.custom')
      ],
      delay: 200
    },
    {
      icon: <Palette size={24} />,
      title: t('services.items.graphic.title'),
      description: t('services.items.graphic.description'),
      benefits: [
        t('services.items.graphic.benefits.brand'),
        t('services.items.graphic.benefits.user'),
        t('services.items.graphic.benefits.creative'),
        t('services.items.graphic.benefits.cross')
      ],
      delay: 300
    },
    {
      icon: <Wrench size={24} />,
      title: t('services.items.hardware.title'),
      description: t('services.items.hardware.description'),
      benefits: [
        t('services.items.hardware.benefits.quick'),
        t('services.items.hardware.benefits.certified'),
        t('services.items.hardware.benefits.quality'),
        t('services.items.hardware.benefits.preventive')
      ],
      delay: 400
    },
    {
      icon: <Bot size={24} />,
      title: t('services.items.ai.title'),
      description: t('services.items.ai.description'),
      benefits: [
        t('services.items.ai.benefits.automation'),
        t('services.items.ai.benefits.analytics'),
        t('services.items.ai.benefits.nlp'),
        t('services.items.ai.benefits.ml')
      ],
      delay: 500
    },
    {
      icon: <BarChart3 size={24} />,
      title: t('services.items.marketing.title'),
      description: t('services.items.marketing.description'),
      benefits: [
        t('services.items.marketing.benefits.targeted'),
        t('services.items.marketing.benefits.performance'),
        t('services.items.marketing.benefits.content'),
        t('services.items.marketing.benefits.conversion')
      ],
      delay: 600
    },
    {
      icon: <Share2 size={24} />,
      title: t('services.items.social.title'),
      description: t('services.items.social.description'),
      benefits: [
        t('services.items.social.benefits.calendar'),
        t('services.items.social.benefits.engagement'),
        t('services.items.social.benefits.optimization'),
        t('services.items.social.benefits.analytics')
      ],
      delay: 700
    },
    {
      icon: <ClipboardList size={24} />,
      title: t('services.items.project.title'),
      description: t('services.items.project.description'),
      benefits: [
        t('services.items.project.benefits.communication'),
        t('services.items.project.benefits.risk'),
        t('services.items.project.benefits.resource'),
        t('services.items.project.benefits.quality')
      ],
      delay: 800
    }
  ];

  return (
    <Layout>
      {/* Sekcja Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              {t('services.title')}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-display font-bold leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
              {t('services.subtitle')}
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              {t('services.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Lista Usług */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md animate-fade-in" 
                style={{ animationDelay: `${service.delay}ms` }}
              >
                <div className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  
                  <h4 className="font-medium text-lg mb-3">{t('services.mainBenefits')}:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    {t('cta.getStarted')}
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nasz Proces */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              {t('whyChooseUs.title')}
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-fade-in" style={{ animationDelay: '100ms' }}>
              {t('whyChooseUs.subtitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
              {t('whyChooseUs.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: t('whyChooseUs.features.expertise.title'),
                description: t('whyChooseUs.features.expertise.description'),
                delay: 300
              },
              {
                number: "02",
                title: t('whyChooseUs.features.innovative.title'),
                description: t('whyChooseUs.features.innovative.description'),
                delay: 400
              },
              {
                number: "03",
                title: t('whyChooseUs.features.team.title'),
                description: t('whyChooseUs.features.team.description'),
                delay: 500
              },
              {
                number: "04",
                title: t('whyChooseUs.features.results.title'),
                description: t('whyChooseUs.features.results.description'),
                delay: 600
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-fade-in" 
                style={{ animationDelay: `${step.delay}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServicePage;
