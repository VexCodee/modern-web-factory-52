
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { CheckIcon } from "lucide-react";

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

const ProjectForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { toast } = useToast();
  
  const form = useForm<ProjectFormData>({
    defaultValues: {
      title: '',
      subtitle: '',
      description: '',
      stats: '+2M, 99%, 2019',
      statsLabels: 'Daily users, Uptime, Founded',
      color: 'bg-indigo-600',
      textColor: 'text-white',
      categories: [],
      tags: 'Web, Mobile',
      image: '',
      logo: '',
    },
  });
  
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
    
    fetchCategories();
  }, [toast]);
  
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
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
        image: data.image,
        logo: data.logo || null,
      };
      
      const { error } = await supabase
        .from('projects')
        .insert(projectData);
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Success",
        description: "Project added successfully!",
      });
      
      // Reset form and selected categories
      form.reset({
        title: '',
        subtitle: '',
        description: '',
        stats: '+2M, 99%, 2019',
        statsLabels: 'Daily users, Uptime, Founded',
        color: 'bg-indigo-600',
        textColor: 'text-white',
        categories: [],
        tags: 'Web, Mobile',
        image: '',
        logo: '',
      });
      setSelectedCategories([]);
    } catch (error) {
      console.error('Error adding project:', error);
      toast({
        title: "Error",
        description: "Failed to add project. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Add New Portfolio Project</h2>
      
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
          
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL*</FormLabel>
                <FormControl>
                  <Input placeholder="Enter full image URL" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
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
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Adding project..." : "Add Project"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProjectForm;
