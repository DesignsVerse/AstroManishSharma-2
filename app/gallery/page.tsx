'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/gallery/1.jpg', title: 'Gallery Image 1', description: 'Description for image 1', category: 'all' },
  { id: 2, src: '/gallery/2.jpg', title: 'Gallery Image 2', description: 'Description for image 2', category: 'all' },
  { id: 3, src: '/gallery/3.jpg', title: 'Gallery Image 3', description: 'Description for image 3', category: 'all' },
  { id: 5, src: '/gallery/5.jpg', title: 'Gallery Image 5', description: 'Description for image 5', category: 'all' },
  { id: 6, src: '/gallery/6.jpg', title: 'Gallery Image 6', description: 'Description for image 6', category: 'all' },
  { id: 7, src: '/gallery/7.jpg', title: 'Gallery Image 7', description: 'Description for image 7', category: 'all' },
  { id: 8, src: '/gallery/8.jpg', title: 'Gallery Image 8', description: 'Description for image 8', category: 'all' },
  { id: 10, src: '/gallery/10.jpg', title: 'Gallery Image 10', description: 'Description for image 10', category: 'all' },
  { id: 11, src: '/gallery/11.jpg', title: 'Gallery Image 11', description: 'Description for image 11', category: 'all' },
  { id: 12, src: '/gallery/12.jpg', title: 'Gallery Image 12', description: 'Description for image 12', category: 'all' },
  { id: 13, src: '/gallery/13.jpg', title: 'Gallery Image 13', description: 'Description for image 13', category: 'all' },
  { id: 14, src: '/gallery/14.jpg', title: 'Gallery Image 14', description: 'Description for image 14', category: 'all' },
  { id: 15, src: '/gallery/15.jpg', title: 'Gallery Image 15', description: 'Description for image 15', category: 'all' },
  { id: 16, src: '/gallery/16.jpg', title: 'Gallery Image 16', description: 'Description for image 16', category: 'all' },
  { id: 17, src: '/gallery/17.jpg', title: 'Gallery Image 17', description: 'Description for image 17', category: 'all' },
  { id: 18, src: '/gallery/18.jpg', title: 'Gallery Image 18', description: 'Description for image 18', category: 'all' },
  { id: 19, src: '/gallery/19.jpg', title: 'Gallery Image 19', description: 'Description for image 19', category: 'all' },
  { id: 20, src: '/gallery/20.jpg', title: 'Gallery Image 20', description: 'Description for image 20', category: 'all' },
  { id: 21, src: '/gallery/21.jpg', title: 'Gallery Image 21', description: 'Description for image 21', category: 'all' },
  { id: 22, src: '/gallery/22.jpg', title: 'Gallery Image 22', description: 'Description for image 22', category: 'all' },
  { id: 23, src: '/gallery/23.jpg', title: 'Gallery Image 23', description: 'Description for image 23', category: 'all' },
  { id: 24, src: '/gallery/24.jpg', title: 'Gallery Image 24', description: 'Description for image 24', category: 'all' },
  { id: 25, src: '/gallery/25.jpg', title: 'Gallery Image 25', description: 'Description for image 25', category: 'all' },
  { id: 26, src: '/gallery/26.jpg', title: 'Gallery Image 26', description: 'Description for image 26', category: 'all' },
  { id: 27, src: '/gallery/27.jpg', title: 'Gallery Image 27', description: 'Description for image 27', category: 'all' },
  { id: 28, src: '/gallery/28.jpg', title: 'Gallery Image 28', description: 'Description for image 28', category: 'all' },
  { id: 29, src: '/gallery/29.jpg', title: 'Gallery Image 29', description: 'Description for image 29', category: 'all' },
];

const categories = [
  { id: 'all', label: { en: 'All', hi: 'सभी' } },
  { id: 'consultation', label: { en: 'Consultation', hi: 'परामर्श' } },
  { id: 'readings', label: { en: 'Readings', hi: 'रीडिंग' } },
  { id: 'gemstones', label: { en: 'Gemstones', hi: 'रत्न' } },
  { id: 'spiritual', label: { en: 'Spiritual', hi: 'आध्यात्मिक' } },
  { id: 'astronomy', label: { en: 'Astronomy', hi: 'खगोल विज्ञान' } },
  { id: 'manuscripts', label: { en: 'Manuscripts', hi: 'पांडुलिपियां' } }
];

export default function GalleryPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-[#800000] rounded-full mr-2"></div>
            <div className="w-12 h-1 bg-[#800000] rounded-full mr-2"></div>
            <span className="text-sm font-medium text-[#800000] uppercase tracking-wider">
              {language === 'en' ? 'Gallery' : 'गैलरी'}
            </span>
            <div className="w-12 h-1 bg-[#800000] rounded-full ml-2"></div>
            <div className="w-3 h-3 bg-[#800000] rounded-full ml-2"></div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            {language === 'en' ? 'Our Sacred Gallery' : 'हमारी पवित्र गैलरी'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Immerse yourself in our collection of astrological and spiritual moments'
              : 'हमारे ज्योतिषीय और आध्यात्मिक क्षणों के संग्रह में डूब जाएं'}
          </p>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <Card className="sticky top-24 border-[#800000]/10 shadow-lg bg-white rounded-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#800000] to-amber-600" />
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  {language === 'en' ? 'Categories' : 'श्रेणियाँ'}
                </h2>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full justify-start text-left ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-[#800000] to-[#a00000] hover:from-[#700000] hover:to-[#900000] text-white'
                          : 'border-[#800000] text-[#800000] hover:bg-[#800000]/10'
                      } transition-all duration-300 rounded-lg h-12`}
                    >
                      {category.label[language]}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gallery Grid */}
          <div className="lg:w-3/4">
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
                  alt={selectedImage.title}
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
}