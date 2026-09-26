import React from 'react';
import { cn } from '@/lib/utils';
import { ProjectMetric } from '@/core/domain/entities/project.entity';

interface MetricPillProps {
  metric: ProjectMetric;
  className?: string;
}

export const MetricPill: React.FC<MetricPillProps> = ({ metric, className }) => {
  return (
    <div
      className={cn(
        'flex flex-col p-3.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors',
        className
      )}
    >
      <span className="font-mono text-lg md:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        {metric.value}
      </span>
      <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 tracking-wide uppercase mt-0.5">
        {metric.label}
      </span>
      {metric.detail && (
        <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug line-clamp-2">
          {metric.detail}
        </span>
      )}
    </div>
  );
};
