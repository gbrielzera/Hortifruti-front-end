// src/types/auth.ts

// 1. Enum para os tipos de usuário (mantendo igual ao backend)
export enum UserRole {
  USER = 'USER',
  ENTREGADOR = 'ENTREGADOR',
  LOJISTA = 'LOJISTA',
}

// 2. Interface para Endereço (igual à entidade do backend)
export interface Endereco {
  id_endereco: number;
  rua: string;
  cep: string;
  complemento: string;
}

// 3. Interface principal do Usuário (ajustada para o frontend)
export interface Usuario {
  id_usuario: number;
  username: string;
  email: string;
  role: UserRole;
  endereco: Endereco | null;
  // Campos adicionais que podem vir da API:
  // telefone?: string;
  // data_cadastro?: string;
}

// 4. Tipos para autenticação
export interface LoginRequest {
  email: string;
  senha: string;
}

export interface LoginResponse {
  token: string;
  usuario: Usuario; // Omitindo a senha mesmo que venha da API
}

// 5. Tipo para erros da API (opcional)
export interface ApiError {
  statusCode: number;
  message: string;
  error?: string;
}