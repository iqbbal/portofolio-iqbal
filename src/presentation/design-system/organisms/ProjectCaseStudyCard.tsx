'use client';

import React, { useState } from 'react';
import { MobileProject } from '@/core/domain/entities/project.entity';
import { MobileDeviceFrame } from './MobileDeviceFrame';
import { ScreenTabSwitcher } from '../molecules/ScreenTabSwitcher';
import { TechStackGroup } from '../molecules/TechStackGroup';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { 
  GithubIcon, 
  GooglePlayIcon, 
  AppleIcon 
} from '../atoms/BrandIcons';
import { 
  ExternalLink, 
  Cpu, 
  CheckCircle, 
} from 'lucide-react';

interface ProjectCaseStudyCardProps {
  project: MobileProject;
  index: number;
}

export const ProjectCaseStudyCard: React.FC<ProjectCaseStudyCardProps> = ({
  project,
  index,
}) => {
  const [activeScreenId, setActiveScreenId] = useState(
    project.screens[0]?.id || 'default'
  );

  const activeScreen =
    project.screens.find((s) => s.id === activeScreenId) ||
    project.screens[0] || {
      id: 'default',
      title: 'Main Screen',
      caption: 'Mobile UI View',
      type: 'dashboard' as const,
    };

  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <article className="relative rounded-[32px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 p-6 md:p-10 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.05)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_20px_50px_-10px_rgba(15,23,42,0.09)] dark:hover:border-white/20 hover:border-slate-300">
      
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100 dark:border-white/10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs font-bold text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/50 border border-orange-200/80 dark:border-orange-800/50 px-3 py-1 rounded-full">
            PROJECT #{formattedIndex}
          </span>
          <Badge variant="mono" size="sm">
            {project.client}
          </Badge>
          <Badge variant="outline" size="sm">
            {project.category}
          </Badge>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
          <span>{project.period}</span>
          <span>•</span>
          <span className="text-sky-700 dark:text-sky-400 font-semibold">{project.role}</span>
        </div>
      </div>

      {/* Main Split Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-start">
        
        {/* Left Column: Technical Narrative & Deep-Dive (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm md:text-base font-medium text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Summary */}
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {project.summary}
          </p>

          {/* Architectural Highlights */}
          {project.architecturalHighlights && project.architecturalHighlights.length > 0 && (
            <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/10 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-700 dark:text-orange-400 uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5" />
                <span>Architectural Foundations</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {project.architecturalHighlights.map((hl, hlIdx) => (
                  <li key={hlIdx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Matrix */}
          <div className="space-y-2 pt-2">
            <span className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Technology Stack & Toolchain
            </span>
            <TechStackGroup
              languages={project.techStack.languages}
              frameworks={project.techStack.frameworks}
              stateManagement={project.techStack.stateManagement}
              architecturePatterns={project.techStack.architecturePatterns}
              localDbAndStorage={project.techStack.localDbAndStorage}
              integrations={project.techStack.integrations}
            />
          </div>

          {/* Interactive Screen Switcher for Right Pane */}
          {project.screens && project.screens.length > 1 && (
            <div className="space-y-2 pt-2">
              <span className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Switch Interactive Mobile Views
              </span>
              <ScreenTabSwitcher
                screens={project.screens}
                activeScreenId={activeScreenId}
                onSelectScreen={setActiveScreenId}
              />
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/10">
            {project.links?.playStore && (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  size="sm"
                  leftIcon={<GooglePlayIcon className="w-3.5 h-3.5 fill-current" />}
                  rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                >
                  Google Play
                </Button>
              </a>
            )}

            {project.links?.appStore && (
              <a
                href={project.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  size="sm"
                  leftIcon={<AppleIcon className="w-3.5 h-3.5 fill-current" />}
                  rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                >
                  Apple App Store
                </Button>
              </a>
            )}

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={<GithubIcon className="w-3.5 h-3.5 fill-current" />}
                >
                  Source Repository
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Interactive Hardware Mobile Mockup (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center lg:sticky lg:top-24">
          <div className="w-full max-w-[400px] p-2">
            <MobileDeviceFrame
              project={project}
              activeScreen={activeScreen}
              onSelectScreen={setActiveScreenId}
            />
          </div>
        </div>
      </div>
    </article>
  );
};
