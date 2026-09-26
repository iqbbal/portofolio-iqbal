import { MobileProject, ProjectPlatform } from '../entities/project.entity';

export interface IProjectRepository {
  getFeaturedProjects(): Promise<MobileProject[]>;
  getArchivedProjects(): Promise<MobileProject[]>;
  getAllProjects(): Promise<MobileProject[]>;
  getProjectById(id: string): Promise<MobileProject | null>;
  getProjectsByPlatform(platform: ProjectPlatform): Promise<MobileProject[]>;
}
