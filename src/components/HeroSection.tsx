import { Button } from "@/components/ui/button";
import { useWhatsapp } from "@/hooks/useWhatsapp";
import { ArrowRight, Zap } from "lucide-react";

// import benchImg from "@/assets/images/bench.jpg";
import { Carousel } from "@/modules/home/components/Carousel";
import { carouselImages } from "@/data/constants";

const HeroSection = () => {
  const { sendMessageHandle } = useWhatsapp();

  return (
    <section className="h-auto xl:h-screen flex items-center pt-32 pb-20 bg-gradient-to-br from-blue-100 to-white" id="hero">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
              Internet Rápido y Estable para tu Hogar o Empresa
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Disfruta de la mejor experiencia en línea con nuestra conexión de
              fibra óptica. Sin cortes, máxima velocidad y soporte técnico 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary-light flex items-center gap-2"
                onClick={() => {
                  document
                    .getElementById("planes")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>Ver Planes</span>
                <ArrowRight size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary-light hover:text-white"
                onClick={() =>
                  sendMessageHandle(
                    "Hola, estoy interesado y deseo mas información."
                  )
                }
              >
                Solicitar Información
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <Zap size={18} className="text-secondary mr-2" />
              <span>Instalación en 24-48 horas en zonas con cobertura</span>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-10 flex justify-center">
            {/* <div className="relative">
              <img
                src={benchImg}
                alt="Fibra óptica de alta velocidad"
                className="rounded-2xl shadow-xl relative z-10 w-full max-w-md animate-float"
              />
            </div> */}
            <Carousel images={carouselImages} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
