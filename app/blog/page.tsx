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

function BlogContent() {
  const { language } = useLanguage();
  const blogData = language === "en" ? blogDataEn : blogDataHi;
  const posts = blogData.posts;
  const [searchQuery, setSearchQuery] = useState("");
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  const categories = [
    { id: "all", label: language === "en" ? "All" : "सभी" },
    { id: "horoscope", label: language === "en" ? "Horoscope" : "राशिफल" },
    {
      id: "vedic",
      label: language === "en" ? "Vedic Astrology" : "वैदिक ज्योतिष",
    },
    { id: "remedies", label: language === "en" ? "Remedies" : "उपाय" },
    { id: "kundli", label: language === "en" ? "Kundli" : "कुंडली" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = posts.filter(
    (post) =>
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-[#f0e6e0]">
      <main className="">
        {/* Hero Section */}
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-[#790000] text-white overflow-hidden">
          {/* Decorative cosmic background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/patterns/cosmic-pattern.svg')] bg-cover bg-center"></div>
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
                    {language === "en" ? "Cosmic Wisdom" : "ब्रह्मांडीय ज्ञान"}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {language === "en"
                    ? "Unlock Your Cosmic Potential"
                    : "अपनी ब्रह्मांडीय क्षमता को अनलॉक करें"}
                </h1>

                <p className="text-xl text-orange-100">
                  {language === "en"
                    ? "Discover profound astrological insights to navigate your life journey with confidence"
                    : "अपने जीवन की यात्रा को आत्मविश्वास के साथ नेविगेट करने के लिए गहन ज्योतिषीय अंतर्दृष्टि खोजें"}
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
                              ? "Search astrology articles..."
                              : "ज्योतिष लेख खोजें..."
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
                    src="/blog.png"
                    alt={
                      language === "en" ? "Astrology wisdom" : "ज्योतिष ज्ञान"
                    }
                    fill
                    className="object-contain rounded-2xl"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
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
                  {filteredPosts.map((post, index) => (
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
                          "Horoscope",
                          "Vedic",
                          "Zodiac",
                          "Planets",
                          "Remedies",
                          "Kundli",
                          "Palmistry",
                          "Numerology",
                        ].map((tag, i) => (
                          <Link
                            key={i}
                            href="#"
                            className="text-sm px-3 py-1 bg-[#800000]/5 hover:bg-[#800000]/10 text-[#800000] hover:text-[#700000] rounded-full transition-colors"
                          >
                            {tag}
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
                  ? "Stay Updated with Astrology Insights"
                  : "ज्योतिषीय अंतर्दृष्टि के साथ अपडेट रहें"}
              </h2>
              <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                {language === "en"
                  ? "Subscribe to our newsletter for the latest astrology articles and predictions."
                  : "नवीनतम ज्योतिषीय लेख और भविष्यवाणियों के लिए हमारे न्यूज़लेटर की सदस्यता लें।"}
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
}

export default function BlogPage() {
  return <BlogContent />;
}
