'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Vedic Astrology Session',
    description: 'Traditional astrology consultation with ancient texts',
    category: 'consultation'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/3038740/pexels-photo-3038740.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Moon Phase Reading',
    description: 'Understanding lunar influences on life',
    category: 'readings'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Sacred Gemstones',
    description: 'Collection of powerful healing crystals',
    category: 'gemstones'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/8828688/pexels-photo-8828688.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Ancient Manuscripts',
    description: 'Traditional Vedic astrology texts and scrolls',
    category: 'manuscripts'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Planetary Alignment',
    description: 'Cosmic arrangements and their meanings',
    category: 'astronomy'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Meditation Space',
    description: 'Sacred space for spiritual practices',
    category: 'spiritual'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/6980869/pexels-photo-6980869.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Birth Chart Creation',
    description: 'Process of creating detailed horoscopes',
    category: 'consultation'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Crystal Healing',
    description: 'Therapeutic use of gemstones and crystals',
    category: 'gemstones'
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/6980870/pexels-photo-6980870.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Yantra Designs',
    description: 'Sacred geometric patterns for meditation',
    category: 'spiritual'
  },
  {
    id: 10,
    src: 'https://images.pexels.com/photos/4207891/pexels-photo-4207891.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Astrological Tools',
    description: 'Traditional instruments used in readings',
    category: 'consultation'
  },
  {
    id: 11,
    src: 'https://images.pexels.com/photos/7319069/pexels-photo-7319069.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Cosmic Energy',
    description: 'Visualization of universal energies',
    category: 'astronomy'
  },
  {
    id: 12,
    src: 'https://images.pexels.com/photos/6980868/pexels-photo-6980868.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Spiritual Guidance',
    description: 'Personal consultation and guidance session',
    category: 'readings'
  }
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
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            {language === 'en' ? 'Gallery' : 'गैलरी'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Explore our collection of astrological insights, spiritual practices, and sacred moments'
              : 'हमारे ज्योतिषीय अंतर्दृष्टि, आध्यात्मिक प्रथाओं और पवित्र क्षणों के संग्रह का अन्वेषण करें'
            }
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-amber-600 hover:bg-amber-700 text-white'
                  : 'border-amber-600 text-amber-600 hover:bg-amber-50'
              }`}
            >
              {category.label[language]}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              {language === 'en' 
                ? 'No images found in this category'
                : 'इस श्रेणी में कोई छवि नहीं मिली'
              }
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full"
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-200">
                  {selectedImage.description}
                </p>
                <div className="mt-2 text-sm text-gray-300">
                  {currentImageIndex + 1} / {filteredImages.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}