
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CTASection from '../components/CTASection';
import ProjectGalleryView from '../components/ProjectGalleryView';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasGallery, setHasGallery] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('id', parseInt(id as string))
          .single();

        if (error) {
          throw error;
        }

        setProject(data as Project);
        
        // Sprawdź, czy projekt ma galerię
        if (data && data.id) {
          const { data: galleryData, error: galleryError } = await supabase
            .storage
            .from('projects')
            .list(`project_${data.id}`);
            
          if (!galleryError && galleryData && galleryData.filter(file => !file.name.includes('.gitkeep')).length > 0) {
            setHasGallery(true);
          }
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="ml-4">Ładowanie projektu...</p>
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto py-16 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Projekt nie znaleziony</h1>
            <p className="mb-8">Projekt, którego szukasz, nie istnieje lub został usunięty.</p>
            <Button asChild>
              <Link to="/portfolio">Wróć do Portfolio</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button asChild variant="ghost" size="sm">
              <Link to="/portfolio" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Wróć do Portfolio
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-gray-600 mb-6">{project.subtitle}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.categories && project.categories.map((category, index) => (
                  <Badge key={index}>{category}</Badge>
                ))}
              </div>

              <div className="space-y-4">
                <div className="text-gray-700">{project.description}</div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Kluczowe statystyki</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.stats && project.stats.map((stat, index) => (
                      <div key={index} className="bg-gray-100 rounded-md p-4">
                        <div className="text-2xl font-bold">{stat}</div>
                        <div className="text-gray-500">{project.stats_labels && project.stats_labels[index]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Sekcja galerii projektu */}
          {hasGallery && project.id && <ProjectGalleryView projectId={project.id} />}

          <div className="mt-12 py-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Technologie i narzędzia</h2>
            <div className="flex flex-wrap gap-4">
              {project.tags && project.tags.map((tag, index) => (
                <Badge variant="secondary" key={index}>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {project.logo && (
            <div className="mt-12 py-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-4">Logo projektu</h2>
              <img
                src={project.logo}
                alt={`${project.title} Logo`}
                className="rounded-lg shadow-md max-w-md"
              />
            </div>
          )}

          <div className="mt-12 py-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-4">Sprawdź ten projekt</h2>
            <Button variant="outline" className="gap-2">
              Odwiedź stronę
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
};

export default ProjectDetails;
