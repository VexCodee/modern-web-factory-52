
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center space-x-1 text-foreground/70 hover:text-foreground transition-colors"
    >
      <Globe size={16} className="text-foreground/70" />
      <span className="text-sm font-medium">{language === 'pl' ? 'Polski' : 'English'}</span>
    </button>
  );
};

export default LanguageSelector;
