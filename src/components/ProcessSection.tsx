import { Button } from "@/components/ui/button";
import { List, Calendar, Zap, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useWhatsapp } from "@/hooks/useWhatsapp";

const steps = [
  {
    icon: <List size={32} className="text-secondary" />,
    title: "Elige tu plan",
    description:
      "Selecciona el plan que mejor se adapte a tus necesidades de conectividad.",
  },
  {
    icon: <Calendar size={32} className="text-secondary" />,
    title: "Agenda la instalación",
    description:
      "Programa una cita con nuestros técnicos en el día y hora que más te convenga.",
  },
  {
    icon: <Zap size={32} className="text-secondary" />,
    title: "Disfruta de tu internet",
    description:
      "Empieza a navegar a máxima velocidad con nuestra conexión estable de fibra óptica.",
  },
];

const ProcessSection = () => {
  const isMobile = useIsMobile();
  const { sendMessageHandle } = useWhatsapp();

  return (
    <section id="proceso" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proceso de Contratación
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Contratar nuestro servicio de fibra óptica es rápido y sencillo. En
            solo tres pasos podrás disfrutar de la mejor conexión a internet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center relative flex flex-col items-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-6 mx-auto">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="opacity-80">{step.description}</p>

              {isMobile && index < steps.length - 1 && (
                <div className="flex justify-center mt-8 mb-4">
                  <ArrowRight
                    size={24}
                    className="text-secondary transform rotate-90"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary-light"
            onClick={() =>
              sendMessageHandle("Hola, deseo contratar el servicio.")
            }
          >
            Comienza Ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
