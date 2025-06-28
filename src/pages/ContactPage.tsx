import { Mail, Phone, MapPin, Camera, Award, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedTypingText from "@/components/AnimatedTypingText/AnimatedTypingText";
import "@/components/AnimatedTypingText/animated-typing.css";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <section className="pt-20 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Zamów Swoją Sesję
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Skontaktuj się ze mną i stwórzmy razem wyjątkowe zdjęcia Twojego
              samochodu
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  O Mnie
                </h2>
                <AnimatedTypingText
                  text="  Jestem profesjonalnym fotografem motoryzacyjnym  z ponad
                  2-letnim doświadczeniem w branży. Moja pasja do samochodów
                  połączona z miłością do fotografii pozwala mi tworzyć
                  wyjątkowe ujęcia, które podkreślają piękno i charakter każdego
                  pojazdu.  Specjalizuję się w sesjach zdjęciowych aut, fotografii
                  eventowej oraz tworzeniu materiałów promocyjnych dla firm z
                  branży motoryzacyjnej. Każda sesja to dla mnie wyzwanie i
                  możliwość stworzenia czegoś unikalnego. Gwarantuję profesjonalną obsługę, terminowość oraz najwyższą
                  jakość wykonanych zdjęć. Zapraszam do współpracy!   "
                  className="text-gray-300 mb-6 leading-relaxed"
                  speed={33}
                />
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4 text-center">
                      <Camera className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">100+</div>
                      <div className="text-sm text-gray-400">Sesji</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4 text-center">
                      <Award className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">2</div>
                      <div className="text-sm text-gray-400">
                        Lata doświadczenia
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-sm text-gray-400">
                        Zadowolonych klientów
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4 text-center">
                      <Clock className="h-8 w-8 text-red-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">24h</div>
                      <div className="text-sm text-gray-400">Odpowiedź</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Kontakt
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gray-800 border-gray-700 hover:border-red-600/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Telefon</h3>
                  <p className="text-gray-300">+48 123 456 789</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:border-red-600/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <Mail className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-300">rudi_photographerr@wp.pl</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:border-red-600/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Lokalizacja
                  </h3>
                  <p className="text-gray-300">Nowy Targ i okolice</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-red-600 to-red-800 p-1 rounded-lg inline-block">
                <div className="bg-black px-8 py-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Gotowy na profesjonalną sesję?
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Skontaktuj się ze mną już dziś i omówmy szczegóły Twojego
                    projektu
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      <Phone className="mr-2 h-4 w-4" />
                      Zadzwoń teraz
                    </Button>
                    <Button
                      variant="outline"
                      className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Napisz email
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
