export interface SocialLink {
  readonly platform: 'LinkedIn' | 'GitHub' | 'Email' | 'WhatsApp' | 'Telegram';
  readonly url: string;
  readonly label: string;
  readonly iconIdentifier: string;
  readonly isPrimaryCta?: boolean;
}

export interface QuickStat {
  readonly label: string;
  readonly value: string;
  readonly description: string;
}

export interface DeveloperProfile {
  readonly fullName: string;
  readonly roleTitle: string;
  readonly headline: string;
  readonly location: string;
  readonly email: string;
  readonly phone: string;
  readonly avatarUrl?: string;
  readonly availabilityStatus: {
    readonly isAvailable: boolean;
    readonly text: string;
    readonly type: 'Full-time' | 'Contract' | 'Freelance' | 'Open for Discussion';
  };
  readonly bioSummary: string[];
  readonly technicalPhilosophy: string;
  readonly quickStats: QuickStat[];
  readonly socialLinks: SocialLink[];
  readonly resumeDownloadUrl: string;
}
