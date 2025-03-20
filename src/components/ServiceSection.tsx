
import React, { useEffect, useRef } from 'react';
import { UserPlus, Globe, Palette, Wrench, Bot, BarChart3, Share2, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  delay
}) => {
  const { t } = useLanguage();
  
  return (
    <Card 
      className="service-card h-full bg-white opacity-0 translate-y-4 group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white overflow-hidden"
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      <CardContent className="p-6">
        <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5 text-blue-600 transition-all group-hover:bg-primary group-hover:text-white dark:bg-blue-900 dark:text-blue-300">
          {icon}
        </div>
        <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4 dark:text-gray-300">{description}</p>
        
        <div className="mt-auto pt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <Link 
            to="/services" 
            className="text-primary font-medium hover:underline inline-flex items-center text-sm"
          >
            {t('services.learnMore')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

const ServiceSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Define services using the t function
  const services = [
    {
      icon: <UserPlus size={24} />,
      title: t('services.items.outsourcing.title'),
      description: t('services.items.outsourcing.description'),
      delay: 100
    }, 
    {
      icon: <Globe size={24} />,
      title: t('services.items.webDev.title'),
      description: t('services.items.webDev.description'),
      delay: 200
    },
    {
      icon: <Palette size={24} />,
      title: t('services.items.graphic.title'),
      description: t('services.items.graphic.description'),
      delay: 300
    },
    {
      icon: <Wrench size={24} />,
      title: t('services.items.hardware.title'),
      description: t('services.items.hardware.description'),
      delay: 400
    },
    {
      icon: <Bot size={24} />,
      title: t('services.items.ai.title'), 
      description: t('services.items.ai.description'),
      delay: 500
    },
    {
      icon: <BarChart3 size={24} />,
      title: t('services.items.marketing.title'),
      description: t('services.items.marketing.description'),
      delay: 600
    },
    {
      icon: <Share2 size={24} />,
      title: t('services.items.social.title'),
      description: t('services.items.social.description'),
      delay: 700
    },
    {
      icon: <ClipboardList size={24} />,
      title: t('services.items.project.title'),
      description: t('services.items.project.description'),
      delay: 800
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const serviceCards = entry.target.querySelectorAll('.service-card');
          serviceCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in');
              card.classList.remove('opacity-0', 'translate-y-4');
            }, index * 100);
          });
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white service-section dark:from-gray-900 dark:to-gray-800" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute left-0 h-24 w-full bg-gradient-to-b from-white to-transparent -top-24 z-10 dark:from-gray-900"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
            {t('services.title')}
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-fade-in dark:text-white" style={{
            animationDelay: '100ms'
          }}>
            {t('services.subtitle')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 animate-fade-in dark:text-gray-300" style={{
            animationDelay: '200ms'
          }}>
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
                delay={service.delay} 
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{
          animationDelay: '900ms'
        }}>
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            {t('services.viewAll')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
