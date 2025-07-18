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
              {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mt-1">Maa Baglamukhi</h3>
                </div>
              </div> */}
            </div>
          </motion.div>

          <motion.div
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="text-amber-200">Maa Baglamukhi</span> Puja by Pandit Manish Sharma
            </h1>

            <p className="text-lg md:text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {language === 'en'
                ? 'Experience the divine blessings of Maa Baglamukhi Puja with Pandit Manish Sharma, the best Maa Baglamukhi Pandit, at Maa Baglamukhi Mandir.'
                : 'माँ बगलामुखी मंदिर में सर्वश्रेष्ठ माँ बगलामुखी पंडित, पंडित मनीष शर्मा के साथ माँ बगलामुखी पूजा के दिव्य आशीर्वाद का अनुभव करें।'}
            </p>

            <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start w-full">
              {/* Call Now Button */}
              <a href="tel:+911234567890" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto">
                <Button
                  size="lg"
                  className="w-full lg:w-auto bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-yellow-500 text-white rounded-full flex items-center gap-2 shadow-lg transition-all duration-300"
                >
                  <PhoneCall className="h-5 w-5 text-white" />
                  {language === 'en' ? 'Call Now' : 'अभी कॉल करें'}
                </Button>
              </a>

              {/* WhatsApp Button */}
              <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto">
                <Button
                  size="lg"
                  className="w-full lg:w-auto bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full flex items-center gap-2 shadow-lg transition-all duration-300"
                >
                  {/* WhatsApp SVG icon */}
                  <svg className="h-5 w-5 text-white" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.36 7.13L4 29l7.13-2.36A11.93 11.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.89-.58-5.51-1.67l-.39-.25-4.23 1.4 1.4-4.23-.25-.39A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.98 2.67 1.12 2.85c.14.18 1.93 2.95 4.68 4.02.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
                  </svg>
                  WhatsApp
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