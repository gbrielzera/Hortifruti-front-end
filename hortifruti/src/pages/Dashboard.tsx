import { useState, useEffect } from 'react';
import Navbar from "../components/Dash/Navbar";
import Footer from "../components/Dash/Footer";
import ProductCard from "../components/Dash/ProductCard";
import "../styles/Dashboard.css";
import { getProdutos } from "../api/produto";
import type { Produto } from "../types/produto";
import CheckoutModal from "../components/Dash/CheckoutModal";

type MetodoPagamento = 'pix' | 'cartao' | 'dinheiro';

export default function Dashboard() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carrinho, setCarrinho] = useState<{produto: Produto, quantidade: number}[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);

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

  const handleAddToCart = (produto: Produto, quantidade: number) => {
    // Verifica se há estoque suficiente
    if (produto.estoque && produto.estoque.quantidade < quantidade) {
      alert(`Quantidade indisponível em estoque! Só temos ${produto.estoque.quantidade} unidades.`);
      return;
    }

    // Atualiza o estoque local
    setProdutos(prev => prev.map(p => {
      if (p.id === produto.id && p.estoque) {
        return {
          ...p,
          estoque: {
            ...p.estoque,
            quantidade: p.estoque.quantidade - quantidade
          }
        };
      }
      return p;
    }));

    // Adiciona ao carrinho ou atualiza quantidade se já existir
    setCarrinho(prev => {
      const itemExistente = prev.find(item => item.produto.id === produto.id);
      if (itemExistente) {
        return prev.map(item => 
          item.produto.id === produto.id 
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        );
      }
      return [...prev, {produto, quantidade}];
    });
  };

  const finalizarCompra = async (metodo: MetodoPagamento, valorRecebido?: number) => {
    try {
      // Simulação dos dados do pedido
      const total = carrinho.reduce((sum, item) => sum + (item.produto.valor * item.quantidade), 0);
      const dadosPedido = {
        itens: carrinho,
        pagamento: {
          metodo,
          valorTotal: total,
          valorRecebido,
          troco: valorRecebido ? valorRecebido - total : 0
        }
      };

      console.log('Dados do pedido:', dadosPedido);
      
      // Aqui você chamaria a API para criar o pedido
      // await criarPedido(dadosPedido);
      
      alert(`Compra finalizada via ${metodo.toUpperCase()}! ${valorRecebido ? `Troco: R$ ${(valorRecebido - total).toFixed(2)}` : ''}`);
      
      // Limpa carrinho e fecha modal
      setCarrinho([]);
      setShowCheckout(false);
    } catch (error) {
      console.error('Erro ao finalizar compra:', error);
      alert('Erro ao finalizar compra');
    }
  };

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
              produto={produto}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {carrinho.length > 0 && (
          <button 
            className="checkout-button"
            onClick={() => setShowCheckout(true)}
          >
            Finalizar Compra ({carrinho.reduce((sum, item) => sum + item.quantidade, 0)} itens)
          </button>
        )}
      </main>

      {showCheckout && (
        <CheckoutModal
          carrinho={carrinho}
          onClose={() => setShowCheckout(false)}
          onConfirm={finalizarCompra}
        />
      )}

      <Footer />
    </div>
  );
}