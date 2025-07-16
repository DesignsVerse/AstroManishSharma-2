"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { servicesEn } from "@/data/services/services-en";
import { servicesHi } from "@/data/services/services-hi";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Sparkles, ArrowRight, Globe, BookOpen, HeartHandshake, Star, Clock, Shield, Target, Users, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

// Define TypeScript interfaces
interface Service {
  id: string;
  title: string;
  description: string;
  shortDesc?: string; // Made optional
  image: string;
  duration?: string;
  content?: { heading: string; description: string }[];
  overview?: string;
  benefits?: string[];
}

interface ServicesData {
  title: string;
  subtitle: string;
  hero?: any; // Added optional hero property
  items: Service[];
}

interface LanguageContext {
  language: "en" | "hi";
}

// Metadata for SEO
export const metadata = {
  title: "Maa Baglamukhi Puja Services | Pandit Manish Sharma",
  description:
    "Discover divine Maa Baglamukhi Puja and Pujan services by Pandit Manish Sharma at Maa Baglamukhi Mandir, offering spiritual guidance and protection.",
  keywords: [
    "Maa Baglamukhi Mandir",
    "Maa Baglamukhi Puja",
    "Maa Baglamukhi Pandit",
    "Maa Baglamukhi Pujan",
    "Best Maa Baglamukhi Pandit",
    "Best Maa Baglamukhi Puja",
    "Pandit Manish Sharma",
    "Baglamukhi Pandit Manish Sharma",
    "Maa Baglamukhi Pandit Manish Sharma",
  ],
  openGraph: {
    title: "Maa Baglamukhi Puja Services | Maa Baglamukhi Mandir",
    description:
      "Experience authentic Maa Baglamukhi Puja and Pujan by Pandit Manish Sharma, the Best Maa Baglamukhi Pandit, at Maa Baglamukhi Mandir.",
    url: "http://bestmaabaglamukhipandit.com/services",
    type: "website",
    images: [
      {
        url: "http://bestmaabaglamukhipandit.com/services/maa-baglamukhi-services.jpg",
        width: 1200,
        height: 630,
        alt: "Maa Baglamukhi Puja Services by Pandit Manish Sharma",
      },
    ],
  },
};

const ServicesPage: React.FC = () => {
  const { language } = useLanguage() as LanguageContext;
  const servicesData: ServicesData = language === "en" ? servicesEn : servicesHi;
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter services
  const filteredServices = servicesData.items.filter((service: Service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Maa Baglamukhi Puja Services",
    description:
      "Authentic Maa Baglamukhi Puja and Pujan services by Pandit Manish Sharma at Maa Baglamukhi Mandir, offering divine protection and spiritual guidance.",
    provider: {
      "@type": "Person",
      name: "Pandit Manish Sharma",
      jobTitle: "Best Maa Baglamukhi Pandit",
    },
    areaServed: {
      "@type": "Place",
      name: "Maa Baglamukhi Mandir",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Maa Baglamukhi Services",
      itemListElement: servicesData.items.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDesc,
        },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-orange-50">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-[#800000] to-[#600000]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/patterns/mandala-light.svg')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <motion.div
              className="lg:w-1/2 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">
                  {language === "en" ? "Maa Baglamukhi Puja" : "माँ बगलामुखी पूजा"}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {language === "en"
                  ? "Divine Blessings with Maa Baglamukhi"
                  : "माँ बगलामुखी के साथ दिव्य आशीर्वाद"}
              </h1>
              <p className="text-lg text-orange-100">
                {language === "en"
                  ? "Experience authentic Maa Baglamukhi Puja and Pujan by Pandit Manish Sharma at Maa Baglamukhi Mandir"
                  : "माँ बगलामुखी मंदिर में पंडित मनीष शर्मा द्वारा प्रामाणिक माँ बगलामुखी पूजा और पूजन का अनुभव करें"}
              </p>
              {/* Key Points */}
              <div className="space-y-4">
                {[
                  language === "en"
                    ? "Divine protection through Maa Baglamukhi Puja"
                    : "माँ बगलामुखी पूजा के माध्यम से दिव्य संरक्षण",
                  language === "en"
                    ? "Personalized spiritual guidance by Pandit Manish Sharma"
                    : "पंडित मनीष शर्मा द्वारा व्यक्तिगत आध्यात्मिक मार्गदर्शन",
                  language === "en"
                    ? "Custom rituals at Maa Baglamukhi Mandir"
                    : "माँ बगलामुखी मंदिर में अनुकूलित अनुष्ठान",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            {/* Right Image */}
            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-square w-full max-w-lg mx-auto">
                <Image
                  src="/services/maa-baglamukhi-services.jpg"
                  alt={
                    language === "en"
                      ? "Maa Baglamukhi Puja Services"
                      : "माँ बगलामुखी पूजा सेवाएँ"
                  }
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
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
                  {language === "en"
                    ? "Find Your Spiritual Solution"
                    : "अपना आध्यात्मिक समाधान खोजें"}
                </h2>
                <div className="max-w-3xl mx-auto">
                  <motion.div
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-[#800000]/10 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                      <div className="flex flex-col md:flex-row">
                        <div className="relative flex-grow">
                          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            type="text"
                            placeholder={
                              language === "en"
                                ? "Search by problem or service..."
                                : "समस्या या सेवा के अनुसार खोजें..."
                            }
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 pr-4 py-5 text-base border-0 focus:ring-0"
                          />
                        </div>
                        <Button
                          className="bg-gradient-to-r from-amber-500 to-[#800000] hover:from-amber-600 hover:to-[#900000] text-white px-6 py-5 rounded-none"
                        >
                          {language === "en" ? "Search" : "खोजें"}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                  {searchQuery && (
                    <p className="text-sm text-gray-500 mt-3 text-center">
                      {language === "en"
                        ? `Found ${filteredServices.length} solution${filteredServices.length !== 1 ? "s" : ""}`
                        : `${filteredServices.length} समाधान मिल${filteredServices.length !== 1 ? "े" : "ा"}`}
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
                {language === "en" ? "Our Services" : "हमारी सेवाएं"}
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
            {filteredServices.map((service: Service, index: number) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
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
                      {service.shortDesc || service.description.substring(0, 60) + "..."}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 pb-6 text-center">
                    <div className="mb-6 px-4">
                      <p className="text-gray-700 min-h-[60px] text-sm md:text-base">
                        {service.description.length > 120
                          ? service.description.substring(0, 120) + "..."
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
                          {language === "en" ? "View Details" : "विवरण देखें"}
                        </Link>
                      </Button>
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-[#800000] to-[#a00000] hover:from-[#700000] hover:to-[#900000] text-white h-11 text-sm md:text-base shadow-md hover:shadow-lg transition-all"
                      >
                        <Link href="/contact">
                          {language === "en" ? "Book Consultation" : "परामर्श बुक करें"}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8f4f0] to-[#f0e6e0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#800000] mb-4">
              {language === "en" ? "Our Sacred Approach" : "हमारा पवित्र दृष्टिकोण"}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {language === "en"
                ? "Authentic Vedic rituals combined with Pandit Manish Sharma’s expertise"
                : "प्रामाणिक वैदिक अनुष्ठानों का पंडित मनीष शर्मा की विशेषज्ञता के साथ संयोजन"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: language === "en" ? "Sacred Rituals" : "पवित्र अनुष्ठान",
                desc: language === "en"
                  ? "Meticulously performed Maa Baglamukhi Puja at Maa Baglamukhi Mandir"
                  : "माँ बगलामुखी मंदिर में सावधानीपूर्वक आयोजित माँ बगलामुखी पूजा",
              },
              {
                icon: BookOpen,
                title: language === "en" ? "Vedic Traditions" : "वैदिक परंपराएँ",
                desc: language === "en"
                  ? "Rooted in ancient Maa Baglamukhi scriptures and practices"
                  : "प्राचीन माँ बगलामुखी ग्रंथों और प्रथाओं में निहित",
              },
              {
                icon: HeartHandshake,
                title: language === "en" ? "Personalized Guidance" : "व्यक्तिगत मार्गदर्शन",
                desc: language === "en"
                  ? "Tailored spiritual solutions by Pandit Manish Sharma"
                  : "पंडित मनीष शर्मा द्वारा अनुकूलित आध्यात्मिक समाधान",
              },
              {
                icon: Users,
                title: language === "en" ? "Devotee-Centric" : "भक्त-केंद्रित",
                desc: language === "en"
                  ? "Focused on empowering devotees with divine blessings"
                  : "भक्तों को दिव्य आशीर्वाद से सशक्त बनाने पर केंद्रित",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-[#800000]/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="bg-[#800000]/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#800000]" />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === "en" ? "Why Choose Us" : "हमें क्यों चुनें"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "en"
                ? "Our services deliver divine transformations for devotees"
                : "हमारी सेवाएँ भक्तों के लिए दिव्य परिवर्तन प्रदान करती हैं"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Users,
                title: language === "en" ? "Expert Pandit" : "विशेषज्ञ पंडित",
                desc: language === "en"
                  ? "Pandit Manish Sharma, the Best Maa Baglamukhi Pandit, brings 25+ years of experience"
                  : "पंडित मनीष शर्मा, सर्वश्रेष्ठ माँ बगलामुखी पंडित, 25+ वर्षों का अनुभव लाते हैं",
              },
              {
                icon: Target,
                title: language === "en" ? "Focused Rituals" : "केंद्रित अनुष्ठान",
                desc: language === "en"
                  ? "Targeted pujas to address specific life challenges"
                  : "विशिष्ट जीवन चुनौतियों को संबोधित करने के लिए लक्षित पूजाएँ",
              },
              {
                icon: Clock,
                title: language === "en" ? "Timely Blessings" : "समय पर आशीर्वाद",
                desc: language === "en"
                  ? "Receive divine guidance when you need it most"
                  : "जब आपको सबसे अधिक आवश्यकता हो, तब दिव्य मार्गदर्शन प्राप्त करें",
              },
              {
                icon: Shield,
                title: language === "en" ? "Complete Privacy" : "पूर्ण गोपनीयता",
                desc: language === "en"
                  ? "Your consultations and rituals remain strictly confidential"
                  : "आपके परामर्श और अनुष्ठान पूरी तरह से गोपनीय रहते हैं",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 bg-[#800000]/10 p-3 rounded-full">
                  <benefit.icon className="w-6 h-6 text-[#800000]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              </motion.div>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full mb-6 border border-white/30">
                {language === "en" ? "Limited Availability" : "सीमित उपलब्धता"}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {language === "en"
                  ? "Transform Your Life with Maa Baglamukhi’s Blessings"
                  : "माँ बगलामुखी के आशीर्वाद से अपना जीवन बदलें"}
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                {language === "en"
                  ? "Book your Maa Baglamukhi Puja with Pandit Manish Sharma today and receive divine guidance"
                  : "आज ही पंडित मनीष शर्मा के साथ अपनी माँ बगलामुखी पूजा बुक करें और दिव्य मार्गदर्शन प्राप्त करें"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#800000] hover:bg-gray-100 px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/contact">
                    {language === "en" ? "Book Now" : "अभी बुक करें"}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10 border-white border-2 px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/services">
                    {language === "en" ? "View All Services" : "सभी सेवाएं देखें"}
                  </Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center gap-2 text-orange-200">
                <Star className="w-5 h-5 fill-current" />
                <span>
                  {language === "en"
                    ? "4.9/5 based on 1,200+ reviews"
                    : "1,200+ समीक्षाओं पर 4.9/5"}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;