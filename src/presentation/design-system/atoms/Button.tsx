'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary:
        'bg-[#0F172A] hover:bg-[#1E293B] text-white font-medium shadow-sm shadow-slate-900/10 active:scale-[0.98] border border-slate-900',
      dark:
        'bg-[#0F172A] hover:bg-[#1E293B] text-white font-medium shadow-sm active:scale-[0.98]',
      secondary:
        'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 shadow-2xs active:scale-[0.98]',
      outline:
        'bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-300 active:scale-[0.98]',
      ghost:
        'bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900 active:scale-[0.98]',
      glass:
        'bg-white/80 hover:bg-white text-slate-800 border border-black/[0.06] shadow-xs backdrop-blur-md active:scale-[0.98]',
    };

    const sizeStyles = {
      sm: 'text-xs px-3.5 py-1.5 rounded-full gap-1.5',
      md: 'text-sm px-4 py-2 rounded-full gap-2',
      lg: 'text-base px-5 py-2.5 rounded-full gap-2.5',
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
