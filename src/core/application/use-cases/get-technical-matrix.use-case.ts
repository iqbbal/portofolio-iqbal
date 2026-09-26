import { ISkillRepository } from '../../domain/repositories/skill.repository.interface';
import { SkillCategory, ArchitecturePrinciple } from '../../domain/entities/skill.entity';

export interface TechnicalMatrixResult {
  categories: SkillCategory[];
  architecturePrinciples: ArchitecturePrinciple[];
}

export class GetTechnicalMatrixUseCase {
  constructor(private readonly skillRepository: ISkillRepository) {}

  async execute(): Promise<TechnicalMatrixResult> {
    const [categories, architecturePrinciples] = await Promise.all([
      this.skillRepository.getSkillCategories(),
      this.skillRepository.getArchitecturePrinciples(),
    ]);

    return {
      categories,
      architecturePrinciples,
    };
  }
}
