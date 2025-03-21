
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  iconBgColor: string;
  borderColor: string;
  dotColor: string;
  buttonBgColor: string;
  delay: number;
  link?: string; // Add link prop
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  benefits,
  iconBgColor,
  borderColor,
  dotColor,
  buttonBgColor,
  delay,
  link = '/services' // Default link to services page
}) => {
  return (
    <div className="group">
      <div 
        className="relative h-[380px] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white border border-gray-100"
        style={{ 
          transitionDelay: `${delay}ms`,
        }}
      >
        {/* Subtle background gradient */}
        <div className={`absolute inset-0 ${iconBgColor} opacity-5`}></div>
        
        {/* Icon */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span 
            className={`w-12 h-12 flex items-center justify-center rounded-full ${iconBgColor} text-white transition-all duration-300 hover:scale-110`}
          >
            {icon}
          </span>
        </div>
        
        {/* Arrow icon with link */}
        <div className="absolute top-4 right-4">
          <Link to={link} className={`w-12 h-12 flex items-center justify-center rounded-full ${buttonBgColor || 'bg-indigo-600'} text-white transition-all duration-300 hover:bg-indigo-700 transform rotate-0 group-hover:rotate-45`}>
            <ArrowRight size={20} />
          </Link>
        </div>
        
        {/* Content with fixed position to prevent overlap - reduced padding */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          {/* Title with enforced visibility */}
          <h2 className="text-xl font-bold text-slate-800 mb-2 transform translate-y-0 opacity-100 transition-all duration-300 group-hover:text-primary">{title}</h2>
          
          {/* Description */}
          <p className="text-gray-600 mb-5 transform translate-y-0 opacity-100 transition-all duration-300 group-hover:text-gray-800">{description}</p>
          
          {/* Stats - fixed layout with reduced spacing */}
          <div className="grid grid-cols-3 gap-3 border-t border-gray-100 pt-3">
            <div className="transform transition-all duration-300 opacity-80 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-1">
              <div className="text-lg font-bold text-slate-700 group-hover:text-primary transition-colors duration-300">24/7</div>
              <div className="text-xs text-gray-500">Support</div>
            </div>
            <div className="transform transition-all duration-300 opacity-80 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-1 delay-75">
              <div className="text-lg font-bold text-slate-700 group-hover:text-primary transition-colors duration-300">99%</div>
              <div className="text-xs text-gray-500">Satisfaction</div>
            </div>
            <div className="transform transition-all duration-300 opacity-80 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-1 delay-150">
              <div className="text-lg font-bold text-slate-700 group-hover:text-primary transition-colors duration-300">+50%</div>
              <div className="text-xs text-gray-500">Efficiency</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
