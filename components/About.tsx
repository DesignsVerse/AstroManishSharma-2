'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { CheckCircle } from 'lucide-react';

export const About = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {t.about.title}
              </h2>
              <p className="text-xl text-amber-600 font-medium">
                {t.about.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t.about.description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.points.map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-3xl opacity-20"></div>
            <img
              src="https://images.pexels.com/photos/8828688/pexels-photo-8828688.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About"
              className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};