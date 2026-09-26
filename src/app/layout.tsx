import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/presentation/providers/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://muhammadiqbal.dev'),
  title: 'Muhammad Iqbal — Senior Mobile Developer',
  description:
    'Experienced Mobile Developer with 5+ years of expertise architecting high-performance mobile applications with Flutter, Kotlin, Java, and Clean Architecture. Shipped solutions for Mitsubishi Motors, Bumame, NoLimit, and Ministry of PUPR.',
  keywords: [
    'Muhammad Iqbal',
    'Mobile Developer',
    'Flutter Developer',
    'Android Developer',
    'Kotlin',
    'Java',
    'Clean Architecture',
    'BLoC',
    'Riverpod',
    'Room DB',
    'Mapbox',
    'Indonesia Mobile Developer',
    'Bandung Developer',
  ],
  authors: [{ name: 'Muhammad Iqbal', url: 'https://www.linkedin.com/in/muhammadiqbbal/' }],
  creator: 'Muhammad Iqbal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muhammadiqbal.dev',
    title: 'Muhammad Iqbal — Senior Mobile Developer',
    description:
      'Crafting scalable, high-performance mobile applications with resilient offline-first architectures and refined user experiences.',
    siteName: 'Muhammad Iqbal Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Iqbal — Senior Mobile Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Iqbal — Senior Mobile Developer',
    description:
      'Mobile Developer specializing in Flutter, Native Android (Kotlin/Java), Clean Architecture, and Offline-First systems.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Muhammad Iqbal',
              jobTitle: 'Mobile Developer',
              url: 'https://muhammadiqbal.dev',
              sameAs: ['https://www.linkedin.com/in/muhammadiqbbal/'],
              worksFor: {
                '@type': 'Organization',
                name: 'PT Radya Anugrah Digital',
              },
              knowsAbout: [
                'Flutter',
                'Android Development',
                'Kotlin',
                'Java',
                'BLoC Architecture',
                'Clean Architecture',
                'Offline-First Sync',
                'Room Database',
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-ambient-mesh text-slate-900 dark:text-slate-100 antialiased selection:bg-orange-500/20 selection:text-slate-900">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
