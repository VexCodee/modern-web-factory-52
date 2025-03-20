
import React from 'react';
import Layout from '../components/Layout';
import { ArrowRight, UserPlus, Globe, Palette, Wrench, Bot, BarChart3, Share2, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';

const ServicePage = () => {
  const services = [
    {
      icon: <UserPlus size={24} />,
      title: "Outsourcing IT",
      description: "Wykorzystaj nasze doświadczenie do zarządzania operacjami IT, co pozwoli Ci skupić się na kluczowej działalności biznesowej. Oferujemy dedykowane zespoły, usługi projektowe i zarządzane rozwiązania IT dostosowane do Twoich konkretnych potrzeb.",
      benefits: ["Redukcja kosztów", "Dostęp do specjalistycznej wiedzy", "Skalowalne zasoby", "Skupienie się na głównej działalności"],
      delay: 100
    },
    {
      icon: <Globe size={24} />,
      title: "Tworzenie Stron WWW",
      description: "Od responsywnych stron internetowych po złożone aplikacje webowe i platformy e-commerce, dostarczamy niestandardowe rozwiązania internetowe, które są zgodne z Twoimi celami biznesowymi i zapewniają wyjątkowe doświadczenia użytkownika.",
      benefits: ["Responsywny design", "Optymalizacja SEO", "Bezpieczne transakcje", "Niestandardowe funkcjonalności"],
      delay: 200
    },
    {
      icon: <Palette size={24} />,
      title: "Projektowanie Graficzne",
      description: "Nasz kreatywny zespół tworzy zachwycające wizualnie projekty, które wzmacniają tożsamość Twojej marki i skutecznie komunikują Twoje przesłanie we wszystkich mediach cyfrowych i drukowanych.",
      benefits: ["Spójność marki", "Design zorientowany na użytkownika", "Kreatywne koncepcje", "Zasoby wieloplatformowe"],
      delay: 300
    },
    {
      icon: <Wrench size={24} />,
      title: "Naprawa Sprzętu",
      description: "Szybkie i niezawodne usługi diagnozy i naprawy całego sprzętu IT. Minimalizujemy przestoje i zapewniamy optymalną wydajność Twojego sprzętu.",
      benefits: ["Szybka realizacja", "Certyfikowani technicy", "Wysokiej jakości części zamienne", "Konserwacja zapobiegawcza"],
      delay: 400
    },
    {
      icon: <Bot size={24} />,
      title: "Rozwiązania AI",
      description: "Wykorzystaj moc sztucznej inteligencji do automatyzacji procesów, uzyskiwania informacji z danych i tworzenia inteligentnych systemów, które uczą się i dostosowują do Twojego środowiska biznesowego.",
      benefits: ["Automatyzacja procesów", "Analityka predykcyjna", "Przetwarzanie języka naturalnego", "Integracja uczenia maszynowego"],
      delay: 500
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Marketing",
      description: "Strategiczne kampanie marketingu cyfrowego, które generują ruch, pozyskują potencjalnych klientów i zwiększają współczynniki konwersji. Łączymy kreatywność z podejściem opartym na danych, aby zmaksymalizować Twój zwrot z inwestycji.",
      benefits: ["Ukierunkowane kampanie", "Śledzenie wydajności", "Strategia treści", "Optymalizacja konwersji"],
      delay: 600
    },
    {
      icon: <Share2 size={24} />,
      title: "Zarządzanie Mediami Społecznościowymi",
      description: "Kompleksowe strategie mediów społecznościowych, które budują obecność Twojej marki, angażują odbiorców i napędzają rozwój biznesu poprzez efektywne zarządzanie treścią i społecznością.",
      benefits: ["Kalendarz treści", "Zaangażowanie społeczności", "Optymalizacja platform", "Analityka wydajności"],
      delay: 700
    },
    {
      icon: <ClipboardList size={24} />,
      title: "Zarządzanie Projektami",
      description: "Profesjonalne planowanie, realizacja i nadzór nad projektami technologicznymi, zapewniające terminową dostawę, w ramach budżetu i zgodnie z najwyższymi standardami jakości.",
      benefits: ["Jasna komunikacja", "Zarządzanie ryzykiem", "Optymalizacja zasobów", "Zapewnienie jakości"],
      delay: 800
    }
  ];

  return (
    <Layout>
      {/* Sekcja Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              Nasze Usługi
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-display font-bold leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
              Kompleksowe Rozwiązania IT dla Nowoczesnych Firm
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Od tworzenia stron internetowych po integrację z AI, oferujemy pełne spektrum usług technologicznych, które pomogą Twojej firmie prosperować w erze cyfrowej.
            </p>
          </div>
        </div>
      </section>

      {/* Lista Usług */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md animate-fade-in" 
                style={{ animationDelay: `${service.delay}ms` }}
              >
                <div className="p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  
                  <h4 className="font-medium text-lg mb-3">Główne Korzyści:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Dowiedz się więcej
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nasz Proces */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              Nasz Proces
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-fade-in" style={{ animationDelay: '100ms' }}>
              Jak Dostarczamy Doskonałość
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Nasze strukturalne podejście zapewnia, że każdy projekt jest realizowany efektywnie i spełnia najwyższe standardy jakości.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Odkrycie",
                description: "Zaczynamy od dogłębnego zrozumienia Twoich celów biznesowych, wyzwań i wymagań.",
                delay: 300
              },
              {
                number: "02",
                title: "Planowanie",
                description: "Nasz zespół tworzy kompleksową strategię i mapę drogową projektu z jasnymi rezultatami i terminami.",
                delay: 400
              },
              {
                number: "03",
                title: "Realizacja",
                description: "Wdrażamy rozwiązanie wykorzystując najlepsze praktyki i najnowocześniejsze technologie, z regularnymi aktualizacjami postępu.",
                delay: 500
              },
              {
                number: "04",
                title: "Wsparcie",
                description: "Po wdrożeniu zapewniamy bieżącą konserwację i wsparcie, aby zagwarantować optymalną wydajność.",
                delay: 600
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 animate-fade-in" 
                style={{ animationDelay: `${step.delay}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default ServicePage;
