
import React, { useEffect, useRef } from 'react';
import { Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const InnovationShowcase = () => {
  const { t } = useLanguage();
  const showcaseRef = useRef<HTMLDivElement>(null);
  
  // Define feature cards with translations
  const features = [
    {
      title: t('innovation.efficiency.title'),
      description: t('innovation.efficiency.description'),
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      delay: 100
    }, 
    {
      title: t('innovation.innovation.title'),
      description: t('innovation.innovation.description'),
      icon: <CheckCircle className="h-8 w-8 text-indigo-600" />,
      delay: 200
    }
  ];
  
  // List of benefits with translations
  const benefits = [
    t('innovation.benefits.automated'),
    t('innovation.benefits.ai'),
    t('innovation.benefits.cloud'),
    t('innovation.benefits.security')
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, {
      threshold: 0.1
    });
    
    if (showcaseRef.current) {
      const elements = showcaseRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (showcaseRef.current) {
        const elements = showcaseRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section ref={showcaseRef} className="py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm rounded-full bg-indigo-100 text-indigo-700 px-4 py-1.5 font-medium animate-on-scroll opacity-0 dark:bg-indigo-900 dark:text-indigo-300">
            {t('innovation.tag')}
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-on-scroll opacity-0 dark:text-white" style={{
            animationDelay: '100ms'
          }}>
            {t('innovation.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 animate-on-scroll opacity-0 dark:text-gray-300" style={{
            animationDelay: '200ms'
          }}>
            {t('innovation.subtitle')}
          </p>
        </div>

        <div className="relative mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-on-scroll opacity-0" style={{
                animationDelay: '300ms'
              }}>
                {/* Updated image with better factory automation visual */}
                <img 
                  alt={t('innovation.imageAlt')} 
                  className="w-full h-auto object-cover"
                  src="/lovable-uploads/338eb6dc-d188-4e3d-9c14-b113b150ed9d.png" 
                />

                {/* Floating feature cards */}
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`absolute bg-white rounded-xl p-4 shadow-lg animate-on-scroll opacity-0 flex items-center space-x-3 dark:bg-gray-800 dark:text-white hover:shadow-xl transition-all duration-300`}
                    style={{
                      animationDelay: `${600 + index * 200}ms`,
                      [index === 0 ? 'top' : 'bottom']: '15%',
                      [index === 0 ? 'left' : 'right']: '5%',
                      transform: `scale(1) ${index === 0 ? 'rotate(-2deg)' : 'rotate(2deg)'}`,
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 dark:bg-indigo-900">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold">{feature.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}

                {/* Added subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent pointer-events-none"></div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="space-y-8">
                <div className="animate-on-scroll opacity-0" style={{
                  animationDelay: '400ms'
                }}>
                  <h3 className="text-2xl font-bold mb-4 dark:text-white">
                    {t('innovation.heading')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('innovation.description')}
                  </p>
                </div>
                
                <ul className="space-y-4">
                  {benefits.map((item, index) => (
                    <li 
                      key={index} 
                      className="flex items-start animate-on-scroll opacity-0 dark:text-white" 
                      style={{
                        animationDelay: `${600 + index * 100}ms`
                      }}
                    >
                      <div className="mr-3 mt-1">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 dark:bg-green-900 dark:text-green-300">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/services" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium inline-flex items-center transition-all animate-on-scroll opacity-0 dark:bg-indigo-700 dark:hover:bg-indigo-600" 
                  style={{
                    animationDelay: '1000ms'
                  }}
                >
                  {t('innovation.cta')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationShowcase;
