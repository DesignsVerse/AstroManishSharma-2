"use client";

import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { servicesEn } from '@/data/services/services-en';
import { servicesHi } from '@/data/services/services-hi';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Users, Target, Shield, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

function ServicesContent() {
  const { language } = useLanguage();
  const servicesData = language === 'en' ? servicesEn : servicesHi;
  const services = servicesData.items;
  const [searchQuery, setSearchQuery] = useState('');

  const benefits = [
    {
      icon: Users,
      title: "Expert Astrologers",
      description: "Certified professionals with decades of Vedic astrology experience"
    },
    {
      icon: Target,
      title: "Precise Guidance",
      description: "97% client satisfaction rate with accurate predictions"
    },
    {
      icon: Clock,
      title: "Timely Reports",
      description: "Receive your personalized analysis within 24-48 hours"
    },
    {
      icon: Shield,
      title: "100% Confidential",
      description: "Your data and consultations remain completely private"
    }
  ];

  // Filter services based on search query
  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-orange-50">
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-b from-orange-500 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">
              {language === 'en' ? servicesData.hero.title_en : servicesData.hero.title_hi}
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              {language === 'en' ? servicesData.hero.desc_en : servicesData.hero.desc_hi}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="bg-orange-400/20 text-orange-100 hover:bg-orange-400/30 px-4 py-2">
                {language === 'en' ? servicesEn.hero.badge1_en : 'व्यक्तिगत पाठ'}
              </Badge>
              <Badge variant="secondary" className="bg-orange-400/20 text-orange-100 hover:bg-orange-400/30 px-4 py-2">
                {language === 'en' ? servicesEn.hero.badge2_en : 'उपचारात्मक समाधान'}
              </Badge>
              <Badge variant="secondary" className="bg-orange-400/20 text-orange-100 hover:bg-orange-400/30 px-4 py-2">
                {language === 'en' ? servicesEn.hero.badge3_en : 'वार्षिक पूर्वानुमान'}
              </Badge>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder={language === 'en' ? servicesEn.hero.search_placeholder_en : 'ज्योतिष सेवाओं के लिए खोजें...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg border-2 border-white/30 focus:border-white focus:ring-white bg-white/10 backdrop-blur-sm text-white placeholder:text-orange-200 rounded-xl"
                />
              </div>
              {searchQuery && (
                <p className="text-sm text-orange-200 mt-3">
                  Found {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {servicesData.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {servicesData.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-300 overflow-hidden">
                <div className="relative h-60">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      asChild 
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white h-12"
                    >
                      <Link href={`/services/${service.id}`}>View Details</Link>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline"
                      className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 h-12"
                    >
                      <Link href="/contact">Book Consultation</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Clients Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide more than just predictions - we offer practical guidance to transform your life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all">
                <div className="bg-orange-100/50 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-700 to-amber-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-12 rounded-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for Cosmic Clarity?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Schedule your consultation today and unlock the wisdom of the stars for your life's journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg"
              >
                <Link href="/contact">Book Your Session</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-6 text-lg"
              >
                <Link href="/about">Our Methodology</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default function ServicesPage() {
  return (
    <ServicesContent />
  );
}