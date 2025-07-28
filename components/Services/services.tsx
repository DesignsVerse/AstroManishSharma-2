"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { servicesEn } from "@/data/services/services-en";
import { servicesHi } from "@/data/services/services-hi";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Sparkles, ArrowRight, Globe, BookOpen, HeartHandshake, Star, Clock, Shield, Target, Users, CheckCircle, Phone } from "lucide-react";
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
  shortDesc?: string;
  image: string;
  duration?: string;
  content?: { heading: string; description: string }[];
  overview?: string;
  benefits?: string[];
}

interface ServicesData {
  title: string;
  subtitle: string;
  hero?: any;
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
    url: "http://bestmaabaglamukhipandit.com/services/maa-baglamukhi-services.avif",
    type: "website",
    images: [
      {
        url: "http://bestmaabaglamukhipandit.com/services/maa-baglamukhi-services.avif",
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
    <div className="min-h-screen bg-[#F9F5F5]">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      {/* Hero Section */}
      <section className="relative pt-8 pb-12 md:pt-16 md:pb-20 bg-gradient-to-b from-[#800000] to-[#600000]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/patterns/mandala-light.svg')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8 md:gap-12">
            {/* Left Content */}
            <motion.div
              className="w-full space-y-6 text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-white/10 text-white px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/20 mb-3">
                <Sparkles className="w-3 h-3 mr-1.5 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm font-medium">
                  {language === "en" ? "Maa Baglamukhi Puja" : "माँ बगलामुखी पूजा"}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {language === "en"
                  ? "Divine Blessings with Maa Baglamukhi"
                  : "माँ बगलामुखी के साथ दिव्य आशीर्वाद"}
              </h1>
              <p className="text-base md:text-lg text-orange-100">
                {language === "en"
                  ? "Experience authentic Maa Baglamukhi Puja and Pujan by Pandit Manish Sharma at Maa Baglamukhi Mandir"
                  : "माँ बगलामुखी मंदिर में पंडित मनीष शर्मा द्वारा प्रामाणिक माँ बगलामुखी पूजा और पूजन का अनुभव करें"}
              </p>
              {/* Key Points */}
              <div className="space-y-3">
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
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            {/* Right Image */}
            <motion.div
              className="w-full max-w-xs md:max-w-md"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-square w-full">
                <Image
                  src="/maa-baglamukhi-services.avif"
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
      <section className="relative bg-[#F9F5F5] z-10 -mt-8 md:-mt-12">
        <div className="container mx-auto px-4">
          <Card className="bg-white shadow-xl rounded-2xl overflow-hidden border-0">
            <div className="p-1 bg-gradient-to-r from-amber-500 to-[#800000]">
              <div className="bg-white p-4 md:p-6 rounded-xl">
                <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-4">
                  {language === "en"
                    ? "Find Your Spiritual Solution"
                    : "अपना आध्यात्मिक समाधान खोजें"}
                </h2>
                <div className="max-w-2xl mx-auto">
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
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
                          <Input
                            type="text"
                            placeholder={
                              language === "en"
                                ? "Search by problem or service..."
                                : "समस्या या सेवा के अनुसार खोजें..."
                            }
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 pr-3 py-4 text-sm md:text-base border-0 focus:ring-0"
                          />
                        </div>
                        <Button
                          className="bg-gradient-to-r from-amber-500 to-[#800000] hover:from-amber-600 hover:to-[#900000] text-white px-4 py-4 md:px-6 md:py-5 rounded-none text-sm md:text-base"
                        >
                          {language === "en" ? "Search" : "खोजें"}
                          <ArrowRight className="ml-1.5 w-3 h-3 md:w-4 md:h-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                  {searchQuery && (
                    <p className="text-xs md:text-sm text-gray-500 mt-2 text-center">
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
      <section className="py-12 md:py-16 bg-[#F9F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-3">
              <div className="w-2 h-2 bg-[#800000] rounded-full mr-1.5"></div>
              <div className="w-8 h-1 bg-[#800000] rounded-full mr-1.5"></div>
              <span className="text-xs font-medium text-[#800000] uppercase tracking-wider">
                {language === "en" ? "Our Services" : "हमारी सेवाएं"}
              </span>
              <div className="w-8 h-1 bg-[#800000] rounded-full ml-1.5"></div>
              <div className="w-2 h-2 bg-[#800000] rounded-full ml-1.5"></div>
            </div>
            <div className="px-2">
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3">
                {servicesData.title}
              </h2>
              <p className="text-sm md:text-lg text-gray-600 max-w-md md:max-w-2xl mx-auto">
                {servicesData.subtitle}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredServices.map((service: Service, index: number) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#800000]/20 to-amber-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <Card className="relative h-full bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#800000] to-amber-600"></div>
                  <CardHeader className="pb-2 text-center pt-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#800000] to-[#a00000] rounded-full blur-sm opacity-30"></div>
                      <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-md border-4 border-white">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={48}
                          height={48}
                          className="rounded-full object-cover w-8 h-8 md:w-10 md:h-10"
                        />
                      </div>
                    </div>
                    <CardTitle className="text-sm md:text-base font-bold text-gray-900 group-hover:text-[#800000] transition-colors">
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
                          className="bg-white text-[#800000] hover:bg-gray-100 px-4 py-3 text-xs md:text-sm font-bold shadow-lg hover:shadow-xl transition-all"
                        >
                          <a
                            href={`https://wa.me/917733994827?text=Namaste%2C%20mujhe%20${encodeURIComponent(
                              service.title
                            )}%20puja%20booking%20karni%20hai.`}
                            target="_blank"
                          >
                            {language === "en" ? "WhatsApp" : "व्हाट्सएप"}
                          </a>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="bg-white text-black border-[#800000] border-2 px-4 py-3 text-xs md:text-sm font-bold shadow-lg hover:shadow-xl transition-all"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-[#f8f4f0] to-[#f0e6e0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-3xl font-bold text-[#800000] mb-3">
              {language === "en" ? "Our Sacred Approach" : "हमारा पवित्र दृष्टिकोण"}
            </h2>
            <p className="text-sm md:text-lg text-gray-700 max-w-md md:max-w-2xl mx-auto">
              {language === "en"
                ? "Authentic Vedic rituals combined with Pandit Manish Sharma's expertise"
                : "प्रामाणिक वैदिक अनुष्ठानों का पंडित मनीष शर्मा की विशेषज्ञता के साथ संयोजन"}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-[#800000]/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="bg-[#800000]/10 p-2 md:p-3 rounded-full w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 flex items-center justify-center">
                  <item.icon className="w-4 h-4 md:w-6 md:h-6 text-[#800000]" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-center text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3">
              {language === "en" ? "Why Choose Us" : "हमें क्यों चुनें"}
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-md md:max-w-2xl mx-auto">
              {language === "en"
                ? "Our services deliver divine transformations for devotees"
                : "हमारी सेवाएँ भक्तों के लिए दिव्य परिवर्तन प्रदान करती हैं"}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
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
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 bg-[#800000]/10 p-2 rounded-full">
                  <benefit.icon className="w-4 h-4 md:w-5 md:h-5 text-[#800000]" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-16 bg-[#800000] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/patterns/mandala-light.svg')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-3 text-xs md:text-sm">
                {language === "en" ? "Limited Availability" : "सीमित उपलब्धता"}
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                {language === "en"
                  ? "Transform Your Life with Maa Baglamukhi's Blessings"
                  : "माँ बगलामुखी के आशीर्वाद से अपना जीवन बदलें"}
              </h2>
              <p className="text-sm md:text-lg text-orange-100 mb-4 md:mb-6 max-w-md md:max-w-2xl mx-auto">
                {language === "en"
                  ? "Book your Maa Baglamukhi Puja with Pandit Manish Sharma today and receive divine guidance"
                  : "आज ही पंडित मनीष शर्मा के साथ अपनी माँ बगलामुखी पूजा बुक करें और दिव्य मार्गदर्शन प्राप्त करें"}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
                <Button
                  asChild
                  size="sm"
                  className="bg-white text-[#800000] hover:bg-gray-100 px-4 py-3 md:px-6 md:py-4 text-xs md:text-base font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/contact">
                    {language === "en" ? "Book Now" : "अभी बुक करें"}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 border-white border-2 px-4 py-3 md:px-6 md:py-4 text-xs md:text-base font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/services">
                    {language === "en" ? "View All Services" : "सभी सेवाएं देखें"}
                  </Link>
                </Button>
              </div>
              <div className="mt-4 md:mt-6 flex items-center justify-center gap-1.5 text-orange-200 text-xs md:text-sm">
                <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
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