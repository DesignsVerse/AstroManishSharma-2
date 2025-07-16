'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { CheckCircle, Star, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const About = () => {
  const { language } = useLanguage();
  const t = content[language];

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
              <img
                src="/panditji.jpg"
                alt="Vedic Astrologer"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <div className="text-white">
                  <p className="text-xs font-semibold tracking-wide">{language === 'en' ? '25+ Years Experience' : '25+ वर्षों का अनुभव'}</p>
                  <h3 className="text-xl font-extrabold mt-1">Pandit Ravi Shankar</h3>
                  <p className="text-amber-200 text-xs mt-1 font-medium">{language === 'en' ? 'Vedic Astrology Specialist' : 'ज्योतिष विशेषज्ञ'}</p>
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
                  {t.about.subtitle}
                </span>
              </motion.div>

              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                <span className="text-[#800000]">{t.about.title.split(' ')[0]}</span>{' '}
                {t.about.title.split(' ').slice(1).join(' ')}
              </h2>

              <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
                {t.about.description}
              </p>
            </div>

            <div className="space-y-3">
              {t.about.points.map((point, index) => (
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