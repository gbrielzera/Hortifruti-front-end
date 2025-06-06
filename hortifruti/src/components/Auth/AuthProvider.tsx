 
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Usuario } from '../../types/auth'; // Alterado para type-only import
import { login as apiLogin, getProfile } from '../../api/auth';

interface AuthContextType {
  usuario: Usuario | null;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (email: string, senha: string) => {
    setLoading(true);
    try {
      const { token, usuario } = await apiLogin(email, senha);
      localStorage.setItem('token', token);
      setUsuario(usuario);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUsuario(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getProfile().then(setUsuario).catch(logout);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ usuario, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth deve ser usado dentro de AuthProvider');
  return context;
};