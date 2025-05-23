
import { Button } from "@/components/ui/button";
import { Monitor, Zap } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Monte o PC dos Seus 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Sonhos</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Especialistas em montagem personalizada de computadores. 
            Escolha cada peça e receba seu setup pronto para usar com garantia total.
          </p>
          
          {/* Hero Image Placeholder */}
          <div className="relative mx-auto w-full max-w-2xl">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop" 
              alt="Setup gamer profissional" 
              className="rounded-2xl shadow-2xl mx-auto hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent rounded-2xl"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              onClick={scrollToBuilder}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Monitor className="mr-2 h-5 w-5" />
              Monte Seu PC
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="mr-2 h-5 w-5" />
              Fale com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
