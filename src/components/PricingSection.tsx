import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { plans } from "@/data/constants";

// const plans = [
//   {
//     name: "Básico",
//     speed: "100 Mbps",
//     price: 29.99,
//     features: [
//       "100 Mbps simétricos",
//       "Router WiFi incluido",
//       "Instalación gratuita",
//       "Soporte técnico",
//     ],
//     isPopular: false,
//   },
//   {
//     name: "Estándar",
//     speed: "300 Mbps",
//     price: 39.99,
//     features: [
//       "300 Mbps simétricos",
//       "Router WiFi 5 incluido",
//       "Instalación gratuita",
//       "Soporte técnico prioritario",
//       "Cambio de domicilio gratuito",
//     ],
//     isPopular: true,
//   },
//   {
//     name: "Premium",
//     speed: "1000 Mbps",
//     price: 59.99,
//     features: [
//       "1 Gbps simétricos",
//       "Router WiFi 6 incluido",
//       "Instalación gratuita",
//       "Soporte técnico VIP 24/7",
//       "Cambio de domicilio gratuito",
//       "IP fija",
//     ],
//     isPopular: false,
//   },
//   {
//     name: "Premium",
//     speed: "1000 Mbps",
//     price: 59.99,
//     features: [
//       "1 Gbps simétricos",
//       "Router WiFi 6 incluido",
//       "Instalación gratuita",
//       "Soporte técnico VIP 24/7",
//       "Cambio de domicilio gratuito",
//       "IP fija",
//     ],
//     isPopular: false,
//   },
// ];

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <section id="planes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Planes y Precios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades. Todos
              nuestros planes incluyen equipamiento y sin permanencia.
            </p>

            <div className="mt-8 inline-flex items-center p-1 bg-gray-100 rounded-lg">
              <button
                className={`px-4 py-2 rounded-md ${
                  !isAnnual ? "bg-white shadow-md" : ""
                }`}
                onClick={() => setIsAnnual(false)}
              >
                Mensual
              </button>
              <button
                className={`px-4 py-2 rounded-md ${
                  isAnnual ? "bg-white shadow-md" : ""
                }`}
                onClick={() => setIsAnnual(true)}
              >
                Anual (2 meses gratis)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* {plans.map((plan, index) => (
              <Card
                key={index}
                className={`border-2 ${
                  plan.isPopular
                    ? "border-secondary scale-105 md:scale-105 sm:scale-100"
                    : "border-gray-200"
                } hover:border-secondary hover:shadow-xl transition-all duration-300 relative`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                    Más Popular
                  </div>
                )}

                <CardHeader className="text-center pt-8">
                  <h3 className="text-4xl font-bold text-primary">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500">{plan.speed}</p>
                </CardHeader>

                <CardContent className="text-center">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">
                      S/.
                      {isAnnual
                        ? (plan.price * 10).toFixed(2)
                        : plan.price.toFixed(2)}
                    </span>
                    <span className="text-gray-500">
                      {isAnnual ? "/año" : "/mes"}
                    </span>
                  </div>

                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check
                          size={20}
                          className="text-secondary mr-2 flex-shrink-0 mt-1"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.isPopular
                        ? "bg-secondary hover:bg-secondary-light"
                        : "bg-primary hover:bg-primary-light"
                    }`}
                  >
                    Contratar Ahora
                  </Button>
                </CardFooter>
              </Card>
            ))} */}
            {plans.map((plan) => {
              return (
                <div
                  className={`plan ${plan.id == 4 && "lg:col-start-2 lg:col-end-3"}`}
                  key={plan.id}
                >
                  <h3
                    className={`plan__title ${
                      plan.isPopular && "plan__title--recommend"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p className="plan__type">Internet 100% Fibra Óptica</p>

                  {/* <h2 className="plan__speed-real">{plan.speed} Mbps</h2> */}
                  <h2 className="plan__speed-promo">
                    <strong>{plan.speed}</strong> Mbps
                  </h2>
                  <p className="plan__description">
                  ¡Velocidad al <span>máximo</span>!
                  </p>
                  <p className="plan__price">
                    S/ <strong>{plan.price}</strong> x mes
                  </p>
                  <p className="plan__price-regular">
                    Precio Regular: S/{plan.priceRegular}
                  </p>

                  <ul className="flex flex-col items-center mb-5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check
                          size={20}
                          className="text-secondary mr-2 flex-shrink-0 mt-1"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#contacto" className="plan__cta-button">
                    Contratar Ahora
                  </a>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center text-gray-500 text-sm">
            * Todos los planes están sujetos a disponibilidad en tu zona.
            Consulta cobertura.
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
