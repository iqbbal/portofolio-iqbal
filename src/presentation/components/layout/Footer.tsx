'use client';

import React from 'react';
import Image from 'next/image';
import { DeveloperProfile } from '@/core/domain/entities/profile.entity';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  profile: DeveloperProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/70 bg-[#FAF9F6] text-slate-500 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand info & Architecture note */}
        <div className="space-y-1.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5 text-sm font-bold text-slate-900">
            <div className="relative w-6 h-6 rounded-full overflow-hidden border border-slate-300/80 shadow-2xs bg-slate-100 ring-1 ring-slate-900/[0.05]">
              <Image
                src={profile.avatarUrl || '/assets/images/profile/iqbal-profile.JPEG'}
                alt={profile.fullName}
                fill
                sizes="24px"
                className="object-cover object-center"
              />
            </div>
            <span>{profile.fullName}</span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-mono font-medium text-orange-600">{profile.roleTitle}</span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Clean Architecture • Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>

        {/* Center: Location & Availability */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>{profile.location}</span>
        </div>

        {/* Right: Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 text-xs font-medium text-slate-700 hover:text-slate-900 shadow-2xs transition-colors cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-200/50 text-center text-[11px] font-mono text-slate-400">
        © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
      </div>
    </footer>
  );
};
