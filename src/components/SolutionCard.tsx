
import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
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
  // Color schemes (softer, more professional palette)
  const colors = [
    { bg: 'bg-blue-50 dark:bg-blue-950/30', accent: 'bg-blue-500', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800', hoverBg: 'group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30' },
    { bg: 'bg-emerald-50 dark:bg-emerald-950/30', accent: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-800', hoverBg: 'group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30' },
    { bg: 'bg-amber-50 dark:bg-amber-950/30', accent: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-800', hoverBg: 'group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30' },
    { bg: 'bg-purple-50 dark:bg-purple-950/30', accent: 'bg-purple-500', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-800', hoverBg: 'group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30' },
  ];
  
  const colorSet = colors[index % colors.length];

  return (
    <Card className={cn(
      "group relative h-full overflow-hidden border rounded-xl shadow-sm transition-all duration-500", 
      colorSet.bg, 
      colorSet.border,
      "hover:shadow-lg"
    )}>
      {/* Image Container - Positioned at the top */}
      <div className="relative h-48 overflow-hidden">
        <div 
          className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
        
        {/* Title overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h2 className="text-2xl font-bold tracking-tight text-white drop-shadow-md font-display">
            {title}
          </h2>
        </div>
      </div>
      
      {/* Color accent line */}
      <div className={`h-1 w-full ${colorSet.accent} transition-all duration-300 group-hover:h-1.5`}></div>
      
      <CardContent className="p-5">
        {/* Description */}
        <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
        
        {/* Features list with animation */}
        <div className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`flex items-center opacity-0 animate-fade-in ${colorSet.hoverBg} rounded-lg transition-all duration-300 p-1.5`}
              style={{ animationDelay: `${300 + idx * 120}ms`, animationFillMode: 'forwards' }}
            >
              <div className={`mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${colorSet.accent}`}>
                <Check size={12} className="text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-200">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-auto pt-2">
          <Link 
            to="/contact" 
            className={cn(
              "group/btn flex w-full items-center justify-center rounded-lg p-3 font-medium text-white transition-all duration-300",
              colorSet.accent,
              "hover:shadow-md"
            )}
          >
            <span className="mr-2">{ctaText}</span>
            <ArrowUpRight 
              size={16} 
              className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" 
            />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SolutionCard;
