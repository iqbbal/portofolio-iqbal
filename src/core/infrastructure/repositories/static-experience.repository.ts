import { IExperienceRepository } from '../../domain/repositories/experience.repository.interface';
import { WorkExperience } from '../../domain/entities/experience.entity';
import { rawExperienceData } from '../datasources/static/raw-experience.data';

export class StaticExperienceRepository implements IExperienceRepository {
  private readonly experiences: WorkExperience[] = rawExperienceData;

  async getAllExperiences(): Promise<WorkExperience[]> {
    return [...this.experiences];
  }

  async getExperienceById(id: string): Promise<WorkExperience | null> {
    const found = this.experiences.find((e) => e.id === id);
    return found || null;
  }
}
