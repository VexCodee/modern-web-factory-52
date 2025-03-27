
import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectGalleryViewProps {
  projectId: number;
}

interface GalleryImage {
  name: string;
  url: string;
}

const ProjectGalleryView: React.FC<ProjectGalleryViewProps> = ({ projectId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      if (!projectId) return;
      
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .storage
          .from('projects')
          .list(`project_${projectId}`);
        
        if (error) throw error;
        
        // Konwertuj do tablicy obiektów zdjęć z URL
        const imageList = (data || [])
          .filter(file => !file.name.includes('.gitkeep')) // Odfiltruj pliki placeholder
          .map(file => ({
            name: file.name,
            url: supabase.storage.from('projects').getPublicUrl(`project_${projectId}/${file.name}`).data.publicUrl
          }));
        
        setImages(imageList);
      } catch (error) {
        console.error('Błąd pobierania zdjęć projektu:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [projectId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-40">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Ładowanie galerii...</span>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Ten projekt nie ma jeszcze galerii zdjęć.
      </div>
    );
  }

  return (
    <div className="mt-12 py-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6">Galeria projektu</h2>
      
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={image.name}>
              <div className="p-1">
                <div className="flex aspect-video items-center justify-center p-2">
                  <img 
                    src={image.url} 
                    alt={`Zdjęcie projektu ${index + 1}`} 
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
      
      <div className="grid grid-cols-4 gap-4 mt-6">
        {images.slice(0, 8).map((image, index) => (
          <div key={index} className="aspect-square overflow-hidden rounded-md border border-gray-200">
            <img 
              src={image.url} 
              alt={`Miniatura ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGalleryView;
