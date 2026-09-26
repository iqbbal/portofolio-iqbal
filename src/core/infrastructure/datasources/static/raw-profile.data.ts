import { DeveloperProfile } from '../../../domain/entities/profile.entity';

export const rawProfileData: DeveloperProfile = {
  fullName: 'Muhammad Iqbal',
  roleTitle: 'Mobile Developer',
  headline: 'Experienced Mobile Developer with 5+ years of expertise in building native Android and cross-platform applications using Kotlin, Java, and Flutter. Proven track record in delivering scalable, user-focused apps—many of which were government-related projects. Skilled in modern architectures (MVVM/MVP), RESTful APIs, state management, and CI/CD. Passionate about clean code, performance optimization, and continuous learning.',
  location: 'Cimahi, Jawa Barat, Indonesia',
  email: 'muhammad.iqbbal00@gmail.com',
  phone: '+62 851 5548 8455',
  avatarUrl: '/assets/images/profile/iqbal-profile.JPEG',
  availabilityStatus: {
    isAvailable: true,
    text: 'Available for Full-time & Key Projects',
    type: 'Full-time',
  },
  bioSummary: [
    'Experienced Mobile Developer with 4+ years of hands-on expertise engineering production-grade native Android and cross-platform mobile solutions using Kotlin, Java, and Flutter.',
    'Specialized in architecting robust offline-first synchronization pipelines (Room DB, Mapbox), complex reactive state management (BLoC, Riverpod), and modular Clean Architecture.',
    'Proven track record delivering enterprise-grade platforms for multinational automotive brands (Mitsubishi Motors ID), high-traffic HealthTech apps (Bumame, Imuni), and mission-critical government systems (Kementerian PUPR, OJK, BPH Migas, Setneg, KKP).',
  ],
  technicalPhilosophy: 'I treat mobile engineering as a craft where architectural predictability, sub-second UI responsiveness, battery/memory consciousness, and offline resilience converge to create seamless digital products.',
  quickStats: [
    {
      label: 'Experience',
      value: '5+ Years',
      description: 'Native Android & Flutter in Enterprise and GovTech',
    },
    {
      label: 'Apps Delivered',
      value: '10+ Apps',
      description: 'Enterprise, Consumer, and Government scale',
    },
    {
      label: 'Core Stack',
      value: 'Flutter & Kotlin',
      description: 'BLoC, Riverpod, MVVM, Clean Architecture, Room DB',
    },
    {
      label: 'Code Quality',
      value: 'Clean & Scalable',
      description: 'Modular architectures with offline-first resilience',
    },
  ],
  socialLinks: [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muhammadiqbbal/',
      label: 'linkedin.com/in/muhammadiqbbal',
      iconIdentifier: 'linkedin',
      isPrimaryCta: false,
    },
    {
      platform: 'Email',
      url: 'mailto:muhammad.iqbbal00@gmail.com',
      label: 'muhammad.iqbbal00@gmail.com',
      iconIdentifier: 'mail',
      isPrimaryCta: true,
    },
    {
      platform: 'WhatsApp',
      url: 'https://wa.me/6285155488455',
      label: '+62 851 5548 8455',
      iconIdentifier: 'phone',
      isPrimaryCta: false,
    },
    {
      platform: 'GitHub',
      url: 'https://github.com',
      label: 'GitHub Profile',
      iconIdentifier: 'github',
      isPrimaryCta: false,
    },
  ],
  resumeDownloadUrl: '/assets/resume/Muhammad_Iqbal_Mobile_Developer_Resume.pdf',
};
