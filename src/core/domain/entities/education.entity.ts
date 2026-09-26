export interface EducationItem {
  readonly id: string;
  readonly institution: string;
  readonly degree: string;
  readonly major: string;
  readonly period: string;
  readonly gpa?: string;
  readonly description?: string;
  readonly isFormalDegree: boolean;
}

export interface AchievementItem {
  readonly id: string;
  readonly title: string;
  readonly issuer: string;
  readonly year: string;
  readonly description?: string;
}
