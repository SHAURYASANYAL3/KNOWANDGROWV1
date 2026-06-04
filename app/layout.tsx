import type { Metadata } from 'next';
import { Kalam, Patrick_Hand, Caveat } from 'next/font/google';
import './globals.css';

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-heading',
  display: 'swap'
});

const patrickHand = Patrick_Hand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-body',
  display: 'swap'
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-accent',
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: 'KNOW & GROW | Youth Mental Health & Digital Safety Awareness',
    template: '%s | KNOW & GROW'
  },
  description: 'A youth-led initiative focused on mental health awareness, digital safety, drug prevention, and community education.',
  keywords: [
    'youth mental health',
    'digital safety',
    'drug prevention',
    'community education',
    'NGO',
    'youth awareness',
    'wellbeing',
    'safe internet'
  ],
  metadataBase: new URL('https://knowandgrow.vercel.app'),
  alternates: {
    canonical: 'https://knowandgrow.vercel.app'
  },
  verification: {
    google: 'ssbXNjdvojRNdr60tvqoCJKpFcJYFafwPHL9Zso_Yyw'
  },
  openGraph: {
    title: 'KNOW & GROW | Youth Mental Health & Digital Safety Awareness',
    description: 'A youth-led initiative focused on mental health awareness, digital safety, drug prevention, and community education.',
    url: 'https://knowandgrow.vercel.app',
    siteName: 'KNOW & GROW',
    type: 'website',
    locale: 'en_US'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ssbXNjdvojRNdr60tvqoCJKpFcJYFafwPHL9Zso_Yyw" />
      </head>
      <body className={`${kalam.variable} ${patrickHand.variable} ${caveat.variable} font-body bg-paper text-ink relative`}>
        {/* Global ruled lines overlay - very subtle */}
        <div className="pointer-events-none fixed inset-0 z-[-1] bg-lined-paper opacity-50" />
        {children}
      </body>
    </html>
  );
}
