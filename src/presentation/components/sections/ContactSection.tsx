'use client';

import React from 'react';
import { DeveloperProfile } from '@/core/domain/entities/profile.entity';
import { SectionHeader } from '../../design-system/molecules/SectionHeader';
import { Button } from '../../design-system/atoms/Button';
import { CopyButton } from '../../design-system/atoms/CopyButton';
import { LinkedInIcon } from '../../design-system/atoms/BrandIcons';
import { 
  Mail, 
  MessageSquare, 
  ArrowUpRight 
} from 'lucide-react';

interface ContactSectionProps {
  profile: DeveloperProfile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-200/70 dark:border-white/10">
      <SectionHeader
        icon="mail"
        number="05"
        tag="DIRECT CONTACT & INQUIRIES"
        title="Ready to Build Together?"
        subtitle="Open for full-time engineering roles, key contract initiatives, or technical consultations in Flutter and Native Android."
        align="center"
      />

      <div className="max-w-3xl mx-auto rounded-[36px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 p-8 md:p-12 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.06)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden text-center space-y-6">
        
        {/* Soft Ambient Glow */}
        <div className="absolute -top-20 -right-20 w-[260px] h-[260px] bg-orange-100/70 dark:bg-orange-500/10 blur-[80px] pointer-events-none rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-[260px] h-[260px] bg-sky-100/70 dark:bg-sky-500/10 blur-[80px] pointer-events-none rounded-full" />

        <div className="relative z-10 space-y-6 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{profile.availabilityStatus.text}</span>
            </div>
          </div>

          <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-lg">
            Let&apos;s engineer fast, resilient mobile solutions together.
          </h3>

          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
            Whether you are launching a new consumer app, migrating to Flutter, or modernizing an offline-first enterprise platform, feel free to connect directly.
          </p>

          {/* Primary Email Direct Copy Capsule */}
          <div className="p-3.5 md:p-4 rounded-full bg-slate-50/90 dark:bg-slate-800/80 border border-slate-200/90 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-lg w-full shadow-2xs">
            <div className="flex items-center gap-2.5 text-xs font-mono text-slate-800 dark:text-slate-200 pl-2">
              <Mail className="w-4 h-4 text-orange-600 dark:text-orange-400 shrink-0" />
              <span className="font-semibold truncate">{profile.email}</span>
            </div>
            <CopyButton
              textToCopy={profile.email}
              label="Copy Address"
              triggerConfetti
              className="w-full sm:w-auto justify-center shrink-0"
            />
          </div>

          {/* Direct Communication Channels */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a
              href={`mailto:${profile.email}`}
              className="w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="md"
                leftIcon={<Mail className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Send Direct Email
              </Button>
            </a>

            <a
              href="https://wa.me/6285155488455"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                size="md"
                leftIcon={<MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
                className="w-full sm:w-auto"
              >
                WhatsApp Chat
              </Button>
            </a>

            <a
              href={profile.socialLinks.find(s => s.platform === 'LinkedIn')?.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                size="md"
                leftIcon={<LinkedInIcon className="w-4 h-4 text-sky-600 dark:text-sky-400 fill-current" />}
                rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
                className="w-full sm:w-auto"
              >
                LinkedIn
              </Button>
            </a>
          </div>

          {/* Location footnote */}
          <div className="pt-6 border-t border-slate-100 dark:border-white/10 text-xs font-mono text-slate-400 dark:text-slate-500">
            Based in <span className="text-slate-700 dark:text-slate-300 font-semibold">{profile.location}</span> • Ready for Remote & On-Site
          </div>

        </div>
      </div>
    </section>
  );
};
