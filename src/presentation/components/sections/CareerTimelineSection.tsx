'use client';

import React from 'react';
import { WorkExperience } from '@/core/domain/entities/experience.entity';
import { EducationSummaryResult } from '@/core/application/use-cases/get-education-summary.use-case';
import { SectionHeader } from '../../design-system/molecules/SectionHeader';
import { Badge } from '../../design-system/atoms/Badge';
import { TechStackGroup } from '../../design-system/molecules/TechStackGroup';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
} from 'lucide-react';

interface CareerTimelineSectionProps {
  timeline: WorkExperience[];
  educationData: EducationSummaryResult;
}

export const CareerTimelineSection: React.FC<CareerTimelineSectionProps> = ({
  timeline,
  educationData,
}) => {
  return (
    <section id="experience" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-200/70">
      <SectionHeader
        icon="briefcase"
        number="04"
        tag="CAREER TRAJECTORY & IMPACT"
        title="Experience & Education"
        subtitle="Chronological track record of engineering leadership, team collaboration, and production deliveries across the mobile ecosystem."
        align="center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-6">
        
        {/* Left Column: Work Experience Nodes (8 Cols) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-700 uppercase tracking-wider mb-2">
            <Briefcase className="w-4 h-4" />
            <span>Professional Work History</span>
          </div>

          <div className="relative border-l-2 border-slate-200 pl-6 md:pl-8 space-y-10 ml-2 md:ml-3">
            {timeline.map((exp, idx) => (
              <div key={exp.id} className="relative group">
                
                {/* Node Dot Indicator */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-2 border-orange-500 ring-4 ring-slate-100 group-hover:scale-125 transition-transform shadow-xs" />

                <div className="p-6 md:p-8 rounded-[28px] bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-2xs group-hover:shadow-md group-hover:border-slate-300 transition-all duration-300 space-y-4">
                  {/* Experience Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-orange-600 mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-500">
                      <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-sky-600" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                    {exp.summary}
                  </p>

                  {/* Key Achievements */}
                  <div className="space-y-2 pt-1">
                    <span className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                      Technical Accomplishments
                    </span>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((ach, achIdx) => (
                        <li key={achIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Technologies Used */}
                  <div className="pt-2">
                    <TechStackGroup languages={exp.coreTechnologies} limit={6} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Achievements (4 Cols) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Education Block */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Education</span>
            </div>

            <div className="space-y-4">
              {educationData.education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-5 rounded-[24px] bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-2xs space-y-2"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>{edu.period}</span>
                    <div className="flex items-center gap-1.5">
                      {edu.gpa && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10px] font-mono font-bold text-emerald-700 shadow-2xs">
                          IPK {edu.gpa}
                        </span>
                      )}
                      <Badge variant="mono" size="sm">
                        {edu.isFormalDegree ? 'Formal' : 'Program'}
                      </Badge>
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-semibold text-orange-600">
                    {edu.institution}
                  </p>
                  <p className="text-[11px] text-slate-500 leading-relaxed pt-1 font-normal">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition & Competition Block */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Honors & Awards</span>
            </div>

            <div className="space-y-3">
              {educationData.achievements.map((ach) => (
                <div
                  key={ach.id}
                  className="p-4 rounded-[20px] bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-2xs space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">{ach.title}</span>
                    <span className="font-mono text-[11px] text-amber-600 font-bold">{ach.year}</span>
                  </div>
                  <p className="text-xs text-orange-600 font-medium">{ach.issuer}</p>
                  {ach.description && (
                    <p className="text-[11px] text-slate-500 leading-relaxed pt-0.5">{ach.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
