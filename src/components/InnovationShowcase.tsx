
import React, { useEffect, useRef } from 'react';
import { Zap, Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card } from './ui/card';

const InnovationCard = ({
  title,
  description,
  position,
  icon,
  className = ''
}) => {
  return (
    <div className={`absolute ${position} z-10 shadow-lg rounded-xl p-3 innovation-card ${className}`}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

const AvatarGroup = () => {
  return (
    <div className="absolute top-8 right-8 z-10 bg-white dark:bg-gray-800 rounded-full px-3 py-1.5 shadow-lg flex items-center gap-2">
      <div className="flex -space-x-2">
        <Avatar className="border-2 border-white w-7 h-7">
          <AvatarImage src="https://randomuser.me/api/portraits/women/30.jpg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-white w-7 h-7">
          <AvatarImage src="https://randomuser.me/api/portraits/men/46.jpg" />
          <AvatarFallback>MJ</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-white w-7 h-7">
          <AvatarImage src="https://randomuser.me/api/portraits/women/15.jpg" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
      </div>
      <span className="text-sm font-medium dark:text-white">18+ joined this week</span>
    </div>
  );
};

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
    <section ref={showcaseRef} className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column with image and floating cards */}
          <div className="relative order-2 lg:order-1">
            {/* Main image with device mockup */}
            <div className="relative bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl overflow-hidden animate-on-scroll opacity-0">
              <img 
                src="public/lovable-uploads/82a5cc93-14c6-48ec-9d73-5f7c136ef23d.png" 
                alt="Innovation showcase" 
                className="w-full h-auto rounded-xl z-0" 
              />
              
              {/* Floating innovation card - top left */}
              <InnovationCard 
                title="Wydajność" 
                description="Zoptymalizowane procesy" 
                position="top-8 left-8" 
                icon={<Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />} 
              />
              
              {/* Additional card with avatars - top right */}
              <AvatarGroup />
              
              {/* Additional innovation card - bottom right */}
              <InnovationCard 
                title="Innowacja" 
                description="Rozwiązania przyszłości" 
                position="bottom-8 right-8" 
                icon={<Check className="h-5 w-5 text-blue-600 dark:text-blue-400" />} 
                className="bg-white/90 backdrop-blur-sm dark:bg-gray-800/90" 
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-4 w-8 h-8 bg-purple-200 rounded-full blur-xl dark:bg-purple-900/30"></div>
            <div className="absolute bottom-1/4 -right-4 w-8 h-8 bg-blue-200 rounded-full blur-xl dark:bg-blue-900/30"></div>
          </div>
          
          {/* Right column with content */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-on-scroll opacity-0 dark:text-white">
                {t('innovation.heading')}
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 animate-on-scroll opacity-0 dark:text-gray-300" style={{
                animationDelay: '100ms'
              }}>
                {t('innovation.description')}
              </p>
              
              <ul className="space-y-5 mb-10">
                {benefits.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center animate-on-scroll opacity-0 dark:text-white" 
                    style={{
                      animationDelay: `${200 + index * 100}ms`
                    }}
                  >
                    <div className="mr-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 dark:bg-green-900 dark:text-green-300">
                        <Check size={16} />
                      </div>
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/services" 
                className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium transition-all animate-on-scroll opacity-0 dark:bg-indigo-700 dark:hover:bg-indigo-600" 
                style={{
                  animationDelay: '600ms'
                }}
              >
                {t('innovation.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationShowcase;
