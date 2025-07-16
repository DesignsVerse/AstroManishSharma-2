'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { CheckCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const BookPuja = () => {
  const { language } = useLanguage();
  const t = (content[language] as any).bookPuja || {
    title: language === 'en' ? 'Book Your Puja' : 'अपनी पूजा बुक करें',
    subtitle: language === 'en' ? 'Schedule a Sacred Ritual' : 'पवित्र अनुष्ठान बुक करें',
    description: language === 'en'
      ? 'Experience divine blessings with our authentic Vedic puja services, tailored to your spiritual needs.'
      : 'हमारी प्रामाणिक वैदिक पूजा सेवाओं के साथ दिव्य आशीर्वाद का अनुभव करें, जो आपकी आध्यात्मिक आवश्यकताओं के लिए अनुकूलित हैं।',
    points: language === 'en'
      ? [
          'Personalized puja ceremonies by expert priests',
          'Online and offline puja options available',
          'Customized rituals for health, wealth, and prosperity',
          'Hassle-free booking with 24/7 support',
        ]
      : [
          'विशेषज्ञ पंडितों द्वारा वैयक्तिकृत पूजा समारोह',
          'ऑनलाइन और ऑफलाइन पूजा विकल्प उपलब्ध',
          'स्वास्थ्य, धन और समृद्धि के लिए अनुकूलित अनुष्ठान',
          '24/7 समर्थन के साथ परेशानी मुक्त बुकिंग',
        ],
    form: {
      name: language === 'en' ? 'Full Name' : 'पूरा नाम',
      email: language === 'en' ? 'Email Address' : 'ईमेल पता',
      pujaType: language === 'en' ? 'Select Puja Type' : 'पूजा प्रकार चुनें',
      date: language === 'en' ? 'Preferred Date' : 'पसंदीदा तिथि',
      submit: language === 'en' ? 'Book Now' : 'अब बुक करें',
    },
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-[#faf5f0] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 -left-24 w-96 h-96 bg-[#800000] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 -right-24 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#800000]/20 to-amber-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white transform group-hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1619985957038-ff3bc7b65954?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Puja Ceremony"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="text-white">
                  <p className="text-sm font-semibold tracking-wide">{language === 'en' ? 'Authentic Vedic Rituals' : 'प्रामाणिक वैदिक अनुष्ठान'}</p>
                  <h3 className="text-2xl font-extrabold mt-1">{language === 'en' ? 'Sacred Puja Services' : 'पवित्र पूजा सेवाएँ'}</h3>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content and Form Section */}
          <motion.div variants={itemVariants} className="space-y-10">
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center px-5 py-2 bg-[#800000]/10 rounded-full border border-[#800000]/30"
              >
                <Calendar className="h-5 w-5 text-[#800000]" />
                <span className="ml-2 text-sm font-semibold uppercase tracking-widest text-[#800000]">
                  {t.subtitle}
                </span>
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                <span className="text-[#800000]">{t.title.split(' ')[0]}</span>{' '}
                {t.title.split(' ').slice(1).join(' ')}
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                {t.description}
              </p>

              <div className="space-y-5">
                {t.points.map((point: string, index: number) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4 group"
                  >
                    <CheckCircle className="h-6 w-6 text-[#800000] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-800 font-medium text-lg group-hover:text-[#800000] transition-colors">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#800000] focus:border-[#800000] text-gray-900"
                    placeholder={t.form.name}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#800000] focus:border-[#800000] text-gray-900"
                    placeholder={t.form.email}
                  />
                </div>
                <div>
                  <label htmlFor="pujaType" className="block text-sm font-medium text-gray-700">
                    {t.form.pujaType}
                  </label>
                  <select
                    id="pujaType"
                    className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#800000] focus:border-[#800000] text-gray-900"
                  >
                    <option value="">{t.form.pujaType}</option>
                    <option value="health">{language === 'en' ? 'Health Puja' : 'स्वास्थ्य पूजा'}</option>
                    <option value="wealth">{language === 'en' ? 'Wealth Puja' : 'धन पूजा'}</option>
                    <option value="prosperity">{language === 'en' ? 'Prosperity Puja' : 'समृद्धि पूजा'}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    {t.form.date}
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#800000] focus:border-[#800000] text-gray-900"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#800000] hover:bg-[#6a0000] text-white px-10 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  {t.form.submit}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};