'use client';

import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Head from 'next/head';

// Define TypeScript interfaces
interface LanguageContext {
  language: 'en' | 'hi';
}

// Metadata for SEO
export const metadata = {
  title: 'Maa Baglamukhi Puja Services | Pandit Manish Sharma',
  description: 'Experience authentic Maa Baglamukhi Puja and Pujan with Pandit Manish Sharma, the best Maa Baglamukhi Pandit at Maa Baglamukhi Mandir. Book your divine consultation today.',
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
    title: 'Maa Baglamukhi Puja Services | Pandit Manish Sharma',
    description: 'Join Pandit Manish Sharma, the best Maa Baglamukhi Pandit, for authentic Maa Baglamukhi Puja at Maa Baglamukhi Mandir.',
    url: 'http://bestmaabaglamukhipandit.com/services',
    type: 'website',
    images: [
      {
        url: 'http://bestmaabaglamukhipandit.com/images/maa-baglamukhi-puja.jpg',
        width: 1200,
        height: 630,
        alt: 'Maa Baglamukhi Puja by Pandit Manish Sharma',
      },
    ],
  },
};

const AboutServices: React.FC = () => {
  const { language } = useLanguage() as LanguageContext;
  const heading = language === 'en'
    ? 'Invoke Divine Blessings with Maa Baglamukhi Puja by Pandit Manish Sharma'
    : 'पंडित मनीष शर्मा के साथ माँ बगलामुखी पूजा से दिव्य आशीर्वाद प्राप्त करें';
  const description = language === 'en'
    ? 'Join Pandit Manish Sharma, the revered Maa Baglamukhi Pandit, at the sacred Sarva Siddha Peeth Maa Baglamukhi Mandir, Nalkheda, for authentic Vedic Havan and Tantra-Mantra Puja. With over 25 years of experience and unwavering devotion to Mata Rani, he performs transformative rituals to fulfill your wishes, bringing peace, prosperity, and protection. As the saying goes, "Whoever comes to Bagla Dwara, no one goes empty-handed." Book your divine consultation today!'
    : 'नालखेड़ा के पवित्र सरवा सिद्ध पीठ माँ बगलामुखी मंदिर में श्रद्धेय माँ बगलामुखी पंडित, पंडित मनीष शर्मा के साथ प्रामाणिक वैदिक हवन और तंत्र-मंत्र पूजा में शामिल हों। 25+ वर्षों के अनुभव और माता रानी के प्रति अटूट भक्ति के साथ, वे आपकी मनोकामनाओं को पूरा करने के लिए परिवर्तनकारी अनुष्ठान करते हैं, जो शांति, समृद्धि और सुरक्षा लाते हैं। जैसा कि प्रसिद्ध कहावत है, "जो भी बगला द्वार आता है, कोई खाली हाथ नहीं जाता।" आज ही अपनी दिव्य परामर्श बुक करें!';
  const buttonText = language === 'en' ? 'Schedule Your Puja Today' : 'आज ही अपनी पूजा बुक करें';

  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Maa Baglamukhi Puja',
    provider: {
      '@type': 'Person',
      name: 'Pandit Manish Sharma',
      jobTitle: 'Best Maa Baglamukhi Pandit',
      url: 'http://bestmaabaglamukhipandit.com',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Maa Baglamukhi Mandir',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Your Temple Address',
        addressLocality: 'City',
        addressRegion: 'State',
        postalCode: 'ZIP',
        addressCountry: 'IN',
      },
    },
    description: 'Authentic Maa Baglamukhi Puja and Pujan services by Pandit Manish Sharma at Maa Baglamukhi Mandir, offering spiritual guidance and blessings.',
  };

  return (
    <div className="max-w-6xl mx-auto my-12 p-4 bg-[#F9F5F5]">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="flex flex-col-reverse md:flex-row bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Left Side - Simplified Content */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {heading}
            </h1>
            <p className="text-gray-700 mb-8">
              {description}
            </p>
            <Link href="/contact">
              <Button className="bg-red-800 hover:bg-red-900 w-full md:w-auto">
                <Phone className="mr-2 h-4 w-4" />
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 relative min-h-[400px]">
          <Image
            src="/book.png"
            alt="Maa Baglamukhi Puja by Pandit Manish Sharma"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AboutServices;