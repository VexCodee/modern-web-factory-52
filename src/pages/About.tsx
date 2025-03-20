
import React from 'react';
import Layout from '../components/Layout';
import { Shield, Users, Target, Award } from 'lucide-react';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';

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

  // Multilingual team member descriptions
  const teamMembers = {
    pl: [
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
    ],
    en: [
      {
        name: "Alexander Smith",
        position: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        bio: "With over 15 years of experience in IT and business management, Alexander founded TechPrime with a vision to help companies leverage technology for sustainable growth."
      },
      {
        name: "Sarah Johnson",
        position: "Chief Technology Officer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        bio: "Sarah leads our technical strategy and development teams, bringing extensive experience in software architecture, artificial intelligence, and cloud technologies."
      },
      {
        name: "David Lewis",
        position: "Creative Director",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        bio: "David oversees all design projects, ensuring our solutions not only work flawlessly but also provide exceptional user experiences."
      },
      {
        name: "Renata Thompson",
        position: "Marketing Director",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
        bio: "Renata develops and implements our marketing strategies, helping clients build strong brand identities and effective marketing campaigns."
      }
    ],
    de: [
      {
        name: "Alexander Schmidt",
        position: "CEO & Gründer",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        bio: "Mit über 15 Jahren Erfahrung in IT und Unternehmensführung gründete Alexander TechPrime mit der Vision, Unternehmen dabei zu helfen, Technologie für nachhaltiges Wachstum zu nutzen."
      },
      {
        name: "Sara Wagner",
        position: "Chief Technology Officer",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        bio: "Sara leitet unsere technische Strategie und Entwicklungsteams und bringt umfassende Erfahrung in Softwarearchitektur, künstlicher Intelligenz und Cloud-Technologien mit."
      },
      {
        name: "David Weber",
        position: "Kreativdirektor",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        bio: "David überwacht alle Designprojekte und sorgt dafür, dass unsere Lösungen nicht nur einwandfrei funktionieren, sondern auch außergewöhnliche Benutzererlebnisse bieten."
      },
      {
        name: "Renata Müller",
        position: "Marketingdirektorin",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
        bio: "Renata entwickelt und implementiert unsere Marketingstrategien und hilft Kunden dabei, starke Markenidentitäten und effektive Marketingkampagnen aufzubauen."
      }
    ]
  };

  // Get team members based on current language
  const team = teamMembers[language] || teamMembers.en;

  return (
    <Layout>
      {/* Hero Section */}
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

      {/* Our Story */}
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

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              {t('about.team.title')}
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-fade-in" style={{ animationDelay: '100ms' }}>
              {t('about.team.description')}
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
              {t('whyChooseUs.features.team.description')}
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
