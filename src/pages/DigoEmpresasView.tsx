import {
  Building2,
  ShieldCheck,
  Gauge,
  Headset,
  Phone,
  Mail,
  Zap,
  MessageCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: <Gauge size={36} className="text-secondary" />,
    title: "Alta Velocidad Dedicada",
    description:
      "Planes empresariales con velocidades estables y garantizadas para operaciones críticas.",
  },
  {
    icon: <ShieldCheck size={36} className="text-secondary" />,
    title: "Conexión Segura",
    description:
      "Red protegida con monitoreo constante y opciones de seguridad avanzadas.",
  },
  {
    icon: <Zap size={36} className="text-secondary" />,
    title: "Alta Disponibilidad",
    description:
      "Infraestructura diseñada para minimizar caídas y asegurar continuidad del negocio.",
  },
  {
    icon: <Headset size={36} className="text-secondary" />,
    title: "Soporte Preferencial",
    description:
      "Atención técnica especializada para empresas con tiempos de respuesta priorizados.",
  },
];

const DigoEmpresasView = () => {
  // const { sendMessageHandle } = useWhatsapp();
  const sendMessageHandle = (message: string = "Hola") => {
    const phoneNumber = "51978742815"; // Número sin "+"
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <section id="digo-empresas" className="bg-gray-50">
      {/* HERO */}
      <div className="bg-primary text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Building2 size={120} className="text-secondary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Internet Corporativo para Empresas
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            En DIGO EMPRESAS brindamos soluciones de conectividad por fibra
            óptica diseñadas para potenciar la productividad y el crecimiento de
            tu negocio.
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary-light"
            onClick={() =>
              sendMessageHandle(
                "Hola, deseo información sobre planes corporativos DIGO Empresas."
              )
            }
          >
            Solicitar Asesoría
          </Button>
        </div>
      </div>

      {/* BENEFICIOS */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Beneficios para tu Empresa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conectividad empresarial confiable, escalable y con soporte
              especializado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="mb-5 p-4 bg-blue-50 rounded-full">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACTO */}
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Contacta con un Asesor Empresarial
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro equipo está listo para ayudarte a encontrar la mejor
              solución de internet para tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <Phone className="mx-auto mb-4 text-secondary" size={32} />
                <h4 className="font-bold text-lg mb-2">Teléfono</h4>
                <p className="text-gray-600">+51975681649</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <Mail className="mx-auto mb-4 text-secondary" size={32} />
                <h4 className="font-bold text-lg mb-2">Correo</h4>
                <p className="text-gray-600">b.ventura@digo.net.pe</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <MessageCircle
                  className="mx-auto mb-4 text-secondary"
                  size={32}
                />
                <h4 className="font-bold text-lg mb-2">WhatsApp</h4>
                <Button
                  variant="outline"
                  className="mt-2"
                  onClick={() =>
                    sendMessageHandle(
                      "Hola, deseo contactar con un asesor de DIGO Empresas."
                    )
                  }
                >
                  Escribir Ahora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigoEmpresasView;
