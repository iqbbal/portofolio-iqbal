'use client';

import React from 'react';
import { MobileProject } from '@/core/domain/entities/project.entity';
import { SectionHeader } from '../../design-system/molecules/SectionHeader';
import { ProjectCaseStudyCard } from '../../design-system/organisms/ProjectCaseStudyCard';

interface FeaturedProjectsSectionProps {
  projects: MobileProject[];
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  projects,
}) => {
  return (
    <section id="featured" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeader
        icon="smartphone"
        number="01"
        tag="FEATURED MOBILE APPS"
        title="Products I've Engineered"
        subtitle="Refined production mobile applications engineered for enterprise brands and high-growth consumer platforms — with deep focus on architecture, offline resilience, and performance."
        align="center"
      />

      <div className="space-y-12 md:space-y-16">
        {projects.map((project, index) => (
          <ProjectCaseStudyCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
