import Navbar from "../components/Dash/Navbar";
import Footer from "../components/Dash/Footer";
import ProductCard from "../components/Dash/ProductCard";
import "../styles/Dashboard.css";
import { getProdutos } from "../api/produto";
import { useEffect, useState } from "react";

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  valor: number;
  categoria: {
    id_categoria: number;
    nome_categoria: string;
  };
  estoque?: {
    id_estoque: number;
    quantidade: number;
  };
}

export default function Dashboard() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const data = await getProdutos();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div className="dashboard">
      <Navbar />
      <main className="main-content">
        <h1>Bem-vindo ao Dashboard Hortifruti</h1>
        <p>Veja nossos produtos frescos!</p>

        <div className="product-grid">
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              nome={produto.nome}
              imagem={`https://source.unsplash.com/400x300/?${produto.categoria.nome_categoria}`}
              preco={`R$ ${produto.valor.toFixed(2)}`}
              estoque={`Estoque: ${produto.estoque?.quantidade ?? 0} unidades`}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
