
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
    <Card className="overflow-hidden border-none shadow-xl group bg-transparent text-white rounded-lg transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-full aspect-[16/9]">
        {/* Image with overlay */}
        <div className="relative h-full overflow-hidden">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"></div>
        </div>
        
        {/* Position tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-gray-800/80 backdrop-blur-sm text-xs font-medium text-white transition-all duration-300 hover:bg-gray-700/80">
            {position.split(' ')[0]}
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-800/80 backdrop-blur-sm text-xs font-medium text-white transition-all duration-300 hover:bg-gray-700/80">
            {position.includes(' ') ? position.split(' ').slice(1).join(' ') : 'Team Member'}
          </span>
        </div>
        
        {/* Arrow button */}
        <div className="absolute top-4 right-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-300 hover:bg-indigo-700 transform rotate-0 group-hover:rotate-45">
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Content overlayed on image */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          {/* Name and position */}
          <h3 className="text-2xl font-bold mb-1 transform translate-y-0 opacity-100 transition-all duration-300 group-hover:text-primary">{name}</h3>
          <p className="text-gray-300 mb-4 transform translate-y-0 opacity-100 transition-all duration-300 group-hover:text-gray-100">{position}</p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="transform transition-all duration-300 opacity-70 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-1">
              <div className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">5+</div>
              <div className="text-xs text-gray-400">Years exp.</div>
            </div>
            <div className="transform transition-all duration-300 opacity-70 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-1 delay-75">
              <div className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">24</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
            <div className="transform transition-all duration-300 opacity-70 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-1 delay-150">
              <div className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">4.9</div>
              <div className="text-xs text-gray-400">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
