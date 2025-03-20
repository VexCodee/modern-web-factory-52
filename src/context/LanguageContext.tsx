import React, { createContext, useState, useContext, useEffect } from 'react';

type Language = 'pl' | 'en';

type TranslationObject = {
  [key: string]: string | TranslationObject;
};

type TranslationSection = {
  [key: string]: {
    [language: string]: TranslationObject;
  };
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: TranslationSection;
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
  contact: {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in Touch',
      description: 'Have questions or want to discuss your project? Fill out the form below and our team will get back to you shortly.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Your message has been sent successfully. We\'ll get back to you soon!',
        error: 'Something went wrong. Please try again later.'
      },
      info: {
        title: 'Contact Information',
        description: 'Feel free to contact us through any of these channels:',
        address: '123 Business Avenue, Tech District, 10001',
        email: 'info@techprime.com',
        phone: '+1 (555) 123-4567',
        hours: 'Monday-Friday, 9am-6pm'
      }
    },
    pl: {
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
    }
  },
  about: {
    en: {
      title: 'About Us',
      subtitle: 'Who We Are',
      description: 'TechPrime is a forward-thinking IT company dedicated to helping businesses leverage technology for growth and innovation.',
      history: {
        title: 'Our History',
        description: 'Founded in 2012, TechPrime began as a small web development studio and has since grown into a full-service IT solutions provider, serving clients across industries worldwide.'
      },
      mission: {
        title: 'Our Mission',
        description: 'To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage.'
      },
      values: {
        title: 'Our Values',
        innovation: 'Innovation',
        innovationDesc: 'We embrace cutting-edge technologies and creative thinking',
        quality: 'Quality',
        qualityDesc: 'We deliver excellence in every project and interaction',
        integrity: 'Integrity',
        integrityDesc: 'We conduct business with honesty and transparency',
        collaboration: 'Collaboration',
        collaborationDesc: 'We build strong partnerships with our clients and within our team'
      },
      team: {
        title: 'Our Team',
        description: 'Meet the talented professionals behind TechPrime\'s success.'
      }
    },
    pl: {
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
    }
  },
  portfolio: {
    en: {
      title: 'Portfolio',
      subtitle: 'Our Work',
      description: 'Explore our featured projects and see how we\'ve helped businesses across industries achieve their goals through technology.',
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
    pl: {
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
  solutions: {
    en: {
      title: 'Our Solutions',
      subtitle: 'Tailored Technology for Your Industry',
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
      features: {
        title: 'Solution Features',
        scalable: 'Scalable Infrastructure',
        secure: 'Enterprise-Grade Security',
        integrated: 'Seamless Integration',
        support: '24/7 Technical Support'
      }
    },
    pl: {
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
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  useEffect(() => {
    // Try to get stored language from localStorage or use default
    const storedLanguage = localStorage.getItem('language') as Language;
    if (storedLanguage && (storedLanguage === 'pl' || storedLanguage === 'en')) {
      setLanguage(storedLanguage);
    }
  }, []);

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
