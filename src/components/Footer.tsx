import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  FileWarning,
  BookOpenText,
} from "lucide-react";
import { digoInformation } from "@/data/constants";
import BookImg from "@/assets/images/book.png";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { axiosInstance } from "@/api/axiosInstance";

const Footer = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      axiosInstance
        .get("/claim") // 🔁 Reemplaza con tu endpoint real
        .then(() => {
          console.log("Servidor ping enviado");
        })
        .catch((error) => {
          console.error("Error al hacer ping");
        });
    }, 2 * 60 * 1000); // 2 minutos
    return () => clearInterval(interval); // Limpia el intervalo si se desmonta el componente
  }, []);

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-6">
              <span className="text-white">Digo</span>
              <span className="text-secondary">Telecom</span>
            </div>
            <p className="text-gray-300 mb-6">
              La mejor experiencia de internet con fibra óptica para tu hogar o
              negocio. Velocidad, estabilidad y servicio técnico excepcional.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/digotelecom"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              {/* <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a> */}
              <a
                href="https://www.instagram.com/digotelecom/"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              {/* <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a> */}
              {/* <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/#planes"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Planes y Precios
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#beneficios"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Beneficios
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#cobertura"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cobertura
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#proceso"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cómo Contratarnos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#contacto"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Aviso Legal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Política de Cookies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Condiciones de Servicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Política de Calidad
                </a>
              </li>
            </ul>

            <div className="flex flex-col items-center text-center mt-6">
              <NavLink to="/libro-reclamaciones">
                <img
                  src={BookImg}
                  alt="Libro de Reclamaciones"
                  className="w-24 h-auto mb-4 shadow-md hover:scale-105 transition-transform cursor-pointer"
                />
              </NavLink>

              <h3 className="text-lg font-bold mb-2 text-white flex items-center gap-2">
                Libro de Reclamaciones
              </h3>
              <p className="text-gray-300 max-w-xs">
                ¿Tienes una queja o reclamo? Haz clic en el libro para llenar el
                formulario oficial.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contacto</h3>
            <ul className="space-y-3 text-gray-300">
              <li>{digoInformation.adress}</li>
              <li>{digoInformation.phone}</li>
              <li>{digoInformation.email}</li>
              <li>{digoInformation.horario}</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-light mb-8" />

        <div className="text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Digo Telecom. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
