
import React from 'react';
import { Button } from '@/components/ui/button';
import { List, Calendar, Zap, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <List size={32} className="text-secondary" />,
    title: "Elige tu plan",
    description: "Selecciona el plan que mejor se adapte a tus necesidades de conectividad."
  },
  {
    icon: <Calendar size={32} className="text-secondary" />,
    title: "Agenda la instalación",
    description: "Programa una cita con nuestros técnicos en el día y hora que más te convenga."
  },
  {
    icon: <Zap size={32} className="text-secondary" />,
    title: "Disfruta de tu internet",
    description: "Empieza a navegar a máxima velocidad con nuestra conexión estable de fibra óptica."
  }
];

const ProcessSection = () => {
  return (
    <section id="proceso" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proceso de Contratación</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Contratar nuestro servicio de fibra óptica es rápido y sencillo. En solo tres pasos podrás disfrutar de la mejor conexión a internet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-6 mx-auto">
                {step.icon}
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-[calc(50%-2rem)] h-0.5 bg-primary-light">
                  <ArrowRight className="absolute top-1/2 right-0 -translate-y-1/2 text-primary-light" />
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="opacity-80">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary-light">
            Comienza Ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
