'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import confetti from 'canvas-confetti';

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  triggerConfetti?: boolean;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  label = 'Copy Email',
  copiedLabel = 'Copied to Clipboard!',
  className,
  triggerConfetti = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);

      if (triggerConfetti) {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.8 },
          colors: ['#EA580C', '#10B981', '#0284C7'],
        });
      }

      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={cn(
        'group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer select-none',
        copied
          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs'
          : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200/90 shadow-2xs',
        className
      )}
      title={`Copy "${textToCopy}" to clipboard`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-600 animate-in zoom-in" />
          <span>{copiedLabel}</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};
