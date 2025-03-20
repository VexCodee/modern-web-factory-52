
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <span className="font-bold text-white">IT</span>
              </div>
              <span className="font-display text-xl font-semibold">TechPrime</span>
            </div>
            <p className="text-gray-300 mt-4 max-w-xs">
              Delivering innovative IT solutions that drive business growth and digital transformation.
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
            <h3 className="font-display text-lg font-medium mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">IT Outsourcing</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Graphic Design</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Hardware Repair</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">AI Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1" />
                <span className="text-gray-300">123 Business Avenue, Tech District, 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary" />
                <span className="text-gray-300">info@techprime.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} TechPrime. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
