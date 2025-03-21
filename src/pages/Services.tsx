import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { ArrowRight, UserPlus, Globe, Palette, Wrench, Bot, BarChart3, Share2, ClipboardList, Code, Zap, Server, Lightbulb, CheckCircle2, Database, BookOpen, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';
import ServiceCard from '../components/ServiceCard';

const ServicePage = () => {
  const { t, language } = useLanguage();
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
  
  const services = [{
    icon: <UserPlus size={24} className="text-white" />,
    title: t('services.items.outsourcing.title'),
    description: t('services.items.outsourcing.description'),
    benefits: [t('services.items.outsourcing.benefits.cost'), t('services.items.outsourcing.benefits.expertise'), t('services.items.outsourcing.benefits.scalability'), t('services.items.outsourcing.benefits.focus')],
    iconBgColor: "bg-blue-500",
    borderColor: "border-blue-100",
    dotColor: "bg-blue-400",
    buttonBgColor: "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-100",
    delay: 100
  }, {
    icon: <Globe size={24} className="text-white" />,
    title: t('services.items.webDev.title'),
    description: t('services.items.webDev.description'),
    benefits: [t('services.items.webDev.benefits.responsive'), t('services.items.webDev.benefits.seo'), t('services.items.webDev.benefits.secure'), t('services.items.webDev.benefits.custom')],
    iconBgColor: "bg-indigo-500",
    borderColor: "border-indigo-100",
    dotColor: "bg-indigo-400",
    buttonBgColor: "bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-100",
    delay: 200
  }, {
    icon: <Palette size={24} className="text-white" />,
    title: t('services.items.graphic.title'),
    description: t('services.items.graphic.description'),
    benefits: [t('services.items.graphic.benefits.brand'), t('services.items.graphic.benefits.user'), t('services.items.graphic.benefits.creative'), t('services.items.graphic.benefits.cross')],
    iconBgColor: "bg-purple-500",
    borderColor: "border-purple-100",
    dotColor: "bg-purple-400",
    buttonBgColor: "bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-100",
    delay: 300
  }, {
    icon: <Wrench size={24} className="text-white" />,
    title: t('services.items.hardware.title'),
    description: t('services.items.hardware.description'),
    benefits: [t('services.items.hardware.benefits.quick'), t('services.items.hardware.benefits.certified'), t('services.items.hardware.benefits.quality'), t('services.items.hardware.benefits.preventive')],
    iconBgColor: "bg-amber-500",
    borderColor: "border-amber-100",
    dotColor: "bg-amber-400",
    buttonBgColor: "bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-100",
    delay: 400
  }, {
    icon: <Bot size={24} className="text-white" />,
    title: t('services.items.ai.title'),
    description: t('services.items.ai.description'),
    benefits: [t('services.items.ai.benefits.automation'), t('services.items.ai.benefits.analytics'), t('services.items.ai.benefits.nlp'), t('services.items.ai.benefits.ml')],
    iconBgColor: "bg-teal-500",
    borderColor: "border-teal-100",
    dotColor: "bg-teal-400",
    buttonBgColor: "bg-teal-50 hover:bg-teal-100 text-teal-700 border-teal-100",
    delay: 500
  }, {
    icon: <BarChart3 size={24} className="text-white" />,
    title: t('services.items.marketing.title'),
    description: t('services.items.marketing.description'),
    benefits: [t('services.items.marketing.benefits.targeted'), t('services.items.marketing.benefits.performance'), t('services.items.marketing.benefits.content'), t('services.items.marketing.benefits.conversion')],
    iconBgColor: "bg-emerald-500",
    borderColor: "border-emerald-100",
    dotColor: "bg-emerald-400",
    buttonBgColor: "bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-100",
    delay: 600
  }, {
    icon: <Share2 size={24} className="text-white" />,
    title: t('services.items.social.title'),
    description: t('services.items.social.description'),
    benefits: [t('services.items.social.benefits.calendar'), t('services.items.social.benefits.engagement'), t('services.items.social.benefits.optimization'), t('services.items.social.benefits.analytics')],
    iconBgColor: "bg-sky-500",
    borderColor: "border-sky-100",
    dotColor: "bg-sky-400",
    buttonBgColor: "bg-sky-50 hover:bg-sky-100 text-sky-700 border-sky-100",
    delay: 700
  }, {
    icon: <ClipboardList size={24} className="text-white" />,
    title: t('services.items.project.title'),
    description: t('services.items.project.description'),
    benefits: [t('services.items.project.benefits.communication'), t('services.items.project.benefits.risk'), t('services.items.project.benefits.resource'), t('services.items.project.benefits.quality')],
    iconBgColor: "bg-pink-500",
    borderColor: "border-pink-100",
    dotColor: "bg-pink-400",
    buttonBgColor: "bg-pink-50 hover:bg-pink-100 text-pink-700 border-pink-100",
    delay: 800
  }];

  const processSteps = [{
    number: "01",
    title: "Analiza i odkrywanie potrzeb",
    description: "Zaczynamy od dokładnego zrozumienia Twoich potrzeb biznesowych i celów projektu.",
    icon: <Code size={24} />,
    align: "right"
  }, {
    number: "02",
    title: "Planowanie i strategia",
    description: "Opracowujemy szczegółowy plan projektu, definiując zasoby, terminy i kluczowe etapy.",
    icon: <ClipboardList size={24} />,
    align: "left"
  }, {
    number: "03",
    title: "Realizacja i rozwój",
    description: "Nasz zespół ekspertów pracuje nad realizacją projektu, regularnie informując o postępach.",
    icon: <Wrench size={24} />,
    align: "right"
  }, {
    number: "04",
    title: "Testowanie i kontrola jakości",
    description: "Przeprowadzamy rygorystyczne testy, aby zapewnić najwyższą jakość dostarczanych rozwiązań.",
    icon: <CheckCircle2 size={24} />,
    align: "left"
  }, {
    number: "05",
    title: "Szkolenia i dokumentacja",
    description: "Przygotowujemy pełną dokumentację techniczną i przeprowadzamy szkolenia dla zespołu.",
    icon: <BookOpen size={24} />,
    align: "right"
  }, {
    number: "06",
    title: "Wdrożenie i optymalizacja",
    description: "Finalizujemy projekt, wdrażamy rozwiązanie i optymalizujemy jego działanie w środowisku produkcyjnym.",
    icon: <Zap size={24} />,
    align: "left"
  }, {
    number: "07",
    title: "Monitoring i utrzymanie",
    description: "Stale monitorujemy rozwiązanie, dbając o jego stabilność i optymalną wydajność.",
    icon: <Monitor size={24} />,
    align: "right"
  }, {
    number: "08",
    title: "Wsparcie posprzedażowe i rozwój",
    description: "Zapewniamy stałe wsparcie techniczne oraz rozwijamy rozwiązanie wraz z ewolucją Twojego biznesu.",
    icon: <Lightbulb size={24} />,
    align: "left"
  }];

  return <Layout>
      <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-gradient-to-b from-gray-50 to-white py-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white opacity-95"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-blue-100/30 mix-blend-multiply blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-indigo-100/30 mix-blend-multiply blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5">
                <span className="text-primary font-medium tracking-wide text-sm">
                  {language === 'pl' ? 'Usługi' : language === 'de' ? 'Dienstleistungen' : 'Services'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight text-gray-900">
                {language === 'pl' ? 'Odkrywając' : language === 'de' ? 'Entdecken' : 'Discovering'}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {language === 'pl' ? 'Nowe Możliwości' : language === 'de' ? 'Neue Möglichkeiten' : 'New Possibilities'}
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-6 max-w-xl">
                {language === 'pl' ? "Wierzymy w przyszłość, w której technologia harmonijnie integruje się z życiem codziennym, czyniąc je prostszym, bardziej wydajnym i zrównoważonym." : language === 'de' ? "Wir glauben an eine Zukunft, in der Technologie harmonisch in den Alltag integriert ist und ihn einfacher, effizienter und nachhaltiger macht." : "We believe in a future where technology seamlessly integrates with everyday life, making it simpler, more efficient, and sustainable."}
              </p>
              
              <a href="#services" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                {language === 'pl' ? "Poznaj Nasze Usługi" : language === 'de' ? "Entdecken Sie Unsere Dienstleistungen" : "Discover Our Services"}
              </a>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="relative shadow-lg rounded-2xl overflow-hidden">
                <img alt="Services" className="w-full h-auto object-cover rounded-2xl" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800&h=500" />
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-gray-400 text-sm">{language === 'pl' ? 'Nasza Misja' : language === 'de' ? 'Unsere Mission' : 'Our Mission'}</div>
                      <div className="text-white font-semibold">{language === 'pl' ? 'Tworzymy Przyszłość' : language === 'de' ? 'Wir gestalten die Zukunft' : 'Shaping The Future'}</div>
                    </div>
                    <div className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500">
          <span className="text-sm mb-1">{language === 'pl' ? 'Przewiń, aby odkryć więcej' : language === 'de' ? 'Scrollen Sie, um mehr zu entdecken' : 'Scroll to explore'}</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-[bounce_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>

      <section id="services" ref={servicesRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-800">{t('services.ourServices')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('services.discoverSolutions')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <div key={index} className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{
            transitionDelay: `${index * 100}ms`
          }}>
                <ServiceCard icon={service.icon} title={service.title} description={service.description} benefits={service.benefits} iconBgColor={service.iconBgColor} borderColor={service.borderColor} dotColor={service.dotColor} buttonBgColor={service.buttonBgColor} delay={service.delay} />
              </div>)}
          </div>
        </div>
      </section>

      <section ref={processRef} className="py-20 bg-gradient-to-b from-white to-gray-50/80">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium inline-block">
              {t('whyChooseUs.process')}
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold text-slate-800">{t('whyChooseUs.howWeWork')}</h2>
            <p className="mt-4 text-lg text-gray-600">
              W TechPrime nie tylko świadczymy usługi IT – budujemy trwałe partnerstwa z naszymi
              klientami, rozumiejąc ich cele biznesowe i dostarczając rozwiązania, które napędzają
              wzrost i efektywność.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-100 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0 relative">
              {processSteps.map((step, index) => <div key={index} className={`flex flex-col md:flex-row md:items-center mb-16 md:mb-32 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700`} style={{
              transitionDelay: `${index * 200}ms`
            }}>
                  {step.align === "right" ?
              <>
                      <div className="md:w-1/2"></div>
                      
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-md border-4 border-blue-100 flex items-center justify-center z-10 hidden md:flex">
                        {step.icon}
                      </div>
                      
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
              <>
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
                      
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-md border-4 border-blue-100 flex items-center justify-center z-10 hidden md:flex">
                        {step.icon}
                      </div>
                      
                      <div className="md:w-1/2"></div>
                    </>}
                </div>)}
            </div>
          </div>
        </div>
      </section>

      <section ref={featuresRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium inline-block">
              {t('whyChooseUs.title')}
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold text-slate-800">{t('whyChooseUs.subtitle')}</h2>
            <p className="mt-4 text-lg text-gray-600">{t('whyChooseUs.description')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            {[{
            title: t('whyChooseUs.features.expertise.title'),
            description: t('whyChooseUs.features.expertise.description'),
            icon: <Code size={32} className="text-indigo-500" />,
            delay: 300,
            color: "bg-indigo-50"
          }, {
            title: t('whyChooseUs.features.innovative.title'),
            description: t('whyChooseUs.features.innovative.description'),
            icon: <Zap size={32} className="text-purple-500" />,
            delay: 400,
            color: "bg-purple-50"
          }, {
            title: t('whyChooseUs.features.team.title'),
            description: t('whyChooseUs.features.team.description'),
            icon: <UserPlus size={32} className="text-blue-500" />,
            delay: 500,
            color: "bg-blue-50"
          }, {
            title: t('whyChooseUs.features.results.title'),
            description: t('whyChooseUs.features.results.description'),
            icon: <BarChart3 size={32} className="text-green-500" />,
            delay: 600,
            color: "bg-green-50"
          }].map((feature, index) => <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-md animate-on-scroll opacity-0 translate-y-10" style={{
            transitionDelay: `${feature.delay}ms`
          }}>
                <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-slate-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>)}
          </div>
        </div>

        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-indigo-100/30 mix-blend-multiply blur-3xl"></div>
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-blue-100/30 mix-blend-multiply blur-3xl"></div>
      </section>

      <CTASection />
    </Layout>;
};
export default ServicePage;
