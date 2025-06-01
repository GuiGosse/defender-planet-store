import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white">
      <div className="text-center max-w-md px-4">
        <div className="mb-6">
          <img 
            src="https://i.imgur.com/fCV2ueQ.png" 
            alt="Defender PlanetStore Logo" 
            className="w-16 h-16 mx-auto rounded-lg border border-orange-400"
          />
        </div>
        <h1 className="text-6xl font-bold mb-4 text-orange-500">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! Parece que esta página não existe no nosso universo de tecnologia.</p>
        <p className="text-gray-400 mb-8">O componente que você procura não foi encontrado em nosso inventário.</p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Voltar para a loja
        </a>
      </div>
    </div>
  );
};

export default NotFound;
