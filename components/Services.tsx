'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { servicesDataEn } from '@/data/services-en';
import { servicesDataHi } from '@/data/services-hi';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Heart, Briefcase, Gem, Home, Sun, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  star: Star,
  heart: Heart,
  briefcase: Briefcase,
  gem: Gem,
  home: Home,
  sun: Sun,
};

const slugMap = {
  'Birth Chart Analysis': 'birth-chart-analysis',
  'Marriage Compatibility': 'marriage-compatibility',
  'Career Guidance': 'career-guidance',
  'Gemstone Consultation': 'gemstone-consultation',
  'Vastu Shastra': 'vastu-shastra',
  'Spiritual Healing': 'spiritual-healing',
  'जन्म कुंडली विश्लेषण': 'birth-chart-analysis',
  'विवाह अनुकूलता': 'marriage-compatibility',
  'करियर मार्गदर्शन': 'career-guidance',
  'रत्न परामर्श': 'gemstone-consultation',
  'वास्तु शास्त्र': 'vastu-shastra',
  'आध्यात्मिक चिकित्सा': 'spiritual-healing',
};

export const Services = () => {
  const { language } = useLanguage();
  const servicesData = language === 'en' ? servicesDataEn : servicesDataHi;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            {servicesData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {servicesData.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const slug = slugMap[service.title as keyof typeof slugMap];
            
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-amber-100 hover:border-amber-200">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-lg font-bold text-amber-600">{service.price}</span>
                    <span className="text-sm text-gray-500">{service.duration}</span>
                  </div>
                  <Link href={`/services/${slug}`}>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                      {language === 'en' ? 'Learn More' : 'और जानें'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};