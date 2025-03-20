
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const HeroSection = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;
      
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.01;
      const moveY = (clientY - window.innerHeight / 2) * 0.01;
      
      blobRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16 md:pt-24 pb-16">
      {/* Background decorative elements */}
      <div 
        ref={blobRef}
        className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 shape-blob -z-10 opacity-70 dark:opacity-30 blur-3xl"
      ></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 mix-blend-multiply blur-3xl -z-10 opacity-60 dark:opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-10 z-10">
            <div className="text-sm rounded-full bg-primary/10 text-primary dark:bg-primary/20 px-4 py-1.5 inline-block mb-6 font-medium animate-fade-in hero-badge">
              {t('hero.innovativeIt')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in dark:text-white" style={{ animationDelay: '200ms' }}>
              {t('hero.transformBusiness')}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-xl animate-fade-in" style={{ animationDelay: '400ms' }}>
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <Link 
                to="/contact" 
                className="bg-primary text-white px-8 py-3 rounded-full font-medium flex items-center justify-center transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                {t('hero.getStarted')}
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 px-8 py-3 rounded-full font-medium flex items-center justify-center transition-all hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow"
              >
                {t('hero.ourServices')}
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative flex justify-center z-10">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-primary opacity-20 dark:opacity-10 rounded-full mix-blend-multiply filter blur-xl animate-pulse-subtle hero-decorative-element"></div>
              <div className="absolute top-20 -right-4 w-72 h-72 bg-accent opacity-20 dark:opacity-10 rounded-full mix-blend-multiply filter blur-xl animate-pulse-subtle hero-decorative-element" style={{ animationDelay: '2s' }}></div>
              
              <div className="relative glass-card rounded-2xl p-5 animate-scale-in hero-image-card" style={{ animationDelay: '200ms' }}>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Digital Transformation" 
                  className="rounded-xl shadow-lg w-full dark:opacity-90"
                />
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card/90 dark:backdrop-blur-md rounded-lg p-4 shadow-lg animate-slide-in-bottom hero-stat-card" style={{ animationDelay: '600ms' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm dark:text-white">{t('hero.innovation')}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{t('hero.futureReady')}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 bg-white dark:bg-card/90 dark:backdrop-blur-md rounded-lg p-4 shadow-lg animate-slide-in-bottom hero-stat-card" style={{ animationDelay: '800ms' }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm dark:text-white">{t('hero.performance')}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{t('hero.optimized')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
