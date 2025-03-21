
import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';
import SolutionCard from '../components/SolutionCard';
import { ArrowUpRight, Check, Globe, Image, LayoutGrid, Monitor, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Solution = () => {
  const { t, language } = useLanguage();
  const solutionsRef = useRef<HTMLDivElement>(null);

  // Set up intersection observer for animations
  useEffect(() => {
    if (!solutionsRef.current) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });
    
    const items = solutionsRef.current.querySelectorAll('.solution-item');
    items.forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      items.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  const solutions = [
    {
      id: 1,
      title: t('solutions.items.digitalTransformation.title'),
      subtitle: t('solutions.items.digitalTransformation.description'),
      description: t('solutions.items.digitalTransformation.description'),
      stats: ["+45%", "99.9%", "60%"],
      statsLabels: ["Efficiency", "Uptime", "Cost Reduction"],
      color: "bg-blue-600",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
      features: [
        t('solutions.items.digitalTransformation.features.infrastructure'),
        t('solutions.items.digitalTransformation.features.processes'),
        t('solutions.items.digitalTransformation.features.migration'),
        t('solutions.items.digitalTransformation.features.change'),
        t('solutions.items.digitalTransformation.features.workflow')
      ],
      tags: ["Digital", "Infrastructure", "Cloud"]
    },
    {
      id: 2,
      title: t('solutions.items.aiCustomerExperience.title'),
      subtitle: t('solutions.items.aiCustomerExperience.description'),
      description: t('solutions.items.aiCustomerExperience.description'),
      stats: ["+85%", "24/7", "-30%"],
      statsLabels: ["Customer Satisfaction", "Support", "Response Time"],
      color: "bg-purple-700",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      features: [
        t('solutions.items.aiCustomerExperience.features.chatbots'),
        t('solutions.items.aiCustomerExperience.features.analytics'),
        t('solutions.items.aiCustomerExperience.features.recommendations'),
        t('solutions.items.aiCustomerExperience.features.automation'),
        t('solutions.items.aiCustomerExperience.features.sentiment')
      ],
      tags: ["AI", "Customer Experience", "Analytics"]
    },
    {
      id: 3,
      title: t('solutions.items.ecommerce.title'),
      subtitle: t('solutions.items.ecommerce.description'),
      description: t('solutions.items.ecommerce.description'),
      stats: ["+120%", "+65%", "99.5%"],
      statsLabels: ["Sales", "Mobile Conversion", "Order Accuracy"],
      color: "bg-indigo-600",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      features: [
        t('solutions.items.ecommerce.features.responsive'),
        t('solutions.items.ecommerce.features.inventory'),
        t('solutions.items.ecommerce.features.payment'),
        t('solutions.items.ecommerce.features.fulfillment'),
        t('solutions.items.ecommerce.features.crm')
      ],
      tags: ["E-commerce", "Mobile", "Payments"]
    },
    {
      id: 4,
      title: t('solutions.items.dataAnalytics.title'),
      subtitle: t('solutions.items.dataAnalytics.description'),
      description: t('solutions.items.dataAnalytics.description'),
      stats: ["+2TB", "95%", "+75%"],
      statsLabels: ["Data Processed Daily", "Prediction Accuracy", "Decision Speed"],
      color: "bg-emerald-600",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      features: [
        t('solutions.items.dataAnalytics.features.warehouse'),
        t('solutions.items.dataAnalytics.features.dashboards'),
        t('solutions.items.dataAnalytics.features.predictive'),
        t('solutions.items.dataAnalytics.features.reporting'),
        t('solutions.items.dataAnalytics.features.visualization')
      ],
      tags: ["Analytics", "Big Data", "Visualization"]
    }
  ];

  const categories = [
    { id: 'all', label: t('solutions.categories.all'), icon: <LayoutGrid className="mr-2 h-4 w-4" /> },
    { id: 'digital', label: 'Digital Transformation', icon: <Monitor className="mr-2 h-4 w-4" /> },
    { id: 'mobile', label: 'Mobile', icon: <Smartphone className="mr-2 h-4 w-4" /> },
    { id: 'web', label: t('portfolio.categories.web'), icon: <Globe className="mr-2 h-4 w-4" /> },
    { id: 'design', label: t('portfolio.categories.design'), icon: <Image className="mr-2 h-4 w-4" /> },
  ];

  const industries = [
    {
      name: t('solutions.industries.healthcare'),
      icon: "🏥",
      description: t('solutions.industriesDesc.healthcare')
    },
    {
      name: t('solutions.industries.finance'),
      icon: "💼",
      description: t('solutions.industriesDesc.finance')
    },
    {
      name: t('solutions.industries.retail'),
      icon: "🛍️",
      description: t('solutions.industriesDesc.retail')
    },
    {
      name: t('solutions.industries.manufacturing'),
      icon: "🏭",
      description: t('solutions.industriesDesc.manufacturing')
    },
    {
      name: t('solutions.industries.education'),
      icon: "🎓",
      description: t('solutions.industriesDesc.education')
    },
    {
      name: t('solutions.industries.logistics'),
      icon: "🚚",
      description: t('solutions.industriesDesc.logistics')
    }
  ];

  return (
    <Layout>
      {/* Hero section with light background and gradient */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white opacity-90"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mix-blend-multiply blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-pink-100 to-blue-100 mix-blend-multiply blur-3xl opacity-20"></div>
          <div className="absolute inset-0">
            {Array.from({ length: 15 }).map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-primary/10"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
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
              <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 border border-primary/30">
                <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-primary font-medium tracking-wide text-sm">
                  {t('solutions.title')}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-gray-900">
                {language === 'pl' ? 'Nasze Rozwiązania' : language === 'de' ? 'Unsere Lösungen' : 'Our Solutions'}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {language === 'pl' ? 'i Możliwości' : language === 'de' ? '& Möglichkeiten' : '& Capabilities'}
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                {language === 'pl' 
                  ? 'Poznaj nasze wyspecjalizowane rozwiązania IT, które pomagają firmom pokonywać wyzwania i osiągać nowe możliwości.' 
                  : language === 'de' 
                    ? 'Entdecken Sie unsere spezialisierten IT-Lösungen, die Unternehmen helfen, Herausforderungen zu bewältigen und neue Möglichkeiten zu erschließen.'
                    : 'Explore our specialized IT solutions that help businesses overcome challenges and unlock new opportunities across industries.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                  asChild
                >
                  <a href="#solutions-section">
                    {language === 'pl' ? 'Przeglądaj Rozwiązania' : language === 'de' ? 'Lösungen durchsuchen' : 'Browse Solutions'}
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2"
                  asChild
                >
                  <Link to="/contact">
                    {language === 'pl' ? 'Kontakt' : language === 'de' ? 'Kontakt' : 'Contact Us'}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
                  alt="Featured solution" 
                  className="relative rounded-2xl shadow-2xl border border-gray-200"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-gray-900/80 backdrop-blur-md rounded-xl p-4 border border-gray-700">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-gray-400 text-sm">Featured Solution</div>
                      <div className="text-white font-bold text-xl">{solutions[0].title}</div>
                    </div>
                    <div className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500">
          <span className="text-sm mb-1">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-[scrollDown_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>

      {/* Solutions section */}
      <section id="solutions-section" ref={solutionsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {t('solutions.subtitle')}
            </span>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl text-gray-900">
              {language === 'pl' ? 'Nasze Główne Rozwiązania' : language === 'de' ? 'Unsere Hauptlösungen' : 'Our Core Solutions'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {language === 'pl' 
                ? 'Specjalizujemy się w dostarczaniu innowacyjnych rozwiązań cyfrowych, które napędzają sukces biznesowy.'
                : language === 'de'
                ? 'Wir sind spezialisiert auf die Bereitstellung innovativer digitaler Lösungen, die den Geschäftserfolg fördern.'
                : 'We specialize in delivering innovative digital solutions that drive business success.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div key={solution.id} className="group solution-item opacity-0">
                <div className="relative h-[260px] sm:h-[280px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {solution.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 rounded-full bg-gray-800/80 backdrop-blur-sm text-xs font-medium text-white transition-all duration-300 hover:bg-gray-700/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-300 hover:bg-indigo-700 transform rotate-0 group-hover:rotate-45">
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h2 className="text-2xl font-bold text-white mb-1 transform translate-y-0 opacity-100 transition-all duration-300 group-hover:text-primary">{solution.title}</h2>
                    <p className="text-gray-300 mb-4 transform translate-y-0 opacity-100 transition-all duration-300 group-hover:text-gray-100">{solution.subtitle}</p>
                    <div className="grid grid-cols-3 gap-4">
                      {solution.stats.map((stat, idx) => (
                        <div key={idx} className="transform transition-all duration-300 opacity-80 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-1" style={{ transitionDelay: `${idx * 75}ms` }}>
                          <div className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">{stat}</div>
                          <div className="text-xs text-gray-400">{solution.statsLabels[idx]}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-primary/20 border border-primary/30 px-4 py-1 rounded-full text-sm font-medium text-primary mb-6">
                {language === 'pl' ? 'Dlaczego My' : language === 'de' ? 'Warum Wir' : 'Why Choose Us'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                {language === 'pl' ? 'Rozwiązania Dopasowane do Twoich Potrzeb' : 
                 language === 'de' ? 'Lösungen, die auf Ihre Bedürfnisse zugeschnitten sind' : 
                 'Solutions Tailored to Your Needs'}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {language === 'pl' ? 'Nasze rozwiązania są elastyczne, skalowalne i dostosowane do unikalnych wyzwań Twojej branży.' : 
                 language === 'de' ? 'Unsere Lösungen sind flexibel, skalierbar und auf die einzigartigen Herausforderungen Ihrer Branche zugeschnitten.' : 
                 'Our solutions are flexible, scalable, and tailored to the unique challenges of your industry.'}
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: language === 'pl' ? 'Rozwiązania Oparte na AI' : 
                           language === 'de' ? 'KI-basierte Lösungen' : 
                           'AI-Powered Solutions',
                    description: language === 'pl' ? 'Wykorzystujemy sztuczną inteligencję do automatyzacji procesów i poprawy doświadczeń klientów.' : 
                                 language === 'de' ? 'Wir nutzen künstliche Intelligenz, um Prozesse zu automatisieren und das Kundenerlebnis zu verbessern.' : 
                                 'We leverage artificial intelligence to automate processes and enhance customer experiences.'
                  },
                  {
                    title: language === 'pl' ? 'Skalowalność Cloud' : 
                           language === 'de' ? 'Cloud-Skalierbarkeit' : 
                           'Cloud Scalability',
                    description: language === 'pl' ? 'Rozwiązania w chmurze, które rosną wraz z Twoim biznesem i zapewniają bezpieczeństwo danych.' : 
                                 language === 'de' ? 'Cloud-Lösungen, die mit Ihrem Unternehmen wachsen und Datensicherheit gewährleisten.' : 
                                 'Cloud solutions that grow with your business and ensure data security.'
                  },
                  {
                    title: language === 'pl' ? 'Integracja Systemów' : 
                           language === 'de' ? 'Systemintegration' : 
                           'Systems Integration',
                    description: language === 'pl' ? 'Łączymy istniejące systemy w jedną spójną całość, eliminując silosy danych.' : 
                                 language === 'de' ? 'Wir verbinden bestehende Systeme zu einem kohärenten Ganzen und beseitigen Datensilos.' : 
                                 'We connect existing systems into one coherent whole, eliminating data silos.'
                  },
                  {
                    title: language === 'pl' ? 'Analiza Danych' : 
                           language === 'de' ? 'Datenanalyse' : 
                           'Data Analytics',
                    description: language === 'pl' ? 'Przekształcamy dane w praktyczne spostrzeżenia, które napędzają podejmowanie decyzji.' : 
                                 language === 'de' ? 'Wir verwandeln Daten in verwertbare Erkenntnisse, die die Entscheidungsfindung vorantreiben.' : 
                                 'We transform data into actionable insights that drive decision-making.'
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start group cursor-pointer">
                    <div className="flex-shrink-0 mr-4 w-12 h-12 rounded-full bg-gray-100 border border-primary/30 flex items-center justify-center text-primary font-bold transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <Check size={20} />
                    </div>
                    <div className="transition-all duration-300 group-hover:translate-x-2">
                      <h3 className="text-xl font-bold mb-1 transition-colors duration-300 text-gray-900 group-hover:text-primary">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl transform rotate-6 bg-primary/10"></div>
              <div className="absolute inset-0 rounded-2xl transform -rotate-3 bg-primary/5"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Data analytics visualization" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 border border-gray-200"
              />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full filter blur-2xl opacity-60"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/5 rounded-full filter blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries section with card grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16 mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {language === 'pl' ? 'Branże' : language === 'de' ? 'Branchen' : 'Industries'}
            </span>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl text-gray-900">
              {language === 'pl' ? 'Obsługiwane Branże' : language === 'de' ? 'Unterstützte Branchen' : 'Industries We Serve'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {language === 'pl' ? 'Nasze rozwiązania są dostosowane do specyficznych potrzeb różnych branż.' : 
               language === 'de' ? 'Unsere Lösungen sind auf die spezifischen Bedürfnisse verschiedener Branchen zugeschnitten.' : 
               'Our solutions are tailored to the specific needs of various industries.'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="h-full overflow-hidden rounded-lg bg-white p-8 shadow-sm border border-gray-100">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl">
                    {industry.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach section similar to Portfolio page */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-primary/20 border border-primary/30 px-4 py-1 rounded-full text-sm font-medium text-primary mb-6">
                {language === 'pl' ? 'Nasze Podejście' : language === 'de' ? 'Unser Ansatz' : 'Our Approach'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                {language === 'pl' ? 'Jak Wdrażamy Nasze Rozwiązania' : 
                 language === 'de' ? 'Wie Wir Unsere Lösungen Implementieren' : 
                 'How We Implement Our Solutions'}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {language === 'pl' ? 'Nasze podejście do wdrażania rozwiązań łączy najlepsze praktyki branżowe z innowacyjnymi metodologiami.' : 
                 language === 'de' ? 'Unser Ansatz zur Implementierung von Lösungen kombiniert Branchenstandards mit innovativen Methoden.' : 
                 'Our approach to solution implementation combines industry best practices with innovative methodologies.'}
              </p>
              <div className="space-y-6">
                {[
                  {
                    number: '01',
                    title: language === 'pl' ? 'Analiza' : language === 'de' ? 'Analyse' : 'Discovery',
                    description: language === 'pl' ? 'Poznajemy Twoje potrzeby i cele biznesowe' : 
                                 language === 'de' ? 'Wir verstehen Ihre Bedürfnisse und Geschäftsziele' : 
                                 'Understanding your needs and business goals'
                  },
                  {
                    number: '02',
                    title: language === 'pl' ? 'Planowanie' : language === 'de' ? 'Planung' : 'Planning',
                    description: language === 'pl' ? 'Definiowanie zakresu i harmonogramu' : 
                                 language === 'de' ? 'Definition von Umfang und Zeitplan' : 
                                 'Defining scope and timeline'
                  },
                  {
                    number: '03',
                    title: language === 'pl' ? 'Projektowanie' : language === 'de' ? 'Gestaltung' : 'Design',
                    description: language === 'pl' ? 'Tworzenie architektury rozwiązania' : 
                                 language === 'de' ? 'Erstellen der Lösungsarchitektur' : 
                                 'Creating solution architecture'
                  },
                  {
                    number: '04',
                    title: language === 'pl' ? 'Realizacja' : language === 'de' ? 'Umsetzung' : 'Development',
                    description: language === 'pl' ? 'Implementacja rozwiązania' : 
                                 language === 'de' ? 'Implementierung der Lösung' : 
                                 'Building the solution'
                  }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start group cursor-pointer">
                    <div className="flex-shrink-0 mr-4 w-12 h-12 rounded-full bg-gray-100 border border-primary/30 flex items-center justify-center text-primary font-bold transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      {step.number}
                    </div>
                    <div className="transition-all duration-300 group-hover:translate-x-2">
                      <h3 className="text-xl font-bold mb-1 transition-colors duration-300 text-gray-900 group-hover:text-primary">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl transform rotate-6 bg-primary/10"></div>
              <div className="absolute inset-0 rounded-2xl transform -rotate-3 bg-primary/5"></div>
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80" 
                alt="Our approach visualization" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 border border-gray-200"
              />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full filter blur-2xl opacity-60"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/5 rounded-full filter blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Solution;
