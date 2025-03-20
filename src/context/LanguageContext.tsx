import React, { createContext, useContext, useState } from 'react';

// Struktura tłumaczeń dla wszystkich języków
export interface Translations {
  [key: string]: string | { [key: string]: string | Translations };
}

interface LanguageContextType {
  language: 'pl' | 'en' | 'de';
  setLanguage: (lang: 'pl' | 'en' | 'de') => void;
  translations: {
    pl: Translations;
    en: Translations;
    de: Translations;
  };
}

// Tłumaczenia w języku polskim
const polishTranslations: Translations = {
  navbar: {
    home: 'Strona Główna',
    services: 'Usługi',
    solutions: 'Rozwiązania',
    aboutUs: 'O Nas',
    portfolio: 'Portfolio',
    contact: 'Kontakt',
    getStarted: 'Rozpocznij Współpracę'
  },
  hero: {
    innovativeIt: 'Innowacyjne Rozwiązania IT',
    transformBusiness: 'Transformuj Swoją Firmę Za Pomocą Technologii',
    description: 'Dostarczamy zaawansowane usługi i rozwiązania IT, które pomagają firmom prosperować w cyfrowym świecie. Od tworzenia stron internetowych po integrację z AI, jesteśmy Twoim strategicznym partnerem technologicznym.',
    getStarted: 'Rozpocznij Współpracę',
    ourServices: 'Nasze Usługi',
    innovation: 'Innowacja',
    futureReady: 'Rozwiązania przyszłości',
    performance: 'Wydajność',
    optimized: 'Zoptymalizowane procesy'
  },
  technologies: {
    tag: 'Zaawansowane Technologie',
    title: 'Technologia, Która Wspiera Twój Biznes',
    subtitle: 'Nasze innowacyjne rozwiązania są projektowane z myślą o przyspieszeniu wzrostu Twojej firmy i optymalizacji procesów biznesowych. Wykorzystując najnowsze technologie, pomagamy Ci osiągnąć przewagę konkurencyjną.',
    cloud: {
      title: 'Cloud Computing',
      description: 'Wydajne rozwiązania infrastruktury chmurowej, które skalują się wraz z potrzebami Twojego biznesu'
    },
    ai: {
      title: 'Sztuczna Inteligencja',
      description: 'Inteligentne rozwiązania AI, które przekształcają dane w cenne spostrzeżenia biznesowe'
    },
    iot: {
      title: 'IoT i Edge Computing',
      description: 'Połącz i zarządzaj wszystkimi swoimi urządzeniami dzięki naszej zaawansowanej platformie IoT'
    },
    sustainable: {
      title: 'Zrównoważone Technologie',
      description: 'Ekologiczne rozwiązania technologiczne o minimalnym wpływie na środowisko'
    },
    cta: {
      title: 'Gotowy na wykorzystanie tych technologii?',
      description: 'Porozmawiajmy o tym, jak nasza wiedza techniczna może pomóc w rozwoju Twojego biznesu',
      button: 'Zaplanuj Konsultację'
    }
  },
  innovation: {
    tag: 'Innowacje',
    title: 'Transformacja Cyfrowa',
    subtitle: 'Innowacyjne Rozwiązania Dla Nowoczesnych Biznesów',
    description: 'Wykorzystując sztuczną inteligencję, automatyzację i najnowsze zdobycze technologiczne, dostarczamy rozwiązania, które transformują procesy biznesowe i zwiększają konkurencyjność.',
    heading: 'Technologia, Która Wspiera Twój Biznes',
    innovation: {
      title: 'Innowacja',
      description: 'Rozwiązania przyszłości'
    },
    benefits: {
      automated: 'Zautomatyzowane procesy biznesowe',
      ai: 'Inteligentne rozwiązania oparte o AI',
      cloud: 'Skalowalna infrastruktura w chmurze',
      security: 'Zabezpieczenia na poziomie enterprise'
    },
    cta: 'Odkryj Nasze Rozwiązania',
    imageAlt: 'Innowacyjne rozwiązania technologiczne'
  },
  contact: {
    title: 'Kontakt',
    subtitle: 'Skontaktuj się z Nami',
    description: 'Masz pytania lub chcesz omówić swój projekt? Wypełnij poniższy formularz, a nasz zespół skontaktuje się z Tobą wkrótce.',
    form: {
      name: 'Imię i Nazwisko',
      email: 'Adres Email',
      phone: 'Numer Telefonu',
      subject: 'Temat',
      message: 'Twoja Wiadomość',
      submit: 'Wyślij Wiadomość',
      success: 'Twoja wiadomość została wysłana pomyślnie. Odezwiemy się wkrótce!',
      error: 'Coś poszło nie tak. Spróbuj ponownie później.',
      sending: 'Wysyłanie...',
      selectService: 'Wybierz usługę',
      other: 'Inne'
    },
    info: {
      title: 'Informacje Kontaktowe',
      description: 'Możesz skontaktować się z nami przez dowolny z tych kanałów:',
      address: 'Adres',
      email: 'info@techprime.com',
      phone: '+48 555 123 456',
      hours: 'Poniedziałek-Piątek, 9:00-18:00',
      map: 'Mapa Lokalizacji'
    },
    faq: {
      title: 'Często Zadawane Pytania',
      description: 'Odpowiedzi na najczęściej zadawane pytania'
    }
  },
  faq: {
    development: {
      question: 'Jak długo zwykle trwa realizacja projektu tworzenia strony internetowej?',
      answer: 'Czas realizacji projektów różni się w zależności od złożoności i zakresu. Prosta strona internetowa może zająć 4-6 tygodni, podczas gdy bardziej złożone platformy mogą trwać 3-6 miesięcy. Podczas naszej początkowej konsultacji przedstawimy szczegółowy harmonogram dostosowany do wymagań Twojego projektu.'
    },
    support: {
      question: 'Czy oferujecie bieżącą konserwację i wsparcie po zakończeniu projektu?',
      answer: 'Tak, oferujemy różne pakiety utrzymania, aby zapewnić, że Twoje produkty cyfrowe pozostaną bezpieczne, aktualne i optymalne. Nasze usługi wsparcia obejmują regularne aktualizacje, monitorowanie bezpieczeństwa, zmiany treści i pomoc techniczną.'
    },
    pricing: {
      question: 'Jak wygląda wycena projektów?',
      answer: 'Przedstawiamy indywidualne oferty na podstawie konkretnych wymagań. Czynniki wpływające na cenę obejmują złożoność projektu, harmonogram, potrzebne funkcje i poziom wymaganej personalizacji. Oferujemy zarówno kontrakty o stałej cenie, jak i rozliczenia według czasu i materiałów.'
    },
    industries: {
      question: 'W jakich branżach się specjalizujecie?',
      answer: 'Współpracowaliśmy z klientami z różnych sektorów, w tym opieki zdrowotnej, finansów, handlu detalicznego, edukacji, produkcji i hotelarstwa. Nasz zespół szybko dostosowuje się, aby zrozumieć specyficzne dla danej branży wyzwania i wymagania.'
    },
    ai: {
      question: 'Czy możecie zintegrować sztuczną inteligencję z naszymi istniejącymi systemami?',
      answer: 'Tak, specjalizujemy się w integracji rozwiązań AI z istniejącymi systemami biznesowymi. Nasze podejście koncentruje się na identyfikacji najbardziej wartościowych zastosowań AI dla Twoich konkretnych potrzeb i wdrażaniu ich w sposób, który uzupełnia Twoje obecne procesy.'
    }
  },
  about: {
    title: 'O Nas',
    subtitle: 'Kim Jesteśmy',
    description: 'TechPrime to zorientowana na przyszłość firma IT, dedykowana pomaganiu firmom w wykorzystaniu technologii do wzrostu i innowacji.',
    history: {
      title: 'Nasza Historia',
      description: 'Założona w 2012 roku, TechPrime rozpoczęła działalność jako małe studio tworzenia stron internetowych, a od tego czasu rozwinęła się w pełnowymiarowego dostawcę rozwiązań IT, obsługując klientów z różnych branż na całym świecie.'
    },
    mission: {
      title: 'Nasza Misja',
      description: 'Wzmacnianie firm innowacyjnymi rozwiązaniami technologicznymi, które napędzają wzrost, efektywność i przewagę konkurencyjną.'
    },
    values: {
      title: 'Nasze Wartości',
      innovation: 'Innowacyjność',
      innovationDesc: 'Przyjmujemy najnowocześniejsze technologie i kreatywne myślenie',
      quality: 'Jakość',
      qualityDesc: 'Dostarczamy doskonałość w każdym projekcie i interakcji',
      integrity: 'Uczciwość',
      integrityDesc: 'Prowadzimy biznes w sposób uczciwy i przejrzysty',
      collaboration: 'Współpraca',
      collaborationDesc: 'Budujemy silne partnerstwa z naszymi klientami i w ramach naszego zespołu'
    },
    team: {
      title: 'Nasz Zespół',
      description: 'Poznaj utalentowanych profesjonalistów stojących za sukcesem TechPrime.'
    }
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'Nasze Prace',
    description: 'Poznaj nasze wyróżnione projekty i zobacz, jak pomogliśmy firmom z różnych branż osiągnąć ich cele dzięki technologii.',
    categories: {
      all: 'Wszystkie Projekty',
      web: 'Tworzenie Stron WWW',
      mobile: 'Aplikacje Mobilne',
      design: 'Projektowanie',
      ai: 'Rozwiązania AI'
    },
    viewProject: 'Zobacz Projekt',
    noProjects: 'Nie znaleziono projektów w tej kategorii.'
  },
  services: {
    title: 'Nasze Usługi',
    subtitle: 'Kompleksowe Rozwiązania IT Dla Twojej Firmy',
    description: 'Oferujemy szeroki zakres usług, które pomagają firmom wykorzystać technologię do zrównoważonego wzrostu i przewagi konkurencyjnej.',
    viewAll: 'Zobacz Wszystkie Usługi',
    mainBenefits: 'Główne Korzyści',
    items: {
      outsourcing: {
        title: 'Outsourcing IT',
        description: 'Wykorzystaj nasze doświadczenie w zarządzaniu operacjami IT, co pozwoli Ci skupić się na podstawowej działalności i strategii rozwoju.',
        benefits: {
          cost: 'Redukcja kosztów',
          expertise: 'Dostęp do specjalistycznej wiedzy',
          scalability: 'Skalowalne zasoby',
          focus: 'Skupienie się na głównej działalności'
        }
      },
      webDev: {
        title: 'Tworzenie Stron WWW',
        description: 'Niestandardowe strony internetowe i rozwiązania e-commerce z oszałamiającym designem, zoptymalizowaną wydajnością i płynnym doświadczeniem użytkownika.',
        benefits: {
          responsive: 'Responsywny design',
          seo: 'Optymalizacja SEO',
          secure: 'Bezpieczne transakcje',
          custom: 'Niestandardowe funkcjonalności'
        }
      },
      graphic: {
        title: 'Projektowanie Graficzne',
        description: 'Przyciągające wzrok treści wizualne, które wzmacniają tożsamość Twojej marki i skutecznie komunikują Twoje przesłanie.',
        benefits: {
          brand: 'Spójność marki',
          user: 'Design zorientowany na użytkownika',
          creative: 'Kreatywne koncepcje',
          cross: 'Zasoby wieloplatformowe'
        }
      },
      hardware: {
        title: 'Naprawa Sprzętu',
        description: 'Profesjonalne usługi diagnozy i naprawy komputerów oraz sprzętu IT, minimalizujące przestoje w działalności Twojej firmy.',
        benefits: {
          quick: 'Szybka realizacja',
          certified: 'Certyfikowani technicy',
          quality: 'Wysokiej jakości części zamienne',
          preventive: 'Konserwacja zapobiegawcza'
        }
      },
      ai: {
        title: 'Rozwiązania AI',
        description: 'Zaawansowane wdrożenia sztucznej inteligencji do automatyzacji procesów i pozyskiwania cennych informacji z danych.',
        benefits: {
          automation: 'Automatyzacja procesów',
          analytics: 'Analityka predykcyjna',
          nlp: 'Przetwarzanie języka naturalnego',
          ml: 'Integracja uczenia maszynowego'
        }
      },
      marketing: {
        title: 'Marketing',
        description: 'Strategiczne kampanie marketingu cyfrowego, które zwiększają ruch, generują leady i zwiększają współczynniki konwersji.',
        benefits: {
          targeted: 'Ukierunkowane kampanie',
          performance: 'Śledzenie wydajności',
          content: 'Strategia treści',
          conversion: 'Optymalizacja konwersji'
        }
      },
      social: {
        title: 'Zarządzanie Mediami Społecznościowymi',
        description: 'Kompleksowe strategie mediów społecznościowych budujące obecność Twojej marki, angażujące odbiorców i napędzające rozwój biznesu.',
        benefits: {
          calendar: 'Kalendarz treści',
          engagement: 'Zaangażowanie społeczności',
          optimization: 'Optymalizacja platform',
          analytics: 'Analityka wydajności'
        }
      },
      project: {
        title: 'Zarządzanie Projektami',
        description: 'Profesjonalne planowanie, realizacja i nadzór nad projektami technologicznymi, zapewniające ich terminowe dostarczanie w ramach budżetu.',
        benefits: {
          communication: 'Jasna komunikacja',
          risk: 'Zarządzanie ryzykiem',
          resource: 'Optymalizacja zasobów',
          quality: 'Zapewnienie jakości'
        }
      }
    }
  },
  solutions: {
    title: 'Nasze Rozwiązania',
    subtitle: 'Technologia Dostosowana do Twojej Branży',
    description: 'Odkryj, jak nasze wyspecjalizowane rozwiązania IT mogą sprostać unikalnym wyzwaniom i możliwościom w Twojej branży.',
    industries: {
      title: 'Branże, Które Obsługujemy',
      finance: 'Usługi Finansowe',
      healthcare: 'Ochrona Zdrowia',
      retail: 'Handel Detaliczny i E-commerce',
      manufacturing: 'Produkcja',
      education: 'Edukacja',
      logistics: 'Logistyka i Transport'
    },
    industriesDesc: {
      healthcare: 'Bezpieczne systemy zarządzania pacjentami, platformy telemedyczne i rozwiązania analityczne dla zdrowia.',
      finance: 'Bezpieczne systemy transakcyjne, wykrywanie oszustw i narzędzia do zarządzania finansami klientów.',
      retail: 'Zarządzanie zapasami, platformy e-commerce i programy lojalnościowe dla klientów.',
      manufacturing: 'Optymalizacja produkcji, zarządzanie łańcuchem dostaw i systemy kontroli jakości.',
      education: 'Systemy zarządzania nauczaniem, narzędzia do oceny studentów i rozwiązania administracyjne.',
      logistics: 'Optymalizacja tras, śledzenie przesyłek i zarządzanie flotą dla firm transportowych.'
    },
    features: {
      title: 'Cechy Rozwiązań',
      scalable: 'Skalowalna Infrastruktura',
      secure: 'Bezpieczeństwo Klasy Korporacyjnej',
      integrated: 'Bezproblemowa Integracja',
      support: 'Wsparcie Techniczne 24/7'
    },
    items: {
      digitalTransformation: {
        title: 'Transformacja Cyfrowa',
        description: 'Kompleksowa strategia i wdrożenie transformacji cyfrowej dla przedsiębiorstw pragnących unowocześnić swoje działania i pozostać konkurencyjnymi w erze cyfrowej.',
        features: {
          infrastructure: 'Ocena i modernizacja infrastruktury technologicznej',
          processes: 'Przeprojektowanie procesów biznesowych',
          migration: 'Migracja do chmury i optymalizacja',
          change: 'Zarządzanie zmianą i szkolenia pracowników',
          workflow: 'Wdrażanie cyfrowych przepływów pracy'
        }
      },
      aiCustomerExperience: {
        title: 'AI dla Obsługi Klienta',
        description: 'Wykorzystaj sztuczną inteligencję, aby przekształcić interakcje z klientami, zapewniając spersonalizowane doświadczenia przy jednoczesnym zwiększeniu efektywności operacyjnej.',
        features: {
          chatbots: 'Inteligentne chatboty i wirtualni asystenci',
          analytics: 'Predykcyjna analityka klientów',
          recommendations: 'Spersonalizowane systemy rekomendacji',
          automation: 'Zautomatyzowane przepływy obsługi klienta',
          sentiment: 'Analiza sentymentu i przetwarzanie opinii'
        }
      },
      ecommerce: {
        title: 'Rozwiązania E-commerce',
        description: 'Kompleksowe rozwiązanie e-commerce, które płynnie integruje Twoją witrynę sklepową online z zarządzaniem zapasami, przetwarzaniem płatności, logistyką i systemami zarządzania klientami.',
        features: {
          responsive: 'Responsywny i zoptymalizowany pod kątem konwersji sklep online',
          inventory: 'Integracja z systemem zarządzania zapasami',
          payment: 'Implementacja bezpiecznej bramki płatności',
          fulfillment: 'Automatyzacja realizacji zamówień i logistyki',
          crm: 'Zarządzanie relacjami z klientami'
        }
      },
      dataAnalytics: {
        title: 'Analityka Danych',
        description: 'Przekształć surowe dane w przydatne wnioski dzięki naszym kompleksowym rozwiązaniom analitycznym i business intelligence, które wspierają podejmowanie decyzji w oparciu o dane.',
        features: {
          warehouse: 'Wdrożenie hurtowni danych',
          dashboards: 'Tworzenie niestandardowych dashboardów',
          predictive: 'Modele analityki predykcyjnej',
          reporting: 'Zautomatyzowane systemy raportowania',
          visualization: 'Narzędzia do wizualizacji danych'
        }
      }
    }
  },
  whyChooseUs: {
    title: 'Dlaczego My',
    subtitle: 'Twój Strategiczny Partner w Doskonałości Technologicznej',
    description: 'W TechPrime nie tylko świadczymy usługi IT – budujemy trwałe partnerstwa z naszymi klientami, rozumiejąc ich cele biznesowe i dostarczając rozwiązania, które napędzają wzrost i efektywność.',
    imageAlt: 'Współpraca zespołowa',
    features: {
      expertise: {
        title: 'Sprawdzone Doświadczenie',
        description: 'Z ponad 10-letnim doświadczeniem, zbudowaliśmy reputację niezawodnej obsługi i technicznej doskonałości.'
      },
      innovative: {
        title: 'Innowacyjne Podejście',
        description: 'Pozostajemy na czele trendów technologicznych, aby dostarczać najnowocześniejsze rozwiązania, które przynoszą realne wyniki.'
      },
      team: {
        title: 'Dedykowany Zespół',
        description: 'Nasi wykwalifikowani specjaliści są zaangażowani w zrozumienie Twoich unikalnych potrzeb i przekraczanie Twoich oczekiwań.'
      },
      results: {
        title: 'Mierzalne Wyniki',
        description: 'Koncentrujemy się na dostarczaniu rozwiązań, które zapewniają wymierną wartość biznesową i zwrot z inwestycji.'
      }
    },
    stats: {
      clients: 'Zadowolonych Klientów',
      satisfaction: 'Satysfakcji',
      experience: 'Lat Doświadczenia'
    }
  },
  testimonials: {
    title: 'Referencje',
    subtitle: 'Co Mówią Nasi Klienci',
    description: 'Nie wierz nam na słowo. Posłuchaj, co o współpracy z TechPrime mówią nasi zadowoleni klienci.'
  },
  cta: {
    title: 'Gotowy na Transformację Swojej Firmy za Pomocą Technologii?',
    description: 'Nawiąż współpracę z TechPrime, aby wykorzystać najnowocześniejsze rozwiązania IT, które napędzają wzrost, efektywność i innowacje w Twojej firmie.',
    getStarted: 'Rozpocznij Współpracę',
    portfolio: 'Zobacz Nasze Portfolio'
  },
  footer: {
    description: 'Dostarczamy innowacyjne rozwiązania IT, które napędzają rozwój biznesu i transformację cyfrową.',
    services: 'Usługi',
    company: 'Firma',
    contact: 'Kontakt',
    rights: 'Wszelkie prawa zastrzeżone.',
    privacy: 'Polityka Prywatności',
    terms: 'Warunki Korzystania z Usług'
  },
  notFound: {
    title: 'Strona Nie Znaleziona',
    description: 'Strona, której szukasz, nie istnieje lub została przeniesiona. Wróćmy na właściwy tor.',
    backHome: 'Powrót do Strony Głównej'
  }
};

// Tłumaczenia w języku angielskim
const englishTranslations: Translations = {
  navbar: {
    home: 'Home',
    services: 'Services',
    solutions: 'Solutions',
    aboutUs: 'About Us',
    portfolio: 'Portfolio',
    contact: 'Contact',
    getStarted: 'Get Started'
  },
  hero: {
    innovativeIt: 'Innovative IT Solutions',
    transformBusiness: 'Transform Your Business Through Technology',
    description: 'We deliver advanced IT services and solutions that help businesses thrive in the digital world. From web development to AI integration, we are your strategic technology partner.',
    getStarted: 'Get Started',
    ourServices: 'Our Services',
    innovation: 'Innovation',
    futureReady: 'Future-ready solutions',
    performance: 'Performance',
    optimized: 'Optimized processes'
  },
  technologies: {
    tag: 'Advanced Technologies',
    title: 'Technology That Supports Your Business',
    subtitle: 'Our innovative solutions are designed to accelerate your company\'s growth and optimize business processes. By leveraging the latest technologies, we help you achieve a competitive advantage.',
    cloud: {
      title: 'Cloud Computing',
      description: 'Powerful cloud infrastructure solutions that scale with your business needs'
    },
    ai: {
      title: 'Artificial Intelligence',
      description: 'Smart AI solutions that transform data into valuable business insights'
    },
    iot: {
      title: 'IoT & Edge Computing',
      description: 'Connect and manage all your devices with our advanced IoT platform'
    },
    sustainable: {
      title: 'Sustainable Tech',
      description: 'Eco-friendly technology solutions with minimal environmental impact'
    },
    cta: {
      title: 'Ready to leverage these technologies?',
      description: 'Let\'s discuss how our tech expertise can help your business grow',
      button: 'Schedule a Consultation'
    }
  },
  innovation: {
    tag: 'Innovation',
    title: 'Digital Transformation',
    subtitle: 'Innovative Solutions For Modern Businesses',
    description: 'Leveraging artificial intelligence, automation, and the latest technological advancements, we deliver solutions that transform business processes and increase competitiveness.',
    heading: 'Technology That Supports Your Business',
    innovation: {
      title: 'Innovation',
      description: 'Future-ready solutions'
    },
    benefits: {
      automated: 'Automated business processes',
      ai: 'Intelligent AI-powered solutions',
      cloud: 'Scalable cloud infrastructure',
      security: 'Enterprise-grade security'
    },
    cta: 'Discover Our Solutions',
    imageAlt: 'Innovative technology solutions'
  },
  contact: {
    title: 'Contact',
    subtitle: 'Get in Touch',
    description: 'Have questions or want to discuss your project? Fill out the form below and our team will get back to you soon.',
    form: {
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      subject: 'Subject',
      message: 'Your Message',
      submit: 'Send Message',
      success: 'Your message has been sent successfully. We\'ll get back to you soon!',
      error: 'Something went wrong. Please try again later.',
      sending: 'Sending...',
      selectService: 'Select a service',
      other: 'Other'
    },
    info: {
      title: 'Contact Information',
      description: 'You can reach us through any of these channels:',
      address: 'Address',
      email: 'info@techprime.com',
      phone: '+48 555 123 456',
      hours: 'Monday-Friday, 9:00-18:00',
      map: 'Location Map'
    },
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Answers to the most common questions'
    }
  },
  faq: {
    development: {
      question: 'How long does a typical website development project take?',
      answer: 'Project timelines vary depending on complexity and scope. A simple website may take 4-6 weeks, while more complex platforms can take 3-6 months. During our initial consultation, we\'ll provide a detailed timeline tailored to your project requirements.'
    },
    support: {
      question: 'Do you offer ongoing maintenance and support after the project is completed?',
      answer: 'Yes, we offer various maintenance packages to ensure your digital products remain secure, up-to-date, and optimal. Our support services include regular updates, security monitoring, content changes, and technical assistance.'
    },
    pricing: {
      question: 'How does project pricing work?',
      answer: 'We provide individualized quotes based on specific requirements. Factors that influence pricing include project complexity, timeline, features needed, and the level of customization required. We offer both fixed-price contracts and time-and-materials billing.'
    },
    industries: {
      question: 'What industries do you specialize in?',
      answer: 'We\'ve worked with clients across diverse sectors, including healthcare, finance, retail, education, manufacturing, and hospitality. Our team quickly adapts to understand industry-specific challenges and requirements.'
    },
    ai: {
      question: 'Can you integrate artificial intelligence with our existing systems?',
      answer: 'Yes, we specialize in integrating AI solutions with existing business systems. Our approach focuses on identifying the most valuable AI applications for your specific needs and implementing them in a way that complements your current processes.'
    }
  },
  about: {
    title: 'About Us',
    subtitle: 'Who We Are',
    description: 'TechPrime is a forward-thinking IT company dedicated to helping businesses leverage technology for growth and innovation.',
    history: {
      title: 'Our History',
      description: 'Founded in 2012, TechPrime started as a small web development studio and has since grown into a full-service IT solutions provider, serving clients across various industries worldwide.'
    },
    mission: {
      title: 'Our Mission',
      description: 'Empowering businesses with innovative technological solutions that drive growth, efficiency, and competitive advantage.'
    },
    values: {
      title: 'Our Values',
      innovation: 'Innovation',
      innovationDesc: 'We embrace cutting-edge technologies and creative thinking',
      quality: 'Quality',
      qualityDesc: 'We deliver excellence in every project and interaction',
      integrity: 'Integrity',
      integrityDesc: 'We conduct business in an honest and transparent manner',
      collaboration: 'Collaboration',
      collaborationDesc: 'We build strong partnerships with our clients and within our team'
    },
    team: {
      title: 'Our Team',
      description: 'Meet the talented professionals behind TechPrime\'s success.'
    }
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'Our Work',
    description: 'Explore our featured projects and see how we\'ve helped businesses across different industries achieve their goals through technology.',
    categories: {
      all: 'All Projects',
      web: 'Web Development',
      mobile: 'Mobile Apps',
      design: 'Design',
      ai: 'AI Solutions'
    },
    viewProject: 'View Project',
    noProjects: 'No projects found in this category.'
  },
  services: {
    title: 'Our Services',
    subtitle: 'Comprehensive IT Solutions For Your Business',
    description: 'We offer a wide range of services that help businesses leverage technology for sustainable growth and competitive advantage.',
    viewAll: 'View All Services',
    mainBenefits: 'Main Benefits',
    items: {
      outsourcing: {
        title: 'IT Outsourcing',
        description: 'Leverage our expertise to manage your IT operations, allowing you to focus on your core business and growth strategy.',
        benefits: {
          cost: 'Cost reduction',
          expertise: 'Access to specialized expertise',
          scalability: 'Scalable resources',
          focus: 'Focus on core business'
        }
      },
      webDev: {
        title: 'Web Development',
        description: 'Custom websites and e-commerce solutions with stunning design, optimized performance, and seamless user experience.',
        benefits: {
          responsive: 'Responsive design',
          seo: 'SEO optimization',
          secure: 'Secure transactions',
          custom: 'Custom functionality'
        }
      },
      graphic: {
        title: 'Graphic Design',
        description: 'Eye-catching visual content that strengthens your brand identity and effectively communicates your message.',
        benefits: {
          brand: 'Brand consistency',
          user: 'User-centered design',
          creative: 'Creative concepts',
          cross: 'Cross-platform assets'
        }
      },
      hardware: {
        title: 'Hardware Repair',
        description: 'Professional diagnosis and repair services for all IT equipment, minimizing downtime for your business.',
        benefits: {
          quick: 'Quick turnaround',
          certified: 'Certified technicians',
          quality: 'High-quality replacement parts',
          preventive: 'Preventive maintenance'
        }
      },
      ai: {
        title: 'AI Solutions',
        description: 'Advanced artificial intelligence implementations to automate processes and gain valuable insights from data.',
        benefits: {
          automation: 'Process automation',
          analytics: 'Predictive analytics',
          nlp: 'Natural language processing',
          ml: 'Machine learning integration'
        }
      },
      marketing: {
        title: 'Marketing',
        description: 'Strategic digital marketing campaigns that drive traffic, generate leads, and increase conversion rates.',
        benefits: {
          targeted: 'Targeted campaigns',
          performance: 'Performance tracking',
          content: 'Content strategy',
          conversion: 'Conversion optimization'
        }
      },
      social: {
        title: 'Social Media Management',
        description: 'Comprehensive social media strategies that build your brand presence, engage audiences, and drive business growth.',
        benefits: {
          calendar: 'Content calendar',
          engagement: 'Community engagement',
          optimization: 'Platform optimization',
          analytics: 'Performance analytics'
        }
      },
      project: {
        title: 'Project Management',
        description: 'Professional planning, execution, and oversight of technology projects, ensuring on-time delivery within budget.',
        benefits: {
          communication: 'Clear communication',
          risk: 'Risk management',
          resource: 'Resource optimization',
          quality: 'Quality assurance'
        }
      }
    }
  },
  solutions: {
    title: 'Our Solutions',
    subtitle: 'Technology Tailored to Your Industry',
    description: 'Discover how our specialized IT solutions can address the unique challenges and opportunities in your industry.',
    industries: {
      title: 'Industries We Serve',
      finance: 'Financial Services',
      healthcare: 'Healthcare',
      retail: 'Retail & E-commerce',
      manufacturing: 'Manufacturing',
      education: 'Education',
      logistics: 'Logistics & Transportation'
    },
    industriesDesc: {
      healthcare: 'Secure patient management systems, telemedicine platforms, and health analytics solutions.',
      finance: 'Secure transaction systems, fraud detection, and customer financial management tools.',
      retail: 'Inventory management, e-commerce platforms, and customer loyalty programs.',
      manufacturing: 'Production optimization, supply chain management, and quality control systems.',
      education: 'Learning management systems, student assessment tools, and administrative solutions.',
      logistics: 'Route optimization, shipment tracking, and fleet management for transportation companies.'
    },
    features: {
      title: 'Solution Features',
      scalable: 'Scalable Infrastructure',
      secure: 'Enterprise-Grade Security',
      integrated: 'Seamless Integration',
      support: '24/7 Technical Support'
    },
    items: {
      digitalTransformation: {
        title: 'Digital Transformation',
        description: 'Comprehensive strategy and implementation of digital transformation for enterprises looking to modernize their operations and stay competitive in the digital era.',
        features: {
          infrastructure: 'Technology infrastructure assessment and modernization',
          processes: 'Business process redesign',
          migration: 'Cloud migration and optimization',
          change: 'Change management and employee training',
          workflow: 'Digital workflow implementation'
        }
      },
      aiCustomerExperience: {
        title: 'AI Customer Experience',
        description: 'Leverage artificial intelligence to transform customer interactions, providing personalized experiences while increasing operational efficiency.',
        features: {
          chatbots: 'Intelligent chatbots and virtual assistants',
          analytics: 'Predictive customer analytics',
          recommendations: 'Personalized recommendation systems',
          automation: 'Automated customer service workflows',
          sentiment: 'Sentiment analysis and feedback processing'
        }
      },
      ecommerce: {
        title: 'E-commerce Solutions',
        description: 'Comprehensive e-commerce solution that seamlessly integrates your online storefront with inventory management, payment processing, logistics, and customer management systems.',
        features: {
          responsive: 'Responsive and conversion-optimized online store',
          inventory: 'Inventory management system integration',
          payment: 'Secure payment gateway implementation',
          fulfillment: 'Order fulfillment and logistics automation',
          crm: 'Customer relationship management'
        }
      },
      dataAnalytics: {
        title: 'Data Analytics',
        description: 'Transform raw data into actionable insights with our comprehensive analytics and business intelligence solutions that support data-driven decision making.',
        features: {
          warehouse: 'Data warehouse implementation',
          dashboards: 'Custom dashboard creation',
          predictive: 'Predictive analytics models',
          reporting: 'Automated reporting systems',
          visualization: 'Data visualization tools'
        }
      }
    }
  },
  whyChooseUs: {
    title: 'Why Choose Us',
    subtitle: 'Your Strategic Partner in Technological Excellence',
    description: 'At TechPrime, we don\'t just provide IT services – we build lasting partnerships with our clients, understanding their business goals and delivering solutions that drive growth and efficiency.',
    imageAlt: 'Team collaboration',
    features: {
      expertise: {
        title: 'Proven Expertise',
        description: 'With over 10 years of experience, we\'ve built a reputation for reliable service and technical excellence.'
      },
      innovative: {
        title: 'Innovative Approach',
        description: 'We stay ahead of technology trends to deliver cutting-edge solutions that bring real results.'
      },
      team: {
        title: 'Dedicated Team',
        description: 'Our skilled specialists are committed to understanding your unique needs and exceeding your expectations.'
      },
      results: {
        title: 'Measurable Results',
        description: 'We focus on delivering solutions that provide tangible business value and return on investment.'
      }
    },
    stats: {
      clients: 'Satisfied Clients',
      satisfaction: 'Satisfaction Rate',
      experience: 'Years of Experience'
    }
  },
  testimonials: {
    title: 'Testimonials',
    subtitle: 'What Our Clients Say',
    description: 'Don\'t just take our word for it. Hear what our satisfied clients have to say about working with TechPrime.'
  },
  cta: {
    title: 'Ready to Transform Your Business Through Technology?',
    description: 'Partner with TechPrime to leverage cutting-edge IT solutions that drive growth, efficiency, and innovation in your business.',
    getStarted: 'Get Started',
    portfolio: 'View Our Portfolio'
  },
  footer: {
    description: 'We deliver innovative IT solutions that drive business growth and digital transformation.',
    services: 'Services',
    company: 'Company',
    contact: 'Contact',
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service'
  },
  notFound: {
    title: 'Page Not Found',
    description: 'The page you are looking for doesn\'t exist or has been moved. Let\'s get you back on track.',
    backHome: 'Back to Home'
  }
};

// Tłumaczenia w języku niemieckim
const germanTranslations: Translations = {
  navbar: {
    home: 'Startseite',
    services: 'Dienstleistungen',
    solutions: 'Lösungen',
    aboutUs: 'Über Uns',
    portfolio: 'Portfolio',
    contact: 'Kontakt',
    getStarted: 'Jetzt Starten'
  },
  hero: {
    innovativeIt: 'Innovative IT-Lösungen',
    transformBusiness: 'Transformieren Sie Ihr Unternehmen durch Technologie',
    description: 'Wir bieten fortschrittliche IT-Dienstleistungen und Lösungen, die Unternehmen helfen, in der digitalen Welt zu gedeihen. Von der Webentwicklung bis zur KI-Integration sind wir Ihr strategischer Technologiepartner.',
    getStarted: 'Jetzt Starten',
    ourServices: 'Unsere Dienstleistungen',
    innovation: 'Innovation',
    futureReady: 'Zukunftssichere Lösungen',
    performance: 'Leistung',
    optimized: 'Optimierte Prozesse'
  },
  technologies: {
    tag: 'Fortschrittliche Technologien',
    title: 'Technologie, Die Ihr Unternehmen Unterstützt',
    subtitle: 'Unsere innovativen Lösungen sind darauf ausgerichtet, das Wachstum Ihres Unternehmens zu beschleunigen und Geschäftsprozesse zu optimieren. Durch den Einsatz der neuesten Technologien helfen wir Ihnen, einen Wettbewerbsvorteil zu erzielen.',
    cloud: {
      title: 'Cloud Computing',
      description: 'Leistungsstarke Cloud-Infrastrukturlösungen, die mit den Bedürfnissen Ihres Unternehmens skalieren'
    },
    ai: {
      title: 'Künstliche Intelligenz',
      description: 'Intelligente KI-Lösungen, die Daten in wertvolle Geschäftseinblicke umwandeln'
    },
    iot: {
      title: 'IoT & Edge Computing',
      description: 'Verbinden und verwalten Sie alle Ihre Geräte mit unserer fortschrittlichen IoT-Plattform'
    },
    sustainable: {
      title: 'Nachhaltige Technologie',
      description: 'Umweltfreundliche Technologielösungen mit minimaler Umweltbelastung'
    },
    cta: {
      title: 'Bereit, diese Technologien zu nutzen?',
      description: 'Lassen Sie uns besprechen, wie unser technisches Know-how Ihrem Unternehmen beim Wachstum helfen kann',
      button: 'Beratungsgespräch Vereinbaren'
    }
  },
  innovation: {
    tag: 'Innovation',
    title: 'Digitale Transformation',
    subtitle: 'Innovative Lösungen Für Moderne Unternehmen',
    description: 'Durch den Einsatz von künstlicher Intelligenz, Automatisierung und den neuesten technologischen Errungenschaften liefern wir Lösungen, die Geschäftsprozesse transformieren und die Wettbewerbsfähigkeit steigern.',
    heading: 'Technologie, Die Ihr Unternehmen Unterstützt',
    innovation: {
      title: 'Innovation',
      description: 'Zukunftssichere Lösungen'
    },
    benefits: {
      automated: 'Automatisierte Geschäftsprozesse',
      ai: 'Intelligente KI-gestützte Lösungen',
      cloud: 'Skalierbare Cloud-Infrastruktur',
      security: 'Sicherheit auf Unternehmensniveau'
    },
    cta: 'Entdecken Sie Unsere Lösungen',
    imageAlt: 'Innovative Technologielösungen'
  },
  contact: {
    title: 'Kontakt',
    subtitle: 'Kontaktieren Sie Uns',
    description: 'Haben Sie Fragen oder möchten Sie Ihr Projekt besprechen? Füllen Sie das untenstehende Formular aus, und unser Team wird sich in Kürze bei Ihnen melden.',
    form: {
      name: 'Vollständiger Name',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      subject: 'Betreff',
      message: 'Ihre Nachricht',
      submit: 'Nachricht Senden',
      success: 'Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bald bei Ihnen!',
      error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut.',
      sending: 'Senden...',
      selectService: 'Dienstleistung auswählen',
      other: 'Andere'
    },
    info: {
      title: 'Kontaktinformationen',
      description: 'Sie können uns über einen dieser Kanäle erreichen:',
      address: 'Adresse',
      email: 'info@techprime.com',
      phone: '+48 555 123 456',
      hours: 'Montag-Freitag, 9:00-18:00 Uhr',
      map: 'Standortkarte'
    },
    faq: {
      title: 'Häufig Gestellte Fragen',
      description: 'Antworten auf die häufigsten Fragen'
    }
  },
  faq: {
    development: {
      question: 'Wie lange dauert ein typisches Webentwicklungsprojekt?',
      answer: 'Die Projektdauer variiert je nach Komplexität und Umfang. Eine einfache Website kann 4-6 Wochen dauern, während komplexere Plattformen 3-6 Monate in Anspruch nehmen können. Bei unserem ersten Beratungsgespräch erstellen wir einen detaillierten Zeitplan, der auf Ihre Projektanforderungen zugeschnitten ist.'
    },
    support: {
      question: 'Bieten Sie nach Abschluss des Projekts laufende Wartung und Support an?',
      answer: 'Ja, wir bieten verschiedene Wartungspakete an, um sicherzustellen, dass Ihre digitalen Produkte sicher, aktuell und optimal bleiben. Unsere Supportleistungen umfassen regelmäßige Updates, Sicherheitsüberwachung, Inhaltsänderungen und technische Unterstützung.'
    },
    pricing: {
      question: 'Wie funktioniert die Projektpreisgestaltung?',
      answer: 'Wir erstellen individuelle Angebote auf Basis spezifischer Anforderungen. Faktoren, die den Preis beeinflussen, sind Projektkomplexität, Zeitplan, benötigte Funktionen und der Grad der erforderlichen Anpassung. Wir bieten sowohl Festpreisverträge als auch Abrechnung nach Aufwand.'
    },
    industries: {
      question: 'Auf welche Branchen sind Sie spezialisiert?',
      answer: 'Wir haben mit Kunden aus verschiedenen Branchen zusammengearbeitet, darunter Gesundheitswesen, Finanzen, Einzelhandel, Bildung, Fertigung und Gastgewerbe. Unser Team passt sich schnell an, um branchenspezifische Herausforderungen und Anforderungen zu verstehen.'
    },
    ai: {
      question: 'Können Sie künstliche Intelligenz in unsere bestehenden Systeme integrieren?',
      answer: 'Ja, wir sind darauf spezialisiert, KI-Lösungen in bestehende Geschäftssysteme zu integrieren. Unser Ansatz konzentriert sich darauf, die wertvollsten KI-Anwendungen für Ihre spezifischen Bedürfnisse zu identifizieren und sie so zu implementieren, dass sie Ihre aktuellen Prozesse ergänzen.'
    }
  },
  about: {
    title: 'Über Uns',
    subtitle: 'Wer Wir Sind',
    description: 'TechPrime ist ein zukunftsorientiertes IT-Unternehmen, das sich darauf konzentriert, Unternehmen dabei zu helfen, Technologie für Wachstum und Innovation zu nutzen.',
    history: {
      title: 'Unsere Geschichte',
      description: 'TechPrime wurde 2012 gegründet, begann als kleines Webentwicklungsstudio und hat sich seitdem zu einem Full-Service-IT-Lösungsanbieter entwickelt, der Kunden aus verschiedenen Branchen weltweit bedient.'
    },
    mission: {
      title: 'Unsere Mission',
      description: 'Wir stärken Unternehmen mit innovativen technologischen Lösungen, die Wachstum, Effizienz und Wettbewerbsvorteile fördern.'
    },
    values: {
      title: 'Unsere Werte',
      innovation: 'Innovation',
      innovationDesc: 'Wir setzen auf modernste Technologien und kreatives Denken',
      quality: 'Qualität',
      qualityDesc: 'Wir liefern Exzellenz in jedem Projekt und jeder Interaktion',
      integrity: 'Integrität',
      integrityDesc: 'Wir führen unser Geschäft auf ehrliche und transparente Weise',
      collaboration: 'Zusammenarbeit',
      collaborationDesc: 'Wir bauen starke Partnerschaften mit unseren Kunden und innerhalb unseres Teams auf'
    },
    team: {
      title: 'Unser Team',
      description: 'Lernen Sie die talentierten Fachleute kennen, die hinter dem Erfolg von TechPrime stehen.'
    }
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'Unsere Arbeit',
    description: 'Entdecken Sie unsere vorgestellten Projekte und sehen Sie, wie wir Unternehmen aus verschiedenen Branchen geholfen haben, ihre Ziele durch Technologie zu erreichen.',
    categories: {
      all: 'Alle Projekte',
      web: 'Webentwicklung',
      mobile: 'Mobile Apps',
      design: 'Design',
      ai: 'KI-Lösungen'
    },
    viewProject: 'Projekt Ansehen',
    noProjects: 'Keine Projekte in dieser Kategorie gefunden.'
  },
  services: {
    title: 'Unsere Dienstleistungen',
    subtitle: 'Umfassende IT-Lösungen für Ihr Unternehmen',
    description: 'Wir bieten ein breites Spektrum an Dienstleistungen, die Unternehmen dabei helfen, Technologie für nachhaltiges Wachstum und Wettbewerbsvorteile zu nutzen.',
    viewAll: 'Alle Dienstleistungen Anzeigen',
    mainBenefits: 'Hauptvorteile',
    items: {
      outsourcing: {
        title: 'IT-Outsourcing',
        description: 'Nutzen Sie unser Know-how für die Verwaltung Ihrer IT-Abläufe, damit Sie sich auf Ihr Kerngeschäft und Ihre Wachstumsstrategie konzentrieren können.',
        benefits: {
          cost: 'Kostenreduzierung',
          expertise: 'Zugang zu Fachwissen',
          scalability: 'Skalierbare Ressourcen',
          focus: 'Fokus auf Kerngeschäft'
        }
      },
      webDev: {
        title: 'Webentwicklung',
        description: 'Maßgeschneiderte Websites und E-Commerce-Lösungen mit beeindruckendem Design, optimierter Leistung und nahtloser Benutzererfahrung.',
        benefits: {
          responsive: 'Responsives Design',
          seo: 'SEO-Optimierung',
          secure: 'Sichere Transaktionen',
          custom: 'Individuelle Funktionalität'
        }
      },
      graphic: {
        title: 'Grafikdesign',
        description: 'Auffällige visuelle Inhalte, die Ihre Markenidentität stärken und Ihre Botschaft effektiv kommunizieren.',
        benefits: {
          brand: 'Markenkonsistenz',
          user: 'Nutzerzentriertes Design',
          creative: 'Kreative Konzepte',
          cross: 'Plattformübergreifende Assets'
        }
      },
      hardware: {
        title: 'Hardware-Reparatur',
        description: 'Professionelle Diagnose- und Reparaturdienste für alle IT-Geräte, die Ausfallzeiten für Ihr Unternehmen minimieren.',
        benefits: {
          quick: 'Schnelle Bearbeitung',
          certified: 'Zertifizierte Techniker',
          quality: 'Hochwertige Ersatzteile',
          preventive: 'Vorbeugende Wartung'
        }
      },
      ai: {
        title: 'KI-Lösungen',
        description: 'Fortschrittliche Implementierungen künstlicher Intelligenz zur Automatisierung von Prozessen und zur Gewinnung wertvoller Erkenntnisse aus Daten.',
        benefits: {
          automation: 'Prozessautomatisierung',
          analytics: 'Prädiktive Analytik',
          nlp: 'Verarbeitung natürlicher Sprache',
          ml: 'Integration von maschinellem Lernen'
        }
      },
      marketing: {
        title: 'Marketing',
        description: 'Strategische digitale Marketingkampagnen, die Traffic generieren, Leads erzeugen und Konversionsraten erhöhen.',
        benefits: {
          targeted: 'Gezielte Kampagnen',
          performance: 'Leistungsverfolgung',
          content: 'Content-Strategie',
          conversion: 'Konversionsoptimierung'
        }
      },
      social: {
        title: 'Social-Media-Management',
        description: 'Umfassende Social-Media-Strategien, die Ihre Markenpräsenz aufbauen, Zielgruppen ansprechen und das Unternehmenswachstum fördern.',
        benefits: {
          calendar: 'Content-Kalender',
          engagement: 'Community-Engagement',
          optimization: 'Plattformoptimierung',
          analytics: 'Leistungsanalyse'
        }
      },
      project: {
        title: 'Projektmanagement',
        description: 'Professionelle Planung, Ausführung und Überwachung von Technologieprojekten, die eine termingerechte Lieferung im Rahmen des Budgets gewährleisten.',
        benefits: {
          communication: 'Klare Kommunikation',
          risk: 'Risikomanagement',
          resource: 'Ressourcenoptimierung',
          quality: 'Qualitätssicherung'
        }
      }
    }
  },
  solutions: {
    title: 'Unsere Lösungen',
    subtitle: 'Technologie maßgeschneidert für Ihre Branche',
    description: 'Entdecken Sie, wie unsere spezialisierten IT-Lösungen die einzigartigen Herausforderungen und Möglichkeiten in Ihrer Branche adressieren können.',
    industries: {
      title: 'Branchen, die wir bedienen',
      finance: 'Finanzdienstleistungen',
      healthcare: 'Gesundheitswesen',
      retail: 'Einzelhandel & E-Commerce',
      manufacturing: 'Fertigung',
      education: 'Bildung',
      logistics: 'Logistik & Transport'
    },
    industriesDesc: {
      healthcare: 'Sichere Patientenmanagementsysteme, Telemedizin-Plattformen und Gesundheitsanalytik-Lösungen.',
      finance: 'Sichere Transaktionssysteme, Betrugserkennung und Kundenfinanzmanagement-Tools.',
      retail: 'Bestandsverwaltung, E-Commerce-Plattformen und Kundenbindungsprogramme.',
      manufacturing: 'Produktionsoptimierung, Lieferkettenmanagement und Qualitätskontrollsysteme.',
      education: 'Lernmanagementsysteme, Beurteilungswerkzeuge für Schüler und Verwaltungslösungen.',
      logistics: 'Routenoptimierung, Sendungsverfolgung und Flottenmanagement für Transportunternehmen.'
    },
    features: {
      title: 'Lösungsmerkmale',
      scalable: 'Skalierbare Infrastruktur',
      secure: 'Unternehmensklasse-Sicherheit',
      integrated: 'Nahtlose Integration',
      support: '24/7 Technischer Support'
    },
    items: {
      digitalTransformation: {
        title: 'Digitale Transformation',
        description: 'Umfassende Strategie und Implementierung der digitalen Transformation für Unternehmen, die ihre Abläufe modernisieren und im digitalen Zeitalter wettbewerbsfähig bleiben wollen.',
        features: {
          infrastructure: 'Bewertung und Modernisierung der technologischen Infrastruktur',
          processes: 'Neugestaltung von Geschäftsprozessen',
          migration: 'Cloud-Migration und -Optimierung',
          change: 'Änderungsmanagement und Mitarbeiterschulung',
          workflow: 'Implementierung digitaler Arbeitsabläufe'
        }
      },
      aiCustomerExperience: {
        title: 'KI-Kundenerfahrung',
        description: 'Nutzen Sie künstliche Intelligenz, um Kundeninteraktionen zu transformieren, personalisierte Erfahrungen zu bieten und gleichzeitig die betriebliche Effizienz zu steigern.',
        features: {
          chatbots: 'Intelligente Chatbots und virtuelle Assistenten',
          analytics: 'Prädiktive Kundenanalyse',
          recommendations: 'Personalisierte Empfehlungssysteme',
          automation: 'Automatisierte Kundenservice-Arbeitsabläufe',
          sentiment: 'Stimmungsanalyse und Feedback-Verarbeitung'
        }
      },
      ecommerce: {
        title: 'E-Commerce-Lösungen',
        description: 'Umfassende E-Commerce-Lösung, die Ihre Online-Präsenz nahtlos mit Bestandsverwaltung, Zahlungsabwicklung, Logistik und Kundenmanagementsystemen integriert.',
        features: {
          responsive: 'Responsive und konversionsoptimierter Online-Shop',
          inventory: 'Integration des Bestandsverwaltungssystems',
          payment: 'Implementierung sicherer Zahlungsgateways',
          fulfillment: 'Auftragsabwicklung und Logistikautomatisierung',
          crm: 'Kundenbeziehungsmanagement'
        }
      },
      dataAnalytics: {
        title: 'Datenanalyse',
        description: 'Verwandeln Sie Rohdaten in umsetzbare Erkenntnisse mit unseren umfassenden Analyse- und Business-Intelligence-Lösungen, die datengestützte Entscheidungsfindung unterstützen.',
        features: {
          warehouse: 'Implementierung von Data Warehouses',
          dashboards: 'Erstellung benutzerdefinierter Dashboards',
          predictive: 'Prädiktive Analysemodelle',
          reporting: 'Automatisierte Berichtssysteme',
          visualization: 'Datenvisualisierungstools'
        }
      }
    }
  },
  whyChooseUs: {
    title: 'Warum Uns Wählen',
    subtitle: 'Ihr strategischer Partner für technologische Exzellenz',
    description: 'Bei TechPrime bieten wir nicht nur IT-Dienstleistungen an – wir bauen dauerhafte Partnerschaften mit unseren Kunden auf, verstehen ihre Geschäftsziele und liefern Lösungen, die Wachstum und Effizienz fördern.',
    imageAlt: 'Teamzusammenarbeit',
    features: {
      expertise: {
        title: 'Bewährte Expertise',
        description: 'Mit über 10 Jahren Erfahrung haben wir uns einen Ruf für zuverlässigen Service und technische Exzellenz aufgebaut.'
      },
      innovative: {
        title: 'Innovativer Ansatz',
        description: 'Wir bleiben Technologietrends voraus, um modernste Lösungen zu liefern, die echte Ergebnisse bringen.'
      },
      team: {
        title: 'Engagiertes Team',
        description: 'Unsere qualifizierten Spezialisten sind bestrebt, Ihre einzigartigen Bedürfnisse zu verstehen und Ihre Erwartungen zu übertreffen.'
      },
      results: {
        title: 'Messbare Ergebnisse',
        description: 'Wir konzentrieren uns darauf, Lösungen zu liefern, die einen greifbaren Geschäftswert und Return on Investment bieten.'
      }
    },
    stats: {
      clients: 'Zufriedene Kunden',
      satisfaction: 'Zufriedenheitsrate',
      experience: 'Jahre Erfahrung'
    }
  },
  testimonials: {
    title: 'Referenzen',
    subtitle: 'Was Unsere Kunden Sagen',
    description: 'Verlassen Sie sich nicht nur auf unser Wort. Hören Sie, was unsere zufriedenen Kunden über die Zusammenarbeit mit TechPrime zu sagen haben.'
  },
  cta: {
    title: 'Bereit, Ihr Unternehmen durch Technologie zu transformieren?',
    description: 'Arbeiten Sie mit TechPrime zusammen, um modernste IT-Lösungen zu nutzen, die Wachstum, Effizienz und Innovation in Ihrem Unternehmen fördern.',
    getStarted: 'Jetzt Starten',
    portfolio: 'Unser Portfolio Ansehen'
  },
  footer: {
    description: 'Wir liefern innovative IT-Lösungen, die Unternehmenswachstum und digitale Transformation fördern.',
    services: 'Dienstleistungen',
    company: 'Unternehmen',
    contact: 'Kontakt',
    rights: 'Alle Rechte vorbehalten.',
    privacy: 'Datenschutzrichtlinie',
    terms: 'Nutzungsbedingungen'
  },
  notFound: {
    title: 'Seite Nicht Gefunden',
    description: 'Die Seite, die Sie suchen, existiert nicht oder wurde verschoben. Lassen Sie uns Sie wieder auf den richtigen Weg bringen.',
    backHome: 'Zurück zur Startseite'
  }
};

// Funkcja pomocnicza do bezpiecznego dostępu do tłumaczeń
export const getTranslation = (translations: any, path: string): string => {
  if (!translations) {
    console.warn(`Brak obiektu tłumaczeń dla ścieżki: ${path}`);
    return '';
  }
  
  const parts = path.split('.');
  let current = translations;
  
  for (const part of parts) {
    if (current[part] === undefined) {
      console.warn(`Brak tłumaczenia dla ścieżki: ${path}`);
      return '';
    }
    current = current[part];
  }
  
  if (typeof current !== 'string') {
    console.warn(`Oczekiwany string w ścieżce: ${path}, otrzymano:`, current);
    return '';
  }
  
  return current;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'pl',
  setLanguage: () => {},
  translations: {
    pl: polishTranslations,
    en: englishTranslations,
    de: germanTranslations
  }
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'pl' | 'en' | 'de'>('pl');
  
  // Ustawienie atrybutu lang dla dokumentu HTML
  document.documentElement.lang = language;
  
  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        translations: {
          pl: polishTranslations,
          en: englishTranslations,
          de: germanTranslations
        }
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  // Zwracamy funkcję, która ułatwia korzystanie z tłumaczeń aktualnego języka
  const t = (path: string): string => {
    const currentTranslations = 
      context.language === 'pl' ? context.translations.pl : 
      context.language === 'en' ? context.translations.en : 
      context.translations.de;
    
    return getTranslation(currentTranslations, path);
  };
  
  return {
    ...context,
    t
  };
};
