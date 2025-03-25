
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { X } from "lucide-react";

interface Category {
  id: string;
  label: string;
  icon: string;
}

const CategoryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  const form = useForm<Category>({
    defaultValues: {
      id: '',
      label: '',
      icon: 'arrow-right',
    },
  });
  
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('id', { ascending: true });
      
      if (error) {
        throw error;
      }
      
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
      toast({
        title: "Error",
        description: "Failed to load categories",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchCategories();
  }, []);
  
  const onSubmit = async (data: Category) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('categories')
        .insert([data]);
      
      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Error",
            description: "A category with this ID already exists",
            variant: "destructive",
          });
          setIsSubmitting(false);
          return;
        }
        throw error;
      }
      
      toast({
        title: "Success",
        description: "Category added successfully!",
      });
      
      // Reset form
      form.reset({
        id: '',
        label: '',
        icon: 'arrow-right',
      });
      
      // Refresh categories
      fetchCategories();
    } catch (error) {
      console.error('Error adding category:', error);
      toast({
        title: "Error",
        description: "Failed to add category. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleDeleteCategory = async (id: string) => {
    try {
      // Don't allow deleting the 'all' category
      if (id === 'all') {
        toast({
          title: "Cannot delete",
          description: "The 'all' category cannot be deleted",
          variant: "destructive",
        });
        return;
      }
      
      const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', id);
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Success",
        description: "Category deleted successfully!",
      });
      
      // Refresh categories
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
      toast({
        title: "Error",
        description: "Failed to delete category. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Portfolio Categories</h2>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category ID*</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g., web" required {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Display Label*</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g., Web Development" required {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="icon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Icon Name (Lucide Icon)</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g., arrow-right" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Adding category..." : "Add Category"}
          </Button>
        </form>
      </Form>
      
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Label</TableHead>
              <TableHead>Icon</TableHead>
              <TableHead className="w-24">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8">
                  <div className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                  <p className="mt-2">Loading categories...</p>
                </TableCell>
              </TableRow>
            ) : categories.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8">
                  <p>No categories found. Add a new category.</p>
                </TableCell>
              </TableRow>
            ) : (
              categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>{category.id}</TableCell>
                  <TableCell>{category.label}</TableCell>
                  <TableCell>{category.icon}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteCategory(category.id)}
                      disabled={category.id === 'all'}
                      className={category.id === 'all' ? 'opacity-50 cursor-not-allowed' : ''}
                    >
                      <X className="h-4 w-4 text-red-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CategoryForm;
