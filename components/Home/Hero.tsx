'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, CalendarDays, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// Define TypeScript interfaces
interface Content {
  hero: {
    title: string;
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
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-flex items-center px-5 py-2 bg-white/10 rounded-full border border-amber-200/30 backdrop-blur-sm"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Sparkles className="h-5 w-5 text-amber-200" />
              <span className="ml-2 text-sm font-medium uppercase tracking-widest text-amber-100">
                {language === 'en' ? 'Divine Blessings' : 'दिव्य आशीर्वाद'}
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="text-amber-200">Maa Baglamukhi</span> Puja by Pandit Manish Sharma
            </h1>

            <p className="text-lg md:text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {language === 'en'
                ? 'Experience the divine blessings of Maa Baglamukhi Puja with Pandit Manish Sharma, the best Maa Baglamukhi Pandit, at Maa Baglamukhi Mandir.'
                : 'माँ बगलामुखी मंदिर में सर्वश्रेष्ठ माँ बगलामुखी पंडित, पंडित मनीष शर्मा के साथ माँ बगलामुखी पूजा के दिव्य आशीर्वाद का अनुभव करें।'}
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link href="/book-puja">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-200 to-amber-400 hover:from-amber-300 hover:to-amber-500 text-[#800000] shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
                >
                  <CalendarDays className="mr-2 h-5 w-5" />
                  {language === 'en' ? 'Book Puja Now' : 'अभी पूजा बुक करें'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-amber-200 bg-amber-200/20 text-white rounded-full flex items-center gap-2"
                >
                  <PhoneCall className="h-5 w-5" />
                  {language === 'en' ? 'Contact Us' : 'हमसे संपर्क करें'}
                </Button>
              </Link>
            </motion.div>

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

          <motion.div
            className="relative"
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
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mt-1">Maa Baglamukhi</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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