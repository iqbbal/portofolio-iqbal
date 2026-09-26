import { WorkExperience } from '../entities/experience.entity';

export interface IExperienceRepository {
  getAllExperiences(): Promise<WorkExperience[]>;
  getExperienceById(id: string): Promise<WorkExperience | null>;
}
