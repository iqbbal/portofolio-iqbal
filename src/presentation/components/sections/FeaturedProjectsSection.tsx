'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileProject } from '@/core/domain/entities/project.entity';
import { SectionHeader } from '../../design-system/molecules/SectionHeader';
import { ProjectCaseStudyCard } from '../../design-system/organisms/ProjectCaseStudyCard';
import { PaginationControl } from '../../design-system/molecules/PaginationControl';

interface FeaturedProjectsSectionProps {
  projects: MobileProject[];
}

const ITEMS_PER_PAGE = 2;

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  projects,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [projects, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top of section so user focuses on the new page cards
    const section = document.getElementById('featured');
    if (section) {
      const topOffset = section.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="featured" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      <SectionHeader
        icon="smartphone"
        number="01"
        tag="FEATURED MOBILE APPS"
        title="Products I've Engineered"
        subtitle="Refined production mobile applications engineered for enterprise brands and high-growth consumer platforms — with deep focus on architecture, offline resilience, and performance."
        align="center"
      />

      {/* Paginated Project Cards with Animated Transition */}
      <div className="space-y-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12 md:space-y-16"
          >
            {paginatedProjects.map((project, idx) => {
              const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + idx;
              return (
                <ProjectCaseStudyCard
                  key={project.id}
                  project={project}
                  index={globalIndex}
                />
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Liquid-Glass Pagination Control */}
        <PaginationControl
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={projects.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={handlePageChange}
          className="mt-6"
        />
      </div>
    </section>
  );
};
