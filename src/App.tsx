import React from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

const products = [
  {
    title: "Mega Funk Atualizado",
    description: "As melhores e mais recentes músicas do funk, atualizadas semanalmente.",
    imageUrl: "https://images.unsplash.com/photo-1571266028243-e4bb132c45e1?w=500&h=300&fit=crop",
    audioUrl: "/samples/mega-funk-preview.mp3",
    price: "R$ 49,90"
  },
  {
    title: "Mega Funk Antigos",
    description: "Coletânea com os maiores clássicos do funk de todos os tempos.",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
    audioUrl: "/samples/funk-antigos-preview.mp3",
    price: "R$ 39,90"
  },
  {
    title: "Sertanejo Raiz",
    description: "O melhor do sertanejo tradicional em uma seleção especial.",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=300&fit=crop",
    audioUrl: "/samples/sertanejo-preview.mp3",
    price: "R$ 44,90"
  },
  {
    title: "Flash Back",
    description: "Hits inesquecíveis dos anos 70, 80 e 90.",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=300&fit=crop",
    audioUrl: "/samples/flashback-preview.mp3",
    price: "R$ 39,90"
  },
  {
    title: "Eletrônicos 2000",
    description: "O melhor da música eletrônica da década de 2000.",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=300&fit=crop",
    audioUrl: "/samples/eletronicos-preview.mp3",
    price: "R$ 44,90"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">As Melhores Coletâneas para DJs</h1>
          <p className="text-xl mb-8">Músicas selecionadas e mixadas profissionalmente para suas festas e eventos</p>
          <a href="#products" className="bg-white text-purple-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Ver Produtos
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Produtos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 DJ Andre Zanella. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;