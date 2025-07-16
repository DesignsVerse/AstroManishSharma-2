'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = content[language];
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      title: language === 'en' ? 'Email' : 'ईमेल',
      value: t.footer.email,
    },
    {
      icon: Phone,
      title: language === 'en' ? 'Phone' : 'फोन',
      value: t.footer.phone,
    },
    {
      icon: MapPin,
      title: language === 'en' ? 'Address' : 'पता',
      value: t.footer.address,
    },
    {
      icon: Clock,
      title: language === 'en' ? 'Working Hours' : 'कार्य समय',
      value: language === 'en' ? '9 AM - 6 PM, Mon-Sat' : 'सुबह 9 - शाम 6, सोम-शनि',
    },
  ];

  const faqs = [
    {
      question: language === 'en' ? 'How long does a consultation take?' : 'परामर्श में कितना समय लगता है?',
      answer: language === 'en'
        ? 'Most consultations last 60-90 minutes, depending on the service selected.'
        : 'अधिकांश परामर्श 60-90 मिनट तक चलते हैं, जो चुनी गई सेवा पर निर्भर करता है।',
    },
    {
      question: language === 'en' ? 'Do you offer online consultations?' : 'क्या आप ऑनलाइन परामर्श प्रदान करते हैं?',
      answer: language === 'en'
        ? 'Yes, we offer both in-person and online consultations via secure video calls.'
        : 'हां, हम व्यक्तिगत और सुरक्षित वीडियो कॉल के माध्यम से ऑनलाइन परामर्श प्रदान करते हैं।',
    },
    {
      question: language === 'en' ? 'What information do I need to provide?' : 'मुझे कौन सी जानकारी प्रदान करनी होगी?',
      answer: language === 'en'
        ? 'You need to provide your birth details (date, time, place) for accurate readings.'
        : 'सटीक रीडिंग के लिए आपको अपनी जन्म विवरण (तारीख, समय, स्थान) प्रदान करना होगा।',
    },
  ];

  const services = [
    { value: 'birth-chart', label: language === 'en' ? 'Birth Chart Analysis' : 'जन्म कुंडली विश्लेषण' },
    { value: 'puja-service', label: language === 'en' ? 'Puja Services' : 'पूजा सेवाएं' },
    { value: 'remedial-consultation', label: language === 'en' ? 'Remedial Consultation' : 'उपचारात्मक परामर्श' },
    { value: 'yearly-forecast', label: language === 'en' ? 'Yearly Forecast' : 'वार्षिक पूर्वानुमान' },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <main className="py-20 bg-gradient-to-b from-gray-50 to-[#f0e6e0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative text-center space-y-6 mb-20">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-[#800000] rounded-full mr-2"></div>
            <div className="w-12 h-1 bg-[#800000] rounded-full mr-2"></div>
            <span className="text-sm font-medium text-[#800000] uppercase tracking-wider">
              {language === 'en' ? 'Contact Us' : 'हमसे संपर्क करें'}
            </span>
            <div className="w-12 h-1 bg-[#800000] rounded-full ml-2"></div>
            <div className="w-3 h-3 bg-[#800000] rounded-full ml-2"></div>
          </div>
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t.header.contact}
          </motion.h1>
          <motion.p
            className="text-xl text-[#800000] font-medium max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {language === 'en'
              ? 'Connect with our experts for personalized astrological guidance'
              : 'व्यक्तिगत ज्योतिषीय मार्गदर्शन के लिए हमारे विशेषज्ञों से संपर्क करें'}
          </motion.p>
        </section>

        {/* Contact Section */}
        <section className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Sidebar for Contact Info */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-[#800000]/10 shadow-lg bg-white rounded-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#800000] to-amber-600" />
              <CardContent className="p-6 space-y-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {language === 'en' ? 'Get in Touch' : 'संपर्क करें'}
                </h2>
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-[#800000] to-[#a00000] rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg bg-white rounded-xl border-[#800000]/10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#800000] to-amber-600" />
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {language === 'en' ? 'Send Us a Message' : 'हमें संदेश भेजें'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'en' ? 'First Name' : 'पहला नाम'}
                    </label>
                    <Input placeholder={language === 'en' ? 'John' : 'राम'} className="border-[#800000]/20 focus:ring-[#800000]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'en' ? 'Last Name' : 'अंतिम नाम'}
                    </label>
                    <Input placeholder={language === 'en' ? 'Doe' : 'शर्मा'} className="border-[#800000]/20 focus:ring-[#800000]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'en' ? 'Email' : 'ईमेल'}
                  </label>
                  <Input type="email" placeholder="john@example.com" className="border-[#800000]/20 focus:ring-[#800000]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'en' ? 'Phone' : 'फोन'}
                  </label>
                  <Input type="tel" placeholder="+91 9876543210" className="border-[#800000]/20 focus:ring-[#800000]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'en' ? 'Service' : 'सेवा'}
                  </label>
                  <Select>
                    <SelectTrigger className="border-[#800000]/20 focus:ring-[#800000]">
                      <SelectValue placeholder={language === 'en' ? 'Select a service' : 'एक सेवा चुनें'} />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'en' ? 'Message' : 'संदेश'}
                  </label>
                  <Textarea
                    rows={5}
                    placeholder={language === 'en'
                      ? 'Tell us about your requirements...'
                      : 'हमें अपनी आवश्यकताओं के बारे में बताएं...'}
                    className="border-[#800000]/20 focus:ring-[#800000]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-[#800000] to-[#a00000] hover:from-[#700000] hover:to-[#900000] text-white h-12 text-lg shadow-md hover:shadow-lg transition-all">
                  {language === 'en' ? 'Send Message' : 'संदेश भेजें'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Find answers to common questions about our services'
                : 'हमारी सेवाओं के बारे में सामान्य प्रश्नों के उत्तर पाएं'}
            </p>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-[#800000]/10 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div
                  className="flex justify-between items-center p-4 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-[#800000]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#800000]" />
                  )}
                </div>
                {expandedFAQ === index && (
                  <motion.div
                    className="p-4 bg-[#800000]/5"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}