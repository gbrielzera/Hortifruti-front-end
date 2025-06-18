import axios from 'axios';

const API_URL = 'http://localhost:3000/metodo-pagamento';

export interface MetodoPagamento {
  id: number;
  tipo: string;
  numeroCartao?: string;
  nomeTitular?: string;
  validade?: string;
  chavePix?: string;
  id_usuario: number;
}

export const getMetodosPagamento = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

export const getMetodoPagamentoById = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createMetodoPagamento = async (data: Omit<MetodoPagamento, 'id'>) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const updateMetodoPagamento = async (id: number, data: Partial<MetodoPagamento>) => {
  const response = await axios.patch(`${API_URL}/${id}`, data);
  return response.data;
};

export const deleteMetodoPagamento = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export const getTiposPagamento = async () => {
  const response = await axios.get(`${API_URL}/tipos`);
  return response.data;
};
