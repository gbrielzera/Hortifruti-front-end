export interface MetodoPagamento {
  id: number;
  tipo: string;
  numeroCartao?: string;
  nomeTitular?: string;
  validade?: string;
  chavePix?: string;
  id_usuario: number;
}
