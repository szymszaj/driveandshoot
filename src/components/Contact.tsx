import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-red-600" />,
      title: "Telefon",
      info: "+48 889 352 917",
      description: "Pon-Pt: 9:00-18:00",
    },
    {
      icon: <Mail className="h-6 w-6 text-red-600" />,
      title: "Email",
      info: "rudi_photographerr@wp.pl",
      description: "Odpowiadam w 24h",
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-600" />,
      title: "Lokalizacja",
      info: "Nowy Targ",
      description: "Dojazd w całej Polsce",
    },
    {
      icon: <Clock className="h-6 w-6 text-red-600" />,
      title: "Godziny pracy",
      info: "Pon-Sob: 8:00-20:00",
      description: "Niedziela: na umówienie",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
            Skontaktuj się ze mną
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Masz pytania o sesję fotograficzną? Chcesz omówić szczegóły
            projektu? Napisz lub zadzwoń - chętnie odpowiem na wszystkie
            pytania!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-red-600/50 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-red-400 transition-colors">
                  {contact.title}
                </h3>
                <p className="text-red-400 font-semibold mb-1">
                  {contact.info}
                </p>
                <p className="text-gray-400 text-sm">{contact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-800 p-1 rounded-xl">
            <div className="bg-black px-12 py-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Gotowy na profesjonalną sesję zdjęciową?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Niezależnie od tego, czy masz klasyka, sportowego czy
                luksusowego SUV-a - każdy samochód ma swoją historię do
                opowiedzenia. Pozwól mi ją uwiecznić!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+48 889 352 917"
                  className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Zadzwoń teraz
                </a>
                <a
                  href="mailto:rudi_photographerr@wp.pl"
                  className="inline-flex items-center justify-center px-6 py-3 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold rounded-lg transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Napisz email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
