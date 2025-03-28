
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-schepijsje-brown mb-4">Contact</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Heeft u vragen of wilt u een reservering maken? Neem gerust contact met ons op.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-schepijsje-lime border-2">
            <CardHeader>
              <CardTitle className="text-schepijsje-brown text-2xl">Bezoek ons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-schepijsje-teal mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Adres</h4>
                  <address className="not-italic">
                    't Schepijsje<br />
                    Hoogstraat 58<br />
                    3670 Meeuwen
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-schepijsje-teal mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Telefoon</h4>
                  <p>+32(0)11 / 74 38 45</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-schepijsje-teal mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Openingsuren</h4>
                  <ul className="space-y-1">
                    <li><span className="font-medium">Maandag - Vrijdag:</span> 13:00 - 21:00</li>
                    <li><span className="font-medium">Zaterdag - Zondag:</span> 12:00 - 22:00</li>
                    <li><span className="font-medium">Feestdagen:</span> 12:00 - 22:00</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-schepijsje-lime border-2">
            <CardHeader>
              <CardTitle className="text-schepijsje-brown text-2xl">Locatie</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">
                  Kaart van locatie zou hier worden weergegeven.<br />
                  U kunt ons vinden op Hoogstraat 58, 3670 Meeuwen.
                </p>
              </div>
              <div className="mt-4">
                <p className="text-gray-700">
                  We zijn gemakkelijk te bereiken en beschikken over parkeergelegenheid voor de deur. 
                  Kom langs en geniet van ons heerlijke ambachtelijke roomijs!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
