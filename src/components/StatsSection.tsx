
import React, { useEffect, useRef } from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';

const StatsSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { 
      value: "200+", 
      label: "Projekty Ukończone", 
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      delay: 100
    },
    { 
      value: "15+", 
      label: "Lata Doświadczenia", 
      icon: <Clock className="w-8 h-8 text-white" />,
      delay: 200
    },
    { 
      value: "50+", 
      label: "Członkowie Zespołu", 
      icon: <Users className="w-8 h-8 text-white" />,
      delay: 300
    },
    { 
      value: "98%", 
      label: "Zadowolenie Klientów", 
      icon: <Award className="w-8 h-8 text-white" />,
      delay: 400
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.stat-item');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.stat-item');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-500/30 mix-blend-overlay blur-xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-500/30 mix-blend-overlay blur-xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-item opacity-0"
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              <Card className="bg-white/10 backdrop-blur-lg border-none shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-5xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-blue-50 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
