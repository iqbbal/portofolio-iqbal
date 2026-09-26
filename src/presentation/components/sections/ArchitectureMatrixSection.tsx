'use client';

import React from 'react';
import { TechnicalMatrixResult } from '@/core/application/use-cases/get-technical-matrix.use-case';
import { SectionHeader } from '../../design-system/molecules/SectionHeader';
import { Badge } from '../../design-system/atoms/Badge';
import { 
  Smartphone, 
  Layers, 
  Database, 
  Cpu, 
  Terminal, 
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ArchitectureMatrixSectionProps {
  matrix: TechnicalMatrixResult;
}

export const ArchitectureMatrixSection: React.FC<ArchitectureMatrixSectionProps> = ({
  matrix,
}) => {
  const getCategoryIcon = (iconId: string) => {
    switch (iconId) {
      case 'smartphone':
        return <Smartphone className="w-4 h-4 text-orange-600" />;
      case 'layers':
        return <Layers className="w-4 h-4 text-sky-600" />;
      case 'database':
        return <Database className="w-4 h-4 text-emerald-600" />;
      case 'cpu':
        return <Cpu className="w-4 h-4 text-purple-600" />;
      case 'terminal':
      default:
        return <Terminal className="w-4 h-4 text-slate-700" />;
    }
  };

  const getProficiencyBadge = (level: string) => {
    switch (level) {
      case 'Expert':
        return (
          <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
            PROD EXPERT
          </span>
        );
      case 'Advanced':
        return (
          <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200/80">
            ADVANCED
          </span>
        );
      case 'Exploring':
      default:
        return (
          <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200/80">
            ACTIVE R&D
          </span>
        );
    }
  };

  return (
    <section id="architecture" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-200/70">
      <SectionHeader
        icon="cpu"
        number="03"
        tag="TECHNICAL MATRICES & ARCHITECTURE"
        title="Engineering Foundations"
        subtitle="Structured breakdown of mobile SDKs, reactive state architectures, local storage engines, and design patterns utilized in production environments."
        align="center"
      />

      {/* Architectural Philosophy Callouts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        {matrix.architecturePrinciples.map((principle, pIdx) => (
          <div
            key={pIdx}
            className="p-6 md:p-7 rounded-[28px] bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200 space-y-2.5"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <Zap className="w-4 h-4 text-orange-600" />
              <span>{principle.title}</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              {principle.summary}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1.5">
              {principle.keywords.map((kw, kwIdx) => (
                <Badge key={kwIdx} variant="muted" size="sm">
                  {kw}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Categorized Skill Matrices */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {matrix.categories.map((category) => (
          <div
            key={category.id}
            className="p-6 md:p-8 rounded-[28px] bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-2xs space-y-4"
          >
            {/* Category Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                  {getCategoryIcon(category.iconIdentifier)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {category.categoryName}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {category.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Skills List */}
            <div className="space-y-2">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3 rounded-2xl bg-slate-50/70 border border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50 transition-colors"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5 font-normal">
                      {skill.practicalUse}
                    </p>
                  </div>
                  <div className="shrink-0 self-start sm:self-auto">
                    {getProficiencyBadge(skill.proficiency)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
