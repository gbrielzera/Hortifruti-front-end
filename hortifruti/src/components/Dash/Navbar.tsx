import { FaUserCircle } from "react-icons/fa";
import '../../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Hortifruti</div>
      <div className="links">
        <a href="#">Início</a>
        <a href="#">Produtos</a>
        <a href="#">Pedidos</a>
      </div>
      <div className="profile-icon">
        <FaUserCircle />
      </div>
    </nav>
  );
}
