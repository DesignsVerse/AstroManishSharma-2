'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { blogDataEn } from '@/data/blog/blog-en';
import { blogDataHi } from '@/data/blog/blog-hi';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, ArrowLeft, User, Share2, Bookmark, Eye, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { motion } from 'framer-motion';

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  category?: string;
  author?: string;
  readTime?: string;
  content?: { heading?: string; description: string | string[] }[];
};

function BlogPostContent() {
  const { language } = useLanguage();
  const params = useParams();
  const slug = params.slug as string;
  const [isLoading, setIsLoading] = useState(true);
  const [views, setViews] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{ id: number; user: string; text: string }[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setViews(Math.floor(Math.random() * 1000) + 500);
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      setIsBookmarked(bookmarks.includes(slug));
    }, 800);

    return () => clearTimeout(timer);
  }, [slug]);

  const blogData = language === 'en' ? blogDataEn : blogDataHi;
  const posts = blogData.posts as BlogPost[];
  const post = posts.find((p: BlogPost) => p.slug === slug);
  const relatedPosts = posts.filter((p: BlogPost) => p.slug !== slug).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        url: window.location.href,
      }).catch(() => copyToClipboard());
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success(language === 'en' ? 'Link copied to clipboard!' : 'लिंक क्लिपबोर्ड पर कॉपी किया गया!');
  };

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    if (isBookmarked) {
      const newBookmarks = bookmarks.filter((id: string) => id !== slug);
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      setIsBookmarked(false);
      toast.success(language === 'en' ? 'Removed from bookmarks' : 'बुकमार्क से हटाया गया');
    } else {
      bookmarks.push(slug);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      setIsBookmarked(true);
      toast.success(language === 'en' ? 'Added to bookmarks' : 'बुकमार्क में जोड़ा गया');
    }
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, { id: comments.length + 1, user: 'Anonymous', text: comment }]);
      setComment('');
      toast.success(language === 'en' ? 'Comment posted!' : 'टिप्पणी पोस्ट की गई!');
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-[#f0e6e0]">
        <main className="">
          <div className="container mx-auto px-4 py-16 max-w-7xl">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Blog Post Not Found' : 'ब्लॉग पोस्ट नहीं मिला'}
              </h1>
              <p className="text-gray-600 mb-8">
                {language === 'en' ? "The blog post you're looking for doesn't exist." : 'आप जिस ब्लॉग पोस्ट की तलाश कर रहे हैं वह मौजूद नहीं है।'}
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-[#800000] to-[#a00000] hover:from-[#700000] hover:to-[#900000] text-white rounded-lg shadow-md"
              >
                <Link href="/blog">{language === 'en' ? 'Back to Blog' : 'ब्लॉग पर वापस'}</Link>
              </Button>
            </motion.div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-[#f0e6e0]">
      <main className="">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-[#800000] via-[#900000] to-[#a00000] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/cosmic-bg.jpg')] bg-cover bg-center opacity-10 pointer-events-none" />
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                asChild
                variant="ghost"
                className="mb-6 text-white hover:text-orange-100 hover:bg-white/10 rounded-lg"
              >
                <Link href="/blog" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  {language === 'en' ? 'Back to Blog' : 'ब्लॉग पर वापस'}
                </Link>
              </Button>
              <div className="max-w-4xl mx-auto text-center">
                {'category' in post && post.category && (
                  <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">{post.category}</Badge>
                )}
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
                <p className="text-lg text-orange-100 mb-6">{post.excerpt}</p>
                <div className="flex flex-wrap justify-center gap-4 text-orange-100">
                  {'author' in post && post.author && (
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  {'readTime' in post && post.readTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{views} {language === 'en' ? 'views' : 'दृश्य'}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-16 bg-[#f8f4f0]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content (Left Side) */}
              <div className="lg:w-2/3">
                <Card className="relative overflow-hidden shadow-lg border-[#800000]/10 rounded-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#800000] to-amber-600" />
                  {isLoading ? (
                    <Skeleton className="w-full h-96" />
                  ) : (
                    <div className="relative h-96">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="flex gap-3 mb-6">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleShare}
                        className="flex items-center gap-2 border-[#800000] text-[#800000] hover:bg-[#800000]/10 rounded-lg"
                      >
                        <Share2 className="w-4 h-4" />
                        {language === 'en' ? 'Share' : 'साझा करें'}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={toggleBookmark}
                        className="flex items-center gap-2 border-[#800000] text-[#800000] hover:bg-[#800000]/10 rounded-lg"
                      >
                        <Bookmark className="w-4 h-4" fill={isBookmarked ? '#800000' : 'none'} />
                        {isBookmarked
                          ? language === 'en'
                            ? 'Bookmarked'
                            : 'बुकमार्क किया गया'
                          : language === 'en'
                          ? 'Bookmark'
                          : 'बुकमार्क'}
                      </Button>
                    </div>
                    {isLoading ? (
                      <div className="space-y-4">
                        {[...Array(5)].map((_, i) => (
                          <Skeleton key={i} className="w-full h-6" />
                        ))}
                      </div>
                    ) : (
                      <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                        {'content' in post && post.content && (
                          <>
                            {post.content.map((section, index) => (
                              <div key={index} className="space-y-4">
                                {section.heading && (
                                  <h3 className="text-2xl font-semibold text-gray-900">{section.heading}</h3>
                                )}
                                {Array.isArray(section.description) ? (
                                  <ul className="list-disc pl-5 space-y-2">
                                    {section.description.map((item, i) => (
                                      <li key={i}>{item}</li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p>{section.description}</p>
                                )}
                              </div>
                            ))}
                            <div className="bg-[#800000]/5 p-6 rounded-lg border-l-4 border-[#800000]">
                              <h3 className="text-xl font-semibold text-[#800000] mb-3">
                                {language === 'en' ? 'Key Takeaways' : 'मुख्य बिंदु'}
                              </h3>
                              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>{language === 'en' ? 'Understand the significance of planetary positions' : 'ग्रहों की स्थिति का महत्व समझें'}</li>
                                <li>{language === 'en' ? 'Learn how to interpret astrological charts' : 'ज्योतिषीय चार्ट की व्याख्या करना सीखें'}</li>
                                <li>{language === 'en' ? 'Discover remedies for common astrological challenges' : 'सामान्य ज्योतिषीय चुनौतियों के लिए उपाय खोजें'}</li>
                              </ul>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Comments Section */}
                <Card className="mt-8 shadow-lg border-[#800000]/10 rounded-xl">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#800000] to-amber-600" />
                  <CardHeader>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {language === 'en' ? 'Comments' : 'टिप्पणियाँ'}
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <Textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder={language === 'en' ? 'Add a comment...' : 'टिप्पणी जोड़ें...'}
                        className="border-[#800000]/20 focus:ring-[#800000] rounded-lg"
                        rows={4}
                      />
                      <Button
                        onClick={handleCommentSubmit}
                        className="bg-gradient-to-r from-[#800000] to-[#a00000] hover:from-[#700000] hover:to-[#900000] text-white rounded-lg"
                      >
                        {language === 'en' ? 'Post Comment' : 'टिप्पणी पोस्ट करें'}
                      </Button>
                    </div>
                    <div className="space-y-4">
                      {comments.length > 0 ? (
                        comments.map((c) => (
                          <motion.div
                            key={c.id}
                            className="p-4 bg-[#800000]/5 rounded-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <User className="w-4 h-4 text-[#800000]" />
                              <span className="font-medium text-gray-900">{c.user}</span>
                            </div>
                            <p className="text-gray-600">{c.text}</p>
                          </motion.div>
                        ))
                      ) : (
                        <p className="text-gray-500 text-center">
                          {language === 'en' ? 'No comments yet. Be the first to comment!' : 'अभी तक कोई टिप्पणी नहीं। पहली टिप्पणी करें!'}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar (Right Side) */}
              <div className="lg:w-1/3">
                <div className="sticky top-24 space-y-6">
                  {/* Related Posts */}
                  <Card className="border-[#800000]/10 shadow-lg rounded-xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#800000] to-amber-600" />
                    <CardHeader className="pb-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {language === 'en' ? 'Related Articles' : 'संबंधित लेख'}
                      </h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {relatedPosts.map((post, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link href={`/blog/${post.slug}`} className="group block">
                            <div className="flex gap-3">
                              <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                                <Image
                                  src={post.image}
                                  alt={post.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                  loading="lazy"
                                />
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 group-hover:text-[#800000] transition-colors line-clamp-2">
                                  {post.title}
                                </h4>
                                <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* CTA Card */}
                  <Card className="bg-gradient-to-br from-[#800000] to-[#a00000] text-white shadow-lg rounded-xl">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">
                        {language === 'en' ? 'Get Your Personal Reading' : 'अपना व्यक्तिगत रीडिंग प्राप्त करें'}
                      </h3>
                      <p className="mb-4 text-orange-100">
                        {language === 'en'
                          ? 'Discover what the stars have in store for you with a personalized astrology reading.'
                          : 'जानें कि सितारे आपके लिए क्या लेकर आए हैं, एक व्यक्तिगत ज्योतिष रीडिंग के साथ।'}
                      </p>
                      <Button className="w-full bg-white text-[#800000] hover:bg-orange-50 font-medium rounded-lg shadow-md">
                        <Link href="/contact">{language === 'en' ? 'Book Now' : 'अभी बुक करें'}</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Popular Tags */}
                  <Card className="border-[#800000]/10 shadow-lg rounded-xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#800000] to-amber-600" />
                    <CardHeader className="pb-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {language === 'en' ? 'Popular Tags' : 'लोकप्रिय टैग'}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {['Horoscope', 'Vedic', 'Zodiac', 'Planets', 'Remedies', 'Kundli', 'Palmistry', 'Numerology'].map(
                          (tag, i) => (
                            <Link
                              key={i}
                              href="#"
                              className="text-sm px-3 py-1 bg-[#800000]/5 hover:bg-[#800000]/10 text-[#800000] hover:text-[#700000] rounded-full transition-colors"
                            >
                              {tag}
                            </Link>
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function BlogPostPage() {
  return <BlogPostContent />;
}