
import React, { useState } from 'react';
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
import { useToast } from "@/components/ui/use-toast";

interface ProjectFormData {
  title: string;
  subtitle: string;
  description: string;
  stats: string;
  statsLabels: string;
  color: string;
  textColor: string;
  categories: string;
  tags: string;
  image: string;
  logo: string;
}

const ProjectForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      categories: 'web, mobile',
      tags: 'Web, Mobile',
      image: '',
      logo: '',
    },
  });
  
  const onSubmit = async (data: ProjectFormData) => {
    setIsSubmitting(true);
    
    try {
      // Transform comma-separated strings to arrays
      const projectData = {
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
        stats: data.stats.split(',').map(item => item.trim()),
        stats_labels: data.statsLabels.split(',').map(item => item.trim()),
        color: data.color,
        text_color: data.textColor,
        categories: data.categories.split(',').map(item => item.trim()),
        tags: data.tags.split(',').map(item => item.trim()),
        image: data.image,
        logo: data.logo || data.image,
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
      
      // Reset form
      form.reset({
        title: '',
        subtitle: '',
        description: '',
        stats: '+2M, 99%, 2019',
        statsLabels: 'Daily users, Uptime, Founded',
        color: 'bg-indigo-600',
        textColor: 'text-white',
        categories: 'web, mobile',
        tags: 'Web, Mobile',
        image: '',
        logo: '',
      });
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="categories"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categories (comma-separated)</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g., web, mobile, design" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
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
          </div>
          
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
