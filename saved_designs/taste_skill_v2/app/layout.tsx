import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mohdumar07.github.io'),
  title: 'Mohd Umar | Software Developer',
  description: 'Portfolio of Mohd Umar, Software Developer at OpCode Academy specializing in microservices backend architecture, MERN stack, Node.js, and modern full-stack web applications.',
  keywords: ['Mohd Umar', 'Software Developer', 'Backend Architecture', 'Microservices', 'MERN Stack', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Portfolio'],
  authors: [{ name: 'Mohd Umar', url: 'https://github.com/MohdUmar07' }],
  creator: 'Mohd Umar',
  openGraph: {
    title: 'Mohd Umar | Software Developer',
    description: 'Software Developer building scalable microservices, backend systems, and modern web applications.',
    url: 'https://github.com/MohdUmar07',
    siteName: 'Mohd Umar Portfolio',
    images: [
      {
        url: '/assets/profile.jpg',
        width: 800,
        height: 800,
        alt: 'Mohd Umar - Software Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#0d0f14',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#0d0f14] text-slate-100 font-sans antialiased selection:bg-yellow-400 selection:text-neutral-950"
      >
        {children}
      </body>
    </html>
  );
}

