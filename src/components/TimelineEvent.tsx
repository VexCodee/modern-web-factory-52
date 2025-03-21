
import React from 'react';
import { Card } from '@/components/ui/card';

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  year,
  title,
  description
}) => {
  return (
    <div className="flex group">
      {/* Timeline Line and Dot */}
      <div className="flex flex-col items-center mr-6">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shadow-md z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
          {year}
        </div>
        <div className="w-0.5 bg-gradient-to-b from-primary to-primary/20 h-full -mt-2 ml-px group-hover:from-primary group-hover:to-accent/40 transition-all duration-500"></div>
      </div>
      
      {/* Content */}
      <div className="pb-12 w-full transform transition-all duration-500 group-hover:translate-y-[-5px]">
        <Card className="overflow-hidden backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 group-hover:bg-white/95">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-primary transition-colors duration-300">{title}</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
          </div>
          <div className="h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
        </Card>
      </div>
    </div>
  );
};

export default TimelineEvent;
