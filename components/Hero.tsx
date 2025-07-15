'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, CalendarDays, PhoneCall } from 'lucide-react';

export const Hero = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="relative overflow-hidden bg-[#faf5f0] py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#800000] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-[#800000]/10 rounded-full border border-[#800000]/20">
                <Sparkles className="h-5 w-5 text-[#800000]" />
                <span className="ml-2 text-sm font-medium uppercase tracking-wider text-[#800000]">
                  {t.hero.subtitle}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-[#800000]">{t.hero.title.split(' ')[0]}</span> {t.hero.title.split(' ').slice(1).join(' ')}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                {t.hero.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#800000] hover:bg-[#6a0000] text-white shadow-lg hover:shadow-xl transition-all"
              >
                <CalendarDays className="mr-2 h-5 w-5" />
                {t.hero.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#800000] text-[#800000] hover:bg-[#800000]/10 flex items-center gap-2"
              >
                <PhoneCall className="h-5 w-5" />
                {t.hero.ctaSecondary}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((item) => (
                    <img 
                      key={item}
                      src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}0.jpg`}
                      alt="Happy client"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">5000+ {language === 'en' ? 'Happy Clients' : 'संतुष्ट ग्राहक'}</p>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-[#800000]/10 rounded-full filter blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1581793746483-042aacb83ce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Vedic Astrologer"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white">
                  <p className="text-sm font-medium">{language === 'en' ? '25+ Years Experience' : '25+ वर्षों का अनुभव'}</p>
                  <h3 className="text-xl font-bold mt-1">Pandit Ravi Shankar</h3>
                  <p className="text-amber-200 text-sm mt-1">{language === 'en' ? 'Vedic Astrology Specialist' : 'ज्योतिष विशेषज्ञ'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Star = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);