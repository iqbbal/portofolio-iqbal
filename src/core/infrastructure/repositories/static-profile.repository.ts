import { IProfileRepository } from '../../domain/repositories/profile.repository.interface';
import { DeveloperProfile } from '../../domain/entities/profile.entity';
import { rawProfileData } from '../datasources/static/raw-profile.data';

export class StaticProfileRepository implements IProfileRepository {
  async getProfile(): Promise<DeveloperProfile> {
    return { ...rawProfileData };
  }
}
