
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Qual é a garantia dos componentes?",
      answer: "Todos os componentes vêm com garantia original de fábrica, que varia de 1 a 5 anos dependendo do fabricante. Além disso, oferecemos suporte técnico completo durante todo o período de garantia."
    },
    {
      question: "Vocês fazem upgrade em PCs já montados?",
      answer: "Sim! Fazemos upgrade de qualquer componente do seu PC atual. Nossa equipe avalia a compatibilidade e sugere as melhores opções para melhorar o desempenho do seu sistema."
    },
    {
      question: "Qual é o prazo de entrega?",
      answer: "O prazo varia conforme a disponibilidade dos componentes, mas geralmente é de 5 a 10 dias úteis após a confirmação do pedido. Casos urgentes podem ser priorizados mediante consulta."
    },
    {
      question: "Preciso saber montar PC para fazer um pedido?",
      answer: "Não! Nossa equipe cuida de tudo para você. Desde a consultoria para escolher os componentes ideais até a montagem, instalação do sistema operacional e todos os testes necessários."
    },
    {
      question: "Fazem entrega em todo o Brasil?",
      answer: "Sim, realizamos entregas para todo o território nacional com embalagem especial e seguro total. Trabalhamos com as melhores transportadoras para garantir a segurança do seu PC."
    },
    {
      question: "É possível parcelar o pagamento?",
      answer: "Sim! Oferecemos diversas opções de pagamento, incluindo parcelamento no cartão de crédito e boleto bancário. Entre em contato para conhecer todas as condições disponíveis."
    },
    {
      question: "Oferecem suporte após a entrega?",
      answer: "Claro! Oferecemos suporte técnico completo mesmo após a entrega. Nossa equipe está sempre disponível para tirar dúvidas, ajudar com configurações e resolver qualquer problema."
    },
    {
      question: "Posso acompanhar a montagem do meu PC?",
      answer: "Sim! Enviamos fotos e vídeos do processo de montagem para que você acompanhe cada etapa. Também realizamos testes completos e enviamos relatórios antes da entrega."
    }
  ];

  return (
    <section className="py-20 px-4 bg-neutral-950">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-neutral-900/50 border border-orange-500/20 rounded-full px-4 py-2 backdrop-blur-sm mb-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Dúvidas Frequentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processo de montagem
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-neutral-900/50 border-neutral-700 backdrop-blur-sm rounded-lg px-6 hover:border-orange-500/30 relative overflow-hidden"
              >
                <div className="absolute top-6 right-6 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <AccordionTrigger className="text-white hover:text-orange-400 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
