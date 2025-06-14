 
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard'; // Você precisará criar esta página
import RegisterPage from './pages/RegisterPage';

// const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
//   const { usuario, loading } = useAuth();
//   if (loading) return <div>Carregando...</div>;
//   return usuario ? children : <Navigate to="/login" replace />;
// };

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/' element={<LoginPage />} />
        {/* <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>}
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
