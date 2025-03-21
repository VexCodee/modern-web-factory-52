
import React, { useEffect, useRef } from 'react';
import { UserPlus, Globe, Palette, Wrench, ArrowRight, Lock, Database, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import ServiceCard from './ServiceCard';

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
      buttonBgColor: "bg-blue-600",
      benefits: ["24/7", "99%", "+50%"]
    }, 
    {
      icon: <Globe size={24} className="text-white" />,
      titleKey: "services.items.webDev.title",
      descriptionKey: "services.items.webDev.description",
      iconBgColor: "bg-indigo-500",
      buttonBgColor: "bg-indigo-600",
      benefits: ["24/7", "99%", "+50%"]
    }, 
    {
      icon: <Palette size={24} className="text-white" />,
      titleKey: "services.items.graphic.title",
      descriptionKey: "services.items.graphic.description",
      iconBgColor: "bg-purple-500",
      buttonBgColor: "bg-purple-600",
      benefits: ["24/7", "99%", "+50%"]
    }, 
    {
      icon: <Wrench size={24} className="text-white" />,
      titleKey: "services.items.hardware.title",
      descriptionKey: "services.items.hardware.description",
      iconBgColor: "bg-orange-500",
      buttonBgColor: "bg-orange-600",
      benefits: ["24/7", "99%", "+50%"]
    }, 
    {
      icon: <Lock size={24} className="text-white" />,
      titleKey: "whyChooseUs.features.security.title",
      descriptionKey: "services.items.outsourcing.description",
      iconBgColor: "bg-teal-500",
      buttonBgColor: "bg-teal-600",
      benefits: ["24/7", "99%", "+50%"]
    }, 
    {
      icon: <Database size={24} className="text-white" />,
      titleKey: "technologies.cloud.title",
      descriptionKey: "technologies.cloud.description",
      iconBgColor: "bg-emerald-500",
      buttonBgColor: "bg-emerald-600",
      benefits: ["24/7", "99%", "+50%"]
    }, 
    {
      icon: <LineChart size={24} className="text-white" />,
      titleKey: "services.items.ai.title",
      descriptionKey: "services.items.ai.description",
      iconBgColor: "bg-rose-500",
      buttonBgColor: "bg-rose-600",
      benefits: ["24/7", "99%", "+50%"]
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
    <section id="services" ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden bg-white">
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
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            {t('services.description')}
          </p>
        </div>

        {/* Services grid - desktop view */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
          {services.map((service, index) => (
            <div key={index} className="service-card opacity-0 h-full">
              <ServiceCard 
                icon={service.icon} 
                title={t(service.titleKey)} 
                description={t(service.descriptionKey)}
                benefits={service.benefits}
                iconBgColor={service.iconBgColor}
                borderColor=""
                dotColor=""
                buttonBgColor={service.buttonBgColor}
                delay={index * 50}
              />
            </div>
          ))}
        </div>

        {/* Mobile carousel view */}
        <div className="md:hidden w-full pt-4">
          <Carousel className="w-full" opts={{
            align: "start",
            loop: true
          }} plugins={[autoplayPlugin.current]}>
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="basis-full h-[380px] pt-2">
                  <div className="p-1 h-full service-card">
                    <ServiceCard 
                      icon={service.icon} 
                      title={t(service.titleKey)} 
                      description={t(service.descriptionKey)}
                      benefits={service.benefits}
                      iconBgColor={service.iconBgColor}
                      borderColor=""
                      dotColor=""
                      buttonBgColor={service.buttonBgColor}
                      delay={index * 50}
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
