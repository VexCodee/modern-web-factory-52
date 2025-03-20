
import React from 'react';
import { UserPlus, Globe, Palette, Wrench, Bot, BarChart3, Share2, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="service-card bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-fade-in hover-lift" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const ServiceSection = () => {
  const { language, translations } = useLanguage();
  const t = translations.services[language];
  const items = t.items;

  const services = [
    {
      icon: <UserPlus size={22} />,
      title: items.outsourcing.title,
      description: items.outsourcing.description,
      delay: 100
    },
    {
      icon: <Globe size={22} />,
      title: items.webDev.title,
      description: items.webDev.description,
      delay: 200
    },
    {
      icon: <Palette size={22} />,
      title: items.graphic.title,
      description: items.graphic.description,
      delay: 300
    },
    {
      icon: <Wrench size={22} />,
      title: items.hardware.title,
      description: items.hardware.description,
      delay: 400
    },
    {
      icon: <Bot size={22} />,
      title: items.ai.title,
      description: items.ai.description,
      delay: 500
    },
    {
      icon: <BarChart3 size={22} />,
      title: items.marketing.title,
      description: items.marketing.description,
      delay: 600
    },
    {
      icon: <Share2 size={22} />,
      title: items.social.title,
      description: items.social.description,
      delay: 700
    },
    {
      icon: <ClipboardList size={22} />,
      title: items.project.title,
      description: items.project.description,
      delay: 800
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
            {t.title}
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-fade-in" style={{ animationDelay: '100ms' }}>
            {t.subtitle}
          </h2>
          <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>

        <div className="mt-14 text-center animate-fade-in" style={{ animationDelay: '900ms' }}>
          <Link 
            to="/services" 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            {t.viewAll}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
