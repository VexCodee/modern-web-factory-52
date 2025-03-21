
import React, { useState } from 'react';
import { useCookies } from '../context/CookieContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { AlertTriangle, Info, X, Shield, BarChart, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CookieBanner: React.FC = () => {
  const { isBannerVisible, acceptAllCookies, rejectAllCookies, saveCookiePreferences, closeBanner } = useCookies();
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('simple');
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  // Teksty w zależności od języka
  const texts = {
    title: language === 'pl' ? 'Ustawienia prywatności' : 
           language === 'de' ? 'Datenschutzeinstellungen' : 
           'Privacy Settings',
    description: language === 'pl' ? 'Używamy plików cookie, aby poprawić komfort korzystania z naszej strony. Możesz dostosować ustawienia lub zaakceptować wszystkie pliki cookie.' : 
                language === 'de' ? 'Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern. Sie können Einstellungen anpassen oder alle Cookies akzeptieren.' : 
                'We use cookies to enhance your browsing experience. You can customize settings or accept all cookies.',
    accept: language === 'pl' ? 'Akceptuj wszystkie' : 
            language === 'de' ? 'Alle akzeptieren' : 
            'Accept All',
    reject: language === 'pl' ? 'Odrzuć opcjonalne' : 
            language === 'de' ? 'Optionale ablehnen' : 
            'Reject Optional',
    save: language === 'pl' ? 'Zapisz preferencje' : 
          language === 'de' ? 'Einstellungen speichern' : 
          'Save Preferences',
    simple: language === 'pl' ? 'Podstawowe' : 
            language === 'de' ? 'Einfach' : 
            'Simple',
    advanced: language === 'pl' ? 'Zaawansowane' : 
              language === 'de' ? 'Erweitert' : 
              'Advanced',
    necessary: {
      title: language === 'pl' ? 'Niezbędne' : language === 'de' ? 'Notwendig' : 'Necessary',
      description: language === 'pl' ? 'Te pliki cookie są wymagane do prawidłowego działania strony i nie można ich wyłączyć.' : 
                   language === 'de' ? 'Diese Cookies sind für das ordnungsgemäße Funktionieren der Website erforderlich und können nicht deaktiviert werden.' : 
                   'These cookies are required for the website to function properly and cannot be turned off.'
    },
    functional: {
      title: language === 'pl' ? 'Funkcjonalne' : language === 'de' ? 'Funktional' : 'Functional',
      description: language === 'pl' ? 'Umożliwiają dodatkowe funkcje i personalizację strony.' : 
                   language === 'de' ? 'Ermöglichen zusätzliche Funktionen und Personalisierung der Website.' : 
                   'Enable additional functionality and personalization of the site.'
    },
    analytics: {
      title: language === 'pl' ? 'Analityczne' : language === 'de' ? 'Analytisch' : 'Analytics',
      description: language === 'pl' ? 'Pomagają nam zrozumieć, jak użytkownicy korzystają z naszej strony.' : 
                   language === 'de' ? 'Helfen uns zu verstehen, wie Benutzer unsere Website nutzen.' : 
                   'Help us understand how users interact with our website.'
    },
    marketing: {
      title: language === 'pl' ? 'Marketingowe' : language === 'de' ? 'Marketing' : 'Marketing',
      description: language === 'pl' ? 'Używane do wyświetlania spersonalizowanych reklam.' : 
                   language === 'de' ? 'Werden verwendet, um personalisierte Werbung anzuzeigen.' : 
                   'Used to display personalized advertisements.'
    }
  };

  const handleToggle = (category: keyof typeof preferences) => {
    if (category === 'necessary') return; // Niezbędne nie mogą być wyłączone

    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSavePreferences = () => {
    saveCookiePreferences(preferences);
  };

  if (!isBannerVisible) return null;

  return (
    <Dialog open={isBannerVisible} onOpenChange={closeBanner}>
      <DialogContent className="sm:max-w-[500px] md:max-w-[600px] p-0 rounded-xl overflow-hidden">
        <DialogHeader className="p-6 pb-2 bg-gradient-to-r from-primary/10 to-indigo-500/5">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              {texts.title}
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={closeBanner} className="rounded-full h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription className="text-sm pt-2">
            {texts.description}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="px-6">
            <TabsList className="w-full mt-2">
              <TabsTrigger value="simple" className="flex-1">{texts.simple}</TabsTrigger>
              <TabsTrigger value="advanced" className="flex-1">{texts.advanced}</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="simple" className="p-6 pt-4 space-y-4">
            <div className="flex justify-center items-center space-x-4">
              <Button variant="outline" onClick={rejectAllCookies} className="flex-1">
                {texts.reject}
              </Button>
              <Button onClick={acceptAllCookies} className="flex-1">
                {texts.accept}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="px-6 pb-6 pt-4 space-y-4">
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
              {/* Niezbędne */}
              <div className="flex items-start justify-between p-4 border rounded-lg bg-gray-50">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <h4 className="font-medium">{texts.necessary.title}</h4>
                  </div>
                  <p className="text-sm text-gray-500">{texts.necessary.description}</p>
                </div>
                <Switch checked={preferences.necessary} disabled className="mt-1" />
              </div>

              {/* Funkcjonalne */}
              <div className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Info className="h-4 w-4 text-blue-500" />
                    <h4 className="font-medium">{texts.functional.title}</h4>
                  </div>
                  <p className="text-sm text-gray-500">{texts.functional.description}</p>
                </div>
                <Switch 
                  checked={preferences.functional} 
                  onCheckedChange={() => handleToggle('functional')} 
                  className="mt-1" 
                />
              </div>

              {/* Analityczne */}
              <div className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <BarChart className="h-4 w-4 text-green-500" />
                    <h4 className="font-medium">{texts.analytics.title}</h4>
                  </div>
                  <p className="text-sm text-gray-500">{texts.analytics.description}</p>
                </div>
                <Switch 
                  checked={preferences.analytics} 
                  onCheckedChange={() => handleToggle('analytics')} 
                  className="mt-1" 
                />
              </div>

              {/* Marketingowe */}
              <div className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-red-500" />
                    <h4 className="font-medium">{texts.marketing.title}</h4>
                  </div>
                  <p className="text-sm text-gray-500">{texts.marketing.description}</p>
                </div>
                <Switch 
                  checked={preferences.marketing} 
                  onCheckedChange={() => handleToggle('marketing')} 
                  className="mt-1" 
                />
              </div>
            </div>

            <Button onClick={handleSavePreferences} className="w-full">
              {texts.save}
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default CookieBanner;
