
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
        title: "Error",
        description: "Failed to load project images",
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
      const files = Array.from(e.target.files);
      const uploadPromises = files.map(async (file) => {
        const fileName = `${new Date().getTime()}_${file.name}`;
        const filePath = `project_${projectId}/${fileName}`;
        
        const { error: uploadError } = await supabase
          .storage
          .from('projects')
          .upload(filePath, file);
        
        if (uploadError) throw uploadError;
        
        return {
          name: fileName,
          url: supabase.storage.from('projects').getPublicUrl(filePath).data.publicUrl
        };
      });
      
      const newImages = await Promise.all(uploadPromises);
      
      toast({
        title: "Success",
        description: `${newImages.length} image(s) uploaded successfully`,
      });
      
      // Refresh images
      fetchImages();
    } catch (error) {
      console.error('Error uploading images:', error);
      toast({
        title: "Error",
        description: "Failed to upload images",
        variant: "destructive",
      });
    } finally {
      setUploadingImages(false);
      // Reset the file input
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
      
      // Remove the image from the state
      setImages(prev => prev.filter(img => img.name !== imageName));
      
      toast({
        title: "Success",
        description: "Image deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting image:', error);
      toast({
        title: "Error",
        description: "Failed to delete image",
        variant: "destructive",
      });
    }
  };

  return (
    <Sheet open={open} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="w-full sm:max-w-xl md:max-w-2xl overflow-y-auto">
        <SheetHeader className="mb-4">
          <SheetTitle>Project Gallery</SheetTitle>
        </SheetHeader>
        
        {isLoading ? (
          <div className="flex items-center justify-center h-40">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2">Loading gallery...</span>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Images</h3>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={fetchImages}
                className="flex items-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh
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
                    <span>Uploading...</span>
                  </div>
                ) : (
                  <>
                    <Upload className="h-8 w-8 mb-2 text-gray-400" />
                    <p className="text-sm text-gray-500">Click to upload images or drag and drop</p>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP up to 5MB</p>
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
                No images found. Upload some images to get started.
              </div>
            )}
          </div>
        )}
        
        <SheetFooter className="mt-6">
          <Button onClick={onClose}>
            Close
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ProjectGallery;
