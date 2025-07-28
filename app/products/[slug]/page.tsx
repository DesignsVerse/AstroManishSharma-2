
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
    keyBenefits: "Key Benefits",
    devoteeExperiences: "Devotee Experiences",
    frequentlyAsked: "Frequently Asked Questions",
    whatsappInquiry: "WhatsApp Inquiry",
    callForGuidance: "Call for Guidance",
    divineAssurance: "Divine Assurance",
    authentic: "Authentic",
    fastDelivery: "Fast Delivery",
    premiumQuality: "Premium Quality",
    assuranceNote: "Each product is personally blessed by our head priest at the sacred Maa Baglamukhi Temple in Nalkheda. We include a certificate of authenticity and proper usage instructions with every order.",
    notFoundBack: "Back to Products"
  },
  hi: {
    backToProducts: "सभी उत्पादों पर जाएं",
    productNotFound: "उत्पाद नहीं मिला",
    keyBenefits: "मुख्य लाभ",
    devoteeExperiences: "भक्तों के अनुभव",
    frequentlyAsked: "अक्सर पूछे जाने वाले प्रश्न",
    whatsappInquiry: "व्हाट्सएप पूछताछ",
    callForGuidance: "मार्गदर्शन के लिए कॉल करें",
    divineAssurance: "दिव्य आश्वासन",
    authentic: "प्रामाणिक",
    fastDelivery: "तेज़ डिलीवरी",
    premiumQuality: "उत्तम गुणवत्ता",
    assuranceNote: "हर उत्पाद को हमारे मुख्य पुजारी द्वारा माँ बगलामुखी मंदिर, नलखेड़ा में विधिवत रूप से अभिमंत्रित किया जाता है। हर ऑर्डर के साथ प्रमाण पत्र और उपयोग की पूरी जानकारी दी जाती है।",
    notFoundBack: "सभी उत्पादों पर जाएं"
  }
};

const testimonials = {
  en: [
    { name: "Rajesh K.", location: "Delhi", text: "The Siddh Yantra has transformed my life. Within weeks of installation, my legal case was resolved in my favor.", rating: 5 },
    { name: "Priya M.", location: "Mumbai", text: "The energy from the Rudraksh Mala is palpable. I feel protected and empowered during my meditation practice.", rating: 4 },
    { name: "Amit S.", location: "Bangalore", text: "Authentic products with proper blessings. The team even guided me on how to use the yantra properly.", rating: 5 }
  ],
  hi: [
    { name: "राजेश के.", location: "दिल्ली", text: "सिद्ध यंत्र ने मेरी ज़िंदगी बदल दी। स्थापना के कुछ ही हफ्तों में मेरा कानूनी मामला मेरे पक्ष में हल हो गया।", rating: 5 },
    { name: "प्रिया एम.", location: "मुंबई", text: "रुद्राक्ष माला की ऊर्जा महसूस होती है। ध्यान के समय मैं सुरक्षित और सशक्त महसूस करती हूँ।", rating: 4 },
    { name: "अमित एस.", location: "बेंगलुरु", text: "असली उत्पाद, विधिवत पूजा के साथ। टीम ने यंत्र के उपयोग की सही विधि भी बताई।", rating: 5 }
  ]
};

const faqs = {
  en: [
    { question: "How are these products different from regular ones?", answer: "Our products are consecrated through proper Vedic rituals by experienced priests at the sacred Maa Baglamukhi Temple. Each item carries divine blessings and is made according to ancient specifications." },
    { question: "How should I use and maintain my yantra/mala?", answer: "We provide detailed instructions with each product. Generally, yantras should be placed in your worship area after proper installation rituals. Malas should be worn or used for japa with respect." },
    { question: "What is your return policy?", answer: "Due to the sacred nature of these items, we don't accept returns. However, if you receive a damaged product, we'll replace it immediately." }
  ],
  hi: [
    { question: "ये उत्पाद सामान्य से अलग कैसे हैं?", answer: "हमारे उत्पाद माँ बगलामुखी मंदिर में अनुभवी पुजारियों द्वारा वेदिक विधि से अभिमंत्रित किए जाते हैं। हर वस्तु में दिव्य आशीर्वाद होता है और यह प्राचीन विधि से बनाई जाती है।" },
    { question: "मैं यंत्र/माला का उपयोग और देखभाल कैसे करूं?", answer: "हर उत्पाद के साथ विस्तृत निर्देश दिए जाते हैं। सामान्यतः, यंत्र को पूजा स्थान पर विधिवत स्थापना के बाद रखें। माला को श्रद्धा से पहनें या जप के लिए उपयोग करें।" },
    { question: "आपकी रिटर्न पॉलिसी क्या है?", answer: "इन वस्तुओं की पवित्रता के कारण हम रिटर्न स्वीकार नहीं करते। यदि आपको टूटा हुआ उत्पाद मिले, तो हम तुरंत बदल देंगे।" }
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
    return <div className="bg-orange-50 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-orange-800 mb-4">{t.productNotFound}</h1>
        <Link href="/products" className="text-orange-600 hover:underline">
          {t.notFoundBack}
        </Link>
      </div>
    </div>;
  }

  return (
    <div className="bg-orange-50 min-h-screen">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/products" className="flex items-center text-orange-600 hover:text-orange-800 transition-colors">
            <ArrowLeft className="mr-2" /> {t.backToProducts}
          </Link>
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
          <div className="space-y-4">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-orange-100">
              <div className="relative aspect-square w-full max-w-xs sm:max-w-md md:max-w-lg lg:w-[500px] mx-auto">
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
              <Badge className="bg-orange-600 text-white px-4 py-2 text-sm">
                {product.badge}
              </Badge>
            )}
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="bg-white p-3 rounded-lg border border-orange-100 text-center">
                <ShieldCheck className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                <p className="text-xs text-gray-600">{t.authentic}</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-orange-100 text-center">
                <Truck className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                <p className="text-xs text-gray-600">{t.fastDelivery}</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-orange-100 text-center">
                <Gem className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                <p className="text-xs text-gray-600">{t.premiumQuality}</p>
              </div>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-800 mb-2">{product.name}</h1>
            
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
              <span className="text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-orange-700 font-bold text-3xl flex items-center">
                  <IndianRupee className="w-5 h-5 mr-1" />
                  {product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="ml-2 text-gray-500 line-through flex items-center">
                    <IndianRupee className="w-4 h-4 mr-0.5" />
                    {product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <span className="text-green-600 text-sm">
                  {Math.round((1 - product.price/product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>
            
            {/* Description */}
            <div className="prose mb-8">
              <p className="text-gray-700 mb-2 text-base md:text-lg">{product.description}</p>
              <p className="text-gray-700 text-sm md:text-base">{product.longDescription}</p>
            </div>
            
            {/* Key Features */}
            <div className="mb-8">
              <h3 className="font-bold text-lg md:text-xl text-orange-800 mb-3">{t.keyBenefits}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {product.benefits.map((benefit: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
    
            
            {/* CTA Buttons */}
            <WhatsAppCallButtons
              whatsappNumber="917733994827"
              callNumber="+917733994827"
              whatsappText={t.whatsappInquiry}
              callText={t.callForGuidance}
              message={`I'm interested in ${product.name} (${typeof window !== 'undefined' ? window.location.href : ''})`}
              className="mb-8"
            />
            
            {/* Assurance Note */}
            <div className="p-6 bg-white rounded-xl border border-orange-200 shadow-sm">
              <div className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-orange-800 mb-2">{t.divineAssurance}</h3>
                  <p className="text-gray-700">
                    {t.assuranceNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Testimonials Section */}
        <div className="mt-16 sm:mt-20 px-2 sm:px-0">
          <h2 className="text-xl md:text-2xl font-bold text-center text-orange-800 mb-8">{t.devoteeExperiences}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonialList.map((testimonial, i: number) => (
              <Card key={i} className="p-6 bg-white">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j: number) => (
                    <Star 
                      key={j}
                      className={`w-4 h-4 ${j < testimonial.rating ? 'text-amber-500 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-orange-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16 sm:mt-20 max-w-3xl mx-auto px-2 sm:px-0">
          <h2 className="text-xl md:text-2xl font-bold text-center text-orange-800 mb-8">{t.frequentlyAsked}</h2>
          <div className="space-y-4">
            {faqList.map((faq, i: number) => (
              <Card key={i} className="p-6 bg-white">
                <h3 className="font-semibold text-orange-800 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </Card>
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