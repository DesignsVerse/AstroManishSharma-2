'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { testimonials } from '@/data/testimonials/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Sparkles } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export const Testimonials = () => {
  const { language } = useLanguage();
  const t = content[language];
  const testimonialData = testimonials[language];

  // Only use first 5 testimonials
  const testimonialItems = testimonialData.items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const autoScrollInterval = 5000; // 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Calculate next index, loop back to 0 if at end
        const nextIndex = prevIndex + testimonialsPerPage;
        return nextIndex >= testimonialItems.length ? 0 : nextIndex;
      });
    }, autoScrollInterval);
    
    return () => clearInterval(interval);
  }, [testimonialItems.length]);

  // Get the current testimonials to display
  const getCurrentTestimonials = () => {
    const endIndex = currentIndex + testimonialsPerPage;
    
    if (endIndex <= testimonialItems.length) {
      return testimonialItems.slice(currentIndex, endIndex);
    } else {
      // If we need to wrap around, get items from current index to end
      // and then from beginning to fill the remaining spots
      const remaining = endIndex - testimonialItems.length;
      return [
        ...testimonialItems.slice(currentIndex),
        ...testimonialItems.slice(0, remaining)
      ];
    }
  };

  const visibleTestimonials = getCurrentTestimonials();

  // Optional: Add manual navigation dots
  const totalSlides = Math.ceil(testimonialItems.length / testimonialsPerPage);
  const currentSlide = Math.floor(currentIndex / testimonialsPerPage);

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
              {testimonialData.subtitle}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            <span className="text-[#800000]">{testimonialData.title.split(' ')[0]}</span> {testimonialData.title.split(' ').slice(1).join(' ')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {visibleTestimonials.map((testimonial: { name: string; text: string; rating: number }, index: number) => (
            <Card 
              key={`${currentIndex}-${index}`} 
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

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * testimonialsPerPage)}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#800000]' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
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