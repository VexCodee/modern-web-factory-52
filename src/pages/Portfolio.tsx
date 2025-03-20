
import React, { useState } from 'react';
import Layout from '../components/Layout';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: t('portfolio.categories.all') },
    { id: 'web', label: t('portfolio.categories.web') },
    { id: 'ai', label: t('portfolio.categories.ai') },
    { id: 'marketing', label: t('services.items.marketing.title') },
    { id: 'design', label: t('portfolio.categories.design') }
  ];
  
  const projects = [
    {
      id: 1,
      title: "Platforma E-commerce",
      category: "web",
      image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      client: "RetailMax",
      description: "Niestandardowe rozwiązanie e-commerce ze zintegrowanym zarządzaniem inwentarzem i pulpitem analitycznym klienta."
    },
    {
      id: 2,
      title: "Bot AI Obsługi Klienta",
      category: "ai",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1806&q=80",
      client: "ServiceFirst Inc.",
      description: "Chatbot oparty na sztucznej inteligencji obsługujący zapytania klientów i zgłoszenia serwisowe z 85% skutecznością rozwiązań."
    },
    {
      id: 3,
      title: "Kampania Marketingu Cyfrowego",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      client: "GrowthBrand",
      description: "Kompleksowa strategia marketingu cyfrowego, która zwiększyła generowanie leadów o 150% w ciągu 6 miesięcy."
    },
    {
      id: 4,
      title: "Rebranding Korporacyjny",
      category: "design",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      client: "InnovateFinance",
      description: "Kompletne odświeżenie marki, w tym projektowanie logo, tożsamość wizualna i materiały marketingowe."
    },
    {
      id: 5,
      title: "Portal Medyczny",
      category: "web",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      client: "MediCare Network",
      description: "Bezpieczny portal pacjenta z integracją telemedycyny i zarządzaniem dokumentacją medyczną."
    },
    {
      id: 6,
      title: "Narzędzie Analityki Predykcyjnej",
      category: "ai",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      client: "DataInsight Corp",
      description: "Rozwiązanie uczenia maszynowego do prognozowania sprzedaży i optymalizacji zapasów."
    },
    {
      id: 7,
      title: "Strategia Mediów Społecznościowych",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      client: "TrendSetter Apparel",
      description: "Strategia treści i zarządzanie na wielu platformach, zwiększające zaangażowanie o 200%."
    },
    {
      id: 8,
      title: "Projekt Opakowań Produktów",
      category: "design",
      image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      client: "Organic Foods",
      description: "Ekologiczny projekt opakowań, który poprawił rozpoznawalność marki i pozycjonowanie na rynku."
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              {t('portfolio.title')}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-display font-bold leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
              {t('portfolio.subtitle')}
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              {t('portfolio.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover-lift animate-fade-in" 
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="h-52 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-display font-semibold">{project.title}</h3>
                    <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {filters.find(f => f.id === project.category)?.label.split(' ')[0]}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Klient: {project.client}</p>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm rounded-full bg-primary/10 text-primary px-4 py-1.5 font-medium animate-fade-in">
              {t('testimonials.title')}
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-fade-in" style={{ animationDelay: '100ms' }}>
              {t('testimonials.subtitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
              {t('testimonials.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div 
                key={index} 
                className="flex justify-center animate-fade-in" 
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Portfolio;
