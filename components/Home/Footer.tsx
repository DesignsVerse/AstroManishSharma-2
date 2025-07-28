'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, CalendarDays } from 'lucide-react';
import { servicesEn } from "@/data/services/services-en";
import { servicesHi } from "@/data/services/services-hi";
import { ArrowRight } from "lucide-react";
export const Footer = () => {
  const { language } = useLanguage();
  const t = content[language];
  const servicesData = language === "en" ? servicesEn : servicesHi;

  interface Service {
    id: string;
    title: string;
    // ... other properties if needed
  }
  // Function to generate a slug from a service name
  const generateSlug = (service: string) => {
    return service
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  return (
    <footer className="bg-[#800000] text-white pt-12 pb-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#a00000] rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <CalendarDays className="h-5 w-5 text-[#800000]" />
              </div>
              <div>
                <span className="text-xl font-bold">{t.header.logo}</span>
                <p className="text-xs text-white/80 mt-1">
                  {language === 'en' ? 'Vedic Astrology' : 'ज्योतिष विद्या'}
                </p>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t.footer.quickLinks.title}</h3>
            <ul className="space-y-2">
              {t.footer.quickLinks.links.map((link: string, index: number) => (
                <li key={index}>
                  <Link 
                    href={`/${link.toLowerCase()}`} 
                    className="text-white/80 hover:text-white transition-colors flex items-center group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
<div className="space-y-4">
  <h3 className="text-lg font-bold">{t.footer.services.title}</h3>
  <ul className="space-y-2">
    {servicesData.items.slice(0, 10).map((service: Service) => (
      <li key={service.id}>
        <Link 
          href={`/services/${service.id}`}
          className="text-white/80 hover:text-white transition-colors flex items-center group text-sm"
        >
          <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          {service.title}
        </Link>
      </li>
    ))}
  </ul>
  {servicesData.items.length > 10 && (
    <Link 
      href="/services" 
      className="text-white/80 hover:text-white text-sm flex items-center"
    >
      <span className="mr-1">+ {servicesData.items.length - 10} more</span>
      <ArrowRight className="w-3 h-3" />
    </Link>
  )}
</div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t.footer.contact.title}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-300" />
                <a 
                  href={`tel:${t.footer.contact.phone}`}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  {t.footer.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-300" />
                <a 
                  href={`mailto:${t.footer.contact.email}`}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  {t.footer.contact.email}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-amber-300 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm leading-relaxed">
                  {t.footer.contact.address}
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-3">
              <h4 className="text-base font-semibold mb-2">{t.footer.social.title}</h4>
              <div className="flex space-x-3">
                <a 
                  href={t.footer.social.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href={t.footer.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href={t.footer.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href={t.footer.social.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-white/60 text-xs">
              {t.footer.copyright}
            </p>
            <div className="flex space-x-4 text-xs">
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