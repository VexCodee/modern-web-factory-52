import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';
import SolutionCard from '../components/SolutionCard';
import { ArrowUpRight, Check, Globe, Code, Users, PenTool, Wrench, Cpu, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Solutions = () => {
  const { t, language } = useLanguage();
  const solutionsRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    if (!solutionsRef.current) return;
    
    const items = solutionsRef.current.querySelectorAll('.solution-item');
    items.forEach(item => {
      item.classList.remove('animate-fade-in');
      item.classList.add('opacity-0');
      
      void item.offsetWidth;
    });
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });
    
    items.forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      items.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, [activeCategory]);

  const solutions = [
    {
      id: 1,
      title: language === 'pl' ? 'Tworzenie Stron Internetowych' : language === 'de' ? 'Webentwicklung' : 'Web Development',
      subtitle: language === 'pl' ? 'Nowoczesne, responsywne strony dopasowane do potrzeb' : language === 'de' ? 'Moderne, responsive Webseiten' : 'Modern, responsive websites',
      description: language === 'pl' ? 'Projektuję i tworzę nowoczesne strony internetowe, które są szybkie, responsywne i przyjazne dla użytkownika.' : language === 'de' ? 'Ich entwerfe und erstelle moderne Websites' : 'I design and create modern websites',
      stats: ["+45%", "99.9%", "60%"],
      statsLabels: ["Konwersja", "Dostępność", "Szybkość"],
      color: "bg-blue-600",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500",
      features: [
        language === 'pl' ? 'Responsywny design' : language === 'de' ? 'Responsives Design' : 'Responsive design',
        language === 'pl' ? 'Optymalizacja SEO' : language === 'de' ? 'SEO-Optimierung' : 'SEO optimization',
        language === 'pl' ? 'Integracja z CMS' : language === 'de' ? 'CMS-Integration' : 'CMS integration',
        language === 'pl' ? 'Analityka i raportowanie' : language === 'de' ? 'Analytik und Berichterstattung' : 'Analytics and reporting',
        language === 'pl' ? 'Wsparcie techniczne' : language === 'de' ? 'Technischer Support' : 'Technical support'
      ],
      tags: ["Web", "Design", "SEO"]
    },
    {
      id: 2,
      title: language === 'pl' ? 'Programowanie na Zlecenie' : language === 'de' ? 'Auftragsprogrammierung' : 'Custom Software Development',
      subtitle: language === 'pl' ? 'Dedykowane rozwiązania programistyczne dla firm' : language === 'de' ? 'Maßgeschneiderte Softwarelösungen' : 'Custom software solutions for businesses',
      description: language === 'pl' ? 'Tworzę dedykowane oprogramowanie dopasowane do specyficznych potrzeb i procesów Twojej firmy.' : language === 'de' ? 'Ich erstelle maßgeschneiderte Software' : 'I create custom software',
      stats: ["+75%", "100%", "-30%"],
      statsLabels: ["Wydajność", "Dostosowanie", "Koszty"],
      color: "bg-purple-700",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=500",
      features: [
        language === 'pl' ? 'Analiza potrzeb biznesowych' : language === 'de' ? 'Analyse der Geschäftsanforderungen' : 'Business needs analysis',
        language === 'pl' ? 'Projektowanie i rozwój' : language === 'de' ? 'Design und Entwicklung' : 'Design and development',
        language === 'pl' ? 'Testowanie i wdrażanie' : language === 'de' ? 'Testen und Implementieren' : 'Testing and implementation',
        language === 'pl' ? 'Integracja z istniejącymi systemami' : language === 'de' ? 'Integration mit bestehenden Systemen' : 'Integration with existing systems',
        language === 'pl' ? 'Długoterminowe wsparcie' : language === 'de' ? 'Langfristige Unterstützung' : 'Long-term support'
      ],
      tags: ["Software", "Development", "Custom"]
    },
    {
      id: 3,
      title: language === 'pl' ? 'IT Outsourcing' : language === 'de' ? 'IT-Outsourcing' : 'IT Outsourcing',
      subtitle: language === 'pl' ? 'Kompleksowe wsparcie IT dla Twojej firmy' : language === 'de' ? 'Umfassende IT-Unterstützung' : 'Comprehensive IT support for your business',
      description: language === 'pl' ? 'Oferuję kompleksowe usługi outsourcingu IT, które pozwalają skupić się na rozwoju Twojego biznesu.' : language === 'de' ? 'Ich biete umfassende IT-Outsourcing-Dienste an' : 'I offer comprehensive IT outsourcing services',
      stats: ["+35%", "-40%", "24/7"],
      statsLabels: ["Efektywność", "Koszty IT", "Wsparcie"],
      color: "bg-indigo-600",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=500",
      features: [
        language === 'pl' ? 'Zdalne zarządzanie infrastrukturą' : language === 'de' ? 'Remote-Infrastrukturverwaltung' : 'Remote infrastructure management',
        language === 'pl' ? 'Wsparcie techniczne' : language === 'de' ? 'Technischer Support' : 'Technical support',
        language === 'pl' ? 'Bezpieczeństwo IT' : language === 'de' ? 'IT-Sicherheit' : 'IT security',
        language === 'pl' ? 'Zarządzanie projektami IT' : language === 'de' ? 'IT-Projektmanagement' : 'IT project management',
        language === 'pl' ? 'Doradztwo technologiczne' : language === 'de' ? 'Technologieberatung' : 'Technology consulting'
      ],
      tags: ["Outsourcing", "Support", "Infrastructure"]
    },
    {
      id: 4,
      title: language === 'pl' ? 'Marketing i Social Media' : language === 'de' ? 'Marketing und Social Media' : 'Marketing & Social Media',
      subtitle: language === 'pl' ? 'Kompleksowe usługi marketingowe i zarządzanie mediami społecznościowymi' : language === 'de' ? 'Umfassende Marketingdienstleistungen' : 'Comprehensive marketing services',
      description: language === 'pl' ? 'Pomagam budować markę i docierać do klientów poprzez efektywne działania marketingowe i obecność w mediach społecznościowych.' : language === 'de' ? 'Ich helfe beim Aufbau Ihrer Marke' : 'I help build your brand',
      stats: ["+85%", "+65%", "+50%"],
      statsLabels: ["Zasięg", "Konwersja", "Zaangażowanie"],
      color: "bg-emerald-600",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500",
      features: [
        language === 'pl' ? 'Strategia marketingowa' : language === 'de' ? 'Marketingstrategie' : 'Marketing strategy',
        language === 'pl' ? 'Zarządzanie social media' : language === 'de' ? 'Social-Media-Management' : 'Social media management',
        language === 'pl' ? 'Content marketing' : language === 'de' ? 'Content-Marketing' : 'Content marketing',
        language === 'pl' ? 'Email marketing' : language === 'de' ? 'E-Mail-Marketing' : 'Email marketing',
        language === 'pl' ? 'Analityka i raportowanie' : language === 'de' ? 'Analytik und Berichterstattung' : 'Analytics and reporting'
      ],
      tags: ["Marketing", "Social Media", "Content"]
    },
    {
      id: 5,
      title: language === 'pl' ? 'Projektowanie Graficzne' : language === 'de' ? 'Grafikdesign' : 'Graphic Design',
      subtitle: language === 'pl' ? 'Profesjonalne projekty graficzne budujące Twoją markę' : language === 'de' ? 'Professionelles Grafikdesign' : 'Professional graphic design',
      description: language === 'pl' ? 'Tworzę profesjonalne projekty graficzne, które wyróżniają Twoją markę i przyciągają uwagę klientów.' : language === 'de' ? 'Ich erstelle professionelle Grafikdesigns' : 'I create professional graphic designs',
      stats: ["+70%", "+60%", "100%"],
      statsLabels: ["Rozpoznawalność", "Zaangażowanie", "Satysfakcja"],
      color: "bg-pink-600",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800&h=500",
      features: [
        language === 'pl' ? 'Identyfikacja wizualna' : language === 'de' ? 'Corporate Design' : 'Visual identity',
        language === 'pl' ? 'Projektowanie UX/UI' : language === 'de' ? 'UX/UI-Design' : 'UX/UI design',
        language === 'pl' ? 'Materiały marketingowe' : language === 'de' ? 'Marketingmaterialien' : 'Marketing materials',
        language === 'pl' ? 'Media społecznościowe' : language === 'de' ? 'Social-Media-Grafiken' : 'Social media graphics',
        language === 'pl' ? 'Animacje i multimedia' : language === 'de' ? 'Animationen und Multimedia' : 'Animations and multimedia'
      ],
      tags: ["Design", "Graphics", "Branding"]
    },
    {
      id: 6,
      title: language === 'pl' ? 'Naprawa Sprzętu' : language === 'de' ? 'Hardwarereparatur' : 'Hardware Repair',
      subtitle: language === 'pl' ? 'Profesjonalna naprawa i konserwacja sprzętu komputerowego' : language === 'de' ? 'Professionelle Reparatur und Wartung' : 'Professional repair and maintenance',
      description: language === 'pl' ? 'Oferuję profesjonalne usługi naprawy i konserwacji sprzętu komputerowego dla firm i klientów indywidualnych.' : language === 'de' ? 'Ich biete professionelle Reparatur- und Wartungsdienste an' : 'I offer professional repair and maintenance services',
      stats: ["24h", "95%", "+3 lata"],
      statsLabels: ["Czas reakcji", "Skuteczność", "Gwarancja"],
      color: "bg-amber-600",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=800&h=500",
      features: [
        language === 'pl' ? 'Diagnostyka problemów' : language === 'de' ? 'Problemdiagnose' : 'Problem diagnostics',
        language === 'pl' ? 'Naprawa komputerów i laptopów' : language === 'de' ? 'Computer- und Laptop-Reparatur' : 'Computer and laptop repair',
        language === 'pl' ? 'Aktualizacja sprzętu' : language === 'de' ? 'Hardware-Upgrades' : 'Hardware upgrades',
        language === 'pl' ? 'Odzyskiwanie danych' : language === 'de' ? 'Datenwiederherstellung' : 'Data recovery',
        language === 'pl' ? 'Konserwacja i czyszczenie' : language === 'de' ? 'Wartung und Reinigung' : 'Maintenance and cleaning'
      ],
      tags: ["Hardware", "Repair", "Support"]
    },
    {
      id: 7,
      title: language === 'pl' ? 'Automatyzacja i AI' : language === 'de' ? 'Automatisierung und KI' : 'Automation & AI',
      subtitle: language === 'pl' ? 'Wykorzystanie sztucznej inteligencji do automatyzacji i optymalizacji procesów biznesowych' : language === 'de' ? 'Einsatz künstlicher Intelligenz' : 'Using artificial intelligence',
      description: language === 'pl' ? 'Implementuję rozwiązania oparte na AI, które automatyzują rutynowe zadania i zwiększają wydajność Twojej firmy.' : language === 'de' ? 'Ich implementiere KI-basierte Lösungen' : 'I implement AI-based solutions',
      stats: ["+80%", "-50%", "+90%"],
      statsLabels: ["Wydajność", "Błędy", "Szybkość"],
      color: "bg-cyan-600",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&q=80&w=800&h=500",
      features: [
        language === 'pl' ? 'Automatyzacja procesów biznesowych' : language === 'de' ? 'Automatisierung von Geschäftsprozessen' : 'Business process automation',
        language === 'pl' ? 'Chatboty i asystenci AI' : language === 'de' ? 'Chatbots und KI-Assistenten' : 'Chatbots and AI assistants',
        language === 'pl' ? 'Analiza danych z użyciem AI' : language === 'de' ? 'KI-gestützte Datenanalyse' : 'AI-powered data analysis',
        language === 'pl' ? 'Personalizacja i rekomendacje' : language === 'de' ? 'Personalisierung und Empfehlungen' : 'Personalization and recommendations',
        language === 'pl' ? 'Optymalizacja operacji' : language === 'de' ? 'Betriebsoptimierung' : 'Operations optimization'
      ],
      tags: ["AI", "Automation", "Optimization"]
    }
  ];

  const categories = [
    { id: 'all', label: language === 'pl' ? 'Wszystkie' : language === 'de' ? 'Alle' : 'All', icon: <LayoutGrid className="mr-2 h-4 w-4" /> },
    { id: 'web', label: language === 'pl' ? 'Web' : 'Web', icon: <Globe className="mr-2 h-4 w-4" /> },
    { id: 'software', label: language === 'pl' ? 'Software' : 'Software', icon: <Code className="mr-2 h-4 w-4" /> },
    { id: 'outsourcing', label: language === 'pl' ? 'Outsourcing' : 'Outsourcing', icon: <Users className="mr-2 h-4 w-4" /> },
    { id: 'design', label: language === 'pl' ? 'Design' : 'Design', icon: <PenTool className="mr-2 h-4 w-4" /> },
    { id: 'hardware', label: language === 'pl' ? 'Sprzęt' : language === 'de' ? 'Hardware' : 'Hardware', icon: <Wrench className="mr-2 h-4 w-4" /> },
    { id: 'ai', label: language === 'pl' ? 'AI' : 'AI', icon: <Cpu className="mr-2 h-4 w-4" /> },
  ];

  const filteredSolutions = activeCategory === 'all' 
    ? solutions 
    : solutions.filter(sol => {
        const categoryTagMap: Record<string, string[]> = {
          'web': ['web'],
          'software': ['software', 'development', 'custom'],
          'outsourcing': ['outsourcing', 'support'],
          'design': ['design', 'graphics', 'branding'],
          'hardware': ['hardware', 'repair'],
          'ai': ['ai', 'automation', 'optimization']
        };
        
        const relevantTags = categoryTagMap[activeCategory.toLowerCase()] || [activeCategory.toLowerCase()];
        
        return sol.tags.some(tag => 
          relevantTags.includes(tag.toLowerCase())
        );
      });

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
                {language === 'pl' ? 'Moje Rozwiązania' : language === 'de' ? 'Meine Lösungen' : 'My Solutions'}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {language === 'pl' ? 'i Możliwości' : language === 'de' ? '& Möglichkeiten' : '& Capabilities'}
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                {language === 'pl' 
                  ? 'Oferuję wyspecjalizowane rozwiązania IT, które pomagają firmom pokonywać wyzwania i osiągać nowe możliwości.' 
                  : language === 'de' 
                    ? 'Ich biete spezialisierte IT-Lösungen an, die Unternehmen helfen, Herausforderungen zu bewältigen und neue Möglichkeiten zu erschließen.'
                    : 'I offer specialized IT solutions that help businesses overcome challenges and unlock new opportunities across industries.'}
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
                      <div className="text-gray-400 text-sm">{language === 'pl' ? 'Wyróżnione Rozwiązanie' : language === 'de' ? 'Ausgewählte Lösung' : 'Featured Solution'}</div>
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
          <span className="text-sm mb-1">{language === 'pl' ? 'Przewiń, aby odkryć więcej' : language === 'de' ? 'Scrollen Sie, um mehr zu entdecken' : 'Scroll to explore'}</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-[scrollDown_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>

      <section id="solutions-section" ref={solutionsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {t('solutions.subtitle')}
            </span>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl text-gray-900">
              {language === 'pl' ? 'Moje Główne Rozwiązania' : language === 'de' ? 'Meine Hauptlösungen' : 'My Core Solutions'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {language === 'pl' 
                ? 'Specjalizuję się w dostarczaniu innowacyjnych rozwiązań cyfrowych, które napędzają sukces biznesowy.'
                : language === 'de'
                ? 'Ich bin spezialisiert auf die Bereitstellung innovativer digitaler Lösungen, die den Geschäftserfolg fördern.'
                : 'I specialize in delivering innovative digital solutions that drive business success.'}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                className={`mb-2 ${activeCategory === category.id ? 'bg-primary' : 'bg-white'}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon}
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSolutions.length > 0 ? (
              filteredSolutions.map((solution, index) => (
                <div key={solution.id} className="solution-item opacity-0">
                  <SolutionCard
                    title={solution.title}
                    description={solution.description}
                    features={solution.features}
                    image={solution.image}
                    index={index}
                    tags={solution.tags}
                    stats={solution.stats}
                    statsLabels={solution.statsLabels}
                    subtitle={solution.subtitle}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-10">
                <p className="text-lg text-gray-500">
                  {language === 'pl' 
                    ? 'Nie znaleziono rozwiązań w tej kategorii.' 
                    : language === 'de' 
                      ? 'Keine Lösungen in dieser Kategorie gefunden.' 
                      : 'No solutions found in this category.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-primary/20 border border-primary/30 px-4 py-1 rounded-full text-sm font-medium text-primary mb-6">
                {language === 'pl' ? 'Dlaczego Ja' : language === 'de' ? 'Warum Ich' : 'Why Me'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                {language === 'pl' ? 'Rozwiązania Dopasowane do Twoich Potrzeb' : 
                 language === 'de' ? 'Lösungen, die auf Ihre Bedürfnisse zugeschnitten sind' : 
                 'Solutions Tailored to Your Needs'}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {language === 'pl' ? 'Moje rozwiązania są elastyczne, skalowalne i dostosowane do unikalnych wyzwań Twojej branży.' : 
                 language === 'de' ? 'Meine Lösungen sind flexibel, skalierbar und auf die einzigartigen Herausforderungen Ihrer Branche zugeschnitten.' : 
                 'My solutions are flexible, scalable, and tailored to the unique challenges of your industry.'}
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: language === 'pl' ? 'Rozwiązania Oparte na AI' : 
                           language === 'de' ? 'KI-basierte Lösungen' : 
                           'AI-Powered Solutions',
                    description: language === 'pl' ? 'Wykorzystuję sztuczną inteligencję do automatyzacji procesów i poprawy doświadczeń klientów.' : 
                                 language === 'de' ? 'Ich nutze künstliche Intelligenz, um Prozesse zu automatisieren und das Kundenerlebnis zu verbessern.' : 
                                 'I leverage artificial intelligence to automate processes and enhance customer experiences.'
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
                    description: language === 'pl' ? 'Łączę istniejące systemy w jedną spójną całość, eliminując silosy danych.' : 
                                 language === 'de' ? 'Ich verbinde bestehende Systeme zu einem kohärenten Ganzen und beseitige Datensilos.' : 
                                 'I connect existing systems into one coherent whole, eliminating data silos.'
                  },
                  {
                    title: language === 'pl' ? 'Analiza Danych' : 
                           language === 'de' ? 'Datenanalyse' : 
                           'Data Analytics',
                    description: language === 'pl' ? 'Przekształcam dane w praktyczne spostrzeżenia, które napędzają podejmowanie decyzji.' : 
                                 language === 'de' ? 'Ich verwandle Daten in verwertbare Erkenntnisse, die die Entscheidungsfindung vorantreiben.' : 
                                 'I transform data into actionable insights that drive decision-making.'
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16 mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {language === 'pl' ? 'Branże' : language === 'de' ? 'Branchen' : 'Industries'}
            </span>
            <h2 className="mt-6 text-3xl font-bold md:text-4xl text-gray-900">
              {language === 'pl' ? 'Obsługiwane Branże' : language === 'de' ? 'Unterstützte Branchen' : 'Industries Served'}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {language === 'pl' 
                ? 'Moje rozwiązania sprawdzają się w różnych branżach, pomagając firmom wykorzystać potencjał technologii.'
                : language === 'de'
                ? 'Meine Lösungen bewähren sich in verschiedenen Branchen und helfen Unternehmen, das Potenzial der Technologie zu nutzen.'
                : 'My solutions work across various industries, helping businesses harness the power of technology.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{industry.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Solutions;
