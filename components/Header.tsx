'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles, Phone, Calendar, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const t = content[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: t.header.home },
    { href: '/services', label: t.header.services },
    { href: '/gallery', label: language === 'en' ? 'Gallery' : 'गैलरी' },
    { href: '/blog', label: t.header.blog },
    { href: '/about', label: t.header.about },
    { href: '/contact', label: t.header.contact },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-[#800000] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:rotate-12">
                <Star className="h-5 w-5 text-amber-200" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#800000]">
                AstroGuide
              </span>
              <span className="text-xs text-gray-600 -mt-1">
                {language === 'en' ? 'Vedic Astrology' : 'ज्योतिष विद्या'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-gray-800 hover:text-[#800000] transition-all duration-200 font-medium group"
              >
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#800000] group-hover:w-3/4 transition-all duration-300"></span>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Phone Number - Desktop */}
            <div className="hidden md:flex items-center space-x-2 text-sm bg-amber-50 px-3 py-2 rounded-lg border border-amber-100">
              <Phone className="h-4 w-4 text-[#800000]" />
              <span className="text-gray-800">+91 98765 43210</span>
            </div>
            
            <LanguageSwitcher />
            
            {/* CTA Button - Desktop */}
            {/* <div className="hidden md:block">
              <Button className="bg-[#800000] hover:bg-[#6a0000] text-white px-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{language === 'en' ? 'Consult Now' : 'पूछताछ करें'}</span>
              </Button>
            </div> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-800 hover:text-[#800000] transition-colors rounded-lg hover:bg-amber-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-amber-100 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-800 hover:text-[#800000] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-amber-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-2 mt-2 border-t border-amber-100 space-y-3">
                <div className="flex items-center space-x-2 text-sm px-4 py-2 rounded-lg bg-amber-50 border border-amber-100">
                  <Phone className="h-4 w-4 text-[#800000]" />
                  <span className="text-gray-800">+91 98765 43210</span>
                </div>
                
                {/* <Button className="w-full bg-[#800000] hover:bg-[#6a0000] text-white rounded-lg shadow-md flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{language === 'en' ? 'Consult Now' : 'पूछताछ करें'}</span>
                </Button> */}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};