
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: 'pl' | 'en' | 'de') => {
    setLanguage(newLanguage);
  };

  return (
    <div className="relative group">
      <button 
        className="flex items-center space-x-1 text-foreground/70 hover:text-foreground transition-colors"
        aria-label="Change language"
      >
        <Globe size={16} className="text-foreground/70" />
        <span className="text-sm font-medium">
          {language === 'pl' ? 'Polski' : language === 'en' ? 'English' : 'Deutsch'}
        </span>
      </button>
      
      <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-md shadow-lg py-2 hidden group-hover:block z-10">
        <div className="w-full">
          <button
            onClick={() => handleLanguageChange('pl')}
            className={`w-full text-left px-4 py-2 text-sm ${language === 'pl' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`}
          >
            Polski
          </button>
          <button
            onClick={() => handleLanguageChange('en')}
            className={`w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange('de')}
            className={`w-full text-left px-4 py-2 text-sm ${language === 'de' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`}
          >
            Deutsch
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
