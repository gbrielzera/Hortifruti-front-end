import { useState } from "react";
import type { Produto } from "../../types/produto";

type MetodoPagamento = 'pix' | 'cartao' | 'dinheiro';

interface CheckoutModalProps {
  carrinho: { produto: Produto, quantidade: number }[];
  onClose: () => void;
  onConfirm: (metodo: MetodoPagamento, valorRecebido?: number) => void;
}

export default function CheckoutModal({ carrinho, onClose, onConfirm }: CheckoutModalProps) {
  const [metodoPagamento, setMetodoPagamento] = useState<MetodoPagamento>('pix');
  const [valorRecebido, setValorRecebido] = useState('');
  const [etapa, setEtapa] = useState<'carrinho' | 'pagamento'>('carrinho');

  const total = carrinho.reduce(
    (sum, item) => sum + (item.produto.valor * item.quantidade),
    0
  );

  const handleConfirmarPagamento = () => {
    if (metodoPagamento === 'dinheiro' && (!valorRecebido || parseFloat(valorRecebido) < total)) {
      alert('Valor recebido insuficiente!');
      return;
    }
    
    onConfirm(
      metodoPagamento,
      metodoPagamento === 'dinheiro' ? parseFloat(valorRecebido) : undefined
    );
  };

  if (etapa === 'carrinho') {
    return (
      <div className="modal-overlay">
        <div className="checkout-modal">
          <h2>Seu Carrinho</h2>
          <div className="cart-items">
            {carrinho.map((item, index) => (
              <div key={index} className="cart-item">
                <span>{item.produto.nome}</span>
                <span>{item.quantidade}x</span>
                <span>R$ {(item.produto.valor * item.quantidade).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <span>Total:</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
          <div className="modal-actions">
            <button className="cancel-button" onClick={onClose}>Voltar</button>
            <button className="confirm-button" onClick={() => setEtapa('pagamento')}>
              Confirmar Compra
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay">
      <div className="checkout-modal">
        <h2>Pagamento</h2>
        
        <div className="form-group">
          <label>Método de Pagamento:</label>
          <select
            value={metodoPagamento}
            onChange={(e) => setMetodoPagamento(e.target.value as MetodoPagamento)}
          >
            <option value="pix">PIX</option>
            <option value="cartao">Cartão de Crédito</option>
            <option value="dinheiro">Dinheiro</option>
          </select>
        </div>

        {metodoPagamento === 'dinheiro' && (
          <div className="form-group">
            <label>Valor Recebido:</label>
            <input
              type="number"
              value={valorRecebido}
              onChange={(e) => setValorRecebido(e.target.value)}
              placeholder="Digite o valor recebido"
              min={total}
              step="0.01"
            />
            {valorRecebido && parseFloat(valorRecebido) > 0 && (
              <small>Troco: R$ {(parseFloat(valorRecebido) - total).toFixed(2)}</small>
            )}
          </div>
        )}

        <div className="payment-summary">
          <p>Total a pagar: <strong>R$ {total.toFixed(2)}</strong></p>
        </div>

        <div className="modal-actions">
          <button className="cancel-button" onClick={() => setEtapa('carrinho')}>
            Voltar
          </button>
          <button className="confirm-button" onClick={handleConfirmarPagamento}>
            Finalizar Pagamento
          </button>
        </div>
      </div>
    </div>
  );
}