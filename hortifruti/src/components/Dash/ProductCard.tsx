import '../../styles/Dashboard.css'

interface ProductCardProps {
  nome: string;
  imagem: string;
  preco: string;
  estoque: string;
}

export default function ProductCard({ nome, imagem, preco, estoque }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <p>{preco}</p>
      <p>{estoque}</p>
    </div>
  );
}

