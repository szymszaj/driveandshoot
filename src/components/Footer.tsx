import {
  Camera,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Sesje zdjęciowe aut",
    "Fotografia eventowa",
    "Zdjęcia produktowe",
    "Sesje lifestyle",
    "Fotografia rajdowa",
    "Pokazy samochodowe",
  ];

  const quickLinks = [
    { name: "Strona główna", href: "#home" },
    { name: "Usługi", href: "#services" },
    { name: "Galeria", href: "#gallery" },
    { name: "Kontakt", href: "#contact" },
    { name: "O mnie", href: "#about" },
    { name: "Blog", href: "#blog" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      href: "https://www.facebook.com/people/Rudi-Photographerr/pfbid09MH7qYviL5mQsS95k7yUt9jmi6o3WG93Z667h1dnkxF6zy1VgvX3zFMmqfdEfygvl/",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/rudi_photographerr/",
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                RUDI
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Profesjonalny fotograf motoryzacyjny z pasją do uwieczniania
              piękna i charakteru każdego pojazdu. Ponad 2 lat doświadczenia w
              branży automotive.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Usługi</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-red-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Szybkie linki</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-gray-400 text-sm">+48 889 352 917</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-600" />
                <span className="text-gray-400 text-sm">
                  rudi_photographerr@wp.pl
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-red-600" />
                <span className="text-gray-400 text-sm">Nowy Targ</span>
              </div>
            </div>

            {/* <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h4 className="text-white font-semibold mb-2">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-3">
                Otrzymuj najnowsze informacje o projektach i promocjach
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Twój email"
                  className="flex-1 px-3 py-2 bg-gray-700 text-white text-sm rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-r-lg transition-colors">
                  Zapisz się
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors"
              ></a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors"
              ></a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors"
              ></a>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
