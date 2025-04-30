import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

import digoLogo from "@/assets/images/digo-logo.jpg";
import { useWhatsapp } from "@/hooks/useWhatsapp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { sendMessageHandle } = useWhatsapp();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 py-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-primary flex items-center gap-2"
            >
              <img
                className="header__logo"
                src={digoLogo}
                alt="Digo Telecom Logo"
              />
              <span className="text-primary">Digo</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
            <nav>
              <ul className="flex space-x-4 lg:space-x-6">
                <li>
                  <a
                    href="#planes"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    Planes
                  </a>
                </li>
                <li>
                  <a
                    href="#beneficios"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    Beneficios
                  </a>
                </li>
                <li>
                  <a
                    href="#proceso"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    Instalacion
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonios"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    Testimonios
                  </a>
                </li>
                <li>
                  <a
                    href="#cobertura"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    Cobertura
                  </a>
                </li>
              </ul>
            </nav>
            <Button
              variant="default"
              className="bg-secondary hover:bg-secondary-light flex items-center gap-2"
              onClick={() =>
                sendMessageHandle(
                  "Hola, estoy interesado en contratar el servicio"
                )
              }
            >
              {!isMobile && <Phone size={16} />}
              <span>Contratar Ahora</span>
            </Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <a
                  href="#planes"
                  className="block text-gray-700 hover:text-primary transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  Planes
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="block text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="#proceso"
                  className="block text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Proceso
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  className="block text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  href="#cobertura"
                  className="block text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cobertura
                </a>
              </li>
              <li>
                <Button
                  variant="default"
                  className="w-full bg-secondary hover:bg-secondary-light flex items-center justify-center gap-2"
                  onClick={() =>
                    sendMessageHandle(
                      "Hola, estoy interesado en contratar el servicio."
                    )
                  }
                >
                  <Phone size={16} />
                  <span>Contratar Ahora</span>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
