
import React, { useEffect, useRef } from 'react';
import { UserPlus, Globe, Palette, Wrench, ArrowRight, Lock, Database, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  learnMoreText: string;
  iconBgColor: string;
  gradientColors: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  learnMoreText,
  iconBgColor,
  gradientColors
}) => {
  return (
    <Card className="overflow-hidden border-0 shadow-md transition-all duration-300 h-full hover:shadow-xl group">
      <CardContent className="p-0 h-full">
        <div className="flex flex-col h-full">
          {/* Top gradient header */}
          <div className={`h-2 w-full ${gradientColors}`}></div>
          
          {/* Card body with icon and content */}
          <div className="p-6 flex flex-col h-full">
            {/* Icon with background */}
            <div className={`${iconBgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
              <div className="text-white">
                {icon}
              </div>
            </div>
            
            {/* Title and description */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">{description}</p>
            
            {/* Button/link at the bottom */}
            <div className="pt-2 mt-auto">
              <Link 
                to="/services" 
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-all duration-300"
                aria-label={`${learnMoreText} ${title}`}
              >
                <ArrowRight className="h-4 w-4 mr-2 transition-all duration-300 group-hover:translate-x-1" />
                <span>{learnMoreText}</span>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ServiceSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Configure autoplay plugin
  const autoplayPlugin = useRef(Autoplay({
    delay: 4000,
    stopOnInteraction: false
  }));

  // Define services with translation keys, colors and gradients
  const services = [
    {
      icon: <UserPlus size={24} className="text-white" />,
      titleKey: "services.items.outsourcing.title",
      descriptionKey: "services.items.outsourcing.description",
      iconBgColor: "bg-blue-500",
      gradientColors: "bg-gradient-to-r from-blue-400 to-blue-600"
    }, 
    {
      icon: <Globe size={24} className="text-white" />,
      titleKey: "services.items.webDev.title",
      descriptionKey: "services.items.webDev.description",
      iconBgColor: "bg-indigo-500",
      gradientColors: "bg-gradient-to-r from-indigo-400 to-indigo-600"
    }, 
    {
      icon: <Palette size={24} className="text-white" />,
      titleKey: "services.items.graphic.title",
      descriptionKey: "services.items.graphic.description",
      iconBgColor: "bg-purple-500",
      gradientColors: "bg-gradient-to-r from-purple-400 to-purple-600"
    }, 
    {
      icon: <Wrench size={24} className="text-white" />,
      titleKey: "services.items.hardware.title",
      descriptionKey: "services.items.hardware.description",
      iconBgColor: "bg-orange-500",
      gradientColors: "bg-gradient-to-r from-orange-400 to-amber-500"
    }, 
    {
      icon: <Lock size={24} className="text-white" />,
      titleKey: "whyChooseUs.features.security.title",
      descriptionKey: "services.items.outsourcing.description",
      iconBgColor: "bg-teal-500",
      gradientColors: "bg-gradient-to-r from-teal-400 to-teal-600"
    }, 
    {
      icon: <Database size={24} className="text-white" />,
      titleKey: "technologies.cloud.title",
      descriptionKey: "technologies.cloud.description",
      iconBgColor: "bg-emerald-500",
      gradientColors: "bg-gradient-to-r from-emerald-400 to-emerald-600"
    }, 
    {
      icon: <LineChart size={24} className="text-white" />,
      titleKey: "services.items.ai.title",
      descriptionKey: "services.items.ai.description",
      iconBgColor: "bg-rose-500",
      gradientColors: "bg-gradient-to-r from-rose-400 to-rose-600"
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

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden bg-neutral-50">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950/10 dark:to-purple-950/10"></div>
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium inline-block transform transition-all hover:scale-105 hover:shadow-sm animate-fade-in">
            {t('services.title')}
          </span>
          
          <h2 className="mt-6 text-3xl md:text-4xl font-bold animate-fade-in relative inline-block dark:text-gray-800" style={{
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
            {t('services.description')}
          </p>
        </div>

        {/* Adding padding-top to prevent cards from being cut off when they hover and transform upwards */}
        <div className="w-full pt-4">
          <Carousel className="w-full" opts={{
            align: "start",
            loop: true
          }} plugins={[autoplayPlugin.current]}>
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 h-[340px] pt-2">
                  <div className="p-1 h-full">
                    <ServiceCard 
                      icon={service.icon} 
                      title={t(service.titleKey)} 
                      description={t(service.descriptionKey)}
                      learnMoreText={learnMoreText}
                      iconBgColor={service.iconBgColor}
                      gradientColors={service.gradientColors}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static left-0 translate-y-0 mr-4 transition-all duration-300 hover:-translate-x-1 bg-white hover:bg-gray-50 border border-gray-200" />
              <CarouselNext className="relative static right-0 translate-y-0 transition-all duration-300 hover:translate-x-1 bg-white hover:bg-gray-50 border border-gray-200" />
            </div>
          </Carousel>
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{
          animationDelay: '900ms'
        }}>
          <Link to="/services">
            <Button variant="default" size="lg" className="group">
              {t('services.viewAll')}
              <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
