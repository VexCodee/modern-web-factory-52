
import React from 'react';
import { Sparkle, Leaf, Star, Wave } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TechnologiesSection = () => {
  const { t } = useLanguage();
  
  const technologies = [
    {
      icon: <Sparkle className="w-7 h-7 text-blue-500" />,
      name: "Cloud Computing",
      description: "Powerful cloud infrastructure solutions that scale with your business needs",
      delay: 100
    },
    {
      icon: <Star className="w-7 h-7 text-yellow-500" />,
      name: "Artificial Intelligence",
      description: "Smart AI solutions that transform data into valuable business insights",
      delay: 200
    },
    {
      icon: <Wave className="w-7 h-7 text-teal-500" />,
      name: "IoT & Edge Computing",
      description: "Connect and manage all your devices with our advanced IoT platform",
      delay: 300
    },
    {
      icon: <Leaf className="w-7 h-7 text-green-500" />,
      name: "Sustainable Tech",
      description: "Eco-friendly technology solutions with minimal environmental impact",
      delay: 400
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-blue-50/30 opacity-30 -z-10"></div>
      <div className="absolute -left-10 top-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 mix-blend-multiply blur-2xl -z-10"></div>
      <div className="absolute -right-10 top-2/3 w-40 h-40 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 mix-blend-multiply blur-2xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm rounded-full bg-indigo-100 text-indigo-700 px-4 py-1.5 font-medium animate-fade-in">
            Cutting-Edge Solutions
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-display font-bold animate-fade-in" style={{ animationDelay: '100ms' }}>
            Technologies We Excel In
          </h2>
          <p className="mt-4 text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Our expertise spans across multiple technology domains to provide you with the best-in-class solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${tech.delay}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="relative mt-20 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden animate-fade-in" style={{ animationDelay: '500ms' }}>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -right-10 top-0 w-40 h-40 rounded-full bg-white opacity-10"></div>
            <div className="absolute left-10 bottom-5 w-20 h-20 rounded-full bg-white opacity-10"></div>
          </div>
          
          <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Ready to leverage these technologies?</h3>
            <p className="text-white/90 mb-6">Let's discuss how our tech expertise can help your business grow</p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3.5 rounded-full font-medium hover:bg-blue-50 transition-all"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
