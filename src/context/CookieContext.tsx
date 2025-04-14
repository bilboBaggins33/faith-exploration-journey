
import React, { createContext, useContext, useState, useEffect } from 'react';

interface CookieContextType {
  cookiesAccepted: boolean;
  acceptCookies: () => void;
  rejectCookies: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(() => {
    const stored = localStorage.getItem('cookieConsent');
    return stored ? JSON.parse(stored) : null;
  });

  const acceptCookies = () => {
    setCookiesAccepted(true);
    localStorage.setItem('cookieConsent', 'true');
  };

  const rejectCookies = () => {
    setCookiesAccepted(false);
    localStorage.setItem('cookieConsent', 'false');
  };

  return (
    <CookieContext.Provider value={{ cookiesAccepted, acceptCookies, rejectCookies }}>
      {children}
    </CookieContext.Provider>
  );
}

export function useCookies() {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  return context;
}
