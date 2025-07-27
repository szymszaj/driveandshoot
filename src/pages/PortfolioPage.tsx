import { useState } from "react";
import { Camera, ChevronLeft, ChevronRight, Link } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const images = Array.from({ length: 40 }, (_, i) => `/image/${i + 1}.jpg`);

const PortfolioPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
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
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="relative mb-12">
            <div className="relative h-96 md:h-[800px] rounded-lg overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={`Zdjęcie nr ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
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

                <a href="/kontakt">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                    <Camera className="mr-2 h-5 w-5" />
                    Zamów swoją sesję
                  </Button>
                </a>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
