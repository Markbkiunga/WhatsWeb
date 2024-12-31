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
  // title: 'WhatsWeb',
  description: 'Discover a New Way to Connect with WhatsWeb',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            rel="icon"
            href="/favicon.ico"
            type="image/x-icon"
            sizes="any"
          />
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
