import { Music2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Music2 size={32} className="text-purple-400" />
          <h1 className="text-2xl font-bold">DJ Andre Zanella</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#products" className="hover:text-purple-400">Produtos</a></li>
            <li><a href="#testimonials" className="hover:text-purple-400">Depoimentos</a></li>
            <li><a href="#faq" className="hover:text-purple-400">FAQ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}