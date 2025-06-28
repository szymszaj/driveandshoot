
import { Camera, Car, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Car className="h-12 w-12 text-red-600" />,
      title: "Sesje Zdjęciowe Aut",
      description: "Profesjonalne sesje fotograficzne samochodów - od klasycznych po sportowe. Każdy detal uwieczniony w perfekcji.",
      features: ["Zdjęcia studyjne", "Sesje plenerowe", "Fotografia detali", "Obróbka RAW"]
    },
    {
      icon: <Camera className="h-12 w-12 text-red-600" />,
      title: "Fotografia Eventowa",
      description: "Dokumentacja wydarzeń motoryzacyjnych, pokazów samochodowych, rajdów i spotkań miłośników motoryzacji.",
      features: ["Eventy motoryzacyjne", "Pokazy samochodowe", "Rajdy i wyścigi", "Spotkania klubowe"]
    },
    {
      icon: <Award className="h-12 w-12 text-red-600" />,
      title: "Zdjęcia Produktowe",
      description: "Profesjonalne zdjęcia części samochodowych, akcesoriów i produktów motoryzacyjnych dla firm i sklepów.",
      features: ["Części samochodowe", "Akcesoria tuningowe", "Produkty motoryzacyjne", "Katalogi firm"]
    },
    {
      icon: <Users className="h-12 w-12 text-red-600" />,
      title: "Sesje Lifestyle",
      description: "Sesje łączące pasję do motoryzacji z lifestyle'em. Zdjęcia właścicieli z ich samochodami w naturalnych sceneriach.",
      features: ["Portrety z autem", "Sesje rodzinne", "Lifestyle motoryzacyjny", "Sesje tematyczne"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
            Moje Usługi
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specjalizuję się w fotografii motoryzacyjnej, oferując pełen zakres usług 
            dla miłośników samochodów i firm z branży automotive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-red-600/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center justify-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-red-600 to-red-800 p-1 rounded-lg">
            <div className="bg-black px-8 py-4 rounded-lg">
              <p className="text-lg font-semibold text-white mb-2">
                Gotowy na profesjonalną sesję?
              </p>
              <p className="text-red-400 text-sm">
                Skontaktuj się ze mną i omówmy szczegóły Twojego projektu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
