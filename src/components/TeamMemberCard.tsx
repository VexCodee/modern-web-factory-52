
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
    <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-full">
        {/* Featured label */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-indigo-100/10 text-white backdrop-blur-sm mb-2">
            Featured Team Member
          </span>
        </div>
        
        {/* Image container with gradient overlay */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        {/* Content overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-bold mb-1 group-hover:text-primary">{name}</h3>
              <p className="text-gray-300 text-lg">{position}</p>
            </div>
            
            {/* Arrow button */}
            <div className="flex-shrink-0">
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-300 hover:bg-indigo-700 transform rotate-0 hover:rotate-45">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Position tags overlay */}
        <div className="absolute top-16 left-4 flex flex-wrap gap-2 z-10">
          <span className="px-3 py-1 rounded-full bg-gray-800/80 backdrop-blur-sm text-xs font-medium text-white transition-all duration-300 hover:bg-gray-700/80">
            {position.split(' ')[0]}
          </span>
          {position.includes(' ') && (
            <span className="px-3 py-1 rounded-full bg-gray-800/80 backdrop-blur-sm text-xs font-medium text-white transition-all duration-300 hover:bg-gray-700/80">
              {position.split(' ').slice(1).join(' ')}
            </span>
          )}
        </div>
        
        {/* Stats section - moved to main content */}
        <div className="px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="grid grid-cols-3 gap-4">
            <div className="transform transition-all duration-300 opacity-80 hover:opacity-100 translate-y-0 hover:-translate-y-1">
              <div className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">5+</div>
              <div className="text-xs text-gray-400">Years exp.</div>
            </div>
            <div className="transform transition-all duration-300 opacity-80 hover:opacity-100 translate-y-0 hover:-translate-y-1 delay-75">
              <div className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">24</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
            <div className="transform transition-all duration-300 opacity-80 hover:opacity-100 translate-y-0 hover:-translate-y-1 delay-150">
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
