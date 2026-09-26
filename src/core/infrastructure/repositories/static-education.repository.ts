import { IEducationRepository } from '../../domain/repositories/education.repository.interface';
import { EducationItem, AchievementItem } from '../../domain/entities/education.entity';
import { rawEducationData, rawAchievementsData } from '../datasources/static/raw-education.data';

export class StaticEducationRepository implements IEducationRepository {
  async getEducationList(): Promise<EducationItem[]> {
    return [...rawEducationData];
  }

  async getAchievements(): Promise<AchievementItem[]> {
    return [...rawAchievementsData];
  }
}
