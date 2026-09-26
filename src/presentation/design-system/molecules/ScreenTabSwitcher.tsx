'use client';

import React from 'react';
import { MockupScreen } from '@/core/domain/entities/project.entity';
import { cn } from '@/lib/utils';
import { MapPin, Activity, FileText, LayoutGrid } from 'lucide-react';

interface ScreenTabSwitcherProps {
  screens: MockupScreen[];
  activeScreenId: string;
  onSelectScreen: (id: string) => void;
  className?: string;
}

export const ScreenTabSwitcher: React.FC<ScreenTabSwitcherProps> = ({
  screens,
  activeScreenId,
  onSelectScreen,
  className,
}) => {
  if (screens.length <= 1) return null;

  const getScreenIcon = (type: MockupScreen['type']) => {
    switch (type) {
      case 'map':
        return <MapPin className="w-3.5 h-3.5" />;
      case 'analytics':
        return <Activity className="w-3.5 h-3.5" />;
      case 'form':
      case 'booking':
        return <FileText className="w-3.5 h-3.5" />;
      case 'dashboard':
      default:
        return <LayoutGrid className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div
      className={cn(
        'flex items-center gap-1.5 p-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-white/10 max-w-full overflow-x-auto no-scrollbar shadow-2xs',
        className
      )}
    >
      {screens.map((screen) => {
        const isActive = screen.id === activeScreenId;
        return (
          <button
            key={screen.id}
            type="button"
            onClick={() => onSelectScreen(screen.id)}
            className={cn(
              'flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer select-none',
              isActive
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs border border-slate-200 dark:border-white/10 font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/60'
            )}
          >
            {getScreenIcon(screen.type)}
            <span>{screen.title}</span>
          </button>
        );
      })}
    </div>
  );
};
