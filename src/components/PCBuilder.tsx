
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Cpu, HardDrive, Zap, Monitor, MemoryStick, CircuitBoard, Box, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PCBuilder = () => {
  const [selectedComponents, setSelectedComponents] = useState({
    cpu: "",
    gpu: "",
    ram: "",
    motherboard: "",
    ssd: "",
    power: "",
    case: "",
    cooler: ""
  });

  const { toast } = useToast();

  const components = {
    cpu: [
      "Intel Core i5-13400F - R$ 1.299",
      "Intel Core i7-13700K - R$ 2.199",
      "AMD Ryzen 5 7600X - R$ 1.499",
      "AMD Ryzen 7 7700X - R$ 1.999",
      "Intel Core i9-13900K - R$ 3.299"
    ],
    gpu: [
      "NVIDIA RTX 4060 - R$ 1.899",
      "NVIDIA RTX 4070 - R$ 2.999",
      "NVIDIA RTX 4080 - R$ 5.499",
      "AMD RX 7600 XT - R$ 1.699",
      "AMD RX 7800 XT - R$ 2.799"
    ],
    ram: [
      "16GB DDR4 3200MHz Corsair - R$ 399",
      "32GB DDR4 3600MHz G.Skill - R$ 699",
      "16GB DDR5 5600MHz Kingston - R$ 599",
      "32GB DDR5 6000MHz Corsair - R$ 1.199"
    ],
    motherboard: [
      "ASUS B550M-A WiFi - R$ 599",
      "MSI B760M PRO-B - R$ 699",
      "ASUS ROG Strix B650E - R$ 899",
      "Gigabyte Z790 AORUS - R$ 1.299"
    ],
    ssd: [
      "SSD 500GB NVMe Samsung - R$ 299",
      "SSD 1TB NVMe WD Black - R$ 499",
      "SSD 2TB NVMe Kingston - R$ 899",
      "SSD 500GB + HDD 1TB - R$ 399"
    ],
    power: [
      "Fonte 650W 80+ Bronze Corsair - R$ 399",
      "Fonte 750W 80+ Gold EVGA - R$ 599",
      "Fonte 850W 80+ Gold Seasonic - R$ 799",
      "Fonte 1000W 80+ Platinum - R$ 1.199"
    ],
    case: [
      "Gabinete Mid Tower RGB NZXT - R$ 599",
      "Gabinete Full Tower Corsair - R$ 799",
      "Gabinete Compact RGB Cooler Master - R$ 499",
      "Gabinete Premium Glass Fractal - R$ 899"
    ],
    cooler: [
      "Cooler Air Tower Cooler Master - R$ 199",
      "Water Cooler 240mm Corsair - R$ 499",
      "Cooler Air RGB be quiet! - R$ 299",
      "Water Cooler 360mm NZXT - R$ 799"
    ]
  };

  const componentIcons = {
    cpu: Cpu,
    gpu: Monitor,
    ram: MemoryStick,
    motherboard: CircuitBoard,
    ssd: HardDrive,
    power: Zap,
    case: Box,
    cooler: Settings
  };

  const componentLabels = {
    cpu: "Processador",
    gpu: "Placa de Vídeo",
    ram: "Memória RAM",
    motherboard: "Placa-Mãe",
    ssd: "Armazenamento",
    power: "Fonte",
    case: "Gabinete",
    cooler: "Cooler"
  };

  const handleComponentChange = (component: string, value: string) => {
    setSelectedComponents(prev => ({
      ...prev,
      [component]: value
    }));
  };

  const calculateTotal = () => {
    let total = 0;
    Object.values(selectedComponents).forEach(component => {
      if (component) {
        const priceMatch = component.match(/R\$\s*([\d.,]+)/);
        if (priceMatch) {
          const price = parseFloat(priceMatch[1].replace('.', '').replace(',', '.'));
          total += price;
        }
      }
    });
    return total;
  };

  const handleRequestQuote = () => {
    const selectedCount = Object.values(selectedComponents).filter(Boolean).length;
    
    if (selectedCount === 0) {
      toast({
        title: "Selecione componentes",
        description: "Escolha pelo menos um componente para solicitar orçamento.",
        variant: "destructive"
      });
      return;
    }

    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    
    toast({
      title: "Configuração salva!",
      description: `${selectedCount} componentes selecionados. Preencha o formulário abaixo.`,
    });
  };

  return (
    <section id="pc-builder" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Monte Seu PC <span className="text-orange-400">Ideal</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Configure cada componente e veja o preço em tempo real
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Component Selection */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {Object.entries(components).map(([key, options]) => {
              const Icon = componentIcons[key as keyof typeof componentIcons];
              return (
                <Card key={key} className="bg-black/50 border-gray-700 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 hover:border-orange-500/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-white">
                      <Icon className="mr-3 h-5 w-5 text-orange-400" />
                      {componentLabels[key as keyof typeof componentLabels]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select 
                      value={selectedComponents[key as keyof typeof selectedComponents]} 
                      onValueChange={(value) => handleComponentChange(key, value)}
                    >
                      <SelectTrigger className="bg-gray-800 border-gray-600 text-white hover:border-orange-500/50 transition-colors">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        {options.map((option) => (
                          <SelectItem key={option} value={option} className="text-white hover:bg-gray-700 focus:bg-orange-500/20">
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Build Summary */}
          <div className="sticky top-8">
            <Card className="bg-gradient-to-br from-black to-gray-900 border-orange-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <Settings className="mr-2 h-6 w-6 text-orange-400" />
                  Configuração
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(selectedComponents).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-start py-2 border-b border-gray-700/50">
                    <span className="text-gray-300 text-sm">{componentLabels[key as keyof typeof componentLabels]}:</span>
                    <span className="text-white font-medium text-sm text-right max-w-[60%]">
                      {value || <span className="text-gray-500">Não selecionado</span>}
                    </span>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-orange-500/30">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-white">Total:</span>
                    <span className="text-2xl font-bold text-orange-400">
                      R$ {calculateTotal().toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                    </span>
                  </div>
                  
                  <Button 
                    onClick={handleRequestQuote}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold py-3 shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 border border-orange-400"
                  >
                    Solicitar Orçamento
                  </Button>
                  <p className="text-sm text-gray-400 text-center mt-3">
                    💡 Responderemos em até 2h úteis
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PCBuilder;
