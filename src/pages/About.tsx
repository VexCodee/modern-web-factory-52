
import React from 'react';
import Layout from '../components/Layout';
import { Github, Linkedin, Twitter, MapPin, Globe, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import TimelineEvent from '../components/TimelineEvent';

const About = () => {
  const { t, language } = useLanguage();
  
  const timeline = [
    {
      year: "2015",
      title: language === 'pl' ? "Początki" : language === 'de' ? "Anfänge" : "Beginnings",
      description: language === 'pl' 
        ? "Założenie firmy z pasją do technologii." 
        : language === 'de' 
        ? "Gründung des Unternehmens mit einer Leidenschaft für Technologie."
        : "Company founded with a passion for technology."
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
        ? "Rozpoczęcie współpracy z klientami z Europy i USA." 
        : language === 'de' 
        ? "Beginn der Zusammenarbeit mit Kunden aus Europa und den USA."
        : "Starting collaboration with clients from Europe and the USA."
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

  const locations = [
    {
      city: language === 'pl' ? "Bielsko-Biała" : "Bielsko-Biała",
      country: language === 'pl' ? "Polska" : language === 'de' ? "Polen" : "Poland",
      address: language === 'pl' ? "ul. Główna 123" : language === 'de' ? "Hauptstraße 123" : "123 Main St.",
      type: language === 'pl' ? "Siedziba" : language === 'de' ? "Hauptsitz" : "Office",
    }
  ];

  const philosophyStatement = language === 'pl' 
    ? "Wierzę w przyszłość, w której technologia harmonijnie integruje się z życiem codziennym, czyniąc je prostszym, bardziej wydajnym i zrównoważonym."
    : language === 'de' 
    ? "Ich glaube an eine Zukunft, in der Technologie sich harmonisch in den Alltag integriert und ihn einfacher, effizienter und nachhaltiger macht."
    : "I believe in a future where technology seamlessly integrates with everyday life, making it simpler, more efficient, and sustainable.";

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
                  {language === 'pl' ? 'O Mnie' : language === 'de' ? 'Über Mich' : 'About Me'}
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
                  href="#my-story" 
                  className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  {language === 'pl' ? "Poznaj Moją Historię" : 
                   language === 'de' ? "Entdecke Meine Geschichte" : 
                   "Discover My Story"}
                </a>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500"
                  alt="About me" 
                  className="relative rounded-2xl shadow-2xl border border-gray-200"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-gray-900/80 backdrop-blur-md rounded-xl p-4 border border-gray-700">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-gray-400 text-sm">{language === 'pl' ? 'Moja Misja' : language === 'de' ? 'Meine Mission' : 'My Mission'}</div>
                      <div className="text-white font-bold text-xl">{language === 'pl' ? 'Tworzę Przyszłość' : language === 'de' ? 'Ich gestalte die Zukunft' : 'Shaping The Future'}</div>
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
        
        {/* Updated scroll indicator with reduced spacing */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500">
          <span className="text-sm mb-1">{language === 'pl' ? 'Przewiń, aby odkryć więcej' : language === 'de' ? 'Scrollen Sie, um mehr zu entdecken' : 'Scroll to explore'}</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-[bounce_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section id="my-story" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="order-2 lg:order-1">
              <div className="sticky top-32">
                <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 mb-6">
                  {language === 'pl' ? "MOJA HISTORIA" : language === 'de' ? "MEINE GESCHICHTE" : "MY STORY"}
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8">
                  {language === 'pl' ? "Od pomysłu do międzynarodowych projektów" : 
                   language === 'de' ? "Von der Idee zu internationalen Projekten" : 
                   "From idea to international projects"}
                </h2>
                <p className="text-lg text-gray-700 mb-10">
                  {language === 'pl' 
                    ? "Zacząłem jako entuzjasta technologii z wielką wizją. Dziś działam globalnie, zawsze poszukując nowych wyzwań i możliwości tworzenia rozwiązań, które zmieniają sposób, w jaki świat korzysta z technologii." 
                    : language === 'de' 
                    ? "Ich begann als Technologiebegeisterter mit einer großen Vision. Heute arbeite ich global und bin stets auf der Suche nach neuen Herausforderungen und Möglichkeiten, Lösungen zu schaffen, die die Art und Weise verändern, wie die Welt Technologie nutzt."
                    : "I started as a tech enthusiast with a big vision. Today, I operate globally, always looking for new challenges and opportunities to create solutions that change the way the world uses technology."}
                </p>
                
                <div className="space-y-2">
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

      {/* About Me Section - replacing team section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 mb-4">
              {language === 'pl' ? "O MNIE" : language === 'de' ? "ÜBER MICH" : "ABOUT ME"}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
              {language === 'pl' ? "Poznaj mnie lepiej" : 
               language === 'de' ? "Lerne mich besser kennen" : 
               "Get to know me better"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'pl' 
                ? "Jestem niezależnym specjalistą IT oferującym kompleksowe rozwiązania technologiczne dostosowane do indywidualnych potrzeb klientów." 
                : language === 'de' 
                ? "Ich bin ein unabhängiger IT-Spezialist, der umfassende technologische Lösungen anbietet, die auf die individuellen Bedürfnisse der Kunden zugeschnitten sind."
                : "I am an independent IT specialist offering comprehensive technology solutions tailored to individual client needs."}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:shrink-0 md:w-1/3">
                <img 
                  className="h-full w-full object-cover md:h-full md:w-full" 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                  alt="Professional headshot"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
                  {language === 'pl' ? "Specjalista IT" : language === 'de' ? "IT-Spezialist" : "IT Specialist"}
                </div>
                <h3 className="mt-2 text-2xl font-bold">
                  {language === 'pl' ? "Aleksander Kowalski" : language === 'de' ? "Alexander Schmidt" : "Alexander Smith"}
                </h3>
                <p className="mt-2 text-slate-500">
                  {language === 'pl' 
                    ? "Wierzę, że najlepsze rozwiązania powstają na przecięciu technologii i ludzkiej kreatywności. Jako niezależny specjalista IT, oferuję kompleksowe usługi obejmujące tworzenie stron internetowych, grafikę, naprawę sprzętu i wdrażanie rozwiązań AI." 
                    : language === 'de' 
                    ? "Ich glaube, dass die besten Lösungen an der Schnittstelle von Technologie und menschlicher Kreativität entstehen. Als unabhängiger IT-Spezialist biete ich umfassende Dienstleistungen, die Webentwicklung, Grafikdesign, Hardware-Reparatur und die Implementierung von KI-Lösungen umfassen."
                    : "I believe the best solutions emerge at the intersection of technology and human creativity. As an independent IT specialist, I offer comprehensive services including web development, graphic design, hardware repair, and AI solutions implementation."
                  }
                </p>
                
                <div className="mt-6 flex space-x-4">
                  {/* Social media links */}
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-indigo-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-indigo-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-indigo-600 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section - Simplified */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 mb-4">
              {language === 'pl' ? "LOKALIZACJA" : language === 'de' ? "STANDORT" : "LOCATION"}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
              {language === 'pl' ? "Gdzie działam" : 
               language === 'de' ? "Wo ich tätig bin" : 
               "Where I operate"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'pl' 
                ? "Działam globalnie, współpracując z klientami z różnych krajów." 
                : language === 'de' 
                ? "Ich arbeite global und kooperiere mit Kunden aus verschiedenen Ländern."
                : "I operate globally, collaborating with clients from various countries."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-lg mx-auto">
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

      {/* Values Section - Updated to match design of other sections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 mb-4">
              {language === 'pl' ? "MOJE WARTOŚCI" : language === 'de' ? "MEINE WERTE" : "MY VALUES"}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
              {language === 'pl' ? "Co mnie definiuje" : 
               language === 'de' ? "Was mich ausmacht" : 
               "What defines me"}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'pl' 
                ? "Moje wartości są fundamentem wszystkiego, co robię, kształtując moje podejście do pracy i relacji z klientami." 
                : language === 'de' 
                ? "Meine Werte sind die Grundlage für alles, was ich tue, und prägen meinen Ansatz zur Arbeit und zu Kundenbeziehungen."
                : "My values are the foundation of everything I do, shaping my approach to work and client relationships."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-10 shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {language === 'pl' ? "Innowacyjność" : language === 'de' ? "Innovation" : "Innovation"}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'pl' 
                  ? "Nieustannie poszukuję nowych, lepszych sposobów rozwiązywania problemów i tworzenia wartości poprzez technologię." 
                  : language === 'de' 
                  ? "Ich suche ständig nach neuen, besseren Wegen, Probleme zu lösen und durch Technologie Mehrwert zu schaffen."
                  : "I constantly seek new, better ways to solve problems and create value through technology."}
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-10 shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {language === 'pl' ? "Wiarygodność" : language === 'de' ? "Zuverlässigkeit" : "Reliability"}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === 'pl' 
                  ? "Dostarczam rozwiązania najwyższej jakości, zawsze dotrzymując terminów i budując długotrwałe relacje oparte na zaufaniu." 
                  : language === 'de' 
                  ? "Ich liefere Lösungen höchster Qualität, halte stets Fristen ein und baue langfristige, auf Vertrauen basierende Beziehungen auf."
                  : "I deliver high-quality solutions, always meeting deadlines and building long-lasting relationships based on trust."}
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
