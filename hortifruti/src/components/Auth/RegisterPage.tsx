/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/RegisterPage.tsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [role, setRole] = useState("USER");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/auth/register", {
        username,
        email,
        senha,
        role,
      });
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error: any) {
      alert("Erro no cadastro: " + (error.response?.data?.message || "erro"));
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="USER">Usuário</option>
          <option value="ENTREGADOR">Entregador</option>
          <option value="LOJISTA">Lojista</option>
        </select>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
