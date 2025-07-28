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
import Head from 'next/head';
import Link from 'next/link';

// Define TypeScript interfaces
interface LanguageContext {
  language: 'en' | 'hi';
}

interface Content {
  contact: {
    title: string;
    subtitle: string;
    description: string;
    formTitle: string;
    infoTitle: string;
    hoursTitle: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    closed: string;
    submitButton: string;
    successMessage: string;
    formLabels: {
      name: string;
      email: string;
      phone: string;
      service: string;
      message: string;
      birthDate: string;
      birthTime: string;
      birthPlace: string;
    };
    formPlaceholders: {
      name: string;
      email: string;
      phone: string;
      service: string;
      message: string;
      birthDate: string;
      birthTime: string;
      birthPlace: string;
    };
    formErrors: {
      name: string;
      email: string;
      phone: string;
      service: string;
      message: string;
    };
    info: {
      title: string;
      phone: string;
      email: string;
      address: string;
      hours: string;
      hoursValue: string;
      callNow: string;
      location: string;
    };
  };
  days: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Service {
  value: string;
  label: string;
}

// Metadata for SEO
export const metadata = {
  title: 'Contact Pandit Manish Sharma | Best Maa Baglamukhi Pandit',
  description: 'Connect with Pandit Manish Sharma, the best Maa Baglamukhi Pandit, for authentic Maa Baglamukhi Puja and Pujan at Maa Baglamukhi Mandir. Book your consultation today.',
  keywords: [
    'Maa Baglamukhi Mandir',
    'Maa Baglamukhi Puja',
    'Maa Baglamukhi Pandit',
    'Maa Baglamukhi Pujan',
    'Best Maa Baglamukhi Pandit',
    'Best Maa Baglamukhi Puja',
    'Pandit Manish Sharma',
    'Baglamukhi Pandit Manish Sharma',
    'Maa Baglamukhi Pandit Manish Sharma',
  ],
  openGraph: {
    title: 'Contact Pandit Manish Sharma | Maa Baglamukhi Mandir',
    description: 'Reach out to Pandit Manish Sharma for divine Maa Baglamukhi Puja services at Maa Baglamukhi Mandir. Get spiritual guidance and book your puja.',
    url: 'http://bestmaabaglamukhipandit.com/contact',
    type: 'website',
    images: [
      {
        url: 'http://bestmaabaglamukhipandit.com/images/pandit-manish-sharma-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Pandit Manish Sharma for Maa Baglamukhi Puja',
      },
    ],
  },
};

const ContactPage: React.FC = () => {
  const { language } = useLanguage() as LanguageContext;
  const t: Content = content[language];
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pandit Manish Sharma',
    jobTitle: 'Best Maa Baglamukhi Pandit',
    description: 'Contact Pandit Manish Sharma, the best Maa Baglamukhi Pandit, for authentic Maa Baglamukhi Puja and Pujan at Maa Baglamukhi Mandir.',
    url: 'http://bestmaabaglamukhipandit.com/contact',
    image: 'http://bestmaabaglamukhipandit.com/images/pandit-manish-sharma-contact.jpg',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: t.contact.info.phone,
        contactType: 'Customer Service',
        email: t.contact.info.email,
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Maa Baglamukhi Mandir',
      address: {
        '@type': 'PostalAddress',
        streetAddress: t.contact.info.address,
        addressLocality: 'Nalkheda',
        addressRegion: 'Madhya Pradesh',
        addressCountry: 'IN',
      },
    },
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      title: t.contact.phoneLabel,
      value: t.contact.info.phone,
    },
    {
      icon: Mail,
      title: t.contact.emailLabel,
      value: t.contact.info.email,
    },
    {
      icon: MapPin,
      title: t.contact.addressLabel,
      value: t.contact.info.address,
    },
  ];

  const workingHours = [
    { day: t.days.monday, hours: t.contact.info.hoursValue },
    { day: t.days.tuesday, hours: t.contact.info.hoursValue },
    { day: t.days.wednesday, hours: t.contact.info.hoursValue },
    { day: t.days.thursday, hours: t.contact.info.hoursValue },
    { day: t.days.friday, hours: t.contact.info.hoursValue },
    { day: t.days.saturday, hours: t.contact.info.hoursValue },
    { day: t.days.sunday, hours: t.contact.closed },
  ];

  const services: Service[] = [
    { value: 'maa-baglamukhi-puja', label: 'Maa Baglamukhi Puja' },
    { value: 'birth-chart-analysis', label: 'Birth Chart Analysis' },
    { value: 'marriage-compatibility', label: 'Marriage Compatibility' },
    { value: 'career-guidance', label: 'Career Guidance' },
    { value: 'gemstone-consultation', label: 'Gemstone Consultation' },
    { value: 'vastu-shastra', label: 'Vastu Shastra' },
    { value: 'spiritual-healing', label: 'Spiritual Healing' },
  ];

  const faqs: FAQ[] = [
    {
      question: language === 'en' ? 'How can I book a puja with Pandit Manish Sharma?' : 'मैं पंडित मनीष शर्मा के साथ पूजा कैसे बुक कर सकता हूं?',
      answer: language === 'en' ? 'You can book a puja by calling us directly or filling out the contact form on this page. We will get back to you within 24 hours.' : 'आप हमें सीधे कॉल करके या इस पेज पर संपर्क फॉर्म भरकर पूजा बुक कर सकते हैं। हम 24 घंटों के भीतर आपसे संपर्क करेंगे।',
    },
    {
      question: language === 'en' ? 'What services does Pandit Manish Sharma offer?' : 'पंडित मनीष शर्मा कौन सी सेवाएं प्रदान करते हैं?',
      answer: language === 'en' ? 'Pandit Manish Sharma offers Maa Baglamukhi Puja, birth chart analysis, marriage compatibility, career guidance, gemstone consultation, Vastu Shastra, and spiritual healing services.' : 'पंडित मनीष शर्मा माँ बगलामुखी पूजा, जन्म कुंडली विश्लेषण, विवाह अनुकूलता, करियर मार्गदर्शन, रत्न परामर्श, वास्तु शास्त्र और आध्यात्मिक चिकित्सा सेवाएं प्रदान करते हैं।',
    },
    {
      question: language === 'en' ? 'How long does a consultation take?' : 'एक परामर्श में कितना समय लगता है?',
      answer: language === 'en' ? 'A typical consultation takes 30-60 minutes depending on the service required. Detailed birth chart analysis may take longer.' : 'एक सामान्य परामर्श में आवश्यक सेवा के आधार पर 30-60 मिनट लगते हैं। विस्तृत जन्म कुंडली विश्लेषण में अधिक समय लग सकता है।',
    },
    {
      question: language === 'en' ? 'Can I get consultation online?' : 'क्या मैं ऑनलाइन परामर्श प्राप्त कर सकता हूं?',
      answer: language === 'en' ? 'Yes, we offer online consultations via video call. You can book an online session through our contact form or by calling us.' : 'हाँ, हम वीडियो कॉल के माध्यम से ऑनलाइन परामर्श प्रदान करते हैं। आप हमारे संपर्क फॉर्म के माध्यम से या हमें कॉल करके ऑनलाइन सत्र बुक कर सकते हैं।',
    },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F9F5F5]">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#800000] mb-4">
            {t.contact.title}
          </h1>
          <p className="text-xl text-amber-600 font-semibold mb-6">
            {t.contact.subtitle}
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#800000]">
                  {t.contact.formTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.formLabels.name}
                    </label>
                    <Input
                      placeholder={t.contact.formPlaceholders.name}
                      className="border-gray-300 focus:border-[#800000] focus:ring-[#800000]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.formLabels.email}
                    </label>
                    <Input
                      type="email"
                      placeholder={t.contact.formPlaceholders.email}
                      className="border-gray-300 focus:border-[#800000] focus:ring-[#800000]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.formLabels.phone}
                    </label>
                    <Input
                      placeholder={t.contact.formPlaceholders.phone}
                      className="border-gray-300 focus:border-[#800000] focus:ring-[#800000]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.formLabels.service}
                    </label>
                    <Select>
                      <SelectTrigger className="border-gray-300 focus:border-[#800000] focus:ring-[#800000]">
                        <SelectValue placeholder={t.contact.formPlaceholders.service} />
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
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.formLabels.message}
                  </label>
                  <Textarea
                    placeholder={t.contact.formPlaceholders.message}
                    rows={4}
                    className="border-gray-300 focus:border-[#800000] focus:ring-[#800000]"
                  />
                </div>

                <Button className="w-full bg-[#800000] hover:bg-[#6a0000] text-white py-3 text-lg font-semibold">
                  {t.contact.submitButton}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Info Card */}
            <Card className="bg-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#800000]">
                  {t.contact.infoTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#800000]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-[#800000]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Working Hours Card */}
            <Card className="bg-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#800000]">
                  {t.contact.hoursTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className={`font-medium ${schedule.hours === t.contact.closed ? 'text-red-500' : 'text-green-600'}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call Now Card */}
            <Card className="bg-gradient-to-r from-[#800000] to-amber-600 text-white shadow-xl border-0">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{t.contact.info.callNow}</h3>
                  <p className="text-amber-100 mb-4">
                    {language === 'en' ? 'Get immediate assistance for your spiritual needs' : 'अपनी आध्यात्मिक जरूरतों के लिए तत्काल सहायता प्राप्त करें'}
                  </p>
                  <a
                    href={`tel:${t.contact.info.phone}`}
                    className="inline-flex items-center px-6 py-3 bg-white text-[#800000] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    {language === 'en' ? 'Call Now' : 'अभी कॉल करें'}
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#800000] mb-4">
              {language === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'en' ? 'Find answers to common questions about our services and consultation process.' : 'हमारी सेवाओं और परामर्श प्रक्रिया के बारे में सामान्य प्रश्नों के उत्तर खोजें।'}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white shadow-lg border-0">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {expandedFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-[#800000]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#800000]" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;