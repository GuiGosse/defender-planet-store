
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
      price: "A partir de R$ 299",
      rating: 4.8
    },
    {
      id: 2,
      name: "RTX 4070 ASUS ROG",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      category: "Placa de Vídeo",
      price: "A partir de R$ 2.999",
      rating: 4.9
    },
    {
      id: 3,
      name: "Ryzen 7 7700X",
      image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=300&fit=crop",
      category: "Processador",
      price: "A partir de R$ 1.499",
      rating: 4.7
    },
    {
      id: 4,
      name: "RAM Corsair 32GB DDR5",
      image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop",
      category: "Memória",
      price: "A partir de R$ 899",
      rating: 4.8
    },
    {
      id: 5,
      name: "Fonte EVGA 850W Gold",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop",
      category: "Fonte",
      price: "A partir de R$ 699",
      rating: 4.9
    },
    {
      id: 6,
      name: "Gabinete NZXT H7 RGB",
      image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop",
      category: "Gabinete",
      price: "A partir de R$ 599",
      rating: 4.6
    }
  ];

  return (
    <section id="products" className="py-20 px-4 bg-slate-900/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Produtos em Destaque
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Conheça alguns dos melhores componentes disponíveis com os melhores preços do mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg flex items-center text-sm">
                      <Star className="h-3 w-3 text-yellow-400 mr-1 fill-current" />
                      {product.rating}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-white mb-2 text-lg">{product.name}</CardTitle>
                <p className="text-2xl font-bold text-green-400 mb-4">{product.price}</p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                  >
                    Ver Detalhes
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    <Zap className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
