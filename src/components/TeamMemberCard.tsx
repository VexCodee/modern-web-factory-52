
import React from 'react';
import { Card } from '@/components/ui/card';
import { Briefcase, MapPin, Heart } from 'lucide-react';

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
  return (
    <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="flex flex-col">
        {/* Top section with diagonal divider */}
        <div className="relative h-[240px] bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
          {/* Diagonal divider */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-white dark:bg-gray-900 transform -skew-y-6 translate-y-12"></div>
          
          {/* Image circle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 z-10 w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden shadow-lg">
            <img 
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Content section */}
        <div className="pt-20 pb-8 px-6 bg-white dark:bg-gray-900 text-center">
          <h3 className="text-2xl font-bold mb-1">{name}</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-5 font-medium">{position}</p>
          
          {/* Divider */}
          <div className="w-12 h-1 bg-gray-200 dark:bg-gray-700 mx-auto mb-5"></div>
          
          {/* Personal information */}
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {bio}
          </p>
          
          {/* Bottom section with icons */}
          <div className="flex justify-center space-x-8 mt-4">
            <div className="flex flex-col items-center">
              <Briefcase size={20} className="text-gray-600 dark:text-gray-400 mb-1" />
              <span className="text-sm text-gray-500 dark:text-gray-400">5+ years</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin size={20} className="text-gray-600 dark:text-gray-400 mb-1" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Remote</span>
            </div>
            <div className="flex flex-col items-center">
              <Heart size={20} className="text-gray-600 dark:text-gray-400 mb-1" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Creative</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
