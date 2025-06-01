
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedBuild, setSelectedBuild] = useState<number | null>(null);

  const builds = [
    {
      id: 1,
      title: "Setup Gamer RTX 4080 + Ryzen 7",
      image: "https://i.imgur.com/sJ97uj2.jpeg",
      specs: "RTX 4080 • Ryzen 7 7700X • 32GB DDR5",
      gallery: [
        "https://i.imgur.com/sJ97uj2.jpeg",
        "https://i.imgur.com/CpDDuiH.jpeg",
        "https://i.imgur.com/0TAMlvu.jpeg"
      ]
    },
    {
      id: 2,
      title: "Workstation de Edição Profissional",
      image: "https://i.imgur.com/CpDDuiH.jpeg",
      specs: "RTX 4070 • Intel i7-13700K • 64GB DDR5",
      gallery: [
        "https://i.imgur.com/CpDDuiH.jpeg",
        "https://i.imgur.com/0uyMt4S.jpeg",
        "https://i.imgur.com/8VRKWSq.jpeg"
      ]
    },
    {
      id: 3,
      title: "PC Gamer RGB Personalizado",
      image: "https://i.imgur.com/0TAMlvu.jpeg",
      specs: "RTX 4060 Ti • Ryzen 5 7600X • 16GB DDR5",
      gallery: [
        "https://i.imgur.com/0TAMlvu.jpeg",
        "https://i.imgur.com/MeYuxi0.jpeg",
        "https://i.imgur.com/sJ97uj2.jpeg"
      ]
    },
    {
      id: 4,
      title: "Setup Streaming Completo",
      image: "https://i.imgur.com/0uyMt4S.jpeg",
      specs: "RTX 4070 Ti • Intel i5-13600K • 32GB DDR5",
      gallery: [
        "https://i.imgur.com/0uyMt4S.jpeg",
        "https://i.imgur.com/CpDDuiH.jpeg",
        "https://i.imgur.com/8VRKWSq.jpeg"
      ]
    },
    {
      id: 5,
      title: "Workstation Compacta ITX",
      image: "https://i.imgur.com/8VRKWSq.jpeg",
      specs: "RTX 4060 • Ryzen 5 7600 • 16GB DDR5",
      gallery: [
        "https://i.imgur.com/8VRKWSq.jpeg",
        "https://i.imgur.com/0TAMlvu.jpeg",
        "https://i.imgur.com/MeYuxi0.jpeg"
      ]
    },
    {
      id: 6,
      title: "PC High-End Enthusiast",
      image: "https://i.imgur.com/MeYuxi0.jpeg",
      specs: "RTX 4090 • Intel i9-13900K • 64GB DDR5",
      gallery: [
        "https://i.imgur.com/MeYuxi0.jpeg",
        "https://i.imgur.com/sJ97uj2.jpeg",
        "https://i.imgur.com/0uyMt4S.jpeg"
      ]
    }
  ];

  const openGallery = (buildId: number) => {
    setSelectedBuild(buildId);
  };

  const closeGallery = () => {
    setSelectedBuild(null);
  };

  const currentBuild = builds.find(build => build.id === selectedBuild);

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
              <div className="relative z-10 cursor-pointer" onClick={() => openGallery(build.id)}>
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

      {/* Modal de Galeria */}
      <Dialog open={selectedBuild !== null} onOpenChange={closeGallery}>
        <DialogContent className="sm:max-w-3xl bg-neutral-900 border-neutral-700 p-0 overflow-hidden">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-6 w-6 text-white" />
            <span className="sr-only">Fechar</span>
          </DialogClose>
          
          {currentBuild && (
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">{currentBuild.title}</h2>
              <p className="text-gray-300 mb-6">{currentBuild.specs}</p>
              
              <Carousel className="w-full">
                <CarouselContent>
                  {currentBuild.gallery.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="overflow-hidden rounded-xl">
                          <img 
                            src={image} 
                            alt={`${currentBuild.title} - Imagem ${index + 1}`}
                            className="w-full h-[400px] object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-neutral-800 text-white hover:bg-orange-500 hover:text-black" />
                <CarouselNext className="right-2 bg-neutral-800 text-white hover:bg-orange-500 hover:text-black" />
              </Carousel>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
