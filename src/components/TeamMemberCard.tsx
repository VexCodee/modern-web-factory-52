
import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

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
    <Card className="relative overflow-hidden border-none shadow-xl group rounded-lg h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      {/* Full image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/40"></div>
      </div>
      
      {/* Tags */}
      <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
        <span className="px-4 py-1.5 rounded-full bg-gray-800/80 backdrop-blur-sm text-sm font-medium text-white transition-all duration-300 hover:bg-gray-700/90">
          {position.split(' ')[0]}
        </span>
        <span className="px-4 py-1.5 rounded-full bg-gray-800/80 backdrop-blur-sm text-sm font-medium text-white transition-all duration-300 hover:bg-gray-700/90">
          Mobile
        </span>
      </div>
      
      {/* Arrow button */}
      <div className="absolute top-4 right-4 z-10">
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/30 transform hover:-translate-y-1">
          <ArrowUpRight size={20} />
        </button>
      </div>
      
      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 z-10">
        {/* Name and position */}
        <h3 className="text-3xl font-bold mb-1 text-white">{name}</h3>
        <p className="text-gray-300 mb-6 text-lg">{position}</p>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-2">
          <div className="transition-all duration-300 hover:translate-y-[-5px]">
            <div className="text-2xl font-bold text-white">5+</div>
            <div className="text-sm text-gray-400">Years exp.</div>
          </div>
          <div className="transition-all duration-300 hover:translate-y-[-5px]">
            <div className="text-2xl font-bold text-white">24</div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
          <div className="transition-all duration-300 hover:translate-y-[-5px]">
            <div className="text-2xl font-bold text-white">4.9</div>
            <div className="text-sm text-gray-400">Rating</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
