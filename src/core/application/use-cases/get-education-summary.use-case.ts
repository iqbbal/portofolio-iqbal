import { IEducationRepository } from '../../domain/repositories/education.repository.interface';
import { EducationItem, AchievementItem } from '../../domain/entities/education.entity';

export interface EducationSummaryResult {
  education: EducationItem[];
  achievements: AchievementItem[];
}

export class GetEducationSummaryUseCase {
  constructor(private readonly educationRepository: IEducationRepository) {}

  async execute(): Promise<EducationSummaryResult> {
    const [education, achievements] = await Promise.all([
      this.educationRepository.getEducationList(),
      this.educationRepository.getAchievements(),
    ]);

    return { education, achievements };
  }
}
