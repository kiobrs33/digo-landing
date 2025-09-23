
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "¿Cuánto tarda la instalación?",
    answer: "La instalación se realiza en un plazo de 24-48 horas en zonas con cobertura, una vez confirmada la contratación. Nuestros técnicos se pondrán en contacto contigo para acordar el día y la hora que mejor te convenga."
  },
  // {
  //   question: "¿Hay permanencia en los contratos?",
  //   answer: "No, en Digo Telecom no creemos en las permanencias. Puedes darte de baja cuando quieras sin ningún tipo de penalización. Estamos seguros de la calidad de nuestro servicio y por eso no necesitamos atarte con permanencias."
  // },
  {
    question: "¿La velocidad contratada es real?",
    answer: "Sí, garantizamos al menos el 90% de la velocidad contratada. A diferencia de otras tecnologías, la fibra óptica ofrece velocidades simétricas y estables tanto de subida como de bajada."
  },
  {
    question: "¿Puedo llevarme el servicio si me mudo?",
    answer: "Por supuesto. Si te mudas a otra zona con cobertura, podemos trasladar tu servicio sin coste adicional. Solo necesitamos que nos avises con una semana de antelación para programar la nueva instalación."
  },
  {
    question: "¿Qué router incluye el servicio?",
    answer: "Proporcionamos routers de última generación adaptados a cada plan. Para el plan Premium incluimos un router WiFi 6 de alta gama que garantiza máximo alcance y estabilidad en toda tu casa."
  },
  {
    question: "¿Cómo puedo pagar mi factura mensual?",
    answer: "Ofrecemos varias modalidades de pago: domiciliación bancaria, tarjeta de crédito o transferencia. La factura es emitida el día 1 de cada mes y puedes consultarla en tu área de cliente."
  }
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Preguntas Frecuentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos tus dudas sobre nuestro servicio de fibra óptica.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border p-0">
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-primary font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
