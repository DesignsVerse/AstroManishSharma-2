'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { CheckCircle, Award, Users, Calendar, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            {t.about.title}
          </h1>
          <p className="text-xl text-amber-600 font-medium">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <p className="text-gray-600 leading-relaxed text-lg">
              {t.about.description}
            </p>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}