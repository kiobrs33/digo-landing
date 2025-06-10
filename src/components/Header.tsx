import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
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

  const location = useLocation();

  useEffect(() => {
    const isOnHome = location.pathname === "/";
    const hasHash = location.hash;

    if (isOnHome && hasHash) {
      const id = hasHash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

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
                  <NavLink
                    to="/#planes"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    Planes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/#beneficios"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    Beneficios
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/#proceso"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    Instalacion
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/#testimonios"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    Testimonios
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#cobertura"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    Cobertura
                  </NavLink>
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
                <NavLink
                  to="/#planes"
                  className="block text-gray-700 hover:text-primary transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  Planes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#beneficios"
                  className="block text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Beneficios
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#proceso"
                  className="block text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Proceso
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#testimonios"
                  className="block text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonios
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#cobertura"
                  className="block text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cobertura
                </NavLink>
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
