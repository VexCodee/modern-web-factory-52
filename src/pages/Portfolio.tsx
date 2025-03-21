
import React, { useState } from 'react';
import Layout from '../components/Layout';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArrowRight, ArrowUpRight, Globe, Image, LayoutGrid, Monitor, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  
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
      {/* Hero Section - Updated to match Home and Services style */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          {/* Background with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-70"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mix-blend-multiply blur-3xl opacity-60"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-pink-100 to-blue-100 mix-blend-multiply blur-3xl opacity-40"></div>
          
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
            <div>
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
              
              <p className="text-xl text-gray-700 mb-8 max-w-xl">
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
                        className="rounded-lg px-3 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300 flex items-center"
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
            <div className="hidden lg:block relative perspective-1000">
              <div className="relative transform transition-all duration-1000 hover:rotate-y-6 hover:rotate-z-3 transform-style-3d">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=550"
                  alt="Featured project" 
                  className="relative rounded-2xl shadow-2xl animate-[float_6s_ease-in-out_infinite] border border-gray-200"
                />
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md rounded-xl p-4 border border-gray-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-gray-600 text-sm">Featured Project</div>
                      <div className="text-gray-900 font-bold text-xl">Modern Web Platform</div>
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
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-600">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-gray-500 rounded-full animate-[scrollDown_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid - Return to original dark styling */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} 
                className="group perspective-1000"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fade-in 0.6s ease-out forwards',
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                <Card className="overflow-hidden border-none bg-gray-800 hover:shadow-xl hover:shadow-primary/20 h-full transition-all duration-500 hover:translate-y-[-10px] transform-style-3d hover:rotate-y-2">
                  <div className={`relative overflow-hidden h-48 ${project.color}`}>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 transition-all duration-500 group-hover:from-transparent group-hover:to-black/20"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105 opacity-80"
                    />
                  </div>
                  
                  <CardContent className="p-8 relative z-10 h-full flex flex-col">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 rounded-full bg-gray-700 text-xs font-medium text-gray-300 transition-all duration-300 hover:bg-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="ml-auto">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/90 text-white hover:bg-primary transition-all duration-300 hover:scale-110">
                          <ArrowUpRight size={16} />
                        </button>
                      </span>
                    </div>
                    
                    {/* Project Title */}
                    <div className="mb-4 transform transition-all duration-300 group-hover:translate-y-[-5px]">
                      <h2 className="text-2xl md:text-3xl font-bold text-white transition-all duration-300">{project.title}</h2>
                      <p className="text-sm md:text-base mt-1 text-gray-400 transition-all duration-300 group-hover:text-gray-300">{project.subtitle}</p>
                    </div>
                    
                    {/* Stats/Metrics */}
                    <div className="mt-auto pt-6 grid grid-cols-3 gap-4">
                      {project.stats.map((stat, idx) => (
                        <div key={idx} className="text-white transform transition-all duration-300 hover:scale-105">
                          <div className="text-xl md:text-2xl font-bold text-primary">{stat}</div>
                          <div className="text-xs text-gray-400">{project.statsLabels[idx]}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Partners/Clients - Return to original dark styling */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-lg mx-auto mb-10">
            <h2 className="text-2xl font-bold mb-2 text-white">
              {language === 'pl' ? 'Zaufali nam' : language === 'de' ? 'Sie vertrauen uns' : 'They trust us'}
            </h2>
            <p className="text-gray-400">
              {language === 'pl' ? 'Współpracujemy z wiodącymi markami' : 
               language === 'de' ? 'Wir arbeiten mit führenden Marken zusammen' : 
               'We work with leading brands around the world'}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="w-32 h-16 bg-gray-700 shadow-md rounded-lg flex items-center justify-center hover:bg-gray-600 transition-all duration-300 border border-gray-600">
                <div className="w-16 h-8 bg-gray-800 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
        
      {/* Portfolio Highlights Section - Return to original dark styling */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-primary/20 border border-primary/30 px-4 py-1 rounded-full text-sm font-medium text-primary mb-6">
                {language === 'pl' ? 'Nasz proces' : language === 'de' ? 'Unser Prozess' : 'Our Process'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
                {language === 'pl' ? 'Jak pracujemy nad Twoim projektem' : 
                 language === 'de' ? 'Wie wir an Ihrem Projekt arbeiten' : 
                 'How we approach your project'}
              </h2>
              <p className="text-lg text-gray-400 mb-8">
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
                    <div className="flex-shrink-0 mr-4 w-12 h-12 rounded-full bg-gray-800 border border-primary/30 flex items-center justify-center text-primary font-bold transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      {step.number}
                    </div>
                    <div className="transition-all duration-300 group-hover:translate-x-2">
                      <h3 className="text-xl font-bold mb-1 transition-colors duration-300 text-white group-hover:text-primary">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
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
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] border border-gray-700"
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
