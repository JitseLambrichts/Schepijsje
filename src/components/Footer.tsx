
import React from 'react';
import Logo from './Logo';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-schepijsje-teal text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Logo className="text-white mb-4 md:mb-0" />
          <div className="flex space-x-4">
            <a href="#" className="hover:text-schepijsje-lime transition-colors p-2">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-schepijsje-lime transition-colors p-2">
              <Instagram size={24} />
            </a>
            <a href="tel:+32011743845" className="hover:text-schepijsje-lime transition-colors p-2">
              <Phone size={24} />
            </a>
            <a href="mailto:info@schepijsje.be" className="hover:text-schepijsje-lime transition-colors p-2">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} 't Schepijsje. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm hover:text-schepijsje-lime transition-colors">
                Privacybeleid
              </a>
              <a href="#" className="text-sm hover:text-schepijsje-lime transition-colors">
                Cookiebeleid
              </a>
              <a href="#" className="text-sm hover:text-schepijsje-lime transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
