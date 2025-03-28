
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <MenuSection />
        <Reviews />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
