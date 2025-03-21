
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface SolutionCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  index: number;
  ctaText: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  features,
  image,
  index,
  ctaText,
}) => {
  // Alternate colors based on index
  const colors = [
    { accent: 'from-blue-500 to-indigo-600', light: 'bg-blue-50', icon: 'text-blue-600' },
    { accent: 'from-indigo-500 to-purple-600', light: 'bg-indigo-50', icon: 'text-indigo-600' },
    { accent: 'from-purple-500 to-pink-600', light: 'bg-purple-50', icon: 'text-purple-600' },
    { accent: 'from-emerald-500 to-teal-600', light: 'bg-emerald-50', icon: 'text-emerald-600' },
  ];
  
  const colorSet = colors[index % colors.length];
  
  return (
    <Card className="group relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
      {/* Accent top border */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colorSet.accent}`}></div>
      
      <CardContent className="p-0">
        <div className="flex flex-col lg:flex-row overflow-hidden">
          {/* Image container with overlay */}
          <div className="relative h-64 w-full lg:h-auto lg:w-2/5 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${image})` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
          
          {/* Content container */}
          <div className="flex flex-col p-6 lg:w-3/5">
            <h2 className="mb-4 text-2xl font-display font-bold tracking-tight">{title}</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">{description}</p>
            
            {/* Features list with staggered animation */}
            <div className="space-y-3 mb-8">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start transform transition-all duration-300 hover:translate-x-1"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <div className={`mr-3 flex h-6 w-6 items-center justify-center rounded-full ${colorSet.light}`}>
                    <Check size={14} className={colorSet.icon} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="mt-auto">
              <Link 
                to="/contact" 
                className="group inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r px-6 py-3 font-medium text-white transition-all duration-300 hover:shadow-lg"
                style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
              >
                <span className={`absolute inset-0 bg-gradient-to-r ${colorSet.accent} transition-all duration-300 group-hover:translate-y-full`}></span>
                <span className={`absolute inset-0 bg-gradient-to-l ${colorSet.accent} translate-y-full transition-all duration-300 group-hover:translate-y-0`}></span>
                <span className="relative">{ctaText}</span>
                <ArrowRight size={16} className="ml-2 relative transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SolutionCard;
