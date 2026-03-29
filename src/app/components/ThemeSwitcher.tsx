import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Palette, Check, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const themes = [
  { id: 'blue', color: '#3b82f6', label: 'Ocean Blue' },
  { id: 'purple', color: '#a855f7', label: 'Indigo Purple' },
  { id: 'emerald', color: '#10b981', label: 'Emerald Teal' },
  { id: 'amber', color: '#fbbf24', label: 'Amber Orange' },
  { id: 'rose', color: '#fb7185', label: 'Rose Crimson' },
] as const;

export function ThemeSwitcher() {
  const { theme, setTheme, mode, setMode } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="p-3 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-2"
          >
            <div className="flex flex-col gap-1.5 p-1 mb-2 bg-black/20 rounded-xl border border-white/5">
              <button
                onClick={() => setMode('light')}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                  mode === 'light' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <Sun className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Light</span>
              </button>
              <button
                onClick={() => setMode('dark')}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                  mode === 'dark' ? 'bg-white/10 text-white shadow-lg' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <Moon className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Dark</span>
              </button>
            </div>

            <div className="px-2 pb-2 border-b border-white/5 mb-1 pt-1">
              <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Select Accent</span>
            </div>
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200 group ${
                  theme === t.id ? 'bg-white/10' : 'hover:bg-white/5'
                }`}
              >
                <div 
                  className="w-4 h-4 rounded-full shadow-lg" 
                  style={{ backgroundColor: t.color }}
                />
                <span className={`text-sm font-medium ${theme === t.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                  {t.label}
                </span>
                {theme === t.id && (
                  <Check className="w-3 h-3 text-white ml-auto" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <Palette className={`w-5 h-5 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
}
