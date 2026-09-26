import { SkillCategory, ArchitecturePrinciple } from '../entities/skill.entity';

export interface ISkillRepository {
  getSkillCategories(): Promise<SkillCategory[]>;
  getArchitecturePrinciples(): Promise<ArchitecturePrinciple[]>;
}
