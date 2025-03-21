
import React, { createContext, useContext, useState, useEffect } from 'react';

// Typy ciasteczek
type CookieCategories = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

type CookieContextType = {
  cookieConsent: CookieCategories | null;
  isBannerVisible: boolean;
  acceptAllCookies: () => void;
  rejectAllCookies: () => void;
  saveCookiePreferences: (preferences: CookieCategories) => void;
  openCookieSettings: () => void;
  closeBanner: () => void;
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cookieConsent, setCookieConsent] = useState<CookieCategories | null>(null);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  // Sprawdź, czy użytkownik już dokonał wyboru
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      setCookieConsent(JSON.parse(savedConsent));
      setIsBannerVisible(false);
    } else {
      // Pokaż baner po krótkim opóźnieniu
      const timer = setTimeout(() => {
        setIsBannerVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Zapisz ciasteczka w localStorage
  const saveCookieSettings = (settings: CookieCategories) => {
    localStorage.setItem('cookieConsent', JSON.stringify(settings));
    setCookieConsent(settings);
  };

  const acceptAllCookies = () => {
    const allAccepted: CookieCategories = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    saveCookieSettings(allAccepted);
    setIsBannerVisible(false);
  };

  const rejectAllCookies = () => {
    const allRejected: CookieCategories = {
      necessary: true, // Niezbędne zawsze muszą być włączone
      functional: false,
      analytics: false,
      marketing: false
    };
    saveCookieSettings(allRejected);
    setIsBannerVisible(false);
  };

  const saveCookiePreferences = (preferences: CookieCategories) => {
    saveCookieSettings({
      ...preferences,
      necessary: true // Niezbędne zawsze włączone
    });
    setIsBannerVisible(false);
  };

  const openCookieSettings = () => {
    setIsBannerVisible(true);
  };

  const closeBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <CookieContext.Provider
      value={{
        cookieConsent,
        isBannerVisible,
        acceptAllCookies,
        rejectAllCookies,
        saveCookiePreferences,
        openCookieSettings,
        closeBanner
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export const useCookies = () => {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  return context;
};
