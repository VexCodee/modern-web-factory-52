
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArrowRight, ArrowUpRight, Globe, Image, LayoutGrid, Monitor, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Project categories
  const categories = [
    { id: 'all', label: t('portfolio.categories.all'), icon: <LayoutGrid className="mr-2 h-4 w-4" /> },
    { id: 'fintech', label: 'Fintech', icon: <ArrowRight className="mr-2 h-4 w-4" /> },
    { id: 'mobile', label: 'Mobile', icon: <Smartphone className="mr-2 h-4 w-4" /> },
    { id: 'web', label: t('portfolio.categories.web'), icon: <Globe className="mr-2 h-4 w-4" /> },
    { id: 'design', label: t('portfolio.categories.design'), icon: <Image className="mr-2 h-4 w-4" /> },
    { id: 'logistics', label: 'Logistics', icon: <ArrowRight className="mr-2 h-4 w-4" /> },
    { id: 'travel', label: 'Travel & Leisure', icon: <ArrowRight className="mr-2 h-4 w-4" /> }
  ];
  
  // Portfolio projects data structure
  const projects = [
    {
      id: 1,
      title: "Dolby.io",
      subtitle: "Streaming & media app development platform",
      description: "",
      stats: ["+2M", "99%", "2019"],
      statsLabels: ["Daily users", "Uptime", "Founded"],
      color: "bg-purple-700",
      textColor: "text-white",
      categories: ["mobile", "web"],
      tags: ["Music & Video", "Mobile"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800&h=500",
      logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=120&h=120",
    },
    {
      id: 2,
      title: "Nextbank Credit Scoring",
      subtitle: "AI-powered credit scoring & loan origination",
      description: "",
      stats: ["+500M", "97%", "2019"],
      statsLabels: ["Loan applications processed", "Predictions' accuracy", "Singapore Fintech Awards Finalist"],
      color: "bg-gray-900",
      textColor: "text-white",
      categories: ["fintech", "web"],
      tags: ["Fintech", "Mobile", "Web"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=500",
    },
    {
      id: 3,
      title: "Orlen mFlota",
      subtitle: "Fleet management mobile app",
      description: "",
      stats: ["+100K", "24/7", "2020"],
      statsLabels: ["Active users", "Support", "Launch year"],
      color: "bg-red-600",
      textColor: "text-white",
      categories: ["mobile", "logistics"],
      tags: ["Logistics", "Mobile"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500",
    },
    {
      id: 4,
      title: "TUI",
      subtitle: "Travel management app for globetrotters",
      description: "",
      stats: ["+2.5M", "45+", "4.8/5"],
      statsLabels: ["Bookings", "Countries", "App rating"],
      color: "bg-blue-600",
      textColor: "text-white",
      categories: ["travel", "mobile", "design"],
      tags: ["Travel & Leisure", "Mobile", "Design"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=500",
    },
    {
      id: 5,
      title: "Fintech Dashboard",
      subtitle: "Data visualization platform for investment banks",
      description: "",
      stats: ["$3.2B", "12", "2021"],
      statsLabels: ["Assets tracked", "Major banks", "Release"],
      color: "bg-indigo-600",
      textColor: "text-white",
      categories: ["fintech", "web"],
      tags: ["Fintech", "Web", "Design"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=500",
    },
    {
      id: 6,
      title: "Logistic Pro",
      subtitle: "End-to-end supply chain management",
      description: "",
      stats: ["68%", "5hrs", "99.3%"],
      statsLabels: ["Cost reduction", "Time saved/week", "Delivery accuracy"],
      color: "bg-amber-600",
      textColor: "text-white",
      categories: ["logistics", "web"],
      tags: ["Logistics", "Software"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=500",
    },
    {
      id: 7,
      title: "TravelEase",
      subtitle: "All-in-one travel companion app",
      description: "",
      stats: ["52", "4.7/5", "2022"],
      statsLabels: ["Countries", "App rating", "Launch year"],
      color: "bg-cyan-700",
      textColor: "text-white",
      categories: ["travel", "mobile"],
      tags: ["Travel", "Mobile"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=500",
    },
    {
      id: 8,
      title: "SecureBank",
      subtitle: "Digital banking with advanced security",
      description: "",
      stats: ["128-bit", "0", "24/7"],
      statsLabels: ["Encryption", "Data breaches", "Monitoring"],
      color: "bg-emerald-700",
      textColor: "text-white",
      categories: ["fintech", "mobile"],
      tags: ["Fintech", "Security"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&h=500",
    }
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <Layout>
      {/* Hero Section - Light theme styling */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          {/* Background with subtle gradient */}
          <div className="absolute inset-0 bg-white opacity-90"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mix-blend-multiply blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-pink-100 to-blue-100 mix-blend-multiply blur-3xl opacity-20"></div>
          
          {/* Animated particles */}
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
        
        {/* Content container */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left column: Text content */}
            <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 border border-primary/30">
                <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-primary font-medium tracking-wide text-sm">
                  {language === 'pl' ? 'Nasze Portfolio' : language === 'de' ? 'Unser Portfolio' : 'Our Portfolio'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-gray-900">
                {language === 'pl' ? 'Nasze Prace' : language === 'de' ? 'Unsere Arbeiten' : 'Our Works'}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {language === 'pl' ? 'i Case Study' : language === 'de' ? '& Fallstudien' : '& Case Studies'}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                {language === 'pl' 
                  ? 'Poznaj nasze wyróżnione projekty i zobacz, jak pomogliśmy firmom z różnych branż osiągnąć ich cele dzięki technologii.' 
                  : language === 'de' 
                    ? 'Entdecken Sie unsere herausragenden Projekte und erfahren Sie, wie wir Unternehmen verschiedener Branchen geholfen haben, ihre Ziele durch Technologie zu erreichen.'
                    : 'Explore our featured projects and see how we\'ve helped businesses across industries achieve their goals through technology.'}
              </p>
              
              {/* Category filter buttons */}
              <div className="mt-8">
                <Tabs defaultValue="all" onValueChange={setActiveCategory} className="w-full">
                  <TabsList className="p-1 bg-gray-100 border border-gray-200 rounded-xl h-auto flex flex-wrap max-w-3xl">
                    {categories.map(category => (
                      <TabsTrigger 
                        key={category.id} 
                        value={category.id}
                        className="rounded-lg px-3 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 flex items-center text-gray-600"
                      >
                        {category.icon}
                        {category.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>
            
            {/* Right column: Featured project preview */}
            <div className={`hidden lg:block relative perspective-1000 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
              <div className="relative transform transition-all duration-1000 hover:rotate-y-6 hover:rotate-z-3 transform-style-3d">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=550"
                  alt="Featured project" 
                  className="relative rounded-2xl shadow-2xl animate-[float_6s_ease-in-out_infinite] border border-gray-200"
                />
                
                <div className="absolute bottom-6 left-6 right-6 bg-gray-900/80 backdrop-blur-md rounded-xl p-4 border border-gray-700">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-gray-400 text-sm">Featured Project</div>
                      <div className="text-white font-bold text-xl">Modern Web Platform</div>
                    </div>
                    <div className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-[scrollDown_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid - Updated to match the provided images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="group">
                <Card className="relative overflow-hidden border-none shadow-xl rounded-lg h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer">
                  {/* Full image with overlay */}
                  <div className="absolute inset-0 w-full h-full">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
                  </div>
                  
                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-4 py-1.5 rounded-full bg-gray-800/80 backdrop-blur-sm text-sm font-medium text-white transition-all duration-300 hover:bg-gray-700/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Arrow button */}
                  <div className="absolute top-4 right-4 z-10">
                    <button className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/30 transform hover:-translate-y-1">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                    {/* Project Title and Subtitle */}
                    <h2 className="text-3xl font-bold text-white mb-1">{project.title}</h2>
                    <p className="text-gray-300 mb-6 text-lg">{project.subtitle}</p>
                    
                    {/* Stats/Metrics at bottom */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      {project.stats.map((stat, idx) => (
                        <div key={idx} className="transition-all duration-300 hover:translate-y-[-5px]">
                          <div className="text-2xl font-bold text-white">{stat}</div>
                          <div className="text-sm text-gray-400">{project.statsLabels[idx]}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Partners/Clients - Light styling */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-lg mx-auto mb-10">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              {language === 'pl' ? 'Zaufali nam' : language === 'de' ? 'Sie vertrauen uns' : 'They trust us'}
            </h2>
            <p className="text-gray-600">
              {language === 'pl' ? 'Współpracujemy z wiodącymi markami' : 
               language === 'de' ? 'Wir arbeiten mit führenden Marken zusammen' : 
               'We work with leading brands around the world'}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="w-32 h-16 bg-white shadow-md rounded-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-200">
                <div className="w-16 h-8 bg-gray-100 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
        
      {/* Portfolio Highlights Section - Light styling */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-primary/20 border border-primary/30 px-4 py-1 rounded-full text-sm font-medium text-primary mb-6">
                {language === 'pl' ? 'Nasz proces' : language === 'de' ? 'Unser Prozess' : 'Our Process'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-gray-900">
                {language === 'pl' ? 'Jak pracujemy nad Twoim projektem' : 
                 language === 'de' ? 'Wie wir an Ihrem Projekt arbeiten' : 
                 'How we approach your project'}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {language === 'pl' ? 'Każdy projekt to indywidualne podejście. Łączymy najlepsze praktyki z innowacyjnymi rozwiązaniami.' : 
                 language === 'de' ? 'Jedes Projekt ist ein individueller Ansatz. Wir kombinieren bewährte Praktiken mit innovativen Lösungen.' : 
                 'Each project gets a custom approach. We combine industry best practices with innovative solutions to deliver exceptional results.'}
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    number: '01',
                    title: language === 'pl' ? 'Discovery' : language === 'de' ? 'Entdeckung' : 'Discovery',
                    description: language === 'pl' ? 'Poznajemy Twoje potrzeby i cele biznesowe' : 
                                 language === 'de' ? 'Wir verstehen Ihre Bedürfnisse und Geschäftsziele' : 
                                 'Understanding your needs and business goals'
                  },
                  {
                    number: '02',
                    title: language === 'pl' ? 'Planowanie' : language === 'de' ? 'Planung' : 'Planning',
                    description: language === 'pl' ? 'Definiowanie zakresu i harmonogramu' : 
                                 language === 'de' ? 'Definition von Umfang und Zeitplan' : 
                                 'Defining scope and timeline'
                  },
                  {
                    number: '03',
                    title: language === 'pl' ? 'Projektowanie' : language === 'de' ? 'Gestaltung' : 'Design',
                    description: language === 'pl' ? 'Tworzenie interfejsu i doświadczenia użytkownika' : 
                                 language === 'de' ? 'Erstellen von Benutzeroberfläche und Benutzererfahrung' : 
                                 'Creating interface and user experience'
                  },
                  {
                    number: '04',
                    title: language === 'pl' ? 'Realizacja' : language === 'de' ? 'Umsetzung' : 'Development',
                    description: language === 'pl' ? 'Implementacja rozwiązania' : 
                                 language === 'de' ? 'Implementierung der Lösung' : 
                                 'Building the solution'
                  }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start group cursor-pointer">
                    <div className="flex-shrink-0 mr-4 w-12 h-12 rounded-full bg-gray-100 border border-primary/30 flex items-center justify-center text-primary font-bold transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      {step.number}
                    </div>
                    <div className="transition-all duration-300 group-hover:translate-x-2">
                      <h3 className="text-xl font-bold mb-1 transition-colors duration-300 text-gray-900 group-hover:text-primary">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl transform rotate-6 bg-primary/10"></div>
              <div className="absolute inset-0 rounded-2xl transform -rotate-3 bg-primary/5"></div>
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80" 
                alt="Our process visualization" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] border border-gray-200"
              />
              
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full filter blur-2xl opacity-60"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/5 rounded-full filter blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default Portfolio;
