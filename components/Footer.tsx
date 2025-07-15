'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, CalendarDays } from 'lucide-react';

export const Footer = () => {
  const { language } = useLanguage();
  const t = content[language];

  const navItems = [
    { href: '/', label: t.header.home },
    { href: '/services', label: t.header.services },
    { href: '/gallery', label: language === 'en' ? 'Gallery' : 'गैलरी' },
    { href: '/blog', label: t.header.blog },
    { href: '/about', label: t.header.about },
    { href: '/contact', label: t.header.contact },
  ];

  return (
    <footer className="bg-[#800000] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#a00000] rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <CalendarDays className="h-6 w-6 text-[#800000]" />
              </div>
              <div>
                <span className="text-2xl font-bold">AstroGuide</span>
                <p className="text-sm text-white/80 mt-1">
                  {language === 'en' ? 'Vedic Astrology' : 'ज्योतिष विद्या'}
                </p>
              </div>
            </Link>
            <p className="text-white/80 leading-relaxed">
              {t.footer.about}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-white/80 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-white rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">{t.footer.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                <span className="text-white/80 hover:text-white transition-colors">
                  {t.footer.email}
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                <span className="text-white/80 hover:text-white transition-colors">
                  {t.footer.phone}
                </span>
              </li>
              <li className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                <span className="text-white/80 hover:text-white transition-colors">
                  {t.footer.address}
                </span>
              </li>
            </ul>
          </div>
          
          {/* Social & Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">
              {language === 'en' ? 'Connect With Us' : 'हमसे जुड़ें'}
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>
            
            <div className="pt-4">
              <h4 className="font-medium mb-2">
                {language === 'en' ? 'Working Hours' : 'कार्य समय'}
              </h4>
              <p className="text-white/80">
                {language === 'en' ? 'Mon-Sun: 7AM - 9PM' : 'सोम-रवि: सुबह 7 - रात 9'}
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            © 2024 AstroGuide. {t.footer.rights}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white/80 hover:text-white text-sm transition-colors">
              {language === 'en' ? 'Privacy Policy' : 'गोपनीयता नीति'}
            </Link>
            <Link href="/terms" className="text-white/80 hover:text-white text-sm transition-colors">
              {language === 'en' ? 'Terms of Service' : 'सेवा की शर्तें'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};