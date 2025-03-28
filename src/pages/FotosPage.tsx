
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Image } from 'lucide-react';

const FotosPage = () => {
  // Sample photo gallery data
  const photos = [
    {
      id: 1,
      title: "Onze ijswinkel in Maasmechelen",
      category: "Winkel",
      imageUrl: "/lovable-uploads/0be4d062-2ffc-4db0-9920-8d8e4105112c.png"
    },
    {
      id: 2,
      title: "IJskar bij evenement",
      category: "Evenementen",
      imageUrl: "/lovable-uploads/0be4d062-2ffc-4db0-9920-8d8e4105112c.png"
    },
    {
      id: 3,
      title: "Ambachtelijke ijsbereiding",
      category: "Productie",
      imageUrl: "/lovable-uploads/0be4d062-2ffc-4db0-9920-8d8e4105112c.png"
    },
    {
      id: 4,
      title: "Verse ingrediënten",
      category: "Ingrediënten",
      imageUrl: "/lovable-uploads/0be4d062-2ffc-4db0-9920-8d8e4105112c.png"
    },
    {
      id: 5,
      title: "IJskarren bij bruiloft",
      category: "Evenementen",
      imageUrl: "/lovable-uploads/0be4d062-2ffc-4db0-9920-8d8e4105112c.png"
    },
    {
      id: 6,
      title: "Speciale ijscoupes",
      category: "Producten",
      imageUrl: "/lovable-uploads/0be4d062-2ffc-4db0-9920-8d8e4105112c.png"
    }
  ];

  // Group photos by category
  const photosByCategory = photos.reduce((acc, photo) => {
    if (!acc[photo.category]) {
      acc[photo.category] = [];
    }
    acc[photo.category].push(photo);
    return acc;
  }, {});

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-schepijsje-brown mb-4">Foto's</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ontdek onze ambachtelijke ijsproductie, gezellige winkel en ijskarren in actie bij diverse evenementen.
            </p>
          </div>

          {Object.entries(photosByCategory).map(([category, categoryPhotos]) => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-bold text-schepijsje-teal mb-6 flex items-center">
                <Image className="mr-2" size={24} />
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryPhotos.map((photo) => (
                  <div 
                    key={photo.id} 
                    className="overflow-hidden rounded-lg border-2 border-schepijsje-lightlime hover:border-schepijsje-lime transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={photo.imageUrl} 
                        alt={photo.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="font-medium text-lg text-schepijsje-brown">{photo.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FotosPage;
