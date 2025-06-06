 
import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage'; // Você precisará criar esta página
import { useAuth } from './components/Auth/AuthProvider';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { usuario, loading } = useAuth();
  if (loading) return <div>Carregando...</div>;
  return usuario ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
