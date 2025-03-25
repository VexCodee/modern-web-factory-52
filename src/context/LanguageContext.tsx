
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
        description: 'Transform raw data into actionable insights with my comprehensive analytics and business intelligence solutions that support data-driven decision making.',
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
    title: 'Why Me',
    subtitle: 'Your Strategic Partner in Technological Excellence',
    description: 'At VexVision, I don\'t just provide IT services – I build lasting partnerships with my clients, understanding their business goals and delivering solutions that drive growth and efficiency.',
    imageAlt: 'Professional approach to clients',
    features: {
      expertise: {
        title: 'Proven Expertise',
        description: 'With over 10 years of experience, I\'ve built a reputation for reliable service and technical excellence.'
      },
      innovative: {
        title: 'Innovative Approach',
        description: 'I stay at the forefront of technology trends to deliver cutting-edge solutions that bring real results.'
      },
      team: {
        title: 'Dedicated Service',
        description: 'I am committed to understanding your unique needs and exceeding your expectations.'
      },
      results: {
        title: 'Measurable Results',
        description: 'I focus on delivering solutions that provide tangible business value and return on investment.'
      }
    },
    stats: {
      clients: 'Satisfied Clients',
      satisfaction: 'Satisfaction',
      experience: 'Years of Experience'
    }
  },
  testimonials: {
    title: 'Testimonials',
    subtitle: 'What My Clients Say',
    description: 'Don\'t take my word for it. Hear what my satisfied clients have to say about working with VexVision.'
  },
  cta: {
    title: 'Ready to Transform Your Business Through Technology?',
    description: 'Partner with VexVision to leverage cutting-edge IT solutions that drive growth, efficiency, and innovation in your business.',
    getStarted: 'Get Started',
    portfolio: 'View My Portfolio'
  },
  footer: {
    description: 'I provide innovative IT solutions that drive business growth and digital transformation.',
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
    aboutUs: 'Über Mich',
    portfolio: 'Portfolio',
    contact: 'Kontakt',
    getStarted: 'Loslegen'
  },
  hero: {
    innovativeIt: 'Innovative IT-Lösungen',
    transformBusiness: 'Transformieren Sie Ihr Unternehmen durch Technologie',
    description: 'Ich biete fortschrittliche IT-Dienstleistungen und Lösungen an, die Unternehmen helfen, in der digitalen Welt zu gedeihen. Von der Webentwicklung bis zur KI-Integration bin ich Ihr strategischer Technologiepartner.',
    getStarted: 'Loslegen',
    ourServices: 'Meine Dienstleistungen',
    innovation: 'Innovation',
    futureReady: 'Zukunftsfähige Lösungen',
    performance: 'Leistung',
    optimized: 'Optimierte Prozesse'
  },
  technologies: {
    tag: 'Fortschrittliche Technologien',
    title: 'Technologie, die Ihr Unternehmen unterstützt',
    subtitle: 'Meine innovativen Lösungen sind darauf ausgelegt, das Wachstum Ihres Unternehmens zu beschleunigen und Geschäftsprozesse zu optimieren. Durch den Einsatz neuester Technologien helfe ich Ihnen, einen Wettbewerbsvorteil zu erzielen.',
    cloud: {
      title: 'Cloud Computing',
      description: 'Leistungsstarke Cloud-Infrastrukturlösungen, die mit den Anforderungen Ihres Unternehmens skalieren'
    },
    ai: {
      title: 'Künstliche Intelligenz',
      description: 'Intelligente KI-Lösungen, die Daten in wertvolle Geschäftseinblicke umwandeln'
    },
    iot: {
      title: 'IoT & Edge Computing',
      description: 'Verbinden und verwalten Sie all Ihre Geräte mit einer fortschrittlichen IoT-Plattform'
    },
    sustainable: {
      title: 'Nachhaltige Technologie',
      description: 'Umweltfreundliche Technologielösungen mit minimaler Umweltbelastung'
    },
    cta: {
      title: 'Bereit, diese Technologien zu nutzen?',
      description: 'Lassen Sie uns besprechen, wie mein technisches Fachwissen Ihrem Unternehmen helfen kann, zu wachsen',
      button: 'Beratungsgespräch vereinbaren'
    }
  },
  innovation: {
    tag: 'Innovation',
    title: 'Digitale Transformation',
    subtitle: 'Innovative Lösungen für moderne Unternehmen',
    description: 'Durch den Einsatz von künstlicher Intelligenz, Automatisierung und den neuesten technologischen Fortschritten liefere ich Lösungen, die Geschäftsprozesse transformieren und die Wettbewerbsfähigkeit steigern.',
    heading: 'Technologie, die Ihr Unternehmen unterstützt',
    innovation: {
      title: 'Innovation',
      description: 'Zukunftsfähige Lösungen'
    },
    benefits: {
      automated: 'Automatisierte Geschäftsprozesse',
      ai: 'Intelligente, KI-gestützte Lösungen',
      cloud: 'Skalierbare Cloud-Infrastruktur',
      security: 'Unternehmenssicherheit'
    },
    cta: 'Entdecken Sie meine Lösungen',
    imageAlt: 'Innovative Technologielösungen'
  },
  contact: {
    title: 'Kontakt',
    subtitle: 'Kontaktieren Sie mich',
    description: 'Haben Sie Fragen oder möchten Sie Ihr Projekt besprechen? Füllen Sie das untenstehende Formular aus, und ich werde mich so schnell wie möglich bei Ihnen melden.',
    form: {
      name: 'Vollständiger Name',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      subject: 'Betreff',
      message: 'Ihre Nachricht',
      submit: 'Nachricht senden',
      success: 'Ihre Nachricht wurde erfolgreich gesendet. Ich werde mich in Kürze bei Ihnen melden!',
      error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es später noch einmal.',
      sending: 'Senden...',
      selectService: 'Wählen Sie einen Dienst',
      other: 'Andere'
    },
    info: {
      title: 'Kontaktinformationen',
      description: 'Sie können mich über jeden dieser Kanäle erreichen:',
      address: 'Adresse',
      email: 'info@vexvision.com',
      phone: '+48 555 123 456',
      hours: 'Montag-Freitag, 9:00-18:00',
      map: 'Standortkarte'
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      description: 'Antworten auf die häufigsten Fragen'
    }
  },
  faq: {
    development: {
      question: 'Wie lange dauert ein typisches Webentwicklungsprojekt?',
      answer: 'Die Projektzeiten variieren je nach Komplexität und Umfang. Eine einfache Website kann 2-3 Wochen dauern, während komplexere Plattformen 1-2 Monate in Anspruch nehmen können. Bei unserer ersten Beratung werde ich Ihnen einen detaillierten Zeitplan vorlegen, der auf Ihre Projektanforderungen zugeschnitten ist.'
    },
    support: {
      question: 'Bieten Sie nach Abschluss des Projekts laufende Wartung und Support an?',
      answer: 'Ja, ich biete verschiedene Wartungspakete an, um sicherzustellen, dass Ihre digitalen Produkte sicher, aktuell und optimal bleiben. Meine Supportdienste umfassen regelmäßige Updates, Sicherheitsüberwachung, Inhaltsänderungen und technische Unterstützung.'
    },
    pricing: {
      question: 'Wie funktioniert die Projektpreisgestaltung?',
      answer: 'Ich erstelle individuelle Angebote auf der Grundlage spezifischer Anforderungen. Faktoren, die den Preis beeinflussen, sind unter anderem die Projektkomplexität, der Zeitplan, die benötigten Funktionen und der Grad der erforderlichen Anpassung. Ich biete sowohl Festpreisverträge als auch zeit- und materialbasierte Abrechnung an.'
    },
    industries: {
      question: 'Auf welche Branchen sind Sie spezialisiert?',
      answer: 'Ich habe mit Kunden aus verschiedenen Sektoren zusammengearbeitet, darunter Gesundheitswesen, Finanzen, Einzelhandel, Bildung, Fertigung und Gastgewerbe. Ich passe mich schnell an, um branchenspezifische Herausforderungen und Anforderungen zu verstehen.'
    },
    ai: {
      question: 'Können Sie künstliche Intelligenz in unsere bestehenden Systeme integrieren?',
      answer: 'Ja, ich bin spezialisiert auf die Integration von KI-Lösungen in bestehende Geschäftssysteme. Mein Ansatz konzentriert sich darauf, die wertvollsten KI-Anwendungen für Ihre spezifischen Bedürfnisse zu identifizieren und sie so zu implementieren, dass sie Ihre aktuellen Prozesse ergänzen.'
    }
  },
  about: {
    title: 'Über Mich',
    subtitle: 'Wer ich bin',
    description: 'VexVision ist ein zukunftsorientiertes IT-Unternehmen, das sich darauf konzentriert, Unternehmen dabei zu helfen, Technologie für Wachstum und Innovation zu nutzen.',
    history: {
      title: 'Meine Geschichte',
      description: 'Ich habe VexVision 2012 als kleines Webentwicklungsstudio gegründet und es seitdem zu einem Full-Service-IT-Lösungsanbieter ausgebaut, der Kunden aus verschiedenen Branchen betreut.'
    },
    mission: {
      title: 'Meine Mission',
      description: 'Unternehmen mit innovativen technologischen Lösungen zu stärken, die Wachstum, Effizienz und Wettbewerbsvorteile fördern.'
    },
    values: {
      title: 'Meine Werte',
      innovation: 'Innovation',
      innovationDesc: 'Ich nutze modernste Technologien und kreatives Denken',
      quality: 'Qualität',
      qualityDesc: 'Ich liefere Exzellenz in jedem Projekt und jeder Interaktion',
      integrity: 'Integrität',
      integrityDesc: 'Ich führe mein Geschäft auf ehrliche und transparente Weise',
      collaboration: 'Zusammenarbeit',
      collaborationDesc: 'Ich baue starke Partnerschaften mit meinen Kunden auf'
    },
    team: {
      title: 'Über Mich',
      description: 'Ich bin ein Profi mit einer Leidenschaft für Technologie und das Lösen von Geschäftsproblemen.'
    }
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'Meine Arbeit',
    description: 'Entdecken Sie meine ausgewählten Projekte und sehen Sie, wie ich Unternehmen in verschiedenen Branchen geholfen habe, ihre Ziele durch Technologie zu erreichen.',
    categories: {
      all: 'Alle Projekte',
      web: 'Webentwicklung',
      mobile: 'Mobile Apps',
      design: 'Design',
      ai: 'KI-Lösungen'
    },
    viewProject: 'Projekt ansehen',
    noProjects: 'Keine Projekte in dieser Kategorie gefunden.'
  },
  services: {
    title: 'Meine Dienstleistungen',
    subtitle: 'Umfassende IT-Lösungen für Ihr Unternehmen',
    description: 'Ich biete eine breite Palette von Dienstleistungen an, die Unternehmen dabei helfen, Technologie für nachhaltiges Wachstum und Wettbewerbsvorteile zu nutzen.',
    viewAll: 'Alle Dienstleistungen anzeigen',
    mainBenefits: 'Hauptvorteile',
    items: {
      outsourcing: {
        title: 'IT-Outsourcing',
        description: 'Nutzen Sie mein Fachwissen, um Ihre IT-Abläufe zu verwalten, damit Sie sich auf Ihr Kerngeschäft und Ihre Wachstumsstrategie konzentrieren können.',
        benefits: {
          cost: 'Kostenreduzierung',
          expertise: 'Zugang zu Fachwissen',
          scalability: 'Skalierbare Dienste',
          focus: 'Fokus auf das Kerngeschäft'
        }
      },
      webDev: {
        title: 'Webentwicklung',
        description: 'Maßgeschneiderte Websites und E-Commerce-Lösungen mit beeindruckendem Design, optimierter Leistung und nahtloser Benutzererfahrung.',
        benefits: {
          responsive: 'Responsives Design',
          seo: 'SEO-Optimierung',
          secure: 'Sichere Transaktionen',
          custom: 'Maßgeschneiderte Funktionalität'
        }
      },
      graphic: {
        title: 'Grafikdesign',
        description: 'Ansprechende visuelle Inhalte, die Ihre Markenidentität stärken und Ihre Botschaft effektiv kommunizieren.',
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
          certified: 'Zertifizierter Service',
          quality: 'Hochwertige Ersatzteile',
          preventive: 'Vorbeugende Wartung'
        }
      },
      ai: {
        title: 'KI-Lösungen',
        description: 'Fortschrittliche Implementierungen künstlicher Intelligenz zur Automatisierung von Prozessen und Gewinnung wertvoller Einblicke aus Daten.',
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
        title: 'Social Media Management',
        description: 'Umfassende Social-Media-Strategien, die Ihre Markenpräsenz aufbauen, Zielgruppen ansprechen und das Geschäftswachstum fördern.',
        benefits: {
          calendar: 'Content-Kalender',
          engagement: 'Community-Engagement',
          optimization: 'Plattformoptimierung',
          analytics: 'Leistungsanalyse'
        }
      },
      project: {
        title: 'Projektmanagement',
        description: 'Professionelle Planung, Ausführung und Überwachung von Technologieprojekten, die pünktliche Lieferung im Rahmen des Budgets sicherstellen.',
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
    title: 'Meine Lösungen',
    subtitle: 'Technologie, die auf Ihre Branche zugeschnitten ist',
    description: 'Entdecken Sie, wie meine spezialisierten IT-Lösungen die einzigartigen Herausforderungen und Chancen in Ihrer Branche angehen können.',
    industries: {
      title: 'Branchen, die ich bediene',
      finance: 'Finanzdienstleistungen',
      healthcare: 'Gesundheitswesen',
      retail: 'Einzelhandel & E-Commerce',
      manufacturing: 'Fertigung',
      education: 'Bildung',
      logistics: 'Logistik & Transport'
    },
    industriesDesc: {
      healthcare: 'Sichere Patientenmanagementsysteme, Telemedizinplattformen und Gesundheitsanalytiklösungen.',
      finance: 'Sichere Transaktionssysteme, Betrugserkennung und Finanzverwaltungstools für Kunden.',
      retail: 'Bestandsverwaltung, E-Commerce-Plattformen und Kundenbindungsprogramme.',
      manufacturing: 'Produktionsoptimierung, Supply-Chain-Management und Qualitätskontrollsysteme.',
      education: 'Lernmanagementsysteme, Bewertungstools für Studenten und Verwaltungslösungen.',
      logistics: 'Routenoptimierung, Sendungsverfolgung und Flottenmanagement für Transportunternehmen.'
    },
    features: {
      title: 'Lösungsmerkmale',
      scalable: 'Skalierbare Infrastruktur',
      secure: 'Unternehmensklasse-Sicherheit',
      integrated: 'Nahtlose Integration',
      support: 'Technischer Support'
    },
    items: {
      digitalTransformation: {
        title: 'Digitale Transformation',
        description: 'Umfassende Strategie und Umsetzung der digitalen Transformation für Unternehmen, die ihre Abläufe modernisieren und im digitalen Zeitalter wettbewerbsfähig bleiben wollen.',
        features: {
          infrastructure: 'Bewertung und Modernisierung der Technologieinfrastruktur',
          processes: 'Neugestaltung von Geschäftsprozessen',
          migration: 'Cloud-Migration und -Optimierung',
          change: 'Change Management und Mitarbeiterschulung',
          workflow: 'Implementierung digitaler Arbeitsabläufe'
        }
      },
      aiCustomerExperience: {
        title: 'KI Kundenerlebnis',
        description: 'Nutzen Sie künstliche Intelligenz, um Kundeninteraktionen zu transformieren, personalisierte Erlebnisse zu bieten und gleichzeitig die betriebliche Effizienz zu steigern.',
        features: {
          chatbots: 'Intelligente Chatbots und virtuelle Assistenten',
          analytics: 'Prädiktive Kundenanalytik',
          recommendations: 'Personalisierte Empfehlungssysteme',
          automation: 'Automatisierte Kundenservice-Workflows',
          sentiment: 'Stimmungsanalyse und Feedback-Verarbeitung'
        }
      },
      ecommerce: {
        title: 'E-Commerce-Lösungen',
        description: 'Umfassende E-Commerce-Lösung, die Ihren Online-Shop nahtlos mit Bestandsverwaltung, Zahlungsabwicklung, Logistik und Kundenmanagementsystemen integriert.',
        features: {
          responsive: 'Responsiver und konversionsoptimierter Online-Shop',
          inventory: 'Integration des Bestandsverwaltungssystems',
          payment: 'Implementierung einer sicheren Zahlungsabwicklung',
          fulfillment: 'Auftragsabwicklung und Logistikautomatisierung',
          crm: 'Kundenbeziehungsmanagement'
        }
      },
      dataAnalytics: {
        title: 'Datenanalyse',
        description: 'Transformieren Sie Rohdaten in umsetzbare Erkenntnisse mit meinen umfassenden Analyse- und Business-Intelligence-Lösungen, die datengestützte Entscheidungsfindung unterstützen.',
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
    title: 'Warum Ich',
    subtitle: 'Ihr strategischer Partner für technologische Exzellenz',
    description: 'Bei VexVision biete ich nicht nur IT-Dienstleistungen an – ich baue dauerhafte Partnerschaften mit meinen Kunden auf, verstehe ihre Geschäftsziele und liefere Lösungen, die Wachstum und Effizienz fördern.',
    imageAlt: 'Professioneller Ansatz für Kunden',
    features: {
      expertise: {
        title: 'Bewährtes Fachwissen',
        description: 'Mit über 10 Jahren Erfahrung habe ich mir einen Ruf für zuverlässigen Service und technische Exzellenz aufgebaut.'
      },
      innovative: {
        title: 'Innovativer Ansatz',
        description: 'Ich bleibe an der Spitze der Technologietrends, um modernste Lösungen zu liefern, die echte Ergebnisse bringen.'
      },
      team: {
        title: 'Engagierter Service',
        description: 'Ich bin bestrebt, Ihre einzigartigen Bedürfnisse zu verstehen und Ihre Erwartungen zu übertreffen.'
      },
      results: {
        title: 'Messbare Ergebnisse',
        description: 'Ich konzentriere mich darauf, Lösungen zu liefern, die greifbaren Geschäftswert und Return on Investment bieten.'
      }
    },
    stats: {
      clients: 'Zufriedene Kunden',
      satisfaction: 'Zufriedenheit',
      experience: 'Jahre Erfahrung'
    }
  },
  testimonials: {
    title: 'Referenzen',
    subtitle: 'Was meine Kunden sagen',
    description: 'Nehmen Sie nicht nur mein Wort dafür. Hören Sie, was meine zufriedenen Kunden über die Zusammenarbeit mit VexVision zu sagen haben.'
  },
  cta: {
    title: 'Bereit, Ihr Unternehmen durch Technologie zu transformieren?',
    description: 'Arbeiten Sie mit VexVision zusammen, um modernste IT-Lösungen zu nutzen, die Wachstum, Effizienz und Innovation in Ihrem Unternehmen vorantreiben.',
    getStarted: 'Loslegen',
    portfolio: 'Mein Portfolio anzeigen'
  },
  footer: {
    description: 'Ich biete innovative IT-Lösungen, die Geschäftswachstum und digitale Transformation fördern.',
    services: 'Dienstleistungen',
    company: 'Unternehmen',
    contact: 'Kontakt',
    rights: 'Alle Rechte vorbehalten.',
    privacy: 'Datenschutzerklärung',
    terms: 'Nutzungsbedingungen'
  },
  notFound: {
    title: 'Seite nicht gefunden',
    description: 'Die Seite, die Sie suchen, existiert nicht oder wurde verschoben. Lassen Sie uns Sie wieder auf den richtigen Weg bringen.',
    backHome: 'Zurück zur Startseite'
  }
};

// Kontekst języka
const LanguageContext = createContext<LanguageContextType>({
  language: 'pl',
  setLanguage: () => {},
  translations: {
    pl: polishTranslations,
    en: englishTranslations,
    de: germanTranslations
  }
});

export const useLanguage = () => useContext(LanguageContext);

// Dostawca kontekstu języka
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'pl' | 'en' | 'de'>('pl');

  const value = {
    language,
    setLanguage,
    translations: {
      pl: polishTranslations,
      en: englishTranslations,
      de: germanTranslations
    }
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
