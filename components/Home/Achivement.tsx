'use client';

import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// Define TypeScript interfaces
interface LanguageContext {
  language: 'en' | 'hi';
}

interface Stat {
  number: string;
  description: string;
}

// Metadata for SEO
export const metadata = {
  title: 'Achievements of Pandit Manish Sharma | Best Maa Baglamukhi Pandit',
  description: 'Explore the achievements of Pandit Manish Sharma, the best Maa Baglamukhi Pandit, at Maa Baglamukhi Mandir, offering authentic Maa Baglamukhi Puja and Pujan.',
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
    title: 'Achievements of Pandit Manish Sharma | Maa Baglamukhi Mandir',
    description: 'Discover the legacy of Pandit Manish Sharma, the best Maa Baglamukhi Pandit, through his achievements in Maa Baglamukhi Puja at Maa Baglamukhi Mandir.',
    url: 'http://bestmaabaglamukhipandit.com/achievements',
    type: 'website',
    images: [
      {
        url: 'http://bestmaabaglamukhipandit.com/images/maa-baglamukhi-achievements.jpg',
        width: 1200,
        height: 630,
        alt: 'Achievements of Pandit Manish Sharma at Maa Baglamukhi Mandir',
      },
    ],
  },
};

const StatisticsCard: React.FC = () => {
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage() as LanguageContext;

  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pandit Manish Sharma',
    jobTitle: 'Best Maa Baglamukhi Pandit',
    description: 'Pandit Manish Sharma, the best Maa Baglamukhi Pandit, has a legacy of authentic Maa Baglamukhi Puja and Pujan at Maa Baglamukhi Mandir, serving thousands of devotees.',
    url: 'http://bestmaabaglamukhipandit.com/achievements',
    image: 'http://bestmaabaglamukhipandit.com/images/maa-baglamukhi-achievements.jpg',
    worksFor: {
      '@type': 'Organization',
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            controls.start('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls]);

  useEffect(() => {
    const animateCount = (element: HTMLElement, target: number, duration: number = 2000) => {
      const start = 0;
      const startTime = performance.now();

      const updateCount = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(target * easedProgress);

        element.textContent = current.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          if (element.dataset.original?.endsWith('+')) {
            element.textContent += '+';
          } else if (element.dataset.original?.endsWith('k')) {
            element.textContent += 'k';
          }
        }
      };

      requestAnimationFrame(updateCount);
    };

    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber) {
              const value = statNumber.textContent;
              if (value) {
                statNumber.textContent = '0';
                statNumber.setAttribute('data-original', value);
                const numValue = parseInt(value.replace(/\D/g, ''), 10);
                animateCount(statNumber as HTMLElement, numValue);
              }
            }
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statRefs.current.forEach((ref) => {
      if (ref) statObserver.observe(ref);
    });

    return () => {
      statRefs.current.forEach((ref) => {
        if (ref) statObserver.unobserve(ref);
      });
    };
  }, []);

  // English and Hindi text for stats and headings
  const stats: Stat[] = language === 'en' ? [
    { number: '200k', description: 'Devotees\nServed' },
    { number: '25+', description: "Years of\nLegacy" },
    { number: '50k+', description: 'Pujas\nConducted' },
    { number: '100k+', description: 'Blessings\nGiven' },
    { number: '5+', description: 'Languages\nfor\nGuidance' },
    { number: '20+', description: 'Awards in\nSpiritual\nService' },
  ] : [
    { number: '200k', description: 'भक्तों की\nसेवा' },
    { number: '25+', description: 'वर्षों की\nविरासत' },
    { number: '50k+', description: 'पूजा\nआयोजित' },
    { number: '100k+', description: 'आशीर्वाद\nप्रदान किए' },
    { number: '5+', description: 'मार्गदर्शन के लिए\nभाषाएँ' },
    { number: '20+', description: 'आध्यात्मिक सेवा\nमें पुरस्कार' },
  ];
  const heading = language === 'en' ? 'Our Achievements' : 'हमारी उपलब्धियां';
  const subheading = language === 'en'
    ? 'Decades of excellence in Maa Baglamukhi Puja by Pandit Manish Sharma'
    : 'पंडित मनीष शर्मा द्वारा माँ बगलामुखी पूजा में दशकों की उत्कृष्टता';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div
        ref={containerRef}
        className="flex items-center justify-center p-4 md:p-8 bg-[#800000] min-h-[50vh] relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-[#B63628] opacity-15 blur-xl"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-[#FEEFEF] opacity-10 blur-lg"></div>
        </div>

        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="w-full"
        >
          <div className="text-center mb-8">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-[#FEEFEF] mb-2 font-serif"
            >
              {heading}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-[#FEEFEF] opacity-80 max-w-2xl mx-auto text-sm md:text-base"
            >
              {subheading}
            </motion.p>
          </div>

          <Image
            src="/images/maa-baglamukhi-achievement.png"
            alt="Maa Baglamukhi Achievements by Pandit Manish Sharma"
            width={120}
            height={120}
            className="mobile-achievement-img mx-auto mb-4"
          />
          <div className="stat-grid flex flex-nowrap md:flex-wrap justify-center gap-6 md:gap-8 min-w-max md:min-w-0 px-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                ref={(el) => (statRefs.current[index] = el)}
                variants={itemVariants}
                tabIndex={0}
                role="group"
                aria-label={`${stat.number.replace('+', ' plus ').replace('k', ' thousand ')} ${stat.description.replace(/\n/g, ' ')}`}
                className="stat-circle bg-gradient-to-br from-[#FEEFEF] to-[#F8E0E0] rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col justify-center items-center p-2 text-center text-[#7A1C14] font-semibold cursor-default select-none relative overflow-hidden"
                style={{
                  boxShadow: 'inset 0 0 12px rgba(255, 255, 255, 0.7), 0 8px 20px rgba(0, 0, 0, 0.15)',
                
                }}
              >
                <div className="absolute top-0 right-0 w-8 h-8 rounded-bl-full bg-[#B63628] opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 rounded-tr-full bg-[#7A1C14] opacity-10"></div>

                <div className="stat-number text-2xl md:text-3xl font-bold font-serif mb-1 leading-none tracking-tight z-10">
                  {stat.number}
                </div>
                <div className="stat-desc text-xs md:text-sm font-medium leading-tight font-sans whitespace-pre-line z-10">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .stat-circle {
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        @media (min-width: 769px) {
          .mobile-achievement-img {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .stat-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr);
            gapnv: 1.5rem;
            justify-items: center;
            min-width: 0 !important;
          }
          .mobile-achievement-img {
            display: block;
            width: 120px;
            margin-bottom: 1.5rem;
          }
          .stat-circle {
            width: 7.5rem !important;
            height: 7.5rem !important;
          }
        }
        @media (max-width: 480px) {
          .stat-circle {
            width: 6.5rem !important;
            height: 6.5rem !important;
          }
          .stat-number {
            font-size: 1.5rem !important;
          }
          .stat-desc {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default StatisticsCard;