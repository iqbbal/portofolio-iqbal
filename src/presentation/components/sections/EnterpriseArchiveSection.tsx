import React from 'react';
import { MobileProject } from '@/core/domain/entities/project.entity';
import { SectionHeader } from '../../design-system/molecules/SectionHeader';
import { ArchivedProjectCard } from '../../design-system/organisms/ArchivedProjectCard';

interface EnterpriseArchiveSectionProps {
  projects: MobileProject[];
}

export const EnterpriseArchiveSection: React.FC<EnterpriseArchiveSectionProps> = ({
  projects,
}) => {
  return (
    <section id="archive" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-200/70">
      <SectionHeader
        icon="layers"
        number="02"
        tag="GOVTECH & ENTERPRISE ARCHIVE"
        title="Mission-Critical Systems"
        subtitle="High-security native Android systems developed for Indonesian ministries, regulatory authorities, and state institutions."
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ArchivedProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
