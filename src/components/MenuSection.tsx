
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { IceCream, Coffee, Utensils } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface MenuItem {
  id: number;
  name: string;
  description?: string;
  icon: React.ReactNode;
}

const MenuSection = () => {
  const categories = [
    {
      title: "IJs smaken",
      items: [
        // Eerste groep smaken
        {
          id: 1,
          name: "Amarena",
          description: "Romig ijs met kersen",
          icon: <IceCream className="h-8 w-8 text-pink-600" />
        },
        {
          id: 2,
          name: "Alpencaramel",
          description: "Zoete caramel met een hint van Alpen",
          icon: <IceCream className="h-8 w-8 text-amber-600" />
        },
        {
          id: 3,
          name: "Appeltaart",
          description: "Huisgemaakte appeltaartsmaak",
          icon: <IceCream className="h-8 w-8 text-yellow-600" />
        },
        {
          id: 4,
          name: "Appelcrumble",
          description: "Appelcrumble smaak met stukjes koek",
          icon: <IceCream className="h-8 w-8 text-yellow-500" />
        },
        {
          id: 5,
          name: "Banaan",
          description: "Verfrissend bananenijs",
          icon: <IceCream className="h-8 w-8 text-yellow-400" />
        },
        {
          id: 6,
          name: "Banaan-caramel",
          description: "Bananenijs met caramel swirl",
          icon: <IceCream className="h-8 w-8 text-amber-500" />
        },
        {
          id: 7,
          name: "Bounty",
          description: "Kokosnoot met chocolade",
          icon: <IceCream className="h-8 w-8 text-blue-600" />
        },
        {
          id: 8,
          name: "Cheesecake",
          description: "Romige cheesecake smaak",
          icon: <IceCream className="h-8 w-8 text-amber-200" />
        },
        {
          id: 9,
          name: "Aardbei",
          description: "Verfrissend aardbeienijs met verse aardbeien",
          icon: <IceCream className="h-8 w-8 text-pink-500" />
        },
        {
          id: 10,
          name: "Chocolade",
          description: "Rijk chocolade-ijs met Belgische chocolade",
          icon: <IceCream className="h-8 w-8 text-schepijsje-brown" />
        },
        {
          id: 11,
          name: "Chokotoff",
          description: "Chocolade toffee smaak",
          icon: <IceCream className="h-8 w-8 text-amber-800" />
        },
        {
          id: 12,
          name: "Cookies",
          description: "Roomijs met stukjes chocolate chip cookies",
          icon: <IceCream className="h-8 w-8 text-amber-400" />
        },
        // Tweede groep smaken
        {
          id: 13,
          name: "Ferrero Rocher",
          description: "Hazelnoot met chocolade en wafel",
          icon: <IceCream className="h-8 w-8 text-amber-700" />
        },
        {
          id: 14,
          name: "Gezouten caramel",
          description: "Zoete caramel met een vleugje zeezout",
          icon: <IceCream className="h-8 w-8 text-amber-600" />
        },
        {
          id: 15,
          name: "Hazelnoot",
          description: "Romig hazelnootijs met stukjes noot",
          icon: <IceCream className="h-8 w-8 text-amber-500" />
        },
        {
          id: 16,
          name: "Hello Kitty",
          description: "Speciale editie roze vanille-ijs",
          icon: <IceCream className="h-8 w-8 text-pink-300" />
        },
        {
          id: 17,
          name: "Kinder Bueno",
          description: "Naar de populaire chocoladereep",
          icon: <IceCream className="h-8 w-8 text-amber-300" />
        },
        {
          id: 18,
          name: "Kinderchocolade",
          description: "Milde melkchocoladesmaak",
          icon: <IceCream className="h-8 w-8 text-amber-400" />
        },
        {
          id: 19,
          name: "Kokos",
          description: "Tropische kokossmaak",
          icon: <IceCream className="h-8 w-8 text-gray-100" />
        },
        {
          id: 20,
          name: "Mokka",
          description: "Koffiesmaak met chocolade-accenten",
          icon: <IceCream className="h-8 w-8 text-amber-900" />
        },
        {
          id: 21,
          name: "Nutella",
          description: "Naar de bekende hazelnootpasta",
          icon: <IceCream className="h-8 w-8 text-amber-800" />
        },
        {
          id: 22,
          name: "Oreo",
          description: "Roomijs met stukjes Oreo-koekjes",
          icon: <IceCream className="h-8 w-8 text-gray-800" />
        },
        {
          id: 23,
          name: "Pistache",
          description: "Authentieke pistache smaak",
          icon: <IceCream className="h-8 w-8 text-green-600" />
        },
        {
          id: 24,
          name: "Raffaello",
          description: "Kokos met witte chocolade",
          icon: <IceCream className="h-8 w-8 text-gray-200" />
        },
        // Derde groep smaken
        {
          id: 25,
          name: "Rum-rozijnen",
          description: "Klassieker met rozijnen en rumextract",
          icon: <IceCream className="h-8 w-8 text-amber-800" />
        },
        {
          id: 26,
          name: "Snickers",
          description: "Pinda, caramel en chocolade",
          icon: <IceCream className="h-8 w-8 text-amber-700" />
        },
        {
          id: 27,
          name: "Smurfentaart",
          description: "Blauw vanille-ijs met fruitige smaak",
          icon: <IceCream className="h-8 w-8 text-blue-500" />
        },
        {
          id: 28,
          name: "Speculoos",
          description: "Kaneelkoekjes smaak",
          icon: <IceCream className="h-8 w-8 text-amber-600" />
        },
        {
          id: 29,
          name: "Stracciatella",
          description: "Romig vanille-ijs met chocolade stukjes",
          icon: <IceCream className="h-8 w-8 text-gray-200" />
        },
        {
          id: 30,
          name: "Tiramisu",
          description: "Naar het Italiaanse dessert",
          icon: <IceCream className="h-8 w-8 text-amber-200" />
        },
        {
          id: 31,
          name: "Vanille",
          description: "Romig vanille-ijs met Madagascar vanille",
          icon: <IceCream className="h-8 w-8 text-yellow-100" />
        },
        {
          id: 32,
          name: "Werther's Echte",
          description: "Naar de bekende karamelsnoepjes",
          icon: <IceCream className="h-8 w-8 text-yellow-600" />
        },
        {
          id: 33,
          name: "Witte chocolade",
          description: "Zoet ijs van witte chocolade",
          icon: <IceCream className="h-8 w-8 text-gray-100" />
        },
        {
          id: 34,
          name: "Witte stracciatella",
          description: "Witte chocolade met donkere chocoladestukjes",
          icon: <IceCream className="h-8 w-8 text-gray-200" />
        },
        {
          id: 35,
          name: "Witte Leonidas",
          description: "Premium witte chocolade smaak",
          icon: <IceCream className="h-8 w-8 text-gray-100" />
        },
        {
          id: 36,
          name: "Yoghurt bosvruchten",
          description: "Frisse yoghurt met bessen en bosvruchten",
          icon: <IceCream className="h-8 w-8 text-purple-400" />
        }
      ]
    },
    {
      title: "Dranken",
      items: [
        {
          id: 37,
          name: "Koffie",
          description: "Vers gezette koffie",
          icon: <Coffee className="h-8 w-8 text-schepijsje-brown" />
        },
        {
          id: 38,
          name: "Milkshakes",
          description: "Huisgemaakte milkshakes in verschillende smaken",
          icon: <Utensils className="h-8 w-8 text-schepijsje-teal" />
        }
      ]
    }
  ];

  // Functie om ijssmaken in groepen van 12 te splitsen voor de carousel
  const createFlavorGroups = (items: MenuItem[]) => {
    const groups = [];
    for (let i = 0; i < items.length; i += 12) {
      groups.push(items.slice(i, i + 12));
    }
    return groups;
  };

  return (
    <section id="aanbod" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-schepijsje-brown mb-4">Ons Aanbod</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Bij 't Schepijsje geniet u van ambachtelijk bereid ijs, heerlijke milkshakes en verse koffie.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index} className="mb-10">
              <h3 className="text-2xl font-semibold text-schepijsje-teal mb-6">{category.title}</h3>
              
              {category.title === "IJs smaken" ? (
                <div className="w-full">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full px-4"
                  >
                    <CarouselContent>
                      {createFlavorGroups(category.items).map((group, groupIndex) => (
                        <CarouselItem key={groupIndex} className="md:basis-full">
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {group.map((item) => (
                              <Card key={item.id} className="overflow-hidden border-schepijsje-lime border-2 hover:shadow-lg transition-shadow h-full">
                                <CardContent className="p-4 flex flex-col items-center text-center h-full">
                                  <div className="mb-3">{item.icon}</div>
                                  <h4 className="text-lg font-semibold text-schepijsje-brown mb-2">{item.name}</h4>
                                  {item.description && <p className="text-sm text-gray-600">{item.description}</p>}
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex justify-center mt-4">
                      <CarouselPrevious className="relative static mx-2 translate-y-0" />
                      <CarouselNext className="relative static mx-2 translate-y-0" />
                    </div>
                  </Carousel>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <Card key={item.id} className="overflow-hidden border-schepijsje-lime border-2 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="mb-4">{item.icon}</div>
                        <h4 className="text-xl font-semibold text-schepijsje-brown mb-2">{item.name}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
