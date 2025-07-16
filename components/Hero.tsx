'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, CalendarDays, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="relative overflow-hidden bg-[#800000] py-4 md:py-8">
      {/* Cosmic Background and Animated Elements */}
      <div className="absolute inset-0 bg-[url('/cosmic-bg.jpg')] bg-cover bg-center opacity-10 pointer-events-none" />
      <motion.div
        className="absolute top-20 left-20 w-24 h-24 rounded-full bg-amber-200/20 border border-amber-200/40"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 rounded-full bg-orange-200/20 border border-orange-200/40"
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1],
          x: [0, -30, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-flex items-center px-5 py-2 bg-white/10 rounded-full border border-amber-200/30 backdrop-blur-sm"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Sparkles className="h-5 w-5 text-amber-200" />
              <span className="ml-2 text-sm font-medium uppercase tracking-widest text-amber-100">
                {language === 'en' ? 'Celestial Guidance' : 'आकाशीय मार्गदर्शन'}
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="text-amber-200">{t.hero.title.split(' ')[0]}</span>{' '}
              {t.hero.title.split(' ').slice(1).join(' ')}
            </h1>

            <p className="text-lg md:text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {language === 'en'
                ? 'Unlock the secrets of the cosmos with personalized Vedic astrology insights.'
                : 'वैदिक ज्योतिष अंतर्दृष्टि के साथ ब्रह्मांड के रहस्यों को खोलें।'}
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-200 to-amber-400 hover:from-amber-300 hover:to-amber-500 text-[#800000] shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
              >
                <CalendarDays className="mr-2 h-5 w-5" />
                {language === 'en' ? 'Book a Consultation' : 'परामर्श बुक करें'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-amber-200 text-amber-100 hover:bg-amber-200/20 hover:text-white rounded-full flex items-center gap-2"
              >
                <PhoneCall className="h-5 w-5" />
                {language === 'en' ? 'Contact Us' : 'हमसे संपर्क करें'}
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((item) => (
                    <img
                      key={item}
                      src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}0.jpg`}
                      alt="Happy client"
                      className="w-10 h-10 rounded-full border-2 border-amber-200"
                    />
                  ))}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-white">5000+ {language === 'en' ? 'Happy Clients' : 'संतुष्ट ग्राहक'}</p>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -right-10 -top-10 w-60 h-60 bg-amber-200/10 rounded-full filter blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-amber-200/20">
              <img
              src='/hero.jpg'
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
          </motion.div>
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