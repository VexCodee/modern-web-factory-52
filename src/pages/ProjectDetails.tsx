
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowLeft, ExternalLink, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import CTASection from '../components/CTASection';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const [loading, setLoading] = useState(true);
  
  // In a real app, we would fetch this data from an API
  // For this example, we'll use static data
  const projectData = {
    id: Number(id),
    title: "Project Example",
    subtitle: "Digital platform example",
    description: "This is a detailed description of the project. It would normally contain information about the client, the challenge, our approach, and the results.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500"
    ],
    stats: ["+2M", "99%", "2019"],
    statsLabels: ["Daily users", "Uptime", "Founded"],
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    client: "Client Name",
    year: "2023",
    services: ["Web Development", "UI/UX Design", "Consulting"]
  };

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-24 flex items-center justify-center min-h-[60vh]">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 pt-24 pb-16">
          <Link to="/portfolio" className="inline-flex items-center text-gray-600 hover:text-primary transition-colors mb-8">
            <ArrowLeft size={16} className="mr-2" />
            {language === 'pl' ? 'Wróć do portfolio' : 
             language === 'de' ? 'Zurück zum Portfolio' : 
             'Back to portfolio'}
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">{projectData.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{projectData.subtitle}</p>
              
              <div className="mb-8">
                <img 
                  src={projectData.image} 
                  alt={projectData.title}
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>
              
              <div className="prose prose-lg max-w-none mb-12">
                <h2>
                  {language === 'pl' ? 'O projekcie' : 
                   language === 'de' ? 'Über das Projekt' : 
                   'About the project'}
                </h2>
                <p>{projectData.description}</p>
                <p>{projectData.description}</p>
                
                <h2>
                  {language === 'pl' ? 'Wyzwanie' : 
                   language === 'de' ? 'Herausforderung' : 
                   'The challenge'}
                </h2>
                <p>{projectData.description}</p>
                
                <h2>
                  {language === 'pl' ? 'Rozwiązanie' : 
                   language === 'de' ? 'Lösung' : 
                   'The solution'}
                </h2>
                <p>{projectData.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {projectData.gallery.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <img 
                      src={image} 
                      alt={`Project gallery ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 sticky top-24">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {language === 'pl' ? 'Szczegóły projektu' : 
                   language === 'de' ? 'Projektdetails' : 
                   'Project details'}
                </h3>
                
                <Separator className="mb-4" />
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">
                      {language === 'pl' ? 'Klient' : 
                       language === 'de' ? 'Kunde' : 
                       'Client'}
                    </p>
                    <p className="font-medium">{projectData.client}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">
                      {language === 'pl' ? 'Rok' : 
                       language === 'de' ? 'Jahr' : 
                       'Year'}
                    </p>
                    <p className="font-medium">{projectData.year}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">
                      {language === 'pl' ? 'Usługi' : 
                       language === 'de' ? 'Dienstleistungen' : 
                       'Services'}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {projectData.services.map((service, index) => (
                        <span key={index} className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded-md">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">
                      {language === 'pl' ? 'Technologie' : 
                       language === 'de' ? 'Technologien' : 
                       'Technologies'}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {projectData.technologies.map((tech, index) => (
                        <span key={index} className="text-sm bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Separator className="mb-4" />
                
                <div className="flex flex-col space-y-3">
                  <Button className="w-full">
                    <ExternalLink size={16} className="mr-2" />
                    {language === 'pl' ? 'Odwiedź stronę' : 
                     language === 'de' ? 'Website besuchen' : 
                     'Visit website'}
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Share2 size={16} className="mr-2" />
                    {language === 'pl' ? 'Udostępnij projekt' : 
                     language === 'de' ? 'Projekt teilen' : 
                     'Share project'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection />
    </Layout>
  );
};

export default ProjectDetails;
