
import React from 'react';
import Layout from '../components/Layout';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';

const Solution = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      title: t('solutions.industries.finance'),
      description: t('Kompleksowa strategia i wdrożenie transformacji cyfrowej dla przedsiębiorstw pragnących unowocześnić swoje działania i pozostać konkurencyjnymi w erze cyfrowej.'),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
      features: [
        t("Ocena i modernizacja infrastruktury technologicznej"),
        t("Przeprojektowanie procesów biznesowych"),
        t("Migracja do chmury i optymalizacja"),
        t("Zarządzanie zmianą i szkolenia pracowników"),
        t("Wdrażanie cyfrowych przepływów pracy")
      ],
      delay: 100
    },
    {
      title: t('solutions.industries.healthcare'),
      description: t("Wykorzystaj sztuczną inteligencję, aby przekształcić interakcje z klientami, zapewniając spersonalizowane doświadczenia przy jednoczesnym zwiększeniu efektywności operacyjnej."),
      image: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      features: [
        t("Inteligentne chatboty i wirtualni asystenci"),
        t("Predykcyjna analityka klientów"),
        t("Spersonalizowane systemy rekomendacji"),
        t("Zautomatyzowane przepływy obsługi klienta"),
        t("Analiza sentymentu i przetwarzanie opinii")
      ],
      delay: 200
    },
    {
      title: t('solutions.industries.retail'),
      description: t("Kompleksowe rozwiązanie e-commerce, które płynnie integruje Twoją witrynę sklepową online z zarządzaniem zapasami, przetwarzaniem płatności, logistyką i systemami zarządzania klientami."),
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      features: [
        t("Responsywny i zoptymalizowany pod kątem konwersji sklep online"),
        t("Integracja z systemem zarządzania zapasami"),
        t("Implementacja bezpiecznej bramki płatności"),
        t("Automatyzacja realizacji zamówień i logistyki"),
        t("Zarządzanie relacjami z klientami")
      ],
      delay: 300
    },
    {
      title: t('solutions.industries.education'),
      description: t("Przekształć surowe dane w przydatne wnioski dzięki naszym kompleksowym rozwiązaniom analitycznym i business intelligence, które wspierają podejmowanie decyzji w oparciu o dane."),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      features: [
        t("Wdrożenie hurtowni danych"),
        t("Tworzenie niestandardowych dashboardów"),
        t("Modele analityki predykcyjnej"),
        t("Zautomatyzowane systemy raportowania"),
        t("Narzędzia do wizualizacji danych")
      ],
      delay: 400
    }
  ];

  const industries = [
    {
      name: t('solutions.industries.healthcare'),
      icon: "🏥",
      description: t("Bezpieczne systemy zarządzania pacjentami, platformy telemedyczne i rozwiązania analityczne dla zdrowia.")
    },
    {
      name: t('solutions.industries.finance'),
      icon: "💼",
      description: t("Bezpieczne systemy transakcyjne, wykrywanie oszustw i narzędzia do zarządzania finansami klientów.")
    },
    {
      name: t('solutions.industries.retail'),
      icon: "🛍️",
      description: t("Zarządzanie zapasami, platformy e-commerce i programy lojalnościowe dla klientów.")
    },
    {
      name: t('solutions.industries.manufacturing'),
      icon: "🏭",
      description: t("Optymalizacja produkcji, zarządzanie łańcuchem dostaw i systemy kontroli jakości.")
    },
    {
      name: t('solutions.industries.education'),
      icon: "🎓",
      description: t("Systemy zarządzania nauczaniem, narzędzia do oceny studentów i rozwiązania administracyjne.")
    },
    {
      name: t('solutions.industries.logistics'),
      icon: "🏨",
      description: t("Systemy rezerwacji, platformy dla doświadczeń gości i rozwiązania zarządzania obiektami.")
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              {t('solutions.title')}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-display font-bold leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
              {t('solutions.subtitle')}
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              {t('solutions.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center animate-fade-in`}
                style={{ animationDelay: `${solution.delay}ms` }}
              >
                <div className="w-full lg:w-1/2 lg:pr-6">
                  <h2 className="text-3xl font-display font-bold mb-6">{solution.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">{solution.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 mt-0.5">
                          <Check size={14} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-primary/90 hover:shadow-md"
                  >
                    {t('cta.getStarted')}
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-md">
                    <img 
                      src={solution.image} 
                      alt={solution.title} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              {t('solutions.industries.title')}
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-fade-in" style={{ animationDelay: '100ms' }}>
              {t('solutions.features.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
              {t('solutions.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover-lift animate-fade-in" 
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-3xl mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Solution;
