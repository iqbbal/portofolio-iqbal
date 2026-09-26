'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/presentation/providers/ThemeProvider';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          'w-9 h-9 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 shadow-2xs',
          className
        )}
      />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className={cn(
        'relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer select-none',
        'bg-white/90 hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200/90 shadow-2xs',
        'dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:text-amber-400 dark:border-slate-800 dark:shadow-[0_2px_10px_rgba(0,0,0,0.5)]',
        'active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/30',
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ scale: 0.5, rotate: 45, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: -45, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Moon className="w-4 h-4 text-amber-400 fill-amber-400/20" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: 45, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Sun className="w-4 h-4 text-amber-500 hover:text-amber-600 transition-colors" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

