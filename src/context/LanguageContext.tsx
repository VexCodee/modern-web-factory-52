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
    aboutUs: 'O Mnie',
    portfolio: 'Portfolio',
    contact: 'Kontakt',
    getStarted: 'Rozpocznij Współpracę'
  },
  hero: {
    innovativeIt: 'Innowacyjne Rozwiązania IT',
    transformBusiness: 'Transformuj Swoją Firmę Za Pomocą Technologii',
    description: 'Dostarczam zaawansowane usługi i rozwiązania IT, które pomagają firmom prosperować w cyfrowym świecie. Od tworzenia stron internetowych po integrację z AI, jestem Twoim strategicznym partnerem technologicznym.',
    getStarted: 'Rozpocznij Współpracę',
    ourServices: 'Moje Usługi',
    innovation: 'Innowacja',
    futureReady: 'Rozwiązania przyszłości',
    performance: 'Wydajność',
    optimized: 'Zoptymalizowane procesy'
  },
  technologies: {
    tag: 'Zaawansowane Technologie',
    title: 'Technologia, Która Wspiera Twój Biznes',
    subtitle: 'Moje innowacyjne rozwiązania są projektowane z myślą o przyspieszeniu wzrostu Twojej firmy i optymalizacji procesów biznesowych. Wykorzystując najnowsze technologie, pomagam Ci osiągnąć przewagę konkurencyjną.',
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
      description: 'Połącz i zarządzaj wszystkimi swoimi urządzeniami dzięki zaawansowanej platformie IoT'
    },
    sustainable: {
      title: 'Zrównoważone Technologie',
      description: 'Ekologiczne rozwiązania technologiczne o minimalnym wpływie na środowisko'
    },
    cta: {
      title: 'Gotowy na wykorzystanie tych technologii?',
      description: 'Porozmawiajmy o tym, jak moja wiedza techniczna może pomóc w rozwoju Twojego biznesu',
      button: 'Zaplanuj Konsultację'
    }
  },
  innovation: {
    tag: 'Innowacje',
    title: 'Transformacja Cyfrowa',
    subtitle: 'Innowacyjne Rozwiązania Dla Nowoczesnych Biznesów',
    description: 'Wykorzystując sztuczną inteligencję, automatyzację i najnowsze zdobycze technologiczne, dostarczam rozwiązania, które transformują procesy biznesowe i zwiększają konkurencyjność.',
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
    cta: 'Odkryj Moje Rozwiązania',
    imageAlt: 'Innowacyjne rozwiązania technologiczne'
  },
  contact: {
    title: 'Kontakt',
    subtitle: 'Skontaktuj się ze Mną',
    description: 'Masz pytania lub chcesz omówić swój projekt? Wypełnij poniższy formularz, a odpowiem najszybciej jak to możliwe.',
    form: {
      name: 'Imię i Nazwisko',
      email: 'Adres Email',
      phone: 'Numer Telefonu',
      subject: 'Temat',
      message: 'Twoja Wiadomość',
      submit: 'Wyślij Wiadomość',
      success: 'Twoja wiadomość została wysłana pomyślnie. Odezwę się wkrótce!',
      error: 'Coś poszło nie tak. Spróbuj ponownie później.',
      sending: 'Wysyłanie...',
      selectService: 'Wybierz usługę',
      other: 'Inne'
    },
    info: {
      title: 'Informacje Kontaktowe',
      description: 'Możesz skontaktować się ze mną przez dowolny z tych kanałów:',
      address: 'Adres',
      email: 'info@vexvision.com',
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
      answer: 'Czas realizacji projektów różni się w zależności od złożoności i zakresu. Prosta strona internetowa może zająć 2-3 tygodnie, podczas gdy bardziej złożone platformy mogą trwać 1-2 miesiące. Podczas naszej początkowej konsultacji przedstawię szczegółowy harmonogram dostosowany do wymagań Twojego projektu.'
    },
    support: {
      question: 'Czy oferujesz bieżącą konserwację i wsparcie po zakończeniu projektu?',
      answer: 'Tak, oferuję różne pakiety utrzymania, aby zapewnić, że Twoje produkty cyfrowe pozostaną bezpieczne, aktualne i optymalne. Moje usługi wsparcia obejmują regularne aktualizacje, monitorowanie bezpieczeństwa, zmiany treści i pomoc techniczną.'
    },
    pricing: {
      question: 'Jak wygląda wycena projektów?',
      answer: 'Przedstawiam indywidualne oferty na podstawie konkretnych wymagań. Czynniki wpływające na cenę obejmują złożoność projektu, harmonogram, potrzebne funkcje i poziom wymaganej personalizacji. Oferuję zarówno kontrakty o stałej cenie, jak i rozliczenia według czasu i materiałów.'
    },
    industries: {
      question: 'W jakich branżach się specjalizujesz?',
      answer: 'Współpracowałem z klientami z różnych sektorów, w tym opieki zdrowotnej, finansów, handlu detalicznego, edukacji, produkcji i hotelarstwa. Szybko dostosowuję się, aby zrozumieć specyficzne dla danej branży wyzwania i wymagania.'
    },
    ai: {
      question: 'Czy możesz zintegrować sztuczną inteligencję z naszymi istniejącymi systemami?',
      answer: 'Tak, specjalizuję się w integracji rozwiązań AI z istniejącymi systemami biznesowymi. Moje podejście koncentruje się na identyfikacji najbardziej wartościowych zastosowań AI dla Twoich konkretnych potrzeb i wdrażaniu ich w sposób, który uzupełnia Twoje obecne procesy.'
    }
  },
  about: {
    title: 'O Mnie',
    subtitle: 'Kim Jestem',
    description: 'VexVision to zorientowana na przyszłość firma IT, dedykowana pomaganiu firmom w wykorzystaniu technologii do wzrostu i innowacji.',
    history: {
      title: 'Moja Historia',
      description: 'Założyłem VexVision w 2012 roku jako małe studio tworzenia stron internetowych, a od tego czasu rozwinąłem swoją działalność w pełnowymiarowe usługi IT, obsługując klientów z różnych branż.'
    },
    mission: {
      title: 'Moja Misja',
      description: 'Wzmacnianie firm innowacyjnymi rozwiązaniami technologicznymi, które napędzają wzrost, efektywność i przewagę konkurencyjną.'
    },
    values: {
      title: 'Moje Wartości',
      innovation: 'Innowacyjność',
      innovationDesc: 'Przyjmuję najnowocześniejsze technologie i kreatywne myślenie',
      quality: 'Jakość',
      qualityDesc: 'Dostarczam doskonałość w każdym projekcie i interakcji',
      integrity: 'Uczciwość',
      integrityDesc: 'Prowadzę biznes w sposób uczciwy i przejrzysty',
      collaboration: 'Współpraca',
      collaborationDesc: 'Buduję silne partnerstwa z moimi klientami'
    },
    team: {
      title: 'O Mnie',
      description: 'Jestem profesjonalistą z pasją do technologii i rozwiązywania problemów biznesowych.'
    }
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'Moje Prace',
    description: 'Poznaj moje wyróżnione projekty i zobacz, jak pomogłem firmom z różnych branż osiągnąć ich cele dzięki technologii.',
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
    title: 'Moje Usługi',
    subtitle: 'Kompleksowe Rozwiązania IT Dla Twojej Firmy',
    description: 'Oferuję szeroki zakres usług, które pomagają firmom wykorzystać technologię do zrównoważonego wzrostu i przewagi konkurencyjnej.',
    viewAll: 'Zobacz Wszystkie Usługi',
    mainBenefits: 'Główne Korzyści',
    items: {
      outsourcing: {
        title: 'Outsourcing IT',
        description: 'Wykorzystaj moje doświadczenie w zarządzaniu operacjami IT, co pozwoli Ci skupić się na podstawowej działalności i strategii rozwoju.',
        benefits: {
          cost: 'Redukcja kosztów',
          expertise: 'Dostęp do specjalistycznej wiedzy',
          scalability: 'Skalowalne usługi',
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
          certified: 'Certyfikowany serwis',
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
    title: 'Moje Rozwiązania',
    subtitle: 'Technologia Dostosowana do Twojej Branży',
    description: 'Odkryj, jak moje wyspecjalizowane rozwiązania IT mogą sprostać unikalnym wyzwaniom i możliwościom w Twojej branży.',
    industries: {
      title: 'Branże, Które Obsługuję',
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
      support: 'Wsparcie Techniczne'
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
        description: 'Przekształć surowe dane w przydatne wnioski dzięki moim kompleksowym rozwiązaniom analitycznym i business intelligence, które wspierają podejmowanie decyzji w oparciu o dane.',
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
    title: 'Dlaczego Ja',
    subtitle: 'Twój Strategiczny Partner w Doskonałości Technologicznej',
    description: 'W VexVision nie tylko świadczę usługi IT – buduję trwałe partnerstwa z moimi klientami, rozumiejąc ich cele biznesowe i dostarczając rozwiązania, które napędzają wzrost i efektywność.',
    imageAlt: 'Profesjonalne podejście do klienta',
    features: {
      expertise: {
        title: 'Sprawdzone Doświadczenie',
        description: 'Z ponad 10-letnim doświadczeniem, zbudowałem reputację niezawodnej obsługi i technicznej doskonałości.'
      },
      innovative: {
        title: 'Innowacyjne Podejście',
        description: 'Pozostaję na czele trendów technologicznych, aby dostarczać najnowocześniejsze rozwiązania, które przynoszą realne wyniki.'
      },
      team: {
        title: 'Dedykowana Obsługa',
        description: 'Jestem zaangażowany w zrozumienie Twoich unikalnych potrzeb i przekraczanie Twoich oczekiwań.'
      },
      results: {
        title: 'Mierzalne Wyniki',
        description: 'Koncentruję się na dostarczaniu rozwiązań, które zapewniają wymierną wartość biznesową i zwrot z inwestycji.'
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
    subtitle: 'Co Mówią Moi Klienci',
    description: 'Nie wierz mi na słowo. Posłuchaj, co o współpracy z VexVision mówią moi zadowoleni klienci.'
  },
  cta: {
    title: 'Gotowy na Transformację Swojej Firmy za Pomocą Technologii?',
    description: 'Nawiąż współpracę z VexVision, aby wykorzystać najnowocześniejsze rozwiązania IT, które napędzają wzrost, efektywność i innowacje w Twojej firmie.',
    getStarted: 'Rozpocznij Współpracę',
    portfolio: 'Zobacz Moje Portfolio'
  },
  footer: {
    description: 'Dostarczam innowacyjne rozwiązania IT, które napędzają rozwój biznesu i transformację cyfrową.',
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
    aboutUs: 'About Me',
    portfolio: 'Portfolio',
    contact: 'Contact',
    getStarted: 'Get Started'
  },
  hero: {
    innovativeIt: 'Innovative IT Solutions',
    transformBusiness: 'Transform Your Business Through Technology',
    description: 'I deliver advanced IT services and solutions that help businesses thrive in the digital world. From web development to AI integration, I am your strategic technology partner.',
    getStarted: 'Get Started',
    ourServices: 'My Services',
    innovation: 'Innovation',
    futureReady: 'Future-ready solutions',
    performance: 'Performance',
    optimized: 'Optimized processes'
  },
  technologies: {
    tag: 'Advanced Technologies',
    title: 'Technology That Supports Your Business',
    subtitle: 'My innovative solutions are designed to accelerate your company\'s growth and optimize business processes. By leveraging the latest technologies, I help you achieve a competitive advantage.',
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
      description: 'Connect and manage all your devices with advanced IoT platform'
    },
    sustainable: {
      title: 'Sustainable Tech',
      description: 'Eco-friendly technology solutions with minimal environmental impact'
    },
    cta: {
      title: 'Ready to leverage these technologies?',
      description: 'Let\'s discuss how my tech expertise can help your business grow',
      button: 'Schedule a Consultation'
    }
  },
  innovation: {
    tag: 'Innovation',
    title: 'Digital Transformation',
    subtitle: 'Innovative Solutions For Modern Businesses',
    description: 'Leveraging artificial intelligence, automation, and the latest technological advancements, I deliver solutions that transform business processes and increase competitiveness.',
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
    cta: 'Discover My Solutions',
    imageAlt: 'Innovative technology solutions'
  },
  contact: {
    title: 'Contact',
    subtitle: 'Get in Touch',
    description: 'Have questions or want to discuss your project? Fill out the form below and I\'ll get back to you as soon as possible.',
    form: {
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      subject: 'Subject',
      message: 'Your Message',
      submit: 'Send Message',
      success: 'Your message has been sent successfully. I\'ll get back to you soon!',
      error: 'Something went wrong. Please try again later.',
      sending: 'Sending...',
      selectService: 'Select a service',
      other: 'Other'
    },
    info: {
      title: 'Contact Information',
      description: 'You can reach me through any of these channels:',
      address: 'Address',
      email: 'info@vexvision.com',
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
      answer: 'Project timelines vary depending on complexity and scope. A simple website may take 2-3 weeks, while more complex platforms can take 1-2 months. During our initial consultation, I\'ll provide a detailed timeline tailored to your project requirements.'
    },
    support: {
      question: 'Do you offer ongoing maintenance and support after the project is completed?',
      answer: 'Yes, I offer various maintenance packages to ensure your digital products remain secure, up-to-date, and optimal. My support services include regular updates, security monitoring, content changes, and technical assistance.'
    },
    pricing: {
      question: 'How does project pricing work?',
      answer: 'I provide individualized quotes based on specific requirements. Factors that influence pricing include project complexity, timeline, features needed, and the level of customization required. I offer both fixed-price contracts and time-and-materials billing.'
    },
    industries: {
      question: 'What industries do you specialize in?',
      answer: 'I\'ve worked with clients across diverse sectors, including healthcare, finance, retail, education, manufacturing, and hospitality. I quickly adapt to understand industry-specific challenges and requirements.'
    },
    ai: {
      question: 'Can you integrate artificial intelligence with our existing systems?',
      answer: 'Yes, I specialize in integrating AI solutions with existing business systems. My approach focuses on identifying the most valuable AI applications for your specific needs and implementing them in a way that complements your current processes.'
    }
  },
  about: {
    title: 'About Me',
    subtitle: 'Who I Am',
    description: 'VexVision is a forward-thinking IT company dedicated to helping businesses leverage technology for growth and innovation.',
    history: {
      title: 'My History',
      description: 'I founded VexVision in 2012 as a small web development studio and have since grown it into a full-service IT solution provider, serving clients across various industries.'
    },
    mission: {
      title: 'My Mission',
      description: 'Empowering businesses with innovative technological solutions that drive growth, efficiency, and competitive advantage.'
    },
    values: {
      title: 'My Values',
      innovation: 'Innovation',
      innovationDesc: 'I embrace cutting-edge technologies and creative thinking',
      quality: 'Quality',
      qualityDesc: 'I deliver excellence in every project and interaction',
      integrity: 'Integrity',
      integrityDesc: 'I conduct business in an honest and transparent manner',
      collaboration: 'Collaboration',
      collaborationDesc: 'I build strong partnerships with my clients'
    },
    team: {
      title: 'About Me',
      description: 'I am a professional with a passion for technology and solving business problems.'
    }
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'My Work',
    description: 'Explore my featured projects and see how I\'ve helped businesses across different industries achieve their goals through technology.',
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
    title: 'My Services',
    subtitle: 'Comprehensive IT Solutions For Your Business',
    description: 'I offer a wide range of services that help businesses leverage technology for sustainable growth and competitive advantage.',
    viewAll: 'View All Services',
    mainBenefits: 'Main Benefits',
    items: {
      outsourcing: {
        title: 'IT Outsourcing',
        description: 'Leverage my expertise to manage your IT operations, allowing you to focus on your core business and growth strategy.',
        benefits: {
          cost: 'Cost reduction',
          expertise: 'Access to specialized expertise',
          scalability: 'Scalable services',
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
          certified: 'Certified service',
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
    title: 'My Solutions',
    subtitle: 'Technology Tailored to Your Industry',
    description: 'Discover how my specialized IT solutions can address the unique challenges and opportunities in your industry.',
    industries: {
      title: 'Industries I Serve',
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
      support: 'Technical Support'
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
        description: 'Transform raw data into actionable insights with my comprehensive analytics and business intelligence solutions that support data-driven decision making
