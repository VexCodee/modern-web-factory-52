
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const HeroSection = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
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
  
  useEffect(() => {
    if (!heroRef.current) return;
    const elements = heroRef.current.querySelectorAll('.animate-on-scroll');
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
    
    elements.forEach(el => observer.observe(el));
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  const handleScroll = () => {
    const serviceSection = document.querySelector('#services');
    if (serviceSection) {
      serviceSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-16 md:pt-24 pb-16">
      {/* Background decorative elements */}
      <div ref={blobRef} className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-blue-50 to-purple-50 shape-blob -z-10 opacity-70 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mix-blend-multiply blur-3xl -z-10 opacity-60"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-10 z-10">
            <div className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 inline-block mb-6 font-medium animate-fade-in hero-badge">
              {t('hero.innovativeIt')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in" style={{
            animationDelay: '200ms'
          }}>
              {t('hero.transformBusiness')}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-xl animate-fade-in" style={{
            animationDelay: '400ms'
          }}>
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{
            animationDelay: '600ms'
          }}>
              <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-full font-medium flex items-center justify-center transition-all hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1">
                {t('hero.getStarted')}
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/services" className="bg-white text-gray-800 border border-gray-200 px-8 py-3 rounded-full font-medium flex items-center justify-center transition-all hover:bg-gray-50 hover:shadow hover:-translate-y-1">
                {t('hero.ourServices')}
              </Link>
            </div>
            
            {/* Animated scroll indicator - updated for better visibility */}
            <div className="hidden md:flex items-center mt-12 justify-center text-gray-500 cursor-pointer animate-fade-in" onClick={handleScroll}>
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium mb-2">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-1">
                  <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-[scrollDown_2s_ease-in-out_infinite]"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative flex justify-center z-10">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-primary opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-pulse-subtle hero-decorative-element"></div>
              <div className="absolute top-20 -right-4 w-72 h-72 bg-accent opacity-20 rounded-full mix-blend-multiply filter blur-xl animate-pulse-subtle hero-decorative-element" style={{
              animationDelay: '2s'
            }}></div>
              
              <div className="relative glass-card rounded-2xl p-5 animate-scale-in hero-image-card" style={{
              animationDelay: '200ms'
            }}>
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Digital Transformation" className="rounded-xl shadow-lg w-full" />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg animate-slide-in-bottom hero-stat-card" style={{
                animationDelay: '600ms'
              }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{t('hero.innovation')}</p>
                      <p className="text-xs text-gray-500">{t('hero.futureReady')}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 bg-white rounded-lg p-4 shadow-lg animate-slide-in-bottom hero-stat-card" style={{
                animationDelay: '800ms'
              }}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{t('hero.performance')}</p>
                      <p className="text-xs text-gray-500">{t('hero.optimized')}</p>
                    </div>
                  </div>
                </div>
                
                {/* New popup card element */}
                <div className="absolute -top-12 right-10 bg-white rounded-lg p-3 shadow-lg animate-fade-in animate-on-scroll opacity-0" style={{
                animationDelay: '1000ms'
              }}>
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <img src="https://randomuser.me/api/portraits/women/32.jpg" className="w-6 h-6 rounded-full border-2 border-white" alt="User" />
                    </div>
                    <p className="text-xs font-medium">6+ happy clients this month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted by section */}
        <div className="mt-24 text-center animate-on-scroll opacity-0">
          <p className="text-sm font-medium text-gray-500 mb-6">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 10H10V20H20V10Z" fill="#3B82F6" />
                <path d="M40 10H30V20H40V10Z" fill="#3B82F6" />
                <path d="M60 10H50V20H60V10Z" fill="#3B82F6" />
                <path d="M80 10H70V20H80V10Z" fill="#3B82F6" />
                <path d="M100 10H90V20H100V10Z" fill="#3B82F6" />
                <path d="M110 10H105V15H110V10Z" fill="#3B82F6" />
                <path d="M25 15H15V25H25V15Z" fill="#8B5CF6" />
                <path d="M45 15H35V25H45V15Z" fill="#8B5CF6" />
                <path d="M65 15H55V25H65V15Z" fill="#8B5CF6" />
                <path d="M85 15H75V25H85V15Z" fill="#8B5CF6" />
                <path d="M105 15H95V25H105V15Z" fill="#8B5CF6" />
              </svg>
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="15" r="10" fill="#3B82F6" />
                <rect x="35" y="5" width="20" height="20" rx="10" fill="#8B5CF6" />
                <path d="M85 5L95 25L75 25L85 5Z" fill="#3B82F6" />
                <path d="M105 5H115V25H105V5Z" fill="#8B5CF6" />
                <path d="M65 5L70 25L60 25L65 5Z" fill="#3B82F6" />
              </svg>
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="10" fill="#3B82F6" />
                <circle cx="45" cy="15" r="10" fill="#8B5CF6" />
                <circle cx="75" cy="15" r="10" fill="#3B82F6" />
                <circle cx="105" cy="15" r="10" fill="#8B5CF6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
