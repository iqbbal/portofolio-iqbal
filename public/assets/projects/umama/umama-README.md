# Umama Mobile Super App (Umama HRIS) 👠✨

A modern, scalable, and feature-rich Flutter super application for **Umama HRIS & Internal Management System** built with **BLoC (Business Logic Component)** architecture, Dependency Injection, and Domain-Driven Design (DDD) Clean Architecture principles.

---

## 📱 Application & Package Identifiers

* **Package Name:** `umama_mobile_super_app`
* **Application ID / Bundle ID (Prod):** `com.umama.hr`
* **Application ID / Bundle ID (Dev):** `com.umama.hr.dev`
* **Display Name:** `Umama HRIS` / `Umama HRIS Dev`

---

## 🎨 Design System & Umama Red Palette

The app features an elegant, premium design language blending **Deep Red**, **Crisp White**, and **Sleek Charcoal/Black**:

```
/* Red Umama Palette (From Brand Silk Artwork) */
--red-umama-50:  #EBCFCE /* Lightest Cream / Surface Tint */
--red-umama-75:  #EBCFCE
--red-umama-100: #D19290 /* Soft Dusty Rose */
--red-umama-200: #C05452 /* Muted Rose / Terracotta */
--red-umama-300: #92302E /* Deep Brick Rose */
--red-umama-400: #C50804 /* Crimson Highlight */
--red-umama-500: #B70603 /* Primary CTA & Action Buttons */
--red-umama-600: #A20705 /* Base Brand Red */
--red-umama-700: #8C0806 /* Rich Maroon */
--red-umama-800: #720807 /* Deep Maroon */
--red-umama-900: #5A0606 /* Shadow Maroon */
--red-umama-950: #450505 /* Deepest Maroon */
```

---

## 🛠 Tech Stack & Libraries

* **SDK & Environment:**
  * Flutter SDK (Managed via **FVM**)
  * Dart 3.x
* **State Management:**
  * `flutter_bloc` / `bloc_concurrency` (Core state management)
  * `hydrated_bloc` (Persistent global states: Theme, Auth Session, Translations)
* **Network & API:** 
  * `dio` (HTTP client with auth token interceptors & refresh handlers)
* **Dependency Injection (DI):** 
  * `get_it` (Service locator for clean decoupling)
* **Routing:** 
  * `go_router` (Declarative routing with auth guard redirects)
* **Storage & Caching:** 
  * `flutter_secure_storage` (Encrypted token storage)
  * `shared_preferences`
* **Data Modeling & Code Generation:** 
  * `freezed` & `freezed_annotation` (Immutable models & Unions)
  * `json_serializable` & `json_annotation`
  * `build_runner`
* **Functional Programming:** 
  * `dartz` (Either `Left`/`Right` error handling)
* **Localization (i18n):**
  * `easy_localization` (Dynamic multi-language support from JSON assets)
* **Notifications & Services:**
  * `firebase_core`, `firebase_crashlytics`, `firebase_messaging`, `flutter_local_notifications`

---

## 📂 Project Structure (Feature-First Clean Architecture)

```
lib/
├── main.dart                   # Shared App Initialization
├── main_dev.dart               # Dev Flavor Entry Point
├── main_prod.dart              # Production Flavor Entry Point
├── src/
│   ├── core/                   # ⚙️ Core Modules (Global & Shared)
│   │   ├── blocs/              # Global Blocs (Theme, Translate, AuthSession)
│   │   ├── configs/            # Theme (AppColors, AppTheme), Firebase, Flavors
│   │   ├── constants/          # Static constants & Locales
│   │   ├── network/            # Dio configs, interceptors, Exception handlers
│   │   ├── routes/             # GoRouter configurations
│   │   ├── services/           # Push notifications, WebSocket
│   │   ├── utils/              # Helper extensions, loggers, AppInfo
│   │   └── widgets/            # Reusable Core UI Widgets
│   │
│   ├── di/                     # 💉 Central Dependency Injection Aggregator
│   │   └── service_locator.dart
│   │
│   └── features/               # 🚀 Modular Feature Packages
│       ├── auth/               # Authentication & OTP Login
│       ├── attendance/         # Attendance tracking & Geofencing
│       ├── documents/          # Employee documents
│       ├── home/               # Dashboard & Quick Actions
│       ├── inbox/              # Approval & notifications inbox
│       ├── kasbon_request/     # Cash advance requests
│       ├── kasbon_settlement/  # Cash advance settlements
│       ├── leave_request/      # Leave requests & balances
│       ├── main_navigation/    # Floating Navigation Bar
│       ├── notification/       # Push notifications
│       ├── payslip/            # Salary slip & breakdown
│       ├── personal_report/    # Personal attendance reports
│       ├── profile/            # Employee profile & digital signature
│       └── reimbursement_request/ # Expense reimbursements
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **FVM** installed. All Flutter and Dart commands should be prefixed with `fvm`.

### 2. Dependencies & Code Generation
```bash
# Retrieve dependencies
fvm flutter pub get

# Generate immutable models and JSON parsers
fvm dart run build_runner build --delete-conflicting-outputs
```

### 3. Generate App Launcher Icons & Splash Screen
```bash
# Generate launcher icons
fvm dart run flutter_launcher_icons

# Generate native splash screen
fvm dart run flutter_native_splash:create
```

### 4. Running the Application
```bash
# Running Dev Flavor
fvm flutter run --flavor dev -t lib/main_dev.dart

# Running Production Flavor
fvm flutter run --flavor prod -t lib/main_prod.dart
```

### 5. Running Tests & Code Analysis
```bash
# Run static analysis
fvm flutter analyze

# Run unit and widget test suite
fvm flutter test
```

---

## 📝 Conventions / Code Rules

1. **Clean Architecture Boundaries**: Presentation components must never bypass the Data Layer. Always use `UseCase` or `Repository`.
2. **Immutable States**: All state classes and models must use `@freezed` or `Equatable`.
3. **FVM Command Enforcement**: Always prefix flutter/dart CLI operations with `fvm`.
4. **Theme & Localization**: Always read colors from `Theme.of(context)` / `AppColors` and wrap user-facing strings with `tr()`.

---
_Happy Coding!_ 👠✨
