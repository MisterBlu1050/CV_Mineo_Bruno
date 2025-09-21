import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';
import { LanguageCode } from '../types';
import { translations } from '../locales/translations';
import { get } from 'lodash-es';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>('fr');

  const t = useCallback((key: string): string => {
    const translation = get(translations[language], key);
    return translation || key;
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t
  }), [language, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
