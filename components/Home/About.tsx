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
    subtitle: string;
    title: string;
    description: string;
    points: string[];
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
  title: 'About Pandit Manish Sharma | Best Maa Baglamukhi Pandit at Maa Baglamukhi Mandir',
  description: 'Discover Pandit Manish Sharma, the best Maa Baglamukhi Pandit, offering authentic Maa Baglamukhi Puja and Pujan at Maa Baglamukhi Mandir. Book your divine experience today.',
  keywords: [
    'Maa Baglamukhi Mandir',
    'Maa Baglamukhi Puja',
    'Maa Baglamukhi Pandit',
    'Maa Baglamukhi Pujan',
    'Best Maa Baglamukhi Pandit',
    'Best Maa Baglamukhi Puja',
    'Pandit Manish Sharma',
    'Baglamukhi Pandit Manish Sharma',
    'Maa Baglamukhi Pandit Manish Sharma',
  ],
  openGraph: {
    title: 'About Pandit Manish Sharma | Maa Baglamukhi Mandir',
    description: 'Learn about Pandit Manish Sharma, the renowned Maa Baglamukhi Pandit, offering divine Maa Baglamukhi Puja at Maa Baglamukhi Mandir.',
    url: 'http://bestmaabaglamukhipandit.com/about',
    type: 'website',
    images: [
      {
        url: 'http://bestmaabaglamukhipandit.com/images/pandit-manish-sharma.jpg',
        width: 1200,
        height: 630,
        alt: 'Pandit Manish Sharma at Maa Baglamukhi Mandir',
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
    '@type': 'Person',
    name: 'Pandit Manish Sharma',
    jobTitle: 'Maa Baglamukhi Pandit',
    description: 'Pandit Manish Sharma, the best Maa Baglamukhi Pandit, specializes in authentic Maa Baglamukhi Puja and Pujan at Maa Baglamukhi Mandir.',
    url: 'http://bestmaabaglamukhipandit.com/about',
    image: 'http://bestmaabaglamukhipandit.com/images/pandit-manish-sharma.jpg',
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 bg-[#faf5f0] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 -left-24 w-80 h-80 bg-[#800000] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 -right-24 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#800000]/20 to-amber-500/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white transform group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/panditji.jpg"
                alt="Pandit Manish Sharma, Best Maa Baglamukhi Pandit"
                width={800}
                height={480}
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <div className="text-white">
                  <p className="text-xs font-semibold tracking-wide">{language === 'en' ? '25+ Years Experience' : '25+ वर्षों का अनुभव'}</p>
                  <h3 className="text-xl font-extrabold mt-1">Pandit Manish Sharma</h3>
                  <p className="text-amber-200 text-xs mt-1 font-medium">{language === 'en' ? 'Best Maa Baglamukhi Pandit' : 'सर्वश्रेष्ठ माँ बगलामुखी पंडित'}</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { icon: Star, value: '5000+', label: language === 'en' ? 'Clients' : 'ग्राहक' },
                { icon: BookOpen, value: '25+', label: language === 'en' ? 'Years' : 'वर्ष' },
                { icon: Award, value: '100%', label: language === 'en' ? 'Satisfaction' : 'संतुष्टि' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-3 rounded-lg shadow text-center border border-gray-100 transform hover:scale-105 transition-transform"
                >
                  <div className="w-10 h-10 bg-[#800000]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="h-5 w-5 text-[#800000]" />
                  </div>
                  <h4 className="text-lg font-extrabold text-[#800000]">{stat.value}</h4>
                  <p className="text-xs text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center px-4 py-1.5 bg-[#800000]/10 rounded-full border border-[#800000]/30"
              >
                <Star className="h-4 w-4 text-[#800000]" />
                <span className="ml-2 text-xs font-semibold uppercase tracking-widest text-[#800000]">
                  {language === 'en' ? 'Best Maa Baglamukhi Puja' : 'सर्वश्रेष्ठ माँ बगलामुखी पूजा'}
                </span>
              </motion.div>

              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                <span className="text-[#800000]">Pandit Manish Sharma</span> - Best Maa Baglamukhi Pandit
              </h2>

              <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
                {language === 'en'
                  ? 'Pandit Manish Sharma, the best Maa Baglamukhi Pandit, offers authentic Maa Baglamukhi Puja and Pujan at the sacred Maa Baglamukhi Mandir. With over 25 years of experience, he provides spiritual guidance and transformative puja services.'
                  : 'पंडित मनीष शर्मा, सर्वश्रेष्ठ माँ बगलामुखी पंडित, माँ बगलामुखी मंदिर में प्रामाणिक माँ बगलामुखी पूजा और पूजन प्रदान करते हैं। 25+ वर्षों के अनुभव के साथ, वे आध्यात्मिक मार्गदर्शन और परिवर्तनकारी पूजा सेवाएँ प्रदान करते हैं।'}
              </p>
            </div>

            <div className="space-y-3">
              {[
                language === 'en' ? 'Expert in Maa Baglamukhi Puja and Pujan' : 'माँ बगलामुखी पूजा और पूजन में विशेषज्ञ',
                language === 'en' ? '25+ years of spiritual expertise' : '25+ वर्षों का आध्यात्मिक अनुभव',
                language === 'en' ? 'Conducted at Maa Baglamukhi Mandir' : 'माँ बगलामुखी मंदिर में आयोजित',
                language === 'en' ? 'Trusted by thousands of devotees' : 'हزारों भक्तों द्वारा विश्वसनीय',
              ].map((point, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-3 group"
                >
                  <CheckCircle className="h-5 w-5 text-[#800000] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-800 font-medium text-base group-hover:text-[#800000] transition-colors">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="pt-4">
              <Link href="/about">
                <Button className="bg-[#800000] hover:bg-[#6a0000] text-white px-8 py-5 text-base font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                  {language === 'en' ? 'Learn More About Us' : 'हमारे बारे में अधिक जानें'}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;