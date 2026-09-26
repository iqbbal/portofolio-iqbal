'use client';

import React from 'react';
import Image from 'next/image';
import { DeveloperProfile } from '@/core/domain/entities/profile.entity';
import { Badge } from '../../design-system/atoms/Badge';
import { Button } from '../../design-system/atoms/Button';
import { CopyButton } from '../../design-system/atoms/CopyButton';
import { LinkedInIcon, GithubIcon } from '../../design-system/atoms/BrandIcons';
import { 
  ArrowDown, 
  Smartphone, 
  Layers, 
  Database, 
  MapPin, 
  Sparkles, 
  ExternalLink,
  Cpu,
  FileDown,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Terminal,
  Activity,
  Flame,
  Boxes,
  Workflow,
  GitBranch
} from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  profile: DeveloperProfile;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center pt-32 md:pt-36 pb-16 px-6 md:px-12 overflow-hidden">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-orange-200/35 via-amber-100/30 to-sky-200/30 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-sky-200/30 via-purple-100/20 to-orange-100/30 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Main 2-Column Split: Kiri (Content & CTAs) & Kanan (Portrait Visual Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Narrative, Headlines, CTAs, Toolchain (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-2xs text-xs font-medium text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{profile.availabilityStatus.text}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-2xs text-xs font-mono text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-orange-600" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Role Badge */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-orange-700 uppercase tracking-wider">
                <Code2 className="w-3.5 h-3.5 text-orange-600" />
                <span>{profile.roleTitle}</span>
              </span>
            </div>

            {/* Display Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Engineering Fast, Resilient{' '}
                <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-sky-600 bg-clip-text text-transparent">
                  Mobile Experiences
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal pt-1">
                Experienced Mobile Developer with 5+ years of expertise in building native Android and cross-platform applications using Kotlin, Java, and Flutter. Proven track record in delivering scalable, user-focused apps—many of which were government-related projects. Skilled in modern architectures (MVVM/MVP), RESTful APIs, state management, and CI/CD. Passionate about clean code, performance optimization, and continuous learning.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full">
              <a href="#featured">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowDown className="w-4 h-4" />}
                >
                  Explore Selected Works
                </Button>
              </a>

              <a
                href={profile.resumeDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Button
                  variant="secondary"
                  size="lg"
                  leftIcon={<FileDown className="w-4 h-4 text-orange-600" />}
                >
                  Download Resume (PDF)
                </Button>
              </a>

            </div>

            {/* Comprehensive Engineering Toolchain & Skill Matrix */}
            <div className="pt-2 w-full space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                Technical Skills & Toolchain
              </span>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200/90 shadow-2xs text-xs font-medium text-slate-700 hover:border-orange-300 hover:bg-orange-50/50 transition-colors">
                  <Smartphone className="w-3.5 h-3.5 text-orange-600" />
                  <span>Flutter, Kotlin Multiplatform</span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200/90 shadow-2xs text-xs font-medium text-slate-700 hover:border-sky-300 hover:bg-sky-50/50 transition-colors">
                  <Cpu className="w-3.5 h-3.5 text-sky-600" />
                  <span>Java, Kotlin, Dart</span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200/90 shadow-2xs text-xs font-medium text-slate-700 hover:border-amber-300 hover:bg-amber-50/50 transition-colors">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span>Firebase (Auth, Firestore, Crashlytics)</span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200/90 shadow-2xs text-xs font-medium text-slate-700 hover:border-purple-300 hover:bg-purple-50/50 transition-colors">
                  <Layers className="w-3.5 h-3.5 text-purple-600" />
                  <span>BLoC, Riverpod & Coroutine (Kotlin)</span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200/90 shadow-2xs text-xs font-medium text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/50 transition-colors">
                  <Boxes className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Dependency Injection (GetIt – Flutter, Hilt – Android)</span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200/90 shadow-2xs text-xs font-medium text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/50 transition-colors">
                  <Database className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Room DB & Offline-First</span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200/90 shadow-2xs text-xs font-medium text-slate-700 hover:border-rose-300 hover:bg-rose-50/50 transition-colors">
                  <Workflow className="w-3.5 h-3.5 text-rose-600" />
                  <span>CI/CD (CodeMagic)</span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 border border-slate-200/90 shadow-2xs text-xs font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors">
                  <GitBranch className="w-3.5 h-3.5 text-slate-700" />
                  <span>Git & GitHub / GitLab / Bitbucket</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Portrait Showcase & Floating Glass Chips (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              
              {/* Soft Colored Ambient Backlight */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-orange-400/20 via-sky-400/20 to-purple-400/20 rounded-[48px] blur-2xl opacity-70 pointer-events-none" />

              {/* Main Portrait Card */}
              <div className="relative rounded-[36px] bg-white/80 backdrop-blur-xl border border-white/90 p-3 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/[0.04] overflow-hidden group">
                
                {/* Profile Photo */}
                <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden bg-slate-100">
                  <Image
                    src={profile.avatarUrl || '/assets/images/profile/iqbal-profile.JPEG'}
                    alt={profile.fullName}
                    fill
                    priority
                    loading="eager"
                    sizes="(max-width: 640px) 340px, 400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Top & Bottom Gradient Shadows for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/10 pointer-events-none" />

                  {/* Top Floating Glass Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white shadow-xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Senior Mobile Engineer</span>
                    </div>

                    <div className="p-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-xs">
                      <Terminal className="w-3.5 h-3.5 text-orange-600" />
                    </div>
                  </div>

                  {/* Bottom Floating Info Over Portrait */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-lg space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">{profile.fullName}</span>
                      <span className="text-[10px] font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">5+ YRS EXP</span>
                    </div>
                    <div className="text-[11px] font-medium text-slate-600 truncate">
                      02 October 2000
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative Floating Accent Pill: Apps Shipped */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="hidden sm:flex absolute -top-4 -right-5 items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                <span className="text-xs font-extrabold text-slate-900 font-mono">10+ Apps Shipped</span>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
