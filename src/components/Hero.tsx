import { useState, useEffect } from "react";
import { Camera, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Witaj na mojej stronie",
      subtitle: "wsiadaj do przodu i jedziemy razem!",
      image: "/bannerRudi.png",
    },
    {
      title: "Profesjonalna Fotografia Motoryzacyjna",
      subtitle: "Uwieczniam piękno i moc każdego pojazdu",
      image: "/image/1.jpg",
    },
    {
      title: "Sesje Zdjęciowe Premium",
      subtitle: "Twój samochód zasługuje na najlepsze zdjęcia",
      image: "/image/2.jpg",
    },
    {
      title: "Artystyczne Ujęcia Motoryzacyjne",
      subtitle: "Każdy detal ma znaczenie",
      image: "/image/3.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/kontakt">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
              >
                <Camera className="mr-2 h-5 w-5" />
                Zamów Sesję
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                size="lg"
                variant="ghost"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
              >
                Zobacz Portfolio
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-red-600 mr-2" />
                <span className="text-3xl font-bold text-red-600">100+</span>
              </div>
              <p className="text-gray-300">Zrealizowanych sesji</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-red-600 mr-2" />
                <span className="text-3xl font-bold text-red-600">2</span>
              </div>
              <p className="text-gray-300">Lata doświadczenia</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Camera className="h-6 w-6 text-red-600 mr-2" />
                <span className="text-3xl font-bold text-red-600">100%</span>
              </div>
              <p className="text-gray-300">Satysfakcji klientów</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-red-600" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
