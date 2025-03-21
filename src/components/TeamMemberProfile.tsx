
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
}

interface TeamMemberProfileProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  socials: SocialLinks;
}

const TeamMemberProfile: React.FC<TeamMemberProfileProps> = ({
  name,
  role,
  image,
  quote,
  socials
}) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Color accent bar at top */}
      <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
      
      <div className="p-6 pb-4">
        {/* Image */}
        <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-md transform group-hover:scale-105 transition-transform duration-300">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Content */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-indigo-600 font-medium text-sm mb-4">{role}</p>
          <div className="h-px w-12 bg-gray-200 mx-auto mb-4"></div>
          <p className="text-gray-600 italic text-sm">"{quote}"</p>
        </div>
        
        {/* Social links */}
        <div className="flex justify-center space-x-4 mt-6">
          {socials.twitter && (
            <a 
              href={socials.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
            >
              <Twitter size={16} />
            </a>
          )}
          
          {socials.linkedin && (
            <a 
              href={socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
            >
              <Linkedin size={16} />
            </a>
          )}
          
          {socials.github && (
            <a 
              href={socials.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberProfile;
