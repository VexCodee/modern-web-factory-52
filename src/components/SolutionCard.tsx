
import React from 'react';
import { ArrowRight, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SolutionCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  index: number;
  ctaText?: string;
  icon?: React.ReactNode;
  iconBgColor?: string;
  tags?: string[];
  stats?: string[];
  statsLabels?: string[];
  color?: string;
  textColor?: string;
  subtitle?: string;
  id?: number;
  hasGallery?: boolean;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  features,
  image,
  index,
  ctaText = "Zobacz więcej",
  icon,
  iconBgColor = "bg-indigo-500",
  tags = [],
  stats = ["24/7", "99%", "+50%"],
  statsLabels = ["Support", "Satisfaction", "Efficiency"],
  color = "bg-indigo-600",
  textColor = "text-white",
  subtitle,
  id,
  hasGallery = false
}) => {
  const linkUrl = id ? `/portfolio/${id}` : '#';
  
  return (
    <div className="group transition-all duration-300">
      <div 
        className="relative h-[260px] sm:h-[280px] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white border border-gray-100"
        style={{ 
          transitionDelay: `${index * 100}ms`,
        }}
      >
        {/* Background image with overlay */}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"></div>
        
        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {tags && tags.length > 0 ? (
            tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="px-4 py-1.5 rounded-full bg-gray-800/80 backdrop-blur-sm text-sm font-medium text-white transition-all duration-300 hover:bg-gray-700/80"
              >
                {tag}
              </span>
            ))
          ) : (
            features.slice(0, 2).map((feature, idx) => (
              <span 
                key={idx} 
                className="px-4 py-1.5 rounded-full bg-gray-800/80 backdrop-blur-sm text-sm font-medium text-white transition-all duration-300 hover:bg-gray-700/80"
              >
                {feature.split(' ')[0]}
              </span>
            ))
          )}
        </div>
        
        {/* Arrow icon */}
        <Link to={linkUrl} className="absolute top-4 right-4 z-10">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white transition-all duration-300 hover:bg-indigo-700 transform rotate-0 group-hover:rotate-45">
            <ArrowRight size={20} />
          </div>
        </Link>
        
        {/* Gallery icon - only show if the project has a gallery */}
        {hasGallery && (
          <div className="absolute top-4 right-20 z-10">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600">
              <Image size={20} />
            </div>
          </div>
        )}
        
        {/* Content */}
        <Link to={linkUrl} className="absolute inset-x-0 bottom-0 p-6">
          <h2 className="text-3xl font-bold text-blue-400 mb-1 transform translate-y-0 opacity-100 transition-all duration-300 group-hover:text-blue-300">{title}</h2>
          <p className="text-gray-300 mb-6 transform translate-y-0 opacity-100 transition-all duration-300 group-hover:text-gray-100">
            {subtitle || description}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="transform transition-all duration-300 opacity-80 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{stat}</div>
                <div className="text-sm text-gray-400">{statsLabels[idx]}</div>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SolutionCard;
