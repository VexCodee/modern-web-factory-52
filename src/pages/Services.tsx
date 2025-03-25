
import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { ArrowRight, UserPlus, Globe, Palette, Wrench, Bot, BarChart3, Share2, ClipboardList, Code, Zap, Sparkles, FileText, Server, Lightbulb, Truck, CheckCircle2, Database, BookOpen, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ServiceCard from '../components/ServiceCard';

const ServicePage = () => {
  const {
    t,
    language
  } = useLanguage();
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  // Animation observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in', 'opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, {
      threshold: 0.1
    });

    // Select all elements to animate
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
    return () => {
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Add floating animation for decorative dots
  useEffect(() => {
    const dots = document.querySelectorAll('.floating-dot');

    // Apply random starting positions
    dots.forEach(dot => {
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
      dots.forEach(dot => {
        const htmlDot = dot as HTMLElement;
        htmlDot.style.animation = '';
      });
    };
  }, []);
  
  const services = [
    {
      icon: <Globe size={24} className="text-white" />,
      title: "Tworzenie Stron Internetowych",
      description: "Projektuję i tworzę nowoczesne, responsywne strony internetowe dostosowane do Twoich potrzeb.",
      benefits: ["Responsywny design", "Optymalizacja SEO", "Intuicyjny CMS", "Szybkie ładowanie"],
      iconBgColor: "bg-blue-500",
      borderColor: "border-blue-100",
      dotColor: "bg-blue-400",
      buttonBgColor: "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-100",
      delay: 100
    },
    {
      icon: <Code size={24} className="text-white" />,
      title: "Programowanie na Zlecenie",
      description: "Tworzę dedykowane oprogramowanie i aplikacje dla firm zgodnie z indywidualnymi wymaganiami.",
      benefits: ["Indywidualne rozwiązania", "Najnowsze technologie", "Kompletna dokumentacja", "Wsparcie po wdrożeniu"],
      iconBgColor: "bg-indigo-500",
      borderColor: "border-indigo-100",
      dotColor: "bg-indigo-400",
      buttonBgColor: "bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-100",
      delay: 200
    },
    {
      icon: <UserPlus size={24} className="text-white" />,
      title: "Outsourcing IT",
      description: "Oferuję kompleksowe wsparcie IT dla Twojej firmy, działając jako zewnętrzny dział informatyczny.",
      benefits: ["Obniżenie kosztów", "Dostęp do specjalistycznej wiedzy", "Elastyczne wsparcie", "Szybka reakcja"],
      iconBgColor: "bg-purple-500",
      borderColor: "border-purple-100",
      dotColor: "bg-purple-400",
      buttonBgColor: "bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-100",
      delay: 300
    },
    {
      icon: <BarChart3 size={24} className="text-white" />,
      title: "Marketing Cyfrowy",
      description: "Realizuję strategie marketingowe online, które zwiększają rozpoznawalność i sprzedaż Twojej firmy.",
      benefits: ["SEO i SEM", "Content marketing", "Analityka", "Kampanie reklamowe"],
      iconBgColor: "bg-amber-500",
      borderColor: "border-amber-100",
      dotColor: "bg-amber-400",
      buttonBgColor: "bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-100",
      delay: 400
    },
    {
      icon: <Share2 size={24} className="text-white" />,
      title: "Social Media",
      description: "Zarządzam profilami w mediach społecznościowych, budując zaangażowaną społeczność wokół Twojej marki.",
      benefits: ["Regularne publikacje", "Komunikacja z odbiorcami", "Zwiększenie zasięgów", "Budowanie wizerunku"],
      iconBgColor: "bg-teal-500",
      borderColor: "border-teal-100",
      dotColor: "bg-teal-400",
      buttonBgColor: "bg-teal-50 hover:bg-teal-100 text-teal-700 border-teal-100",
      delay: 500
    },
    {
      icon: <Palette size={24} className="text-white" />,
      title: "Grafika i Design",
      description: "Tworzę profesjonalną identyfikację wizualną oraz projekty graficzne, które wyróżnią Twoją markę.",
      benefits: ["Logo i branding", "Projekty UI/UX", "Materiały marketingowe", "Spójny wizerunek"],
      iconBgColor: "bg-emerald-500",
      borderColor: "border-emerald-100",
      dotColor: "bg-emerald-400",
      buttonBgColor: "bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-100",
      delay: 600
    },
    {
      icon: <Wrench size={24} className="text-white" />,
      title: "Naprawa Sprzętu",
      description: "Świadczę usługi serwisowe komputerów, laptopów i urządzeń peryferyjnych dla firm i klientów indywidualnych.",
      benefits: ["Szybka diagnostyka", "Wymiana podzespołów", "Odzyskiwanie danych", "Konserwacja sprzętu"],
      iconBgColor: "bg-sky-500",
      borderColor: "border-sky-100",
      dotColor: "bg-sky-400",
      buttonBgColor: "bg-sky-50 hover:bg-sky-100 text-sky-700 border-sky-100",
      delay: 700
    },
    {
      icon: <Bot size={24} className="text-white" />,
      title: "Automatyzacja i AI",
      description: "Wdrażam rozwiązania oparte o sztuczną inteligencję, automatyzując procesy i zwiększając efektywność Twojej firmy.",
      benefits: ["Analiza danych", "Chatboty i asystenci", "Automatyzacja procesów", "Wsparcie decyzji biznesowych"],
      iconBgColor: "bg-pink-500",
      borderColor: "border-pink-100",
      dotColor: "bg-pink-400",
      buttonBgColor: "bg-pink-50 hover:bg-pink-100 text-pink-700 border-pink-100",
      delay: 800
    }
  ];
  
  const processSteps = [
    {
      number: "01",
      title: "Analiza i odkrywanie potrzeb",
      description: "Zaczynam od dokładnego zrozumienia Twoich potrzeb biznesowych i celów projektu.",
      icon: <Code size={24} />,
      align: "right"
    }, 
    {
      number: "02",
      title: "Planowanie i strategia",
      description: "Opracowuję szczegółowy plan projektu, definiując zasoby, terminy i kluczowe etapy.",
      icon: <ClipboardList size={24} />,
      align: "left"
    }, 
    {
      number: "03",
      title: "Realizacja i rozwój",
      description: "Pracuję nad realizacją projektu, regularnie informując o postępach.",
      icon: <Wrench size={24} />,
      align: "right"
    }, 
    {
      number: "04",
      title: "Testowanie i kontrola jakości",
      description: "Przeprowadzam rygorystyczne testy, aby zapewnić najwyższą jakość dostarczanego rozwiązania.",
      icon: <CheckCircle2 size={24} />,
      align: "left"
    }, 
    {
      number: "05",
      title: "Szkolenia i dokumentacja",
      description: "Przygotowuję pełną dokumentację techniczną i przeprowadzam szkolenia dla Twojego zespołu.",
      icon: <BookOpen size={24} />,
      align: "right"
    }, 
    {
      number: "06",
      title: "Wdrożenie i optymalizacja",
      description: "Finalizuję projekt, wdrażam rozwiązanie i optymalizuję jego działanie w środowisku produkcyjnym.",
      icon: <Zap size={24} />,
      align: "left"
    }, 
    {
      number: "07",
      title: "Monitoring i utrzymanie",
      description: "Stale monitoruję rozwiązanie, dbając o jego stabilność i optymalną wydajność.",
      icon: <Monitor size={24} />,
      align: "right"
    }, 
    {
      number: "08",
      title: "Wsparcie posprzedażowe i rozwój",
      description: "Zapewniam stałe wsparcie techniczne oraz rozwijam rozwiązanie wraz z ewolucją Twojego biznesu.",
      icon: <Lightbulb size={24} />,
      align: "left"
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Updated to match the provided design */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-gradient-to-b from-gray-50 to-white py-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white opacity-95"></div>
          {/* Subtle background elements */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-blue-100/30 mix-blend-multiply blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-indigo-100/30 mix-blend-multiply blur-3xl"></div>
          {/* Decorative dots */}
          <div className="absolute inset-0">
            {Array.from({length: 12}).map((_, i) => (
              <div 
                key={i} 
                className="absolute rounded-full bg-primary/10" 
                style={{
                  width: `${Math.random() * 8 + 4}px`,
                  height: `${Math.random() * 8 + 4}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float-around ${Math.random() * 15 + 10}s infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              {/* Badge */}
              <div className="mb-5 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5">
                <span className="text-primary font-medium tracking-wide text-sm">
                  {language === 'pl' ? 'Usługi' : language === 'de' ? 'Dienstleistungen' : 'Services'}
                </span>
              </div>
              
              {/* Heading with two parts */}
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight text-gray-900">
                {language === 'pl' ? 'Odkrywając' : language === 'de' ? 'Entdecken' : 'Discovering'}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {language === 'pl' ? 'Nowe Możliwości' : language === 'de' ? 'Neue Möglichkeiten' : 'New Possibilities'}
                </span>
              </h1>
              
              {/* Description text */}
              <p className="text-lg text-gray-600 mb-6 max-w-xl">
                {language === 'pl' ? 
                  "Oferuję kompleksowe usługi IT, które transformują cyfrową obecność Twojej firmy, zwiększając wydajność i konkurencyjność w dynamicznym środowisku biznesowym." : 
                  language === 'de' ? 
                    "Ich biete umfassende IT-Dienstleistungen an, die die digitale Präsenz Ihres Unternehmens transformieren und seine Effizienz und Wettbewerbsfähigkeit in einem dynamischen Geschäftsumfeld steigern." : 
                    "I offer comprehensive IT services that transform your company's digital presence, increasing efficiency and competitiveness in a dynamic business environment."
                }
              </p>
              
              {/* CTA Button */}
              <a href="#services" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                {language === 'pl' ? "Poznaj Moje Usługi" : language === 'de' ? "Entdecken Sie Meine Dienstleistungen" : "Discover My Services"}
              </a>
            </div>
            
            {/* Right side image card with updated styling similar to other cards */}
            <div className="hidden lg:block relative">
              <div className="rounded-2xl overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group">
                <div className="relative h-[350px]">
                  <img alt="Services Showcase" className="w-full h-full object-cover" src="/lovable-uploads/d4eb3031-c917-4b2c-af9b-63e6d2ab84b6.jpg" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/80"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-300 translate-y-0 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white/80 text-sm">{language === 'pl' ? 'Moja Misja' : language === 'de' ? 'Meine Mission' : 'My Mission'}</div>
                      <div className="text-white font-semibold text-lg">{language === 'pl' ? 'Tworzę Przyszłość' : language === 'de' ? 'Ich gestalte die Zukunft' : 'Shaping The Future'}</div>
                    </div>
                    <div className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center transform transition-all duration-300 rotate-0 group-hover:rotate-45">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator with reduced spacing */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500">
          <span className="text-sm mb-2">{language === 'pl' ? 'Przewiń, aby odkryć więcej' : language === 'de' ? 'Scrollen Sie, um mehr zu entdecken' : 'Scroll to explore'}</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-[bounce_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>

      {/* Services Section with Light Theme */}
      <section id="services" ref={servicesRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-800">{t('services.ourServices')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Oferuję kompleksowe usługi IT, od tworzenia stron internetowych, przez programowanie na zlecenie, outsourcing IT, aż po marketing, social media, grafikę, naprawę sprzętu i automatyzację AI.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" 
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <ServiceCard 
                  icon={service.icon} 
                  title={service.title} 
                  description={service.description} 
                  benefits={service.benefits} 
                  iconBgColor={service.iconBgColor} 
                  borderColor={service.borderColor} 
                  dotColor={service.dotColor} 
                  buttonBgColor={service.buttonBgColor} 
                  delay={service.delay} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Light Theme */}
      <section ref={processRef} className="py-20 bg-gradient-to-b from-white to-gray-50/80">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium inline-block">
              {t('whyChooseUs.process')}
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold text-slate-800">{t('whyChooseUs.howWeWork')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              Działam jako jednoosobowa firma, oferując pełen zakres usług IT. Buduję trwałe relacje z klientami, dokładnie rozumiejąc ich cele biznesowe i dostarczając rozwiązania, które zwiększają efektywność i napędzają wzrost.
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
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  {step.align === "right" ? 
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
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md relative">
                          <div className="flex items-center mb-4 gap-4">
                            <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                              {step.number}
                            </div>
                            <h3 className="text-xl font-display font-semibold text-slate-800">{step.title}</h3>
                          </div>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </> : 
                    // Left-aligned step (content on the left)
                    <>
                      {/* Left content */}
                      <div className="md:w-1/2 md:pr-12 md:text-right">
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md relative">
                          <div className="flex items-center mb-4 gap-4 md:flex-row-reverse">
                            <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                              {step.number}
                            </div>
                            <h3 className="text-xl font-display font-semibold text-slate-800">{step.title}</h3>
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
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid with Light Theme */}
      <section ref={featuresRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium inline-block">
              {t('whyChooseUs.title')}
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold text-slate-800">{t('whyChooseUs.subtitle')}</h2>
            <p className="mt-4 text-lg text-gray-600">Oferuję indywidualne podejście do każdego klienta, łącząc wieloletnie doświadczenie z pasją do technologii i nieustannym rozwojem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            {[
              {
                title: "Specjalistyczna wiedza",
                description: "Posiadam rozległą wiedzę techniczną i doświadczenie w różnych dziedzinach IT i marketingu cyfrowego.",
                icon: <Code size={32} className="text-indigo-500" />,
                delay: 300,
                color: "bg-indigo-50"
              },
              {
                title: "Innowacyjne podejście",
                description: "Stale śledzę najnowsze trendy i technologie, aby dostarczać nowoczesne i przyszłościowe rozwiązania.",
                icon: <Zap size={32} className="text-purple-500" />,
                delay: 400,
                color: "bg-purple-50"
              },
              {
                title: "Indywidualne podejście",
                description: "Wsłuchuję się w Twoje potrzeby i dostosowuję rozwiązania do specyfiki Twojego biznesu.",
                icon: <UserPlus size={32} className="text-blue-500" />,
                delay: 500,
                color: "bg-blue-50"
              },
              {
                title: "Nastawienie na wyniki",
                description: "Koncentruję się na dostarczaniu wartości i wymiernych rezultatów biznesowych dla moich klientów.",
                icon: <BarChart3 size={32} className="text-green-500" />,
                delay: 600,
                color: "bg-green-50"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-md animate-on-scroll opacity-0 translate-y-10" 
                style={{
                  transitionDelay: `${feature.delay}ms`
                }}
              >
                <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-slate-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-indigo-100/30 mix-blend-multiply blur-3xl"></div>
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-blue-100/30 mix-blend-multiply blur-3xl"></div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServicePage;
