
import { Card, CardContent } from "@/components/ui/card";
import { Search, DollarSign, Wrench, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Escolha as Peças",
      description: "Use nosso configurador ou fale com um especialista para escolher os melhores componentes"
    },
    {
      number: "02",
      icon: DollarSign,
      title: "Receba o Orçamento",
      description: "Enviamos um orçamento detalhado em até 24h com preços atualizados"
    },
    {
      number: "03",
      icon: Wrench,
      title: "Montagem e Testes",
      description: "Nossa equipe monta seu PC com cuidado e realiza todos os testes necessários"
    },
    {
      number: "04",
      icon: Truck,
      title: "Entrega Segura",
      description: "Entregamos seu PC pronto para usar com embalagem especial e garantia total"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-neutral-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Processo simples e transparente do pedido até a entrega
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="bg-neutral-800/50 border-neutral-700 backdrop-blur-sm hover:bg-neutral-800/70 transition-all duration-300 transform hover:scale-105 relative overflow-hidden hover:border-orange-500/30"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <span className="text-black font-bold text-lg">{step.number}</span>
                </div>
                
                <CardContent className="p-6 pt-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-black" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
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

export default HowItWorks;
