'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { blogDataEn } from '@/data/blog-en';
import { blogDataHi } from '@/data/blog-hi';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Blog = () => {
  const { language } = useLanguage();
  const blogData = language === 'en' ? blogDataEn : blogDataHi;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            {blogData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {blogData.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.posts.slice(0, 3).map((post, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 text-amber-600 text-sm">
                  <CalendarDays className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">
                    {language === 'en' ? 'Read More' : 'और पढ़ें'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};