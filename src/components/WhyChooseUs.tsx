
import React from 'react';
import { Shield, Zap, Users, BarChart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Shield size={24} className="text-primary feature-icon" />,
      title: t('whyChooseUs.features.expertise.title'),
      description: t('whyChooseUs.features.expertise.description')
    },
    {
      icon: <Zap size={24} className="text-primary feature-icon" />,
      title: t('whyChooseUs.features.innovative.title'),
      description: t('whyChooseUs.features.innovative.description')
    },
    {
      icon: <Users size={24} className="text-primary feature-icon" />,
      title: t('whyChooseUs.features.team.title'),
      description: t('whyChooseUs.features.team.description')
    },
    {
      icon: <BarChart size={24} className="text-primary feature-icon" />,
      title: t('whyChooseUs.features.results.title'),
      description: t('whyChooseUs.features.results.description')
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full mix-blend-multiply blur-3xl -z-10 opacity-75 dark:opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-full mix-blend-multiply blur-3xl -z-10 opacity-75 dark:opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm rounded-full bg-primary/10 dark:bg-primary/20 text-primary px-4 py-1.5 font-medium animate-fade-in">
              {t('whyChooseUs.title')}
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold leading-tight animate-fade-in dark:text-white" style={{ animationDelay: '100ms' }}>
              {t('whyChooseUs.subtitle')}
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
              {t('whyChooseUs.description')}
            </p>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex animate-fade-in" 
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="mr-4 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt={t('whyChooseUs.imageAlt')} 
                className="w-full h-auto rounded-2xl dark:opacity-90"
              />
              
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-black/50 backdrop-blur-sm rounded-xl p-6 shadow-lg animate-slide-in-bottom stats-card" style={{ animationDelay: '600ms' }}>
                <div className="grid grid-cols-3 divide-x divide-gray-200 dark:divide-gray-700">
                  <div className="px-4 text-center">
                    <div className="text-3xl font-bold text-primary">200+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{t('whyChooseUs.stats.clients')}</div>
                  </div>
                  <div className="px-4 text-center">
                    <div className="text-3xl font-bold text-primary">98%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{t('whyChooseUs.stats.satisfaction')}</div>
                  </div>
                  <div className="px-4 text-center">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{t('whyChooseUs.stats.experience')}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -right-5 -top-5 w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full z-10 animate-float"></div>
            <div className="absolute -left-5 -bottom-5 w-20 h-20 bg-accent/10 dark:bg-accent/20 rounded-full z-10 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
