'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

// Define TypeScript interfaces
interface LanguageContext {
  language: 'en' | 'hi';
}

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
}

interface Category {
  id: string;
  label: {
    en: string;
    hi: string;
  };
}

// Metadata for SEO
export const metadata = {
  title: 'Maa Baglamukhi Puja Gallery | Pandit Manish Sharma',
  description: 'Explore divine moments from Maa Baglamukhi Puja and Pujan at Maa Baglamukhi Mandir, led by Pandit Manish Sharma, the best Maa Baglamukhi Pandit.',
  keywords: [
    'Maa Baglamukhi Mandir',
    'Maa Baglamukhi Puja',
    'Maa Baglamukhi Pandit',
    'Maa Baglamukhi Pujan',
    'Best Maa Baglamukhi Pandit',
    'Best Maa Baglamukhi Puja',
    'Pandit Manish Sharma',
    'Baglamukhi Pandit Manish Sharma',
    'Maa Baglamukhi Pandit Manish Sharma',
  ],
  openGraph: {
    title: 'Maa Baglamukhi Puja Gallery | Maa Baglamukhi Mandir',
    description: 'View sacred images of Maa Baglamukhi Puja ceremonies conducted by Pandit Manish Sharma at Maa Baglamukhi Mandir.',
    url: 'http://bestmaabaglamukhipandit.com/gallery',
    type: 'website',
    images: [
      {
        url: 'http://bestmaabaglamukhipandit.com/images/maa-baglamukhi-gallery.jpg',
        width: 1200,
        height: 630,
        alt: 'Maa Baglamukhi Puja Gallery by Pandit Manish Sharma',
      },
    ],
  },
};

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/gallery/1.jpg', title: 'Maa Baglamukhi Puja Ceremony 1', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 2, src: '/gallery/2.jpg', title: 'Maa Baglamukhi Puja Ceremony 2', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 3, src: '/gallery/3.jpg', title: 'Maa Baglamukhi Puja Ceremony 3', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 4, src: '/gallery/4.jpg', title: 'Maa Baglamukhi Puja Ceremony 4', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 5, src: '/gallery/5.jpg', title: 'Maa Baglamukhi Puja Ceremony 5', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 6, src: '/gallery/6.jpg', title: 'Maa Baglamukhi Puja Ceremony 6', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 7, src: '/gallery/7.jpg', title: 'Maa Baglamukhi Puja Ceremony 7', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 8, src: '/gallery/8.jpg', title: 'Maa Baglamukhi Puja Ceremony 8', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 9, src: '/gallery/9.jpg', title: 'Maa Baglamukhi Puja Ceremony 9', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 10, src: '/gallery/10.jpg', title: 'Maa Baglamukhi Puja Ceremony 10', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 11, src: '/gallery/11.jpg', title: 'Maa Baglamukhi Puja Ceremony 11', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 12, src: '/gallery/12.jpg', title: 'Maa Baglamukhi Puja Ceremony 12', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 13, src: '/gallery/13.jpg', title: 'Maa Baglamukhi Puja Ceremony 13', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 14, src: '/gallery/14.jpg', title: 'Maa Baglamukhi Puja Ceremony 14', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 15, src: '/gallery/15.jpg', title: 'Maa Baglamukhi Puja Ceremony 15', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 16, src: '/gallery/16.jpg', title: 'Maa Baglamukhi Puja Ceremony 16', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 17, src: '/gallery/17.jpg', title: 'Maa Baglamukhi Puja Ceremony 17', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 18, src: '/gallery/18.jpg', title: 'Maa Baglamukhi Puja Ceremony 18', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 19, src: '/gallery/19.jpg', title: 'Maa Baglamukhi Puja Ceremony 19', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 20, src: '/gallery/20.jpg', title: 'Maa Baglamukhi Puja Ceremony 20', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 21, src: '/gallery/21.jpg', title: 'Maa Baglamukhi Puja Ceremony 21', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 22, src: '/gallery/22.jpg', title: 'Maa Baglamukhi Puja Ceremony 22', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 23, src: '/gallery/23.jpg', title: 'Maa Baglamukhi Puja Ceremony 23', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 24, src: '/gallery/24.jpg', title: 'Maa Baglamukhi Puja Ceremony 24', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 25, src: '/gallery/25.jpg', title: 'Maa Baglamukhi Puja Ceremony 25', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 26, src: '/gallery/26.jpg', title: 'Maa Baglamukhi Puja Ceremony 26', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
  { id: 27, src: '/gallery/27.jpg', title: 'Maa Baglamukhi Puja Ceremony 27', description: 'Sacred Maa Baglamukhi Puja performed by Pandit Manish Sharma at Maa Baglamukhi Mandir.', category: 'puja' },
];

const categories: Category[] = [
  { id: 'all', label: { en: 'All', hi: 'सभी' } },
  { id: 'puja', label: { en: 'Maa Baglamukhi Puja', hi: 'माँ बगलामुखी पूजा' } },
  { id: 'mandir', label: { en: 'Maa Baglamukhi Mandir', hi: 'माँ बगलामुखी मंदिर' } },
  { id: 'pandit', label: { en: 'Pandit Manish Sharma', hi: 'पंडित मनीष शर्मा' } },
  { id: 'devotees', label: { en: 'Devotees', hi: 'भक्त' } },
];

const GalleryPage: React.FC = () => {
  const { language } = useLanguage() as LanguageContext;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Maa Baglamukhi Puja Gallery',
    description: 'A collection of images showcasing Maa Baglamukhi Puja and Pujan ceremonies led by Pandit Manish Sharma at Maa Baglamukhi Mandir.',
    url: 'http://bestmaabaglamukhipandit.com/gallery',
    creator: {
      '@type': 'Person',
      name: 'Pandit Manish Sharma',
      jobTitle: 'Best Maa Baglamukhi Pandit',
    },
    containedInPlace: {
      '@type': 'Place',
      name: 'Maa Baglamukhi Mandir',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Your Temple Address',
        addressLocality: 'City',
        addressRegion: 'State',
        postalCode: 'ZIP',
        addressCountry: 'IN',
      },
    },
  };

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex((img) => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <main className="py-20 bg-gradient-to-b from-gray-50 to-[#f0e6e0]">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-[#800000] rounded-full mr-2"></div>
            <div className="w-12 h-1 bg-[#800000] rounded-full mr-2"></div>
            <span className="text-sm font-medium text-[#800000] uppercase tracking-wider">
              {language === 'en' ? 'Maa Baglamukhi Gallery' : 'माँ बगलामुखी गैलरी'}
            </span>
            <div className="w-12 h-1 bg-[#800000] rounded-full ml-2"></div>
            <div className="w-3 h-3 bg-[#800000] rounded-full ml-2"></div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            {language === 'en' ? 'Maa Baglamukhi Puja Gallery' : 'माँ बगलामुखी पूजा गैलरी'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Explore divine moments of Maa Baglamukhi Puja and Pujan led by Pandit Manish Sharma at Maa Baglamukhi Mandir'
              : 'पंडित मनीष शर्मा द्वारा माँ बगलामुखी मंदिर में आयोजित माँ बगलामुखी पूजा और पूजन के दिव्य क्षणों का अन्वेषण करें'}
          </p>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
        

          {/* Gallery Grid */}
          <div className="lg:w-3/4 w-full mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(image)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#800000]/20 to-amber-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200">
                        {image.description.length > 60 ? image.description.substring(0, 60) + '...' : image.description}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ZoomIn className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {filteredImages.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">
                  {language === 'en' ? 'No images found in this category' : 'इस श्रेणी में कोई छवि नहीं मिली'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}

              {/* Image */}
              <motion.div
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={selectedImage.src}
                  alt=''
                  width={1280}
                  height={720}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-200">{selectedImage.description}</p>
                  <div className="mt-2 text-sm text-gray-300">
                    {currentImageIndex + 1} / {filteredImages.length}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default GalleryPage;