 
import React, { useState } from 'react';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const { login, loading } = useAuth();
  const navigate = useNavigate();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    console.log('Tentando login com:', { email, senha });
    const data = await login(email, senha);
    console.log('Login bem-sucedido:', data);
    navigate('/');
  } catch (error) {
    console.error('Erro no login:', error);
    if (error instanceof Error) {
      setError(error.message);
    } else {
      setError('Erro desconhecido ao fazer login.');
    }
  }
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 disabled:opacity-50"
      >
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
};

export default LoginForm;