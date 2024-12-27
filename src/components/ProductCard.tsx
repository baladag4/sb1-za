interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  audioUrl: string;
  price: string;
}

export default function ProductCard({ title, description, imageUrl, audioUrl, price }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <audio controls className="w-full mb-4">
          <source src={audioUrl} type="audio/mpeg" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
        <div className="text-2xl font-bold text-purple-600 mb-4">{price}</div>
        <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-bold hover:from-purple-700 hover:to-indigo-700 transition-colors">
          COMPRAR AGORA
        </button>
      </div>
    </div>
  );
}