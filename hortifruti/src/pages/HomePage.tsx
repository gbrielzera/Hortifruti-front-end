import React from 'react';
import { useAuth } from '../components/Auth/AuthProvider';

const HomePage = () => {
  const { usuario, logout } = useAuth();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Bem-vindo, {usuario?.username}!</h1>
      <p>Email: {usuario?.email}</p>
      <p>Tipo: {usuario?.role}</p>
      <button
        onClick={logout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Sair
      </button>
    </div>
  );
};

export default HomePage;