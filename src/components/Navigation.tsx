
import React, { useState } from 'react';
import { Menu, X, IceCream, Coffee, Phone, Home, MessageSquare } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import AuthButton from './AuthButton';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <Home size={20} />, href: '#' },
    { name: 'Aanbod', icon: <IceCream size={20} />, href: '#aanbod' },
    { name: 'Reviews', icon: <MessageSquare size={20} />, href: '#reviews' },
    { name: 'Contact', icon: <Phone size={20} />, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-8">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-schepijsje-brown bg-schepijsje-lightlime hover:bg-schepijsje-lime transition-colors"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
            <AuthButton />
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-schepijsje-brown"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 bg-white md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 p-3 text-lg font-medium text-schepijsje-brown hover:bg-schepijsje-lightlime rounded-md transition-colors"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
          <div className="mt-2">
            <AuthButton />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
