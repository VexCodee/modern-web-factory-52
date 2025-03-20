
import React, { useEffect, useRef } from 'react';
import { UserPlus, Globe, Palette, Wrench, Bot, BarChart3, Share2, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  index
}) => {
  const { t } = useLanguage();
  
  return (
    <div 
      className="service-card-new group relative p-1 rounded-2xl transition-all duration-500 bg-gradient-to-br from-transparent to-transparent hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <Card className="h-full group-hover:border-transparent transition-all duration-300 relative z-10 overflow-hidden">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur"></div>
        
        <CardContent className="p-6 relative z-10 bg-white dark:bg-gray-800">
          <div className="w-14 h-14 flex items-center justify-center mb-5 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 text-indigo-600 transition-all group-hover:text-white group-hover:from-blue-500 group-hover:to-indigo-600 dark:from-blue-900/40 dark:to-indigo-900/40 dark:text-blue-300">
            {icon}
          </div>
          
          <h3 className="text-xl font-display font-semibold mb-3 transition-all group-hover:text-indigo-700 dark:group-hover:text-indigo-300 dark:text-white">{title}</h3>
          
          <p className="text-gray-600 leading-relaxed mb-6 dark:text-gray-300">{description}</p>
          
          <div className="pt-2 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <Link 
              to="/services" 
              className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center text-sm dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              {t('services.learnMore')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ServiceSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Define services
  const services = [
    {
      icon: <UserPlus size={24} />,
      title: t('services.items.outsourcing.title'),
      description: t('services.items.outsourcing.description')
    }, 
    {
      icon: <Globe size={24} />,
      title: t('services.items.webDev.title'),
      description: t('services.items.webDev.description')
    },
    {
      icon: <Palette size={24} />,
      title: t('services.items.graphic.title'),
      description: t('services.items.graphic.description')
    },
    {
      icon: <Wrench size={24} />,
      title: t('services.items.hardware.title'),
      description: t('services.items.hardware.description')
    },
    {
      icon: <Bot size={24} />,
      title: t('services.items.ai.title'), 
      description: t('services.items.ai.description')
    },
    {
      icon: <BarChart3 size={24} />,
      title: t('services.items.marketing.title'),
      description: t('services.items.marketing.description')
    },
    {
      icon: <Share2 size={24} />,
      title: t('services.items.social.title'),
      description: t('services.items.social.description')
    },
    {
      icon: <ClipboardList size={24} />,
      title: t('services.items.project.title'),
      description: t('services.items.project.description')
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const serviceCards = entry.target.querySelectorAll('.service-card-new');
          serviceCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in');
              card.classList.remove('opacity-0');
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
    <section id="services" className="py-20 md:py-28 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute left-0 h-24 w-full bg-gradient-to-b from-white to-transparent -top-24 z-10 dark:from-gray-900"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-blue-50 -z-10 dark:from-gray-900 dark:to-gray-800"></div>
      <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-blue-100/40 blur-3xl -z-5 dark:bg-blue-900/10"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-indigo-100/40 blur-3xl -z-5 dark:bg-indigo-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
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
            <div key={index} className="opacity-0 service-card-new">
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
                index={index} 
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{
          animationDelay: '900ms'
        }}>
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-full transition-all hover:-translate-y-1 hover:shadow-lg"
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
