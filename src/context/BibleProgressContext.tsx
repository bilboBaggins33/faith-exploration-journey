
import React, { createContext, useContext } from 'react';
import { useBibleFetch } from '@/hooks/bible/use-bible-fetch';
import type { BibleProgressData } from '@/hooks/bible/bible-progress-types';

/**
 * Shared context so all components (Bible page, Challenge page, etc.) operate
 * on the same in-memory progress state. This means the immediate local state
 * update in updateProgress is visible everywhere without requiring a fresh DB
 * fetch after navigation.
 */
type BibleProgressContextValue = {
  profile: any | null;
  progress: BibleProgressData | null;
  loading: boolean;
  refreshData: () => Promise<void>;
  setProgress: React.Dispatch<React.SetStateAction<BibleProgressData | null>>;
};

const BibleProgressContext = createContext<BibleProgressContextValue | null>(null);

export const BibleProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = useBibleFetch();
  return (
    <BibleProgressContext.Provider value={value}>
      {children}
    </BibleProgressContext.Provider>
  );
};

export const useBibleProgressContext = (): BibleProgressContextValue => {
  const context = useContext(BibleProgressContext);
  if (!context) {
    throw new Error('useBibleProgressContext must be used within BibleProgressProvider');
  }
  return context;
};
