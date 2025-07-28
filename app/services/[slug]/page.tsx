"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Home/Header';
import { Footer } from '@/components/Home/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Star, Clock, Shield, Users, Target } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { servicesEn } from '@/data/services/services-en';
import { servicesHi } from '@/data/services/services-hi';

export default function ServiceDetailContent({ params }: { params: { slug: string } }) {
  const { language } = useLanguage();
  const services = language === 'en' ? servicesEn.items : servicesHi.items;

  const service = services.find((s: any) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((s: any) => s.id !== params.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-orange-50">
      {/* Main Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <Link href="/services" className="inline-flex items-center gap-2 text-[#800000] hover:text-[#600000] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-lg">{language === 'en' ? 'All Services' : 'सभी सेवाएं'}</span>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Service Image */}
              <div className="relative h-80    md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Service Title and Duration */}
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-[#800000]">
                    {service.title}
                  </h1>
                </div>
                
                <p className="text-xl text-gray-700">
                  {service.description}
                </p>
              </div>

              {/* Overview Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#800000] border-b pb-2 border-[#800000]/20">
                  {language === 'en' ? 'Service Details' : 'सेवा विवरण'}
                </h2>
                <div className="prose max-w-none text-gray-700">
                  {service.overview}
                </div>
                
                {/* Render content array below overview */}
                {Array.isArray((service as any).content) && (service as any).content.length > 0 && (
                  <div className="space-y-8 mt-8">
                    {(service as any).content.map((item: any, idx: number) => (
                      <div key={idx} className="space-y-2">
                        <h3 className="text-xl font-semibold text-gray-900">{item.heading}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Benefits Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#800000] border-b pb-2 border-[#800000]/20">
                  {language === 'en' ? 'What You Will Get' : 'आपको क्या मिलेगा'}
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#800000] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sidebar - New CTA Design */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="border border-[#800000]/20 shadow-md">
                  <CardHeader className="bg-[#800000] p-6">
                    <CardTitle className="text-xl font-bold text-white text-center">
                      {language === 'en' ? 'Book Your Puja Now' : 'अपनी पूजा अभी बुक करें'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="text-center">
                      <div className="text-gray-600 mb-6">
                        {language === 'en' ? 'Personalized Consultation' : 'व्यक्तिगत परामर्श'}
                      </div>
                      
                      <div className="bg-[#800000]/5 p-4 rounded-lg mb-6">
                        <div className="text-sm text-gray-600 mb-2">
                          {language === 'en' ? 'Includes' : 'शामिल हैं'}
                        </div>
                        <ul className="space-y-2 text-left">
                          {[
                            language === 'en' ? 'Detailed analysis' : 'विस्तृत विश्लेषण',
                            language === 'en' ? 'Personalized remedies' : 'व्यक्तिगत उपाय',
                            language === 'en' ? 'Follow-up support' : 'अनुवर्ती सहायता',
                            language === 'en' ? 'Confidential service' : 'गोपनीय सेवा'
                          ].map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-[#800000]" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Button 
                        asChild 
                        className="w-full bg-gradient-to-r from-[#800000] to-[#a00000] hover:from-[#700000] hover:to-[#900000] text-white h-14 text-lg shadow-lg"
                      >
                        <a href="tel:+917733994827">
                          {language === 'en' ? 'Call Now' : 'अभी कॉल करें'}
                        </a>
                      </Button>
                      <Button 
                        asChild 
                        variant="outline" 
                        className="w-full border-[#800000] text-[#800000] hover:bg-[#800000]/10 h-14 text-lg"
                      >
                        <a href="https://wa.me/+917733994827" target="_blank" rel="noopener noreferrer">
                          {language === 'en' ? 'WhatsApp Now' : 'व्हाट्सएप करें'}
                        </a>
                      </Button>
                    </div>

                    <div className="text-center text-sm text-gray-500 mt-4">
                      {language === 'en' 
                        ? '100% satisfaction guarantee' 
                        : '100% संतुष्टि गारंटी'}
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Badges */}
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-[#800000]" />
                      <span className="text-sm text-gray-700">
                        {language === 'en' 
                          ? 'Secure & Confidential' 
                          : 'सुरक्षित और गोपनीय'}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-[#800000]" />
                      <span className="text-sm text-gray-700">
                        {language === 'en' 
                          ? '5000+ Satisfied Clients' 
                          : '5000+ संतुष्ट ग्राहक'}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-6 h-6 text-[#800000] fill-[#800000]" />
                      <span className="text-sm text-gray-700">
                        {language === 'en' 
                          ? '4.9/5 Client Rating' 
                          : '4.9/5 ग्राहक रेटिंग'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Simplified */}
      <section className="py-16 bg-[#f8f4f0]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#800000] mb-4">
              {language === 'en' ? 'Why Our Clients Trust Us' : 'हमारे ग्राहक हम पर भरोसा क्यों करते हैं'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: language === 'en' ? "Authentic Guidance" : "प्रामाणिक मार्गदर्शन",
                desc: language === 'en'
                  ? "Rooted in ancient Vedic wisdom with modern interpretation"
                  : "आधुनिक व्याख्या के साथ प्राचीन वैदिक ज्ञान में निहित"
              },
              {
                title: language === 'en' ? "Proven Results" : "सिद्ध परिणाम",
                desc: language === 'en'
                  ? "Thousands of positive transformations documented"
                  : "हजारों सकारात्मक परिवर्तन दर्ज किए गए"
              },
              {
                title: language === 'en' ? "Ethical Practice" : "नैतिक अभ्यास",
                desc: language === 'en'
                  ? "No fear-mongering, only practical solutions"
                  : "कोई डर पैदा करने वाली बातें नहीं, केवल व्यावहारिक समाधान"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-[#800000]/10">
                <h3 className="text-lg font-semibold text-[#800000] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services - Compact Design */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {language === 'en' ? 'More Services' : 'अन्य सेवाएं'}
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              {language === 'en'
                ? "Explore our other services to support your journey"
                : "अपनी यात्रा का समर्थन करने के लिए हमारी अन्य सेवाओं का अन्वेषण करें"}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((relatedService: any) => (
              <Link 
                key={relatedService.id} 
                href={`/services/${relatedService.id}`}
                className="group block hover:shadow-md transition-all rounded-lg overflow-hidden border border-gray-200"
              >
                <div className="relative h-40">
                  <Image
                    src={relatedService.image}
                    alt={relatedService.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#800000] transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {relatedService.description}
                  </p>
                  <div className="mt-3 text-sm text-[#800000] font-medium">
                    {language === 'en' ? 'Learn more →' : 'अधिक जानें →'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Simplified */}
      <section className="py-16 bg-[#800000]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {language === 'en' 
                ? 'Need Personalized Guidance?' 
                : 'व्यक्तिगत मार्गदर्शन चाहिए?'}
            </h2>
            
            <p className="text-orange-100 mb-6">
              {language === 'en'
                ? "Contact us today for a consultation tailored to your needs"
                : "अपनी आवश्यकताओं के अनुरूप परामर्श के लिए आज ही हमसे संपर्क करें"}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-[#800000] hover:bg-gray-100 px-6 py-4 font-bold"
              >
                <Link href="/contact">
                  {language === 'en' ? 'Get Started' : 'शुरू करें'}
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-white border-white hover:bg-white/10 px-6 py-4 font-bold"
              >
                <Link href="/services">
                  {language === 'en' ? 'Browse Services' : 'सेवाएं देखें'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}