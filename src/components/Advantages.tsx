
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Wrench, Truck, CheckCircle, Headphones } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Garantia de Fábrica",
      description: "Todos os componentes com garantia original dos fabricantes"
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description: "Equipe técnica experiente para tirar suas dúvidas"
    },
    {
      icon: Wrench,
      title: "Montagem Gratuita",
      description: "Montamos seu PC sem custo adicional com testes completos"
    },
    {
      icon: Truck,
      title: "Envio Seguro",
      description: "Embalagem especial e envio com seguro total"
    },
    {
      icon: CheckCircle,
      title: "Componentes Originais",
      description: "Apenas produtos originais direto dos importadores"
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Consultoria para escolher as melhores configurações"
    }
  ];

  return (
    <section className="py-20 px-4 bg-neutral-950">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-neutral-900/50 border border-orange-500/20 rounded-full px-4 py-2 backdrop-blur-sm mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Vantagens Exclusivas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Por Que Escolher a Nossa Empresa?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Diferenciais que fazem da nossa empresa a melhor escolha para seus produtos eletrônicos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <Card 
                key={index} 
                className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm hover:bg-neutral-900/70 transition-all duration-300 transform hover:scale-105 hover:shadow-orange-500/20 hover:shadow-lg hover:border-orange-500/30 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
