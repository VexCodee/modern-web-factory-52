
import React, { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Trash, Eye, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  categories: string[];
  created_at: string;
}

const ProjectsList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [categoryMap, setCategoryMap] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const fetchCategoryLabels = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('id, label');
      
      if (error) {
        throw error;
      }
      
      const map: Record<string, string> = {};
      data?.forEach(cat => {
        map[cat.id] = cat.label;
      });
      
      setCategoryMap(map);
    } catch (error) {
      console.error('Error fetching category labels:', error);
    }
  };

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        throw error;
      }
      
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast({
        title: "Error",
        description: "Failed to load projects",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryLabels();
    fetchProjects();
  }, []);

  const handleDelete = async () => {
    if (!selectedProject) return;
    
    setDeleteLoading(true);
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', selectedProject.id);
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Success",
        description: "Project deleted successfully",
      });
      
      // Refresh the list
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
      toast({
        title: "Error",
        description: "Failed to delete project",
        variant: "destructive",
      });
    } finally {
      setDeleteLoading(false);
      setDeleteDialogOpen(false);
    }
  };

  const openDeleteDialog = (project: Project) => {
    setSelectedProject(project);
    setDeleteDialogOpen(true);
  };

  // Format category IDs to display their labels
  const formatCategories = (categoryIds: string[]) => {
    if (!categoryIds || !categoryIds.length) return '';
    return categoryIds.map(id => categoryMap[id] || id).join(', ');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Portfolio Projects</h2>
      
      {loading ? (
        <div className="text-center py-8">Loading projects...</div>
      ) : projects.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No projects found. Add your first project from the "Add New Project" tab.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Subtitle</TableHead>
                <TableHead>Categories</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-16 h-12 object-cover rounded"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell>{project.subtitle}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {project.categories?.map((catId, idx) => (
                        <Badge key={idx} variant="outline" className="bg-primary/10 text-primary">
                          <Tag className="h-3 w-3 mr-1" />
                          {categoryMap[catId] || catId}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {project.tags?.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-800">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(`/portfolio/${project.id}`, '_blank')}
                      >
                        <Eye className="h-4 w-4 mr-1" /> View
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => openDeleteDialog(project)}
                      >
                        <Trash className="h-4 w-4 mr-1" /> Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
      
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the project "{selectedProject?.title}"? 
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
            <Button 
              variant="destructive" 
              onClick={handleDelete}
              disabled={deleteLoading}
            >
              {deleteLoading ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsList;
