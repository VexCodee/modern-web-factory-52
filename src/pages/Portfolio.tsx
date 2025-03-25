
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowUpRight, LayoutGrid, Globe, Image, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  categories: string[];
  tags: string[];
  image: string;
  color: string;
  text_color: string;
}

interface Category {
  id: string;
  label: string;
  icon: string;
}

// Helper function to get icon component by name
const getIconByName = (iconName: string) => {
  switch (iconName) {
    case 'layout-grid':
      return <LayoutGrid className="mr-2 h-4 w-4" />;
    case 'globe':
      return <Globe className="mr-2 h-4 w-4" />;
    case 'image':
      return <Image className="mr-2 h-4 w-4" />;
    case 'smartphone':
      return <Smartphone className="mr-2 h-4 w-4" />;
    default:
      return <ArrowRight className="mr-2 h-4 w-4" />;
  }
};

const Portfolio = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch categories
        const { data: categoriesData, error: categoriesError } = await supabase
          .from('categories')
          .select('*')
          .order('id', { ascending: true });
        
        if (categoriesError) throw categoriesError;
        
        // Fetch projects
        const { data: projectsData, error: projectsError } = await supabase
          .from('projects')
          .select('*');
        
        if (projectsError) throw projectsError;
        
        setCategories(categoriesData || []);
        setProjects(projectsData || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(activeCategory));
  
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 dark:text-white">
              {t('portfolio.title')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('portfolio.subtitle')}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-2"
              >
                {getIconByName(category.icon)}
                {category.label}
              </Button>
            ))}
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="ml-4">Loading projects...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-gray-500 dark:text-gray-400">
                {t('portfolio.noProjects')}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Link 
                  to={`/portfolio/${project.id}`} 
                  key={project.id}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white flex items-center">
                          {t('portfolio.viewProject')} <ArrowUpRight className="ml-1" />
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.subtitle}</p>
                      
                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2">
                          {project.categories.map((category, i) => {
                            const categoryObj = categories.find(cat => cat.id === category);
                            return (
                              <Badge key={i} variant="outline">
                                {categoryObj ? categoryObj.label : category}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <CTASection />
    </Layout>
  );
};

export default Portfolio;
