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
        'flex flex-col p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-colors',
        className
      )}
    >
      <span className="font-mono text-lg md:text-xl font-extrabold text-slate-900 tracking-tight">
        {metric.value}
      </span>
      <span className="text-xs font-semibold text-orange-600 tracking-wide uppercase mt-0.5">
        {metric.label}
      </span>
      {metric.detail && (
        <span className="text-[11px] text-slate-500 mt-1 leading-snug line-clamp-2">
          {metric.detail}
        </span>
      )}
    </div>
  );
};
