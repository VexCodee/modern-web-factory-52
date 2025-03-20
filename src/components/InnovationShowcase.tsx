
import React, { useEffect, useRef } from 'react';
import { Zap, CheckCircle, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const InnovationShowcase = () => {
  const { t } = useLanguage();
  const showcaseRef = useRef<HTMLDivElement>(null);
  
  // Lista korzyści z tłumaczeniami
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
        <div className="relative mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-on-scroll opacity-0 dark:text-white">
                  {t('innovation.heading')}
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 animate-on-scroll opacity-0 dark:text-gray-300" style={{ animationDelay: '100ms' }}>
                  {t('innovation.description')}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {benefits.map((item, index) => (
                    <li 
                      key={index} 
                      className="flex items-start animate-on-scroll opacity-0 dark:text-white" 
                      style={{ animationDelay: `${200 + index * 100}ms` }}
                    >
                      <div className="mr-3 mt-1">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 dark:bg-green-900 dark:text-green-300">
                          <Check size={16} />
                        </div>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/services" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium inline-flex items-center transition-all animate-on-scroll opacity-0 dark:bg-indigo-700 dark:hover:bg-indigo-600" 
                  style={{ animationDelay: '600ms' }}
                >
                  {t('innovation.cta')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative p-4 animate-on-scroll opacity-0" style={{ animationDelay: '150ms' }}>
                {/* Główny obraz */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    alt={t('innovation.imageAlt')} 
                    className="w-full h-auto object-cover"
                    src="/lovable-uploads/02122579-6152-48e5-ae1c-fc8b150f8774.png"
                  />
                  
                  {/* Badge z innowacją */}
                  <div className="absolute top-8 left-8 bg-white rounded-xl p-3 shadow-lg flex items-center space-x-3 dark:bg-gray-800 dark:text-white hover:shadow-xl transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 dark:bg-indigo-900">
                      <Zap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{t('innovation.innovation.title')}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{t('hero.futureReady')}</p>
                    </div>
                  </div>
                  
                  {/* Badge z wydajnością */}
                  <div className="absolute bottom-8 left-8 bg-white rounded-xl p-3 shadow-lg flex items-center space-x-3 dark:bg-gray-800 dark:text-white hover:shadow-xl transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 dark:bg-blue-900">
                      <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{t('hero.performance')}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{t('hero.optimized')}</p>
                    </div>
                  </div>
                  
                  {/* Dodany subtelny gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent pointer-events-none"></div>
                </div>
                
                {/* Dekoracja tła */}
                <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 rounded-full bg-blue-100/50 blur-2xl"></div>
                <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 rounded-full bg-indigo-100/50 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationShowcase;
