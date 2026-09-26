import React from 'react';
import { MobileProject } from '@/core/domain/entities/project.entity';
import { Badge } from '../atoms/Badge';
import { TechStackGroup } from '../molecules/TechStackGroup';
import { Building2, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ArchivedProjectCardProps {
  project: MobileProject;
}

export const ArchivedProjectCard: React.FC<ArchivedProjectCardProps> = ({ project }) => {
  return (
    <div className="group p-6 md:p-7 rounded-[28px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-md dark:hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6)] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between space-y-4">
      <div className="space-y-3">
        {/* Top Badges */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-1.5 text-xs font-mono text-sky-700 dark:text-sky-400 min-w-0">
            <Building2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            <span className="font-semibold line-clamp-2 leading-snug">{project.client}</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 shrink-0 whitespace-nowrap pt-0.5">{project.period}</span>
        </div>

        {/* Title */}
        <div>
          <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors leading-snug">
            {project.title}
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Highlights */}
        {project.architecturalHighlights && project.architecturalHighlights.length > 0 && (
          <div className="space-y-1.5 pt-1">
            {project.architecturalHighlights.slice(0, 2).map((hl, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="line-clamp-2">{hl}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Tech Stack */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
        <TechStackGroup
          languages={project.techStack.languages}
          frameworks={project.techStack.frameworks}
          architecturePatterns={project.techStack.architecturePatterns}
          stateManagement={project.techStack.stateManagement}
          limit={4}
        />
      </div>
    </div>
  );
};
