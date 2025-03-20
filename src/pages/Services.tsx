
import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { ArrowRight, UserPlus, Globe, Palette, Wrench, Bot, BarChart3, Share2, ClipboardList, Code, Zap, Sparkles, FileText, Server, Lightbulb, Truck, CheckCircle2, Database, BookOpen, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const ServicePage = () => {
  const { t } = useLanguage();
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  // Animation observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in', 'opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Select all elements to animate
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Add floating animation for decorative dots
  useEffect(() => {
    const dots = document.querySelectorAll('.floating-dot');
    
    // Apply random starting positions
    dots.forEach((dot) => {
      const htmlDot = dot as HTMLElement;
      const randomX = Math.random() * 40 - 20; // -20px to 20px
      const randomY = Math.random() * 40 - 20; // -20px to 20px
      
      htmlDot.style.transform = `translate(${randomX}px, ${randomY}px)`;
      
      // Randomize animation parameters for each dot
      const duration = 3 + Math.random() * 4; // 3-7s duration
      const delay = Math.random() * 2; // 0-2s delay
      
      htmlDot.style.animation = `float-around ${duration}s ease-in-out ${delay}s infinite alternate`;
    });
    
    return () => {
      dots.forEach((dot) => {
        const htmlDot = dot as HTMLElement;
        htmlDot.style.animation = '';
      });
    };
  }, []);

  const services = [
    {
      icon: <UserPlus size={24} />,
      title: t('services.items.outsourcing.title'),
      description: t('services.items.outsourcing.description'),
      benefits: [
        t('services.items.outsourcing.benefits.cost'),
        t('services.items.outsourcing.benefits.expertise'),
        t('services.items.outsourcing.benefits.scalability'),
        t('services.items.outsourcing.benefits.focus')
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      color: "from-blue-500 to-indigo-600",
      delay: 100
    },
    {
      icon: <Globe size={24} />,
      title: t('services.items.webDev.title'),
      description: t('services.items.webDev.description'),
      benefits: [
        t('services.items.webDev.benefits.responsive'),
        t('services.items.webDev.benefits.seo'),
        t('services.items.webDev.benefits.secure'),
        t('services.items.webDev.benefits.custom')
      ],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      color: "from-purple-500 to-pink-500",
      delay: 200
    },
    {
      icon: <Palette size={24} />,
      title: t('services.items.graphic.title'),
      description: t('services.items.graphic.description'),
      benefits: [
        t('services.items.graphic.benefits.brand'),
        t('services.items.graphic.benefits.user'),
        t('services.items.graphic.benefits.creative'),
        t('services.items.graphic.benefits.cross')
      ],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80",
      color: "from-pink-500 to-rose-500",
      delay: 300
    },
    {
      icon: <Wrench size={24} />,
      title: t('services.items.hardware.title'),
      description: t('services.items.hardware.description'),
      benefits: [
        t('services.items.hardware.benefits.quick'),
        t('services.items.hardware.benefits.certified'),
        t('services.items.hardware.benefits.quality'),
        t('services.items.hardware.benefits.preventive')
      ],
      image: "https://images.unsplash.com/photo-1597424216809-3ba9864aee7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      color: "from-amber-500 to-orange-600",
      delay: 400
    },
    {
      icon: <Bot size={24} />,
      title: t('services.items.ai.title'),
      description: t('services.items.ai.description'),
      benefits: [
        t('services.items.ai.benefits.automation'),
        t('services.items.ai.benefits.analytics'),
        t('services.items.ai.benefits.nlp'),
        t('services.items.ai.benefits.ml')
      ],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      color: "from-teal-500 to-green-500",
      delay: 500
    },
    {
      icon: <BarChart3 size={24} />,
      title: t('services.items.marketing.title'),
      description: t('services.items.marketing.description'),
      benefits: [
        t('services.items.marketing.benefits.targeted'),
        t('services.items.marketing.benefits.performance'),
        t('services.items.marketing.benefits.content'),
        t('services.items.marketing.benefits.conversion')
      ],
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
      color: "from-red-500 to-orange-500",
      delay: 600
    },
    {
      icon: <Share2 size={24} />,
      title: t('services.items.social.title'),
      description: t('services.items.social.description'),
      benefits: [
        t('services.items.social.benefits.calendar'),
        t('services.items.social.benefits.engagement'),
        t('services.items.social.benefits.optimization'),
        t('services.items.social.benefits.analytics')
      ],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      color: "from-blue-400 to-blue-600",
      delay: 700
    },
    {
      icon: <ClipboardList size={24} />,
      title: t('services.items.project.title'),
      description: t('services.items.project.description'),
      benefits: [
        t('services.items.project.benefits.communication'),
        t('services.items.project.benefits.risk'),
        t('services.items.project.benefits.resource'),
        t('services.items.project.benefits.quality')
      ],
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
      color: "from-indigo-500 to-violet-600",
      delay: 800
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Analiza i odkrywanie potrzeb",
      description: "Zaczynamy od dokładnego zrozumienia Twoich potrzeb biznesowych i celów projektu.",
      icon: <Code size={24} />,
      align: "right"
    },
    {
      number: "02",
      title: "Planowanie i strategia",
      description: "Opracowujemy szczegółowy plan projektu, definiując zasoby, terminy i kluczowe etapy.",
      icon: <ClipboardList size={24} />,
      align: "left"
    },
    {
      number: "03",
      title: "Realizacja i rozwój",
      description: "Nasz zespół ekspertów pracuje nad realizacją projektu, regularnie informując o postępach.",
      icon: <Wrench size={24} />,
      align: "right"
    },
    {
      number: "04",
      title: "Testowanie i kontrola jakości",
      description: "Przeprowadzamy rygorystyczne testy, aby zapewnić najwyższą jakość dostarczanych rozwiązań.",
      icon: <CheckCircle2 size={24} />,
      align: "left"
    },
    {
      number: "05",
      title: "Szkolenia i dokumentacja",
      description: "Przygotowujemy pełną dokumentację techniczną i przeprowadzamy szkolenia dla zespołu.",
      icon: <BookOpen size={24} />,
      align: "right"
    },
    {
      number: "06",
      title: "Wdrożenie i optymalizacja",
      description: "Finalizujemy projekt, wdrażamy rozwiązanie i optymalizujemy jego działanie w środowisku produkcyjnym.",
      icon: <Zap size={24} />,
      align: "left"
    },
    {
      number: "07",
      title: "Monitoring i utrzymanie",
      description: "Stale monitorujemy rozwiązanie, dbając o jego stabilność i optymalną wydajność.",
      icon: <Monitor size={24} />,
      align: "right"
    },
    {
      number: "08",
      title: "Wsparcie posprzedażowe i rozwój",
      description: "Zapewniamy stałe wsparcie techniczne oraz rozwijamy rozwiązanie wraz z ewolucją Twojego biznesu.",
      icon: <Lightbulb size={24} />,
      align: "left"
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Animated Background */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white">
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Floating dots with enhanced animation */}
          <div className="absolute top-20 left-20 w-6 h-6 rounded-full bg-blue-400 opacity-50 floating-dot transition-transform duration-700"></div>
          <div className="absolute top-40 right-40 w-8 h-8 rounded-full bg-purple-400 opacity-40 floating-dot transition-transform duration-700"></div>
          <div className="absolute bottom-40 left-1/3 w-7 h-7 rounded-full bg-indigo-400 opacity-45 floating-dot transition-transform duration-700"></div>
          <div className="absolute bottom-20 right-1/4 w-5 h-5 rounded-full bg-teal-400 opacity-40 floating-dot transition-transform duration-700"></div>
          <div className="absolute top-60 left-1/4 w-4 h-4 rounded-full bg-pink-400 opacity-30 floating-dot transition-transform duration-700"></div>
          <div className="absolute top-32 right-1/3 w-6 h-6 rounded-full bg-green-400 opacity-35 floating-dot transition-transform duration-700"></div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium inline-block transform transition-all hover:scale-105 hover:shadow-sm animate-fade-in">
              {t('services.title')}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-display font-bold leading-tight text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-fade-in" style={{ animationDelay: '100ms' }}>
              {t('services.subtitle')}
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              {t('services.description')}
            </p>
            
            <div className="mt-12 animate-fade-in scroll-down-animation" style={{ animationDelay: '400ms' }}>
              <a href="#services" className="inline-flex flex-col items-center text-gray-500 hover:text-primary transition-colors">
                <span className="text-sm mb-2">{t('common.scrollDown')}</span>
                <ArrowRight className="h-5 w-5 rotate-90" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Redesigned Cards */}
      <section id="services" ref={servicesRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('services.ourServices')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('services.discoverSolutions')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`service-card-new overflow-hidden animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 border-0 shadow-lg hover:shadow-xl group`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5 relative overflow-hidden">
                    <div 
                      className="w-full h-60 md:h-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110" 
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-60 mix-blend-multiply`}></div>
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-white">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 service-icon">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="md:w-3/5 p-6 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-2xl font-display font-semibold mb-3 hidden md:block">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                    </div>
                    
                    <h4 className="font-medium text-lg mb-3">{t('services.mainBenefits')}:</h4>
                    <ul className="space-y-2 mb-6 flex-grow">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start group">
                          <span className="h-6 w-6 text-primary mr-2 flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                            <Sparkles className="h-6 w-6" />
                          </span>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-indigo-600 text-white font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 button-shine"
                    >
                      {t('cta.getStarted')}
                      <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Timeline */}
      <section ref={processRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium inline-block">
              {t('whyChooseUs.process')}
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold">{t('whyChooseUs.howWeWork')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              W TechPrime nie tylko świadczymy usługi IT – budujemy trwałe partnerstwa z naszymi
              klientami, rozumiejąc ich cele biznesowe i dostarczając rozwiązania, które napędzają
              wzrost i efektywność.
            </p>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-100 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0 relative">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row md:items-center mb-16 md:mb-32 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {step.align === "right" ? (
                    // Right-aligned step (content on the right)
                    <>
                      {/* Empty left side */}
                      <div className="md:w-1/2"></div>
                      
                      {/* Center icon */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-md border-4 border-blue-100 flex items-center justify-center z-10 hidden md:flex">
                        {step.icon}
                      </div>
                      
                      {/* Right content */}
                      <div className="md:w-1/2 md:pl-12">
                        <div className="p-6 transition-all duration-300 relative">
                          <div className="flex items-center mb-4 gap-4">
                            <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                              {step.number}
                            </div>
                            <h3 className="text-xl font-display font-semibold">{step.title}</h3>
                          </div>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    // Left-aligned step (content on the left)
                    <>
                      {/* Left content */}
                      <div className="md:w-1/2 md:pr-12 md:text-right">
                        <div className="p-6 transition-all duration-300 relative">
                          <div className="flex items-center mb-4 gap-4 md:flex-row-reverse">
                            <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                              {step.number}
                            </div>
                            <h3 className="text-xl font-display font-semibold">{step.title}</h3>
                          </div>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                      
                      {/* Center icon */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-md border-4 border-blue-100 flex items-center justify-center z-10 hidden md:flex">
                        {step.icon}
                      </div>
                      
                      {/* Empty right side */}
                      <div className="md:w-1/2"></div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={featuresRef} className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium inline-block">
              {t('whyChooseUs.title')}
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold">{t('whyChooseUs.subtitle')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('whyChooseUs.description')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            {[
              {
                title: t('whyChooseUs.features.expertise.title'),
                description: t('whyChooseUs.features.expertise.description'),
                icon: <Code size={32} className="text-indigo-500" />,
                delay: 300,
                color: "bg-indigo-50"
              },
              {
                title: t('whyChooseUs.features.innovative.title'),
                description: t('whyChooseUs.features.innovative.description'),
                icon: <Zap size={32} className="text-purple-500" />,
                delay: 400,
                color: "bg-purple-50"
              },
              {
                title: t('whyChooseUs.features.team.title'),
                description: t('whyChooseUs.features.team.description'),
                icon: <UserPlus size={32} className="text-blue-500" />,
                delay: 500,
                color: "bg-blue-50"
              },
              {
                title: t('whyChooseUs.features.results.title'),
                description: t('whyChooseUs.features.results.description'),
                icon: <BarChart3 size={32} className="text-green-500" />,
                delay: 600,
                color: "bg-green-50"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-md animate-on-scroll opacity-0 translate-y-10" 
                style={{ transitionDelay: `${feature.delay}ms` }}
              >
                <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-accent/5 mix-blend-multiply blur-3xl"></div>
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-primary/5 mix-blend-multiply blur-3xl"></div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServicePage;
