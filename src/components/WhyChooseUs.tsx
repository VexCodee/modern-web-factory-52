
import React from 'react';
import { Shield, Zap, Users, BarChart } from 'lucide-react';
import { useLanguage, getTranslation } from '../context/LanguageContext';

const WhyChooseUs = () => {
  const { language, translations } = useLanguage();
  
  // Safely access translations
  const title = getTranslation(translations.whyChooseUs[language], language, 'title');
  const subtitle = getTranslation(translations.whyChooseUs[language], language, 'subtitle');
  const description = getTranslation(translations.whyChooseUs[language], language, 'description');
  
  // Safely access nested translations for stats
  const clientsLabel = getTranslation(translations.whyChooseUs[language].stats, language, 'clients');
  const satisfactionLabel = getTranslation(translations.whyChooseUs[language].stats, language, 'satisfaction');
  const experienceLabel = getTranslation(translations.whyChooseUs[language].stats, language, 'experience');
  
  // For features section
  const expertiseTitle = getTranslation(translations.whyChooseUs[language].features.expertise, language, 'title');
  const expertiseDesc = getTranslation(translations.whyChooseUs[language].features.expertise, language, 'description');
  
  const innovativeTitle = getTranslation(translations.whyChooseUs[language].features.innovative, language, 'title');
  const innovativeDesc = getTranslation(translations.whyChooseUs[language].features.innovative, language, 'description');
  
  const teamTitle = getTranslation(translations.whyChooseUs[language].features.team, language, 'title');
  const teamDesc = getTranslation(translations.whyChooseUs[language].features.team, language, 'description');
  
  const resultsTitle = getTranslation(translations.whyChooseUs[language].features.results, language, 'title');
  const resultsDesc = getTranslation(translations.whyChooseUs[language].features.results, language, 'description');

  const features = [
    {
      icon: <Shield size={24} className="text-primary" />,
      title: expertiseTitle,
      description: expertiseDesc
    },
    {
      icon: <Zap size={24} className="text-primary" />,
      title: innovativeTitle,
      description: innovativeDesc
    },
    {
      icon: <Users size={24} className="text-primary" />,
      title: teamTitle,
      description: teamDesc
    },
    {
      icon: <BarChart size={24} className="text-primary" />,
      title: resultsTitle,
      description: resultsDesc
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white -z-10"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full mix-blend-multiply blur-3xl -z-10 opacity-75"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-50 to-blue-50 rounded-full mix-blend-multiply blur-3xl -z-10 opacity-75"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              {title}
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
              {subtitle}
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
              {description}
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
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
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
                alt="Team collaboration" 
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg animate-slide-in-bottom" style={{ animationDelay: '600ms' }}>
                <div className="grid grid-cols-3 divide-x divide-gray-200">
                  <div className="px-4 text-center">
                    <div className="text-3xl font-bold text-primary">200+</div>
                    <div className="text-sm text-gray-600 mt-1">{clientsLabel}</div>
                  </div>
                  <div className="px-4 text-center">
                    <div className="text-3xl font-bold text-primary">98%</div>
                    <div className="text-sm text-gray-600 mt-1">{satisfactionLabel}</div>
                  </div>
                  <div className="px-4 text-center">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-sm text-gray-600 mt-1">{experienceLabel}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -right-5 -top-5 w-24 h-24 bg-primary/10 rounded-full z-10 animate-float"></div>
            <div className="absolute -left-5 -bottom-5 w-20 h-20 bg-accent/10 rounded-full z-10 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
