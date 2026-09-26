'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export const BackToTopButton: React.FC<{ className?: string }> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll back to top"
          title="Scroll back to top"
          className={cn(
            'fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-700/90 text-slate-800 dark:text-slate-100 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)] hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer group',
            className
          )}
        >
          <ArrowUp className="w-5 h-5 text-orange-600 dark:text-orange-400 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

