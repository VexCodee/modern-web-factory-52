
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import Layout from '../components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ProjectForm from '../components/admin/ProjectForm';
import ProjectsList from '../components/admin/ProjectsList';
import CategoryForm from '../components/admin/CategoryForm';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from "@/components/ui/use-toast";

const AdminDashboard = () => {
  const { isAuthenticated, logout, loading } = useAdmin();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [initializing, setInitializing] = useState(false);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, loading, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  const initializeDefaultProjects = async () => {
    try {
      setInitializing(true);
      
      // First, check if we already have projects
      const { data, error: countError } = await supabase
        .from('projects')
        .select('id')
        .limit(1);
        
      if (countError) throw countError;
      
      // If we already have projects, don't add defaults
      if (data && data.length > 0) {
        toast({
          title: "Information",
          description: "Default projects already exist in the database.",
        });
        setInitializing(false);
        return;
      }
      
      // Get all the default projects from Portfolio.tsx
      const defaultProjects = [
        {
          title: "Dolby.io",
          subtitle: "Streaming & media app development platform",
          description: "A comprehensive platform for developers to build streaming and media applications with advanced features and capabilities.",
          stats: ["+2M", "99%", "2019"],
          stats_labels: ["Daily users", "Uptime", "Founded"],
          color: "bg-purple-700",
          text_color: "text-white",
          categories: ["mobile", "web"],
          tags: ["Music & Video", "Mobile"],
          image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800&h=500",
          logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=120&h=120",
        },
        {
          title: "Nextbank Credit Scoring",
          subtitle: "AI-powered credit scoring & loan origination",
          description: "Innovative AI-driven solution for financial institutions to assess creditworthiness and streamline loan processing.",
          stats: ["+500M", "97%", "2019"],
          stats_labels: ["Loan applications processed", "Predictions' accuracy", "Singapore Fintech Awards Finalist"],
          color: "bg-gray-900",
          text_color: "text-white",
          categories: ["fintech", "web"],
          tags: ["Fintech", "Mobile", "Web"],
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=500",
          logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=500",
        },
        {
          title: "Orlen mFlota",
          subtitle: "Fleet management mobile app",
          description: "Comprehensive mobile solution for managing and optimizing commercial vehicle fleets with real-time tracking.",
          stats: ["+100K", "24/7", "2020"],
          stats_labels: ["Active users", "Support", "Launch year"],
          color: "bg-red-600",
          text_color: "text-white",
          categories: ["mobile", "logistics"],
          tags: ["Logistics", "Mobile"],
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500",
          logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500",
        },
        {
          title: "TUI",
          subtitle: "Travel management app for globetrotters",
          description: "All-in-one travel companion app for planning, booking, and managing travel experiences worldwide.",
          stats: ["+2.5M", "45+", "4.8/5"],
          stats_labels: ["Bookings", "Countries", "App rating"],
          color: "bg-blue-600",
          text_color: "text-white",
          categories: ["travel", "mobile", "design"],
          tags: ["Travel & Leisure", "Mobile", "Design"],
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=500",
          logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=500",
        },
        {
          title: "Fintech Dashboard",
          subtitle: "Data visualization platform for investment banks",
          description: "Advanced analytics and visualization tool for investment banks to track and analyze financial data.",
          stats: ["$3.2B", "12", "2021"],
          stats_labels: ["Assets tracked", "Major banks", "Release"],
          color: "bg-indigo-600",
          text_color: "text-white",
          categories: ["fintech", "web"],
          tags: ["Fintech", "Web", "Design"],
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=500",
          logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=500",
        },
        {
          title: "Logistic Pro",
          subtitle: "End-to-end supply chain management",
          description: "Comprehensive solution for managing and optimizing supply chain operations with real-time insights.",
          stats: ["68%", "5hrs", "99.3%"],
          stats_labels: ["Cost reduction", "Time saved/week", "Delivery accuracy"],
          color: "bg-amber-600",
          text_color: "text-white",
          categories: ["logistics", "web"],
          tags: ["Logistics", "Software"],
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=500",
          logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=500",
        },
        {
          title: "TravelEase",
          subtitle: "All-in-one travel companion app",
          description: "Smart travel app that helps users plan, book, and navigate their journeys with personalized recommendations.",
          stats: ["52", "4.7/5", "2022"],
          stats_labels: ["Countries", "App rating", "Launch year"],
          color: "bg-cyan-700",
          text_color: "text-white",
          categories: ["travel", "mobile"],
          tags: ["Travel", "Mobile"],
          image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=500",
          logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=500",
        },
        {
          title: "SecureBank",
          subtitle: "Digital banking with advanced security",
          description: "Next-generation digital banking platform with state-of-the-art security features and user-friendly interface.",
          stats: ["128-bit", "0", "24/7"],
          stats_labels: ["Encryption", "Data breaches", "Monitoring"],
          color: "bg-emerald-700",
          text_color: "text-white",
          categories: ["fintech", "mobile"],
          tags: ["Fintech", "Security"],
          image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&h=500",
          logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&h=500",
        }
      ];
      
      // Insert all projects
      const { error: insertError } = await supabase
        .from('projects')
        .insert(defaultProjects);
      
      if (insertError) throw insertError;
      
      toast({
        title: "Success",
        description: "Default projects added to the database successfully!",
      });
    } catch (error) {
      console.error('Error initializing projects:', error);
      toast({
        title: "Error",
        description: "Failed to add default projects to the database.",
        variant: "destructive",
      });
    } finally {
      setInitializing(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex items-center justify-center">
          <p className="text-lg">Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex space-x-4">
            <Button 
              variant="outline" 
              onClick={initializeDefaultProjects} 
              disabled={initializing}
            >
              {initializing ? "Adding..." : "Add Default Projects"}
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>

        <Tabs defaultValue="add-project" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="add-project">Add New Project</TabsTrigger>
            <TabsTrigger value="manage-projects">Manage Projects</TabsTrigger>
            <TabsTrigger value="manage-categories">Manage Categories</TabsTrigger>
          </TabsList>
          
          <TabsContent value="add-project" className="p-4 border rounded-lg">
            <ProjectForm />
          </TabsContent>
          
          <TabsContent value="manage-projects" className="p-4 border rounded-lg">
            <ProjectsList />
          </TabsContent>
          
          <TabsContent value="manage-categories" className="p-4 border rounded-lg">
            <CategoryForm />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
