    "use client";

    import { useLanguage } from '@/contexts/LanguageContext';
    import { Header } from '@/components/Header';
    import { Footer } from '@/components/Footer';
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
        

          {/* Hero Section */}
          <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#800000] to-[#600000]">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                  <Link href="/services" className="inline-flex items-center gap-2 text-orange-100 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="text-lg">{language === 'en' ? 'All Services' : 'सभी सेवाएं'}</span>
                  </Link>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{service.duration}</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                      {service.title}
                    </h1>
                    
                    <p className="text-xl text-orange-100">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {service.features.map((feature: string, index: number) => (
                        <div key={index} className="bg-white/10 text-orange-50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Section */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Left Content */}
                <div className="lg:col-span-2 space-y-16">
                  {/* Overview Section */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#800000] border-b pb-4 border-[#800000]/20">
                      {language === 'en' ? 'About This Service' : 'इस सेवा के बारे में'}
                    </h2>
                    <div className="prose max-w-none text-gray-700 text-lg">
                      {service.overview}
                    </div>
                  </div>

                  {/* Benefits Section */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#800000] border-b pb-4 border-[#800000]/20">
                      {language === 'en' ? 'Key Benefits' : 'मुख्य लाभ'}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {service.benefits.map((benefit: string, index: number) => (
                        <div key={index} className="flex items-start gap-4 p-6 bg-[#800000]/5 rounded-xl">
                          <CheckCircle className="w-6 h-6 text-[#800000] mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process Flow */}
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#800000] border-b pb-4 border-[#800000]/20">
                      {language === 'en' ? 'How We Help' : 'हम कैसे मदद करते हैं'}
                    </h2>
                    <div className="space-y-8">
                      {service.howItWorks.map((step: any, index: number) => (
                        <div key={index} className="flex gap-6">
                          <div className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-[#800000] rounded-full flex items-center justify-center text-white font-bold text-xl">
                              {index + 1}
                            </div>
                            {index < service.howItWorks.length - 1 && (
                              <div className="w-1 h-full bg-[#800000]/20 my-2"></div>
                            )}
                          </div>
                          <div className="flex-1 pb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Sidebar */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-24 border border-[#800000]/20 shadow-lg overflow-hidden">
                    <CardHeader className="bg-[#800000] p-6">
                      <CardTitle className="text-2xl font-bold text-white">
                        {language === 'en' ? 'Book This Service' : 'इस सेवा को बुक करें'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      <div className="text-center bg-[#800000]/10 p-6 rounded-lg border border-[#800000]/20">
                        <div className="text-3xl font-bold text-[#800000] mb-2">{service.duration}</div>
                        <div className="text-gray-600">
                          {language === 'en' ? 'Personalized Consultation' : 'व्यक्तिगत परामर्श'}
                        </div>
                      </div>

                      <div className="space-y-4">
                        {[
                          language === 'en' ? 'Expert astrological analysis' : 'विशेषज्ञ ज्योतिषीय विश्लेषण',
                          language === 'en' ? 'Detailed remedies & solutions' : 'विस्तृत उपाय और समाधान',
                          language === 'en' ? 'Follow-up support included' : 'अनुवर्ती सहायता शामिल',
                          language === 'en' ? '100% confidential service' : '100% गोपनीय सेवा',
                          language === 'en' ? 'Practical guidance' : 'व्यावहारिक मार्गदर्शन'
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#800000] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <Button 
                          asChild 
                          className="w-full bg-gradient-to-r from-[#800000] to-[#a00000] hover:from-[#700000] hover:to-[#900000] text-white h-14 text-lg shadow-lg"
                        >
                          <Link href="/contact">
                            {language === 'en' ? 'Book Now' : 'अभी बुक करें'}
                          </Link>
                        </Button>
                        <Button 
                          asChild 
                          variant="outline" 
                          className="w-full border-[#800000] text-[#800000] hover:bg-[#800000]/10 h-14 text-lg"
                        >
                          <Link href="/contact">
                            {language === 'en' ? 'Ask Questions' : 'प्रश्न पूछें'}
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-16 md:py-24 bg-[#f8f4f0]">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#800000] mb-4">
                  {language === 'en' ? 'Why Choose Our Services' : 'हमारी सेवाएं क्यों चुनें'}
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  {language === 'en'
                    ? "Authentic Vedic astrology with proven results for thousands of clients"
                    : "हजारों ग्राहकों के लिए सिद्ध परिणामों के साथ प्रामाणिक वैदिक ज्योतिष"}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Users,
                    title: language === 'en' ? "Expert Astrologers" : "विशेषज्ञ ज्योतिषी",
                    desc: language === 'en'
                      ? "50+ years combined experience in Vedic astrology"
                      : "वैदिक ज्योतिष में 50+ वर्षों का संयुक्त अनुभव"
                  },
                  {
                    icon: Target,
                    title: language === 'en' ? "Precise Guidance" : "सटीक मार्गदर्शन",
                    desc: language === 'en'
                      ? "97% client satisfaction with accurate predictions"
                      : "सटीक भविष्यवाणियों के साथ 97% ग्राहक संतुष्टि"
                  },
                  {
                    icon: Clock,
                    title: language === 'en' ? "Timely Solutions" : "समय पर समाधान",
                    desc: language === 'en'
                      ? "Personalized analysis within 24-48 hours"
                      : "24-48 घंटों के भीतर व्यक्तिगत विश्लेषण"
                  },
                  {
                    icon: Shield,
                    title: language === 'en' ? "100% Confidential" : "100% गोपनीय",
                    desc: language === 'en'
                      ? "Your data and consultations remain private"
                      : "आपका डेटा और परामर्श निजी रहता है"
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

          {/* Related Services */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {language === 'en' ? 'Explore More Services' : 'अन्य सेवाएं देखें'}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {language === 'en'
                    ? "Discover other ways we can help guide your journey"
                    : "अपनी यात्रा में मार्गदर्शन के अन्य तरीके खोजें"}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedServices.map((relatedService: any) => (
                  <Card key={relatedService.id} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#800000]/30 overflow-hidden">
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
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#800000] transition-colors">
                        {relatedService.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-2">
                        {relatedService.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <Button 
                        asChild 
                        className="w-full bg-gradient-to-r from-[#800000] to-[#a00000] hover:from-[#700000] hover:to-[#900000] text-white"
                      >
                        <Link href={`/services/${relatedService.id}`}>
                          {language === 'en' ? 'View Details' : 'विवरण देखें'}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
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
                    ? 'Ready to Transform Your Life?' 
                    : 'अपना जीवन बदलने के लिए तैयार हैं?'}
                </h2>
                
                <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                  {language === 'en'
                    ? "Book your consultation today and receive a free personalized remedy guide"
                    : "आज ही अपना परामर्श बुक करें और निःशुल्क व्यक्तिगत उपाय गाइड प्राप्त करें"}
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
                  <span>
                    {language === 'en' 
                      ? '4.9/5 based on 1,200+ reviews' 
                      : '1,200+ समीक्षाओं पर 4.9/5'}
                  </span>
                </div>
              </div>
            </div>
          </section>

          
        </div>
      );
    }