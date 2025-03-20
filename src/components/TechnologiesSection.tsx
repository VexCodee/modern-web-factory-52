
import React, { useEffect, useRef } from 'react';
import { Sparkle, Leaf, Star, Waves, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const TechnologiesSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const technologies = [
    {
      icon: <Sparkle className="w-6 h-6 text-blue-500" />,
      name: t('technologies.cloud.title'),
      description: t('technologies.cloud.description'),
      delay: 100
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      name: t('technologies.ai.title'),
      description: t('technologies.ai.description'),
      delay: 200
    },
    {
      icon: <Waves className="w-6 h-6 text-teal-500" />,
      name: t('technologies.iot.title'),
      description: t('technologies.iot.description'),
      delay: 300
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-500" />,
      name: t('technologies.sustainable.title'),
      description: t('technologies.sustainable.description'),
      delay: 400
    }
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
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm rounded-full bg-indigo-100 text-indigo-700 px-4 py-1.5 font-medium animate-on-scroll opacity-0 dark:bg-indigo-900 dark:text-indigo-300">
            {t('technologies.tag')}
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-on-scroll opacity-0 dark:text-white">
            {t('technologies.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 animate-on-scroll opacity-0 dark:text-gray-300">
            {t('technologies.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1 animate-on-scroll opacity-0 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              style={{ animationDelay: `${tech.delay}ms` }}
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center dark:bg-gray-700">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="relative mt-20 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden animate-on-scroll opacity-0" style={{ animationDelay: '500ms' }}>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -right-10 top-0 w-40 h-40 rounded-full bg-white opacity-10"></div>
            <div className="absolute left-10 bottom-5 w-20 h-20 rounded-full bg-white opacity-10"></div>
          </div>
          
          <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">{t('technologies.cta.title')}</h3>
            <p className="text-white/90 mb-6">{t('technologies.cta.description')}</p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3.5 rounded-full font-medium hover:bg-blue-50 transition-all"
            >
              {t('technologies.cta.button')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
