'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MockupScreen, MobileProject } from '@/core/domain/entities/project.entity';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileDeviceFrameProps {
  project: MobileProject;
  activeScreen: MockupScreen;
  className?: string;
  onSelectScreen?: (id: string) => void;
  autoSlideInterval?: number; // in milliseconds, default 6000ms (6 seconds)
}

export const MobileDeviceFrame: React.FC<MobileDeviceFrameProps> = ({
  project,
  activeScreen,
  className,
  onSelectScreen,
  autoSlideInterval = 6000,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const uiData = activeScreen.previewUiData;
  const accentColor = activeScreen.accentColor || '#B70603';
  const hasImage = Boolean(activeScreen.imageSrc);

  const screens = project.screens || [];
  const currentIndex = screens.findIndex((s) => s.id === activeScreen.id);
  const totalScreens = screens.length;

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!onSelectScreen || totalScreens <= 1) return;
    const prevIdx = (currentIndex - 1 + totalScreens) % totalScreens;
    onSelectScreen(screens[prevIdx].id);
  }, [currentIndex, onSelectScreen, screens, totalScreens]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!onSelectScreen || totalScreens <= 1) return;
    const nextIdx = (currentIndex + 1) % totalScreens;
    onSelectScreen(screens[nextIdx].id);
  }, [currentIndex, onSelectScreen, screens, totalScreens]);

  // Auto-slide effect (every 6 seconds, pauses on hover)
  useEffect(() => {
    if (totalScreens <= 1 || isHovered || !onSelectScreen) return;

    const interval = setInterval(() => {
      const nextIdx = (currentIndex + 1) % totalScreens;
      onSelectScreen(screens[nextIdx].id);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlideInterval, currentIndex, isHovered, onSelectScreen, screens, totalScreens]);

  return (
    <div
      className={cn(
        'relative mx-auto w-full max-w-[340px] sm:max-w-[365px] md:max-w-[380px] select-none flex flex-col items-center group',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Liquid Glass Smartphone Frame */}
      <div className="relative w-full rounded-[44px] p-3 bg-white/75 dark:bg-slate-900/75 backdrop-blur-2xl border border-white/90 dark:border-white/10 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.1)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] ring-1 ring-slate-200/80 dark:ring-white/10 transition-all duration-300 hover:shadow-[0_25px_65px_-15px_rgba(15,23,42,0.16)] dark:hover:border-white/20 hover:border-white">
        {/* Subtle Glass Highlight on Top Rim */}
        <div className="absolute top-1.5 inset-x-8 h-2 bg-gradient-to-b from-white/90 dark:from-white/20 to-transparent rounded-full pointer-events-none z-20" />

        {/* Inner Screen Display with Sleek Crisp Rim */}
        <div className="relative w-full aspect-[1080/2064] rounded-[26px] overflow-hidden bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <AnimatePresence mode="wait">
            {hasImage && activeScreen.imageSrc ? (
              /* ========================================================
                 REAL SCREENSHOT SLIDE (CLEAN LIQUID GLASS FRAME)
                 ======================================================== */
              <motion.div
                key={activeScreen.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full bg-white dark:bg-slate-950"
              >
                <Image
                  src={activeScreen.imageSrc}
                  alt={`${project.title} - ${activeScreen.title}`}
                  fill
                  sizes="(max-width: 768px) 340px, (max-width: 1024px) 365px, 380px"
                  className="object-cover object-top select-none pointer-events-none"
                  priority={currentIndex === 0}
                />
              </motion.div>
            ) : (
              /* ========================================================
                 FALLBACK HIGH-CRAFT MOCKUP VIEW (FOR OTHER PROJECTS)
                 ======================================================== */
              <motion.div
                key={activeScreen.id}
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex flex-col justify-between h-full bg-[#F8F9FB] dark:bg-slate-900 p-4 text-slate-900 dark:text-slate-100"
              >
              {/* Top App Header */}
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: accentColor }}
                    />
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100 tracking-tight truncate max-w-[170px]">
                      {uiData?.headerTitle || project.title}
                    </span>
                  </div>
                  {uiData?.badge && (
                    <span
                      className="text-[9px] font-mono px-2 py-0.5 rounded-full uppercase font-bold tracking-wider"
                      style={{
                        backgroundColor: `${accentColor}18`,
                        color: accentColor,
                        border: `1px solid ${accentColor}40`,
                      }}
                    >
                      {uiData.badge}
                    </span>
                  )}
                </div>

                {/* Subheading & Status Banner */}
                <div className="mt-3">
                  <p className="text-[13px] font-semibold text-slate-900 dark:text-slate-100 leading-tight">
                    {uiData?.subheading || project.subtitle}
                  </p>
                  {uiData?.statusText && (
                    <div className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="truncate">{uiData.statusText}</span>
                    </div>
                  )}
                </div>

                {/* High-density Key Stat Grid */}
                {uiData?.stats && uiData.stats.length > 0 && (
                  <div className="grid grid-cols-3 gap-1.5 mt-3">
                    {uiData.stats.map((st, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-white/10 rounded-xl p-2 text-center shadow-2xs"
                      >
                        <span className="block text-[12px] font-mono font-bold text-slate-900 dark:text-white leading-none">
                          {st.value}
                        </span>
                        <span className="block text-[9px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1 truncate">
                          {st.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Dynamic List Items / Feature Cards */}
                {uiData?.listItems && uiData.listItems.length > 0 && (
                  <div className="space-y-1.5 mt-3">
                    {uiData.listItems.slice(0, 3).map((item, lIdx) => (
                      <div
                        key={lIdx}
                        className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-white/10 flex items-center justify-between shadow-2xs"
                      >
                        <div className="min-w-0 pr-2">
                          <p className="text-[11px] font-semibold text-slate-900 dark:text-slate-100 truncate leading-snug">
                            {item.title}
                          </p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate leading-none mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                        {item.tag && (
                          <span className="shrink-0 text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                            {item.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom App Action Button */}
              <div className="pt-2">
                <div
                  className="w-full py-2.5 px-3 rounded-full flex items-center justify-center gap-1.5 text-xs font-semibold text-white shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}, ${accentColor}DD)`,
                  }}
                >
                  <span>{uiData?.actionLabel || 'Explore Screen'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>

      {/* Bottom Center Slide Controls Bar */}
      {totalScreens > 1 && (
        <div className="mt-4 flex flex-col items-center gap-2 w-full">
          {/* Glass Control Capsule */}
          <div className="flex items-center justify-between gap-3 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-white/10 shadow-sm backdrop-blur-md">
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous screen"
              className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Screen Info & Dots */}
            <div className="flex flex-col items-center min-w-[150px] max-w-[220px] text-center px-1">
              <span className="text-xs font-bold text-slate-900 dark:text-white truncate w-full">
                {activeScreen.title}
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                {screens.map((screen, idx) => {
                  const isSelected = idx === currentIndex;
                  return (
                    <button
                      key={screen.id}
                      type="button"
                      onClick={() => onSelectScreen?.(screen.id)}
                      aria-label={`Go to ${screen.title}`}
                      className={cn(
                        'transition-all duration-300 rounded-full cursor-pointer',
                        isSelected
                          ? 'w-4 h-1.5 bg-slate-900 dark:bg-white'
                          : 'w-1.5 h-1.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                      )}
                    />
                  );
                })}
              </div>
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next screen"
              className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Screen Caption Footer */}
          <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center line-clamp-1 max-w-[340px]">
            {activeScreen.caption}
          </p>
        </div>
      )}
    </div>
  );
};
