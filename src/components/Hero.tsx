
import { Button } from "@/components/ui/button";
import { ShoppingCart, Zap, Play, Monitor } from "lucide-react";

const Hero = () => {
  const scrollToBuilder = () => {
    const builderSection = document.getElementById('pc-builder');
    builderSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16 bg-black">
      {/* Background gradients with orange neon */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-gray-600/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Tecnologia de 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500"> Ponta</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Especialistas em produtos eletrônicos e montagem de PCs. 
              Desde componentes individuais até setups completos com garantia total.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-3xl">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=600&fit=crop" 
              alt="Setup gamer profissional" 
              className="rounded-2xl shadow-2xl mx-auto hover:scale-105 transition-transform duration-500 border border-gray-800"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-2xl"></div>
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500/30 transition-all duration-300 group border border-orange-500/50">
                <Play className="h-8 w-8 text-orange-400 ml-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              onClick={scrollToBuilder}
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 border border-orange-400"
            >
              <Monitor className="mr-2 h-5 w-5" />
              Explore Produtos
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-black/50"
            >
              <Zap className="mr-2 h-5 w-5" />
              Consulte Especialista
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-sm text-gray-400">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-orange-400 mr-2">1000+</span>
              <span>Produtos Vendidos</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-orange-400 mr-2">5★</span>
              <span>Avaliação Google</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-orange-400 mr-2">24h</span>
              <span>Suporte Técnico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
