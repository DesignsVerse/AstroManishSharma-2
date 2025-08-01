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
import { FaPhone, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";


// Inline CSS for the animation and tags
const styles = `
  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .float-animation {
    animation: float 3s ease-in-out infinite;
  }

  .float-animation:hover {
    animation-play-state: paused;
    transform: translateY(-12px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .tag {
    display: inline-block;
    background-color: #800000;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    transition: background-color 0.3s ease-in-out;
  }

  .tag:hover {
    background-color: #600000;
  }
`;

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
      {/* Inject CSS styles */}
      <style>{styles}</style>

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
              <div className="relative h-64 sm:h-72 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Service Title and Description */}
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
            </div>

            {/* Right Sidebar - New CTA Design with Tags */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="border border-[#800000]/20 shadow-md">
                  <CardHeader className="bg-[#800000] p-6">
                    <CardTitle className="text-xl font-bold text-white text-center">
                      {language === 'en' ? 'Book Your Puja Now' : 'अपनी पूजा अभी बुक करें'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    

<div className="space-y-4">
  <Button 
    asChild 
    className="w-full bg-gradient-to-r from-[#800000] to-[#a00000] hover:from-[#700000] hover:to-[#900000] text-white h-14 text-lg float-animation transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
  >
    <a href="tel:+917733994827">
      <FaPhone className="w-5 h-5" />
      {language === 'en' ? 'Call Now' : 'अभी कॉल करें'}
    </a>
  </Button>
  <Button 
    asChild 
    variant="outline" 
    className="w-full border-[#800000] text-[#800000] hover:bg-[#800000]/10 h-14 text-lg float-animation transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
  >
    <a 
      href={`https://wa.me/+917733994827?text=${encodeURIComponent(language === 'en' ? 'Namaste Pandit Manish Sharma Ji, I want to perform a Puja' : 'नमस्ते पंडित मनीष शर्मा जी, मुझे पूजा करानी है')}`} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="w-5 h-5" />
      {language === 'en' ? 'WhatsApp Now' : 'अभी व्हाट्सएप करें'}
    </a>
  </Button>
  <Button 
    asChild 
    variant="outline" 
    className="w-full border-[#800000] text-[#800000] hover:bg-[#800000]/10 h-14 text-lg float-animation transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
  >
    <a 
      href={`https://wa.me/+917733994827?text=${encodeURIComponent(language === 'en' ? 'Pandit Manish Sharma Ji, I want to book a Puja' : 'पंडित मनीष शर्मा जी, मुझे पूजा बुक करानी है')}`} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaCalendarAlt className="w-5 h-5" />
      {language === 'en' ? 'Book Now' : 'अपनी पूजा बुक करें'}
    </a>
  </Button>
</div>

                    <div className="text-center text-sm text-gray-500 mt-4">
                      {language === 'en' 
                        ? '100% satisfaction guarantee' 
                        : '100% संतुष्टि गारंटी'}
                    </div>

                    {/* Tags Section */}
                    {service.tags && service.tags.length > 0 && (
                      <div className="mt-6">
                        <div className="text-sm text-gray-600 mb-2">
                          {language === 'en' ? 'Related Tags' : 'संबंधित टैग'}
                        </div>
                        <div className="flex flex-wrap">
                          {service.tags.map((tag: string, index: number) => (
                            <Link
                              key={index}
                              href={`/services?tag=${tag.replace('#', '')}`}
                              className="tag"
                            >
                              {tag}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
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
                className="bg-white text-[#800000] hover:bg-gray-100 hover:-translate-y-1 px-6 py-4 font-bold transition-transform duration-300 ease-in-out"
              >
                <Link href="/contact">
                  {language === 'en' ? 'Get Started' : 'शुरू करें'}
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-white border-white hover:bg-white/10 hover:translate-y-1 px-6 py-4 font-bold transition-transform duration-300 ease-in-out"
              >
                <Link href="/services">
                  {language === 'en' ? 'Browse Services' : 'सेवाएं देखें'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}