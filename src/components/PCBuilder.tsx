
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Cpu, HardDrive, Zap, Monitor, MemoryStick, Motherboard, Box } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PCBuilder = () => {
  const [selectedComponents, setSelectedComponents] = useState({
    cpu: "",
    gpu: "",
    ram: "",
    motherboard: "",
    ssd: "",
    power: "",
    case: ""
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
      "16GB DDR4 3200MHz",
      "32GB DDR4 3600MHz",
      "16GB DDR5 5600MHz",
      "32GB DDR5 6000MHz"
    ],
    motherboard: [
      "ASUS B550M-A WiFi",
      "MSI B760M PRO-B",
      "ASUS ROG Strix B650E",
      "Gigabyte Z790 AORUS"
    ],
    ssd: [
      "SSD 500GB NVMe",
      "SSD 1TB NVMe",
      "SSD 2TB NVMe",
      "SSD 500GB + HDD 1TB"
    ],
    power: [
      "Fonte 650W 80+ Bronze",
      "Fonte 750W 80+ Gold",
      "Fonte 850W 80+ Gold",
      "Fonte 1000W 80+ Platinum"
    ],
    case: [
      "Gabinete Mid Tower RGB",
      "Gabinete Full Tower",
      "Gabinete Compact RGB",
      "Gabinete Premium Glass"
    ]
  };

  const componentIcons = {
    cpu: Cpu,
    gpu: Monitor,
    ram: MemoryStick,
    motherboard: Motherboard,
    ssd: HardDrive,
    power: Zap,
    case: Box
  };

  const componentLabels = {
    cpu: "Processador",
    gpu: "Placa de Vídeo",
    ram: "Memória RAM",
    motherboard: "Placa-Mãe",
    ssd: "Armazenamento",
    power: "Fonte",
    case: "Gabinete"
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
      title: "Ótima escolha!",
      description: `${selectedCount} componentes selecionados. Preencha o formulário abaixo.`,
    });
  };

  return (
    <section id="pc-builder" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Monte Seu PC Personalizado
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Escolha cada componente e monte o PC perfeito para suas necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Component Selection */}
          <div className="space-y-6">
            {Object.entries(components).map(([key, options]) => {
              const Icon = componentIcons[key as keyof typeof componentIcons];
              return (
                <Card key={key} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-white">
                      <Icon className="mr-3 h-5 w-5 text-purple-400" />
                      {componentLabels[key as keyof typeof componentLabels]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select 
                      value={selectedComponents[key as keyof typeof selectedComponents]} 
                      onValueChange={(value) => handleComponentChange(key, value)}
                    >
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        {options.map((option) => (
                          <SelectItem key={option} value={option} className="text-white hover:bg-slate-700">
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
            <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Resumo da Montagem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(selectedComponents).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-slate-600/30">
                    <span className="text-gray-300">{componentLabels[key as keyof typeof componentLabels]}:</span>
                    <span className="text-white font-medium text-sm">
                      {value || "Não selecionado"}
                    </span>
                  </div>
                ))}
                
                <div className="pt-6">
                  <Button 
                    onClick={handleRequestQuote}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Solicitar Orçamento
                  </Button>
                  <p className="text-sm text-gray-400 text-center mt-3">
                    Responderemos em até 24h úteis
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
