
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, IceCreamCone } from 'lucide-react';

const IjskarrenPage = () => {
  const ijskarOptions = [
    {
      title: "IJsbox",
      icon: <Package className="h-10 w-10 text-schepijsje-teal" />,
      description: "Inhoud: max 15 L (150 bollen - 3 smaken)",
      imageUrl: "/lovable-uploads/Ijsbox.jpg",
      details: "Onze handige ijsbox is ideaal voor kleinere evenementen en verjaardagsfeestjes. Makkelijk te transporteren en op te stellen."
    },
    {
      title: "Gelato Bar",
      icon: <IceCreamCone className="h-10 w-10 text-schepijsje-teal" />,
      description: "Inhoud: vanaf 5 L (50 bollen - 1 smaak) - max. 13 L (130 bollen - 2 smaken)",
      imageUrl: "/lovable-uploads/Gelato-Bar.jpg",
      details: "Onze gelato bar is perfect voor middelgrote evenementen. De professionele presentatie maakt indruk op uw gasten."
    },
    {
      title: 'IJskar "Piccolo"',
      icon: <Truck className="h-10 w-10 text-schepijsje-teal" />,
      description: "Inhoud: vanaf 15 L (150 bollen - 3 smaken) - max. 40 Ltr (400 bollen - 5 smaken)",
      imageUrl: "/lovable-uploads/IJskar-piccolo.jpg",
      details: "Onze traditionele ijskar 'Piccolo' is het pronkstuk voor elk evenement. Met ruimte voor meerdere smaken en authentieke uitstraling."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-schepijsje-brown mb-4">IJskarren te huur</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Maak uw feest, bruiloft of bedrijfsevenement onvergetelijk met een van onze professionele ijskarren.
              Kies uit verschillende opties en geniet van heerlijk ambachtelijk ijs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ijskarOptions.map((option, index) => (
              <Card key={index} className="border-2 border-schepijsje-lightlime hover:border-schepijsje-lime transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    {option.icon}
                    <CardTitle className="text-2xl text-schepijsje-brown">{option.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm">{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-100 rounded-md overflow-hidden mb-4">
                    <img 
                      src={option.imageUrl} 
                      alt={option.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700">{option.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-schepijsje-lightlime p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-schepijsje-brown mb-4">Vraag een offerte aan</h2>
            <p className="text-lg text-gray-700 mb-6">
              Interesse in het huren van een ijskar voor uw evenement? Neem contact met ons op voor een persoonlijke offerte.
            </p>
            <a 
              href="/#contact" 
              className="inline-block bg-schepijsje-teal hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Contact opnemen
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IjskarrenPage;
