'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { CheckCircle, Award, Users, Calendar, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = content[language];

  const stats = [
    { icon: Calendar, value: '15+', label: language === 'en' ? 'Years Experience' : 'साल का अनुभव' },
    { icon: Users, value: '5000+', label: language === 'en' ? 'Happy Clients' : 'खुश ग्राहक' },
    { icon: Star, value: '4.9', label: language === 'en' ? 'Average Rating' : 'औसत रेटिंग' },
    { icon: Award, value: '50+', label: language === 'en' ? 'Awards Won' : 'पुरस्कार जीते' },
  ];

  return (
    <main className="py-20 bg-gradient-to-b from-gray-50 to-[#f0e6e0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative text-center space-y-6 mb-20">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-[#800000] rounded-full mr-2"></div>
            <div className="w-12 h-1 bg-[#800000] rounded-full mr-2"></div>
            <span className="text-sm font-medium text-[#800000] uppercase tracking-wider">
              {language === 'en' ? 'About Us' : 'हमारे बारे में'}
            </span>
            <div className="w-12 h-1 bg-[#800000] rounded-full ml-2"></div>
            <div className="w-3 h-3 bg-[#800000] rounded-full ml-2"></div>
          </div>
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t.about.title}
          </motion.h1>
          <motion.p
            className="text-xl text-[#800000] font-medium max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.about.subtitle}
          </motion.p>
        </section>

        {/* Main Content with Sidebar */}
        <section className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Sidebar for Key Points */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-[#800000]/10 shadow-lg bg-white rounded-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#800000] to-amber-600" />
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {language === 'en' ? 'Our Strengths' : 'हमारी ताकत'}
                </h2>
                {t.about.points.map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-[#800000]/5 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-[#800000] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content with Image */}
          <div className="lg:col-span-2">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t.about.description}
                </p>
              </motion.div>
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#800000]/20 to-amber-600/20 rounded-xl blur-xl opacity-30" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/manish.jpg"
                    alt="About"
                    width={600}
                    height={400}
                    className="relative rounded-xl shadow-2xl w-full h-96 object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="relative text-center bg-white border-[#800000]/10 hover:shadow-lg transition-all rounded-xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#800000] to-amber-600" />
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#800000] to-[#a00000] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#800000] mb-2">{stat.value}</div>
                    <div className="text-gray-700 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </section>
      </div>
    </main>
  );
}