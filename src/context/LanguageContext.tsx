
import React, { createContext, useState, useContext, useEffect } from 'react';

type Language = 'pl' | 'en';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, Record<string, string>>;
};

const translations = {
  navbar: {
    en: {
      home: 'Home',
      services: 'Services',
      solutions: 'Solutions',
      aboutUs: 'About Us',
      portfolio: 'Portfolio',
      contact: 'Contact',
      getStarted: 'Get Started'
    },
    pl: {
      home: 'Strona Główna',
      services: 'Usługi',
      solutions: 'Rozwiązania',
      aboutUs: 'O Nas',
      portfolio: 'Portfolio',
      contact: 'Kontakt',
      getStarted: 'Rozpocznij Współpracę'
    }
  },
  hero: {
    en: {
      innovativeIt: 'Innovative IT Solutions',
      transformBusiness: 'Transform Your Business With Technology',
      description: 'We deliver cutting-edge IT services and solutions to help businesses thrive in the digital landscape. From web development to AI integration, we\'re your strategic tech partner.',
      getStarted: 'Get Started',
      ourServices: 'Our Services',
      innovation: 'Innovation',
      futureReady: 'Future-ready solutions',
      performance: 'Performance',
      optimized: 'Optimized processes'
    },
    pl: {
      innovativeIt: 'Innowacyjne Rozwiązania IT',
      transformBusiness: 'Transformuj Swoją Firmę Za Pomocą Technologii',
      description: 'Dostarczamy zaawansowane usługi i rozwiązania IT, które pomagają firmom prosperować w cyfrowym świecie. Od tworzenia stron internetowych po integrację z AI, jesteśmy Twoim strategicznym partnerem technologicznym.',
      getStarted: 'Rozpocznij Współpracę',
      ourServices: 'Nasze Usługi',
      innovation: 'Innowacja',
      futureReady: 'Rozwiązania przyszłości',
      performance: 'Wydajność',
      optimized: 'Zoptymalizowane procesy'
    }
  },
  services: {
    en: {
      title: 'Our Services',
      subtitle: 'Comprehensive IT Solutions For Your Business',
      description: 'We offer a wide range of services to help businesses leverage technology for sustainable growth and competitive advantage.',
      viewAll: 'View All Services',
      items: {
        outsourcing: {
          title: 'IT Outsourcing',
          description: 'Leverage our expertise to handle your IT operations, allowing you to focus on your core business activities and growth strategy.'
        },
        webDev: {
          title: 'Web Development',
          description: 'Custom websites and e-commerce solutions with stunning design, optimized performance, and seamless user experience.'
        },
        graphic: {
          title: 'Graphic Design',
          description: 'Eye-catching visual content that enhances your brand identity and communicates your message effectively.'
        },
        hardware: {
          title: 'Hardware Repair',
          description: 'Professional diagnosis and repair services for computers and IT equipment, minimizing downtime for your business.'
        },
        ai: {
          title: 'AI Solutions',
          description: 'Cutting-edge artificial intelligence implementation to automate processes and gain valuable insights from your data.'
        },
        marketing: {
          title: 'Marketing',
          description: 'Strategic digital marketing campaigns that drive traffic, generate leads, and increase conversion rates.'
        },
        social: {
          title: 'Social Media Management',
          description: 'Comprehensive social media strategies to build your brand presence, engage your audience, and drive business growth.'
        },
        project: {
          title: 'Project Management',
          description: 'Expert planning, execution, and oversight of your technology projects, ensuring they\'re delivered on time and within budget.'
        }
      }
    },
    pl: {
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
    }
  },
  whyChooseUs: {
    en: {
      title: 'Why Choose Us',
      subtitle: 'Your Strategic Partner in Technology Excellence',
      description: 'At TechPrime, we don\'t just provide IT services – we build lasting partnerships with our clients, understanding their business goals and delivering solutions that drive growth and efficiency.',
      features: {
        expertise: {
          title: 'Trusted Expertise',
          description: 'With over 10 years of experience, we\'ve built a reputation for reliable service and technical excellence.'
        },
        innovative: {
          title: 'Innovative Approach',
          description: 'We stay at the forefront of technology trends to deliver cutting-edge solutions that drive real results.'
        },
        team: {
          title: 'Dedicated Team',
          description: 'Our skilled professionals are committed to understanding your unique needs and exceeding your expectations.'
        },
        results: {
          title: 'Measurable Results',
          description: 'We focus on delivering solutions that provide tangible business value and return on investment.'
        }
      },
      stats: {
        clients: 'Happy Clients',
        satisfaction: 'Satisfaction',
        experience: 'Years Experience'
      }
    },
    pl: {
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
    }
  },
  testimonials: {
    en: {
      title: 'Testimonials',
      subtitle: 'What Our Clients Say',
      description: 'Don\'t just take our word for it. Hear from our satisfied clients about their experience working with TechPrime.'
    },
    pl: {
      title: 'Referencje',
      subtitle: 'Co Mówią Nasi Klienci',
      description: 'Nie wierz nam na słowo. Posłuchaj, co o współpracy z TechPrime mówią nasi zadowoleni klienci.'
    }
  },
  cta: {
    en: {
      title: 'Ready to Transform Your Business With Technology?',
      description: 'Partner with TechPrime to leverage cutting-edge IT solutions that drive growth, efficiency, and innovation for your business.',
      getStarted: 'Get Started',
      portfolio: 'View Our Portfolio'
    },
    pl: {
      title: 'Gotowy na Transformację Swojej Firmy za Pomocą Technologii?',
      description: 'Nawiąż współpracę z TechPrime, aby wykorzystać najnowocześniejsze rozwiązania IT, które napędzają wzrost, efektywność i innowacje w Twojej firmie.',
      getStarted: 'Rozpocznij Współpracę',
      portfolio: 'Zobacz Nasze Portfolio'
    }
  },
  footer: {
    en: {
      description: 'Delivering innovative IT solutions that drive business growth and digital transformation.',
      services: 'Services',
      company: 'Company',
      contact: 'Contact',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    pl: {
      description: 'Dostarczamy innowacyjne rozwiązania IT, które napędzają rozwój biznesu i transformację cyfrową.',
      services: 'Usługi',
      company: 'Firma',
      contact: 'Kontakt',
      rights: 'Wszelkie prawa zastrzeżone.',
      privacy: 'Polityka Prywatności',
      terms: 'Warunki Korzystania z Usług'
    }
  },
  notFound: {
    en: {
      title: 'Page Not Found',
      description: 'The page you\'re looking for doesn\'t exist or has been moved. Let\'s get you back on track.',
      backHome: 'Back to Home'
    },
    pl: {
      title: 'Strona Nie Znaleziona',
      description: 'Strona, której szukasz, nie istnieje lub została przeniesiona. Wróćmy na właściwy tor.',
      backHome: 'Powrót do Strony Głównej'
    }
  }
};

const defaultLanguage: Language = 'pl';

export const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  translations
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get stored language from localStorage
    const storedLanguage = localStorage.getItem('language') as Language;
    return storedLanguage && (storedLanguage === 'pl' || storedLanguage === 'en') 
      ? storedLanguage 
      : defaultLanguage;
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
