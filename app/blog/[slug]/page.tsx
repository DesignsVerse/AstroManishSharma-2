import { blogDetailedDataEn } from '@/data/blog-detailed-en';
import { blogDetailedDataHi } from '@/data/blog-detailed-hi';
import { CalendarDays, User, Clock, ArrowLeft, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string; // Ensure this is a string, not Date object
  readTime: string;
  tags: string[];
}

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
  searchParams: {
    lang?: 'en' | 'hi';
  };
}

// Helper function to safely generate params
function getSafeSlugs() {
  const englishSlugs = Object.keys(blogDetailedDataEn);
  const hindiSlugs = Object.keys(blogDetailedDataHi);
  return Array.from(new Set([...englishSlugs, ...hindiSlugs]));
}

export async function generateStaticParams() {
  const slugs = getSafeSlugs();
  
  // Validate data serialization
  slugs.forEach(slug => {
    try {
      const enData = blogDetailedDataEn[slug as keyof typeof blogDetailedDataEn];
      const hiData = blogDetailedDataHi[slug as keyof typeof blogDetailedDataHi];
      JSON.stringify({ en: enData, hi: hiData });
    } catch (error) {
      console.error(`Serialization error for slug: ${slug}`, error);
      throw new Error(`Failed to serialize data for slug: ${slug}`);
    }
  });

  return slugs.map(slug => ({ slug }));
}

export default function BlogDetailPage({ params, searchParams }: BlogDetailPageProps) {
  const language = searchParams.lang === 'hi' ? 'hi' : 'en';
  const blogData = language === 'en' ? blogDetailedDataEn : blogDetailedDataHi;
  const post = blogData[params.slug as keyof typeof blogData] as BlogPost | undefined;

  if (!post) {
    notFound();
  }

  // Ensure content is safe for dangerouslySetInnerHTML
  const createMarkup = () => {
    return { __html: post.content };
  };

  return (
    <main className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href={`/blog${language === 'hi' ? '?lang=hi' : ''}`}>
          <Button variant="outline" className="mb-8 border-amber-600 text-amber-600 hover:bg-amber-50">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'en' ? 'Back to Blog' : 'ब्लॉग पर वापस'}
          </Button>
        </Link>

        <div className="aspect-video overflow-hidden rounded-2xl mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="space-y-6 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>

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

        <article 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
          dangerouslySetInnerHTML={createMarkup()}
        />

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