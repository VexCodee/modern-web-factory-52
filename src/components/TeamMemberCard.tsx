
import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TeamMemberCardProps {
  name: string;
  position: string;
  bio: string;
  image: string;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  position,
  bio,
  image,
  index,
}) => {
  // Alternate alignment for odd/even cards to create visual variety (same as SolutionCard)
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
              
              {/* Name and position overlay */}
              <div className="absolute text-white p-6 bottom-0 w-full">
                <div className="backdrop-blur-sm bg-black/40 p-4 rounded-lg">
                  <h2 className="text-2xl font-bold tracking-tight">{name}</h2>
                  <p className="text-white/80 mt-1">{position}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className={cn(
            "p-6 lg:p-8 lg:col-span-7 flex flex-col",
            isEven ? "lg:order-2" : "lg:order-1",
            "bg-white dark:bg-gray-900"
          )}>
            {/* Bio */}
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              {bio}
            </p>
            
            {/* Additional design element - horizontal line */}
            <div className="w-16 h-1 bg-gray-900 dark:bg-gray-700 mb-6"></div>
            
            {/* Quote about team member - can be customized */}
            <div className="mt-auto">
              <blockquote className="italic text-gray-600 dark:text-gray-400 border-l-4 border-gray-300 dark:border-gray-700 pl-4 py-2">
                "Great teams make great products. It's all about passion and dedication."
              </blockquote>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TeamMemberCard;
