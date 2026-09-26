export type SkillProficiency = 'Expert' | 'Advanced' | 'Intermediate' | 'Exploring';

export interface TechnicalSkill {
  readonly name: string;
  readonly proficiency: SkillProficiency;
  readonly practicalUse: string;
  readonly highlight?: boolean;
}

export interface SkillCategory {
  readonly id: string;
  readonly categoryName: string;
  readonly subtitle: string;
  readonly iconIdentifier: 'smartphone' | 'layers' | 'database' | 'git-branch' | 'cpu' | 'terminal';
  readonly skills: TechnicalSkill[];
}

export interface ArchitecturePrinciple {
  readonly title: string;
  readonly summary: string;
  readonly keywords: string[];
}
