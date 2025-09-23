

import { Zap, Signal, Wifi, Headset } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    icon: <Zap size={40} className="text-secondary" />,
    title: "Máxima Velocidad",
    description: "Disfruta de velocidades simétricas de hasta 1000 Mbps para descargas y subidas rápidas."
  },
  {
    icon: <Signal size={40} className="text-secondary" />,
    title: "Estabilidad Garantizada",
    description: "Conexión estable con baja latencia, ideal para videollamadas, gaming y streaming en 4K."
  },
  {
    icon: <Wifi size={40} className="text-secondary" />,
    title: "Sin Límites",
    description: "Sin restricciones de descarga ni contratación de servicios adicionales."
  },
  {
    icon: <Headset size={40} className="text-secondary" />,
    title: "Soporte",
    description: "Equipo técnico especializado disponible con horario extendido para resolver cualquier incidencia."
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Beneficios de Nuestro Servicio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos la mejor conexión de internet por fibra óptica, con tecnología de punta para garantizar una experiencia online inigualable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="mb-6 p-4 bg-blue-50 rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
