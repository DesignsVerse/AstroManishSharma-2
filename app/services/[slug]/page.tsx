"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { servicesEn } from '@/data/services/services-en';
import { servicesHi } from '@/data/services/services-hi';

type Service = {
  id: string;
  title: string;
  description: string;
  duration: string;
  features: string[];
  benefits: string[];
  overview: string;
  process: string;
  howItWorks: { title: string; description: string }[];
  image: string;
};

export default function ServiceDetailContent({ params }: { params: { slug: string } }) {
  const { language } = useLanguage();
  const services = language === 'en' ? servicesEn.items : servicesHi.items;

  const service = services.find(s => s.id === params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter(s => s.id !== params.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-orange-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-b from-orange-600 to-amber-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Link href="/services" className="inline-flex items-center gap-2 text-orange-100 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-lg">All Services</span>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-orange-500/20 text-orange-100 hover:bg-orange-500/30 mb-4">
                  {service.duration} Session
                </Badge>
                <h1 className="text-5xl font-bold text-white mb-6">{service.title}</h1>
                <p className="text-xl text-orange-100 mb-8">{service.description}</p>
                
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/10 text-orange-50 hover:bg-white/20">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Service Overview
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {service.overview}
                </p>
              </div>

              {/* What's Included */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  What's Included
                </h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How It Works */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
                  How It Works
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {service.howItWorks.map((step, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-orange-100 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center">
                        <span className="text-xl font-bold text-orange-600">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Key Benefits
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Our Process
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {service.process}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border border-orange-200 shadow-lg">
                <CardHeader className="bg-orange-50 border-b border-orange-100">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Book This Service
                  </CardTitle>
                  <CardDescription>
                    Begin your astrological journey today
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="text-center bg-orange-50 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-2">{service.duration}</div>
                    <div className="text-gray-600">Personalized Consultation</div>
                  </div>

                  <div className="space-y-4 text-sm text-gray-600">
                    {[
                      'Detailed analysis by expert astrologer',
                      'Comprehensive PDF report',
                      '30-day follow-up support',
                      '100% confidential service',
                      'Practical remedial solutions'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <Button 
                      asChild 
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white h-14 text-lg"
                    >
                      <Link href="/contact">Book Now</Link>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 h-14 text-lg"
                    >
                      <Link href="/contact">Ask Questions</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore More Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover other ways we can help guide your journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((relatedService) => (
              <Card key={relatedService.id} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-300 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={relatedService.image}
                    alt={relatedService.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {relatedService.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {relatedService.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Button 
                    asChild 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    <Link href={`/services/${relatedService.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}