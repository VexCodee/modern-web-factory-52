
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
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm border-4 border-white shadow-md z-10">
          {year}
        </div>
        <div className="w-0.5 bg-indigo-100 h-full -mt-2 ml-px"></div>
      </div>
      
      {/* Content */}
      <div className="pb-12">
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;
