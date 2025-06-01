
import { Cpu, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-16 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
         <div className="flex items-center space-x-2 mb-4">
  <img
    src="https://i.imgur.com/fCV2ueQ.png"
    alt="Logo TechAssemble"
    className="w-8 h-8 rounded-lg border border-orange-400 object-cover"
  />
           <span className="text-xl font-bold text-white">Defender PlanetStore</span>
</div>

            <p className="text-gray-400 mb-4">
              Especialistas em produtos eletrônicos e montagem personalizada de computadores. 
              Transformamos sua visão em realidade.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-orange-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-orange-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Montagem de PC</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Venda de Componentes</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Suporte Técnico</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Garantia Estendida</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Processadores</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Placas de Vídeo</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Memórias RAM</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Periféricos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-orange-400" />
                <span>contato@defenderplanet.com.br</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-orange-400" />
                <span>(19) 98245-5253</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-orange-400" />
                <span>Paulínia, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Defender PlanetStore. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
