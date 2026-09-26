import React from 'react';
import { cn } from '@/lib/utils';
import { Layers, Sparkles, Smartphone, Cpu, Briefcase, Mail } from 'lucide-react';

interface SectionHeaderProps {
  number?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  icon?: 'layers' | 'smartphone' | 'cpu' | 'briefcase' | 'mail' | 'sparkles';
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  tag,
  title,
  subtitle,
  icon = 'layers',
  className,
  align = 'left',
}) => {
  const renderIcon = () => {
    switch (icon) {
      case 'smartphone':
        return <Smartphone className="w-5 h-5 text-slate-700" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-slate-700" />;
      case 'briefcase':
        return <Briefcase className="w-5 h-5 text-slate-700" />;
      case 'mail':
        return <Mail className="w-5 h-5 text-slate-700" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-slate-700" />;
      case 'layers':
      default:
        return <Layers className="w-5 h-5 text-slate-700" />;
    }
  };

  return (
    <div
      className={cn(
        'space-y-4 mb-12 md:mb-16',
        align === 'center' ? 'text-center max-w-2xl mx-auto flex flex-col items-center' : 'max-w-3xl',
        className
      )}
    >
      {/* Floating Squircle Icon Badge */}
      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center text-slate-800">
        {renderIcon()}
      </div>

      {tag && (
        <div
          className={cn(
            'inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase font-semibold text-orange-600',
            align === 'center' && 'justify-center'
          )}
        >
          {number && <span className="text-slate-400">{number}</span>}
          {number && <span className="text-slate-300">//</span>}
          <span>{tag}</span>
        </div>
      )}

      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
