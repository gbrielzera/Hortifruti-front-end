import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

// Por enquanto pegando loja de ID 1
export const getProdutos = async () => {
  const response = await api.get('/produto/loja/1');
  return response.data;
};
