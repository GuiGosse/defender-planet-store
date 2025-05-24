
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const scrollToBuilder = () => {
    const builderSection = document.getElementById('pc-builder');
    builderSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-neutral-950 to-neutral-900">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-neutral-900/50 border border-orange-500/20 rounded-full px-4 py-2 backdrop-blur-sm mb-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Última Chamada</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Monte Seu PC com 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> Quem Entende</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Não perca mais tempo! Sua configuração ideal está a um clique de distância.
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/20 rounded-2xl p-8 backdrop-blur-sm border border-orange-500/30 mb-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-orange-400 mr-3" />
              <span className="text-2xl font-bold text-white">OFERTA ESPECIAL!</span>
            </div>
            <p className="text-orange-400 font-semibold text-lg">
              ⚡ Atendimento prioritário para os 10 primeiros da semana!
            </p>
            <p className="text-gray-300 mt-2">
              Garante desconto exclusivo na montagem + frete grátis para sua região
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToBuilder}
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-110"
            >
              Quero Começar Agora
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                ✓ Orçamento gratuito em 24h
              </p>
              <p className="text-gray-400 text-sm">
                ✓ Garantia total de fábrica
              </p>
              <p className="text-gray-400 text-sm">
                ✓ Suporte especializado
              </p>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-gray-400 text-sm">
              Mais de 1000 clientes satisfeitos | Nota 5 estrelas no Google
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
