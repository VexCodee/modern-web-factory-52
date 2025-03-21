
import React from 'react';
import { Card } from '@/components/ui/card';
import { Briefcase, MapPin, Heart, ArrowUpRight } from 'lucide-react';

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
    <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-gray-800">
      <div className="flex flex-col">
        {/* Image section */}
        <div className="relative overflow-hidden h-48 bg-gray-700">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105 opacity-90"
          />
        </div>
        
        {/* Content section */}
        <div className="p-6 bg-gray-800 text-center">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            <span className="px-3 py-1 rounded-full bg-gray-700 text-xs font-medium text-gray-300">
              Developer
            </span>
            <span className="px-3 py-1 rounded-full bg-gray-700 text-xs font-medium text-gray-300">
              Design
            </span>
          </div>
          
          {/* Member info */}
          <h3 className="text-xl font-bold mb-1 text-white">{name}</h3>
          <p className="text-gray-400 mb-4 font-medium">{position}</p>
          
          {/* Bio section */}
          <p className="text-gray-300 mb-6 text-sm">
            {bio}
          </p>
          
          {/* Stats section */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-white">
              <div className="text-lg font-bold text-primary">5+</div>
              <div className="text-xs text-gray-400">Years exp.</div>
            </div>
            <div className="text-white">
              <div className="text-lg font-bold text-primary">24</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
            <div className="text-white">
              <div className="text-lg font-bold text-primary">4.9</div>
              <div className="text-xs text-gray-400">Rating</div>
            </div>
          </div>
          
          {/* View profile button */}
          <div className="mt-6">
            <button className="w-full py-2 px-4 flex items-center justify-center gap-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all">
              <span>View Profile</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
