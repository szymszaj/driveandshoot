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
        "Porsche 911 GT3 RS to skoncentrowana na torze wersja kultowego 911, zaprojektowana z myślą o maksymalnej wydajności zarówno na drodze, jak i na torze. Samochód na zdjęciu wygląda, jakby miał specjalne niebieskie felgi oraz panele maski i dachu wykonane z włókna węglowego, co jest częścią środków mających na celu zmniejszenie masy.\n\nSilnik:\n- 4,0-litrowy wolnossący silnik typu bokser o pojemności 6 litrów\n- 525 KM (518 KM)\n- 9000 obr./min. czerwona linia",
      location: "Tor Poznań",
      year: "2024",
    },
    {
      id: 2,
      title: "BMW E30 M3 Coupé (1986–1991)",
      image: "/image/10.jpg",
      description:
        "Pierwszy w historii model M3, wyprodukowany w celu homologacji BMW do wyścigów samochodów turystycznych Grupy A. Samochód ten zyskał popularność dzięki pudełkowatemu designowi, poszerzonym nadkolom, wyjątkowym panelom nadwozia (prawie każdy panel zewnętrzny różnił się od tego w zwykłym E30) i rodowodowi samochodu sportowego..",
      location: "",
      year: "2024",
    },
    {
      id: 3,
      title: "",
      image: "/image/4.jpg",
      description:
        "Pierwszy w historii model M3, wyprodukowany w celu homologacji BMW do wyścigów samochodów turystycznych Grupy A. Samochód ten zyskał popularność dzięki pudełkowatemu designowi, poszerzonym nadkolom, wyjątkowym panelom nadwozia (prawie każdy panel zewnętrzny różnił się od tego w zwykłym E30) i rodowodowi samochodu sportowego..",
      location: "Nowy Targ",
      year: "2024",
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
