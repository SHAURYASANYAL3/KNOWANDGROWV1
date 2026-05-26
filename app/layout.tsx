import type { Metadata } from 'next';
import { Kalam, Patrick_Hand } from 'next/font/google';
import './globals.css';

const kalam = Kalam({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-body', display: 'swap' });
const patrick = Patrick_Hand({ subsets: ['latin'], weight: '400', variable: '--font-heading', display: 'swap' });

export const metadata: Metadata = {
  title: 'KNOW & GROW',
  description: 'Rooted in knowledge, committed to society.',
  openGraph: {
    title: 'KNOW & GROW',
    description: 'Engaging young communities with compassionate education, trusted support, and premium social impact.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${kalam.variable} ${patrick.variable} font-body bg-paper text-foreground`}>{children}</body>
    </html>
  );
}

