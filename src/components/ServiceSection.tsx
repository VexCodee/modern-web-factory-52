
import React, { useEffect, useRef } from 'react';
import { UserPlus, Globe, Palette, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

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
  return (
    <div 
      className="bg-white rounded-lg border border-gray-100 p-6 hover:shadow-md transition-all duration-300"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="mb-5">
        <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-3 dark:text-gray-800">{title}</h3>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="pt-2">
        <Link 
          to="/services" 
          className="text-indigo-500 hover:text-indigo-700 font-medium inline-flex items-center text-sm"
        >
          <ArrowRight className="h-4 w-4 mr-2" />
        </Link>
      </div>
    </div>
  );
};

const ServiceSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Define services to match the image
  const services = [
    {
      icon: <UserPlus size={24} className="text-indigo-600" />,
      title: "Outsourcing IT",
      description: "Wykorzystaj nasze doświadczenie w zarządzaniu operacjami IT, co pozwoli Ci skupić się na podstawowej działalności i strategii rozwoju."
    }, 
    {
      icon: <Globe size={24} className="text-indigo-600" />,
      title: "Tworzenie Stron WWW",
      description: "Niestandardowe strony internetowe i rozwiązania e-commerce z oszałamiającym designem, zoptymalizowaną wydajnością i płynnym doświadczeniem użytkownika."
    },
    {
      icon: <Palette size={24} className="text-indigo-600" />,
      title: "Projektowanie Graficzne",
      description: "Przyciągające wzrok treści wizualne, które wzmacniają tożsamość Twojej marki i skutecznie komunikują Twoje przesłanie."
    },
    {
      icon: <Wrench size={24} className="text-indigo-600" />,
      title: "Naprawa Sprzętu",
      description: "Profesjonalne usługi diagnozy i naprawy komputerów oraz sprzętu IT, minimalizujące przestoje w działalności Twojej firmy."
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
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50 -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
            {t('services.title')}
          </span>
          
          <h2 className="mt-6 text-3xl md:text-4xl font-bold animate-fade-in dark:text-gray-800" style={{
            animationDelay: '100ms'
          }}>
            {t('services.subtitle')}
          </h2>
          
          <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{
            animationDelay: '200ms'
          }}>
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="opacity-0 service-card">
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
            className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-all hover:shadow-lg"
          >
            {t('services.viewAll')}
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
