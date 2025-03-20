
import React, { createContext, useContext } from 'react';

// Uproszczona struktura tłumaczeń - tylko polski język
export interface Translations {
  [key: string]: string | { [key: string]: string | Translations };
}

interface LanguageContextType {
  translations: Translations;
}

// Wszystkie tłumaczenia w języku polskim
const translations: Translations = {
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
      error: 'Coś poszło nie tak. Spróbuj ponownie później.'
    },
    info: {
      title: 'Informacje Kontaktowe',
      description: 'Możesz skontaktować się z nami przez dowolny z tych kanałów:',
      address: 'ul. Biznesowa 123, Dzielnica Technologiczna, 00-001',
      email: 'info@techprime.com',
      phone: '+48 555 123 456',
      hours: 'Poniedziałek-Piątek, 9:00-18:00'
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
    items: {
      outsourcing: {
        title: 'Outsourcing IT',
        description: 'Wykorzystaj nasze doświadczenie w zarządzaniu operacjami IT, co pozwoli Ci skupić się na podstawowej działalności i strategii rozwoju.'
      },
      webDev: {
        title: 'Tworzenie Stron WWW',
        description: 'Niestandardowe strony internetowe i rozwiązania e-commerce z oszałamiającym designem, zoptymalizowaną wydajnością i płynnym doświadczeniem użytkownika.'
      },
      graphic: {
        title: 'Projektowanie Graficzne',
        description: 'Przyciągające wzrok treści wizualne, które wzmacniają tożsamość Twojej marki i skutecznie komunikują Twoje przesłanie.'
      },
      hardware: {
        title: 'Naprawa Sprzętu',
        description: 'Profesjonalne usługi diagnozy i naprawy komputerów oraz sprzętu IT, minimalizujące przestoje w działalności Twojej firmy.'
      },
      ai: {
        title: 'Rozwiązania AI',
        description: 'Zaawansowane wdrożenia sztucznej inteligencji do automatyzacji procesów i pozyskiwania cennych informacji z danych.'
      },
      marketing: {
        title: 'Marketing',
        description: 'Strategiczne kampanie marketingu cyfrowego, które zwiększają ruch, generują leady i zwiększają współczynniki konwersji.'
      },
      social: {
        title: 'Zarządzanie Mediami Społecznościowymi',
        description: 'Kompleksowe strategie mediów społecznościowych budujące obecność Twojej marki, angażujące odbiorców i napędzające rozwój biznesu.'
      },
      project: {
        title: 'Zarządzanie Projektami',
        description: 'Profesjonalne planowanie, realizacja i nadzór nad projektami technologicznymi, zapewniające ich terminowe dostarczanie w ramach budżetu.'
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
    features: {
      title: 'Cechy Rozwiązań',
      scalable: 'Skalowalna Infrastruktura',
      secure: 'Bezpieczeństwo Klasy Korporacyjnej',
      integrated: 'Bezproblemowa Integracja',
      support: 'Wsparcie Techniczne 24/7'
    }
  },
  whyChooseUs: {
    title: 'Dlaczego My',
    subtitle: 'Twój Strategiczny Partner w Doskonałości Technologicznej',
    description: 'W TechPrime nie tylko świadczymy usługi IT – budujemy trwałe partnerstwa z naszymi klientami, rozumiejąc ich cele biznesowe i dostarczając rozwiązania, które napędzają wzrost i efektywność.',
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

// Funkcja pomocnicza do bezpiecznego dostępu do tłumaczeń
export const getTranslation = (obj: any, path: string): string => {
  if (!obj) {
    console.warn(`Brak obiektu tłumaczeń dla ścieżki: ${path}`);
    return '';
  }
  
  const parts = path.split('.');
  let current = obj;
  
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
  translations
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Ustawienie atrybutu lang dla dokumentu HTML
  document.documentElement.lang = 'pl';
  
  return (
    <LanguageContext.Provider value={{ translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
