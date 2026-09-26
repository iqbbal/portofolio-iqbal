import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'accent' | 'success' | 'mono' | 'muted' | 'pill';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  dot = false,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-slate-100/90 text-slate-700 border border-slate-200/80',
    outline: 'bg-white/80 text-slate-700 border border-slate-200 shadow-2xs',
    accent: 'bg-orange-50 text-orange-700 border border-orange-200/80',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200/80',
    mono: 'bg-slate-50 text-slate-800 border border-slate-200 font-mono shadow-2xs',
    muted: 'bg-slate-100/70 text-slate-500 border border-slate-200/60',
    pill: 'bg-white text-slate-800 border border-slate-200/80 shadow-xs rounded-full',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 rounded-full gap-1.5',
    md: 'text-xs px-3 py-1 rounded-full gap-2',
    lg: 'text-sm px-4 py-1.5 rounded-full gap-2',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium transition-colors select-none',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full',
            variant === 'success' && 'bg-emerald-500 animate-pulse',
            variant === 'accent' && 'bg-orange-500',
            variant === 'default' && 'bg-slate-400',
            variant === 'mono' && 'bg-sky-500'
          )}
        />
      )}
      {children}
    </span>
  );
};
