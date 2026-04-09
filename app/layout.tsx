// app/layout.tsx
import type { Metadata } from 'next';
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-spacegrotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Natnael Demelash — Frontend Developer & Automation Engineer',
  description:
    'Portfolio of Natnael Demelash. I build clean Next.js interfaces and n8n automations that save time. Available for freelance.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Natnael Demelash — Frontend Developer & Automation Engineer',
    description:
      'I build clean interfaces and automation that saves time. Check out my projects.',
    url: 'https://your-portfolio-url.vercel.app',
    siteName: 'Natnael Demelash',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
