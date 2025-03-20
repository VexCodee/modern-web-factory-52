
import React, { useEffect, useRef, useState } from 'react';
import { UserPlus, Globe, Palette, Wrench, ArrowRight, Lock, Database, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-100 p-6 h-full hover:shadow-md transition-all duration-300 flex flex-col transform hover:-translate-y-2 hover:border-primary/20">
      <div className="mb-5">
        <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center transition-all duration-300 hover:bg-indigo-100 group">
          <div className="transition-transform duration-500 group-hover:rotate-12">
            {icon}
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-3 dark:text-gray-800">{title}</h3>
      
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      
      <div className="pt-2 mt-auto">
        <Link 
          to="/services" 
          className="text-indigo-500 hover:text-indigo-700 font-medium inline-flex items-center text-sm overflow-hidden group"
          aria-label={`Zobacz więcej o ${title}`}
        >
          <span className="relative inline-flex items-center">
            <span className="mr-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
              <ArrowRight className="h-4 w-4" />
            </span>
            <span className="opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs transition-all duration-300 ease-in-out">
              Dowiedz się więcej
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

const ServiceSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Configure autoplay plugin
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

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
    },
    {
      icon: <Lock size={24} className="text-indigo-600" />,
      title: "Bezpieczeństwo IT",
      description: "Kompleksowe rozwiązania chroniące Twoją firmę przed cyberzagrożeniami, audyty bezpieczeństwa i wdrażanie polityk bezpieczeństwa."
    },
    {
      icon: <Database size={24} className="text-indigo-600" />,
      title: "Usługi w Chmurze",
      description: "Wdrażanie i zarządzanie rozwiązaniami chmurowymi, które zwiększają elastyczność, skalowalność i bezpieczeństwo Twojej infrastruktury IT."
    },
    {
      icon: <LineChart size={24} className="text-indigo-600" />,
      title: "Analityka Danych",
      description: "Zaawansowana analiza danych biznesowych, dostarczanie wnikliwych raportów i rekomendacji dla świadomego podejmowania decyzji."
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
      {/* Background with animated gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950/10 dark:to-purple-950/10"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent opacity-30"></div>
        
        {/* Animated floating particles */}
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-blue-200 mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-40 right-10 w-32 h-32 rounded-full bg-purple-200 mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-36 h-36 rounded-full bg-indigo-200 mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDuration: '18s', animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium inline-block transform transition-all hover:scale-105 hover:shadow-sm animate-fade-in">
            {t('services.title')}
          </span>
          
          <h2 className="mt-6 text-3xl md:text-4xl font-bold animate-fade-in relative inline-block dark:text-gray-800" style={{
            animationDelay: '100ms'
          }}>
            {t('services.subtitle')}
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent transform scale-x-0 transition-transform duration-700 group-hover:scale-x-100 animate-scale-in" style={{ animationDelay: '400ms' }}></span>
          </h2>
          
          <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{
            animationDelay: '200ms'
          }}>
            {t('services.description')}
          </p>
        </div>

        <div className="w-full">
          <Carousel 
            className="w-full" 
            opts={{ 
              align: "start",
              loop: true
            }} 
            plugins={[autoplayPlugin.current]}
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-[420px]">
                  <div className="p-1 h-full transform transition-all duration-500 hover:scale-[1.02]">
                    <ServiceCard 
                      icon={service.icon} 
                      title={service.title} 
                      description={service.description} 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static left-0 translate-y-0 mr-2 transition-all duration-300 hover:-translate-x-1" />
              <CarouselNext className="relative static right-0 translate-y-0 transition-all duration-300 hover:translate-x-1" />
            </div>
          </Carousel>
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{
          animationDelay: '900ms'
        }}>
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-all hover:shadow-lg relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              {t('services.viewAll')}
              <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
