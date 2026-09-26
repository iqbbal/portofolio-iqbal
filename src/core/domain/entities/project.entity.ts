export interface ProjectMetric {
  readonly label: string;
  readonly value: string;
  readonly detail?: string;
}

export interface ProjectChallenge {
  readonly title: string;
  readonly problem: string;
  readonly engineeringSolution: string;
}

export interface MockupScreen {
  readonly id: string;
  readonly title: string;
  readonly caption: string;
  readonly type: 'dashboard' | 'booking' | 'map' | 'analytics' | 'auth' | 'form' | 'profile';
  readonly accentColor?: string;
  readonly imageSrc?: string;
  readonly previewUiData?: {
    headerTitle?: string;
    subheading?: string;
    badge?: string;
    statusText?: string;
    actionLabel?: string;
    stats?: { label: string; value: string }[];
    listItems?: { title: string; subtitle: string; tag?: string; status?: string }[];
  };
}

export type ProjectPlatform = 'Flutter' | 'Android Native' | 'Kotlin' | 'Java' | 'iOS' | 'Jetpack Compose';

export type ProjectCategory = 
  | 'Automotive' 
  | 'HealthTech' 
  | 'Social Analytics' 
  | 'Enterprise HRIS' 
  | 'GovTech & Infrastructure'
  | 'Streaming & Media';

export interface MobileProject {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly client: string;
  readonly category: ProjectCategory;
  readonly role: string;
  readonly period: string;
  readonly isFeatured: boolean;
  readonly platform: ProjectPlatform[];
  readonly architecturalHighlights: string[];
  readonly summary: string;
  readonly challenges: ProjectChallenge[];
  readonly metrics: ProjectMetric[];
  readonly techStack: {
    readonly languages: string[];
    readonly frameworks: string[];
    readonly stateManagement?: string[];
    readonly localDbAndStorage?: string[];
    readonly architecturePatterns: string[];
    readonly integrations: string[];
  };
  readonly screens: MockupScreen[];
  readonly links?: {
    readonly playStore?: string;
    readonly appStore?: string;
    readonly github?: string;
    readonly liveDemo?: string;
  };
}
