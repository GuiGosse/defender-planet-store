
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const builds = [
    {
      id: 1,
      title: "Setup Gamer RTX 4080 + Ryzen 7",
      image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop",
      specs: "RTX 4080 • Ryzen 7 7700X • 32GB DDR5"
    },
    {
      id: 2,
      title: "Workstation de Edição Profissional",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop",
      specs: "RTX 4070 • Intel i7-13700K • 64GB DDR5"
    },
    {
      id: 3,
      title: "PC Gamer RGB Personalizado",
      image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop",
      specs: "RTX 4060 Ti • Ryzen 5 7600X • 16GB DDR5"
    },
    {
      id: 4,
      title: "Setup Streaming Completo",
      image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=300&fit=crop",
      specs: "RTX 4070 Ti • Intel i5-13600K • 32GB DDR5"
    },
    {
      id: 5,
      title: "Workstation Compacta ITX",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      specs: "RTX 4060 • Ryzen 5 7600 • 16GB DDR5"
    },
    {
      id: 6,
      title: "PC High-End Enthusiast",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      specs: "RTX 4090 • Intel i9-13900K • 64GB DDR5"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-neutral-950">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Galeria de Montagens
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Alguns dos PCs que já montamos para nossos clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {builds.map((build) => (
            <Card 
              key={build.id} 
              className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm hover:bg-neutral-900/70 transition-all duration-300 transform hover:scale-105 overflow-hidden group relative"
            >
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-orange-500 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] transition-all duration-500 group-hover:animate-pulse"></div>
              <div className="relative z-10">
                <img 
                  src={build.image} 
                  alt={build.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60"></div>
              </div>
              
              <CardContent className="p-6 relative z-10">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {build.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {build.specs}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
