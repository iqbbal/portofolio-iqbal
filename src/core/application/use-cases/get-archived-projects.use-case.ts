import { IProjectRepository } from '../../domain/repositories/project.repository.interface';
import { MobileProject } from '../../domain/entities/project.entity';

export class GetArchivedProjectsUseCase {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(): Promise<MobileProject[]> {
    return this.projectRepository.getArchivedProjects();
  }
}

export class GetAllProjectsUseCase {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(): Promise<MobileProject[]> {
    return this.projectRepository.getAllProjects();
  }
}
