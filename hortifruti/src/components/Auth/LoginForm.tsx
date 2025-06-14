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
      await login(email, senha);
      console.log('Login bem-sucedido');
      
      // Redireciona para uma página qualquer (exemplo: /dashboard)
      navigate('/dashboard');
      
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
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <div>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
          required
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Entrando..." : "Entrar"}
      </button>

      <div className="text-center mt-3 text-sm">
        <p>Não tem uma conta? 👇</p>
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="mt-1 text-green-600 hover:underline font-semibold"
        >
          Cadastre-se
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
