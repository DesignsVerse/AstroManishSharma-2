"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { servicesEn } from '@/data/services/services-en';
import { servicesHi } from '@/data/services/services-hi';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Sparkles, ArrowRight, Globe, BookOpen, BarChart2, HeartHandshake, Star, Clock, Shield, Target, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

function ServicesContent() {
  const { language } = useLanguage();
  const servicesData = language === 'en' ? servicesEn : servicesHi;
  const [searchQuery, setSearchQuery] = useState('');

  // Filter services
  const filteredServices = servicesData.items.filter((service: any) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-[#800000] to-[#600000]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">
                  {language === 'en' ? 'Vedic Astrology Solutions' : 'ज्योतिषीय समाधान'}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {language === 'en' 
                  ? 'Ancient Wisdom for Modern Life Challenges' 
                  : 'आधुनिक जीवन की चुनौतियों के लिए प्राचीन ज्ञान'}
              </h1>

              <p className="text-lg text-orange-100">
                {language === 'en'
                  ? 'Discover personalized astrological guidance rooted in 5000+ years of Vedic tradition'
                  : '5000+ वर्षों की वैदिक परंपरा में निहित व्यक्तिगत ज्योतिषीय मार्गदर्शन'}
              </p>

              {/* Key Points */}
              <div className="space-y-4">
                {[
                  language === 'en' ? 'Accurate birth chart analysis' : 'सटीक जन्म कुंडली विश्लेषण',
                  language === 'en' ? 'Personalized remedial solutions' : 'व्यक्तिगत उपचारात्मक समाधान',
                  language === 'en' ? 'Yearly planetary forecasts' : 'वार्षिक ग्रहीय पूर्वानुमान'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-square w-full max-w-lg mx-auto">
                <Image
                  src="/services/services.jpg"
                  alt={language === 'en' ? 'Astrology Services' : 'ज्योतिष सेवाएं'}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Card Section */}
      <section className="relative z-10 -mt-12 md:-mt-16">
        <div className="container mx-auto px-4">
          <Card className="bg-white shadow-xl rounded-2xl overflow-hidden border-0">
            <div className="p-1 bg-gradient-to-r from-amber-500 to-[#800000]">
              <div className="bg-white p-6 md:p-8 rounded-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
                  {language === 'en' 
                    ? 'Find Your Astrological Solution' 
                    : 'अपना ज्योतिषीय समाधान खोजें'}
                </h2>
                
                <div className="max-w-3xl mx-auto">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-[#800000]/10 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                      <div className="flex flex-col md:flex-row">
                        <div className="relative flex-grow">
                          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            type="text"
                            placeholder={language === 'en' 
                              ? 'Search by problem or service...' 
                              : 'समस्या या सेवा के अनुसार खोजें...'}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 pr-4 py-5 text-base border-0 focus:ring-0"
                          />
                        </div>
                        <Button 
                          className="bg-gradient-to-r from-amber-500 to-[#800000] hover:from-amber-600 hover:to-[#900000] text-white px-6 py-5 rounded-none"
                        >
                          {language === 'en' ? 'Search' : 'खोजें'}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {searchQuery && (
                    <p className="text-sm text-gray-500 mt-3 text-center">
                      {language === 'en' 
                        ? `Found ${filteredServices.length} solution${filteredServices.length !== 1 ? 's' : ''}`
                        : `${filteredServices.length} समाधान मिल${filteredServices.length !== 1 ? 'े' : 'ा'}`}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-[#800000] rounded-full mr-2"></div>
              <div className="w-12 h-1 bg-[#800000] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-[#800000] uppercase tracking-wider">
                {language === 'en' ? 'Our Services' : 'हमारी सेवाएं'}
              </span>
              <div className="w-12 h-1 bg-[#800000] rounded-full ml-2"></div>
              <div className="w-3 h-3 bg-[#800000] rounded-full ml-2"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {servicesData.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {servicesData.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service: any, index: number) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#800000]/20 to-amber-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <Card className="relative h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#800000] to-amber-600"></div>
                  <CardHeader className="pb-4 text-center pt-8">
                    <div className="w-20 h-20 mx-auto mb-4 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#800000] to-[#a00000] rounded-full blur-sm opacity-30"></div>
                      <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-md border-4 border-white">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={80}
                          height={80}
                          className="rounded-full object-cover w-16 h-16"
                        />
                      </div>
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#800000] transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.shortDesc || service.description.substring(0, 60) + '...'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 pb-6 text-center">
                    <div className="mb-6 px-4">
                      <p className="text-gray-700 min-h-[60px] text-sm md:text-base">
                        {service.description.length > 120 
                          ? service.description.substring(0, 120) + '...' 
                          : service.description}
                      </p>
                    </div>
                    <div className="space-y-3 px-4">
                      <Button 
                        asChild 
                        variant="outline"
                        className="w-full border-[#800000] text-[#800000] hover:bg-[#800000]/10 hover:border-[#800000]/80 transition-colors h-11 text-sm md:text-base"
                      >
                        <Link href={`/services/${service.id}`}>
                          {language === 'en' ? 'View Details' : 'विवरण देखें'}
                        </Link>
                      </Button>
                      <Button 
                        asChild 
                        className="w-full bg-gradient-to-r from-[#800000] to-[#a00000] hover:from-[#700000] hover:to-[#900000] text-white h-11 text-sm md:text-base shadow-md hover:shadow-lg transition-all"
                      >
                        <Link href="/contact">
                          {language === 'en' ? 'Book Consultation' : 'परामर्श बुक करें'}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8f4f0] to-[#f0e6e0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#800000] mb-4">
              {language === 'en' ? 'Our Unique Methodology' : 'हमारी अनूठी पद्धति'}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {language === 'en'
                ? "Combining ancient wisdom with modern analysis for precise guidance"
                : "सटीक मार्गदर्शन के लिए प्राचीन ज्ञान को आधुनिक विश्लेषण के साथ जोड़ना"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: language === 'en' ? "Planetary Analysis" : "ग्रहीय विश्लेषण",
                desc: language === 'en'
                  ? "Detailed examination of planetary positions and movements"
                  : "ग्रहों की स्थिति और गति का विस्तृत विश्लेषण"
              },
              {
                icon: BookOpen,
                title: language === 'en' ? "Vedic Principles" : "वैदिक सिद्धांत",
                desc: language === 'en'
                  ? "Rooted in authentic Vedic astrological scriptures"
                  : "प्रामाणिक वैदिक ज्योतिषीय ग्रंथों में निहित"
              },
              {
                icon: BarChart2,
                title: language === 'en' ? "Data-Driven" : "डेटा-संचालित",
                desc: language === 'en'
                  ? "Combining traditional methods with modern analytics"
                  : "पारंपरिक तरीकों को आधुनिक विश्लेषण के साथ जोड़ना"
              },
              {
                icon: HeartHandshake,
                title: language === 'en' ? "Personalized" : "व्यक्तिगत",
                desc: language === 'en'
                  ? "Custom solutions tailored to your unique situation"
                  : "आपकी विशिष्ट स्थिति के अनुरूप अनुकूलित समाधान"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-[#800000]/10">
                <div className="bg-[#800000]/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#800000]" />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'What Makes Us Different' : 'हमें अलग क्या बनाता है'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'en' 
                ? "Our approach delivers real results for our clients"
                : "हमारा दृष्टिकोण हमारे ग्राहकों के लिए वास्तविक परिणाम देता है"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Users,
                title: language === 'en' ? "Expert Astrologers" : "विशेषज्ञ ज्योतिषी",
                desc: language === 'en' 
                  ? "Our team has 50+ years combined experience in Vedic astrology"
                  : "हमारी टीम के पास वैदिक ज्योतिष में 50+ वर्षों का संयुक्त अनुभव है"
              },
              {
                icon: Target,
                title: language === 'en' ? "Focused Solutions" : "केंद्रित समाधान",
                desc: language === 'en' 
                  ? "We identify root causes rather than just symptoms"
                  : "हम लक्षणों के बजाय मूल कारणों की पहचान करते हैं"
              },
              {
                icon: Clock,
                title: language === 'en' ? "Timely Guidance" : "समय पर मार्गदर्शन",
                desc: language === 'en' 
                  ? "Receive insights when you need them most"
                  : "जब आपको सबसे ज्यादा जरूरत हो तो अंतर्दृष्टि प्राप्त करें"
              },
              {
                icon: Shield,
                title: language === 'en' ? "Complete Privacy" : "पूर्ण गोपनीयता",
                desc: language === 'en' 
                  ? "Your information and consultations remain strictly confidential"
                  : "आपकी जानकारी और परामर्श पूरी तरह से गोपनीय रहते हैं"
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 bg-[#800000]/10 p-3 rounded-full">
                  <benefit.icon className="w-6 h-6 text-[#800000]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-[#800000] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/patterns/mandala-light.svg')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-6 border border-white/30">
              {language === 'en' ? 'Limited Availability' : 'सीमित उपलब्धता'}
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {language === 'en' 
                ? 'Ready to Transform Your Life with Cosmic Guidance?' 
                : 'ब्रह्मांडीय मार्गदर्शन के साथ अपना जीवन बदलने के लिए तैयार हैं?'}
            </h2>
            
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              {language === 'en'
                ? "Book your personalized consultation today and receive a free 2024 planetary forecast"
                : "आज ही अपना व्यक्तिगत परामर्श बुक करें और निःशुल्क 2024 ग्रहीय पूर्वानुमान प्राप्त करें"}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-[#800000] hover:bg-gray-100 px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/contact">
                  {language === 'en' ? 'Book Now' : 'अभी बुक करें'}
                </Link>
              </Button>
              <Button 
                asChild 
                variant="ghost" 
                size="lg"
                className="text-white hover:bg-white/10 border-white border-2 px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/services">
                  {language === 'en' ? 'View All Services' : 'सभी सेवाएं देखें'}
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-orange-200">
              <Star className="w-5 h-5 fill-current" />
              <span>{language === 'en' ? '4.9/5 based on 1,200+ reviews' : '1,200+ समीक्षाओं पर 4.9/5'}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ServicesPage() {
  return <ServicesContent />;
}