import { IExperienceRepository } from '../../domain/repositories/experience.repository.interface';
import { WorkExperience } from '../../domain/entities/experience.entity';

export class GetCareerTimelineUseCase {
  constructor(private readonly experienceRepository: IExperienceRepository) {}

  async execute(): Promise<WorkExperience[]> {
    return this.experienceRepository.getAllExperiences();
  }
}
