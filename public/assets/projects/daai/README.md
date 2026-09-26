# DAAI+ Mobile Platform

The official mobile streaming application from **DAAI TV Indonesia**, delivering Video-on-Demand (VOD) content, 24/7 Live TV streaming, educational programs, humanitarian and cultural features, inspiring series, and uplifting news. DAAI+ Mobile Platform blends a meaningful entertainment experience with interactive features, gamified loyalty points, reward vouchers, and seamless Smart TV integration.

---

## 📱 About the App

**DAAI+ Mobile Platform** is designed to deliver an enlightening streaming experience that spreads values of love, compassion, and positivity. In addition to streaming videos and reading articles, users can engage in various interactive activities—such as completing Kindness Missions (*Misi Kebaikan*), daily login streaks, nurturing a virtual plant of kindness, earning reward points, interacting in real-time Live Chat Rooms, and logging into Smart TVs effortlessly using QR code scanning.

---

## ✨ Key Features

### 1. 📺 Video on Demand (VOD) & Program Streaming
- **Comprehensive Content Catalog**: Drama series, documentaries, inspiring talk shows, children & family programs, and humanistic cultural content.
- **Advanced Custom Video Player**: Custom player (*Chewie* & *video_player*) with resolution/quality selection, autoplay for next episodes, and video ad/sponsor overlays.
- **Integrated YouTube Player**: Interactive embedded YouTube playback for designated program formats.
- **Watch History & Retention**: Tracks playback progress and resumes watching from the last recorded timestamp.
- **Watchlist / Saved List**: Save favorite shows, series, and episodes for easy access later.

### 2. 📡 Live TV Streaming & Interactive Chat Room
- **24/7 Live Stream**: Real-time high-definition DAAI TV live stream with adaptive bitrate streaming.
- **Electronic Program Guide (EPG)**: View the current and upcoming live broadcast schedule.
- **Live Interactive Chat Room**:
  - Engage in real-time discussions with other viewers using WebSockets.
  - Send text messages, voice/audio notes, and exclusive reaction stickers.
  - User tier badges (*Bronze, Silver, Gold*).
  - Message replies, moderation, and report features.
  - Local chat history caching powered by SQLite (*Drift*).

### 3. 📰 News & Inspiring Articles
- **Uplifting News**: Articles covering humanitarian efforts, environmental sustainability, healthy lifestyles, and social activities.
- **Category & Tag Filters**: Browse articles categorized by topics and relevant tags.
- **Search & Bookmarks**: Search articles and bookmark them for reading later.
- **Native Sharing**: Share inspiring stories directly to social media or messaging platforms.

### 4. 🎮 Gamification & Loyalty Rewards (Kindness Missions)
- **Kindness Missions (*Misi Kebaikan*)**: Complete daily and weekly missions (watching shows, reading articles, interacting) to earn reward points.
- **Daily Check-in / Login Streak**: Bonus points for consecutive daily app launches.
- **Watering Feature (*Siram Tanaman*)**: Interactive mini-game where users nurture a kindness tree from sprout (stage 0) to harvest to earn bonus points.
- **My Points (*Poin Saya*)**: View accumulated points, earnings breakdown, and redemption history.

### 5. 🛍️ DAAI Shop & Voucher Redemption
- **Rewards Catalog**: Redeem loyalty points for merchant discount coupons, shopping vouchers, or exclusive items.
- **Voucher Wallet**: View active vouchers, expiry dates, and past redemption records.

### 6. 📱 QR Scan & Smart TV Login (Cross-Device Pairing)
- **Instant TV Login**: Seamlessly log into the DAAI TV Smart TV app by scanning a QR code with the mobile camera, eliminating the need to type credentials on a TV screen.

### 7. 🔐 User Authentication & Profile Management
- **Flexible Sign-In Methods**:
  - Email & Password with email verification and password reset flows.
  - Social Sign-In: **Google Sign-In** & **Sign in with Apple**.
- **Profile Management**: Update personal info, avatar upload, content interest preferences (*Interest Onboarding*), multi-language selection (Indonesian / English / Mandarin), membership status, and secure account deletion.

### 8. 🔍 Global Search & Personalization
- **Unified Search**: Search across videos, series, articles, categories, and reward vouchers.
- **Trending Keywords & Recommendations**: Auto-suggestions, trending keywords, and personalized content recommendations.

### 9. 🔔 Real-Time Notifications & Deep Linking
- **Push Notifications**: Broadcast alerts, new episode releases, and promotional updates via Firebase Cloud Messaging (FCM) and scheduled local notifications.
- **Native WebSocket Notifications**: Instant in-app notification badges and updates.
- **Deep Linking & Universal Links**: Seamless routing directly to specific videos, articles, or vouchers via `app_links`.

### 10. 📊 Analytics & Tracking
- **User Behavior & Event Tracking**: Integrated with Firebase Analytics and Meta App Events (Facebook Pixel) for engagement insights.

---

## 🛠️ Tech Stack & Dependencies

The project is built using modern Flutter & Dart ecosystem best practices:

| Category | Technology / Package | Description |
|---|---|---|
| **Core Framework** | Flutter SDK (via FVM), Dart SDK 3.5.4+ | Cross-platform framework targeting Android & iOS |
| **State Management** | `flutter_riverpod` (^2.5.1) | Reactive, modular, and type-safe state management |
| **Networking & HTTP** | `dio` (^5.4.1), `http` (^1.2.2) | HTTP client with custom interceptors, auth token management, and API logging |
| **Real-time & WebSockets** | Native WebSocket Channels | Bi-directional real-time communication for live chat & instant notifications |
| **Local Database & Cache** | `drift` (^2.20.2), `sqlite3_flutter_libs` | Type-safe SQLite relational database for offline chat & caching |
| **Key-Value Storage** | `shared_preferences` (^2.5.5) | Persistent local storage for tokens, user preferences, and theme state |
| **Video & Media Playback** | `video_player` (^2.10.1), `chewie` (^1.10.0), `youtube_player_flutter` (^9.1.3) | Custom playback engine for VOD HLS/MP4 streams and YouTube embeds |
| **Audio & Voice Recording** | `just_audio` (^0.10.5), `record` (^6.2.1) | Voice note recording and audio playback in the chat room |
| **Authentication** | `google_sign_in` (^7.2.0), `sign_in_with_apple` (^7.0.1), `flutter_web_auth_2` (^5.0.3) | OAuth2 social sign-in (Google & Apple) |
| **Hardware & Scanning** | `mobile_scanner` (^7.2.0), `qr_flutter` (^4.1.0), `image_picker` (^1.2.2), `file_picker` (^11.0.2) | Barcode/QR camera scanner for TV pairing, QR generator, and file selection |
| **Notifications & Deep Links** | `firebase_messaging` (^16.4.1), `flutter_local_notifications` (^20.1.0), `app_links` (^6.4.1) | FCM push notifications, scheduled local notifications, and deep link routing |
| **Analytics & Monitoring** | `firebase_analytics` (^12.4.3), `facebook_app_events` (^0.28.0), `logger` (^2.6.2) | User behavior analytics and detailed console logging |
| **UI Components & Assets** | `cached_network_image`, `flutter_svg`, `shimmer`, `flutter_html`, `wakelock_plus` | Cached network images, SVG rendering, shimmer loading effects, and screen wakelock |
| **Code Generation & Linting** | `build_runner` (^2.4.13), `drift_dev` (^2.20.2), `flutter_lints` (^6.0.0) | Drift ORM code generator and static analysis rules |

---

## 📂 Project Architecture (`lib/`)

```
lib/
├── component/          # Reusable custom UI components (buttons, loaders, dialogs, modals)
├── config/             # App configs & third-party integrations (e.g., Google Sign-In)
├── extensions/         # Dart extensions (localization, string formatters, context helpers)
├── models/             # Data models & entity definitions (Video, Article, Mission, Chat, etc.)
├── providers/          # Riverpod state providers & business logic state notifiers
├── repositories/       # Data repositories abstracting data fetching layers
├── screens/            # Application UI Screens
│   ├── auth/           # Login, Registration, Password Recovery, Verification
│   ├── chat/           # Live Chat Room & chat widgets
│   ├── cta_gallery/    # CTA Gallery & promotional banners
│   ├── home/           # Home, Live TV, News, Watchlist, QR Scanner
│   ├── notification/   # Notification center
│   ├── profile/        # Account, Profile, Kindness Missions, Watering Game, Settings
│   ├── shop/           # DAAI Shop, Voucher Catalog, Redemption Activity
│   └── video/          # Video Details, Player, Ads Overlay, Comments
├── services/           # Service layer (Dio API, Auth, WebSocket Chat, Drift DB, Analytics)
│   └── database/       # Drift SQLite schema definitions & generated files
├── utils/              # Helper utilities, formatters, constant colors & themes
├── flavor_config.dart  # Multi-flavor configuration (Base URL, CMS URL, Flavor metadata)
└── main.dart           # Application entrypoint
```

---

## 🚀 Getting Started

> **Note:** This project uses **FVM (Flutter Version Management)**. Always prefix Flutter commands with `fvm flutter`.

### 1. Install Dependencies
```sh
fvm flutter pub get
```

### 2. Generate Code (Drift Database / Code Generators)
When modifying database schemas or models requiring code generation:
```sh
fvm dart run build_runner build --delete-conflicting-outputs
```

---

## 🏗️ Multi-Flavor Environments

The application supports 3 distinct flavor environments:
- **`dev`**: Development environment (`baseUrl = https://api.platform.daai.seavihive.com/api`)
- **`staging`**: Staging environment (`baseUrl = https://api.platform.daaiplus.com/api`)
- **`production`**: Production environment (`baseUrl = https://api.platform.daaiplus.com/api`)

### Running in Debug Mode

#### Android:
```sh
fvm flutter run --flavor dev -t lib/main_dev.dart
fvm flutter run --flavor staging -t lib/main_staging.dart
fvm flutter run --flavor production -t lib/main_production.dart
```

#### iOS:
```sh
fvm flutter run --flavor dev -t lib/main_dev.dart
fvm flutter run --flavor staging -t lib/main_staging.dart
fvm flutter run --flavor production -t lib/main_production.dart
```

---

## 📦 Building Releases (APK & AppBundle)

### Android Build

- **Build APK (Release):**
  ```sh
  # Development
  fvm flutter build apk --flavor dev -t lib/main_dev.dart

  # Staging
  fvm flutter build apk --flavor staging -t lib/main_staging.dart

  # Production
  fvm flutter build apk --flavor production -t lib/main_production.dart
  ```

- **Build AppBundle / AAB (Google Play Store):**
  ```sh
  # Development
  fvm flutter build appbundle --flavor dev -t lib/main_dev.dart

  # Staging
  fvm flutter build appbundle --flavor staging -t lib/main_staging.dart

  # Production
  fvm flutter build appbundle --flavor production -t lib/main_production.dart
  ```

> APK output path: `build/app/outputs/flutter-apk/`  
> AAB output path: `build/app/outputs/bundle/`

---

## 🍎 Building iOS

1. Open Xcode (`ios/Runner.xcworkspace`) and select the target scheme (`dev`, `staging`, or `production`).
2. Alternatively, build via the command line:
   ```sh
   # Development
   fvm flutter build ios --flavor dev -t lib/main_dev.dart

   # Staging
   fvm flutter build ios --flavor staging -t lib/main_staging.dart

   # Production
   fvm flutter build ios --flavor production -t lib/main_production.dart
   ```
3. Create an archive and distribute via Xcode Organizer (*Product > Archive*).

---

## 🚀 Firebase App Distribution (Android)

To automatically build and distribute the APK to Firebase App Distribution testers:

- **Development:**
  ```sh
  cd android && ./gradlew assembleDevRelease appDistributionUploadDevRelease
  ```

- **Staging:**
  ```sh
  cd android && ./gradlew assembleStagingRelease appDistributionUploadStagingRelease
  ```

- **Production:**
  ```sh
  cd android && ./gradlew assembleProductionRelease appDistributionUploadProductionRelease
  ```

> **Important:** Ensure `android/local.properties` contains `firebaseAppIdDev`, `firebaseAppIdStaging`, and `firebaseAppIdProduction` keys.

---

## ⚙️ Flavor Setup Guide

### Android Setup
Flavors are configured in `android/app/build.gradle`:
```groovy
flavorDimensions "app"
productFlavors {
    dev {
        dimension "app"
        applicationIdSuffix ".dev"
        resValue "string", "app_name", "DAAI+ Dev"
    }
    staging {
        dimension "app"
        applicationIdSuffix ".staging"
        resValue "string", "app_name", "DAAI+ Staging"
    }
    production {
        dimension "app"
        resValue "string", "app_name", "DAAI+"
    }
}
```

### iOS Setup
1. Open `ios/Runner.xcworkspace` in Xcode.
2. Create schemes for `dev`, `staging`, and `production` (*Product > Scheme > Manage Schemes...*).
3. Duplicate build configurations in *Runner > Info > Configurations*.
4. Map each scheme to its corresponding build configuration (*Product > Scheme > Edit Scheme...*).