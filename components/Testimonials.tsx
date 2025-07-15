'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Sparkles } from 'lucide-react';

export const Testimonials = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-20 bg-[#faf5f0] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#800000] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#800000]/10 rounded-full border border-[#800000]/20">
            <Sparkles className="h-5 w-5 text-[#800000]" />
            <span className="ml-2 text-sm font-medium uppercase tracking-wider text-[#800000]">
              {t.testimonials.subtitle}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            <span className="text-[#800000]">{t.testimonials.title.split(' ')[0]}</span> {t.testimonials.title.split(' ').slice(1).join(' ')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-[#800000]/30 group hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-[#800000]/10 rounded-full flex items-center justify-center">
                    <Quote className="h-6 w-6 text-[#800000]" />
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < testimonial.rating ? 'text-[#800000] fill-[#800000]' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-[#800000]/10 px-6 py-3 rounded-full">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-[#800000] fill-[#800000]" />
            ))}
            <span className="text-lg font-medium text-[#800000]">
              {language === 'en' ? '500+ 5-Star Reviews' : '500+ 5-स्टार समीक्षाएँ'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};