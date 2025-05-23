
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "SSD Kingston NV2 1TB",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      category: "Armazenamento"
    },
    {
      id: 2,
      name: "RTX 4070 ASUS ROG",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      category: "Placa de Vídeo"
    },
    {
      id: 3,
      name: "Ryzen 7 7700X",
      image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400&h=300&fit=crop",
      category: "Processador"
    },
    {
      id: 4,
      name: "RAM Corsair 32GB DDR5",
      image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop",
      category: "Memória"
    },
    {
      id: 5,
      name: "Fonte EVGA 850W Gold",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop",
      category: "Fonte"
    },
    {
      id: 6,
      name: "Gabinete NZXT H7 RGB",
      image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop",
      category: "Gabinete"
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Produtos em Destaque
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Conheça alguns dos melhores componentes disponíveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-white mb-4">{product.name}</CardTitle>
                <Button 
                  variant="outline" 
                  className="w-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
