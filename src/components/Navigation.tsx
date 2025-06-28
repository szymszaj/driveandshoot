import { useState } from "react";
import { Camera, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-red-600/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              RUDI
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-red-400 transition-colors">
              Strona główna
            </Link>
            <a
              href="/#services"
              className="hover:text-red-400 transition-colors"
            >
              Usługi
            </a>
            <Link
              to="/portfolio"
              className="hover:text-red-400 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              to="/kontakt"
              className="hover:text-red-400 transition-colors"
            >
              Kontakt
            </Link>

            <Link to="/kontakt">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Zamów sesję
              </Button>
            </Link>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-red-600/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 hover:text-red-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Strona główna
              </Link>
              <a
                href="/#services"
                className="block px-3 py-2 hover:text-red-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Usługi
              </a>
              <Link
                to="/portfolio"
                className="block px-3 py-2 hover:text-red-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/kontakt"
                className="block px-3 py-2 hover:text-red-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
