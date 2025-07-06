import { servicesDetailedDataEn } from '@/data/services-detailed-en';
import { servicesDetailedDataHi } from '@/data/services-detailed-hi';
import { Clock, DollarSign, ArrowLeft, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all service slugs
export async function generateStaticParams() {
  // Get all available slugs from both English and Hindi data
  const slugs = Object.keys(servicesDetailedDataEn);
  
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  // Since this is now a server component, we need to handle language differently
  // For now, we'll use English as default, but you might want to implement
  // language detection based on URL or other parameters
  const servicesData = servicesDetailedDataEn; // Default to English
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/services">
          <Button variant="outline" className="mb-8 border-amber-600 text-amber-600 hover:bg-amber-50">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              {/* Service Image */}
              <div className="aspect-video overflow-hidden rounded-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Service Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
              dangerouslySetInnerHTML={{ __html: service.content }}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="sticky top-24 shadow-lg border-amber-200">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
                <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                  Book This Service
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5 text-amber-600" />
                      <span className="font-medium">Price</span>
                    </div>
                    <span className="text-2xl font-bold text-amber-600">{service.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-amber-600" />
                      <span className="font-medium">Duration</span>
                    </div>
                    <span className="text-gray-700">{service.duration}</span>
                  </div>
                </div>
                
                <Link href="/contact">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg">
                    Book Now
                  </Button>
                </Link>
                
                <div className="text-center text-sm text-gray-500">
                  Secure booking • 100% confidential
                </div>
              </CardContent>
            </Card>

            {/* Features Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Process Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Our Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Benefits Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}