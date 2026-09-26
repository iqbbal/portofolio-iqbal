import { DeveloperProfile } from '../entities/profile.entity';

export interface IProfileRepository {
  getProfile(): Promise<DeveloperProfile>;
}
