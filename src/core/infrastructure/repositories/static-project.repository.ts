import { IProjectRepository } from '../../domain/repositories/project.repository.interface';
import { MobileProject, ProjectPlatform } from '../../domain/entities/project.entity';
import { rawProjectsData } from '../datasources/static/raw-projects.data';

export class StaticProjectRepository implements IProjectRepository {
  private readonly projects: MobileProject[] = rawProjectsData;

  async getFeaturedProjects(): Promise<MobileProject[]> {
    return this.projects.filter((p) => p.isFeatured);
  }

  async getArchivedProjects(): Promise<MobileProject[]> {
    return this.projects.filter((p) => !p.isFeatured);
  }

  async getAllProjects(): Promise<MobileProject[]> {
    return [...this.projects];
  }

  async getProjectById(id: string): Promise<MobileProject | null> {
    const found = this.projects.find((p) => p.id === id);
    return found || null;
  }

  async getProjectsByPlatform(platform: ProjectPlatform): Promise<MobileProject[]> {
    return this.projects.filter((p) => p.platform.includes(platform));
  }
}
