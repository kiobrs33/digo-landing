import React from "react";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
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
                <a
                  href="#planes"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Planes y Precios
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="#cobertura"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cobertura
                </a>
              </li>
              <li>
                <a
                  href="#proceso"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cómo Contratarnos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </a>
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
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contacto</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                Calle Ambrosio Vucetich 130, Parque Industrial, Arequipa, Peru
              </li>
              <li>967 471 827</li>
              <li>digotelecomaqp@gmail.com</li>
              <li>Lun-Vie: 9:00-20:00</li>
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
