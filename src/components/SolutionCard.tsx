
import React from 'react';
import { Check, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
  // Modern, professional color schemes
  const colors = [
    { primary: 'bg-gradient-to-r from-blue-500 to-indigo-600', secondary: 'bg-blue-50 dark:bg-blue-900/20', accent: 'border-blue-300 dark:border-blue-700' },
    { primary: 'bg-gradient-to-r from-purple-500 to-pink-500', secondary: 'bg-purple-50 dark:bg-purple-900/20', accent: 'border-purple-300 dark:border-purple-700' },
    { primary: 'bg-gradient-to-r from-amber-500 to-orange-600', secondary: 'bg-amber-50 dark:bg-amber-900/20', accent: 'border-amber-300 dark:border-amber-700' },
    { primary: 'bg-gradient-to-r from-emerald-500 to-teal-600', secondary: 'bg-emerald-50 dark:bg-emerald-900/20', accent: 'border-emerald-300 dark:border-emerald-700' },
  ];
  
  const colorSet = colors[index % colors.length];
  
  // Alternate alignment for odd/even cards to create visual variety
  const isEven = index % 2 === 0;

  return (
    <div className="relative">
      {/* Background shape - different for odd/even cards */}
      <div 
        className={cn(
          "absolute inset-0 -z-10 rounded-2xl opacity-10 blur-xl transition-all duration-700 group-hover:opacity-20",
          colorSet.primary
        )}
        style={{
          clipPath: isEven 
            ? 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 85%)' 
            : 'polygon(15% 0%, 100% 15%, 100% 100%, 0% 100%)'
        }}
      />
      
      {/* Main card */}
      <Card className="group overflow-hidden bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-500">
        <div className={cn(
          "relative grid grid-cols-1 lg:grid-cols-12 gap-0",
          isEven ? "lg:grid-flow-row" : "lg:grid-flow-row-dense"
        )}>
          {/* Image section */}
          <div className={cn(
            "relative overflow-hidden lg:col-span-5",
            isEven ? "lg:order-1" : "lg:order-2"
          )}>
            {/* Diagonal clip for the image container */}
            <div className="relative h-64 lg:h-full" style={{
              clipPath: isEven 
                ? 'polygon(0% 0%, 100% 0%, 92% 100%, 0% 100%)' 
                : 'polygon(0% 0%, 100% 0%, 100% 100%, 8% 100%)'
            }}>
              {/* Image with overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className={cn(
                  "absolute inset-0 opacity-70",
                  colorSet.primary
                )}></div>
              </div>
              
              {/* Title overlay positioned diagonally */}
              <div className={cn(
                "absolute text-white p-6 bottom-0 w-full lg:w-auto",
                isEven ? "lg:right-0 lg:-ml-12" : "lg:left-0 lg:-mr-12",
                isEven ? "origin-bottom-right" : "origin-bottom-left",
              )}>
                <div className={cn(
                  "p-5 backdrop-blur-md bg-black/30 rounded-lg transform transition-transform duration-500",
                  isEven ? "lg:origin-bottom-right" : "lg:origin-bottom-left",
                  "hover:scale-105"
                )}>
                  <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className={cn(
            "p-6 lg:p-8 lg:col-span-7 flex flex-col",
            isEven ? "lg:order-2" : "lg:order-1",
            colorSet.secondary,
            "rounded-b-lg lg:rounded-none",
            isEven ? "lg:rounded-r-lg" : "lg:rounded-l-lg"
          )}>
            {/* Description with staggered animation */}
            <p className="mb-6 text-gray-700 dark:text-gray-300 animate-fade-in opacity-0" 
               style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              {description}
            </p>
            
            {/* Features list - with diagonal arrangement */}
            <div className="space-y-0 mb-8 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "flex items-center opacity-0 animate-fade-in",
                    isEven ? "sm:odd:translate-x-4" : "sm:even:translate-x-4"
                  )}
                  style={{ 
                    animationDelay: `${300 + idx * 100}ms`, 
                    animationFillMode: 'forwards',
                    transitionDuration: '500ms'
                  }}
                >
                  <div className={cn(
                    "mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                    colorSet.primary,
                    "text-white"
                  )}>
                    <Check size={14} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="mt-auto perspective-1000">
              <Button
                asChild
                className={cn(
                  "w-full transition-all duration-300",
                  "text-white relative overflow-hidden transform hover:scale-105",
                  colorSet.primary,
                  "shadow-lg hover:shadow-xl text-sm font-medium px-8 py-3 h-auto"
                )}
              >
                <Link to="/contact" className="flex items-center justify-between">
                  <span>{ctaText}</span>
                  <ExternalLink size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SolutionCard;
