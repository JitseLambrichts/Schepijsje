import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { IceCream, Coffee, Utensils, Droplet, Circle, Star, CupSoda } from 'lucide-react';
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
      title: "Sorbets",
      items: [
        {
          id: 101,
          name: "Aardbei",
          description: "Verfrissende aardbeien sorbet",
          icon: <Droplet className="h-8 w-8 text-pink-500" />
        },
        {
          id: 102,
          name: "Appelsien",
          description: "Frisse sinaasappel sorbet",
          icon: <Droplet className="h-8 w-8 text-orange-500" />
        },
        {
          id: 103,
          name: "Blauwe bes",
          description: "Zoete blauwe bessen sorbet",
          icon: <Droplet className="h-8 w-8 text-blue-600" />
        },
        {
          id: 104,
          name: "Bloedappelsien",
          description: "Intense bloedsinaasappel sorbet",
          icon: <Droplet className="h-8 w-8 text-red-600" />
        },
        {
          id: 105,
          name: "Citroen",
          description: "Verfrissende citroen sorbet",
          icon: <Droplet className="h-8 w-8 text-yellow-400" />
        },
        {
          id: 106,
          name: "Framboos",
          description: "Fruitige frambozen sorbet",
          icon: <Droplet className="h-8 w-8 text-red-500" />
        },
        {
          id: 107,
          name: "Groene appel",
          description: "Friszure groene appel sorbet",
          icon: <Droplet className="h-8 w-8 text-green-500" />
        },
        {
          id: 108,
          name: "Hugo",
          description: "Verfrissende vlierbloesem sorbet",
          icon: <Droplet className="h-8 w-8 text-green-200" />
        },
        {
          id: 109,
          name: "Limoncello",
          description: "Italiaanse citroenlikeur sorbet",
          icon: <Droplet className="h-8 w-8 text-yellow-300" />
        },
        {
          id: 110,
          name: "Meloen",
          description: "Zoete meloen sorbet",
          icon: <Droplet className="h-8 w-8 text-green-300" />
        },
        {
          id: 111,
          name: "Rode bes",
          description: "Friszure rode bessen sorbet",
          icon: <Droplet className="h-8 w-8 text-red-400" />
        },
        {
          id: 112,
          name: "Tropical (suikervrij)",
          description: "Suikervrije tropische vruchten sorbet",
          icon: <Droplet className="h-8 w-8 text-yellow-500" />
        }
      ]
    },
    {
      title: "Extra's",
      items: [
        {
          id: 201,
          name: "Slagroom",
          description: "Verse slagroom",
          icon: <Circle className="h-8 w-8 text-gray-100" />
        },
        {
          id: 202,
          name: "Chocodip",
          description: "Chocolade dipsaus",
          icon: <Circle className="h-8 w-8 text-amber-900" />
        },
        {
          id: 203,
          name: "Discodip",
          description: "Kleurrijke suikerstrooisel",
          icon: <Circle className="h-8 w-8 text-pink-400" />
        },
        {
          id: 204,
          name: "Smartiedip",
          description: "Mini chocolade dragees",
          icon: <Circle className="h-8 w-8 text-blue-400" />
        },
        {
          id: 205,
          name: "Brésilienne",
          description: "Krokante gekarameliseerde noten",
          icon: <Circle className="h-8 w-8 text-amber-700" />
        },
        {
          id: 206,
          name: "Toppings (aardbei)",
          description: "Zoete aardbeiensaus",
          icon: <Circle className="h-8 w-8 text-red-500" />
        },
        {
          id: 207,
          name: "Toppings (caramel)",
          description: "Zoete karamelsaus",
          icon: <Circle className="h-8 w-8 text-amber-600" />
        },
        {
          id: 208,
          name: "Toppings (chocolade)",
          description: "Rijke chocoladesaus",
          icon: <Circle className="h-8 w-8 text-schepijsje-brown" />
        },
        {
          id: 209,
          name: "Toppings (blauwe bes)",
          description: "Zoete blauwe bessensaus",
          icon: <Circle className="h-8 w-8 text-blue-700" />
        },
        {
          id: 210,
          name: "Warme chocoladesaus",
          description: "Warme vloeibare chocolade",
          icon: <Circle className="h-8 w-8 text-amber-800" />
        },
        {
          id: 211,
          name: "Witte chocoladesaus",
          description: "Zoete witte chocoladesaus",
          icon: <Circle className="h-8 w-8 text-amber-100" />
        },
        {
          id: 212,
          name: "Advocaat",
          description: "Traditionele eierlikeur",
          icon: <Circle className="h-8 w-8 text-yellow-400" />
        }
      ]
    },
    {
      title: "IJscoupes",
      items: [
        {
          id: 301,
          name: "Coupe Dame Blanche",
          description: "Vanille-ijs met warme chocoladesaus",
          icon: <Star className="h-8 w-8 text-yellow-100" />
        },
        {
          id: 302,
          name: "Coupe Brésilienne",
          description: "Vanille-ijs met karamel en gekarameliseerde nootjes",
          icon: <Star className="h-8 w-8 text-amber-600" />
        },
        {
          id: 303,
          name: "Coupe Banana Split",
          description: "Vanille-ijs met banaan en chocoladesaus",
          icon: <Star className="h-8 w-8 text-yellow-400" />
        },
        {
          id: 304,
          name: "Coupe Advocaat",
          description: "Vanille-ijs met advocaat",
          icon: <Star className="h-8 w-8 text-yellow-300" />
        },
        {
          id: 305,
          name: "Coupe Krieken",
          description: "Vanille-ijs met warme krieken",
          icon: <Star className="h-8 w-8 text-red-600" />
        }
      ]
    },
    {
      title: "Seizoens Coupes",
      items: [
        {
          id: 401,
          name: "Coupe Aardbeien",
          description: "Vanille-ijs met verse aardbeien (seizoensgebonden)",
          icon: <Star className="h-8 w-8 text-pink-500" />
        },
        {
          id: 402,
          name: "Coupe Vers Fruit",
          description: "Vanille-ijs met een mix van vers seizoensfruit",
          icon: <Star className="h-8 w-8 text-green-400" />
        },
        {
          id: 403,
          name: "Coupe Blauwe Bessen",
          description: "Vanille-ijs met verse blauwe bessen (seizoensgebonden)",
          icon: <Star className="h-8 w-8 text-blue-600" />
        }
      ]
    },
    {
      title: "Frisdranken",
      items: [
        {
          id: 501,
          name: "Coca Cola",
          description: "Klassieke cola",
          icon: <CupSoda className="h-8 w-8 text-red-600" />
        },
        {
          id: 502,
          name: "Coca Cola Light",
          description: "Calorievrije cola",
          icon: <CupSoda className="h-8 w-8 text-gray-400" />
        },
        {
          id: 503,
          name: "Coca Cola Zero",
          description: "Suikervrije cola",
          icon: <CupSoda className="h-8 w-8 text-gray-800" />
        },
        {
          id: 504,
          name: "Fanta",
          description: "Bruisende sinaasappeldrank",
          icon: <CupSoda className="h-8 w-8 text-orange-500" />
        },
        {
          id: 505,
          name: "Fristi",
          description: "Fruitige yoghurtdrank",
          icon: <CupSoda className="h-8 w-8 text-pink-400" />
        },
        {
          id: 506,
          name: "Ice-tea",
          description: "Verfrissende ijsthee",
          icon: <CupSoda className="h-8 w-8 text-amber-400" />
        },
        {
          id: 507,
          name: "Oasis",
          description: "Fruitige drank",
          icon: <CupSoda className="h-8 w-8 text-green-400" />
        },
        {
          id: 508,
          name: "Sprite",
          description: "Verfrissende citroendrank",
          icon: <CupSoda className="h-8 w-8 text-green-200" />
        },
        {
          id: 509,
          name: "Spa Reine",
          description: "Plat mineraalwater",
          icon: <CupSoda className="h-8 w-8 text-blue-200" />
        },
        {
          id: 510,
          name: "Spa bruisend",
          description: "Bruisend mineraalwater",
          icon: <CupSoda className="h-8 w-8 text-blue-300" />
        },
        {
          id: 511,
          name: "Schweppes tonic",
          description: "Bittere tonic water",
          icon: <CupSoda className="h-8 w-8 text-yellow-200" />
        },
        {
          id: 512,
          name: "Tönissteiner Citroen",
          description: "Verfrissende citroenlimonade",
          icon: <CupSoda className="h-8 w-8 text-yellow-300" />
        },
        {
          id: 513,
          name: "Tönissteiner Orange",
          description: "Verfrissende sinaasappellimonade",
          icon: <CupSoda className="h-8 w-8 text-orange-400" />
        },
        {
          id: 514,
          name: "Jupiler",
          description: "Belgisch pils",
          icon: <CupSoda className="h-8 w-8 text-amber-500" />
        },
        {
          id: 515,
          name: "Leffe blond/bruin",
          description: "Belgisch abdijbier",
          icon: <CupSoda className="h-8 w-8 text-amber-700" />
        }
      ]
    },
    {
      title: "Warme Dranken",
      items: [
        {
          id: 601,
          name: "Koffie",
          description: "Vers gezette koffie",
          icon: <Coffee className="h-8 w-8 text-schepijsje-brown" />
        },
        {
          id: 602,
          name: "Espresso",
          description: "Sterke Italiaanse koffie",
          icon: <Coffee className="h-8 w-8 text-amber-900" />
        },
        {
          id: 603,
          name: "Cappuccino",
          description: "Espresso met gestoomde melk en melkschuim",
          icon: <Coffee className="h-8 w-8 text-amber-300" />
        },
        {
          id: 604,
          name: "Cappuccino vanille",
          description: "Cappuccino met vanillesiroop",
          icon: <Coffee className="h-8 w-8 text-yellow-100" />
        },
        {
          id: 605,
          name: "Cappuccino caramel",
          description: "Cappuccino met karamelsiroop",
          icon: <Coffee className="h-8 w-8 text-amber-500" />
        },
        {
          id: 606,
          name: "Cappuccino speculoos",
          description: "Cappuccino met speculoossiroop",
          icon: <Coffee className="h-8 w-8 text-amber-600" />
        },
        {
          id: 607,
          name: "Cappuccino hazelnoot",
          description: "Cappuccino met hazelnootsiroop",
          icon: <Coffee className="h-8 w-8 text-amber-700" />
        },
        {
          id: 608,
          name: "Latte Macchiato",
          description: "Gelaagde koffie met melk en espresso",
          icon: <Coffee className="h-8 w-8 text-amber-200" />
        },
        {
          id: 609,
          name: "Latte oreo",
          description: "Latte met Oreo-smaak",
          icon: <Coffee className="h-8 w-8 text-gray-800" />
        },
        {
          id: 610,
          name: "Latte brésilienne",
          description: "Latte met karamel en crunch",
          icon: <Coffee className="h-8 w-8 text-amber-600" />
        },
        {
          id: 611,
          name: "Latte maltesers",
          description: "Latte met malteserssmaak",
          icon: <Coffee className="h-8 w-8 text-amber-800" />
        },
        {
          id: 612,
          name: "Latte bueno",
          description: "Latte met Bueno-smaak",
          icon: <Coffee className="h-8 w-8 text-amber-400" />
        },
        {
          id: 613,
          name: "Latte speculoos",
          description: "Latte met speculoossmaak",
          icon: <Coffee className="h-8 w-8 text-amber-600" />
        },
        {
          id: 614,
          name: "Thee",
          description: "Diverse soorten thee",
          icon: <Coffee className="h-8 w-8 text-green-600" />
        },
        {
          id: 615,
          name: "Warme chocomelk",
          description: "Huisgemaakte warme chocolademelk",
          icon: <Coffee className="h-8 w-8 text-amber-800" />
        }
      ]
    },
    {
      title: "Milkshakes",
      items: [
        {
          id: 37,
          name: "Milkshakes",
          description: "Huisgemaakte milkshakes in verschillende smaken",
          icon: <Utensils className="h-8 w-8 text-schepijsje-teal" />
        }
      ]
    }
  ];

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
              
              {category.items.length > 6 ? (
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
                    {category.title !== "Sorbets" && category.title !== "Extra's" && (
                      <div className="flex justify-center mt-4">
                        <CarouselPrevious className="relative static mx-2 translate-y-0" />
                        <CarouselNext className="relative static mx-2 translate-y-0" />
                      </div>
                    )}
                  </Carousel>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
