import { useState } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { id: "all", name: "Wszystkie" },
    { id: "image", name: "Samochody" },
    { id: "details", name: "Detale" },
    { id: "events", name: "Eventy" },
    { id: "lifestyle", name: "Lifestyle" },
  ];

  const images = [
    {
      id: 1,
      src: "/image/1.jpg",
      category: "image",
      title: "Klasyczna elegancja",
    },
    {
      id: 2,
      src: "/image/2.jpg",
      category: "image",
      title: "Sportowy charakter",
    },
    {
      id: 3,
      src: "/image/DETAL.jpg",
      category: "details",
      title: "Precyzja wykonania",
    },
    {
      id: 4,
      src: "/image/4.jpg",
      category: "image",
      title: "Luksus w ruchu",
    },
    {
      id: 5,
      src: "/image/DETAL_1.jpg",
      category: "details",
      title: "Detale wnętrza",
    },
    {
      id: 6,
      src: "/image/EVENT.jpg",
      category: "events",
      title: "Event motoryzacyjny",
    },
    {
      id: 7,
      src: "/image/10.jpg",
      category: "lifestyle",
      title: "Lifestyle session",
    },
    {
      id: 8,
      src: "/image/LIMUZYNA.jpg",
      category: "image",
      title: "Moc i elegancja",
    },
  ];

  const filteredImages =
    currentCategory === "all"
      ? images
      : images.filter((img) => img.category === currentCategory);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
    );
  };

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
            Galeria Prac
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Poznaj moje najlepsze realizacje fotograficzne z dziedziny
            motoryzacji
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => {
                  setCurrentCategory(category.id);
                  setCurrentImageIndex(0);
                }}
                className={`${
                  currentCategory === category.id
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="relative mb-12">
          <div className="relative h-96 md:h-[750px] rounded-lg overflow-hidden">
            <img
              src={filteredImages[currentImageIndex]?.src}
              alt={filteredImages[currentImageIndex]?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {filteredImages[currentImageIndex]?.title}
              </h3>
              <p className="text-gray-300">
                {currentImageIndex + 1} z {filteredImages.length}
              </p>
            </div>
          </div>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                index === currentImageIndex
                  ? "ring-2 ring-red-600"
                  : "hover:ring-1 hover:ring-gray-600"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all flex items-center justify-center">
                    <Eye className="h-6 w-6 text-white opacity-0 hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/portfolio">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              Zobacz pełne portfolio
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
