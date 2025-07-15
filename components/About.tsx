'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { CheckCircle, Star, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const About = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-20 bg-[#faf5f0] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-[#800000] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="absolute -left-10 -top-10 w-64 h-64 bg-[#800000]/10 rounded-full filter blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1581793746483-042aacb83ce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Vedic Astrologer"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white">
                  <p className="text-sm font-medium">{language === 'en' ? '25+ Years Experience' : '25+ वर्षों का अनुभव'}</p>
                  <h3 className="text-xl font-bold mt-1">Pandit Ravi Shankar</h3>
                  <p className="text-amber-200 text-sm mt-1">{language === 'en' ? 'Vedic Astrology Specialist' : 'ज्योतिष विशेषज्ञ'}</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-100">
                <div className="w-12 h-12 bg-[#800000]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="h-6 w-6 text-[#800000]" />
                </div>
                <h4 className="text-xl font-bold text-[#800000]">5000+</h4>
                <p className="text-sm text-gray-600">{language === 'en' ? 'Clients' : 'ग्राहक'}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-100">
                <div className="w-12 h-12 bg-[#800000]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="h-6 w-6 text-[#800000]" />
                </div>
                <h4 className="text-xl font-bold text-[#800000]">25+</h4>
                <p className="text-sm text-gray-600">{language === 'en' ? 'Years' : 'वर्ष'}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-100">
                <div className="w-12 h-12 bg-[#800000]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6 text-[#800000]" />
                </div>
                <h4 className="text-xl font-bold text-[#800000]">100%</h4>
                <p className="text-sm text-gray-600">{language === 'en' ? 'Satisfaction' : 'संतुष्टि'}</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-[#800000]/10 rounded-full border border-[#800000]/20">
                <Star className="h-5 w-5 text-[#800000]" />
                <span className="ml-2 text-sm font-medium uppercase tracking-wider text-[#800000]">
                  {t.about.subtitle}
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                <span className="text-[#800000]">{t.about.title.split(' ')[0]}</span> {t.about.title.split(' ').slice(1).join(' ')}
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.description}
              </p>
            </div>

            <div className="space-y-4">
              {t.about.points.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-[#800000] mt-1 flex-shrink-0" />
                  <span className="text-gray-800 font-medium text-lg">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/about">
                <Button className="bg-[#800000] hover:bg-[#6a0000] text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                  {language === 'en' ? 'Learn More About Us' : 'हमारे बारे में अधिक जानें'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};