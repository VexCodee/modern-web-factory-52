
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
  DialogFooter
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Trash, Eye, Tag, Edit, Image, RefreshCw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ProjectEdit from './ProjectEdit';

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
  const [editProjectId, setEditProjectId] = useState<number | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0); // Used to trigger refetch
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
  }, [refreshKey]);

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
      setRefreshKey(prev => prev + 1);
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

  const openEditDialog = (projectId: number) => {
    setEditProjectId(projectId);
    setIsEditOpen(true);
  };

  const handleEditClose = () => {
    setEditProjectId(null);
    setIsEditOpen(false);
  };

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  // Format category IDs to display their labels
  const formatCategories = (categoryIds: string[]) => {
    if (!categoryIds || !categoryIds.length) return '';
    return categoryIds.map(id => categoryMap[id] || id).join(', ');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Portfolio Projects</h2>
        <Button onClick={handleRefresh} variant="outline" size="sm" className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          Refresh List
        </Button>
      </div>
      
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
                        className="flex items-center gap-1"
                      >
                        <Eye className="h-3.5 w-3.5" /> View
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => openEditDialog(project.id)}
                        className="flex items-center gap-1"
                      >
                        <Edit className="h-3.5 w-3.5" /> Edit
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => openDeleteDialog(project)}
                        className="flex items-center gap-1"
                      >
                        <Trash className="h-3.5 w-3.5" /> Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
      
      {/* Delete confirmation dialog */}
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
      
      {/* Edit Project Sheet */}
      <ProjectEdit 
        projectId={editProjectId} 
        open={isEditOpen} 
        onClose={handleEditClose}
        onSaved={() => setRefreshKey(prev => prev + 1)}
      />
    </div>
  );
};

export default ProjectsList;
