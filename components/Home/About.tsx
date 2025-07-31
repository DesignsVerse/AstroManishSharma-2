'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { CheckCircle, Star, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';

// Define TypeScript interfaces
interface Content {
  about: {
    title: string;
    subtitle: string;
    description: string;
    stats: Array<{
      number: string;
      label: string;
    }>;
    story: string;
  };
}

interface LanguageContext {
  language: 'en' | 'hi';
}

interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

// Metadata for SEO
export const metadata = {
  title: 'About Maa Baglamukhi Temple | Pandit Manish Sharma at Maa Baglamukhi Mandir',
  description: 'Discover the sacred Maa Baglamukhi Temple in Nalkheda, guided by Pandit Manish Sharma, the best Maa Baglamukhi Pandit. Learn about this ancient Siddhapeeth and its divine significance.',
  keywords: [
    'Maa Baglamukhi Mandir',
    'Maa Baglamukhi Temple Nalkheda',
    'Maa Baglamukhi Puja',
    'Maa Baglamukhi Pandit',
    'Maa Baglamukhi Pujan',
    'Best Maa Baglamukhi Pandit',
    'Best Maa Baglamukhi Puja',
    'Pandit Manish Sharma',
    'Baglamukhi Pandit Manish Sharma',
    'Maa Baglamukhi Pandit Manish Sharma',
    'Baglamukhi Siddhapeeth',
  ],
  openGraph: {
    title: 'About Maa Baglamukhi Temple | Maa Baglamukhi Mandir',
    description: 'Learn about the sacred Maa Baglamukhi Temple in Nalkheda, one of only three Baglamukhi Siddhapeeths in the world, guided by Pandit Manish Sharma.',
    url: 'http://bestmaabaglamukhipandit.com/about',
    type: 'website',
    images: [
      {
        url: 'http://bestmaabaglamukhipandit.com/images/maa-baglamukhi-temple.jpg',
        width: 1200,
        height: 630,
        alt: 'Maa Baglamukhi Temple in Nalkheda',
      },
    ],
  },
};

const About: React.FC = () => {
  const { language } = useLanguage() as LanguageContext;
  const t: Content = content[language];

  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'PlaceOfWorship',
    name: 'Maa Baglamukhi Temple',
    description: 'Sacred Baglamukhi Temple in Nalkheda, one of only three Baglamukhi Siddhapeeths in the world',
    url: 'http://bestmaabaglamukhipandit.com/about',
    image: 'http://bestmaabaglamukhipandit.com/images/maa-baglamukhi-temple.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Maa Baglamukhi Temple, Nalkheda',
      addressLocality: 'Nalkheda',
      addressRegion: 'Madhya Pradesh',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.5937',
      longitude: '76.9629',
    },
  };

  // Animation variants with reduced translation for mobile
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-12 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800000] mb-3">
            {t.about.title}
          </h2>
        </motion.div>
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about.avif"
                alt="Maa Baglamukhi Temple, Nalkheda"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {language === 'en' ? 'Sacred Temple' : 'पवित्र मंदिर'}
                </h3>
                <p className="text-amber-200 text-sm">
                  {language === 'en' ? 'Ancient Siddhapeeth' : 'प्राचीन सिद्धपीठ'}
                </p>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="hidden sm:block absolute -top-3 -right-3 w-16 h-16 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="hidden sm:block absolute -bottom-3 -left-3 w-12 h-12 bg-[#800000] rounded-full opacity-20 animate-pulse delay-1000"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="prose prose-sm sm:prose-base max-w-none">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed text-sm sm:text-base">
                {t.about.story}
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <motion.div variants={itemVariants} className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm border border-amber-100">
                <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">
                  {language === 'en' ? 'Ancient Heritage' : 'प्राचीन विरासत'}
                </span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm border border-amber-100">
                <Star className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">
                  {language === 'en' ? 'Divine Energy' : 'दिव्य ऊर्जा'}
                </span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm border border-amber-100">
                <BookOpen className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">
                  {language === 'en' ? 'Sacred Texts' : 'पवित्र ग्रंथ'}
                </span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm border border-amber-100">
                <Award className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">
                  {language === 'en' ? 'Siddhapeeth Status' : 'सिद्धपीठ स्थिति'}
                </span>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <Link href="/contact">
                <Button className="bg-[#800000] hover:bg-[#6a0000] text-white px-6 py-2 text-sm sm:text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-1.5">
                  <CalendarDays className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>
                    {language === 'en' ? 'Book Your Visit' : 'अपनी यात्रा बुक करें'}
                  </span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CalendarDays: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default About;