'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, CalendarDays, PhoneCall, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// Define TypeScript interfaces
interface Content {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    secondary: string;
    features: string[];
  };
}

interface LanguageContext {
  language: 'en' | 'hi';
}

interface StarProps {
  className?: string;
}

// Metadata for SEO
export const metadata = {
  title: 'Maa Baglamukhi Puja | Pandit Manish Sharma at Maa Baglamukhi Mandir',
  description: 'Experience divine Maa Baglamukhi Puja with Pandit Manish Sharma, the best Maa Baglamukhi Pandit, at Maa Baglamukhi Mandir. Book your spiritual consultation today.',
  keywords: [
    'Maa Baglamukhi Mandir',
    'Maa Baglamukhi Puja',
    'Maa Baglamukhi Pandit',
    'Maa Baglamukhi Pujan',
    'Best Maa Pujan',
    'Best Maa Baglamukhi Puja',
    'Pandit Manish Sharma',
    'Baglamukhi Pandit Manish Sharma',
    'Maa Baglamukhi Pandit Manish Sharma',
  ],
  openGraph: {
    title: 'Maa Baglamukhi Puja | Pandit Manish Sharma',
    description: 'Join Pandit Manish Sharma, the best Maa Baglamukhi Pandit, for authentic Maa Baglamukhi Puja at Maa Baglamukhi Mandir.',
    url: 'http://bestmaabaglamukhipandit.com',
    type: 'website',
    images: [
      {
        url: 'http://bestmaabaglamukhipandit.com/images/maa-baglamukhi-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Maa Baglamukhi Puja by Pandit Manish Sharma',
      },
    ],
  },
};

const Hero: React.FC = () => {
  const { language } = useLanguage() as LanguageContext;
  const t: Content = content[language];

  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pandit Manish Sharma',
    jobTitle: 'Best Maa Baglamukhi Pandit',
    description: 'Pandit Manish Sharma, the best Maa Baglamukhi Pandit, offers authentic Maa Baglamukhi Puja and Pujan at Maa Baglamukhi Mandir for spiritual guidance and blessings.',
    url: 'http://bestmaabaglamukhipandit.com',
    image: 'http://bestmaabaglamukhipandit.com/images/maa-baglamukhi-hero.jpg',
    worksFor: {
      '@type': 'Organization',
      name: 'Maa Baglamukhi Mandir',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Your Temple Address',
        addressLocality: 'City',
        addressRegion: 'State',
        postalCode: 'ZIP',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#800000] py-4 md:py-8">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -right-10 -top-10 w-60 h-60 bg-amber-200/10 rounded-full filter blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-amber-200/20">
              <Image
                src="/hero.jpg"
                alt="Pandit Manish Sharma, Best Maa Baglamukhi Pandit"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-3 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-2xl md:text-2xl lg:text-5xl font-bold text-white leading-tight">
              {t.hero.title}
            </h1>

            <p className="text-lg md:text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>

            <p className="text-base md:text-lg text-orange-50 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.hero.description}
            </p>
            <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start w-full">
              {/* Primary CTA Button */}
              <Link 
  href={`https://wa.me/917733994827?text=${encodeURIComponent(
    language === 'hi' 
      ? 'नमस्ते पंडित जी, मुझे पूजा की जानकारी चाहिए' 
      : 'Namaste Pandit ji, I need information about puja'
  )}`} 
  target="_blank"
  className="w-full lg:w-auto"
>
  <Button
    size="lg"
    className="w-full lg:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full flex items-center gap-2 shadow-lg transition-all duration-300"
  >
    <MessageCircle className="h-5 w-5 text-white" />
    {language === 'hi' ? 'व्हाट्सएप पर संपर्क करें' : 'Contact on WhatsApp'}
  </Button>
</Link>

              {/* Secondary CTA Button */}
              <a href={`tel:${content[language].footer.contact.phone}`} className="w-full lg:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full lg:w-auto bg-amber-300 hover:text-[#800000] rounded-full flex items-center gap-2 shadow-lg transition-all duration-300"
                >
                  <PhoneCall className="h-5 w-5" />
                  {t.hero.secondary}
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((item) => (
                    <Image
                      key={item}
                      src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}0.jpg`}
                      alt="Happy devotee of Maa Baglamukhi"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-amber-200"
                    />
                  ))}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-white">5000+ {language === 'en' ? 'Happy Devotees' : 'संतुष्ट भक्त'}</p>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CheckCircle: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const Star: React.FC<StarProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default Hero;