'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, CalendarDays } from 'lucide-react';

export const Footer = () => {
  const { language } = useLanguage();
  const t = content[language];

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
                <span className="text-2xl font-bold">{t.header.logo}</span>
                <p className="text-sm text-white/80 mt-1">
                  {language === 'en' ? 'Vedic Astrology' : 'ज्योतिष विद्या'}
                </p>
              </div>
            </Link>
            <p className="text-white/80 leading-relaxed">
              {t.footer.description}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">{t.footer.quickLinks.title}</h3>
            <ul className="space-y-3">
              {t.footer.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={`/${link.toLowerCase()}`} 
                    className="text-white/80 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-white rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">{t.footer.services.title}</h3>
            <ul className="space-y-3">
              {t.footer.services.links.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="/services" 
                    className="text-white/80 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-white rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="text-sm">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">{t.footer.contact.title}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-300" />
                <a 
                  href={`tel:${t.footer.contact.phone}`}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {t.footer.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-300" />
                <a 
                  href={`mailto:${t.footer.contact.email}`}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {t.footer.contact.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-300 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm leading-relaxed">
                  {t.footer.contact.address}
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-3">{t.footer.social.title}</h4>
              <div className="flex space-x-4">
                <a 
                  href={t.footer.social.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href={t.footer.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href={t.footer.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href={t.footer.social.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              {t.footer.copyright}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                {language === 'en' ? 'Privacy Policy' : 'गोपनीयता नीति'}
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                {language === 'en' ? 'Terms of Service' : 'सेवा की शर्तें'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};