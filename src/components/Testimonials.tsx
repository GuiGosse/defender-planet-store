
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Excelente atendimento! Montaram meu PC gamer exatamente como eu queria. Super recomendo!"
    },
    {
      name: "Maria Santos",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Profissionais competentes e preço justo. Meu workstation ficou perfeito para edição de vídeo."
    },
    {
      name: "Pedro Costa",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Suporte incrível! Tiraram todas minhas dúvidas e entregaram dentro do prazo prometido."
    },
    {
      name: "Ana Oliveira",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Primeira vez montando um PC e eles me ajudaram em tudo. Qualidade excepcional!"
    },
    {
      name: "Carlos Ferreira",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Confiança total! Já é meu terceiro PC com eles. Sempre superam as expectativas."
    }
  ];

  return (
    <section className="py-20 px-4 bg-neutral-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Depoimentos reais de quem já confia em nosso trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-neutral-800/50 border-neutral-700 backdrop-blur-sm hover:bg-neutral-800/70 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
            >
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-orange-500 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] transition-all duration-500 group-hover:animate-pulse"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-orange-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 italic">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
