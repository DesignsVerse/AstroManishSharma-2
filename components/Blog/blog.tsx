"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { blogDataEn } from "@/data/blog/blog-en";
import { blogDataHi } from "@/data/blog/blog-hi";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Head from "next/head";

// Define TypeScript interfaces
interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  category: string;
  content: Array<{ heading: string; description: string }>;
}

interface BlogData {
  title: string;
  subtitle: string;
  posts: BlogPost[];
}

interface Category {
  id: string;
  label: string;
}

interface LanguageContext {
  language: "en" | "hi";
}

// Metadata for SEO
export const metadata = {
  title: "Maa Baglamukhi Blog | Pandit Manish Sharma",
  description:
    "Explore divine insights about Maa Baglamukhi Puja, Pujan, and Maa Baglamukhi Mandir from Pandit Manish Sharma, the Best Maa Baglamukhi Pandit.",
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
    title: "Maa Baglamukhi Blog | Maa Baglamukhi Mandir",
    description:
      "Discover spiritual wisdom on Maa Baglamukhi Puja and Pujan by Pandit Manish Sharma at Maa Baglamukhi Mandir.",
    url: "http://bestmaabaglamukhipandit.com/blog",
    type: "website",
    images: [
      {
        url: "http://bestmaabaglamukhipandit.com/maa-baglamukhi-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Maa Baglamukhi Blog by Pandit Manish Sharma",
      },
    ],
  },
};

const BlogPage: React.FC = () => {
  const { language } = useLanguage() as LanguageContext;
  const blogData: BlogData = language === "en" ? blogDataEn : blogDataHi;
  const posts = blogData.posts;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState<number>(0);

  const categories: Category[] = [
    { id: "all", label: language === "en" ? "All" : "सभी" },
    { id: "puja", label: language === "en" ? "Maa Baglamukhi Puja" : "माँ बगलामुखी पूजा" },
    { id: "mandir", label: language === "en" ? "Maa Baglamukhi Mandir" : "माँ बगलामुखी मंदिर" },
    { id: "pujan", label: language === "en" ? "Maa Baglamukhi Pujan" : "माँ बगलामुखी पूजन" },
    { id: "pandit", label: language === "en" ? "Pandit Manish Sharma" : "पंडित मनीष शर्मा" },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredPosts = posts.filter(
    (post: BlogPost) =>
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedCategory === "all" || post.category === selectedCategory)
  );

  const featuredPosts = posts.slice(0, 3); // Top 3 posts as featured

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeaturedIndex((prev) => (prev + 1) % featuredPosts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredPosts.length]);

  const nextFeatured = () => {
    setCurrentFeaturedIndex((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevFeatured = () => {
    setCurrentFeaturedIndex(
      (prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length
    );
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Maa Baglamukhi Blog",
    description:
      "A collection of articles on Maa Baglamukhi Puja, Pujan, and spiritual insights by Pandit Manish Sharma at Maa Baglamukhi Mandir.",
    url: "http://bestmaabaglamukhipandit.com/blog",
    publisher: {
      "@type": "Person",
      name: "Pandit Manish Sharma",
      jobTitle: "Best Maa Baglamukhi Pandit",
    },
    hasPart: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      image: post.image,
      url: `http://bestmaabaglamukhipandit.com/blog/${post.slug}`,
      author: {
        "@type": "Person",
        name: "Pandit Manish Sharma",
      },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-[#f0e6e0]">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-[#790000] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/patterns/mandala-light.svg')] bg-cover bg-center"></div>
          </div>
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20 mb-4">
                  <Sparkles className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">
                    {language === "en" ? "Divine Wisdom" : "दिव्य ज्ञान"}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {language === "en"
                    ? "Discover Maa Baglamukhi’s Blessings"
                    : "माँ बगलामुखी के आशीर्वाद की खोज करें"}
                </h1>
                <p className="text-xl text-orange-100">
                  {language === "en"
                    ? "Explore spiritual insights on Maa Baglamukhi Puja and Pujan by Pandit Manish Sharma to transform your life."
                    : "पंडित मनीष शर्मा द्वारा माँ बगलामुखी पूजा और पूजन पर आध्यात्मिक अंतर्दृष्टि की खोज करें और अपने जीवन को बदलें।"}
                </p>
                {/* Search Bar */}
                <div className="relative max-w-lg">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/30 to-[#800000]/30 rounded-xl blur opacity-75"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-1 border border-white/20">
                    <div className="flex">
                      <div className="relative flex-grow">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-200 w-5 h-5" />
                        <Input
                          placeholder={
                            language === "en"
                              ? "Search Maa Baglamukhi articles..."
                              : "माँ बगलामुखी लेख खोजें..."
                          }
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-12 pr-4 py-5 text-base border-0 focus:ring-0 bg-transparent text-white placeholder:text-orange-200"
                        />
                      </div>
                      <Button className="bg-gradient-to-r from-amber-500 to-[#800000] hover:from-amber-600 hover:to-[#900000] text-white px-6 py-5 rounded-l-none">
                        {language === "en" ? "Search" : "खोजें"}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* Right Image */}
              <motion.div
                className="relative h-[28rem] md:h-[28rem]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/20 to-[#800000]/20 rounded-full blur-xl"></div>
                <div className="relative h-full w-full rounded-3xl overflow-hidden">
                  <Image
                    src="/maa-baglamukhi-blog.jpg"
                    alt={
                      language === "en"
                        ? "Maa Baglamukhi Wisdom"
                        : "माँ बगलामुखी ज्ञान"
                    }
                    fill
                    className="object-contain rounded-2xl"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Posts Carousel */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {language === "en" ? "Featured Articles" : "विशेष लेख"}
            </h2>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeaturedIndex}
                  className="relative rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#800000]/20 to-amber-600/20 rounded-xl blur opacity-50 pointer-events-none" />
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-96">
                      <Image
                        src={featuredPosts[currentFeaturedIndex].image}
                        alt={featuredPosts[currentFeaturedIndex].title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        {featuredPosts[currentFeaturedIndex].title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {featuredPosts[currentFeaturedIndex].excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-gray-500 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPosts[currentFeaturedIndex].date}</span>
                      </div>
                      <Button
                        asChild
                        className="w-fit bg-gradient-to-r from-[#800000] to-[#a00000] hover:from-[#700000] hover:to-[#900000] text-white"
                      >
                        <Link
                          href={`/blog/${featuredPosts[currentFeaturedIndex].slug}`}
                        >
                          {language === "en" ? "Read More" : "और पढ़ें"}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              {featuredPosts.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevFeatured}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#800000] rounded-full shadow-md"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextFeatured}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#800000] rounded-full shadow-md"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-16 bg-[#f8f4f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Posts Grid */}
              <div className="lg:w-3/4">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {language === "en" ? "Recent Articles" : "हाल के लेख"}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post: BlogPost, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="group relative hover:shadow-xl transition-all duration-300 overflow-hidden border-[#800000]/10 rounded-xl">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#800000]/20 to-amber-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#800000] to-amber-600" />
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        </div>
                        <CardHeader className="pb-2">
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#800000] transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-3">
                            {post.excerpt}
                          </p>
                        </CardHeader>
                        <CardContent className="pt-2">
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {post.date}
                            </div>
                          </div>
                          <Button
                            asChild
                            variant="ghost"
                            className="w-full justify-between text-[#800000] hover:text-[#700000] hover:bg-[#800000]/10"
                          >
                            <Link href={`/blog/${post.slug}`}>
                              {language === "en" ? "Read More" : "और पढ़ें"}
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                {filteredPosts.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-gray-500 text-lg">
                      {language === "en"
                        ? "No articles found"
                        : "कोई लेख नहीं मिला"}
                    </p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/4">
                <Card className="sticky top-24 border-[#800000]/10 shadow-lg bg-white rounded-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#800000] to-amber-600" />
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {language === "en" ? "Categories" : "श्रेणियाँ"}
                      </h3>
                      <div className="space-y-3">
                        {categories.map((category) => (
                          <Button
                            key={category.id}
                            variant={
                              selectedCategory === category.id
                                ? "default"
                                : "outline"
                            }
                            onClick={() => setSelectedCategory(category.id)}
                            className={`w-full justify-start text-left ${
                              selectedCategory === category.id
                                ? "bg-gradient-to-r from-[#800000] to-[#a00000] hover:from-[#700000] hover:to-[#900000] text-white"
                                : "border-[#800000] text-[#800000] hover:bg-[#800000]/10"
                            } transition-all duration-300 rounded-lg h-12`}
                          >
                            {category.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {language === "en" ? "Popular Tags" : "लोकप्रिय टैग"}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Maa Baglamukhi",
                          "Puja",
                          "Pujan",
                          "Pandit Manish Sharma",
                          "Mandir",
                          "Spiritual Guidance",
                          "Divine Blessings",
                        ].map((tag, i) => (
                          <Link
                            key={i}
                            href={`/blog?tag=${tag.toLowerCase().replace(" ", "-")}`}
                            className="text-sm px-3 py-1 bg-[#800000]/5 hover:bg-[#800000]/10 text-[#800000] hover:text-[#700000] rounded-full transition-colors"
                          >
                            {language === "en"
                              ? tag
                              : tag === "Maa Baglamukhi"
                              ? "माँ बगलामुखी"
                              : tag === "Puja"
                              ? "पूजा"
                              : tag === "Pujan"
                              ? "पूजन"
                              : tag === "Pandit Manish Sharma"
                              ? "पंडित मनीष शर्मा"
                              : tag === "Mandir"
                              ? "मंदिर"
                              : tag === "Spiritual Guidance"
                              ? "आध्यात्मिक मार्गदर्शन"
                              : "दिव्य आशीर्वाद"}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-r from-[#800000] to-[#a00000] text-white">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                {language === "en"
                  ? "Stay Connected with Maa Baglamukhi Insights"
                  : "माँ बगलामुखी अंतर्दृष्टि के साथ जुड़े रहें"}
              </h2>
              <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                {language === "en"
                  ? "Subscribe to our newsletter for the latest updates on Maa Baglamukhi Puja and spiritual guidance from Pandit Manish Sharma."
                  : "माँ बगलामुखी पूजा और पंडित मनीष शर्मा से आध्यात्मिक मार्गदर्शन पर नवीनतम अपडेट के लिए हमारे न्यूज़लेटर की सदस्यता लें।"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder={
                    language === "en" ? "Your email address" : "आपका ईमेल पता"
                  }
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-orange-200 focus:ring-white rounded-lg shadow-sm"
                />
                <Button className="bg-white text-[#800000] hover:bg-orange-50 px-8 font-semibold rounded-lg shadow-md">
                  {language === "en" ? "Subscribe" : "सदस्यता लें"}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;