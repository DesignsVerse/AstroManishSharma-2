'use client';

import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export const AboutServices = () => {
  const { language } = useLanguage();
  const heading = language === 'en' ? "Consult With India's Top Astrologers" : 'भारत के शीर्ष ज्योतिषियों से परामर्श करें';
  const description = language === 'en'
    ? 'Get accurate astrological guidance and solutions for all aspects of your life - career, relationships, finance, and more. Our expert astrologers provide personalized consultations based on your birth chart and planetary positions.'
    : 'अपने जीवन के सभी पहलुओं के लिए सटीक ज्योतिषीय मार्गदर्शन और समाधान प्राप्त करें - करियर, संबंध, वित्त और अधिक। हमारे विशेषज्ञ ज्योतिषी आपकी जन्म कुंडली और ग्रहों की स्थिति के आधार पर व्यक्तिगत परामर्श प्रदान करते हैं।';
  const buttonText = language === 'en' ? 'Book Consultation Now' : 'अभी परामर्श बुक करें';

  return (
    <div className="max-w-6xl mx-auto my-12 p-4 ">
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
            
            <Button className="bg-red-800 hover:bg-red-900 w-full md:w-auto">
              <Phone className="mr-2 h-4 w-4" />
              {buttonText}
            </Button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 relative min-h-[400px]">
          <Image 
            src="/astrologer-consultation.jpg" // Replace with your actual image path
            alt="Astrologer Consultation"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};