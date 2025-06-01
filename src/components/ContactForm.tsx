
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, Clock } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    console.log("Form submitted:", formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em até 24h úteis.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-neutral-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Solicite Seu Orçamento
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Preencha o formulário e receba uma proposta personalizada
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Entre em Contato
              </h3>
              <p className="text-gray-300 mb-8">
                Nossa equipe está pronta para ajudar você a montar o PC dos seus sonhos. 
                Entre em contato conosco e receba atendimento personalizado.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300">contato@defenderplanet.com.br</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Telefone</h4>
                  <p className="text-gray-300">(19) 98245-5253</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Atendimento</h4>
                  <p className="text-gray-300">Seg à Sex: 9h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-neutral-800/50 border-neutral-700 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-orange-500 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] transition-all duration-500 group-hover:animate-pulse"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-white text-2xl">Formulário de Contato</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Seu nome completo *"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-neutral-700 border-neutral-600 text-white placeholder:text-gray-400"
                    required
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Seu melhor email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-neutral-700 border-neutral-600 text-white placeholder:text-gray-400"
                    required
                  />
                </div>

                <div>
                  <Input
                    name="phone"
                    placeholder="Telefone/WhatsApp"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-neutral-700 border-neutral-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Descreva seu projeto ou deixe sua mensagem *"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-neutral-700 border-neutral-600 text-white placeholder:text-gray-400 min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold py-3 shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Solicitação
                </Button>

                <p className="text-sm text-gray-400 text-center">
                  * Campos obrigatórios | Responderemos em até 24h úteis
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
