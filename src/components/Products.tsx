
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Zap } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "SSD Kingston NV2 1TB",
      image: "https://images5.kabum.com.br/produtos/fotos/sync_mirakl/400945/medium/SSD-Kingston-Nv2-500GB-M-2-2280-NVME-PCIE-4-0-X4-Leitura-3500MB-s-E-Grava-o-2100MB-s-Preto-Snv2s-500g_1747940388.jpg",
      category: "Armazenamento",
      description: "SSD NVMe de alta performance",
      rating: 4.8
    },
    {
      id: 2,
      name: "RTX 4070 ASUS ROG",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRnb40FFnvr3h0Dw_CqM7OGK_RGG6MFnz2d4VrZt_cjxMU6XJMCyKIoPDQHK-UUA1MC4Nr0HUe6lFoXtXDdS2s_iGnRxgvHsg",
      category: "Placa de Vídeo",
      description: "Performance premium para jogos",
      rating: 4.9
    },
    {
      id: 3,
      name: "AMD Ryzen™ 9 9950X3D",
      image: "https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/3021650-ryzen-9-9900x3d-product.jpg",
      category: "Processador",
      description: "Processador de alta performance",
      rating: 4.7
    },
    {
      id: 4,
      name: "RAM Corsair 32GB DDR5",
      image: "https://m.media-amazon.com/images/I/61XsKRKsGoL.jpg",
      category: "Memória",
      description: "Memória de alta velocidade",
      rating: 4.8
    },
    {
      id: 5,
      name: "Fonte Corsair HX1000i Series 1000",
      image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/s/e/sem_t_tulo-1_1.jpg",
      category: "Fonte",
      description: "Fonte certificada platinum",
      rating: 4.9
    },
    {
      id: 6,
      name: "ATX Gaming Case",
      image: "https://m.media-amazon.com/images/I/717U744hhnS._AC_SX679_.jpg",
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
            Destaques para turbinar seu PC
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
                    Mais Informações
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
