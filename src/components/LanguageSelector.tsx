
import React from 'react';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  return (
    <div className="flex items-center space-x-1">
      <Globe size={16} className="text-foreground/70" />
      <span className="text-sm font-medium">Polski</span>
    </div>
  );
};

export default LanguageSelector;
