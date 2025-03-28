
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section className="py-16 polka-dot-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-schepijsje-brown mb-4">Ijssalon 't Schepijsje</h2>
          <p className="text-lg text-schepijsje-brown max-w-2xl mx-auto">
            Ambachtelijk roomijs, dagelijks vers bereid, daarvoor kan u steeds bij ons terecht.
          </p>
        </div>

        <Card className="border-schepijsje-teal border-2 bg-white mx-auto max-w-3xl">
          <CardContent className="p-8">
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                U kan het <strong className="text-schepijsje-teal">ijs afhalen</strong> of <strong className="text-schepijsje-teal">ter plaatse eten</strong> in ons gezellig ijssalon of op onze ruime terras. Ook voor <strong className="text-schepijsje-teal">milkshakes</strong>, diverse <strong className="text-schepijsje-teal">frisdranken</strong> of een lekker <strong className="text-schepijsje-teal">tasje koffie</strong> bent u bij ons aan het juiste adres.
              </p>
              <p className="text-gray-700 mb-4">
                Kijk bij ons aanbod wat wij u kunnen bieden.
              </p>
              <p className="text-gray-700 mb-4">
                Voor al uw feesten verhuren wij aangepaste ijswagens. Kijk gerust even verder en vraag ons vrijblijvend prijzen.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
