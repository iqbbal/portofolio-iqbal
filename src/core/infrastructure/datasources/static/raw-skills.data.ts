import { SkillCategory, ArchitecturePrinciple } from '../../../domain/entities/skill.entity';

export const rawSkillCategoriesData: SkillCategory[] = [
  {
    id: 'mobile-core',
    categoryName: 'Mobile Core & Frameworks',
    subtitle: 'Cross-platform and native mobile toolchains',
    iconIdentifier: 'smartphone',
    skills: [
      { name: 'Flutter & Dart', proficiency: 'Expert', practicalUse: 'Production apps across automotive, health, HRIS & analytics', highlight: true },
      { name: 'Kotlin', proficiency: 'Expert', practicalUse: 'Modern native Android, coroutines, Flow & Jetpack libraries', highlight: true },
      { name: 'Java', proficiency: 'Expert', practicalUse: 'Enterprise Android legacy systems, high-performance background services', highlight: true },
      { name: 'Android SDK & Jetpack', proficiency: 'Expert', practicalUse: 'Room, ViewModel, LiveData, WorkManager, CameraX, Navigation', highlight: true },
      { name: 'Jetpack Compose / CMP', proficiency: 'Exploring', practicalUse: 'Modern declarative UI & multiplatform exploration' },
      { name: 'Swift & SwiftUI', proficiency: 'Exploring', practicalUse: 'Foundational iOS native integrations & platform channels' },
    ],
  },
  {
    id: 'state-management',
    categoryName: 'Reactive State Management',
    subtitle: 'Predictable, testable, unidirectional data flow architectures',
    iconIdentifier: 'layers',
    skills: [
      { name: 'Flutter BLoC', proficiency: 'Expert', practicalUse: 'Standard architecture in Mitsubishi Motors ID & enterprise projects', highlight: true },
      { name: 'Riverpod', proficiency: 'Advanced', practicalUse: 'Compile-safe dependency injection and reactive state in Bumame & Daai+ App' },
      { name: 'RxJava & RxKotlin', proficiency: 'Expert', practicalUse: 'Reactive event pipelines and asynchronous streams in native Android apps', highlight: true },
      { name: 'Android LiveData & Flow', proficiency: 'Expert', practicalUse: 'Lifecycle-aware reactive streams in modern Kotlin native apps' },
      { name: 'GetX', proficiency: 'Advanced', practicalUse: 'Lightweight reactive state and route management in quick prototypes' },
      { name: 'MobX & Provider', proficiency: 'Advanced', practicalUse: 'Observable state and context-based dependency trees' },
    ],
  },
  {
    id: 'persistence-offline',
    categoryName: 'Persistence & Offline-First',
    subtitle: 'Resilient local storage and data synchronization pipelines',
    iconIdentifier: 'database',
    skills: [
      { name: 'Room Database (SQLite)', proficiency: 'Expert', practicalUse: 'Offline GIS road damage mapping in JICA-PUPR inspection system', highlight: true },
      { name: 'Hive & Isar DB', proficiency: 'Expert', practicalUse: 'Blazing fast key-value and object storage for Flutter apps' },
      { name: 'Flutter Secure Storage & Encrypted SharedPrefs', proficiency: 'Expert', practicalUse: 'Hardware-backed biometric tokens, session keys & AES encryption' },
      { name: 'Two-Way Offline Sync', proficiency: 'Advanced', practicalUse: 'Conflict resolution, idempotent batch queues, background retry workers' },
    ],
  },
  {
    id: 'architecture-patterns',
    categoryName: 'Architecture & Design Patterns',
    subtitle: 'Maintainable, clean, and decoupled codebases',
    iconIdentifier: 'cpu',
    skills: [
      { name: 'Clean Architecture (Uncle Bob)', proficiency: 'Expert', practicalUse: 'Strict layer separation (Domain, Data, Presentation) across all projects', highlight: true },
      { name: 'MVVM & MVP Patterns', proficiency: 'Expert', practicalUse: 'Standardized architecture in all native Android and Flutter initiatives' },
      { name: 'Repository & Service Pattern', proficiency: 'Expert', practicalUse: 'Abstracting data sources and ensuring unit-testability' },
      { name: 'Dependency Injection (DI)', proficiency: 'Advanced', practicalUse: 'GetIt, injectable, Hilt/Dagger, Riverpod providers' },
    ],
  },
  {
    id: 'integrations-devops',
    categoryName: 'Integrations & Tooling',
    subtitle: 'Hardware APIs, location services, analytics, and deployment',
    iconIdentifier: 'terminal',
    skills: [
      { name: 'Firebase App Distribution & FCM', proficiency: 'Expert', practicalUse: 'Automated tester distribution, Crashlytics & Cloud Messaging', highlight: true },
      { name: 'Mapbox & Google Maps SDK', proficiency: 'Expert', practicalUse: 'Custom GIS vector mapping, GPS geofencing & offline tile caching' },
      { name: 'RESTful APIs & WebSockets', proficiency: 'Expert', practicalUse: 'Retrofit2, Dio, OkHttp3 with custom interceptors and SSL pinning' },
      { name: 'Git & Version Control', proficiency: 'Expert', practicalUse: 'GitFlow, trunk-based branching, pull request reviews' },
      { name: 'CI/CD & CodeMagic', proficiency: 'Intermediate', practicalUse: 'Automated multi-flavor build & distribution pipelines' },
    ],
  },
];

export const rawArchitecturePrinciplesData: ArchitecturePrinciple[] = [
  {
    title: 'Separation of Concerns & Unidirectional Data Flow',
    summary: 'Decoupling business logic from UI rendering ensures zero UI regressions when business requirements evolve.',
    keywords: ['Clean Architecture', 'BLoC Pattern', 'Pure Domain Entities'],
  },
  {
    title: 'Offline-First Resilience as Default',
    summary: 'Apps must function predictably under erratic mobile network conditions, prioritizing local cache and queued background sync.',
    keywords: ['Room Database', 'Hive', 'WorkManager', 'Optimistic UI'],
  },
  {
    title: 'Hardware & Memory Efficiency',
    summary: 'Careful lifecycle management, image downsampling, and leak prevention to guarantee silky smooth 60/120 FPS on all device tiers.',
    keywords: ['Memory Profiling', 'Sub-sampling Bitmaps', 'Lifecycle Awareness'],
  },
  {
    title: 'Defensive Security & Integrity',
    summary: 'Protecting user data with biometric vaults, SSL pinning, mock location detection, and encrypted local storage.',
    keywords: ['Biometrics', 'SSL Pinning', 'Anti-Mock GPS', 'SQLCipher'],
  },
];
