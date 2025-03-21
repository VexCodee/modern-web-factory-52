
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { useCookies } from '../context/CookieContext';
import { useLanguage } from '../context/LanguageContext';

const CookieButton: React.FC = () => {
  const { openCookieSettings } = useCookies();
  const { language } = useLanguage();

  const buttonText = 
    language === 'pl' ? 'Ustawienia plików cookie' :
    language === 'de' ? 'Cookie-Einstellungen' :
    'Cookie Settings';

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1"
      onClick={openCookieSettings}
    >
      <Shield className="h-3 w-3" />
      {buttonText}
    </Button>
  );
};

export default CookieButton;
