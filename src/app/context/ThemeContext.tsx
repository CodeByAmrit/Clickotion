import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'blue' | 'purple' | 'emerald' | 'amber' | 'rose';
type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem('clickotion-theme') as Theme) || 'blue'
  );
  const [mode, setMode] = useState<ThemeMode>(
    (localStorage.getItem('clickotion-mode') as ThemeMode) || 'dark'
  );

  useEffect(() => {
    // Remove all theme classes
    const themeClasses = ['theme-blue', 'theme-purple', 'theme-emerald', 'theme-amber', 'theme-rose'];
    document.documentElement.classList.remove(...themeClasses);
    
    // Add current theme class
    document.documentElement.classList.add(`theme-${theme}`);
    
    // Add mode class
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Persist
    localStorage.getItem('clickotion-theme') !== theme && 
      localStorage.setItem('clickotion-theme', theme);
    localStorage.getItem('clickotion-mode') !== mode && 
      localStorage.setItem('clickotion-mode', mode);
  }, [theme, mode]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
