
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { IceCream, Coffee, Utensils } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const MenuSection = () => {
  const categories = [
    {
      title: "IJs afhalen",
      items: [
        {
          id: 1,
          name: "Vanille",
          description: "Romig vanille-ijs met Madagascar vanille",
          icon: <IceCream className="h-8 w-8 text-schepijsje-teal" />
        },
        {
          id: 2,
          name: "Chocolade",
          description: "Rijk chocolade-ijs met Belgische chocolade",
          icon: <IceCream className="h-8 w-8 text-schepijsje-brown" />
        },
        {
          id: 3,
          name: "Aardbei",
          description: "Verfrissend aardbeien-ijs met verse aardbeien",
          icon: <IceCream className="h-8 w-8 text-pink-500" />
        }
      ]
    },
    {
      title: "Dranken",
      items: [
        {
          id: 4,
          name: "Koffie",
          description: "Vers gezette koffie",
          icon: <Coffee className="h-8 w-8 text-schepijsje-brown" />
        },
        {
          id: 5,
          name: "Milkshakes",
          description: "Huisgemaakte milkshakes in verschillende smaken",
          icon: <Utensils className="h-8 w-8 text-schepijsje-teal" />
        }
      ]
    }
  ];

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
            <div key={index}>
              <h3 className="text-2xl font-semibold text-schepijsje-teal mb-6">{category.title}</h3>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
