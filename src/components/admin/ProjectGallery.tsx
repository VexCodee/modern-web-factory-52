
import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Upload, X, RefreshCw } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";

interface ProjectGalleryProps {
  projectId: number | null;
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
}

interface GalleryImage {
  name: string;
  url: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  projectId,
  open,
  onClose,
  onSaved
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [uploadingImages, setUploadingImages] = useState(false);
  const { toast } = useToast();

  const fetchImages = useCallback(async () => {
    if (!projectId) return;
    
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .storage
        .from('projects')
        .list(`project_${projectId}`);
      
      if (error) throw error;
      
      // Convert to array of image objects with URLs
      const imageList = (data || [])
        .filter(file => !file.name.includes('.gitkeep')) // Filter out placeholder files
        .map(file => ({
          name: file.name,
          url: supabase.storage.from('projects').getPublicUrl(`project_${projectId}/${file.name}`).data.publicUrl
        }));
      
      setImages(imageList);
    } catch (error) {
      console.error('Error fetching project images:', error);
      toast({
        title: "Błąd",
        description: "Nie udało się załadować obrazów projektu",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [projectId, toast]);

  useEffect(() => {
    if (open && projectId) {
      fetchImages();
    }
  }, [open, projectId, fetchImages]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !projectId) return;
    
    setUploadingImages(true);
    try {
      // Upewnij się, że ścieżka folderu istnieje
      try {
        // Próba utworzenia folderu dla projektu (nie powoduje błędu, jeśli już istnieje)
        const folderPath = `project_${projectId}/.gitkeep`;
        await supabase
          .storage
          .from('projects')
          .upload(folderPath, new Blob([''], { type: 'text/plain' }), {
            upsert: true
          });
      } catch (folderError) {
        console.log('Folder może już istnieć:', folderError);
        // Ignorujemy ten błąd, kontynuujemy przesyłanie plików
      }
      
      const files = Array.from(e.target.files);
      const uploadPromises = files.map(async (file) => {
        const fileName = `${new Date().getTime()}_${file.name}`;
        const filePath = `project_${projectId}/${fileName}`;
        
        console.log('Przesyłanie pliku:', filePath);
        const { error: uploadError, data } = await supabase
          .storage
          .from('projects')
          .upload(filePath, file, {
            cacheControl: '3600',
            upsert: false
          });
        
        if (uploadError) {
          console.error('Błąd przesyłania pliku:', uploadError);
          throw uploadError;
        }
        
        console.log('Plik przesłany pomyślnie:', data);
        
        return {
          name: fileName,
          url: supabase.storage.from('projects').getPublicUrl(`project_${projectId}/${fileName}`).data.publicUrl
        };
      });
      
      const newImages = await Promise.all(uploadPromises);
      
      toast({
        title: "Sukces",
        description: `Przesłano pomyślnie ${newImages.length} obraz(ów)`,
      });
      
      // Odśwież listę obrazów
      fetchImages();
    } catch (error) {
      console.error('Błąd podczas przesyłania obrazów:', error);
      toast({
        title: "Błąd",
        description: "Nie udało się przesłać obrazów. Sprawdź konsolę po więcej szczegółów.",
        variant: "destructive",
      });
    } finally {
      setUploadingImages(false);
      // Zresetuj pole input
      if (e.target) e.target.value = '';
    }
  };

  const handleImageDelete = async (imageName: string) => {
    if (!projectId) return;
    
    try {
      const { error } = await supabase
        .storage
        .from('projects')
        .remove([`project_${projectId}/${imageName}`]);
      
      if (error) throw error;
      
      // Usuń obraz ze stanu
      setImages(prev => prev.filter(img => img.name !== imageName));
      
      toast({
        title: "Sukces",
        description: "Obraz został usunięty pomyślnie",
      });
    } catch (error) {
      console.error('Błąd podczas usuwania obrazu:', error);
      toast({
        title: "Błąd",
        description: "Nie udało się usunąć obrazu",
        variant: "destructive",
      });
    }
  };

  return (
    <Sheet open={open} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="w-full sm:max-w-xl md:max-w-2xl overflow-y-auto">
        <SheetHeader className="mb-4">
          <SheetTitle>Galeria Projektu</SheetTitle>
        </SheetHeader>
        
        {isLoading ? (
          <div className="flex items-center justify-center h-40">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2">Ładowanie galerii...</span>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Obrazy</h3>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={fetchImages}
                className="flex items-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Odśwież
              </Button>
            </div>
            
            <div className="border rounded-md p-4">
              <input
                type="file"
                id="fileUpload"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <label 
                htmlFor="fileUpload" 
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                {uploadingImages ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                    <span>Przesyłanie...</span>
                  </div>
                ) : (
                  <>
                    <Upload className="h-8 w-8 mb-2 text-gray-400" />
                    <p className="text-sm text-gray-500">Kliknij aby przesłać obrazy lub przeciągnij i upuść</p>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP do 5MB</p>
                  </>
                )}
              </label>
            </div>
            
            {images.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {images.map((image) => (
                  <div key={image.name} className="relative group">
                    <img 
                      src={image.url} 
                      alt={image.name} 
                      className="w-full h-32 object-cover rounded-md border border-gray-200"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      onClick={() => handleImageDelete(image.name)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                Nie znaleziono obrazów. Prześlij obrazy, aby rozpocząć.
              </div>
            )}
          </div>
        )}
        
        <SheetFooter className="mt-6">
          <Button onClick={onClose}>
            Zamknij
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ProjectGallery;
