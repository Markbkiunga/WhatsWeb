import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { ConvexClientProvider } from '@/providers/convex-client-provider';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    default: 'WhatsWeb - Modern WhatsApp Clone',
    template: '%s | WhatsWeb',
  },
  description:
    'A modern WhatsApp clone built with Next.js, providing real-time messaging and chat features.',
  keywords:
    'whatsapp clone, messaging app, real-time chat, next.js, web application',
  authors: [
    {
      name: 'Your Name',
      url: 'https://github.com/Markbkiunga',
    },
  ],
  creator: 'Markbkiunga',
  publisher: 'Markbkiunga',

  openGraph: {
    title: 'WhatsWeb - Modern WhatsApp Clone',
    description:
      'A modern WhatsApp clone built with Next.js, providing real-time messaging and chat features.',
    url: 'https://whatsweb.com',
    siteName: 'WhatsWeb',
    images: [
      {
        url: '/whatsapp.png',
        width: 1200,
        height: 630,
        alt: 'WhatsWeb Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'WhatsWeb - Modern WhatsApp Clone',
    description:
      'A modern WhatsApp clone built with Next.js, providing real-time messaging and chat features.',
    images: ['/whatsapp.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  verification: {
    google: 'YOUR_GOOGLE_SITE_VERIFICATION',
    yandex: 'YOUR_YANDEX_VERIFICATION',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Favicons */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />

          {/* Apple Touch */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />

          {/* Android Chrome */}
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/android-chrome-512x512.png"
          />

          {/* Manifest */}
          <link rel="manifest" href="/site.webmanifest" />

          {/* Windows Meta */}
          <meta name="msapplication-TileColor" content="#25D366" />
          <meta name="theme-color" content="#25D366" />

          <title>WhatsWeb</title>
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ConvexClientProvider>
              {children}
              <Analytics />
              <Toaster />
            </ConvexClientProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
