export default function FAQ() {
  const faqs = [
    {
      question: "Como faço para baixar as músicas após a compra?",
      answer: "Após a confirmação do pagamento, você receberá um e-mail com um link para download. O link ficará disponível por 7 dias."
    },
    {
      question: "Em qual formato as músicas são disponibilizadas?",
      answer: "Todas as músicas são disponibilizadas em formato MP3 de alta qualidade (320kbps)."
    },
    {
      question: "Posso usar as músicas comercialmente?",
      answer: "Sim, todas as músicas podem ser utilizadas em eventos e festas comerciais."
    },
    {
      question: "Com qual frequência o conteúdo é atualizado?",
      answer: "Atualizamos nosso catálogo semanalmente com os últimos lançamentos e tendências."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}