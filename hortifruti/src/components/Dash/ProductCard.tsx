import '../../styles/Dashboard.css'

type Props = {
  nome: string;
  imagem: string;
  preco: string;
};

export default function ProductCard({ nome, imagem, preco }: Props) {
  return (
    <div className="product-card">
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <p>{preco}</p>
    </div>
  );
}
