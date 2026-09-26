import { IProfileRepository } from '../../domain/repositories/profile.repository.interface';
import { DeveloperProfile } from '../../domain/entities/profile.entity';

export class GetProfileSummaryUseCase {
  constructor(private readonly profileRepository: IProfileRepository) {}

  async execute(): Promise<DeveloperProfile> {
    return this.profileRepository.getProfile();
  }
}
