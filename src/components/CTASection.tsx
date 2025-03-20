
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!ctaRef.current) return;
    
    const handleScroll = () => {
      const el = ctaRef.current;
      if (!el) return;
      
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (isVisible) {
        el.classList.add('cta-visible');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section 
      ref={ctaRef}
      className="py-20 relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700"
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animation: 'float 15s infinite ease-in-out'
              }}
            ></div>
          ))}
        </div>
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Technology background" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-xl transform transition-all duration-700 translate-y-12 opacity-0 cta-visible:translate-y-0 cta-visible:opacity-100">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                {t('cta.title')}
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                {t('cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-5">
                <Link 
                  to="/contact" 
                  className="bg-white text-primary px-8 py-3.5 rounded-full font-medium flex items-center justify-center transition-all hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1"
                >
                  {t('cta.getStarted')}
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link 
                  to="/portfolio" 
                  className="border border-white/30 bg-white/10 text-white px-8 py-3.5 rounded-full font-medium flex items-center justify-center backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-1"
                >
                  {t('cta.portfolio')}
                </Link>
              </div>
              
              {/* Animated dots */}
              <div className="mt-12 flex justify-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
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
