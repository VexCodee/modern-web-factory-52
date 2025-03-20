
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (value: string) => {
    console.log('Changing language to:', value);
    setLanguage(value as 'pl' | 'en');
  };

  return (
    <div className="flex items-center space-x-1">
      <Globe size={16} className="text-foreground/70" />
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="h-8 w-[85px] bg-transparent border-none focus:ring-0 focus:ring-offset-0">
          <SelectValue placeholder={language === 'pl' ? 'Polski' : 'English'} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pl">Polski</SelectItem>
          <SelectItem value="en">English</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
