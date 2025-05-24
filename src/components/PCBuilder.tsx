
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
      "Intel Core i5-13400F",
      "Intel Core i7-13700K",
      "AMD Ryzen 5 7600X",
      "AMD Ryzen 7 7700X",
      "Intel Core i9-13900K"
    ],
    gpu: [
      "NVIDIA RTX 4060",
      "NVIDIA RTX 4070",
      "NVIDIA RTX 4080",
      "AMD RX 7600 XT",
      "AMD RX 7800 XT"
    ],
    ram: [
      "16GB DDR4 3200MHz Corsair",
      "32GB DDR4 3600MHz G.Skill",
      "16GB DDR5 5600MHz Kingston",
      "32GB DDR5 6000MHz Corsair"
    ],
    motherboard: [
      "ASUS B550M-A WiFi",
      "MSI B760M PRO-B",
      "ASUS ROG Strix B650E",
      "Gigabyte Z790 AORUS"
    ],
    ssd: [
      "SSD 500GB NVMe Samsung",
      "SSD 1TB NVMe WD Black",
      "SSD 2TB NVMe Kingston",
      "SSD 500GB + HDD 1TB"
    ],
    power: [
      "Fonte 650W 80+ Bronze Corsair",
      "Fonte 750W 80+ Gold EVGA",
      "Fonte 850W 80+ Gold Seasonic",
      "Fonte 1000W 80+ Platinum"
    ],
    case: [
      "Gabinete Mid Tower RGB NZXT",
      "Gabinete Full Tower Corsair",
      "Gabinete Compact RGB Cooler Master",
      "Gabinete Premium Glass Fractal"
    ],
    cooler: [
      "Cooler Air Tower Cooler Master",
      "Water Cooler 240mm Corsair",
      "Cooler Air RGB be quiet!",
      "Water Cooler 360mm NZXT"
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
    <section id="pc-builder" className="py-20 px-4 bg-neutral-950">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Monte Seu PC <span className="text-orange-500">Ideal</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Configure cada componente e solicite seu orçamento personalizado
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Component Selection */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {Object.entries(components).map(([key, options]) => {
              const Icon = componentIcons[key as keyof typeof componentIcons];
              return (
                <Card key={key} className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm hover:bg-neutral-900/70 hover:border-orange-500/50 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-white">
                      <Icon className="mr-3 h-5 w-5 text-orange-500" />
                      {componentLabels[key as keyof typeof componentLabels]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select 
                      value={selectedComponents[key as keyof typeof selectedComponents]} 
                      onValueChange={(value) => handleComponentChange(key, value)}
                    >
                      <SelectTrigger className="bg-neutral-800 border-neutral-600 text-white hover:border-orange-500/50 transition-colors">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-800 border-neutral-600">
                        {options.map((option) => (
                          <SelectItem key={option} value={option} className="text-white hover:bg-neutral-700 focus:bg-orange-500/20">
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
            <Card className="bg-gradient-to-br from-neutral-950 to-neutral-900 border-orange-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <Settings className="mr-2 h-6 w-6 text-orange-500" />
                  Configuração
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(selectedComponents).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-start py-2 border-b border-neutral-700/50">
                    <span className="text-gray-400 text-sm">{componentLabels[key as keyof typeof componentLabels]}:</span>
                    <span className="text-white font-medium text-sm text-right max-w-[60%]">
                      {value || <span className="text-gray-500">Não selecionado</span>}
                    </span>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-orange-500/30">
                  <div className="bg-neutral-900/50 border border-orange-500/20 rounded-lg p-4 mb-4">
                    <p className="text-orange-500 font-semibold text-center mb-2">💰 Orçamento Personalizado</p>
                    <p className="text-gray-400 text-sm text-center">
                      Os preços serão calculados de acordo com sua configuração e preferências
                    </p>
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
