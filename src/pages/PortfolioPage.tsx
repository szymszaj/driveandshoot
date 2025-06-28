import { useState } from "react";
import { ChevronLeft, ChevronRight, Eye, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const portfolioSessions = [
    {
      id: 1,
      title: "Porsche 911 GT3 RS - Tor Poznań",
      image: "/image/1.jpg",
      description:
        "Sesja zdjęciowa kultowego Porsche 911 GT3 RS na torze wyścigowym w Poznaniu. Dynamiczne ujęcia podkreślające sportowy charakter samochodu w naturalnym środowisku.",
      location: "Tor Poznań",
      year: "2024",
    },
    {
      id: 2,
      title: "BMW M4 Competition - Sesja nocna",
      image:
        "/image/10.jpg",
      description:
        "Spektakularna sesja nocna BMW M4 Competition z wykorzystaniem profesjonalnego oświetlenia. Gra świateł i cieni podkreśla agresywną stylistykę tego niemieckiego sportera.",
      location: "Warszawa",
      year: "2024",
    },
    {
      id: 3,
      title: "Audi RS6 Avant - Lifestyle Session",
      image:
        "/image/4.jpg",
      description:
        "Elegancka sesja lifestyle z Audi RS6 Avant. Połączenie luksusowego kombi z codziennym użytkowaniem, pokazujące wszechstronność tega wyjątkowego pojazdu.",
      location: "Kraków",
      year: "2024",
    },
    {
      id: 4,
      title: "Mercedes-AMG GT R - Studio Session",
      image:
        "/image/2.jpg",
      description:
        "Profesjonalna sesja studyjna Mercedes-AMG GT R. Kontrolowane oświetlenie pozwoliło na uchwycenie każdego detalu tego wyjątkowego supersamochodu z Affalterbach.",
      location: "Studio Warszawa",
      year: "2023",
    },
    {
      id: 5,
      title: "Ferrari 488 GTB - Sesja w górach",
      image:
        "/image/3.jpg",
      description:
        "Niezapomniana sesja Ferrari 488 GTB na tle malowniczych górskich krajobrazów. Kontrast między włoską elegancją a dziką naturą tworzył magiczne ujęcia.",
      location: "Tatry",
      year: "2023",
    },
    {
      id: 6,
      title: "Lamborghini Huracán - Event Coverage",
      image:
        "/image/9.jpg",
      description:
        "Relacja z ekskluzywnego eventu Lamborghini. Dynamiczne ujęcia Huracána w akcji, pokazujące moc i temperament tego włoskiego byka w naturalnym środowisku.",
      location: "Event Warszawa",
      year: "2023",
    },
    {
      id: 7,
      title: "McLaren 720S - Artystyczna sesja",
      image:
        "/image/11.jpg",
      description:
        "Artystyczna interpretacja McLaren 720S z wykorzystaniem nietypowych kątów i kompozycji. Futurystyczny design samochodu w nowoczesnej oprawie wizualnej.",
      location: "Gdańsk",
      year: "2023",
    },
    {
      id: 8,
      title: "Aston Martin DB11 - Sesja klasyczna",
      image:
        "/image/12.jpg",
      description:
        "Elegancka sesja Aston Martin DB11 podkreślająca brytyjską klasę i rzemiosło. Każde ujęcie celebruje dziedzictwo marki i ponadczasową elegancję tego GT.",
      location: "Poznań",
      year: "2022",
    },
    {
      id: 9,
      title: "Nissan GT-R - Track Day Session",
      image:
        "/image/13.jpg",
      description:
        "Intensywna sesja Nissan GT-R podczas Track Day. Ujęcia w ruchu pokazujące legendarne możliwości 'Godzilli' na torze wyścigowym.",
      location: "Tor Silesia Ring",
      year: "2022",
    },
    {
      id: 10,
      title: "Ford Mustang Shelby - American Muscle",
      image:
        "/image/17.jpg",
      description:
        "Sesja celebrująca amerykański muscle car - Ford Mustang Shelby. Surowa moc i charakterystyczny dźwięk V8 uchwycone w serii dramatycznych ujęć.",
      location: "Wrocław",
      year: "2022",
    },
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % portfolioSessions.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + portfolioSessions.length) % portfolioSessions.length
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Top 10 moich najlepszych sesji fotograficznych z ostatnich lat
            </p>
          </div>
        </div>
      </section>

      {/* Main Portfolio Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Main Image Display */}
          <div className="relative mb-12">
            <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden">
              <img
                src={portfolioSessions[selectedImage].image}
                alt={portfolioSessions[selectedImage].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              {/* Image Info Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-black/60 backdrop-blur-md rounded-lg p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {portfolioSessions[selectedImage].title}
                  </h2>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {portfolioSessions[selectedImage].description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full">
                      📍 {portfolioSessions[selectedImage].location}
                    </span>
                    <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full">
                      📅 {portfolioSessions[selectedImage].year}
                    </span>
                    <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full">
                      #{selectedImage + 1} z {portfolioSessions.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {portfolioSessions.map((session, index) => (
              <Card
                key={session.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  index === selectedImage
                    ? "ring-2 ring-red-600"
                    : "hover:ring-1 hover:ring-gray-600"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img
                      src={session.image}
                      alt={session.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all flex items-center justify-center">
                      <Eye className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                        <p className="text-white text-xs font-medium truncate">
                          #{index + 1} - {session.title.split(" - ")[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600 to-red-800 p-1 rounded-lg inline-block">
              <div className="bg-black px-8 py-6 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Chcesz podobną sesję?
                </h3>
                <p className="text-gray-300 mb-6">
                  Skontaktuj się ze mną i stwórzmy razem wyjątkowe zdjęcia
                  Twojego samochodu
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                  <Camera className="mr-2 h-5 w-5" />
                  Zamów swoją sesję
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
