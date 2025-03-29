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
                  <h4 className="font-semibold">Gsm</h4>
                  <p>+32(0)478 / 21 59 75</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-schepijsje-teal mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Openingsuren</h4>
                  <ul className="space-y-1">
                    <li><span className="font-medium">Alle dagen open van: </span> 14:00-22:00</li>
                    <li><span className="font-medium">Maandag </span> GESLOTEN</li>
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
              <div className="rounded-md overflow-hidden w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5011.7127205032275!2d5.520643276600944!3d51.09265834091684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0d6fe46059915%3A0xdcc9c226ce3fbaf!2s&#39;t%20Schepijsje!5e0!3m2!1snl!2sbe!4v1743185168814!5m2!1snl!2sbe" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locatie 't Schepijsje"
                  className="w-full"
                />
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
