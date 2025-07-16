"use client"
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StatisticsCard() {
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            controls.start("visible");
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
    // Counting animation function with easing
    const animateCount = (element: HTMLElement, target: number, duration: number = 2000) => {
      const start = 0;
      const startTime = performance.now();
      
      const updateCount = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Cubic ease-out function for smoother animation
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(target * easedProgress);
        
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          // Add "+" suffix if original number had it
          if (element.dataset.original?.endsWith('+')) {
            element.textContent += '+';
          } else if (element.dataset.original?.endsWith('k')) {
            element.textContent += 'k';
          }
        }
      };
      
      requestAnimationFrame(updateCount);
    };

    // Intersection Observer for counting animation
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
  const stats = language === 'en' ? [
    { number: '200k', description: 'Kundli\nServed' },
    { number: '50+', description: "Year's Of\nLegacy" },
    { number: '50k+', description: 'Students\nEnrolled' },
    { number: '100k+', description: 'Consultations\nGiven' },
    { number: '5+', description: 'Languages\nFor\nReports' },
    { number: '20+', description: 'Awards in\nthe field\nof Occult' },
  ] : [
    { number: '200k', description: 'कुंडली\nसेवा' },
    { number: '50+', description: 'वर्षों की\nविरासत' },
    { number: '50k+', description: 'छात्र\nनामांकित' },
    { number: '100k+', description: 'परामर्श\nदिए गए' },
    { number: '5+', description: 'रिपोर्ट्स के लिए\nभाषाएँ' },
    { number: '20+', description: 'गूढ़ विद्या\nमें पुरस्कार' },
  ];
  const heading = language === 'en' ? 'Our Achievements' : 'हमारी उपलब्धियां';
  const subheading = language === 'en' ? 'Decades of excellence in astrological services and education' : 'ज्योतिषीय सेवाओं और शिक्षा में दशकों की उत्कृष्टता';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        damping: 10,
        stiffness: 100
      }
    }
  };

  return (
    <>
      <Head>
        <title>Statistics Circles</title>
        <meta name="description" content="Key statistics and achievements" />
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
          animate={isVisible ? "visible" : "hidden"}
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

          <img 
            src="/achievement-mobile.png" 
            alt="Achievement" 
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
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                  minWidth: '8rem'
                }}
              >
                {/* Circle decoration */}
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
        /* Custom scrollbar for horizontal scroll */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Smooth transitions */
        .stat-circle {
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        
        /* Responsive adjustments */
        @media (min-width: 769px) {
          .mobile-achievement-img {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .stat-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
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
}