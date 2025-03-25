
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CTASection from '../components/CTASection';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, ArrowRight, ArrowUpRight, Calendar, CheckCircle, Clock, ExternalLink, Globe, LayoutGrid, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import SolutionCard from '@/components/SolutionCard';
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
  logo: string;
}

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  
  const features = [
    'Responsive Design',
    'Cross-Platform Compatibility',
    'High Performance',
    'Scalable Architecture',
    'Modern User Interface',
    'Intuitive Navigation'
  ];
  
  const tags = ['Design', 'Web', 'Mobile'];
  
  useEffect(() => {
    const fetchProjectDetails = async () => {
      setLoading(true);
      try {
        // Fetch the project details
        const { data: projectData, error: projectError } = await supabase
          .from('projects')
          .select('*')
          .eq('id', id)
          .single();
        
        if (projectError) {
          throw projectError;
        }
        
        setProject(projectData);
        
        // Fetch related projects (different from current project)
        if (projectData?.categories?.length > 0) {
          const category = projectData.categories[0];
          const { data: relatedData, error: relatedError } = await supabase
            .from('projects')
            .select('*')
            .neq('id', id)
            .contains('categories', [category])
            .limit(3);
          
          if (relatedError) {
            throw relatedError;
          }
          
          setRelatedProjects(relatedData || []);
        }
      } catch (error) {
        console.error('Error fetching project details:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (id) {
      fetchProjectDetails();
    }
  }, [id]);
  
  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="ml-4 text-lg">Loading project details...</p>
        </div>
      </Layout>
    );
  }
  
  if (!project) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="text-gray-600 mb-6">The project you are looking for does not exist or has been removed.</p>
          <Link to="/portfolio">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4 pt-8 pb-16">
          <Link to="/portfolio" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{project.subtitle}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                {project.stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-indigo-600 mb-1">{stat}</div>
                    <div className="text-sm text-gray-500">{project.stats_labels[index]}</div>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="mb-4">
                View Case Study
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              
              <p className="text-sm text-gray-500">
                {language === 'pl' ? 'Zakończony projekt' : language === 'de' ? 'Abgeschlossenes Projekt' : 'Completed Project'}
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 rounded-2xl transform rotate-3"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover aspect-[16/9]"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-lg text-gray-600 mb-8">
              {project.description || 
                'We developed a comprehensive solution that helped the client achieve their business goals through innovative technology and design. The project involved multiple phases from discovery to delivery, resulting in a successful product launch.'}
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-indigo-600" />
                  Timeline
                </h4>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Project Start</span>
                    <span className="font-medium">Jan 2022</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Development</span>
                    <span className="font-medium">Feb - Apr 2022</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Testing</span>
                    <span className="font-medium">May 2022</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Launch</span>
                    <span className="font-medium">June 2022</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-indigo-600" />
                  Technology Stack
                </h4>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Frontend</span>
                    <span className="font-medium">React, TypeScript</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Backend</span>
                    <span className="font-medium">Node.js, Express</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Database</span>
                    <span className="font-medium">PostgreSQL</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Deployment</span>
                    <span className="font-medium">AWS, Docker</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold mb-6">Project Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Client</h4>
                  <div className="flex items-center space-x-2">
                    {project.logo ? (
                      <img src={project.logo} alt="Client logo" className="h-8 w-8 rounded" />
                    ) : null}
                    <span className="font-medium">{project.title}</span>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Industry</h4>
                  <span className="font-medium">{project.categories.join(', ')}</span>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Services Provided</h4>
                  <ul className="space-y-1">
                    {project.tags.map((tag, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <ArrowRight className="h-3 w-3 text-indigo-600" />
                        <span>{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Team</h4>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-indigo-600" />
                    <span className="font-medium">5 specialists</span>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Duration</h4>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-indigo-600" />
                    <span className="font-medium">6 months</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Website
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {relatedProjects.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((related, index) => (
                <SolutionCard
                  key={related.id}
                  title={related.title}
                  description={related.subtitle}
                  features={related.tags}
                  image={related.image}
                  index={index}
                  tags={related.tags}
                  stats={related.stats}
                  statsLabels={related.stats_labels}
                  color={related.color}
                  textColor={related.text_color}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      
      <CTASection />
    </Layout>
  );
};

export default ProjectDetails;
