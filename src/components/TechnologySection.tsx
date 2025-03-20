
import React, { useEffect, useRef } from 'react';
import { Zap, Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const TechnologySection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const benefits = [
    'Zautomatyzowane procesy biznesowe',
    'Inteligentne rozwiązania oparte o AI',
    'Skalowalna infrastruktura w chmurze',
    'Zabezpieczenia na poziomie enterprise'
  ];

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Card with Image */}
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '100ms' }}>
            <Card className="relative rounded-xl overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/30f4d91a-9262-43de-b7a0-0035586fb034.png" 
                  alt="Technological innovation" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Top Left Card */}
                <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-md transition-all duration-300 hover:bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                      <Zap className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Wydajność</h4>
                      <p className="text-xs text-gray-500">Zoptymalizowane procesy</p>
                    </div>
                  </div>
                </div>
                
                {/* Avatar group - Top Right */}
                <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-white w-7 h-7">
                      <AvatarImage src="https://randomuser.me/api/portraits/women/30.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white w-7 h-7">
                      <AvatarImage src="https://randomuser.me/api/portraits/men/46.jpg" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white w-7 h-7">
                      <AvatarImage src="https://randomuser.me/api/portraits/women/15.jpg" />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                  </div>
                  <span className="text-sm font-medium">18+ joined this week</span>
                </div>
                
                {/* Bottom Right Card */}
                <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-md transition-all duration-300 hover:bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center">
                      <Check className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Innowacja</h4>
                      <p className="text-xs text-gray-500">Rozwiązania przyszłości</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-on-scroll opacity-0" style={{ animationDelay: '200ms' }}>
                Technologia, Która Wspiera Twój Biznes
              </h2>
              <p className="text-lg text-gray-600 mb-8 animate-on-scroll opacity-0" style={{ animationDelay: '300ms' }}>
                Wykorzystując sztuczną inteligencję, automatyzację i najnowsze zdobycze technologiczne, dostarczamy rozwiązania, które transformują procesy biznesowe i zwiększają konkurencyjność.
              </p>
            </div>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-center animate-on-scroll opacity-0" 
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="animate-on-scroll opacity-0" style={{ animationDelay: '800ms' }}>
              <Button 
                className="group bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 py-6 h-auto"
              >
                <span className="mr-2">Odkryj Nasze Rozwiązania</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
