
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Emprendedor",
    content: "Desde que tengo Digo Telecom en mi negocio, las videoconferencias con clientes funcionan perfectamente. La velocidad y estabilidad son excepcionales, un gran cambio respecto a mi anterior proveedor.",
    rating: 5
  },
  {
    name: "Ana García",
    role: "Teletrabajadora",
    content: "Llevo 6 meses trabajando desde casa con la conexión de Digo Telecom y no he tenido ni un solo corte. El servicio al cliente es excelente y la instalación fue muy rápida.",
    rating: 5
  },
  {
    name: "Miguel Martín",
    role: "Gamer",
    content: "Como gamer, necesito una conexión con baja latencia. Digo Telecom es simplemente perfecto, he reducido mi ping y ahora puedo jugar sin problemas de lag. ¡Totalmente recomendado!",
    rating: 4
  }
];

const renderStars = (rating: number) => {
  return Array(5).fill(0).map((_, i) => (
    <StarIcon 
      key={i} 
      size={18} 
      className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
    />
  ));
};

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre la opinión de quienes ya disfrutan de nuestra conexión de fibra óptica.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
