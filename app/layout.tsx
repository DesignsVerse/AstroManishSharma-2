import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Home/Header';
import { Footer } from '@/components/Home/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AstroGuide - Expert Astrologer & Spiritual Guide',
  description: 'Discover your destiny through ancient wisdom and celestial guidance. Expert Vedic astrology services in Hindi and English.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='notranslate' lang="en"
    translate="no"
    >
     
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
