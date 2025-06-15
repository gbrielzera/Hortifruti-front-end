import { useState } from 'react'
import { type Produto } from '../../types/produto'

interface CartModalProps {
  produto: Produto;
  onClose: () => void;
  onConfirm: (quantity: number) => void;
}

export default function CartModal({ produto, onClose, onConfirm }: CartModalProps) {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Adicionar ao carrinho</h2>
        <p>{produto.nome}</p>
        <p>Preço unitário: R$ {produto.valor.toFixed(2)}</p>
        
        <div className="quantity-control">
          <label htmlFor="quantity">Quantidade:</label>
          <input
            id="quantity"
            type="number"
            min="1"
            max={produto.estoque?.quantidade || 1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <span>Máx: {produto.estoque?.quantidade || 0}</span>
        </div>

        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>Cancelar</button>
          <button className="confirm-btn" onClick={() => onConfirm(quantity)}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )
}