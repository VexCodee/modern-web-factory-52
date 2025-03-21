
import React from 'react';
import Layout from '../components/Layout';
import { Github, Linkedin, Twitter, MapPin, Globe, Users, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import TeamMemberProfile from '../components/TeamMemberProfile';
import TimelineEvent from '../components/TimelineEvent';

const About = () => {
  const { t, language } = useLanguage();
  
  const timeline = [
    {
      year: "2015",
      title: language === 'pl' ? "Początki" : language === 'de' ? "Anfänge" : "Beginnings",
      description: language === 'pl' 
        ? "Założenie firmy przez grupę wizjonerów z pasją do technologii." 
        : language === 'de' 
        ? "Gründung des Unternehmens durch eine Gruppe von Visionären mit einer Leidenschaft für Technologie."
        : "Company founded by a group of visionaries with a passion for technology."
    },
    {
      year: "2017",
      title: language === 'pl' ? "Pierwszy duży projekt" : language === 'de' ? "Erstes großes Projekt" : "First major project",
      description: language === 'pl' 
        ? "Realizacja pierwszego przełomowego projektu dla klienta z branży finansowej." 
        : language === 'de' 
        ? "Umsetzung des ersten bahnbrechenden Projekts für einen Kunden aus der Finanzbranche."
        : "Completion of first breakthrough project for a financial sector client."
    },
    {
      year: "2019",
      title: language === 'pl' ? "Ekspansja międzynarodowa" : language === 'de' ? "Internationale Expansion" : "International expansion",
      description: language === 'pl' 
        ? "Otwarcie pierwszego międzynarodowego biura i pozyskanie klientów z Europy i USA." 
        : language === 'de' 
        ? "Eröffnung des ersten internationalen Büros und Gewinnung von Kunden aus Europa und den USA."
        : "Opening the first international office and acquiring clients from Europe and the USA."
    },
    {
      year: "2023",
      title: language === 'pl' ? "Przyszłość" : language === 'de' ? "Zukunft" : "Future Vision",
      description: language === 'pl' 
        ? "Wprowadzenie innowacyjnych rozwiązań z wykorzystaniem sztucznej inteligencji." 
        : language === 'de' 
        ? "Einführung innovativer Lösungen mit Künstlicher Intelligenz."
        : "Introduction of innovative solutions using artificial intelligence."
    }
  ];

  const teamMembers = {
    pl: [
      {
        name: "Aleksander Kowalski",
        role: "Dyrektor Kreatywny",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        quote: "Wierzę, że najlepsze rozwiązania powstają na przecięciu technologii i ludzkiej kreatywności.",
        socials: {
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
          github: "https://github.com"
        }
      },
      {
        name: "Sara Nowak",
        role: "Główna Projektantka UX",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        quote: "Projektowanie to nie tylko estetyka, ale przede wszystkim rozwiązywanie realnych problemów użytkowników.",
        socials: {
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "Dawid Lewandowski",
        role: "Główny Inżynier",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        quote: "Kod powinien być tak elegancki i czytelny, jak dobrze napisana książka.",
        socials: {
          linkedin: "https://linkedin.com",
          github: "https://github.com"
        }
      },
      {
        name: "Renata Tomczyk",
        role: "Dyrektorka ds. Strategii",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
        quote: "Innowacja zaczyna się od zrozumienia, czego ludzie naprawdę potrzebują w swoim życiu.",
        socials: {
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com"
        }
      }
    ],
    en: [
      {
        name: "Alexander Smith",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        quote: "I believe the best solutions emerge at the intersection of technology and human creativity.",
        socials: {
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
          github: "https://github.com"
        }
      },
      {
        name: "Sarah Johnson",
        role: "Lead UX Designer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        quote: "Design isn't just about aesthetics, it's about solving real user problems.",
        socials: {
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "David Lewis",
        role: "Chief Engineer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        quote: "Code should be as elegant and readable as a well-written book.",
        socials: {
          linkedin: "https://linkedin.com",
          github: "https://github.com"
        }
      },
      {
        name: "Renata Thompson",
        role: "Strategy Director",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
        quote: "Innovation starts with understanding what people truly need in their lives.",
        socials: {
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com"
        }
      }
    ],
    de: [
      {
        name: "Alexander Schmidt",
        role: "Kreativdirektor",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        quote: "Ich glaube, dass die besten Lösungen an der Schnittstelle von Technologie und menschlicher Kreativität entstehen.",
        socials: {
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com",
          github: "https://github.com"
        }
      },
      {
        name: "Sara Wagner",
        role: "Leitende UX-Designerin",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        quote: "Design ist nicht nur Ästhetik, sondern vor allem die Lösung echter Benutzerprobleme.",
        socials: {
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com"
        }
      },
      {
        name: "David Weber",
        role: "Chefingenieur",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        quote: "Code sollte so elegant und lesbar sein wie ein gut geschriebenes Buch.",
        socials: {
          linkedin: "https://linkedin.com",
          github: "https://github.com"
        }
      },
      {
        name: "Renata Müller",
        role: "Strategiedirektorin",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
        quote: "Innovation beginnt mit dem Verständnis dessen, was Menschen wirklich in ihrem Leben brauchen.",
        socials: {
          twitter: "https://twitter.com",
          linkedin: "https://linkedin.com"
        }
      }
    ]
  };

  const team = teamMembers[language] || teamMembers.en;

  const locations = [
    {
      city: language === 'pl' ? "Warszawa" : language === 'de' ? "Warschau" : "Warsaw",
      country: language === 'pl' ? "Polska" : language === 'de' ? "Polen" : "Poland",
      address: language === 'pl' ? "ul. Nowy Świat 35" : language === 'de' ? "Nowy Świat Str. 35" : "35 Nowy Swiat St.",
      type: language === 'pl' ? "Główna siedziba" : language === 'de' ? "Hauptsitz" : "Headquarters",
    },
    {
      city: language === 'pl' ? "Berlin" : "Berlin",
      country: language === 'pl' ? "Niemcy" : language === 'de' ? "Deutschland" : "Germany",
      address: language === 'pl' ? "Friedrichstraße 123" : "Friedrichstraße 123",
      type: language === 'pl' ? "Biuro regionalne" : language === 'de' ? "Regionalbüro" : "Regional Office",
    },
    {
      city: language === 'pl' ? "Londyn" : language === 'de' ? "London" : "London",
      country: language === 'pl' ? "Wielka Brytania" : language === 'de' ? "Großbritannien" : "United Kingdom",
      address: language === 'pl' ? "Baker Street 221B" : "Baker Street 221B",
      type: language === 'pl' ? "Biuro regionalne" : language === 'de' ? "Regionalbüro" : "Regional Office",
    }
  ];

  const philosophyStatement = language === 'pl' 
    ? "Wierzymy w przyszłość, w której technologia harmonijnie integruje się z życiem codziennym, czyniąc je prostszym, bardziej wydajnym i zrównoważonym."
    : language === 'de' 
    ? "Wir glauben an eine Zukunft, in der Technologie sich harmonisch in den Alltag integriert und ihn einfacher, effizienter und nachhaltiger macht."
    : "We believe in a future where technology seamlessly integrates with everyday life, making it simpler, more efficient, and sustainable.";

  return (
    <Layout>
      {/* Interactive Hero Section styled like portfolio cards */}
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
                  {language === 'pl' ? 'O Nas' : language === 'de' ? 'Über Uns' : 'About Us'}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-gray-900">
                {language === 'pl' ? 'Odkrywając' : language === 'de' ? 'Entdecken' : 'Discovering'}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {language === 'pl' ? 'Nowe Horyzonty' : language === 'de' ? 'Neue Horizonte' : 'New Horizons'}
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                {philosophyStatement}
              </p>
              <div className="mt-6">
                <a 
                  href="#our-story" 
                  className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  {language === 'pl' ? "Poznaj Naszą Historię" : 
                   language === 'de' ? "Entdecke Unsere Geschichte" : 
                   "Discover Our Story"}
                </a>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500"
                  alt="About us" 
                  className="relative rounded-2xl shadow-2xl border border-gray-200"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-gray-900/80 backdrop-blur-md rounded-xl p-4 border border-gray-700">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-gray-400 text-sm">{language === 'pl' ? 'Nasza Misja' : language === 'de' ? 'Unsere Mission' : 'Our Mission'}</div>
                      <div className="text-white font-bold text-xl">{language === 'pl' ? 'Tworzymy Przyszłość' : language === 'de' ? 'Wir gestalten die Zukunft' : 'Shaping The Future'}</div>
                    </div>
                    <div className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
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
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-[bounce_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="order-2 lg:order-1">
              <div className="sticky top-32">
                <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 mb-6">
                  {language === 'pl' ? "NASZA HISTORIA" : language === 'de' ? "UNSERE GESCHICHTE" : "OUR STORY"}
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8">
                  {language === 'pl' ? "Od pomysłu do globalnej obecności" : 
                   language === 'de' ? "Von der Idee zur globalen Präsenz" : 
                   "From idea to global presence"}
                </h2>
                <p className="text-lg text-gray-700 mb-10">
                  {language === 'pl' 
                    ? "Zaczęliśmy jako mała grupa entuzjastów technologii z wielką wizją. Dziś, jesteśmy zespołem pasjonatów z globalnym zasięgiem, zawsze poszukującym nowych wyzwań i możliwości tworzenia rozwiązań, które zmieniają sposób, w jaki świat korzysta z technologii." 
                    : language === 'de' 
                    ? "Wir begannen als kleine Gruppe von Technologiebegeisterten mit einer großen Vision. Heute sind wir ein Team von Enthusiasten mit globaler Reichweite, immer auf der Suche nach neuen Herausforderungen und Möglichkeiten, Lösungen zu schaffen, die die Art und Weise verändern, wie die Welt Technologie nutzt."
                    : "We started as a small group of tech enthusiasts with a big vision. Today, we're a team of passionate individuals with global reach, always looking for new challenges and opportunities to create solutions that change the way the world uses technology."}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">35+</h3>
                      <p className="text-gray-600">{language === 'pl' ? "Ekspertów" : language === 'de' ? "Experten" : "Experts"}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                      <Globe className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">12+</h3>
                      <p className="text-gray-600">{language === 'pl' ? "Krajów" : language === 'de' ? "Länder" : "Countries"}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                      <Calendar className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">8+</h3>
                      <p className="text-gray-600">{language === 'pl' ? "Lat doświadczenia" : language === 'de' ? "Jahre Erfahrung" : "Years of experience"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                {timeline.map((event, index) => (
                  <TimelineEvent
                    key={index}
                    year={event.year}
                    title={event.title}
                    description={event.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 mb-4">
              {language === 'pl' ? "NASZ ZESPÓŁ" : language === 'de' ? "UNSER TEAM" : "OUR TEAM"}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
              {language === 'pl' ? "Poznaj naszych ekspertów" : 
               language === 'de' ? "Lerne unsere Experten kennen" : 
               "Meet our experts"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'pl' 
                ? "Nasza siła tkwi w różnorodności perspektyw i doświadczeń, które wnosi każdy członek naszego zespołu." 
                : language === 'de' 
                ? "Unsere Stärke liegt in der Vielfalt der Perspektiven und Erfahrungen, die jedes Mitglied unseres Teams einbringt."
                : "Our strength lies in the diversity of perspectives and experiences that each member of our team brings."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMemberProfile
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                quote={member.quote}
                socials={member.socials}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 mb-4">
              {language === 'pl' ? "NASZE LOKALIZACJE" : language === 'de' ? "UNSERE STANDORTE" : "OUR LOCATIONS"}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
              {language === 'pl' ? "Globalna obecność" : 
               language === 'de' ? "Globale Präsenz" : 
               "Global presence"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'pl' 
                ? "Działamy globalnie, z biurami strategicznie rozmieszczonymi w kluczowych miastach na całym świecie." 
                : language === 'de' 
                ? "Wir agieren global, mit strategisch platzierten Büros in wichtigen Städten auf der ganzen Welt."
                : "We operate globally, with offices strategically located in key cities around the world."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{location.city}, {location.country}</h3>
                    <p className="text-gray-500">{location.type}</p>
                  </div>
                </div>
                <p className="text-gray-600 ml-14">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Modern Grid with Gradients */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-white/20 text-white mb-4 backdrop-blur-sm">
              {language === 'pl' ? "NASZE WARTOŚCI" : language === 'de' ? "UNSERE WERTE" : "OUR VALUES"}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
              {language === 'pl' ? "Co nas definiuje" : 
               language === 'de' ? "Was uns ausmacht" : 
               "What defines us"}
            </h2>
            <p className="text-lg text-white/80">
              {language === 'pl' 
                ? "Nasze wartości są fundamentem wszystkiego, co robimy, kształtując nasze podejście do pracy i relacji z klientami." 
                : language === 'de' 
                ? "Unsere Werte sind die Grundlage für alles, was wir tun, und prägen unseren Ansatz zur Arbeit und zu Kundenbeziehungen."
                : "Our values are the foundation of everything we do, shaping our approach to work and client relationships."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-10 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">
                {language === 'pl' ? "Innowacyjność" : language === 'de' ? "Innovation" : "Innovation"}
              </h3>
              <p className="text-white/80 mb-6">
                {language === 'pl' 
                  ? "Nieustannie poszukujemy nowych, lepszych sposobów rozwiązywania problemów i tworzenia wartości poprzez technologię." 
                  : language === 'de' 
                  ? "Wir suchen ständig nach neuen, besseren Wegen, Probleme zu lösen und durch Technologie Mehrwert zu schaffen."
                  : "We constantly seek new, better ways to solve problems and create value through technology."}
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-10 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">
                {language === 'pl' ? "Współpraca" : language === 'de' ? "Zusammenarbeit" : "Collaboration"}
              </h3>
              <p className="text-white/80 mb-6">
                {language === 'pl' 
                  ? "Wierzymy w siłę różnorodnych zespołów i otwartą komunikację dla osiągania wyjątkowych rezultatów." 
                  : language === 'de' 
                  ? "Wir glauben an die Kraft vielfältiger Teams und offene Kommunikation, um außergewöhnliche Ergebnisse zu erzielen."
                  : "We believe in the power of diverse teams and open communication to achieve exceptional results."}
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-10 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">
                {language === 'pl' ? "Uczciwość" : language === 'de' ? "Integrität" : "Integrity"}
              </h3>
              <p className="text-white/80 mb-6">
                {language === 'pl' 
                  ? "Działamy z przejrzystością, odpowiedzialnością i autentycznością we wszystkich naszych relacjach." 
                  : language === 'de' 
                  ? "Wir handeln mit Transparenz, Verantwortung und Authentizität in all unseren Beziehungen."
                  : "We act with transparency, accountability, and authenticity in all our relationships."}
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-10 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">
                {language === 'pl' ? "Doskonałość" : language === 'de' ? "Exzellenz" : "Excellence"}
              </h3>
              <p className="text-white/80 mb-6">
                {language === 'pl' 
                  ? "Dążymy do najwyższej jakości we wszystkim, co robimy, nieustannie podnosząc poprzeczkę dla siebie i branży." 
                  : language === 'de' 
                  ? "Wir streben in allem, was wir tun, nach höchster Qualität und heben ständig die Messlatte für uns selbst und die Branche."
                  : "We strive for the highest quality in everything we do, continuously raising the bar for ourselves and the industry."}
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-indigo-50 rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-100 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-indigo-100 rounded-full opacity-50"></div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 relative z-10">
              {language === 'pl' ? "Gotowi na współpracę?" : 
               language === 'de' ? "Bereit für eine Zusammenarbeit?" : 
               "Ready to collaborate?"}
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-xl mx-auto relative z-10">
              {language === 'pl' 
                ? "Porozmawiajmy o tym, jak możemy wspólnie tworzyć innowacyjne rozwiązania dla Twojej firmy." 
                : language === 'de' 
                ? "Lassen Sie uns darüber sprechen, wie wir gemeinsam innovative Lösungen für Ihr Unternehmen entwickeln können."
                : "Let's talk about how we can create innovative solutions for your business together."}
            </p>
            <a 
              href="/contact" 
              className="inline-block text-white bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative z-10"
            >
              {language === 'pl' ? "Skontaktuj się z nami" : 
               language === 'de' ? "Kontaktieren Sie uns" : 
               "Get in touch"}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
