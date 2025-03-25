
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import Layout from '../components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ProjectForm from '../components/admin/ProjectForm';
import ProjectsList from '../components/admin/ProjectsList';

const AdminDashboard = () => {
  const { isAuthenticated, logout, loading } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, loading, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/admin');
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
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <Tabs defaultValue="add-project" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="add-project">Add New Project</TabsTrigger>
            <TabsTrigger value="manage-projects">Manage Projects</TabsTrigger>
          </TabsList>
          
          <TabsContent value="add-project" className="p-4 border rounded-lg">
            <ProjectForm />
          </TabsContent>
          
          <TabsContent value="manage-projects" className="p-4 border rounded-lg">
            <ProjectsList />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
