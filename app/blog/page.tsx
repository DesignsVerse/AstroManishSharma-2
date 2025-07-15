"use client";
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { blogDataEn } from '@/data/blog/blog-en';
import { blogDataHi } from '@/data/blog/blog-hi';


function BlogContent() {
  const { language } = useLanguage();
  const posts = (language === 'en' ? blogDataEn.posts : blogDataHi.posts);

  return (
    <div className="min-h-screen">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-orange-500 to-orange-600">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-white mb-6">
                {/* {t('blog.title')} */}
                Astrology Insights
              </h1>
              <p className="text-xl text-orange-100 mb-8">
                {/* {t('blog.subtitle')} */}
                Discover the wisdom of the stars and how they shape our lives.
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10 py-3 border-white/30 focus:border-white focus:ring-white bg-white/10 backdrop-blur-sm text-white placeholder:text-orange-200"
                />
              </div>
            </div>
          </div>
        </section>
        {/* All Posts */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Recent Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
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
                      className="w-full justify-between text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Astrology Insights
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and receive the latest astrology articles and predictions directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Your email address" 
                className="flex-1 bg-white border-0 py-3"
              />
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 font-semibold"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function BlogPage() {
  return (
    <BlogContent />
  );
}