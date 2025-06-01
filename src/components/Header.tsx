import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Monte seu PC", id: "pc-builder" },
    { label: "Como Funciona", id: "how-it-works" },
    { label: "Galeria", id: "gallery" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://i.imgur.com/fCV2ueQ.png" // substitua com o link direto da imagem
              alt="Logo da Defender PlanetStore"
              className="w-8 h-8 rounded-lg border border-orange-400 object-cover"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection("products")}
              variant="outline"
              size="sm"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black bg-neutral-950/50"
            >
              Ver Produtos
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black border border-orange-400"
            >
              <Zap className="mr-2 h-4 w-4" />
              Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-800">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  onClick={() => scrollToSection("products")}
                  variant="outline"
                  size="sm"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black bg-neutral-950/50"
                >
                  Ver Produtos
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="sm"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black border border-orange-400"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Orçamento
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
