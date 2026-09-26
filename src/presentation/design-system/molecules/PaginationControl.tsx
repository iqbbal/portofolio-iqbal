'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface PaginationControlProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const PaginationControl: React.FC<PaginationControlProps> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  className,
}) => {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      className={cn(
        'w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 select-none',
        className
      )}
    >
      {/* Left Item Counter Badge */}
      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/10 text-xs font-mono text-slate-600 dark:text-slate-300 shadow-2xs">
        <Sparkles className="w-3.5 h-3.5 text-orange-500" />
        <span>
          Menampilkan <strong className="text-slate-900 dark:text-white">{startItem}–{endItem}</strong> dari{' '}
          <strong className="text-slate-900 dark:text-white">{totalItems}</strong> Aplikasi Unggulan
        </span>
      </div>

      {/* Center/Right Liquid-Glass Pagination Capsule */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.08)] ring-1 ring-black/5 dark:ring-white/5">
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          aria-label="Previous Page"
          className={cn(
            'flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer',
            currentPage === 1
              ? 'opacity-35 cursor-not-allowed text-slate-400 dark:text-slate-600'
              : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white active:scale-95'
          )}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Sebelumnya</span>
        </button>

        {/* Page Number Buttons */}
        <div className="flex items-center gap-1 px-1">
          {pages.map((page) => {
            const isActive = page === currentPage;
            return (
              <button
                key={page}
                type="button"
                onClick={() => onPageChange(page)}
                aria-label={`Go to page ${page}`}
                className={cn(
                  'relative min-w-[34px] h-[34px] px-2.5 rounded-full text-xs font-mono font-bold flex items-center justify-center transition-all duration-200 cursor-pointer',
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePaginationIndicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 shadow-md shadow-orange-500/25"
                  />
                )}
                <span className="relative z-10">{String(page).padStart(2, '0')}</span>
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          aria-label="Next Page"
          className={cn(
            'flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer',
            currentPage === totalPages
              ? 'opacity-35 cursor-not-allowed text-slate-400 dark:text-slate-600'
              : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white active:scale-95'
          )}
        >
          <span className="hidden sm:inline">Berikutnya</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
