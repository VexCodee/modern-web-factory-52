
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
    <Card className="overflow-hidden border-none shadow-xl group bg-gray-900 text-white rounded-lg">
      <div className="relative">
        {/* Image with overlay */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-gray-800/80 backdrop-blur-sm text-xs font-medium text-white">
            {position.split(' ')[0]}
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-800/80 backdrop-blur-sm text-xs font-medium text-white">
            Mobile
          </span>
        </div>
        
        {/* Arrow button */}
        <div className="absolute top-4 right-4">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white">
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Name and position */}
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-gray-400 mb-4">{position}</p>
        
        {/* Bio */}
        <p className="text-gray-300 mb-6 text-sm line-clamp-3">
          {bio}
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-auto pt-2">
          <div>
            <div className="text-lg font-bold text-primary">5+</div>
            <div className="text-xs text-gray-400">Years exp.</div>
          </div>
          <div>
            <div className="text-lg font-bold text-primary">24</div>
            <div className="text-xs text-gray-400">Projects</div>
          </div>
          <div>
            <div className="text-lg font-bold text-primary">4.9</div>
            <div className="text-xs text-gray-400">Rating</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
