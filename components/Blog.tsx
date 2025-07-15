'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { blogDataEn } from '@/data/blog/blog-en';
import { blogDataHi } from '@/data/blog/blog-hi';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CalendarDays, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Blog = () => {
  const { language } = useLanguage();
  const blogData = language === 'en' ? blogDataEn : blogDataHi;

  return (
    <section className="py-20 bg-[#faf5f0] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#800000] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#800000]/10 rounded-full border border-[#800000]/20">
            <CalendarDays className="h-5 w-5 text-[#800000]" />
            <span className="ml-2 text-sm font-medium uppercase tracking-wider text-[#800000]">
              {blogData.subtitle}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            <span className="text-[#800000]">{blogData.title.split(' ')[0]}</span> {blogData.title.split(' ').slice(1).join(' ')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.posts.slice(0, 3).map((post, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#800000]/30 bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              {/* Image with overlay */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="flex items-center space-x-3 text-white">
                    <div className="flex items-center space-x-1 text-sm">
                      <CalendarDays className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm">
                      <Clock className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pt-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#800000] transition-colors">
                  {post.title}
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-6 pb-6">
                <p className="text-gray-700 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link href={`/blog/${post.slug}`}>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#800000] text-[#800000] hover:bg-[#800000]/10 group-hover:bg-[#800000] group-hover:text-white transition-colors"
                  >
                    {language === 'en' ? 'Read Article' : 'लेख पढ़ें'}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/blog">
            <Button 
              size="lg" 
              className="bg-[#800000] hover:bg-[#6a0000] text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              {language === 'en' ? 'View All Articles' : 'सभी लेख देखें'}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};