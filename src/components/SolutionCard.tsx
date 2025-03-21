
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
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
  // Professional color schemes (more muted, corporate palette)
  const colors = [
    { bg: 'bg-slate-50 dark:bg-slate-900/40', text: 'text-slate-800 dark:text-slate-200', border: 'border-slate-200 dark:border-slate-800', accent: 'bg-slate-700 dark:bg-slate-600' },
    { bg: 'bg-zinc-50 dark:bg-zinc-900/40', text: 'text-zinc-800 dark:text-zinc-200', border: 'border-zinc-200 dark:border-zinc-800', accent: 'bg-zinc-700 dark:bg-zinc-600' },
    { bg: 'bg-stone-50 dark:bg-stone-900/40', text: 'text-stone-800 dark:text-stone-200', border: 'border-stone-200 dark:border-stone-800', accent: 'bg-stone-700 dark:bg-stone-600' },
    { bg: 'bg-gray-50 dark:bg-gray-900/40', text: 'text-gray-800 dark:text-gray-200', border: 'border-gray-200 dark:border-gray-800', accent: 'bg-gray-700 dark:bg-gray-600' },
  ];
  
  const colorSet = colors[index % colors.length];

  return (
    <Card className={cn(
      "group h-full overflow-hidden border rounded-lg shadow-sm transition-all duration-300", 
      colorSet.bg, 
      colorSet.border,
      "hover:shadow-lg"
    )}>
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Image Side */}
        <div className="relative h-64 md:h-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          </div>
          
          {/* Title overlay on image (visible on mobile only) */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:hidden">
            <h2 className="text-2xl font-bold text-white drop-shadow-md">
              {title}
            </h2>
          </div>
        </div>
        
        {/* Content Side */}
        <div className="flex flex-col h-full">
          {/* Title (visible on desktop only) */}
          <div className="hidden md:block p-5 pb-0">
            <h2 className={cn("text-2xl font-bold tracking-tight", colorSet.text)}>
              {title}
            </h2>
          </div>
          
          {/* Subtle accent line */}
          <div className={`h-0.5 w-16 mx-5 my-3 ${colorSet.accent} transition-all duration-300 group-hover:w-24`}></div>
          
          <CardContent className="flex flex-col h-full p-5 pt-0">
            {/* Description */}
            <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
            
            {/* Features list with subtle animation */}
            <div className="space-y-1.5 mb-6 flex-grow">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center opacity-0 animate-fade-in"
                  style={{ animationDelay: `${300 + idx * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <Check size={16} className="mr-2 text-primary" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="mt-auto">
              <Link 
                to="/contact" 
                className={cn(
                  "group/btn flex w-full items-center justify-between rounded-md p-3 font-medium transition-all duration-300 border",
                  colorSet.border,
                  "hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                <span className={colorSet.text}>{ctaText}</span>
                <ArrowRight 
                  size={16} 
                  className="text-primary transition-transform duration-300 group-hover/btn:translate-x-1" 
                />
              </Link>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default SolutionCard;
