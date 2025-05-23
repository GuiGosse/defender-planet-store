
import { Button } from "@/components/ui/button";
import { Monitor, Zap, Play } from "lucide-react";

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Monte o PC dos Seus 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Sonhos</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Especialistas em montagem personalizada de computadores. 
              Escolha cada peça e receba seu setup pronto para usar com garantia total.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-3xl">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=600&fit=crop" 
              alt="Setup gamer profissional" 
              className="rounded-2xl shadow-2xl mx-auto hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent rounded-2xl"></div>
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
                <Play className="h-8 w-8 text-white ml-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              onClick={scrollToBuilder}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Monitor className="mr-2 h-5 w-5" />
              Monte Seu PC Agora
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg"
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="mr-2 h-5 w-5" />
              Fale com Especialista
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-sm text-gray-400">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-400 mr-2">1000+</span>
              <span>Clientes Satisfeitos</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-400 mr-2">5★</span>
              <span>Avaliação Google</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-400 mr-2">24h</span>
              <span>Resposta Garantida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
