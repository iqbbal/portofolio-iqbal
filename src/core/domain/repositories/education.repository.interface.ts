import { EducationItem, AchievementItem } from '../entities/education.entity';

export interface IEducationRepository {
  getEducationList(): Promise<EducationItem[]>;
  getAchievements(): Promise<AchievementItem[]>;
}
