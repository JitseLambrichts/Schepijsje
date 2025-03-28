import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FotosPage = () => {
  // Foto galerij data
  const photos = [
    {
      id: 1,
      imageUrl: "/lovable-uploads/Foto1.jpg"
    },
    {
      id: 2,
      imageUrl: "/lovable-uploads/Foto2.jpg"
    },
    {
      id: 3,
      imageUrl: "/lovable-uploads/Foto3.jpg"
    },
    {
      id: 4,
      imageUrl: "/lovable-uploads/Foto4.jpg"
    },
    {
      id: 5,
      imageUrl: "/lovable-uploads/Foto5.jpg"
    },
    {
      id: 6,
      imageUrl: "/lovable-uploads/Foto6.jpg"
    },
    {
      id: 7,
      imageUrl: "/lovable-uploads/Foto7.jpg"
    }
  ];

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

          <div className="max-w-5xl mx-auto">
            {/* Flexbox container for centering */}
            <div className="flex flex-wrap justify-center gap-4">
              {photos.map((photo) => (
                <div 
                  key={photo.id} 
                  className="overflow-hidden rounded-lg border-2 border-schepijsje-lightlime hover:border-schepijsje-lime transition-all duration-300 hover:shadow-lg w-[200px] h-[200px]"
                >
                  <div className="aspect-square w-full h-full overflow-hidden">
                    <img 
                      src={photo.imageUrl} 
                      alt="Schepijsje foto" 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FotosPage;
