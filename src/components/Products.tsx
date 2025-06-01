
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Zap } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "SSD Kingston NV2 1TB",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      category: "Armazenamento",
      description: "SSD NVMe de alta performance",
      rating: 4.8
    },
    {
      id: 2,
      name: "RTX 4070 ASUS ROG",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      category: "Placa de Vídeo",
      description: "Performance premium para jogos",
      rating: 4.9
    },
    {
      id: 3,
      name: "Ryzen 7 7700X",
      image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=300&fit=crop",
      category: "Processador",
      description: "Processador de alta performance",
      rating: 4.7
    },
    {
      id: 4,
      name: "RAM Corsair 32GB DDR5",
      image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop",
      category: "Memória",
      description: "Memória de alta velocidade",
      rating: 4.8
    },
    {
      id: 5,
      name: "Fonte EVGA 850W Gold",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop",
      category: "Fonte",
      description: "Fonte certificada 80+ Gold",
      rating: 4.9
    },
    {
      id: 6,
      name: "Gabinete NZXT H7 RGB",
      image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop",
      category: "Gabinete",
      description: "Design premium com RGB",
      rating: 4.6
    }
  ];

  return (
    <section id="products" className="py-20 px-4 bg-neutral-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Produtos em Destaque
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Conheça alguns dos melhores componentes disponíveis para sua configuração ideal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="bg-neutral-800/50 border-neutral-700 backdrop-blur-sm hover:bg-neutral-800/70 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden group relative"
            >
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-orange-500 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] transition-all duration-500 group-hover:animate-pulse"></div>
              <CardHeader className="p-0 relative z-10">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-neutral-950/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg flex items-center text-sm border border-neutral-700">
                      <Star className="h-3 w-3 text-orange-500 mr-1 fill-current" />
                      {product.rating}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6 relative z-10">
                <CardTitle className="text-white mb-2 text-lg">{product.name}</CardTitle>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black bg-neutral-950/50"
                  >
                    Ver Detalhes
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black"
                  >
                    <Zap className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
        </div>
      </div>
    </section>
  );
};

export default Products;
