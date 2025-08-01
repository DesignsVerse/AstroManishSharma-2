"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Star, ShieldCheck, Truck, IndianRupee, Gem, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { content } from "@/data/content";
import { useLanguage } from "@/contexts/LanguageContext";
import WhatsAppCallButtons from "@/components/ui/WhatsAppCallButtons";
import Image from "next/image";

// Product type
interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  badge: string | null;
  rating: number;
  reviews: number;
  description: string;
  longDescription: string;
  benefits: string[];
  materials: string;
  ritual: string;
  deliveryInfo: string;
  details: string;
}

export default function ProductsPage() {
  const { language } = useLanguage();
  const products = (content as any)[language]?.products as Product[] || [];

  // Language specific content
  const pageContent = {
    en: {
      heroTitle: "Sacred Maa Baglamukhi Products",
      heroSubtitle: "Blessed by our priests with powerful mantras for spiritual growth and protection",
      shopNow: "Explore Collection",
      collectionTitle: "Divine Products Collection",
      collectionSubtitle: "Each product is carefully crafted and blessed to bring you spiritual benefits",
      whatsapp: "WhatsApp",
      callNow: "Call Now",
      benefitsTitle: "Why Our Products Are Special",
      guidanceTitle: "Need Help Choosing?",
      guidanceSubtitle: "Our spiritual experts will guide you to the perfect product for your needs",
      chatWhatsapp: "Chat on WhatsApp",
      callConsultation: "Call for Guidance",
      benefits: [
        {
          icon: <ShieldCheck className="w-8 h-8 text-[#800000]" />,
          title: "Authentic Blessings",
          description: "Properly sanctified with Vedic rituals and mantras"
        },
        {
          icon: <Truck className="w-8 h-8 text-[#800000]" />,
          title: "Fast Delivery",
          description: "Dispatched within 24 hours with secure packaging"
        },
        {
          icon: <Gem className="w-8 h-8 text-[#800000]" />,
          title: "Premium Craftsmanship",
          description: "Handcrafted with sacred materials and devotion"
        }
      ]
    },
    hi: {
      heroTitle: "माँ बगलामुखी के पवित्र उत्पाद",
      heroSubtitle: "हमारे पुजारियों द्वारा शक्तिशाली मंत्रों से अभिमंत्रित",
      shopNow: "संग्रह देखें",
      collectionTitle: "दिव्य उत्पाद संग्रह",
      collectionSubtitle: "प्रत्येक उत्पाद सावधानी से तैयार और आध्यात्मिक लाभ के लिए अभिमंत्रित",
      whatsapp: "व्हाट्सएप",
      callNow: "कॉल करें",
      benefitsTitle: "हमारे उत्पाद विशेष क्यों हैं",
      guidanceTitle: "चुनने में सहायता चाहिए?",
      guidanceSubtitle: "हमारे आध्यात्मिक विशेषज्ञ आपको सही उत्पाद चुनने में मार्गदर्शन देंगे",
      chatWhatsapp: "व्हाट्सएप पर चैट",
      callConsultation: "मार्गदर्शन के लिए कॉल",
      benefits: [
        {
          icon: <ShieldCheck className="w-8 h-8 text-[#800000]" />,
          title: "प्रामाणिक आशीर्वाद",
          description: "वैदिक अनुष्ठानों और मंत्रों से पवित्र किया गया"
        },
        {
          icon: <Truck className="w-8 h-8 text-[#800000]" />,
          title: "तेज डिलीवरी",
          description: "24 घंटे के भीतर सुरक्षित पैकेजिंग के साथ भेजा जाता है"
        },
        {
          icon: <Gem className="w-8 h-8 text-[#800000]" />,
          title: "उत्कृष्ट कारीगरी",
          description: "पवित्र सामग्री और भक्ति से हस्तनिर्मित"
        }
      ]
    }
  };

  const currentContent = pageContent[language as keyof typeof pageContent];

  return (
    <div className="bg-gradient-to-b from-[#f9f5f5] to-[#f0e6e6] min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#800000] to-[#600000] py-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/patterns/mandala-light.svg')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {currentContent.heroTitle}
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-orange-100">
            {currentContent.heroSubtitle}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-white text-[#800000] hover:bg-orange-50 px-8 py-6 text-lg font-semibold shadow-lg">
              {currentContent.shopNow}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16 bg-[#f9f5f5]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-[#800000] mb-4">
        {currentContent.collectionTitle}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        {currentContent.collectionSubtitle}
      </p>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products && products.length > 0 ? (
        products.map((product: Product) => (
          <motion.div
            key={product.id}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="overflow-hidden shadow-sm hover:shadow-md border-[#800000]/20 transition-all h-full flex flex-col group">
              {/* Product Image with Badge */}
              <div className="relative h-48 bg-[#f0e6e6]">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
                
                {product.badge && (
                  <Badge className="absolute top-2 right-2 bg-[#800000] text-white px-2 py-0.5 rounded-full text-xs font-bold">
                    {product.badge}
                  </Badge>
                )}
              </div>
              
              {/* Product Details */}
              <div className="p-4 flex flex-col flex-grow border-t border-[#800000]/10">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  <Link href={`/products/${product.slug}`} className="hover:text-[#800000] transition-colors">
                    {product.name}
                  </Link>
                </h2>
                
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex text-amber-500 mr-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">
                    ({product.reviews})
                  </span>
                </div>
                
                {/* Price */}
                <div className="mt-auto">
                  <p className="text-[#800000] font-bold text-base flex items-center">
                    <IndianRupee className="w-3 h-3 mr-1" />
                    {product.price.toLocaleString(language === 'hi' ? 'en-IN' : 'en-US')}
                    {product.originalPrice > product.price && (
                      <span className="ml-2 text-xs text-gray-500 line-through">
                        <IndianRupee className="w-2.5 h-2.5 inline mr-0.5" />
                        {product.originalPrice.toLocaleString(language === 'hi' ? 'en-IN' : 'en-US')}
                      </span>
                    )}
                  </p>
                  
                  {/* Buttons */}
                  <div className="mt-3 flex flex-col gap-2">
                    <Button 
                      asChild
                      className="bg-[#800000] hover:bg-[#700000] text-white text-sm h-8"
                    >
                      <Link href={`/products/${product.slug}`}>
                        {language === 'hi' ? 'देखें' : 'View'}
                      </Link>
                    </Button>
                    <WhatsAppCallButtons
                      whatsappNumber="917733994827"
                      callNumber="+917733994827"
                      whatsappText={currentContent.whatsapp}
                      callText={currentContent.callNow}
                      message={`नमस्ते पंडित मनीष शर्मा जी, मुझे ${product.name} की जानकारी चाहिए है`}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500 text-lg">
            {language === 'hi' ? 'कोई उत्पाद उपलब्ध नहीं है' : 'No products available'}
          </p>
        </div>
      )}
    </div>
  </div>
</div>
      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#800000] mb-12">
            {currentContent.benefitsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f9f5f5] p-8 rounded-xl border border-[#800000]/10 hover:shadow-md transition-all"
              >
                <div className="bg-[#800000]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-[#800000]">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[#800000] to-[#600000] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{currentContent.guidanceTitle}</h2>
            <p className="text-xl mb-8 text-orange-100">
              {currentContent.guidanceSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button 
                  className="bg-white text-[#800000] hover:bg-orange-50 px-8 py-6 text-lg font-semibold shadow-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" /> {currentContent.chatWhatsapp}
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-[#800000]/20 px-8 py-6 text-lg font-semibold shadow-lg"
                >
                  <Phone className="mr-2 h-5 w-5" /> {currentContent.callConsultation}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}