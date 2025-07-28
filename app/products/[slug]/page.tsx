"use client";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowLeft, Star, ShieldCheck, Truck, Gem, Check, IndianRupee } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import { productsEn } from "@/data/products/products-en";
import { productsHi } from "@/data/products/products-hi";
import { useLanguage } from "@/contexts/LanguageContext";
import WhatsAppCallButtons from "@/components/ui/WhatsAppCallButtons";

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

const translations = {
  en: {
    backToProducts: "Back to Products",
    productNotFound: "Product Not Found",
    keyBenefits: "Sacred Benefits",
    devoteeExperiences: "Devotee Blessings",
    frequentlyAsked: "Divine Guidance",
    whatsappInquiry: "Chat on WhatsApp",
    callForGuidance: "Call for Blessings",
    divineAssurance: "Sacred Guarantee",
    authentic: "Priest-Blessed",
    fastDelivery: "Swift Delivery",
    premiumQuality: "Divine Craftsmanship",
    assuranceNote: "Each product is personally sanctified by our head priest at the sacred Maa Baglamukhi Temple with Vedic rituals for maximum spiritual potency.",
    notFoundBack: "Explore Sacred Products",
    materials: "Sacred Materials",
    ritual: "Consecration Process",
    delivery: "Blessed Delivery",
    details: "Divine Specifications"
  },
  hi: {
    backToProducts: "सभी उत्पाद देखें",
    productNotFound: "उत्पाद नहीं मिला",
    keyBenefits: "पवित्र लाभ",
    devoteeExperiences: "भक्तों के आशीर्वाद",
    frequentlyAsked: "दिव्य मार्गदर्शन",
    whatsappInquiry: "व्हाट्सएप पर चैट",
    callForGuidance: "आशीर्वाद के लिए कॉल",
    divineAssurance: "पवित्र गारंटी",
    authentic: "पुजारी-अभिमंत्रित",
    fastDelivery: "शीघ्र वितरण",
    premiumQuality: "दिव्य कारीगरी",
    assuranceNote: "प्रत्येक उत्पाद को माँ बगलामुखी मंदिर में हमारे मुख्य पुजारी द्वारा वैदिक अनुष्ठानों के साथ व्यक्तिगत रूप से पवित्र किया जाता है जिससे अधिकतम आध्यात्मिक शक्ति प्राप्त हो।",
    notFoundBack: "पवित्र उत्पाद देखें",
    materials: "पवित्र सामग्री",
    ritual: "अभिषेक प्रक्रिया",
    delivery: "आशीर्वादित वितरण",
    details: "दिव्य विशेषताएं"
  }
};

const testimonials = {
  en: [
    { name: "Rajesh K.", location: "Delhi", text: "The divine energy from this yantra transformed my life. My legal struggles ended within weeks of installation.", rating: 5 },
    { name: "Priya M.", location: "Mumbai", text: "I feel Maa's protection constantly since wearing this blessed mala. My meditation has deepened significantly.", rating: 5 },
    { name: "Amit S.", location: "Bangalore", text: "Authentic priest-blessed products with noticeable spiritual energy. The guidance provided was invaluable.", rating: 5 }
  ],
  hi: [
    { name: "राजेश के.", location: "दिल्ली", text: "इस यंत्र से मिली दिव्य ऊर्जा ने मेरा जीवन बदल दिया। स्थापना के कुछ ही सप्ताह में मेरे कानूनी संघर्ष समाप्त हो गए।", rating: 5 },
    { name: "प्रिया एम.", location: "मुंबई", text: "इस माला को धारण करने के बाद से मैं लगातार माँ की सुरक्षा महसूस करती हूँ। मेरा ध्यान गहरा हो गया है।", rating: 5 },
    { name: "अमित एस.", location: "बेंगलुरु", text: "पुजारी द्वारा अभिमंत्रित असली उत्पाद जिनमें स्पष्ट आध्यात्मिक ऊर्जा महसूस होती है। दिया गया मार्गदर्शन अमूल्य था।", rating: 5 }
  ]
};

const faqs = {
  en: [
    { question: "How does this differ from regular spiritual products?", answer: "Our products undergo rigorous Vedic consecration rituals by temple priests, infusing them with authentic divine energy unavailable in commercial alternatives." },
    { question: "What's the proper way to use this sacred item?", answer: "Detailed instructions are included. Generally, perform a simple purification ritual before use, place in your sacred space, and maintain with regular devotion." },
    { question: "Can I return spiritually charged items?", answer: "Due to their sacred nature, returns aren't accepted. However, we guarantee replacement for any damaged items during transit." }
  ],
  hi: [
    { question: "यह सामान्य आध्यात्मिक उत्पादों से कैसे भिन्न है?", answer: "हमारे उत्पाद मंदिर के पुजारियों द्वारा कठोर वैदिक अभिषेक अनुष्ठानों से गुजरते हैं, जो उन्हें वाणिज्यिक विकल्पों में उपलब्ध नहीं होने वाली प्रामाणिक दिव्य ऊर्जा से भर देते हैं।" },
    { question: "इस पवित्र वस्तु का उपयोग करने का सही तरीका क्या है?", answer: "विस्तृत निर्देश शामिल हैं। सामान्यतः, उपयोग से पहले एक सरल शुद्धिकरण अनुष्ठान करें, इसे अपने पवित्र स्थान पर रखें और नियमित भक्ति के साथ रखरखाव करें।" },
    { question: "क्या मैं आध्यात्मिक रूप से सक्रिय वस्तुओं को वापस कर सकता हूँ?", answer: "उनकी पवित्र प्रकृति के कारण, रिटर्न स्वीकार नहीं किए जाते हैं। हालाँकि, हम ट्रांजिट के दौरान क्षतिग्रस्त वस्तुओं के लिए प्रतिस्थापन की गारंटी देते हैं।" }
  ]
};

function ProductPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { language } = useLanguage();
  const products = language === "hi" ? productsHi : productsEn;
  const product = products.find((p: Product) => p.slug === params.slug);
  const t = translations[language];
  const testimonialList = testimonials[language];
  const faqList = faqs[language];

  if (!product) {
    return (
      <div className="bg-gradient-to-b from-[#f9f5f5] to-[#f0e6e6] min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md mx-4">
          <h1 className="text-2xl font-bold text-[#800000] mb-4">{t.productNotFound}</h1>
          <Button asChild className="bg-[#800000] hover:bg-[#700000] text-white">
            <Link href="/products">{t.notFoundBack}</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#f9f5f5] to-[#f0e6e6] min-h-screen">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Button asChild variant="ghost" className="text-[#800000] hover:bg-[#800000]/10">
            <Link href="/products" className="flex items-center">
              <ArrowLeft className="mr-2" /> {t.backToProducts}
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Product Image Gallery */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-[#800000]/10 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#800000]/10 to-amber-600/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>
              <div className="relative aspect-square w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            
            {product.badge && (
              <Badge className="bg-[#800000] text-white px-4 py-1.5 text-sm font-medium">
                {product.badge}
              </Badge>
            )}
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-[#800000]/10 text-center shadow-sm hover:shadow-md transition-all">
                <div className="bg-[#800000]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <ShieldCheck className="w-6 h-6 text-[#800000]" />
                </div>
                <p className="text-sm font-medium text-[#800000]">{t.authentic}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-[#800000]/10 text-center shadow-sm hover:shadow-md transition-all">
                <div className="bg-[#800000]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Truck className="w-6 h-6 text-[#800000]" />
                </div>
                <p className="text-sm font-medium text-[#800000]">{t.fastDelivery}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-[#800000]/10 text-center shadow-sm hover:shadow-md transition-all">
                <div className="bg-[#800000]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Gem className="w-6 h-6 text-[#800000]" />
                </div>
                <p className="text-sm font-medium text-[#800000]">{t.premiumQuality}</p>
              </div>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            <h1 className="text-3xl md:text-4xl font-bold text-[#800000] mb-3">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-amber-500 mr-2">
                {[...Array(5)].map((_, i: number) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                  />
                ))}
              </div>
              <span className="text-gray-600 text-sm">
                {product.rating} ({product.reviews} {language === 'hi' ? 'समीक्षाएँ' : 'reviews'})
              </span>
            </div>
            
            {/* Price */}
            <div className="mb-6 p-4 bg-[#800000]/5 rounded-lg border border-[#800000]/10">
              <div className="flex items-baseline">
                <span className="text-[#800000] font-bold text-3xl flex items-center">
                  <IndianRupee className="w-5 h-5 mr-1" />
                  {product.price.toLocaleString(language === 'hi' ? 'en-IN' : 'en-US')}
                </span>
                {product.originalPrice > product.price && (
                  <span className="ml-3 text-gray-500 line-through flex items-center text-lg">
                    <IndianRupee className="w-4 h-4 mr-0.5" />
                    {product.originalPrice.toLocaleString(language === 'hi' ? 'en-IN' : 'en-US')}
                  </span>
                )}
              </div>
              {product.originalPrice > product.price && (
                <span className="text-green-600 text-sm font-medium">
                  {Math.round((1 - product.price/product.originalPrice) * 100)}% {language === 'hi' ? 'छूट' : 'OFF'}
                </span>
              )}
            </div>
            
            {/* Description */}
            <div className="prose mb-8">
              <p className="text-gray-700 mb-4 text-lg">{product.description}</p>
              <p className="text-gray-600">{product.longDescription}</p>
            </div>
            
            {/* Key Features */}
            <div className="mb-8">
              <h3 className="font-bold text-xl text-[#800000] mb-4 border-b border-[#800000]/20 pb-2">
                {t.keyBenefits}
              </h3>
              <ul className="space-y-3">
                {product.benefits.map((benefit: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-[#800000]/10 p-1 rounded-full mr-3">
                      <Check className="w-4 h-4 text-[#800000]" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Product Details Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card className="p-4 border-[#800000]/10">
                <h4 className="font-semibold text-[#800000] mb-2">{t.materials}</h4>
                <p className="text-gray-600 text-sm">{product.materials}</p>
              </Card>
              <Card className="p-4 border-[#800000]/10">
                <h4 className="font-semibold text-[#800000] mb-2">{t.ritual}</h4>
                <p className="text-gray-600 text-sm">{product.ritual}</p>
              </Card>
              <Card className="p-4 border-[#800000]/10">
                <h4 className="font-semibold text-[#800000] mb-2">{t.delivery}</h4>
                <p className="text-gray-600 text-sm">{product.deliveryInfo}</p>
              </Card>
              <Card className="p-4 border-[#800000]/10">
                <h4 className="font-semibold text-[#800000] mb-2">{t.details}</h4>
                <p className="text-gray-600 text-sm">{product.details}</p>
              </Card>
            </div>
            
            {/* CTA Buttons */}
            <div className="space-y-3 mb-8">
              <WhatsAppCallButtons
                whatsappNumber="917733994827"
                callNumber="+917733994827"
                whatsappText={t.whatsappInquiry}
                callText={t.callForGuidance}
                message={`I'm interested in ${product.name} (${typeof window !== 'undefined' ? window.location.href : ''})`}
                whatsappClass="bg-green-600 hover:bg-green-700 text-white w-full py-6 text-lg"
                callClass="border-[#800000] text-[#800000] hover:bg-[#800000]/10 w-full py-6 text-lg"
              />
            </div>
            
            {/* Assurance Note */}
            <Card className="p-6 bg-[#800000]/5 border-[#800000]/10">
              <div className="flex items-start">
                <div className="bg-[#800000]/10 p-2 rounded-full mr-4">
                  <ShieldCheck className="w-6 h-6 text-[#800000]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#800000] mb-2">{t.divineAssurance}</h3>
                  <p className="text-gray-700">
                    {t.assuranceNote}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
        
        {/* Testimonials Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-[#800000] mb-8">
            {t.devoteeExperiences}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialList.map((testimonial, i: number) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-6 bg-white border-[#800000]/10 h-full">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, j: number) => (
                      <Star 
                        key={j}
                        className={`w-5 h-5 ${j < testimonial.rating ? 'text-amber-500 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-[#800000]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-[#800000] mb-8">
            {t.frequentlyAsked}
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, i: number) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.1 }}
              >
                <Card className="p-6 bg-white border-[#800000]/10">
                  <h3 className="font-semibold text-[#800000] mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductPageWrapper(props: { params: { slug: string } }) {
  return <ProductPage {...props} />;
}