
import React from 'react';
import { Button } from '@/components/ui/button';
import { IceCream } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[500px] flex items-center justify-center teal-border">
      <div className="absolute inset-0 bg-schepijsje-lime opacity-20 z-0"></div>
      <div className="polka-dot-bg absolute inset-0 opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-schepijsje-brown mb-6">
            Ambachtelijk Roomijs
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-schepijsje-brown">
            Dagelijks vers bereid, daarvoor kan u steeds bij ons terecht.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-schepijsje-teal hover:bg-schepijsje-teal/90 text-white"
              asChild
            >
              <a href="#aanbod">
                <IceCream className="mr-2 h-5 w-5" />
                Bekijk ons aanbod
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-schepijsje-brown text-schepijsje-brown hover:bg-schepijsje-brown hover:text-white"
              asChild
            >
              <a href="#contact">Contacteer ons</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
