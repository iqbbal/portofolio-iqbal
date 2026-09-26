import { IProjectRepository } from '../../domain/repositories/project.repository.interface';
import { MobileProject } from '../../domain/entities/project.entity';

export class GetFeaturedProjectsUseCase {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(): Promise<MobileProject[]> {
    const projects = await this.projectRepository.getFeaturedProjects();
    return projects;
  }
}
