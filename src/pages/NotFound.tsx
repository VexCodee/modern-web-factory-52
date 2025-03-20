
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/5 rounded-full mix-blend-multiply blur-3xl"></div>
      
      <div className="text-center max-w-lg z-10">
        <div className="text-9xl font-display font-bold text-primary/20 mb-6 animate-fade-in">404</div>
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-primary/90 hover:shadow-md animate-fade-in"
          style={{ animationDelay: '300ms' }}
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
