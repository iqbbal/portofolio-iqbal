import { StaticProjectRepository } from '../repositories/static-project.repository';
import { StaticExperienceRepository } from '../repositories/static-experience.repository';
import { StaticSkillRepository } from '../repositories/static-skill.repository';
import { StaticProfileRepository } from '../repositories/static-profile.repository';
import { StaticEducationRepository } from '../repositories/static-education.repository';

import { GetFeaturedProjectsUseCase } from '../../application/use-cases/get-featured-projects.use-case';
import { GetArchivedProjectsUseCase, GetAllProjectsUseCase } from '../../application/use-cases/get-archived-projects.use-case';
import { GetCareerTimelineUseCase } from '../../application/use-cases/get-career-timeline.use-case';
import { GetTechnicalMatrixUseCase } from '../../application/use-cases/get-technical-matrix.use-case';
import { GetProfileSummaryUseCase } from '../../application/use-cases/get-profile-summary.use-case';
import { GetEducationSummaryUseCase } from '../../application/use-cases/get-education-summary.use-case';

export class ServiceContainer {
  private static instance: ServiceContainer;

  // Concrete Repositories (Infrastructure Layer)
  public readonly projectRepository = new StaticProjectRepository();
  public readonly experienceRepository = new StaticExperienceRepository();
  public readonly skillRepository = new StaticSkillRepository();
  public readonly profileRepository = new StaticProfileRepository();
  public readonly educationRepository = new StaticEducationRepository();

  // Application Use Cases (Application Layer)
  public readonly getFeaturedProjectsUseCase = new GetFeaturedProjectsUseCase(this.projectRepository);
  public readonly getArchivedProjectsUseCase = new GetArchivedProjectsUseCase(this.projectRepository);
  public readonly getAllProjectsUseCase = new GetAllProjectsUseCase(this.projectRepository);
  public readonly getCareerTimelineUseCase = new GetCareerTimelineUseCase(this.experienceRepository);
  public readonly getTechnicalMatrixUseCase = new GetTechnicalMatrixUseCase(this.skillRepository);
  public readonly getProfileSummaryUseCase = new GetProfileSummaryUseCase(this.profileRepository);
  public readonly getEducationSummaryUseCase = new GetEducationSummaryUseCase(this.educationRepository);

  public static getInstance(): ServiceContainer {
    if (!ServiceContainer.instance) {
      ServiceContainer.instance = new ServiceContainer();
    }
    return ServiceContainer.instance;
  }
}

export const container = ServiceContainer.getInstance();
