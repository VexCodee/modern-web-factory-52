
import React from 'react';
import Layout from '../components/Layout';
import { Shield, Users, Target, Award } from 'lucide-react';
import CTASection from '../components/CTASection';

const About = () => {
  const values = [
    {
      icon: <Shield size={24} className="text-primary" />,
      title: "Uczciwość",
      description: "Działamy z przejrzystością i uczciwością we wszystkich naszych interakcjach, budując zaufanie z naszymi klientami i partnerami."
    },
    {
      icon: <Users size={24} className="text-primary" />,
      title: "Współpraca",
      description: "Wierzymy w ścisłą współpracę z naszymi klientami, budując partnerstwo prowadzące do wspólnego sukcesu."
    },
    {
      icon: <Target size={24} className="text-primary" />,
      title: "Doskonałość",
      description: "Jesteśmy zobowiązani do dostarczania rozwiązań najwyższej jakości i przekraczania oczekiwań klientów we wszystkim, co robimy."
    },
    {
      icon: <Award size={24} className="text-primary" />,
      title: "Innowacja",
      description: "Nieustannie odkrywamy nowe technologie i kreatywne podejścia do rozwiązywania złożonych wyzwań biznesowych."
    }
  ];

  const team = [
    {
      name: "Aleksander Kowalski",
      position: "Prezes & Założyciel",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      bio: "Z ponad 15-letnim doświadczeniem w IT i zarządzaniu biznesem, Aleksander założył TechPrime z wizją pomocy firmom w wykorzystaniu technologii do zrównoważonego rozwoju."
    },
    {
      name: "Sara Nowak",
      position: "Dyrektor Technologiczna",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      bio: "Sara kieruje naszą strategią techniczną i zespołami programistów, wnosząc bogate doświadczenie w architekturze oprogramowania, sztucznej inteligencji i technologiach chmurowych."
    },
    {
      name: "Dawid Lewandowski",
      position: "Dyrektor Kreatywny",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      bio: "Dawid nadzoruje wszystkie projekty graficzne, dbając o to, aby nasze rozwiązania nie tylko działały bezbłędnie, ale także zapewniały wyjątkowe doświadczenia użytkownika."
    },
    {
      name: "Renata Tomczyk",
      position: "Dyrektor Marketingu",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
      bio: "Renata opracowuje i wdraża nasze strategie marketingowe, pomagając klientom budować silne tożsamości marek i skuteczne kampanie marketingowe."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              O Nas
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-display font-bold leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
              Nasza Historia i Misja
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Poznaj naszą podróż, wartości i pełen pasji zespół odpowiedzialny za sukces TechPrime.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
                Nasza Historia
              </span>
              <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
                Budujemy Cyfrową Doskonałość od 2010 roku
              </h2>
              <div className="mt-6 space-y-6 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <p>
                  TechPrime zostało założone z jasną wizją: pomóc firmom wykorzystać pełny potencjał technologii w szybko zmieniającym się cyfrowym krajobrazie. To, co zaczęło się jako mała agencja tworzenia stron internetowych, rozrosło się w kompleksowego dostawcę rozwiązań IT obsługującego klientów z wielu branż.
                </p>
                <p>
                  Nasza podróż była naznaczona ciągłymi innowacjami, nauką i adaptacją do nowych technologii i potrzeb rynkowych. Na każdym etapie naszego rozwoju utrzymywaliśmy nasze zobowiązanie do dostarczania wyjątkowych wartości i budowania trwałych relacji z naszymi klientami.
                </p>
                <p>
                  Dziś z dumą prowadzimy firmy przez ich cyfrowe transformacje, łącząc wiedzę techniczną ze strategicznym myśleniem, aby tworzyć rozwiązania, które napędzają rzeczywiste wyniki biznesowe.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" 
                  alt="Biuro TechPrime" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-5 -top-5 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -left-5 -bottom-5 w-32 h-32 bg-accent/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              Nasze Wartości
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-fade-in" style={{ animationDelay: '100ms' }}>
              Co Nas Napędza
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Nasze podstawowe wartości kształtują naszą kulturę i kierują każdą decyzją, którą podejmujemy jako firma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover-lift animate-fade-in" 
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              Nasz Zespół
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-fade-in" style={{ animationDelay: '100ms' }}>
              Poznaj Ekspertów
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Nasz zróżnicowany zespół profesjonalistów łączy wiedzę specjalistyczną z zakresu technologii, projektowania i strategii biznesowej.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover-lift animate-fade-in" 
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "Obsłużonych Klientów" },
              { number: "450+", label: "Zakończonych Projektów" },
              { number: "35+", label: "Ekspertów w Zespole" },
              { number: "10+", label: "Lat Doświadczenia" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
