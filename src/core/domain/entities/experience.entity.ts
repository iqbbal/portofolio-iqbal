export interface CareerMilestone {
  readonly title: string;
  readonly date: string;
  readonly impact: string;
}

export interface WorkExperience {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly isCurrent: boolean;
  readonly employmentType: 'Full-time' | 'Contract' | 'Internship' | 'Incubation';
  readonly location: string;
  readonly summary: string;
  readonly achievements: string[];
  readonly coreTechnologies: string[];
  readonly milestones?: CareerMilestone[];
}
