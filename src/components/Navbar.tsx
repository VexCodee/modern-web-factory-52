
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage, getTranslation } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { translations } = useLanguage();
  
  // Pobieranie tekstów z kontekstu
  const home = getTranslation(translations, 'navbar.home');
  const services = getTranslation(translations, 'navbar.services');
  const solutions = getTranslation(translations, 'navbar.solutions');
  const aboutUs = getTranslation(translations, 'navbar.aboutUs');
  const portfolio = getTranslation(translations, 'navbar.portfolio');
  const contact = getTranslation(translations, 'navbar.contact');
  const getStarted = getTranslation(translations, 'navbar.getStarted');

  const navLinks = [
    { title: home, path: '/' },
    { title: services, path: '/services' },
    { title: solutions, path: '/solutions' },
    { title: aboutUs, path: '/about' },
    { title: portfolio, path: '/portfolio' },
    { title: contact, path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <span className="font-bold text-white">IT</span>
            </div>
            <span className="font-display text-xl font-semibold">TechPrime</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-primary active-nav' : 'text-foreground/80 hover:text-foreground'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Link 
              to="/contact" 
              className="bg-primary text-white px-5 py-2 rounded-full font-medium transition-all hover:bg-primary/90 hover:shadow-md"
            >
              {getStarted}
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button 
              className="text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-background transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-24">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium transition-colors ${
                  location.pathname === link.path ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Link 
              to="/contact" 
              className="block w-full bg-primary text-white text-center px-5 py-3 rounded-full font-medium transition-all hover:bg-primary/90 hover:shadow-md"
            >
              {getStarted}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
