
import React from 'react';
import { motion } from 'framer-motion';

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
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm shadow-lg z-10"
        >
          {year}
        </motion.div>
        <div className="w-0.5 bg-gradient-to-b from-violet-600 to-indigo-200 h-full -mt-2 ml-px"></div>
      </div>
      
      {/* Content */}
      <div className="pb-12">
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-violet-100"
        >
          <h3 className="text-xl font-bold mb-2 text-violet-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelineEvent;
