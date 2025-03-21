
import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleLanguageChange = (newLanguage: 'pl' | 'en' | 'de') => {
    setLanguage(newLanguage);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button 
          className="flex items-center space-x-1 text-foreground/70 hover:text-foreground transition-colors"
          aria-label="Change language"
        >
          <Globe size={16} className="text-foreground/70" />
          <span className="text-sm font-medium">
            {language === 'pl' ? 'Polski' : language === 'en' ? 'English' : 'Deutsch'}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-32 p-0" align="end">
        <div className="py-2">
          <button
            onClick={() => handleLanguageChange('pl')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${language === 'pl' ? 'bg-primary/10 text-primary' : ''}`}
          >
            Polski
          </button>
          <button
            onClick={() => handleLanguageChange('en')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${language === 'en' ? 'bg-primary/10 text-primary' : ''}`}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange('de')}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${language === 'de' ? 'bg-primary/10 text-primary' : ''}`}
          >
            Deutsch
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSelector;
