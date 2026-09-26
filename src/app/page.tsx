import { container } from '@/core/infrastructure/di/container';
import { FloatingNavbar } from '@/presentation/components/layout/FloatingNavbar';
import { Footer } from '@/presentation/components/layout/Footer';
import { BackToTopButton } from '@/presentation/design-system/atoms/BackToTopButton';
import { HeroSection } from '@/presentation/components/sections/HeroSection';
import { FeaturedProjectsSection } from '@/presentation/components/sections/FeaturedProjectsSection';
import { EnterpriseArchiveSection } from '@/presentation/components/sections/EnterpriseArchiveSection';
import { ArchitectureMatrixSection } from '@/presentation/components/sections/ArchitectureMatrixSection';
import { CareerTimelineSection } from '@/presentation/components/sections/CareerTimelineSection';
import { ContactSection } from '@/presentation/components/sections/ContactSection';

export default async function PortfolioPage() {
  // Execute application use cases concurrently via Clean Architecture DI container
  const [
    profile,
    featuredProjects,
    archivedProjects,
    technicalMatrix,
    careerTimeline,
    educationSummary,
  ] = await Promise.all([
    container.getProfileSummaryUseCase.execute(),
    container.getFeaturedProjectsUseCase.execute(),
    container.getArchivedProjectsUseCase.execute(),
    container.getTechnicalMatrixUseCase.execute(),
    container.getCareerTimelineUseCase.execute(),
    container.getEducationSummaryUseCase.execute(),
  ]);

  return (
    <main className="min-h-screen bg-ambient-mesh text-slate-900 dark:text-slate-100 selection:bg-orange-500/20 selection:text-slate-900 antialiased">
      {/* Floating Navigation Header */}
      <FloatingNavbar profile={profile} />

      {/* Hero Section */}
      <HeroSection profile={profile} />

      {/* Featured Mobile Projects */}
      <FeaturedProjectsSection projects={featuredProjects} />

      {/* Enterprise & GovTech Project Archive */}
      <EnterpriseArchiveSection projects={archivedProjects} />

      {/* Technical Matrices & Architecture Principles */}
      <ArchitectureMatrixSection matrix={technicalMatrix} />

      {/* Career Timeline & Academic Education */}
      <CareerTimelineSection
        timeline={careerTimeline}
        educationData={educationSummary}
      />

      {/* Contact Section */}
      <ContactSection profile={profile} />

      {/* Footer */}
      <Footer profile={profile} />

      {/* Floating Sticky Back to Top Button */}
      <BackToTopButton />
    </main>
  );
}
