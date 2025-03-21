
import React from 'react';
import { Check, ExternalLink } from 'lucide-react';
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
  // Using a single color palette to reduce variety
  const colors = [
    { primary: 'bg-gray-900 dark:bg-gray-800', secondary: 'bg-gray-50 dark:bg-gray-900', accent: 'border-gray-200 dark:border-gray-700' },
  ];
  
  const colorSet = colors[0]; // Always using the same color set
  
  // Alternate alignment for odd/even cards to create visual variety
  const isEven = index % 2 === 0;

  return (
    <div className="relative">
      <Card className="group overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-all duration-500">
        <div className={cn(
          "relative grid grid-cols-1 lg:grid-cols-12 gap-0",
          isEven ? "lg:grid-flow-row" : "lg:grid-flow-row-dense"
        )}>
          {/* Image section */}
          <div className={cn(
            "relative overflow-hidden lg:col-span-5",
            isEven ? "lg:order-1" : "lg:order-2"
          )}>
            <div className="relative h-64 lg:h-full">
              {/* Image with subtle overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              
              {/* Title overlay */}
              <div className="absolute text-white p-6 bottom-0 w-full">
                <div className="backdrop-blur-sm bg-black/40 p-4 rounded-lg">
                  <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className={cn(
            "p-6 lg:p-8 lg:col-span-7 flex flex-col",
            isEven ? "lg:order-2" : "lg:order-1",
            "bg-white dark:bg-gray-900",
            "rounded-b-lg lg:rounded-none",
            isEven ? "lg:rounded-r-lg" : "lg:rounded-l-lg"
          )}>
            {/* Description */}
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              {description}
            </p>
            
            {/* Features list */}
            <div className="space-y-3 mb-8">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center"
                >
                  <div className="mr-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200">
                    <Check size={14} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="mt-auto">
              <Button
                asChild
                className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white"
              >
                <Link to="/contact" className="flex items-center justify-between">
                  <span>{ctaText}</span>
                  <ExternalLink size={16} className="ml-2" />
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
