
import { Button } from "@/components/ui/button";
import { ShoppingCart, Zap, Play, Monitor, Shield, Headphones, Cpu, Settings } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16 bg-neutral-950">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-neutral-900/50 border border-orange-500/20 rounded-full px-4 py-2 backdrop-blur-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Especialistas em PCs de Alta Performance</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Performance 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                  Extrema
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-xl">
                De componentes premium a setups completos. Montagem especializada, produtos de qualidade e suporte técnico dedicado.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-4 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300">
                <Shield className="h-8 w-8 text-orange-500 mb-2" />
                <h3 className="text-white font-semibold mb-1">Garantia Total</h3>
                <p className="text-gray-400 text-sm">Cobertura completa em todos os produtos</p>
              </div>
              
              <div className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-4 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300">
                <Cpu className="h-8 w-8 text-orange-500 mb-2" />
                <h3 className="text-white font-semibold mb-1">Montagem Expert</h3>
                <p className="text-gray-400 text-sm">Técnicos especializados certificados</p>
              </div>
              
              <div className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-4 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300">
                <Headphones className="h-8 w-8 text-orange-500 mb-2" />
                <h3 className="text-white font-semibold mb-1">Suporte 24h</h3>
                <p className="text-gray-400 text-sm">Atendimento técnico especializado</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={scrollToProducts}
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 border border-orange-400"
              >
                <Monitor className="mr-2 h-5 w-5" />
                Explorar Produtos
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-neutral-950/50 backdrop-blur-sm"
              >
                <Zap className="mr-2 h-5 w-5" />
                Solicitar Orçamento
              </Button>
            </div>
          </div>

          {/* Right Content - Visual Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              {/* Main large image */}
              <div className="col-span-2 relative group">
                <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl overflow-hidden border border-neutral-700 h-64 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=600&fit=crop" 
                    alt="Setup gamer profissional" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent"></div>
                  <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-neutral-950/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500/20 transition-all duration-300 group border border-orange-500/30">
                      <Play className="h-6 w-6 text-orange-500 ml-1 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Component showcase cards */}
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl border border-neutral-700 p-6 flex flex-col justify-center items-center text-center hover:border-orange-500/30 transition-colors duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=300&fit=crop" 
                  alt="Processador" 
                  className="w-20 h-20 object-cover rounded-lg mb-4"
                />
                <h3 className="text-white font-semibold mb-2">Processadores</h3>
                <p className="text-gray-400 text-sm">Intel & AMD</p>
              </div>
              
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl border border-neutral-700 p-6 flex flex-col justify-center items-center text-center hover:border-orange-500/30 transition-colors duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop" 
                  alt="Placa de vídeo" 
                  className="w-20 h-20 object-cover rounded-lg mb-4"
                />
                <h3 className="text-white font-semibold mb-2">Placas de Vídeo</h3>
                <p className="text-gray-400 text-sm">RTX & RX Series</p>
              </div>
              
              <div className="col-span-2 bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-xl border border-neutral-700 p-6 flex items-center justify-between hover:border-orange-500/30 transition-colors duration-300">
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Configuração Personalizada</h3>
                  <p className="text-gray-400">Monte seu PC ideal com nossa ferramenta interativa</p>
                </div>
                <div className="text-orange-500">
                  <Settings className="h-12 w-12" />
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8 bg-neutral-900/80 backdrop-blur-md border border-neutral-700 rounded-2xl px-8 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">1000+</div>
                <div className="text-gray-400 text-sm">Produtos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">5★</div>
                <div className="text-gray-400 text-sm">Avaliação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">24h</div>
                <div className="text-gray-400 text-sm">Suporte</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
