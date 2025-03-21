import React from 'react';
import Layout from '../components/Layout';
import { Shield, Users, Target, Award } from 'lucide-react';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';
import TeamMemberCard from '../components/TeamMemberCard';

const About = () => {
  const { t, language } = useLanguage();
  
  const values = [
    {
      icon: <Shield size={24} className="text-primary" />,
      title: t('about.values.integrity'),
      description: t('about.values.integrityDesc')
    },
    {
      icon: <Users size={24} className="text-primary" />,
      title: t('about.values.collaboration'),
      description: t('about.values.collaborationDesc')
    },
    {
      icon: <Target size={24} className="text-primary" />,
      title: t('about.values.quality'),
      description: t('about.values.qualityDesc')
    },
    {
      icon: <Award size={24} className="text-primary" />,
      title: t('about.values.innovation'),
      description: t('about.values.innovationDesc')
    }
  ];

  const teamMembers = {
    pl: [
      {
        name: "Aleksander Kowalski",
        position: "Pasjonat Innowacji",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        bio: "Miłośnik technologii i innowacji. Lubi eksperymentować z nowymi rozwiązaniami i wierzy, że technologia powinna służyć ludziom, a nie odwrotnie."
      },
      {
        name: "Sara Nowak",
        position: "Strategiczny Wizjoner",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        bio: "Zawsze szuka nowych sposobów na rozwiązywanie problemów. Jej kreatywne podejście i umiejętność patrzenia w przyszłość pomagają firmie wyprzedzać trendy."
      },
      {
        name: "Dawid Lewandowski",
        position: "Kreator Doświadczeń",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        bio: "Fascynuje się interakcją między człowiekiem a technologią. Dąży do tworzenia rozwiązań, które są nie tylko funkcjonalne, ale także przyjemne w użyciu."
      },
      {
        name: "Renata Tomczyk",
        position: "Łącznik Społeczności",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
        bio: "Kocha budować mosty między ludźmi i technologią. Jej misją jest tworzenie społeczności wokół naszych produktów i słuchanie potrzeb użytkowników."
      }
    ],
    en: [
      {
        name: "Alexander Smith",
        position: "Innovation Enthusiast",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        bio: "A technology lover who enjoys experimenting with new solutions. He believes that technology should serve people, not the other way around."
      },
      {
        name: "Sarah Johnson",
        position: "Strategic Visionary",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        bio: "Always looking for new ways to solve problems. Her creative approach and ability to look to the future help the company stay ahead of trends."
      },
      {
        name: "David Lewis",
        position: "Experience Creator",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        bio: "Fascinated by the interaction between humans and technology. He strives to create solutions that are not only functional but also enjoyable to use."
      },
      {
        name: "Renata Thompson",
        position: "Community Connector",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
        bio: "Loves building bridges between people and technology. Her mission is to create communities around our products and listen to user needs."
      }
    ],
    de: [
      {
        name: "Alexander Schmidt",
        position: "Innovationsbegeisterter",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        bio: "Ein Technologieliebhaber, der gerne mit neuen Lösungen experimentiert. Er glaubt, dass Technologie den Menschen dienen sollte, nicht umgekehrt."
      },
      {
        name: "Sara Wagner",
        position: "Strategische Visionärin",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        bio: "Sucht immer nach neuen Wegen, um Probleme zu lösen. Ihr kreativer Ansatz und ihre Fähigkeit, in die Zukunft zu blicken, helfen dem Unternehmen, Trends vorauszuahnen."
      },
      {
        name: "David Weber",
        position: "Erlebnisgestalter",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        bio: "Fasziniert von der Interaktion zwischen Mensch und Technologie. Er strebt danach, Lösungen zu schaffen, die nicht nur funktional, sondern auch angenehm zu benutzen sind."
      },
      {
        name: "Renata Müller",
        position: "Gemeinschaftsverbinder",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
        bio: "Liebt es, Brücken zwischen Menschen und Technologie zu bauen. Ihre Mission ist es, Gemeinschaften rund um unsere Produkte zu schaffen und auf die Bedürfnisse der Nutzer zu hören."
      }
    ]
  };

  const team = teamMembers[language] || teamMembers.en;

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              {t('about.title')}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-display font-bold leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
              {t('about.subtitle')}
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
                {t('about.history.title')}
              </span>
              <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
                {t('about.mission.title')}
              </h2>
              <div className="mt-6 space-y-6 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <p>{t('about.history.description')}</p>
                <p>{t('about.mission.description')}</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" 
                  alt="TechPrime Office" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -right-5 -top-5 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -left-5 -bottom-5 w-32 h-32 bg-accent/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              {t('about.values.title')}
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-fade-in" style={{ animationDelay: '100ms' }}>
              {t('whyChooseUs.subtitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
              {t('whyChooseUs.description')}
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              {t('about.team.title')}
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-fade-in" style={{ animationDelay: '100ms' }}>
              {t('about.team.description')}
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Poznaj osoby, które z pasją tworzą przyszłość i łączą innowacyjne pomysły z potrzebami użytkowników.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="animate-fade-in" 
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <TeamMemberCard
                  name={member.name}
                  position={member.position}
                  bio={member.bio}
                  image={member.image}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: t('whyChooseUs.stats.clients') },
              { number: "450+", label: t('portfolio.title') },
              { number: "35+", label: t('about.team.title') },
              { number: "10+", label: t('whyChooseUs.stats.experience') }
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
