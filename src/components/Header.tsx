import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, LogIn } from "lucide-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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

  const handleLogin = () => {
    window.open(
      "https://digo-inventory-front.vercel.app/login",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

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

          <div className="hidden lg:flex items-center space-x-5">
            <nav>
              <ul className="flex space-x-4 lg:space-x-6">
                <li>
                  <NavLink
                    to="/#hero"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    Inicio
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
                    to="/#planes"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    Planes
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
                    to="/#pago"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    Pagos
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="#cobertura"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    Cobertura
                  </NavLink>
                </li> */}
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
            {/* <Button
              variant="default"
              className="bg-primary hover:bg-primary-light flex items-center gap-2"
              onClick={() => handleLogin()}
            >
              <span>Login</span>
            </Button> */}
            <Button
              variant="default"
              className="bg-primary hover:bg-primary-light flex items-center gap-2"
              onClick={() => navigate("client/identify")}
            >
              <span>Consultar</span>
            </Button>
            {/* <Button
              variant="default"
              className="flex items-center gap-2"
              onClick={() =>
                sendMessageHandle(
                  "Hola, estoy interesado en contratar el servicio"
                )
              }
            >
              {!isMobile && <Phone size={16} />}
              <span>Login</span>
            </Button> */}
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
                  to="/#hero"
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#beneficios"
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  Beneficios
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#planes"
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  Planes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#proceso"
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  Instalacion
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#testimonios"
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  Testimonios
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#pago"
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  Pagos
                </NavLink>
              </li>
              {/* <li>
                  <NavLink
                    to="#cobertura"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    Cobertura
                  </NavLink>
                </li> */}
              <li>
                <Button
                  variant="default"
                  className="w-full bg-secondary hover:bg-secondary-light flex items-center justify-center gap-2"
                  onClick={() => {
                    sendMessageHandle(
                      "Hola, estoy interesado en contratar el servicio."
                    );
                    closeMobileMenu();
                  }}
                >
                  <Phone size={16} />
                  <span>Contratar Ahora</span>
                </Button>
                <Button
                  variant="default"
                  className="w-full bg-primary hover:bg-primary-light flex items-center justify-center gap-2 mt-2"
                  onClick={() => {
                    handleLogin();
                    closeMobileMenu();
                  }}
                >
                  <span>Login</span>
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
