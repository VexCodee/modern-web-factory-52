
import React, { useEffect, useRef } from 'react';
import { UserPlus, Globe, Palette, Wrench, Bot, Database, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import ServiceCard from './ServiceCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Slider } from '@/components/ui/slider';

const ServiceSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Configure autoplay plugin with faster transitions for better UX
  const autoplayPlugin = useRef(Autoplay({
    delay: 3000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  }));

  // Define services with translation keys, colors and gradients
  const services = [
    {
      icon: <Globe size={24} className="text-white" />,
      titleKey: "Tworzenie Stron WWW",
      descriptionKey: "Nowoczesne i responsywne strony internetowe dostosowane do Twoich potrzeb",
      iconBgColor: "bg-blue-500",
      buttonBgColor: "bg-blue-600",
      benefits: ["Responsywny design", "Optymalizacja SEO"],
      link: "/services"
    }, 
    {
      icon: <Code size={24} className="text-white" />,
      titleKey: "Programowanie na Zlecenie",
      descriptionKey: "Tworzenie dedykowanego oprogramowania dla Twojej firmy",
      iconBgColor: "bg-indigo-500",
      buttonBgColor: "bg-indigo-600",
      benefits: ["Indywidualne rozwiązania", "Najnowsze technologie"],
      link: "/services"
    }, 
    {
      icon: <UserPlus size={24} className="text-white" />,
      titleKey: "Outsourcing IT",
      descriptionKey: "Kompleksowe wsparcie informatyczne dla Twojego biznesu",
      iconBgColor: "bg-purple-500",
      buttonBgColor: "bg-purple-600",
      benefits: ["Obniżenie kosztów", "Indywidualne podejście"],
      link: "/services"
    }, 
    {
      icon: <Palette size={24} className="text-white" />,
      titleKey: "Marketing i Grafika",
      descriptionKey: "Identyfikacja wizualna i strategie marketingowe online",
      iconBgColor: "bg-orange-500",
      buttonBgColor: "bg-orange-600",
      benefits: ["Branding", "UX/UI Design"],
      link: "/services"
    }, 
    {
      icon: <Wrench size={24} className="text-white" />,
      titleKey: "Naprawa Sprzętu",
      descriptionKey: "Serwis i konserwacja komputerów oraz urządzeń peryferyjnych",
      iconBgColor: "bg-teal-500",
      buttonBgColor: "bg-teal-600",
      benefits: ["Serwis sprzętu", "Diagnostyka problemów"],
      link: "/services"
    }, 
    {
      icon: <Bot size={24} className="text-white" />,
      titleKey: "Automatyzacja AI",
      descriptionKey: "Wykorzystanie sztucznej inteligencji w procesach biznesowych",
      iconBgColor: "bg-emerald-500",
      buttonBgColor: "bg-emerald-600",
      benefits: ["Analityka danych", "Automatyzacja procesów"],
      link: "/services"
    }
  ];

  // IntersectionObserver setup
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

  // Get "Learn more" text in current language
  const learnMoreText = language === 'pl' ? 'Dowiedz się więcej' : 
                        language === 'en' ? 'Learn more' : 
                        'Mehr erfahren';

  const handleScroll = () => {
    const showcaseSection = document.getElementById('innovation');
    showcaseSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-20 relative overflow-hidden bg-white">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent opacity-30"></div>
        
        {/* Animated floating particles */}
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-blue-200 mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{
          animationDuration: '15s'
        }}></div>
        <div className="absolute top-40 right-10 w-32 h-32 rounded-full bg-purple-200 mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{
          animationDuration: '20s',
          animationDelay: '2s'
        }}></div>
        <div className="absolute bottom-10 left-1/3 w-36 h-36 rounded-full bg-indigo-200 mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{
          animationDuration: '18s',
          animationDelay: '1s'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium inline-block transform transition-all hover:scale-105 hover:shadow-sm animate-fade-in">
            {t('services.title')}
          </span>
          
          <h2 className="mt-6 text-3xl md:text-4xl font-bold animate-fade-in relative inline-block text-slate-800" style={{
            animationDelay: '100ms'
          }}>
            {t('services.subtitle')}
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent transform scale-x-0 transition-transform duration-700 group-hover:scale-x-100 animate-scale-in" style={{
              animationDelay: '400ms'
            }}></span>
          </h2>
          
          <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{
            animationDelay: '200ms'
          }}>
            Oferuję szeroki zakres usług IT, od tworzenia stron internetowych, przez programowanie na zlecenie, outsourcing IT, aż po marketing, grafikę, naprawę sprzętu i automatyzację procesów z wykorzystaniem AI.
          </p>
        </div>

        {/* Enhanced carousel with improved UX and interactions */}
        <div className="w-full pt-4">
          <Carousel 
            className="w-full" 
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps"
            }} 
            plugins={[autoplayPlugin.current]}
          >
            <CarouselContent className="-ml-4 cursor-grab active:cursor-grabbing">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-[400px] transition-opacity duration-300 hover:opacity-100">
                  <div className="h-full service-card opacity-0">
                    <ServiceCard 
                      icon={service.icon} 
                      title={service.titleKey} 
                      description={service.descriptionKey}
                      benefits={service.benefits}
                      iconBgColor={service.iconBgColor}
                      borderColor=""
                      dotColor=""
                      buttonBgColor={service.buttonBgColor}
                      delay={index * 50}
                      link={service.link}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation controls with improved styling */}
            <div className="flex items-center justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static left-0 translate-y-0 mr-2 transition-all duration-300 hover:-translate-x-1 bg-white hover:bg-gray-50 border border-gray-200" />
              <CarouselNext className="relative static right-0 translate-y-0 transition-all duration-300 hover:translate-x-1 bg-white hover:bg-gray-50 border border-gray-200" />
            </div>
          </Carousel>
        </div>

        <div className="mt-10 text-center animate-fade-in" style={{
          animationDelay: '900ms'
        }}>
          <Link to="/services">
            <Button variant="default" size="lg" className="group">
              {t('services.viewAll')}
              <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
        
        {/* Scroll indicator with reduced spacing */}
        <div className="flex justify-center mt-8 mb-8">
          <div 
            className="flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
            onClick={handleScroll}
          >
            <span className="text-sm text-gray-500">{t('common.scrollDown')}</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-1">
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
        
        {/* Trusted by section updated with VexVision branding */}
        <div className="mt-4 text-center">
          <p className="text-sm font-medium text-gray-500 mb-6">{t('common.trustedBy')}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <img src="/lovable-uploads/82a5cc93-14c6-48ec-9d73-5f7c136ef23d.png" alt="Client Logo" className="h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="/lovable-uploads/76c04e32-9377-4978-856c-d9faa1c28501.png" alt="Client Logo" className="h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="/lovable-uploads/59018bb8-ec3a-4822-bd48-b747a31af280.png" alt="Client Logo" className="h-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="/lovable-uploads/338eb6dc-d188-4e3d-9c14-b113b150ed9d.png" alt="Client Logo" className="h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
