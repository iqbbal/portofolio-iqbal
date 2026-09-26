# 📱 Muhammad Iqbal — Senior Mobile & Frontend Engineer Portfolio

A modern, high-performance developer portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Designed with a **Liquid Glass** aesthetic, dual light/dark themes, and **Domain-Driven Clean Architecture** to showcase enterprise-grade mobile applications and software engineering expertise.

---

## 🌟 Overview

This portfolio showcases the engineering work and production track record of **Muhammad Iqbal**, specializing in cross-platform mobile development (**Flutter**, **Android Native/Kotlin**, **iOS/Swift**) and modern web platforms.

### 🚀 Featured Production Case Studies

1. **Umama HRIS**
   - *Enterprise Employee Self-Service (ESS) & HR Management Platform*
   - Engineered for 1,000+ employees across retail fashion branches and HQ.
   - **Tech Stack:** Flutter 3.x, Flutter BLoC, Hydrated BLoC, Dio + Token Refresh Mutex, Flutter Secure Storage, GoRouter.
2. **DAAI+ Mobile Platform**
   - *Official 24/7 Live Streaming, VOD & Gamified Media Ecosystem*
   - Built for DAAI TV Indonesia with live WebSocket chat rooms, Chewie HLS playback engine, SQLite Drift caching, and Smart TV QR pairing.
   - **Tech Stack:** Flutter 3.x, Riverpod, Drift (SQLite), WebSockets, Chewie / video_player, Mobile Scanner, Firebase.
3. **My Mitsubishi Motors ID 2.0**
   - *Customer Companion & Vehicle Telematics Platform*
   - Workshop service reservations, dealer locator, 24-hour Bengkel Siaga SOS roadside assistance, and warranty tracking.
   - **Tech Stack:** Flutter, BLoC, Google Maps API, Geolocation, REST APIs.
4. **Soca AI / Social Listening Analytics**
   - *Real-time Sentiment & Trend Intelligence Mobile Dashboard*
   - Multi-platform trend tracker, sentiment analysis, AI keyword summarization, and interactive data visualization.
   - **Tech Stack:** Flutter, Riverpod, FL Chart, WebSockets, Dio.
5. **AkselHR (AtlasHR)**
   - *Cloud-Native Multi-Tenant HRIS & Payroll Mobile App*
   - Geofenced GPS attendance, automated overtime calculators, biometric authentication, and digital approval workflows.
6. **Imuni Vaccination Tracker**
   - *HealthTech Child & Adult Immunization Schedule Platform*
   - Medical history tracking, appointment booking, pediatric vaccine calculators, and Doctor/Clinic directories.
7. **GovTech & Regional Infrastructure Applications**
   - SIKAP (Public Complaint Management), SIKAP Mobile (West Kalimantan Provincial Inspectorate), and regional asset monitoring systems.

---

## ✨ Key Portfolio Features

- **Interactive Hardware Mobile Device Frame**:
  - Realistic smartphone bezel and display mockup with custom interactive carousel controls.
  - Interactive screen tab switcher allowing instant exploration of multi-screen application flows.
  - Auto-slide timer with hover-pause functionality.
- **Liquid Glass Design System**:
  - Translucent frosted-glass surfaces (`backdrop-blur-2xl`), subtle specular border highlights, and ambient mesh gradients.
  - Spring-physics motion and fluid micro-interactions powered by Framer Motion.
- **Dual Adaptive Theme (Light & Dark Obsidian)**:
  - Deep obsidian dark palette (`#0B0F17`) paired with elevated glass layers and radiant warm accents.
  - Zero-flicker client hydration script for instant theme loading from system preference or `localStorage`.
- **Architectural Technical Matrix**:
  - Comprehensive breakdown of technical proficiencies across Mobile Core, Reactive State Management, Persistence & Offline-First, Architecture & Design Patterns, and CI/CD Tooling.
- **Enterprise Career Timeline & Project Archive**:
  - Chronologically structured engineering journey with key milestones, impact metrics, and expandable deep-dives.
- **Floating Glass Navbar & Sticky Back-to-Top**:
  - Responsive floating navigation pill with active section spy and scroll-triggered spring return button.
- **Full SEO & Search Optimization**:
  - Dynamic `sitemap.ts` and `robots.ts` generators, rich OpenGraph meta tags, and accessibility-compliant semantic HTML.

---

## 🛠️ Technology Stack & Architecture

### Core Frontend & Web Stack
| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, React 19 Server & Client Components) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict Type Safety) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Variables |
| **Animation & Motion** | [Framer Motion](https://www.framer.com/motion/) (Spring physics, layout transitions, exit animations) |
| **Icons & Brand Assets** | [Lucide React](https://lucide.dev/) + Custom SVG Vector Components |
| **Typography** | [Geist & Geist Mono](https://vercel.com/font) via `next/font` |

### Architecture Principles (Domain-Driven Clean Architecture)

The codebase is organized into strict architectural boundaries ensuring clean separation of concerns:

```
src/
├── app/                                    # Next.js App Router
│   ├── globals.css                         # Global CSS & Tailwind design tokens
│   ├── layout.tsx                          # Root layout, fonts & theme provider
│   ├── page.tsx                            # Composed home page view
│   ├── robots.ts                           # SEO robots configuration
│   └── sitemap.ts                          # SEO dynamic sitemap
├── core/                                   # Domain & Application Core (Framework Agnostic)
│   ├── domain/                             # Enterprise Business Rules & Pure Entities
│   │   ├── entities/                       # Project, Profile, Experience, Skill, Education entities
│   │   └── repositories/                   # Abstract Repository Interfaces
│   ├── application/                        # Application Business Rules
│   │   └── use-cases/                      # Feature Use Cases (GetFeaturedProjects, GetTechnicalMatrix, etc.)
│   └── infrastructure/                     # Data Sources & Concrete Implementations
│       ├── datasources/static/             # Static structured datasets
│       ├── repositories/                   # Concrete repository implementations
│       └── di/                             # Dependency Injection service locator
├── presentation/                           # UI Presentation Layer (Atomic Design)
│   ├── components/                         # Layouts & Page Sections (Hero, Featured, Matrix, Timeline, Contact)
│   ├── design-system/                      # Atomic UI building blocks
│   │   ├── atoms/                          # Buttons, Badges, Icons, ThemeToggle, BackToTop
│   │   ├── molecules/                      # SectionHeader, TechStackGroup, ScreenTabSwitcher, MetricPill
│   │   ├── organisms/                      # ProjectCaseStudyCard, MobileDeviceFrame, ArchivedProjectCard
│   │   └── tokens/                         # Framer motion & theme animation tokens
│   └── providers/                          # React context providers (ThemeProvider)
└── lib/                                    # General helper utilities (cn helper)
```

---

## 👨‍💻 Engineer Profile & Contact

- **Name**: Muhammad Iqbal
- **Role**: Senior Mobile Developer (Flutter, Android Native, iOS)
- **Email**: [muhammad.iqbbal00@gmail.com](mailto:muhammad.iqbbal00@gmail.com)
- **Phone / WhatsApp**: [+62 822 6112 0487](https://wa.me/6282261120487)
- **GitHub**: [github.com/iqbbal](https://github.com/iqbbal)
- **Portfolio Repository**: [github.com/iqbbal/portofolio-iqbal](https://github.com/iqbbal/portofolio-iqbal)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
