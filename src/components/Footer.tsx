
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import CookieButton from './CookieButton';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <span className="font-bold text-white">VX</span>
              </div>
              <span className="font-display text-xl font-semibold">VexVision</span>
            </div>
            <p className="text-gray-300 mt-4 max-w-xs">
              Oferuję innowacyjne rozwiązania IT z Bielska-Białej, pomagając transformować Twoją cyfrową obecność.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium mb-6">Usługi</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">IT Outsourcing</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Rozwój Stron WWW</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Projektowanie Graficzne</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Naprawa Sprzętu</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Rozwiązania AI</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium mb-6">Firma</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">O Mnie</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1" />
                <span className="text-gray-300">Bielsko-Biała, Polska</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary" />
                <span className="text-gray-300">+48 500 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary" />
                <span className="text-gray-300">kontakt@vexvision.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} VexVision. {t('footer.rights')}
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs text-slate-400 hover:text-white transition">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-xs text-slate-400 hover:text-white transition">
              {t('footer.terms')}
            </Link>
            <CookieButton />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
