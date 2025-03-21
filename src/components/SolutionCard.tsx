
import React from 'react';
import { Check, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  return (
    <div className="group">
      <div className="relative h-[260px] sm:h-[280px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"></div>
        
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {features.slice(0, 2).map((feature, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 rounded-full bg-gray-800/80 backdrop-blur-sm text-xs font-medium text-white transition-all duration-300 hover:bg-gray-700/80"
            >
              {feature.split(' ')[0]}
            </span>
          ))}
        </div>
        
        <div className="absolute top-4 right-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-300 hover:bg-indigo-700 transform rotate-0 group-hover:rotate-45">
            <ArrowUpRight size={18} />
          </button>
        </div>
        
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h2 className="text-2xl font-bold text-white mb-1 transform translate-y-0 opacity-100 transition-all duration-300 group-hover:text-primary">{title}</h2>
          <p className="text-gray-300 mb-4 transform translate-y-0 opacity-100 transition-all duration-300 group-hover:text-gray-100">{description}</p>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="transform transition-all duration-300 opacity-80 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-1">
              <div className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">99%</div>
              <div className="text-xs text-gray-400">Satisfaction</div>
            </div>
            <div className="transform transition-all duration-300 opacity-80 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-1 delay-75">
              <div className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">24/7</div>
              <div className="text-xs text-gray-400">Support</div>
            </div>
            <div className="transform transition-all duration-300 opacity-80 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-1 delay-150">
              <div className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">+50%</div>
              <div className="text-xs text-gray-400">Efficiency</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
