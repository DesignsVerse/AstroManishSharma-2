'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { servicesEn } from '@/data/services/services-en';
import { servicesHi } from '@/data/services/services-hi';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Heart, Briefcase, Gem, Home,Phone, Sun, ArrowRight, Clock, IndianRupee } from 'lucide-react';
import Link from 'next/link';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";


const iconMap = {
  star: Star,
  heart: Heart,
  briefcase: Briefcase,
  gem: Gem,
  home: Home,
  sun: Sun,
};

const slugMap = {
  'Birth Chart Analysis': 'birth-chart-analysis',
  'Marriage Compatibility': 'marriage-compatibility',
  'Career Guidance': 'career-guidance',
  'Gemstone Consultation': 'gemstone-consultation',
  'Vastu Shastra': 'vastu-shastra',
  'Spiritual Healing': 'spiritual-healing',
  'जन्म कुंडली विश्लेषण': 'birth-chart-analysis',
  'विवाह अनुकूलता': 'marriage-compatibility',
  'करियर मार्गदर्शन': 'career-guidance',
  'रत्न परामर्श': 'gemstone-consultation',
  'वास्तु शास्त्र': 'vastu-shastra',
  'आध्यात्मिक चिकित्सा': 'spiritual-healing',
};

type Service = {
  id: string;
  title: string;
  description: string;
  duration: string;
  features?: string[]; // Made optional
  benefits?: string[];
  overview?: string;
  process?: string;
  howItWorks?: { title: string; description: string }[];
  image?: string;
  icon?: string;
};

type ServicesData = {
  title: string;
  subtitle: string;
  hero?: any; // Added optional hero property
  items: Service[];
};

export const Services = () => {
  const { language } = useLanguage();
  const servicesData: ServicesData = language === 'en' ? servicesEn : servicesHi;
  const breakpoint = useBreakpoint();

  let visibleItems = servicesData.items;

  if (breakpoint === 'mobile') {
    visibleItems = servicesData.items.slice(0, 3);
  } else if (breakpoint === 'desktop') {
    visibleItems = servicesData.items.slice(0, 6);
  }
  // Tablet shows all

  return (
    <section className="py-20 bg-[#faf5f0] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#800000] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#800000]/10 rounded-full border border-[#800000]/20">
            <Star className="h-5 w-5 text-[#800000]" />
            <span className="ml-2 text-sm font-medium uppercase tracking-wider text-[#800000]">
              {servicesData.subtitle}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            <span className="text-[#800000]">{servicesData.title.split(' ')[0]}</span> {servicesData.title.split(' ').slice(1).join(' ')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((service: Service, index: number) => {
            const slug = slugMap[service.title as keyof typeof slugMap] || service.id;
            return (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#800000]/20 to-amber-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <Card className="relative h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#800000] to-amber-600"></div>
                  <CardHeader className="pb-4 text-center pt-8">
                    <div className="w-20 h-20 mx-auto mb-4 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#800000] to-[#a00000] rounded-full blur-sm opacity-30"></div>
                      <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-md border-4 border-white">
                        {service.image ? (
                          <img
                            src={service.image}
                            alt={service.title}
                            width={80}
                            height={80}
                            className="rounded-full object-cover w-16 h-16"
                          />
                        ) : (
                          <Star className="h-8 w-8 text-[#800000]" strokeWidth={1.5} />
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#800000] transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 pb-3 text-center flex-1 flex flex-col">
                    <div className="mb-3">
                      <p className="text-gray-700 text-xs md:text-sm">
                        {service.description.length > 80
                          ? service.description.substring(0, 80) + "..."
                          : service.description}
                      </p>
                    </div>
                    <div className="mt-auto space-y-2 flex flex-col">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-[#800000] text-[#800000] hover:bg-[#800000]/10 hover:border-[#800000]/80 transition-colors h-9 text-xs md:text-sm"
                      >
                        <Link href={`/services/${service.id}`}>
                          {language === "en" ? "View Details" : "विवरण देखें"}
                        </Link>
                      </Button>
                      <div className="flex flex-col sm:flex-row gap-2 justify-center">
                        <Button
                          asChild
                          size="sm"
                          className="bg-[#25D366] text-white hover:bg-[#1EBE5D] px-4 py-3 text-xs md:text-sm font-bold shadow-lg hover:shadow-xl transition-all"
                        >
                          <a
                            href={`https://wa.me/917733994827?text=नमस्ते%2C%20पंडित%20जी,%20मुझे%20${encodeURIComponent(
                              service.title
                            )}%20पूजा%20बुकिंग%20करानी%20है.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5"
                          >
                            <FaWhatsapp className="w-4 h-4 text-white" />
                            {language === "en" ? "WhatsApp" : "व्हाट्सएप"}
                          </a>
                        </Button>

                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="bg-[#800000] text-white border-[#800000] border-2 px-4 py-3 text-xs md:text-sm font-bold shadow-lg hover:shadow-xl transition-all"
                        >
                          <a href="tel:+917733994827" className="flex items-center gap-1.5">
                            <Phone className="w-4 h-4" />
                            {language === "en" ? "Call Now" : "अभी कॉल करें"}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-[#800000] hover:bg-[#6a0000] text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <Link href="/services">
              {language === 'en' ? 'View More' : 'और देखें'}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};