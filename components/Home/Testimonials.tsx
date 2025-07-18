'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { testimonials } from '@/data/testimonials/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Sparkles } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Testimonials = () => {
  const { language } = useLanguage();
  const t = content[language];
  const testimonialData = testimonials[language];
  const testimonialItems = testimonialData.items;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const autoScrollInterval = 5000; // 5 seconds

  useEffect(() => {
    // Check if mobile view
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    checkIfMobile();

    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Determine number of testimonials per page based on screen size
  const getTestimonialsPerPage = () => {
    return isMobile ? 1 : 3;
  };

  useEffect(() => {
    const testimonialsPerPage = getTestimonialsPerPage();
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Calculate next index, loop back to 0 if at end
        const nextIndex = prevIndex + testimonialsPerPage;
        return nextIndex >= testimonialItems.length ? 0 : nextIndex;
      });
    }, autoScrollInterval);
    
    return () => clearInterval(interval);
  }, [testimonialItems.length, isMobile]);

  // Get the current testimonials to display
  const getCurrentTestimonials = () => {
    const testimonialsPerPage = getTestimonialsPerPage();
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
  const testimonialsPerPage = getTestimonialsPerPage();
  const totalSlides = Math.ceil(testimonialItems.length / testimonialsPerPage);
  const currentSlide = Math.floor(currentIndex / testimonialsPerPage);

  return (
    <section className="py-12 md:py-20 bg-[#faf5f0] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#800000] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 md:space-y-6 mb-8 md:mb-16">
          <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-[#800000]/10 rounded-full border border-[#800000]/20">
            <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-[#800000]" />
            <span className="ml-2 text-xs md:text-sm font-medium uppercase tracking-wider text-[#800000]">
              {testimonialData.subtitle}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            <span className="text-[#800000]">{testimonialData.title.split(' ')[0]}</span> {testimonialData.title.split(' ').slice(1).join(' ')}
          </h2>
        </div>
        
        {/* Mobile view - single card with swipe animation */}
        {isMobile ? (
          <div className="relative h-96 overflow-hidden md:hidden">
            {testimonialItems.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                initial={{ x: 100, opacity: 0 }}
                animate={{ 
                  x: index === currentIndex ? 0 : (index < currentIndex ? -100 : 100),
                  opacity: index === currentIndex ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-[#800000]/30 group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="space-y-2 flex-grow">
                      <div className="w-10 h-10 bg-[#800000]/10 rounded-full flex items-center justify-center">
                        <Quote className="h-5 w-5 text-[#800000]" />
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                    </div>
                    
                    <div className="pt-2 border-t border-gray-100">
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
                              className={`h-4 w-4 ${i < testimonial.rating ? 'text-[#800000] fill-[#800000]' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Desktop view - 3 cards with smooth transition */
          <div className="hidden md:grid md:grid-cols-3 gap-6 transition-all duration-500">
            {visibleTestimonials.map((testimonial, index) => (
              <Card 
                key={`${currentIndex}-${index}`} 
                className="bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-[#800000]/30 group hover:shadow-lg transition-all duration-300 h-full"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="space-y-2 flex-grow">
                    <div className="w-10 h-10 bg-[#800000]/10 rounded-full flex items-center justify-center">
                      <Quote className="h-5 w-5 text-[#800000]" />
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-100">
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
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-[#800000] fill-[#800000]' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Navigation dots */}
        <div className="flex justify-center mt-6 md:mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * testimonialsPerPage)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${currentSlide === index ? 'bg-[#800000] scale-125' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-8 md:mt-16">
          <div className="inline-flex items-center space-x-1 md:space-x-2 bg-[#800000]/10 px-4 py-2 md:px-6 md:py-3 rounded-full">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-[#800000] fill-[#800000]" />
            ))}
            <span className="text-sm md:text-lg font-medium text-[#800000]">
              {language === 'en' ? '500+ 5-Star Reviews' : '500+ 5-स्टार समीक्षाएँ'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};