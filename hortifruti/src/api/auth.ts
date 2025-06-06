import axios from 'axios';
import type { Usuario } from '../types/auth';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Configuração global do Axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para adicionar o token automaticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (usernameOrEmail: string, senha: string) => {
  try {
    console.log('Tentando login com:', { usernameOrEmail, senha });
    
    // Envia como "username" (mesmo que seja email)
    const response = await axios.post(`${API_URL}/auth/login`, {
      username: usernameOrEmail, // Chave deve ser "username"
      senha
    });

    console.log('Resposta do backend:', response.data);
    return response.data;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro detalhado:', {
        request: error.config?.data,
        response: error.response?.data
      });
    } else {
      console.error('Erro desconhecido:', error);
    }
    throw error;
  }
};

export const getProfile = async (): Promise<Usuario> => {
  // O token será injetado automaticamente pelo interceptor
  const response = await api.get('/usuario');
  return response.data[0];
};

export const logout = () => {
  localStorage.removeItem('token');
  // Opcional: remover do axios também
  delete api.defaults.headers.common['Authorization'];
};