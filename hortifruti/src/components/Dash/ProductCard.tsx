import '../../styles/Dashboard.css'
import { useState } from 'react'
import CartModal from './CartModal'
import type { Produto } from '../../types/produto'

interface ProductCardProps {
  produto: Produto;
  onAddToCart: (produto: Produto, quantidade: number) => void;
}

export default function ProductCard({ produto, onAddToCart }: ProductCardProps) {
  const [showModal, setShowModal] = useState(false)

  const handleAddToCart = (quantity: number) => {
    onAddToCart(produto, quantity)
    setShowModal(false)
  }

  // Formata os valores para exibição
  const precoFormatado = `R$ ${produto.valor.toFixed(2)}`
  const estoqueFormatado = `Estoque: ${produto.estoque?.quantidade ?? 0} unidades`
  const imagem = produto.imagem || `https://source.unsplash.com/400x300/?${produto.categoria.nome_categoria}`

  return (
    <>
      <div className="product-card" onClick={() => setShowModal(true)}>
        <img src={imagem} alt={produto.nome} />
        <h3>{produto.nome}</h3>
        <p>{precoFormatado}</p>
        <p>{estoqueFormatado}</p>
        <button 
          className="add-to-cart-btn"
          onClick={(e) => {
            e.stopPropagation()
            setShowModal(true)
          }}
        >
          Comprar
        </button>
      </div>
      
      {showModal && (
        <CartModal 
          produto={produto}
          onClose={() => setShowModal(false)}
          onConfirm={handleAddToCart}
        />
      )}
    </>
  )
}