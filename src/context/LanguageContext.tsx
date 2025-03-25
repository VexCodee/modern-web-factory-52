
import React, { createContext, useContext, useState } from 'react';

// Struktura tłumaczeń dla wszystkich języków
interface Translations {
  [key: string]: string | Translations;
}

// Typ kontekstu języka
interface LanguageContextType {
  language: 'pl' | 'en' | 'de';
  setLanguage: (language: 'pl' | 'en' | 'de') => void;
  translations: {
    pl: Translations;
    en: Translations;
    de: Translations;
  };
  t: (key: string) => string; // Add the translation function type
}

// Tłumaczenia w języku polskim
const polishTranslations: Translations = {
  hero: {
    innovativeIt: "Innowacyjne usługi IT",
    transformBusiness: "Transformuję Twoją firmę dzięki technologii",
    description: "Jestem doświadczonym specjalistą IT z Bielska-Białej, oferującym kompleksowe rozwiązania informatyczne dostosowane do Twoich potrzeb. Tworzę strony, aplikacje i zapewniam pełne wsparcie IT.",
    getStarted: "Rozpocznij współpracę",
    ourServices: "Moje usługi",
    innovation: "Innowacja",
    futureReady: "Przyszłościowe rozwiązania",
    performance: "Wydajność",
    optimized: "Zoptymalizowane systemy"
  },
  services: {
    title: "Moje usługi",
    subtitle: "Kompleksowe wsparcie IT dla Twojego biznesu",
    description: "Oferuję szeroką gamę usług IT, które pomogą Twojej firmie odnieść sukces w cyfrowym świecie.",
    viewAll: "Zobacz wszystkie usługi",
    items: {
      outsourcing: {
        title: "Outsourcing IT",
        description: "Pełne wsparcie IT dla Twojej firmy"
      },
      webDev: {
        title: "Strony WWW",
        description: "Nowoczesne i responsywne strony internetowe"
      },
      graphic: {
        title: "Grafika",
        description: "Identyfikacja wizualna i projektowanie UX/UI"
      },
      hardware: {
        title: "Sprzęt",
        description: "Konserwacja i naprawa sprzętu komputerowego"
      },
      security: {
        title: "Bezpieczeństwo",
        description: "Ochrona danych i systemów informatycznych"
      },
      cloud: {
        title: "Chmura",
        description: "Wdrażanie i zarządzanie usługami chmurowymi"
      },
      ai: {
        title: "AI i Analityka",
        description: "Wykorzystanie sztucznej inteligencji w biznesie"
      }
    }
  },
  whyChooseUs: {
    title: "Dlaczego ja?",
    subtitle: "Doświadczenie, które przynosi rezultaty",
    description: "Z pasją do technologii i wieloletnim doświadczeniem, oferuję rozwiązania, które realnie wspierają rozwój Twojego biznesu.",
    features: {
      expertise: {
        title: "Specjalistyczna wiedza",
        description: "Posiadam szeroką wiedzę techniczną i doświadczenie w różnych dziedzinach IT"
      },
      innovative: {
        title: "Innowacyjne podejście",
        description: "Stale śledzę najnowsze trendy i technologie, by dostarczać nowoczesne rozwiązania"
      },
      team: {
        title: "Osobiste podejście",
        description: "Wsłuchuję się w Twoje potrzeby i dostosowuję rozwiązania do specyfiki Twojego biznesu"
      },
      results: {
        title: "Nastawienie na wyniki",
        description: "Koncentruję się na dostarczaniu wartości i wymiernych rezultatów biznesowych"
      }
    },
    stats: {
      clients: "zadowolonych klientów",
      satisfaction: "satysfakcji klientów",
      experience: "lat doświadczenia"
    },
    imageAlt: "Indywidualne podejście do każdego projektu"
  },
  innovation: {
    heading: "Innowacyjne rozwiązania dopasowane do Twoich potrzeb",
    description: "Wykorzystuję najnowsze technologie, by dostarczać rozwiązania, które nie tylko rozwiązują dzisiejsze problemy, ale są również przygotowane na wyzwania przyszłości.",
    benefits: {
      automated: "Zautomatyzowane procesy biznesowe",
      ai: "Rozwiązania oparte o sztuczną inteligencję",
      cloud: "Pełna integracja z usługami chmurowymi",
      security: "Zaawansowane zabezpieczenia danych"
    },
    cta: "Poznaj moje rozwiązania"
  },
  technologies: {
    tag: "Nowoczesne technologie",
    title: "Wykorzystuję najnowsze narzędzia i platformy",
    subtitle: "Aby dostarczać niezawodne, skalowalne i bezpieczne rozwiązania IT dla Twojego biznesu",
    cloud: {
      title: "Rozwiązania chmurowe",
      description: "Bezpieczne i skalowalne usługi w chmurze dostosowane do potrzeb Twojej firmy"
    },
    ai: {
      title: "Sztuczna inteligencja",
      description: "Wykorzystanie AI i uczenia maszynowego do optymalizacji procesów biznesowych"
    },
    iot: {
      title: "Internet rzeczy",
      description: "Łączenie urządzeń i systemów w inteligentną sieć dla lepszej kontroli i efektywności"
    },
    sustainable: {
      title: "Zrównoważone IT",
      description: "Ekologiczne rozwiązania IT, które zmniejszają ślad węglowy Twojej firmy"
    },
    cta: {
      title: "Potrzebujesz wsparcia technologicznego?",
      description: "Skontaktuj się ze mną, aby omówić, jak mogę pomóc Twojej firmie wykorzystać potencjał nowoczesnych technologii.",
      button: "Skontaktuj się"
    }
  },
  testimonials: {
    title: "Opinie klientów",
    subtitle: "Co mówią o mojej pracy",
    description: "Poznaj opinie firm, które skorzystały z moich usług i zobaczyły realne rezultaty"
  },
  cta: {
    title: "Gotowy na cyfrową transformację?",
    description: "Skontaktuj się ze mną, aby omówić, jak mogę pomóc Twojej firmie wykorzystać pełny potencjał technologii.",
    getStarted: "Rozpocznij współpracę",
    portfolio: "Zobacz portfolio"
  },
  common: {
    scrollDown: "Przewiń w dół",
    trustedBy: "Zaufali mi"
  },
  navbar: {
    home: "Strona główna",
    services: "Usługi",
    solutions: "Rozwiązania",
    aboutUs: "O mnie",
    portfolio: "Portfolio",
    contact: "Kontakt",
    getStarted: "Rozpocznij współpracę"
  },
  footer: {
    rights: "Wszelkie prawa zastrzeżone",
    privacy: "Polityka prywatności",
    terms: "Warunki korzystania"
  },
  CEO: "Dyrektor Generalny",
  "Dyrektor Marketingu": "Dyrektor Marketingu",
  CTO: "Dyrektor Techniczny"
};

// Tłumaczenia w języku angielskim
const englishTranslations: Translations = {
  hero: {
    innovativeIt: "Innovative IT Services",
    transformBusiness: "I Transform Your Business Through Technology",
    description: "I am an experienced IT specialist from Bielsko-Biała, offering comprehensive IT solutions tailored to your needs. I create websites, applications and provide full IT support.",
    getStarted: "Get Started",
    ourServices: "My Services",
    innovation: "Innovation",
    futureReady: "Future-Ready Solutions",
    performance: "Performance",
    optimized: "Optimized Systems"
  },
  services: {
    title: "My Services",
    subtitle: "Comprehensive IT Support for Your Business",
    description: "I offer a wide range of IT services that will help your company succeed in the digital world.",
    viewAll: "View All Services",
    items: {
      outsourcing: {
        title: "IT Outsourcing",
        description: "Full IT support for your company"
      },
      webDev: {
        title: "Web Development",
        description: "Modern and responsive websites"
      },
      graphic: {
        title: "Graphic Design",
        description: "Visual identity and UX/UI design"
      },
      hardware: {
        title: "Hardware",
        description: "Computer equipment maintenance and repair"
      },
      security: {
        title: "Security",
        description: "Data and IT systems protection"
      },
      cloud: {
        title: "Cloud",
        description: "Implementing and managing cloud services"
      },
      ai: {
        title: "AI & Analytics",
        description: "Using artificial intelligence in business"
      }
    }
  },
  whyChooseUs: {
    title: "Why Me?",
    subtitle: "Experience That Delivers Results",
    description: "With a passion for technology and years of experience, I offer solutions that truly support the growth of your business.",
    features: {
      expertise: {
        title: "Specialist Knowledge",
        description: "I have extensive technical knowledge and experience in various IT fields"
      },
      innovative: {
        title: "Innovative Approach",
        description: "I constantly follow the latest trends and technologies to deliver modern solutions"
      },
      team: {
        title: "Personal Approach",
        description: "I listen to your needs and adapt solutions to the specifics of your business"
      },
      results: {
        title: "Results-Oriented",
        description: "I focus on delivering value and measurable business results"
      }
    },
    stats: {
      clients: "satisfied clients",
      satisfaction: "client satisfaction",
      experience: "years of experience"
    },
    imageAlt: "Individual approach to each project"
  },
  innovation: {
    heading: "Innovative Solutions Tailored to Your Needs",
    description: "I use the latest technologies to deliver solutions that not only solve today's problems but are also prepared for future challenges.",
    benefits: {
      automated: "Automated business processes",
      ai: "AI-powered solutions",
      cloud: "Full cloud services integration",
      security: "Advanced data security"
    },
    cta: "Explore my solutions"
  },
  technologies: {
    tag: "Modern Technologies",
    title: "I Utilize the Latest Tools and Platforms",
    subtitle: "To deliver reliable, scalable, and secure IT solutions for your business",
    cloud: {
      title: "Cloud Solutions",
      description: "Secure and scalable cloud services tailored to your company's needs"
    },
    ai: {
      title: "Artificial Intelligence",
      description: "Using AI and machine learning to optimize business processes"
    },
    iot: {
      title: "Internet of Things",
      description: "Connecting devices and systems into a smart network for better control and efficiency"
    },
    sustainable: {
      title: "Sustainable IT",
      description: "Eco-friendly IT solutions that reduce your company's carbon footprint"
    },
    cta: {
      title: "Need technological support?",
      description: "Contact me to discuss how I can help your company leverage the potential of modern technologies.",
      button: "Get in touch"
    }
  },
  testimonials: {
    title: "Client Testimonials",
    subtitle: "What They Say About My Work",
    description: "Read feedback from companies that have used my services and seen real results"
  },
  cta: {
    title: "Ready for Digital Transformation?",
    description: "Get in touch to discuss how I can help your business leverage the full potential of technology.",
    getStarted: "Get Started",
    portfolio: "See Portfolio"
  },
  common: {
    scrollDown: "Scroll down",
    trustedBy: "Trusted by"
  },
  navbar: {
    home: "Home",
    services: "Services",
    solutions: "Solutions",
    aboutUs: "About Me",
    portfolio: "Portfolio",
    contact: "Contact",
    getStarted: "Get Started"
  },
  footer: {
    rights: "All rights reserved",
    privacy: "Privacy Policy",
    terms: "Terms of Use"
  },
  CEO: "Chief Executive Officer",
  "Dyrektor Marketingu": "Marketing Director",
  CTO: "Chief Technology Officer"
};

// Tłumaczenia w języku niemieckim
const germanTranslations: Translations = {
  hero: {
    innovativeIt: "Innovative IT-Dienstleistungen",
    transformBusiness: "Ich transformiere Ihr Unternehmen durch Technologie",
    description: "Ich bin ein erfahrener IT-Spezialist aus Bielsko-Biała und biete umfassende IT-Lösungen an, die auf Ihre Bedürfnisse zugeschnitten sind. Ich erstelle Websites, Anwendungen und biete vollständigen IT-Support.",
    getStarted: "Jetzt starten",
    ourServices: "Meine Dienstleistungen",
    innovation: "Innovation",
    futureReady: "Zukunftssichere Lösungen",
    performance: "Leistung",
    optimized: "Optimierte Systeme"
  },
  services: {
    title: "Meine Dienstleistungen",
    subtitle: "Umfassender IT-Support für Ihr Unternehmen",
    description: "Ich biete eine breite Palette von IT-Dienstleistungen an, die Ihrem Unternehmen zum Erfolg in der digitalen Welt verhelfen.",
    viewAll: "Alle Dienstleistungen anzeigen",
    items: {
      outsourcing: {
        title: "IT-Outsourcing",
        description: "Vollständiger IT-Support für Ihr Unternehmen"
      },
      webDev: {
        title: "Webentwicklung",
        description: "Moderne und responsive Websites"
      },
      graphic: {
        title: "Grafikdesign",
        description: "Visuelle Identität und UX/UI-Design"
      },
      hardware: {
        title: "Hardware",
        description: "Wartung und Reparatur von Computergeräten"
      },
      security: {
        title: "Sicherheit",
        description: "Schutz von Daten und IT-Systemen"
      },
      cloud: {
        title: "Cloud",
        description: "Implementierung und Verwaltung von Cloud-Diensten"
      },
      ai: {
        title: "KI & Analytik",
        description: "Einsatz künstlicher Intelligenz im Geschäft"
      }
    }
  },
  whyChooseUs: {
    title: "Warum ich?",
    subtitle: "Erfahrung, die Ergebnisse liefert",
    description: "Mit Leidenschaft für Technologie und jahrelanger Erfahrung biete ich Lösungen, die das Wachstum Ihres Unternehmens wirklich unterstützen.",
    features: {
      expertise: {
        title: "Fachkenntnisse",
        description: "Ich verfüge über umfangreiche technische Kenntnisse und Erfahrung in verschiedenen IT-Bereichen"
      },
      innovative: {
        title: "Innovativer Ansatz",
        description: "Ich verfolge ständig die neuesten Trends und Technologien, um moderne Lösungen zu liefern"
      },
      team: {
        title: "Persönlicher Ansatz",
        description: "Ich höre auf Ihre Bedürfnisse und passe Lösungen an die Besonderheiten Ihres Unternehmens an"
      },
      results: {
        title: "Ergebnisorientiert",
        description: "Ich konzentriere mich auf die Lieferung von Wert und messbaren Geschäftsergebnissen"
      }
    },
    stats: {
      clients: "zufriedene Kunden",
      satisfaction: "Kundenzufriedenheit",
      experience: "Jahre Erfahrung"
    },
    imageAlt: "Individueller Ansatz für jedes Projekt"
  },
  innovation: {
    heading: "Innovative Lösungen, die auf Ihre Bedürfnisse zugeschnitten sind",
    description: "Ich nutze die neuesten Technologien, um Lösungen zu liefern, die nicht nur die heutigen Probleme lösen, sondern auch auf zukünftige Herausforderungen vorbereitet sind.",
    benefits: {
      automated: "Automatisierte Geschäftsprozesse",
      ai: "KI-gestützte Lösungen",
      cloud: "Vollständige Integration von Cloud-Diensten",
      security: "Erweiterte Datensicherheit"
    },
    cta: "Entdecken Sie meine Lösungen"
  },
  technologies: {
    tag: "Moderne Technologien",
    title: "Ich nutze die neuesten Tools und Plattformen",
    subtitle: "Um zuverlässige, skalierbare und sichere IT-Lösungen für Ihr Unternehmen bereitzustellen",
    cloud: {
      title: "Cloud-Lösungen",
      description: "Sichere und skalierbare Cloud-Dienste, die auf die Bedürfnisse Ihres Unternehmens zugeschnitten sind"
    },
    ai: {
      title: "Künstliche Intelligenz",
      description: "Nutzung von KI und maschinellem Lernen zur Optimierung von Geschäftsprozessen"
    },
    iot: {
      title: "Internet der Dinge",
      description: "Verbindung von Geräten und Systemen zu einem intelligenten Netzwerk für bessere Kontrolle und Effizienz"
    },
    sustainable: {
      title: "Nachhaltige IT",
      description: "Umweltfreundliche IT-Lösungen, die den CO2-Fußabdruck Ihres Unternehmens reduzieren"
    },
    cta: {
      title: "Benötigen Sie technologische Unterstützung?",
      description: "Kontaktieren Sie mich, um zu besprechen, wie ich Ihrem Unternehmen helfen kann, das Potenzial moderner Technologien zu nutzen.",
      button: "Kontakt aufnehmen"
    }
  },
  testimonials: {
    title: "Kundenbewertungen",
    subtitle: "Was sie über meine Arbeit sagen",
    description: "Lesen Sie Feedback von Unternehmen, die meine Dienstleistungen in Anspruch genommen und echte Ergebnisse gesehen haben"
  },
  cta: {
    title: "Bereit für die digitale Transformation?",
    description: "Nehmen Sie Kontakt auf, um zu besprechen, wie ich Ihrem Unternehmen helfen kann, das volle Potenzial der Technologie zu nutzen.",
    getStarted: "Jetzt starten",
    portfolio: "Portfolio ansehen"
  },
  common: {
    scrollDown: "Nach unten scrollen",
    trustedBy: "Vertraut von"
  },
  navbar: {
    home: "Startseite",
    services: "Dienstleistungen",
    solutions: "Lösungen",
    aboutUs: "Über mich",
    portfolio: "Portfolio",
    contact: "Kontakt",
    getStarted: "Jetzt starten"
  },
  footer: {
    rights: "Alle Rechte vorbehalten",
    privacy: "Datenschutzerklärung",
    terms: "Nutzungsbedingungen"
  },
  CEO: "Geschäftsführer",
  "Dyrektor Marketingu": "Marketingdirektor",
  CTO: "Technischer Direktor"
};

// Helper function to get nested translation by key path
const getNestedTranslation = (obj: any, path: string): string => {
  const keys = path.split('.');
  let current = obj;
  
  for (const key of keys) {
    if (current === undefined || current === null) {
      return path; // Return the path if any part of the path is undefined
    }
    current = current[key];
  }
  
  return typeof current === 'string' ? current : path;
};

// Kontekst języka
const LanguageContext = createContext<LanguageContextType>({
  language: 'pl',
  setLanguage: () => {},
  translations: {
    pl: polishTranslations,
    en: englishTranslations,
    de: germanTranslations
  },
  t: () => '' // Default empty implementation
});

export const useLanguage = () => useContext(LanguageContext);

// Dostawca kontekstu języka
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'pl' | 'en' | 'de'>('pl');

  // Translation function
  const t = (key: string): string => {
    const translations = language === 'pl' 
      ? polishTranslations 
      : language === 'en' 
        ? englishTranslations 
        : germanTranslations;
    
    return getNestedTranslation(translations, key);
  };

  const value = {
    language,
    setLanguage,
    translations: {
      pl: polishTranslations,
      en: englishTranslations,
      de: germanTranslations
    },
    t // Add the translation function to the context
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
