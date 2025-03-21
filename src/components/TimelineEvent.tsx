
import React from 'react';

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
    <div className="flex">
      {/* Timeline Line and Dot */}
      <div className="flex flex-col items-center mr-6">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shadow-md z-10">
          {year}
        </div>
        <div className="w-0.5 bg-gray-200 h-full -mt-2 ml-px"></div>
      </div>
      
      {/* Content */}
      <div className="pb-12">
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;
