import { useState } from "react";
import { Check } from "lucide-react";
import { plansMonth, plansYear } from "@/data/constants";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="planes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Planes y Precios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades.
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
              Anual
            </button>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"> */}
        <div className="flex flex-wrap gap-16 justify-center">
          {isAnnual
            ? plansYear.map((plan) => {
                return (
                  <div className="plan" key={plan.id}>
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
                      S/ <strong>{plan.price}</strong> x año
                    </p>
                    <b className="plan__price-anual">Pago único, ahorras un 8.33%</b>
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
              })
            : plansMonth.map((plan) => {
                return (
                  <div className="plan" key={plan.id}>
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
          * Todos los planes están sujetos a disponibilidad en tu zona. Consulta
          cobertura.
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
