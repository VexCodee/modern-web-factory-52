
import React, { useState } from 'react';
import Layout from '../components/Layout';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, AnimatedCard } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArrowRight, ArrowUpRight, Bookmark, Globe, Image, LayoutGrid, Monitor, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Project categories
  const categories = [
    { id: 'all', label: t('portfolio.categories.all'), icon: <LayoutGrid size={16} /> },
    { id: 'fintech', label: 'Fintech', icon: <Globe size={16} /> },
    { id: 'mobile', label: 'Mobile', icon: <Smartphone size={16} /> },
    { id: 'web', label: t('portfolio.categories.web'), icon: <Monitor size={16} /> },
    { id: 'design', label: t('portfolio.categories.design'), icon: <Image size={16} /> },
    { id: 'logistics', label: 'Logistics', icon: <ArrowRight size={16} /> },
    { id: 'travel', label: 'Travel & Leisure', icon: <Bookmark size={16} /> }
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
      color: "bg-purple-600",
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
      color: "bg-violet-700",
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
      color: "bg-indigo-600",
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
      color: "bg-cyan-600",
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
      color: "bg-teal-600",
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
      color: "bg-pink-600",
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
      color: "bg-blue-600",
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
      color: "bg-emerald-600",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-violet-900 via-indigo-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/90 via-indigo-800/80 to-purple-900/90"></div>
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80" 
            alt="Background" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
          />
          {/* Abstract patterns */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-white/5"
                style={{
                  width: Math.random() * 300 + 50,
                  height: Math.random() * 300 + 50,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float-around ${Math.random() * 15 + 10}s infinite linear`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-6"
            >
              {t('portfolio.title')}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              {t('portfolio.subtitle')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-indigo-100 mb-8 max-w-2xl"
            >
              {t('portfolio.description')}
            </motion.p>
            
            {/* Category Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Tabs defaultValue="all" onValueChange={setActiveCategory} className="w-full">
                <TabsList className="bg-white/10 backdrop-blur-sm p-1 rounded-full h-auto flex flex-wrap mb-4">
                  {categories.map(category => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="rounded-full px-4 py-2 text-sm flex items-center gap-2 data-[state=active]:bg-gradient-to-r from-violet-500 to-purple-600 data-[state=active]:text-white transition-all duration-300"
                    >
                      <span>{category.icon}</span>
                      <span>{category.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id} 
                variants={itemVariants}
                className="group"
              >
                <AnimatedCard className="overflow-hidden border-0 bg-white shadow-lg h-full">
                  <div className={`${project.color} absolute inset-0 z-0`}>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center opacity-50 mix-blend-overlay"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7 }}
                    />
                  </div>
                  
                  <CardContent className="p-8 relative z-10 h-full flex flex-col">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <motion.span 
                          key={idx} 
                          className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium text-white"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      <span className="ml-auto">
                        <motion.button 
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5
                          }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ArrowUpRight size={16} />
                        </motion.button>
                      </span>
                    </div>
                    
                    {/* Logo or Project Title */}
                    <div className="mb-4">
                      <motion.h2 
                        className={`text-2xl md:text-3xl font-bold ${project.textColor}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {project.title}
                      </motion.h2>
                      <motion.p 
                        className={`text-sm md:text-base mt-1 ${project.textColor} opacity-90`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        {project.subtitle}
                      </motion.p>
                    </div>
                    
                    {/* Stats/Metrics */}
                    <div className="mt-auto pt-12 grid grid-cols-3 gap-4">
                      {project.stats.map((stat, idx) => (
                        <motion.div 
                          key={idx} 
                          className={`${project.textColor}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + (idx * 0.1), duration: 0.5 }}
                        >
                          <div className="text-xl md:text-2xl font-bold">{stat}</div>
                          <div className="text-xs opacity-80">{project.statsLabels[idx]}</div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Partners/Clients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-lg mx-auto mb-10">
            <h2 className="text-2xl font-bold mb-2 text-violet-900">
              {language === 'pl' ? 'Zaufali nam' : language === 'de' ? 'Sie vertrauen uns' : 'They trust us'}
            </h2>
            <p className="text-gray-600">
              {language === 'pl' ? 'Współpracujemy z wiodącymi markami' : 
               language === 'de' ? 'Wir arbeiten mit führenden Marken zusammen' : 
               'We work with leading brands around the world'}
            </p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center"
          >
            {Array(6).fill(0).map((_, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="w-32 h-16 bg-gray-50 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow"
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="w-16 h-8 bg-violet-200 rounded-md"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
        
      {/* Portfolio Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-1 rounded-full text-sm font-medium text-white mb-6">
                {language === 'pl' ? 'Nasz proces' : language === 'de' ? 'Unser Prozess' : 'Our Process'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-violet-900">
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
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 mr-4 w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-violet-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                className="absolute inset-0 rounded-2xl transform rotate-6 bg-violet-200"
                animate={{ rotate: [6, 4, 6] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <motion.div 
                className="absolute inset-0 rounded-2xl transform -rotate-3 bg-indigo-200"
                animate={{ rotate: [-3, -5, -3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80" 
                alt="Our process visualization" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
              />
              
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-violet-600 to-violet-300 rounded-full filter blur-2xl opacity-20"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-indigo-600 to-indigo-300 rounded-full filter blur-2xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default Portfolio;
