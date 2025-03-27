
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CheckIcon, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";

interface CategoryType {
  id: string;
  label: string;
  icon: string;
}

interface ProjectFormData {
  title: string;
  subtitle: string;
  description: string;
  stats: string;
  statsLabels: string;
  color: string;
  textColor: string;
  categories: string[];
  tags: string;
  image: string;
  logo: string;
}

interface ProjectEditProps {
  projectId: number | null;
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
}

const ProjectEdit: React.FC<ProjectEditProps> = ({ 
  projectId, 
  open, 
  onClose,
  onSaved
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { toast } = useToast();
  
  const form = useForm<ProjectFormData>({
    defaultValues: {
      title: '',
      subtitle: '',
      description: '',
      stats: '',
      statsLabels: '',
      color: 'bg-indigo-600',
      textColor: 'text-white',
      categories: [],
      tags: '',
      image: '',
      logo: '',
    },
  });
  
  // Fetch project data
  useEffect(() => {
    if (projectId && open) {
      const fetchProject = async () => {
        setIsLoading(true);
        try {
          const { data, error } = await supabase
            .from('projects')
            .select('*')
            .eq('id', projectId)
            .single();
          
          if (error) throw error;
          
          if (data) {
            form.reset({
              title: data.title,
              subtitle: data.subtitle,
              description: data.description || '',
              stats: data.stats ? data.stats.join(', ') : '',
              statsLabels: data.stats_labels ? data.stats_labels.join(', ') : '',
              color: data.color || 'bg-indigo-600',
              textColor: data.text_color || 'text-white',
              categories: data.categories || [],
              tags: data.tags ? data.tags.join(', ') : '',
              image: data.image,
              logo: data.logo || '',
            });
            
            setSelectedCategories(data.categories || []);
            setImagePreview(data.image);
          }
        } catch (error) {
          console.error('Error fetching project:', error);
          toast({
            title: "Error",
            description: "Failed to load project data",
            variant: "destructive",
          });
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchProject();
    }
  }, [projectId, open, form, toast]);
  
  // Fetch available categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase
          .from('categories')
          .select('*')
          .order('label', { ascending: true });
        
        if (error) throw error;
        
        // Filter out the 'all' category since it's just for display purposes
        const filteredCategories = data.filter(cat => cat.id !== 'all');
        setCategories(filteredCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
        toast({
          title: "Error",
          description: "Failed to load categories",
          variant: "destructive",
        });
      }
    };
    
    if (open) {
      fetchCategories();
    }
  }, [open, toast]);
  
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
      const filePath = `projects/${fileName}`;
      
      // Check if storage bucket exists, create if not
      const { data: buckets } = await supabase
        .storage
        .listBuckets();
      
      if (!buckets?.find(bucket => bucket.name === 'projects')) {
        await supabase
          .storage
          .createBucket('projects', {
            public: true
          });
      }
      
      const { error: uploadError } = await supabase
        .storage
        .from('projects')
        .upload(filePath, file);
      
      if (uploadError) throw uploadError;
      
      const { data } = supabase
        .storage
        .from('projects')
        .getPublicUrl(filePath);
      
      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };
  
  const onSubmit = async (data: ProjectFormData) => {
    setIsSubmitting(true);
    
    try {
      if (selectedCategories.length === 0) {
        toast({
          title: "Warning",
          description: "Please select at least one category",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
      
      let imageUrl = data.image;
      
      // Upload new image if available
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }
      
      // Transform comma-separated strings to arrays
      const projectData = {
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
        stats: data.stats.split(',').map(item => item.trim()),
        stats_labels: data.statsLabels.split(',').map(item => item.trim()),
        color: data.color,
        text_color: data.textColor,
        categories: selectedCategories,
        tags: data.tags.split(',').map(item => item.trim()),
        image: imageUrl,
        logo: data.logo || null,
      };
      
      const { error } = await supabase
        .from('projects')
        .update(projectData)
        .eq('id', projectId);
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Success",
        description: "Project updated successfully!",
      });
      
      onSaved();
      onClose();
    } catch (error) {
      console.error('Error updating project:', error);
      toast({
        title: "Error",
        description: "Failed to update project. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Sheet open={open} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="w-full sm:max-w-xl md:max-w-2xl overflow-y-auto">
        <SheetHeader className="mb-4">
          <SheetTitle>Edit Project</SheetTitle>
        </SheetHeader>
        
        {isLoading ? (
          <div className="flex items-center justify-center h-40">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2">Loading project data...</span>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Title*</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g., Dolby.io" required {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subtitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Subtitle*</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g., Streaming & media app development platform" required {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Project description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="stats"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Statistics (comma-separated)</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g., +2M, 99%, 2019" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="statsLabels"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Statistics Labels (comma-separated)</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g., Daily users, Uptime, Founded" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormItem>
                <FormLabel>Categories*</FormLabel>
                <div className="flex flex-wrap gap-2 mt-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      type="button"
                      variant={selectedCategories.includes(category.id) ? "default" : "outline"}
                      className="flex items-center gap-2"
                      onClick={() => toggleCategory(category.id)}
                    >
                      {selectedCategories.includes(category.id) && <CheckIcon className="h-4 w-4" />}
                      {category.label}
                    </Button>
                  ))}
                </div>
                {selectedCategories.length === 0 && (
                  <p className="text-sm text-destructive mt-1">Please select at least one category</p>
                )}
              </FormItem>
              
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags (comma-separated)</FormLabel>
                    <FormControl>
                      <Input placeholder="E.g., Web, Mobile, Design" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Background Color Class</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g., bg-indigo-600" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="textColor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Text Color Class</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g., text-white" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-2">
                <FormLabel>Project Image*</FormLabel>
                {imagePreview && (
                  <div className="mt-2 mb-4">
                    <p className="text-sm text-gray-500 mb-2">Current image:</p>
                    <img 
                      src={imagePreview} 
                      alt="Project preview" 
                      className="w-full max-w-md h-auto rounded-md border border-gray-300" 
                    />
                  </div>
                )}
                <div className="mt-2">
                  <p className="text-sm text-gray-500 mb-2">Upload new image (optional):</p>
                  <Input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="logo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Logo URL (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter logo URL (optional)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <SheetFooter className="mt-6">
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Updating..." : "Update Project"}
                </Button>
              </SheetFooter>
            </form>
          </Form>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ProjectEdit;
