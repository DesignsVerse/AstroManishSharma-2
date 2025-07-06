'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const { language } = useLanguage();
  const t = content[language];

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

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            {t.header.contact}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Get in touch with us for personalized astrological guidance'
              : 'व्यक्तिगत ज्योतिषीय मार्गदर्शन के लिए हमसे संपर्क करें'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {language === 'en' ? 'Send us a message' : 'हमें संदेश भेजें'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'en' ? 'First Name' : 'पहला नाम'}
                  </label>
                  <Input placeholder={language === 'en' ? 'John' : 'राम'} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'en' ? 'Last Name' : 'अंतिम नाम'}
                  </label>
                  <Input placeholder={language === 'en' ? 'Doe' : 'शर्मा'} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Email' : 'ईमेल'}
                </label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Phone' : 'फोन'}
                </label>
                <Input type="tel" placeholder="+91 9876543210" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Subject' : 'विषय'}
                </label>
                <Input placeholder={language === 'en' ? 'Birth chart consultation' : 'जन्म कुंडली परामर्श'} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Message' : 'संदेश'}
                </label>
                <Textarea 
                  rows={4} 
                  placeholder={language === 'en' 
                    ? 'Tell us about your requirements...' 
                    : 'हमें अपनी आवश्यकताओं के बारे में बताएं...'
                  } 
                />
              </div>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                {language === 'en' ? 'Send Message' : 'संदेश भेजें'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}