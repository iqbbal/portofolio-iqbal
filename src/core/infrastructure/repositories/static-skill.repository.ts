import { ISkillRepository } from '../../domain/repositories/skill.repository.interface';
import { SkillCategory, ArchitecturePrinciple } from '../../domain/entities/skill.entity';
import { rawSkillCategoriesData, rawArchitecturePrinciplesData } from '../datasources/static/raw-skills.data';

export class StaticSkillRepository implements ISkillRepository {
  async getSkillCategories(): Promise<SkillCategory[]> {
    return [...rawSkillCategoriesData];
  }

  async getArchitecturePrinciples(): Promise<ArchitecturePrinciple[]> {
    return [...rawArchitecturePrinciplesData];
  }
}
