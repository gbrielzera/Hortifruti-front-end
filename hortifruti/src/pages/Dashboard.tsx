import Navbar from "../components/Dash/Navbar";
import Footer from "../components/Dash/Footer";
import ProductCard from "../components/Dash/ProductCard";
import '../styles/Dashboard.css'

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <main className="main-content">
        <h1>Bem-vindo ao Dashboard Hortifruti</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae.
        </p>

        <div className="product-grid">
          <ProductCard
            nome="Maçã"
            imagem="https://source.unsplash.com/400x300/?apple"
            preco="R$ 4,99/kg"
          />
          <ProductCard
            nome="Banana"
            imagem="https://source.unsplash.com/400x300/?banana"
            preco="R$ 3,99/kg"
          />
          <ProductCard
            nome="Alface"
            imagem="https://source.unsplash.com/400x300/?lettuce"
            preco="R$ 2,99/unid"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
