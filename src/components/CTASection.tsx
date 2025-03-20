
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CTASection = () => {
  const { language, translations } = useLanguage();
  const t = translations.cta[language];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90"></div>
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Technology background" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 animate-fade-in">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-5 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Link 
              to="/contact" 
              className="bg-white text-primary px-8 py-3.5 rounded-full font-medium flex items-center justify-center transition-all hover:bg-gray-100 hover:shadow-lg"
            >
              {t.getStarted}
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/portfolio" 
              className="border border-white/30 bg-white/10 text-white px-8 py-3.5 rounded-full font-medium flex items-center justify-center backdrop-blur-sm transition-all hover:bg-white/20"
            >
              {t.portfolio}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -left-20 top-10 w-72 h-72 rounded-full border border-white/20 animate-rotate-slow opacity-40"></div>
      <div className="absolute -right-20 bottom-10 w-72 h-72 rounded-full border border-white/20 animate-rotate-slow opacity-40" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default CTASection;
