import { blogDetailedDataEn } from '@/data/blog-detailed-en';
import { blogDetailedDataHi } from '@/data/blog-detailed-hi';
import { CalendarDays, User, Clock, ArrowLeft, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogDetailPageProps {
  
  params: {
    slug: string;
  };
  searchParams: {
    lang?: string;
  };
}


// Generate static params for all blog posts
export async function generateStaticParams() {
  // Get all slugs from both English and Hindi blog data
  const englishSlugs = Object.keys(blogDetailedDataEn);
  const hindiSlugs = Object.keys(blogDetailedDataHi);
  
  // Combine all unique slugs
  const allSlugs = Array.from(new Set([...englishSlugs, ...hindiSlugs]));
  
  // Generate params for each slug
  return allSlugs.map((slug) => ({
    slug: slug,
  }));
}

export default function BlogDetailPage({ params, searchParams }: BlogDetailPageProps) {
  // Determine language from search params, defaulting to English
  const language = searchParams.lang === 'hi' ? 'hi' : 'en';
  const blogData = language === 'en' ? blogDetailedDataEn : blogDetailedDataHi;
  const post = blogData[params.slug as keyof typeof blogData];

  if (!post) {
    notFound();
  }

  return (
    <main className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href={`/blog${language === 'hi' ? '?lang=hi' : ''}`}>
          <Button variant="outline" className="mb-8 border-amber-600 text-amber-600 hover:bg-amber-50">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'en' ? 'Back to Blog' : 'ब्लॉग पर वापस'}
          </Button>
        </Link>

        {/* Hero Image */}
        <div className="aspect-video overflow-hidden rounded-2xl mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Header */}
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 border-b border-gray-200 pb-6">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarDays className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-amber-100 text-amber-800"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              {language === 'en' ? 'Need Personalized Guidance?' : 'व्यक्तिगत मार्गदर्शन चाहिए?'}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Get detailed astrological insights tailored specifically for your birth chart and life circumstances.'
                : 'अपनी जन्म कुंडली और जीवन परिस्थितियों के लिए विशेष रूप से तैयार किए गए विस्तृत ज्योतिषीय अंतर्दृष्टि प्राप्त करें।'
              }
            </p>
            <Link href={`/contact${language === 'hi' ? '?lang=hi' : ''}`}>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                {language === 'en' ? 'Book Consultation' : 'परामर्श बुक करें'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}