import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArrowRight, ArrowUpRight, Globe, Image, LayoutGrid, Monitor, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { supabase } from '@/integrations/supabase/client';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  stats: string[];
  stats_labels: string[];
  color: string;
  text_color: string;
  categories: string[];
  tags: string[];
  image: string;
  logo?: string;
}

const Portfolio = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) {
          throw error;
        }
        
        setProjects(data as Project[]);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);
  
  const categories = [
    { id: 'all', label: t('portfolio.categories.all'), icon: <LayoutGrid className="mr-2 h-4 w-4" /> },
    { id: 'fintech', label: 'Fintech', icon: <ArrowRight className="mr-2 h-4 w-4" /> },
    { id: 'mobile', label: 'Mobile', icon: <Smartphone className="mr-2 h-4 w-4" /> },
    { id: 'web', label: t('portfolio.categories.web'), icon: <Globe className="mr-2 h-4 w-4" /> },
    { id: 'design', label: t('portfolio.categories.design'), icon: <Image className="mr-2 h-4 w-4" /> },
    { id: 'logistics', label: 'Logistics', icon: <ArrowRight className="mr-2 h-4 w-4" /> },
    { id: 'travel', label: 'Travel & Leisure', icon: <ArrowRight className="mr-2 h-4 w-4" /> }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => 
        project.categories && project.categories.includes(activeCategory)
      );

  const clientLogos = [
    {
      name: "Nextbank",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=160&h=80",
    },
    {
      name: "TUI",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=160&h=80",
    },
    {
      name: "Orlen",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=160&h=80",
    },
    {
      name: "Dolby",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=160&h=80",
    },
    {
      name: "LogisticPro",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=160&h=80",
    },
    {
      name: "SecureBank",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=160&h=80",
    },
  ];

  return (
    <Layout>
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
              <div className="mt-6">
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
            <div className="hidden lg:block relative">
              <div className="relative transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500"
                  alt="Featured project" 
                  className="relative rounded-2xl shadow-2xl border border-gray-200"
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
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500">
          <span className="text-sm mb-1">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-[scrollDown_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-4 text-lg">Loading projects...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg">No projects found in this category. Try clicking "Add Default Projects" in the admin panel.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project, index) => (
                <Link 
                  key={project.id} 
                  to={`/portfolio/${project.id}`} 
                  className="group block"
                >
                  <div className="relative h-[260px] sm:h-[280px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {project.tags && project.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 rounded-full bg-gray-800/80 backdrop-blur-sm text-xs font-medium text-white transition-all duration-300 hover:bg-gray-700/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-300 hover:bg-indigo-700 transform rotate-0 group-hover:rotate-45">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h2 className="text-2xl font-bold text-white mb-1 transform translate-y-0 opacity-100 transition-all duration-300 group-hover:text-primary">{project.title}</h2>
                      <p className="text-gray-300 mb-4 transform translate-y-0 opacity-100 transition-all duration-300 group-hover:text-gray-100">{project.subtitle}</p>
                      <div className="grid grid-cols-3 gap-4">
                        {project.stats && project.stats.map((stat, idx) => (
                          <div key={idx} className="transform transition-all duration-300 opacity-80 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-1" style={{ transitionDelay: `${idx * 75}ms` }}>
                            <div className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">{stat}</div>
                            <div className="text-xs text-gray-400">{project.stats_labels && project.stats_labels[idx]}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

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
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {clientLogos.map((client, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
                  <div className="p-2 h-full">
                    <div className="h-16 bg-white shadow-md rounded-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-200 p-2">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 lg:-left-12" />
            <CarouselNext className="right-0 lg:-right-12" />
          </Carousel>
        </div>
      </section>

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
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 border border-gray-200"
              />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full filter blur-2xl opacity-60"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/5 rounded-full filter blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Portfolio;
